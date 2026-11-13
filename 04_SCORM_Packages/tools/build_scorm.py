#!/usr/bin/env python3
"""Build a Medical Informatics SCORM 1.2 package for one week.

Usage:  python3 tools/build_scorm.py week01

Assembles framework/ (frozen shared components) + weeks/<week>/ (lesson data, transcripts,
audio) into build/<week>_scorm/, validates it, writes imsmanifest.xml and creates
dist/W<XX>_SCORM_v<version>.zip with the manifest at the ZIP root.
Only the requested week is built (Master Specification §43).
"""
import json
import re
import shutil
import sys
import zipfile
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parent.parent          # 04_SCORM_Packages/
SPEC = ROOT.parent / '00_Project_Governance' / 'SCORM_Master_Specification_v2.0_Medical_Informatics_10_Lessons.md'
SUSPEND_LIMIT = 4096
errors, warnings = [], []


def approved_titles():
    """Lesson titles from the Master Specification §50 table."""
    text = SPEC.read_text(encoding='utf-8')
    sec = text[text.index('# 50. TEN-LESSON CURRICULUM ALIGNMENT'):]
    return {m.group(1): m.group(2).strip() for m in re.finditer(r'^\|\s*(\d{2})\s*\|\s*(.+?)\s*\|\s*$', sec, re.M)}


def validate(week, content, questions, manifest, src):
    lesson = content['lesson']
    wk = lesson['weekNumber']
    titles = approved_titles()
    if titles.get(wk) != lesson['weeklyTitle']:
        errors.append(f'[CURRICULUM TITLE CONFLICT — LECTURER REVIEW REQUIRED] week {wk}: '
                      f'"{lesson["weeklyTitle"]}" vs §50 "{titles.get(wk)}"')
    ids = [s['id'] for s in content['screens']]
    expected = [f'W{wk}_S{i:02d}' for i in range(1, len(ids) + 1)]
    if ids != expected:
        errors.append(f'Screen IDs must be stable and sequential: {ids}')
    sections = {s['id'] for s in content['sections']}
    text_budget = 0
    for s in content['screens']:
        if s['section'] not in sections:
            errors.append(f'{s["id"]}: unknown section {s["section"]}')
        for b in s['blocks']:
            ref = b.get('ref')
            if b['type'] in ('interaction', 'response') and ref not in questions:
                errors.append(f'{s["id"]}: missing interaction {ref}')
            if b['type'] == 'interaction' and ref in questions:
                q = questions[ref]
                n = len(q.get('fields', [])) or (1 if q['type'] in ('reflection', 'shortanswer') else 0)
                text_budget += n * q.get('maxLength', 250)
        if s['id'] not in manifest:
            errors.append(f'{s["id"]}: no audio_manifest entry')
    for r in content['completion']['required']:
        if r['id'] not in questions:
            errors.append(f'completion rule refers to unknown interaction {r["id"]}')
    for sid, entry in manifest.items():
        if entry.get('narration_enabled') is True:
            t = src / entry['transcript']
            if not t.is_file():
                errors.append(f'{sid}: narration enabled but transcript missing ({entry["transcript"]})')
            if not entry.get('audio', '').startswith(f'audio/week{wk}/'):
                errors.append(f'{sid}: audio path must be relative under audio/week{wk}/')
    if text_budget > SUSPEND_LIMIT - 1200:
        warnings.append(f'free-text capacity {text_budget} chars may exceed suspend_data limit')
    return text_budget


def build(week):
    src = ROOT / 'weeks' / week
    content = json.loads((src / 'data' / 'content.json').read_text(encoding='utf-8'))
    questions = json.loads((src / 'data' / 'questions.json').read_text(encoding='utf-8'))
    manifest = json.loads((src / 'data' / 'audio_manifest.json').read_text(encoding='utf-8'))
    lesson = content['lesson']
    wk, version = lesson['weekNumber'], lesson['packageVersion']

    budget = validate(week, content, questions, manifest, src)
    if errors:
        print('BUILD FAILED'); [print('  ERROR', e) for e in errors]; sys.exit(1)

    out = ROOT / 'build' / f'{week}_scorm'
    if out.exists():
        shutil.rmtree(out)
    shutil.copytree(ROOT / 'framework', out)
    for sub in ('data', 'transcripts', 'audio', 'images'):
        if (src / sub).exists():
            shutil.copytree(src / sub, out / sub, dirs_exist_ok=True,
                            ignore=shutil.ignore_patterns('.gitkeep'))
    for doc in ('README.md', 'CHANGELOG.md'):
        if (src / doc).exists():
            shutil.copy2(src / doc, out / doc)

    # Built audio manifest: embed transcript text; status follows the MP3 actually present.
    audio_ready = 0
    for sid, entry in manifest.items():
        if entry.get('narration_enabled') is True:
            entry['transcript_text'] = (src / entry['transcript']).read_text(encoding='utf-8').strip()
            present = (src / entry['audio']).is_file()
            entry['status'] = 'ready' if present else 'missing'
            audio_ready += present
    (out / 'data' / 'audio_manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

    files = sorted(p.relative_to(out).as_posix() for p in out.rglob('*') if p.is_file())
    files = [f for f in files if f != 'imsmanifest.xml']
    title = f'Medical Informatics · Week {wk} · {lesson["weeklyTitle"]}'
    ident = f'NP_LSCT_MI_W{wk}'
    xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="{ident}_MANIFEST" version="{version}"
  xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
  xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">
  <metadata>
    <schema>ADL SCORM</schema>
    <schemaversion>1.2</schemaversion>
  </metadata>
  <organizations default="{ident}_ORG">
    <organization identifier="{ident}_ORG">
      <title>{escape(title)}</title>
      <item identifier="{ident}_ITEM" identifierref="{ident}_RES" isvisible="true">
        <title>{escape(title)}</title>
      </item>
    </organization>
  </organizations>
  <resources>
    <resource identifier="{ident}_RES" type="webcontent" adlcp:scormtype="sco" href="index.html">
''' + ''.join(f'      <file href="{escape(f)}"/>\n' for f in files) + '''    </resource>
  </resources>
</manifest>
'''
    (out / 'imsmanifest.xml').write_text(xml, encoding='utf-8')

    dist = ROOT / 'dist'
    dist.mkdir(exist_ok=True)
    zpath = dist / f'W{wk}_SCORM_v{version}.zip'
    with zipfile.ZipFile(zpath, 'w', zipfile.ZIP_DEFLATED) as z:
        z.write(out / 'imsmanifest.xml', 'imsmanifest.xml')
        for f in files:
            z.write(out / f, f)

    narr = sum(1 for e in manifest.values() if e.get('narration_enabled'))
    print(f'Built {zpath.relative_to(ROOT.parent)}')
    print(f'  screens {len(content["screens"])} · narrated {narr} · audio ready {audio_ready}/{narr} · files {len(files) + 1}')
    print(f'  free-text capacity {budget} chars (suspend_data limit {SUSPEND_LIMIT})')
    for w in warnings:
        print('  WARNING', w)


if __name__ == '__main__':
    if len(sys.argv) != 2:
        print(__doc__); sys.exit(2)
    build(sys.argv[1])
