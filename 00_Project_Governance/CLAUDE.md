# Medical Informatics – Project Instructions

Status: **v0.2** · Last updated: 2026-11-12

## 1. Project Context

Develop teaching and learning materials for the Year 3 Diploma in Biomedical Science (BMS), Ngee Ann Polytechnic, Singapore.

The module covers Medical Informatics, healthcare information systems, laboratory informatics, healthcare data, interoperability, analytics, digital health, AI and data governance.

Students have a biomedical science background but are not computer science students.

## 2. Academic Authority

- The approved module architecture, MLOs and weekly syllabus are authoritative.
- Existing lecture notes, PowerPoint slides and practical materials are the primary content sources.
- Do not introduce new topics or change the intended learning outcomes without explicit approval.
- Do not remove important scientific explanations merely to simplify the materials.
- Distinguish established facts, emerging technologies and illustrative examples.
- Use Singapore healthcare examples wherever relevant, including MOH, Synapxe, NEHR, HealthHub and healthcare institutions.

## 3. Pedagogical Requirements

- Develop materials appropriate for Year 3 BMS students.
- Emphasise biomedical and healthcare applications rather than computer programming.
- Use authentic healthcare and laboratory scenarios.
- Integrate active learning, case studies, data interpretation and problem-solving.
- Incorporate the Anchor, Augment and Advance approach to GenAI.
- Maintain constructive alignment between learning outcomes, teaching activities and assessment.

## 4. Learning Material Design

Develop interactive, visually engaging and accessible learning materials.

Use:

- Clear explanations and visual representations.
- Healthcare and biomedical case studies.
- Interactive knowledge checks.
- Formative assessments.
- Practical applications and simulations.
- Reflection and application activities.

Provide lecturer narration scripts where appropriate.

## 5. Technical Requirements

- Develop reusable SCORM 1.2 learning packages.
- Ensure compatibility with NP Brightspace.
- Support bookmarking, completion status and assessment score tracking.
- Include accessible navigation and visible audio controls where narration is provided.
- Use local assets where possible.
- Ensure the SCORM package has the correct `imsmanifest.xml` and launch files.

## 6. Quality Assurance

Before releasing any learning material, check:

1. Scientific and technical accuracy.
2. Alignment with the approved MLOs.
3. Completeness of the original teaching content.
4. Clarity and suitability for BMS students.
5. Accuracy of Singapore healthcare examples.
6. Assessment validity and answer accuracy.
7. Accessibility and usability.
8. SCORM technical compatibility.

Never assume that generated content is academically correct. Flag uncertain information for lecturer review.

## 7. Development Approach

- Work on one reference week first.
- Obtain approval of the storyboard and learning architecture before implementation.
- Establish a reusable template and technical framework.
- Reuse the approved framework for subsequent weeks.
- Do not overwrite original source materials.
- Maintain version control and document all significant changes.

---

## 8. Project Reference

### Governing files (`00_Project_Governance/`)

| File | Governs |
|---|---|
| `Weekly_Syllabus.md` | **Authoritative** 10-week syllabus v0.2.4: MLOs, topics, WLOs, content boundaries, practicals, Patient A case state, lens, privacy decisions, GenAI stages, Singapore verification, glossary |
| `Approved_MLOs.md` | Approved MLOs (1 Nov 2026) and MLO × week map, extracted from the syllabus |
| `Module_Architecture.md` | Summary of purpose, learning journey, 10-week structure, design threads, missing referenced documents |
| `Development_Standards.md` | Naming, versioning, content, accessibility, SCORM, QA |
| `02_Constructive_Alignment_Matrix_v0.1.1.md` | Alignment matrix v0.1.3: MLO × week, WLO → MLO (40 WLOs), MLO component coverage, gaps G1–G7 |
| `03_Assessment_Blueprint_v0.1.md` | Blueprint v0.1.2: C1–C3 (Option A), criteria, GenAI/integrity rules; weights/dates TBC |
| `00_Module_Design_Principles.md` | Module identity, conceptual model, progression, design principles, items requiring confirmation |
| `04_Teaching_and_Learning_Design_v0.1.md` | T&L design v0.1.2: **weekly package specification** — OAL (8 segments, 120 min) and practical (7 segments, 120 min) templates, ≤ 5 key concepts, workload, formative item standard, quiz settings, GenAI/PAIR rules, accessibility, QA |
| `06_Case_State_Register_v0.1.md` | Register v0.3: **single authority for Patient A facts, values, identifiers and release week**; Week 10 transfer case |

Design documents elsewhere:

| File | Contents |
|---|---|
| `02_Learning_Design/05_Weekly_Learning_Architecture_W2-W10_v0.1.md` | Stage A designs W2–W10 (v0.3): weekly template, PAIR map, central questions, big ideas, OAL/practical outlines, open decisions D8–D15 |
| `03_Development/Week_01/W01_Stage_A_Instructional_Design_v0.1.md` | Week 1 Stage A design (reference week) |
| `03_Development/Week_01/W01_Stage_B_OAL_Storyboard_v0.1.md` | W1 OAL storyboard **v0.1.1** — approved gate B; D10 applied |
| `03_Development/Week_01/W01_Stage_B_Practical_Package_v0.1.md` | W1 practical package v0.1 — draft, gate B |
| `03_Development/Week_01/W01_Stage_C_Formative_Quiz_v0.1.md` | W1 formative quiz v0.1 — draft, gate C; I11 ("Suppose…" stems for Q5, Q6, Q8) pending |

Filename aliases used inside these documents:

| Cited as | File in this repository |
|---|---|
| `01_Approved_10_Week_Syllabus_v0.2.2.md`, `10_Week_Syllabus_v0.2.md` | `00_Project_Governance/Weekly_Syllabus.md` |
| `20_Constructive_Alignment_Matrix_v0.1.md` | `00_Project_Governance/02_Constructive_Alignment_Matrix_v0.1.1.md` |
| `30_Assessment_Blueprint_v0.1.md` | `00_Project_Governance/03_Assessment_Blueprint_v0.1.md` |
| `W01/` … `W10/` | `03_Development/Week_01/` … `Week_10/` |

Case rule: every Patient A fact must match `06_Case_State_Register_v0.1.md`; update the register in the same change when a week adds a fact.

Module: **10 weeks**, 2 h OAL + 2 h practical/week. Patient A runs Weeks 1–9; Week 10 is a new case (community INR POCT network).

Precedence when files conflict: Weekly_Syllabus > Approved_MLOs > Alignment Matrix > Assessment Blueprint > Teaching & Learning Design > Case-State Register > Weekly Learning Architecture > Module Design Principles > Module_Architecture > Development_Standards. Exception: for Patient A facts, the Case-State Register prevails. Flag conflicts; do not resolve silently. If a weakness is found: problem → consequence → proposed revision → decision required.

### Folder map

| Folder | Contents |
|---|---|
| `01_Source_Materials/` | Original lecture notes, slides, scripts, practicals, assessments, references — **read-only** |
| `02_Learning_Design/` | Storyboards, activity designs, assessment blueprints |
| `03_Development/Week_XX/` | Working artefacts per week |
| `04_SCORM_Packages/` | Built SCORM 1.2 packages |
| `05_Quality_Assurance/` | Review reports, checklists, sign-offs |
| `06_Release/` | Approved, versioned release files only |

### Workflow gates

```
Source review → Storyboard + learning architecture → [APPROVAL]
→ Academic content → Visual/interactive build → QA review
→ SCORM build + Brightspace test → [SIGN-OFF] → Release
```

### Skills

| Task | Skill |
|---|---|
| Architecture / MLO changes | `curriculum-architecture` |
| Full weekly package | `build-week` |
| Lecture notes | `develop-lecture` |
| 2-h practical | `develop-practical` |
| Assessment | `design-assessment` |
| Pre-release review | `review-week` |

### End-of-task Alignment Check

- Module alignment:
- Weekly alignment:
- Cognitive level:
- 3As alignment:
- PAIR alignment:
- Singapore context:
- Biomedical relevance:
- Assessment alignment:
- Potential risks:
