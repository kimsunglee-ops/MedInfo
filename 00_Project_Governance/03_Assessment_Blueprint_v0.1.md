# Medical Informatics — Assessment Blueprint
 
**Programme:** Diploma in Biomedical Science, Ngee Ann Polytechnic
**Module:** Medical Informatics (Year 3, 10 weeks)
**Version:** 0.1.2 (12 November 2026)
**Status:** Working draft (v0.1.1: alignment matrix G3 and G4 accepted; C3 setting decided; PAIR adopted. v0.1.2: G2 accepted, C1.6 added — curriculum owner, 12 Nov 2026)
**Baseline:** `01_Approved_10_Week_Syllabus_v0.2.2.md` (v0.2.4); `02_Constructive_Alignment_Matrix_v0.1.1.md` (v0.1.3); MLOs approved 1 Nov 2026
 
**Decision recorded:** Option A — three spaced summative components — selected by curriculum owner, 1 Nov 2026.
 
**Not set here:** weights, dates, durations, grading scale, moderation, resit and late-submission rules. These depend on NP requirements, which have not been supplied. All such fields are marked **TBC**.
 
---
 
## 1. Blueprint overview
 
| Component | Timing | MLOs assessed | Proposed format | Mode | GenAI (proposed) | Weight |
|---|---|---|---|---|---|---|
| **C1 Laboratory Information Task** | After Week 5 | MLO1, MLO2 | Structured analysis of a new fictional laboratory dataset, transfer record and result set | Individual; supervised | Not permitted | TBC |
| **C2 Evaluation Task** | After Week 7 | MLO3, MLO4 | Part A: analyse data and evaluate outputs. Part B: evaluate a digital-health or AI-enabled tool | Individual; written | Augment, with verification log | TBC |
| **C3 Integrated Case** | Week 10 | MLO5, MLO6 (MLO1–4 integrative) | Group case analysis + individual justification | Group + individual | Advance, with verification evidence | TBC |
 
**Coverage rule met:** every MLO is assessed summatively once, at its highest cognitive level, with individual evidence. MLO1–4 are used again in C3 but are **not re-graded** there, to avoid double counting.
 
---
 
## 2. Component specifications
 
### C1 — Laboratory Information Task (after Week 5)
 
**Purpose:** assess whether students interpret laboratory data in context and analyse how systems and exchange affect its reliability.
 
**Scenario:** a new fictional patient and laboratory (not Patient A), with three linked materials:
1. A small laboratory dataset containing seeded quality problems.
2. A source and destination record for one transferred result, with discrepancies.
3. A set of results with supplied reference intervals and validation rules.
**Student tasks:**
1. Identify and classify data-quality problems; explain their consequences using context, units and terminology.
2. Decide which problems can be corrected from a verified source and which require investigation or escalation.
3. Classify transfer discrepancies by interoperability level and explain their consequences.
4. Locate where in the workflow each problem arose and propose one control.
5. Classify each result as accept, hold or escalate under the supplied rules, with justification.
6. Identify the lifecycle stage of selected data items (e.g. generation, clinical use, retention, secondary use) and explain one implication for how each may be used (G2).
**Conditions:** supervised; open access to the supplied rules only; fresh dataset variant per sitting. Duration and slot **TBC** (see §7).
 
**Scaffolding:** Week 3 audit, Week 4 interoperability table, Week 5 result-review worksheet.
 
### C2 — Evaluation Task (after Week 7)
 
**Purpose:** assess analytical judgement about outputs (MLO3) and evaluative judgement about technologies (MLO4) as separate criteria.
 
**Part A — Analytics and outputs (MLO3)**
- Supplied: a de-identified fictional dataset; a dashboard; **one** CDS alert **or** model-generated output, allocated by variant.
- Tasks: calculate selected descriptive measures; produce one appropriate chart with interpretation; evaluate the dashboard; evaluate the allocated CDS/model output, including the effect of prevalence on alert usefulness and the need for human oversight.
**Part B — Technology evaluation (MLO4)**
- Supplied: a fictional digital-health or AI-enabled tool with a defined intended use, an evidence summary and a stated regulatory position.
- Tasks: evaluate validity, safety, usability, bias and regulatory status; make a conditional fitness-for-purpose recommendation.
**Conditions:** individual written submission within a defined window; scenario variants to protect integrity. Window and length **TBC**.
 
**Scaffolding:** Week 6 chart and critique; Week 7 evaluation matrix. All three output types are covered in the Week 6 OAL check (alignment matrix G3, accepted 12 Nov 2026).
 
### C3 — Integrated Case (Week 10)
 
**Purpose:** assess integration and transfer in a new setting, and individual analysis of governance risk.
 
**Scenario (decided 12 Nov 2026):** a fictional **community anticoagulation INR point-of-care testing network**. GP clinics perform INR POCT; results pass through a device connectivity hub to clinic EHRs, contribute to NEHR and feed a network dashboard; a fictional hospital laboratory provides POCT QA oversight. The case contains data-quality, validation, interoperability, analytics and governance issues. Specification: `05_Weekly_Learning_Architecture_W2-W10_v0.1.md`, Week 10.
 
**Group element (MLO6a, b):**
1. Map the information flow.
2. Identify and prioritise problems, drawing on MLO1–4 concepts.
3. Propose an improvement and explain how it should be evaluated.
**Individual element (MLO5, MLO6c):**
1. Analyse the case's privacy, cybersecurity, ethical, legal and governance issues.
2. Propose proportionate controls and escalation actions.
3. Justify one prioritised problem and measure, communicating rationale, benefits, risks and trade-offs.
**Conditions:** group size **TBC**; individual element as a short written justification or oral presentation (format **TBC**). Group/individual mark split **TBC**; recommendation: the individual element carries all MLO5 criteria and MLO6c so every student has individual evidence.
 
**Scaffolding:** Weeks 1–9 practicals, especially the Week 8 risk assessment and the Week 9 implementation plan (with communication criterion, alignment matrix G4, accepted 12 Nov 2026).
 
---
 
## 3. Assessment criteria
 
One criterion per MLO component for compound MLOs (requirement 4). Descriptors show the threshold for a pass and indicators of high performance; they must be mapped to NP's grading scale once supplied.
 
### C1
 
| Criterion | MLO component | Threshold (pass) | High performance |
|---|---|---|---|
| C1.1 Data-quality interpretation | MLO1 c, d, e | Identifies most seeded problems and names the quality dimension | Explains each consequence using context, units and terminology |
| C1.2 Correct vs escalate | MLO1 d | Separates correctable from uncertain problems | Justifies each decision by the evidence available, never by assumption |
| C1.3 Exchange analysis | MLO2 b, e | Classifies most discrepancies by interoperability level | Explains how each discrepancy changes meaning or usability downstream |
| C1.4 Workflow and controls | MLO2 a, c, d | Locates where problems arose | Proposes controls matched to the stage and system responsible |
| C1.5 Release decisions | MLO2; MLO1 d | Applies supplied rules correctly to most results | Justifies holds and escalations, including the need for human review |
| C1.6 Data lifecycle | MLO1 b | Identifies the lifecycle stage of most supplied data items | Explains how the lifecycle stage changes permitted use or required controls (e.g. secondary use needs de-identification) |
 
*C1.6 added in v0.1.2 (alignment matrix G2, accepted 12 Nov 2026). Keep task 6 short so C1 length is not materially increased.*
 
### C2
 
| Criterion | MLO component | Threshold (pass) | High performance |
|---|---|---|---|
| C2.1 Analysis | MLO3 a | Correct descriptive measures for the question | Chooses measures suited to the data's distribution and explains why |
| C2.2 Visualisation | MLO3 b | Appropriate chart; accurate main pattern | Interpretation states limits of what the chart shows |
| C2.3 Analytical output evaluation | MLO3 c, f | Identifies a misleading feature of the dashboard | Explains its effect on a decision and what would correct it |
| C2.4 CDS/model output evaluation | MLO3 d, e, f | Identifies a limitation and the need for oversight | Reasons about prevalence, PPV and harm of false alerts |
| C2.5 Validity, safety, usability | MLO4 a, b, c | Assesses each against the intended use | Weighs evidence quality, not only presence of evidence |
| C2.6 Bias and regulatory status | MLO4 d, e | Identifies a bias risk and states regulatory position | Explains who may be disadvantaged and what the regulatory status does and does not guarantee |
| C2.7 Fitness for purpose | MLO4 f | Gives a recommendation consistent with the evaluation | States explicit conditions for use and non-use |
 
### C3
 
| Criterion | MLO component | Element | Threshold (pass) | High performance |
|---|---|---|---|---|
| C3.1 Mapping and problem identification | MLO6 a | Group | Accurate flow; main problems identified | Problems linked across data, systems, validation and analytics |
| C3.2 Prioritisation | MLO6 a, b | Group | Defensible priority order | Priority justified by patient-safety and information-reliability impact |
| C3.3 Improvement and evaluation | MLO6 b | Group | Feasible improvement with a success measure | Measures and evidence needed before wider deployment specified |
| C3.4 Governance analysis | MLO5 a–e | Individual | Identifies privacy, security and governance issues | Distinguishes legal obligations from good practice, with reasoning |
| C3.5 Risk controls | MLO5 f | Individual | Proposes relevant controls and escalation | Controls proportionate; own role vs authorised personnel distinguished |
| C3.6 Communication | MLO6 c | Individual | Clear rationale, benefits and risks | Trade-offs and unresolved uncertainties stated candidly |
 
---
 
## 4. MLO evidence map
 
| MLO | Summative evidence | Individual? | Highest level assessed | Formative preparation |
|---|---|---|---|---|
| MLO1 | C1.1, C1.2, C1.5, C1.6 | Yes | Interpret | W1, W3, W5 |
| MLO2 | C1.3, C1.4, C1.5 | Yes | Analyse | W1, W2, W4, W5 |
| MLO3 | C2.1–C2.4 | Yes | Apply + Evaluate | W6 |
| MLO4 | C2.5–C2.7 | Yes | Evaluate | W7, W9 |
| MLO5 | C3.4, C3.5 | Yes | Analyse + Propose | W1–W6 privacy decisions; W8 |
| MLO6 | C3.1–C3.3 (group); C3.6 (individual) | Yes (C3.6) | Evaluate / Create | W9, W10 |
 
---
 
## 5. GenAI and integrity rules (proposed; subject to NP policy)
 
| Component | Stage | Rule | Evidence required |
|---|---|---|---|
| C1 | Anchor | No GenAI; supervised | — |
| C2 | Augment | Approved tool only, after an independent attempt, for critique of the student's own work | Verification log: AI claim → how checked → outcome; prompts declared |
| C3 | Advance | Approved tool for counter-arguments or alternative options (group element) | PAIR record and verification evidence; individual element written and defended without AI |
 
**PAIR (adopted 12 Nov 2026):** wherever AI is permitted, students document Problem formulation → AI tool selection → Interaction → Reflection.
 
**All components:** fictional data only; AI output is never accepted as evidence without verification; scenario variants for C1 and C2; the individual C3 element provides authenticated individual evidence.
 
---
 
## 6. Alignment to the requirements in the matrix (§6.1)
 
| Requirement | Met by |
|---|---|
| 1. Each MLO assessed once at highest level | §4 |
| 2. Individual evidence per MLO | C1 and C2 individual; C3.4–C3.6 individual |
| 3. MLO3 and MLO5 explicitly sampled | C2 Part A; C3 individual element |
| 4. Separate criterion per compound-MLO component | §3 criteria |
| 5. GenAI defined per assessment | §5 |
| 6. Fictional data; new scenarios | C1 new patient; C2 variants; C3 new setting |
 
---
 
## 7. Workload and timing risks
 
| Risk | Rating | Consequence | Options for decision |
|---|---|---|---|
| C1 sitting displaces the Week 6 practical | Amber | Week 6 is MLO3's only primary week | (a) Separate assessment slot (preferred); (b) Week 6 practical shortened — not recommended |
| C2 window overlaps Week 8 learning | Amber | Load spike in governance week | Fix a short window; keep C2 length proportionate |
| Three components raise total load | Amber | Workload above other Year 3 modules | Keep C1 and C2 short; no additional graded weekly tasks |
| C3 in the final teaching week | Amber | Limited time for feedback before results | Release case brief at Week 10 start (already in syllabus); confirm calendar |
| C3 individual element time (three tasks) | Amber | Rushed governance analysis if done within the 120-min practical | Decide written vs oral format (§8 item 4); review timing after pilot |
 
---
 
## 8. Decisions required
 
| # | Decision | Owner |
|---|---|---|
| 1 | Weights for C1, C2, C3 and the C3 group/individual split | Curriculum owner, per NP rules |
| 2 | Dates, slots and durations | Curriculum owner / school calendar |
| 3 | C1 slot: separate assessment slot or within Week 6 | Curriculum owner |
| 4 | C3 individual format: written or oral | Curriculum owner |
| 5 | GenAI rules in §5 | Curriculum owner, per NP policy |
| 6 | Grading scale, moderation, resit and late rules | NP requirements (to be supplied) |
| 7 | ~~Alignment matrix G2–G5~~ | **Closed — all accepted 12 Nov 2026** |
 
---
 
## 9. Changes required elsewhere
 
| Document | Change | Status |
|---|---|---|
| `02_Constructive_Alignment_Matrix_v0.1.1.md` §2, §6.2, §7 | Record Option A; revise Σ cells; G1 Red → Amber | Applied (v0.1.1) |
| `01_Approved_10_Week_Syllabus_v0.2.2.md` §8 items 2, 4; Week 10 | Structure decided; Week 10 hosts C3 | Applied (v0.2.2) |
| Syllabus, matrix, teaching design | Blueprint references changed from `30_` to `03_Assessment_Blueprint_v0.1.md`; G3, G4 and C3 setting recorded | Applied (syllabus v0.2.3; matrix v0.1.2; teaching design v0.1.2) |
 
**Next step:** confirm weights, timing and GenAI rules. Weekly design (Stage A, Weeks 2–10) is in `05_Weekly_Learning_Architecture_W2-W10_v0.1.md`.