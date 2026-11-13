# Module Architecture — Medical Informatics

Status: **Derived from `01_Approved_10_Week_Syllabus_v0.2.2.md` v0.2.5 (13 Nov 2026)** — the syllabus prevails on any difference.
Last updated: 2026-11-12

## 1. Module profile

| Item | Value |
|---|---|
| Programme | Diploma in Biomedical Science (BMS), Ngee Ann Polytechnic, School of Life Sciences & Chemical Technology |
| Students | Year 3 BMS — not computer science students |
| Duration | **10 weeks** |
| Weekly hours | 2 h OAL + 2 h practical/applied learning |
| Credits | 4 CU **[VERIFY]** |

## 2. Purpose and capability

**Purpose:** how healthcare data are generated, managed, exchanged, analysed and used to support healthcare delivery, laboratory operations and decision-making — emphasising understanding and evaluating systems and data workflows, not software development.

**Central learning question:**
> How does a test order become a reliable laboratory result, reach the right healthcare professional, and support an appropriate decision?

**Graduate capability:** examine a biomedical or healthcare information problem, identify the relevant data and systems, evaluate data quality and analytical outputs, recognise privacy and safety risks, and propose a reasoned improvement to a healthcare information workflow. Students are not expected to become software developers, diagnosticians or healthcare IT administrators.

## 3. Conceptual learning journey

```
TEST ORDER → HEALTHCARE SYSTEMS → LABORATORY DATA → VALIDATION
→ INFORMATION EXCHANGE → INSIGHT AND DECISION → TRUST AND GOVERNANCE
→ IMPLEMENTATION AND IMPROVEMENT
```

A teaching framework, not a strictly linear workflow; real processes interact and loop.

## 4. Ten-week structure

| Wk | Topic | Primary MLOs | Primary artefact | GenAI stage |
|---|---|---|---|---|
| 1 | Introduction to Medical Informatics and the Healthcare Information Ecosystem | 1, 2 | Information-journey map (Part 1) | Rule |
| 2 | Healthcare Information Systems and Clinical Workflows | 2 | Systems-layer map + one failure-mode analysis (Part 2) | — |
| 3 | Laboratory Data: Generation, Quality, Meaning and Context | 1 | Data-quality audit | Augment |
| 4 | Laboratory Information Management, Interoperability and Data Exchange | 2 | Interoperability comparison table | — |
| 5 | Laboratory Result Validation and Reporting Safety | 1, 2 | Result-review worksheet | Boundary |
| 6 | Healthcare Data Analytics, Visualisation and Decision Support | 3 | Chart + interpretation + output critique | Augment |
| 7 | Digital Health and Remote Healthcare | 4 | Digital-health evaluation matrix | Object |
| 8 | Healthcare Data Privacy, Cybersecurity, Ethics and Governance | 5 | Risk-assessment worksheet | Governance |
| 9 | Singapore's Healthcare Digital Ecosystem: Validation, Implementation and Transformation | 4, 6 | Implementation & evaluation plan + stakeholder summary | Advance |
| 10 | Integration and Application of Medical Informatics | 6 | Integrated case analysis + individual justification (**C3**) | Advance |

## 5. Design threads (every week)

| Thread | Rule |
|---|---|
| Longitudinal case | **Patient A** (fictional adult, type 2 diabetes, outpatient clinic; renal panel incl. potassium + HbA1c; not admitted) — Weeks 1–9. Values approved 12 Nov 2026 in `06_Case_State_Register_v0.1.md`. Week 10 uses a **new** case: community anticoagulation INR POCT network. |
| Case-state line | Each week states: established · new · do not assume. Students never depend on details not given. |
| Lens | Angle taken on recurring concepts (e.g. identifiers as workflow control W2 → data quality W3 → meaning between systems W4 → identity check before release W5). |
| Privacy decision | One embedded privacy judgement per practical, Weeks 1–6. |
| GenAI | Anchor → Augment → Advance per Syllabus §6.4; PAIR documented wherever AI is used; fictional data only; independent attempt first. |
| Primary artefact | One required output per practical. |

## 6. Key distinctions to protect

| Distinction | Where |
|---|---|
| Analytical QC vs individual-result validation vs population analytics vs CDS | W5–6 (Syllabus §6.5) |
| Evaluating **outputs** (MLO3, W6) vs **technologies** (MLO4, W7) | D2 |
| Technology fitness for purpose (W7) vs organisational implementation (W9) | D5 |
| "Validation" = result validation (W5) vs pre-implementation evaluation (W9) | Glossary |
| LIS (patient-centred) vs LIMS (sample-centred) | W4 |
| NEHR (key health information) vs HealthHub (patient-facing service) vs institutional systems | W1, W9 |
| Legal obligation vs good practice | W8 |

## 7. Boundaries

**Emphasise:** laboratory information workflows, data quality and context, interoperability, result validation, basic analytics, evaluation of outputs and tools, governance, Singapore applications.
**Do not teach in depth:** programming, databases, advanced statistics/ML, IT configuration, cybersecurity engineering, clinical diagnosis, legal interpretation, infrastructure engineering.
**Performance level:** explain, interpret, apply, analyse and evaluate using supplied information and defined scenarios.

## 8. Referenced documents

**In repository:** module design principles, Singapore context and sources (v0.1), teaching & learning design (v0.1.2), alignment matrix (v0.1.3), assessment blueprint (v0.1.2), case-state register (v0.3), weekly learning architecture W2–W10 (v0.3), Week 1 Stage A (v0.1), Stage B OAL storyboard (v0.1.1) and practical package (v0.1), Stage C quiz (v0.1).

**Cited but not yet in repository:**

| Document | Cited by | Needed for |
|---|---|---|
| W02–W10 Stage B packages, datasets, C3 case pack + marking guide | 05 §8, 06 | Practical materials |
| `scripts/gen_w10.py` | 06 §6 | W10 synthetic extract generator |

## 9. Open decisions (blocking approval — Syllabus §8 items 1–5)

1. Programme-outcome mapping.
2. Assessment weights, conditions and GenAI rules.
3. ~~MLO3/MLO4 wording~~ (closed).
4. Teaching calendar and C1–C3 dates.
5. Health Information Act commencement and subsidiary legislation — verify before each delivery.
