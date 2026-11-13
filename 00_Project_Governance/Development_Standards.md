# Development Standards — Medical Informatics

Status: **DRAFT v0.1 — pending module lead approval**
Last updated: 2026-11-12

## 1. File naming

Follows the convention already used in the project documents.

**Weekly files:** `W<XX>_Stage_<S>_<Descriptor>_v<x.y>.<ext>`

| Part | Rule | Example |
|---|---|---|
| `W<XX>` | Two-digit week | `W01`, `W10` |
| `Stage_<S>` | Development stage: A = instructional design · B = OAL storyboard and practical materials · C = formative items (T&L Design §11) | `Stage_B` |
| `<Descriptor>` | Title_Case words joined by `_` | `OAL_Storyboard`, `Practical_Package`, `Formative_Quiz` |
| `v<x.y>` | Version at creation | `v0.1` |

Examples: `W01_Stage_A_Instructional_Design_v0.1.md`, `W01_Stage_B_OAL_Storyboard_v0.1.md`, `W01_Stage_C_Formative_Quiz_v0.1.md`

**Module-level files:** `<NN>_<Title>_v<x.y>.md`, two-digit prefix as already assigned (`00_`, `02_`, `03_`, `04_`, `05_`, `06_`, `50_`). New module-level files take an unused prefix.

**Other weekly outputs:** `W<XX>_SCORM_v<x.y>.zip` (package) · `W<XX>_QA_Review_v<x.y>.md` (QA report) · datasets `W<XX>_Stage_B_<Descriptor>.csv`.

**Stable filenames:** the filename keeps its original version once other documents cite it; the current version is recorded in the document header (e.g. `W01_Stage_B_OAL_Storyboard_v0.1.md` holds v0.1.1). Do not rename cited files without updating every reference.

No spaces. Dates only inside files, not filenames.

## 2. Versioning and status

| Version | Meaning |
|---|---|
| `v0.x` | Draft / under development |
| `v1.0` | Approved for build/release |
| `v1.x` | Minor approved revision (typos, clarifications) |
| `v2.0` | Major revision (LO, structure or assessment change) |

Status label at top of every document: `DRAFT` → `IN REVIEW` → `APPROVED` → `RELEASED`.
Only `APPROVED` artefacts move to `04_SCORM_Packages/`; only `RELEASED` artefacts go in `06_Release/`.

## 3. Weekly package — required contents (`03_Development/Week_XX/`)

> `04_Teaching_and_Learning_Design_v0.1.md` §11 is the authoritative package specification; this list is a file checklist only.

| # | Artefact | Audience |
|---|---|---|
| 1 | Week design (alignment matrix, journey, workload) | Lecturer |
| 2 | Lecture notes | Lecturer |
| 3 | OAL learning objects (4–6) + script | Student / Lecturer |
| 4 | Practical handout | Student |
| 5 | Facilitator guide (answers, timing, misconceptions) | Facilitator |
| 6 | Synthetic dataset(s) + data dictionary | Student |
| 7 | Formative questions with answers/feedback | Student / Lecturer |
| 8 | PAIR task sheet | Student |
| 9 | Source & verification log | Lecturer |

## 4. Content standards

- Label sections: **LECTURER CONTENT / STUDENT-FACING CONTENT / FACILITATOR NOTES / ASSESSMENT CONTENT**.
- Label claims: **Established fact / Illustrative example / Hypothetical scenario / Interpretive judgement**.
- Student language: accessible to Year 3 Biomedical Science; define technical terms on first use; no unexplained acronyms.
- Technical depth: conceptual; no programming. Tools: spreadsheet, public browsers, provided dashboards, no-code demos, sandbox systems.
- Every activity traces: LO → experience → student action → evidence → assessment.

## 5. Accuracy, sources and citation

- Use **APA 7th** referencing **[VERIFY institutional style]**.
- Never fabricate citations, statistics, legal provisions, system capabilities or dates.
- Singapore facts: prefer MOH, Synapxe, HealthHub, Singapore Statutes Online, HSA, PDPC, official gov.sg sources.
- Mark unverified claims `[VERIFY]`; none may remain at `APPROVED`.
- Maintain a per-week **Source & verification log**: claim · source · URL · date checked · checker.
- Re-verify all Singapore policy/legal content before each annual release.

## 6. Data standards

- **Synthetic or openly licensed data only.** No real patient, staff or institutional data.
- Every dataset ships with a data dictionary (field, type, unit, allowed values, deliberate errors for teaching).
- Units SI by default; state reference intervals and their source.
- Cases must not resemble identifiable individuals or depict internal processes of named institutions as fact.

## 7. GenAI standards

- Each GenAI activity documents PAIR: Problem · AI tool & why · Interaction steps · Reflection/verification.
- Specify: what AI does / what students do / what students must independently verify.
- AI must raise cognitive demand; reject tasks where AI produces the answer students are meant to learn.
- Use only institutionally approved GenAI tools **[VERIFY approved list]**; no patient-like data entered into public tools.
- Assessments state permitted AI use and require a declaration **[VERIFY institutional GenAI policy]**.
- AI-assisted development of these materials is disclosed in the verification log; all AI-generated content is checked by a human before `APPROVED`.

## 8. Workload limits

> `04_Teaching_and_Learning_Design_v0.1.md` §2–§3 (OAL and practical segment timings, ≤ 5 key concepts, ~4 h/week) prevails over this table.

| Component | Limit |
|---|---|
| OAL total | ≤ 120 min including checks |
| Learning objects per week | 4–6 |
| Single video/microlecture | ≤ 8 min |
| Reading | ≤ 15 min per item |
| Practical | 120 min, incl. ≥ 10 min reflection |
| Self-directed | ≤ 2 h/week outside assessment weeks |

Flag any week exceeding limits in its week design.

## 9. Visual and accessibility standards

- Priority: meaning → clarity → accuracy → accessibility → consistency → polish.
- One dominant idea per slide/screen; progressive disclosure for complex models.
- Use preferred visual structures (system map, process flow, data-flow diagram, comparison table, decision tree, case card).
- Target **WCAG 2.1 AA** (proposed; T&L Design §9 defers the standard to the Production Specification, not yet supplied): contrast ≥ 4.5:1, alt text on all images, captions/transcripts for all audio/video, no colour-only meaning, keyboard-navigable interactions, restrained animation.
- Apply approved NP/LSCT brand kit if available; do not invent brand rules.
- Visuals must not imply false causation, false clinical certainty or nonexistent Singapore processes.

## 10. SCORM standards

- Standard: **SCORM 1.2**; target LMS: **NP Brightspace**.
- One reusable package per week: `W<XX>_SCORM_v<x.y>.zip`, built from the approved reference-week template.
- Valid `imsmanifest.xml` and launch file at package root.
- Tracking: bookmarking (`cmi.core.lesson_location` / `cmi.suspend_data`), completion status (`cmi.core.lesson_status`), assessment score (`cmi.core.score.raw`).
- Completion: all learning objects viewed + formative check attempted.
- Narration: visible, keyboard-accessible audio controls; transcript provided.
- Assets local to the package where possible; no reliance on external CDNs.
- Test in SCORM Cloud (or equivalent) and NP Brightspace before release; record results in `05_Quality_Assurance/`.
- Mobile-responsive; works in current Chrome, Edge, Safari.

## 11. Quality assurance

Run `review-week` for every week before `APPROVED`. Minimum checklist:

- [ ] Scientific and technical accuracy checked; uncertain content flagged for lecturer review
- [ ] Original teaching content complete (nothing important removed)
- [ ] Assessment answers verified
- [ ] LOs measurable and mapped to MLOs
- [ ] Central Question and Big Idea evident in OAL and practical
- [ ] 3As and PAIR present and cognitively meaningful
- [ ] Practical follows Problem → Data → Interpretation → Decision → Justification → Reflection
- [ ] Evidence of learning matches LO verb/level
- [ ] Singapore context verified; no `[VERIFY]` tags remain
- [ ] Synthetic data only; data dictionary present
- [ ] Workload within limits
- [ ] Accessibility checks passed
- [ ] Continuity with previous/next week stated
- [ ] SCORM 1.2 tested in NP Brightspace (bookmark, completion, score)

Sign-off recorded in `05_Quality_Assurance/W<XX>_QA_Review_v<x.y>.md`: reviewer, date, outcome, actions.

## 12. Change control

Changes to governance files: problem → consequence → proposed revision → module lead decision → version increment and log entry.

| Version | Date | Change | Approved by |
|---|---|---|---|
| 0.1 | 2026-11-12 | Initial draft | — |
