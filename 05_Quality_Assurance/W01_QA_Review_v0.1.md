# Week 01 — QA Review

**Package:** `04_SCORM_Packages/dist/W01_SCORM_v0.1.zip`
**Version:** 0.1 (13 November 2026)
**Reviewer:** Claude (automated and document checks) — **lecturer review and Brightspace test outstanding**
**Outcome:** Ready for lecturer review. **Not yet ready for release** (see §6).

---

## 1. Technical QA (Master Specification §38)

| Check | Result | Evidence |
|---|---|---|
| Navigation, buttons, JavaScript | Pass | 24 screens traversed with Next; Contents jumps; no console or page errors |
| SCORM API | Pass (mock) | `LMSInitialize`, `LMSGetValue`, `LMSSetValue`, `LMSCommit`, `LMSFinish` exercised against a SCORM 1.2 mock |
| Progress / bookmark | Pass | `cmi.core.lesson_location` = current screen ID |
| Resume | Pass | Reload returns to W01_S24; quiz results and responses restored |
| Completion | Pass | `completed` only after 24 screens viewed + rules acknowledged + quiz attempted |
| Score | Pass | `cmi.core.score.raw` = best quiz %, min 0, max 100 |
| suspend_data | Pass | 425 characters after full run; free-text capacity 1,950 of 4,096 |
| Session time | Pass | `0000:00:06.21` format |

## 2. Audio QA

| Check | Result |
|---|---|
| Audio control visible on all 12 narration-enabled screens | Pass |
| No audio control on the 12 non-narrated screens | Pass |
| Missing MP3 → State B ("Narration will be available here.") | Pass (all 12) |
| MP3 present → State A, controls enabled, duration shown | Pass (test file, not shipped) |
| Error → State C message | Pass |
| Transcript opens without audio | Pass (all 12) |
| Audio does not block navigation | Pass |
| `audio_started` / `audio_completed` tracked separately from completion | Pass |

## 3. Package QA

| Check | Result |
|---|---|
| `imsmanifest.xml` at ZIP root, well-formed, SCORM 1.2 schema version | Pass |
| All 24 package files listed in the manifest; relative paths | Pass |
| No external dependencies (no CDN, fonts or remote scripts) | Pass. External links only to cited sources, opening in a new tab |
| SCORM schema files (`.xsd`) included | **Not included.** Usually not needed by Brightspace; add if the import rejects the package |

## 4. Header QA (frozen header rule §8)

| Check | Result |
|---|---|
| Module label exactly `Medical Informatics` | Pass |
| Two-digit week number; separator `·` | Pass |
| Title matches §50: "Introduction to Medical Informatics and the Healthcare Information Ecosystem" | Pass (enforced by build) |
| Rendered by `renderHeader()` from shared framework | Pass |
| Consistent in NP Brightspace | **Not yet tested** |

## 5. Accessibility QA

| Check | Result |
|---|---|
| Keyboard: all controls are native buttons, inputs and selects; skip link; Escape closes Contents | Pass (by construction) |
| Focus visible; focus moves to screen title on navigation | Pass |
| Labels on every input, select and range control | Pass |
| Contrast: primary `#0b5f73` on white ≈ 7.3:1 | Pass |
| Meaning not by colour alone: risk symbols differ by shape; feedback states use text ("Correct", "Not quite") | Pass |
| Images: diagrams are HTML text; three SVG risk symbols have accessible names | Pass |
| No horizontal overflow at 375 px | Pass (3 screens sampled) |
| Screen-reader test (NVDA or VoiceOver) | **Not yet done** |

## 6. Content and pedagogical QA — for lecturer review

### 6.1 Cross-Week Narrative Continuity Check (§49.5)

| Entity | Status | Where introduced |
|---|---|---|
| Patient A | NEW | W01_S02 "Meet Patient A" |
| Patient B (teaching example only) | NEW | W01_S05, labelled "a fictional clinic patient" |
| Riverside General Hospital | NEW | W01_S23 case card (matches case register §2, W1) |
| MOH, Synapxe, clusters, NEHR, HealthHub | NEW | W01_S14 |
| Data/information/knowledge, hand-offs, error/delay/loss, CIA | NEW | Parts 2, 3, 5 |

No wording implies prior knowledge of anything not introduced earlier in this lesson. References like "Week 2 returns to…" point forward only. Patient A facts used: diabetes, outpatient clinic, renal panel incl. potassium, HbA1c, Riverside General Hospital, receipt 10:15 — all released in Week 1 per `06_Case_State_Register_v0.1.md`. No Patient A result values appear.

### 6.2 Differences from the approved storyboard (decision needed)

| # | Item | Change | Reason |
|---|---|---|---|
| 1 | Narration | Draft scripts total ≈1,900 words (≈14 min) vs ≈30 min planned | Written from storyboard key points; lecturer to review and extend |
| 2 | LO2-S3, LO4-S3 drag-and-drop | Delivered as dropdowns | Storyboard already requires a keyboard alternative; one accessible pattern avoids duplication |
| 3 | LO1-S2 case illustration; LO1-S1 banner/icon strip | Text case card; text journey strip | No approved images; avoids stock imagery |
| 4 | LO2-S5 "link to glossary" | Definitions shown on screen; no link | No glossary page in the package |
| 5 | W01_S14 | Adds that the Health Information Act passed in January 2026 and MOH intends effect from early 2027 | Storyboard sentence expanded with V-O facts [R1, R2] |
| 6 | W01_S20 | Adds one sentence: confidential institutional information, unreleased research data and passwords also stay out of public AI tools | Master Specification §8 |
| 7 | Quiz delivery | Quiz is inside the SCORM package; Stage C names a Brightspace quiz object | Choose one delivery route |

### 6.3 Accuracy items to re-verify before delivery

- Singapore facts on W01_S14, W01_S15, W01_S20 and quiz Q4 (register verified 1 Nov 2026; re-verify before each delivery, Syllabus §7.3).
- External source URLs open correctly from NP's network.

## 7. Acceptance standard (§46)

| Requirement | Status |
|---|---|
| Content accurate; LOs addressed; practical preparation coherent | Lecturer review pending |
| Navigation, progress, completion work as designed | Met (mock LMS) |
| Audio controls visible on all narration screens; missing audio keeps control; transcripts work | Met |
| Accessibility addressed | Met, screen-reader test pending |
| Package structure valid; no broken files | Met |
| Ready for Brightspace testing | **Yes** |
