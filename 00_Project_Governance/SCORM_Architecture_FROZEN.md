# SCORM Architecture — Medical Informatics

**Status:** **DRAFT — to be frozen when Week 01 is tested in Brightspace and approved** (Master Specification §41)
**Version:** 0.1 (13 November 2026)
**Reference implementation:** `04_SCORM_Packages/framework/` + `04_SCORM_Packages/weeks/week01/` → `W01_SCORM_v0.1`
**Governed by:** `SCORM_Master_Specification_v2.0_Medical_Informatics_10_Lessons.md`

Once frozen, the components below are reused unchanged for Weeks 02–10. Changing them needs explicit approval (Master Specification §47 item 16, §48).

---

## 1. Source layout

```text
04_SCORM_Packages/
├── framework/                 FROZEN shared components (single source for all weeks)
│   ├── index.html
│   ├── css/styles.css
│   └── js/ scorm.js · progress.js · audio.js · assessment.js · app.js
├── weeks/weekXX/              week-specific content only
│   ├── data/ content.json · questions.json · audio_manifest.json
│   ├── transcripts/weekXX/WXX_SYY.txt
│   ├── audio/weekXX/WXX_SYY.mp3
│   ├── images/                (optional)
│   └── README.md · CHANGELOG.md
├── tools/build_scorm.py       validates and packages one week
├── build/weekXX_scorm/        assembled package (not committed)
└── dist/WXX_SCORM_vX.Y.zip    deliverable
```

A week never contains its own copy of HTML, CSS or JavaScript. The build copies `framework/` into each package, so every week inherits identical components.

## 2. Frozen components

| # | Component | File | Contract |
|---|---|---|---|
| 1 | Visible Header | `app.js` `renderHeader(weekNumber, weeklyTitle)`; `.mi-header*` in `styles.css` | Line 1 `Medical Informatics`; line 2 `Week XX · [title]`. Title must equal the Master Specification §50 table (the build fails otherwise). |
| 2 | Audio Control | `audio.js` `MIAudio.render()`; `.mi-audio*` | `narration_enabled → render component → determine state`. States A (available), B (missing: "Narration will be available here."), C (error: "Narration is currently unavailable. You may continue with the text content."). Play/pause, seek, time, volume, transcript toggle. Never hidden; never blocks navigation. |
| 3 | Student Response Capture | `progress.js` `setResponse/getResponse/markDone`; `assessment.js` | All responses stored in `cmi.suspend_data` under the interaction ID. Free-text fields have `maxLength` (default 250); the build reports total capacity against the 4,096-character limit. |
| 4 | Navigation | `app.js` `renderNav/renderMenu`; `.mi-nav`, `.mi-menu` | Back · Contents · Next. Free navigation (no locked screens). Contents lists parts and screens with viewed ticks and the completion requirements. Escape closes Contents. Focus moves to the screen title on every screen change. |
| 5 | Progress / Completion | `progress.js`; `app.js` `renderProgress`; `completion` block | "Screen n of N · m viewed" bar. Completion = all screens viewed + every item in `content.json → completion.required`. Audio never required. Status `incomplete` → `completed`; `passed/failed` not used. |
| 6 | Visual Design System | `styles.css` | CSS custom properties in `:root`; system font stack; no external fonts or assets; primary `#0b5f73`; risk symbols differ by shape. |
| 7 | SCORM runtime | `scorm.js` | SCORM 1.2 API discovery through parent frames and opener; preview mode (localStorage) when no LMS. Sets `lesson_location`, `suspend_data`, `lesson_status`, `score.raw/min/max`, `exit = suspend`, `session_time`. |

## 3. Week data contracts

### 3.1 `content.json`

```json
{
  "lesson": { "weekNumber": "01", "weeklyTitle": "…", "packageVersion": "0.1", "curriculumSource": "…", "storyboard": "…" },
  "completion": { "requireAllScreens": true, "quizId": "WXX_Q_quiz",
                  "required": [ { "id": "WXX_Q_…", "label": "…" } ] },
  "sections": [ { "id": "LO1", "title": "…", "minutes": 10 } ],
  "screens": [ { "id": "WXX_S01", "storyboardId": "WX-LO1-S1", "section": "LO1", "title": "…", "blocks": [ … ] } ]
}
```

Screen IDs are `WXX_SYY`, sequential from `S01`, and stable once published. Block types:

| Type | Fields | Use |
|---|---|---|
| `html` | `html`, `className?` | Text and HTML diagrams (`mi-cards`, `mi-journey`, `mi-steps`, `mi-pyramid`, `mi-risk`) |
| `callout` | `title`, `html`, `variant` (`info`, `note`, `case`) | Definitions, case cards, key points |
| `table` | `caption`, `head`, `rows`, `rowHeaders?` | Accessible data tables |
| `sources` | `title?`, `items[{text, url?, ref}]` | Citations; `ref` = Singapore register R-number |
| `interaction` | `ref` | Renders an item from `questions.json` |
| `response` | `ref`, `template`, `empty` | Shows a learner's earlier answer from this lesson |
| `completion` | — | Live completion checklist |

### 3.2 `questions.json`

Keyed by interaction ID (`WXX_Q_…`). Types: `predict`, `shortanswer`, `single` (MCQ, true/false), `order`, `classify` (also matching and scenario sorting), `annotate`, `reflection`, `acknowledge`, `quiz` (items of type `single` or `order`, `maxAttempts`, per-item `explanation`, `rationale`, `feedbackCorrect`, `feedbackIncorrect`, `shuffle`). Drag-and-drop is delivered as keyboard-accessible dropdowns.

### 3.3 `audio_manifest.json`

```json
{ "WXX_S01": { "narration_enabled": true, "audio": "audio/weekXX/WXX_S01.mp3",
               "transcript": "transcripts/weekXX/WXX_S01.txt", "status": "missing" },
  "WXX_S03": { "narration_enabled": false } }
```

Every screen has an entry. At build time the transcript text is embedded (`transcript_text`) and `status` is set from whether the MP3 exists. Rules: relative paths only; no base64 audio; no silent placeholder MP3s.

## 4. Build and validation

`python3 tools/build_scorm.py weekXX` fails the build if:

- the header title differs from §50 (`[CURRICULUM TITLE CONFLICT — LECTURER REVIEW REQUIRED]`);
- screen IDs are not sequential `WXX_SYY`;
- a block refers to a missing interaction or section;
- a screen has no audio-manifest entry;
- a narration-enabled screen has no transcript, or its audio path is not under `audio/weekXX/`.

It then writes `imsmanifest.xml` (single SCO, every file listed) and `dist/WXX_SCORM_vX.Y.zip` with the manifest at the root.

## 5. What a new week may change

Only `weeks/weekXX/` content: lesson metadata, sections, screens, blocks, questions, transcripts, audio and images. New block or interaction types, or any change under `framework/`, are architecture changes and need approval.

## 6. Testing record (reference implementation)

| Test | Result |
|---|---|
| Automated end-to-end, Chromium, mock SCORM 1.2 API (43 checks: header, 24 screens, audio state B on 12 narrated screens, transcripts, interactions, quiz scoring, `score.raw`, completion, bookmark, resume, session time, no console errors, no overflow at 375 px) | Pass, 13 Nov 2026 |
| Audio state A (test MP3) and state C (manifest `ready`, file absent) | Pass, 13 Nov 2026 |
| NP Brightspace launch, tracking, resume | **Not yet done** |
| Screen-reader check (NVDA/VoiceOver) | **Not yet done** |

## 7. Change log

| Version | Date | Change |
|---|---|---|
| 0.1 | 13 Nov 2026 | Draft created from the Week 01 gold-standard build |
