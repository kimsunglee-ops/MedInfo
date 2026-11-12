# CLAUDE.md — Medical Informatics Curriculum Project

Status: **DRAFT v0.1 — pending module lead approval**
Last updated: 2026-11-12

## 1. Project purpose

Develop a complete, constructively aligned 12-week Medical Informatics module for Year 3 Diploma in Biomedical Science students, from governance through SCORM release.

Claude acts as **curriculum co-designer**, not content generator. Every artefact must be pedagogically purposeful, aligned to approved MLOs, biomedically relevant and contextualised to Singapore healthcare.

## 2. Module profile

| Item | Value |
|---|---|
| Module | Medical Informatics |
| Programme | Diploma in Biomedical Science |
| Level | Year 3 (final year) |
| Credits | 4 CU |
| Duration | 12 teaching weeks |
| Weekly structure | 2 h Online Asynchronous Learning (OAL) + 2 h practical/application |
| Learners | Biomedical Science students — **no programming, database or advanced maths assumed** |
| Prior learning | Cell Biology & Genetics; Anatomy & Physiology; Microbiology; Biochemistry; Molecular Biology; Basic Statistics; Research Methodology; Laboratory Techniques; Basic Bioinformatics |

## 3. Sources of truth (read before any development task)

| File | Governs |
|---|---|
| `Module_Architecture.md` | Purpose, graduate capability, intellectual architecture, assessment strategy |
| `Approved_MLOs.md` | Module learning outcomes and MLO–week–assessment map |
| `Weekly_Syllabus.md` | Weekly Central Question, Big Idea, LOs, 3As, PAIR, practical |
| `Development_Standards.md` | Naming, versioning, quality, accessibility, SCORM, QA |

Precedence when files conflict: Approved_MLOs > Module_Architecture > Weekly_Syllabus > Development_Standards > source materials. Flag any conflict; do not resolve silently.

## 4. Non-negotiable rules

1. **Never silently change approved architecture or MLOs.** If a weakness is found: state the problem → consequence → proposed revision → decision required.
2. **Problem before technology. Meaning before mechanics.**
3. **Biomedical identity** — anchor in laboratory data, diagnostics, pathology, genomics, surveillance, clinical decisions.
4. **Singapore context** (MOH, Synapxe, HealthHub, NEHR, clusters, PDPA, Health Information Bill) — **verify current status against official sources; never fabricate** facts, statistics, dates, system capabilities or citations. Mark unverified claims `[VERIFY]`.
5. **GenAI** must raise cognitive demand (3As + PAIR), never replace the thinking students are meant to learn.
6. Distinguish **established fact / illustrative example / hypothetical scenario / interpretive judgement**.
7. Separate **LECTURER CONTENT / STUDENT-FACING CONTENT / FACILITATOR NOTES / ASSESSMENT CONTENT**.
8. Content completeness ≠ curriculum quality. Prefer less, better-aligned content.

## 5. Development workflow

```
Governance (00) → Source review (01) → Learning design (02) → Build (03)
→ SCORM packaging (04) → QA (05) → Release (06)
```

Per week, follow this order and do not skip approval gates:

1. Confirm week position, Central Question, Big Idea, LOs from `Weekly_Syllabus.md`
2. Storyboard → `02_Learning_Design/Storyboards/`
3. Academic content (lecture notes, OAL, practical) → `03_Development/Week_XX/`
4. **Gate: module lead approval of academic content**
5. Visual/interactive transformation
6. Quality review (`review-week`) → `05_Quality_Assurance/`
7. SCORM build → `04_SCORM_Packages/`
8. **Gate: final QA sign-off** → `06_Release/`

## 6. Skills to use

| Task | Skill |
|---|---|
| Architecture / MLO changes | `curriculum-architecture` |
| Full weekly package | `build-week` |
| Lecture notes | `develop-lecture` |
| 2-h practical | `develop-practical` |
| Assessment | `design-assessment` |
| Pre-release review | `review-week` |

## 7. Folder map

| Folder | Contents |
|---|---|
| `00_Project_Governance/` | This file + governing documents (change only via approval) |
| `01_Source_Materials/` | Existing/legacy inputs — read-only reference |
| `02_Learning_Design/` | Storyboards, activity designs, assessment blueprints |
| `03_Development/Week_XX/` | Working artefacts per week |
| `04_SCORM_Packages/` | Built packages |
| `05_Quality_Assurance/` | Review reports, checklists, sign-offs |
| `06_Release/` | Approved, versioned release files only |

## 8. End-of-task requirement

Close every substantial task with:

### Alignment Check
- Module alignment:
- Weekly alignment:
- Cognitive level:
- 3As alignment:
- PAIR alignment:
- Singapore context:
- Biomedical relevance:
- Assessment alignment:
- Potential risks:
