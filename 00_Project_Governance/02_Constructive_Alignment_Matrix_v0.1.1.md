# Medical Informatics — Constructive Alignment Matrix
 
**Programme:** Diploma in Biomedical Science, Ngee Ann Polytechnic
**Module:** Medical Informatics (Year 3, 10 weeks; 2 h OAL + 2 h practical per week)
**Version:** 0.1.3 (12 November 2026)
**Status:** Working draft (v0.1.1: Option A recorded, 1 Nov 2026; v0.1.2: G3 and G4 accepted, blueprint reference updated to `03_`, 12 Nov 2026; v0.1.3: G2 and G5 accepted, 12 Nov 2026)
**Baseline:** `10_Week_Syllabus_v0.2.md` (v0.2.4); MLOs approved by curriculum owner on 1 Nov 2026
 
**Assumption:** the approved MLOs are the v0.2 wording, including the D2 revisions to MLO3 and MLO4. If any approved wording differs, Sections 2–5 need updating.
 
**Not in scope of this version:** summative weights, dates and formats. These depend on the assessment blueprint (§6) and NP requirements, which have not been supplied.
 
---
 
## 1. Approved Module Learning Outcomes
 
| MLO | Approved wording | Components (for coverage checking) | Highest cognitive level |
|---|---|---|---|
| MLO1 | Explain and interpret healthcare data, including data types, lifecycle, quality, context and terminology, in biomedical and healthcare contexts. | a types · b lifecycle · c quality · d context · e terminology | Understand / Apply (interpret) |
| MLO2 | Analyse how healthcare information systems and interoperability enable the generation, management and exchange of reliable laboratory and clinical information. | a systems · b interoperability · c generation · d management · e exchange | Analyse |
| MLO3 | Apply appropriate analytical and visualisation approaches to healthcare data and evaluate analytical, decision-support and model-generated outputs for healthcare decision-making, including their limitations. | a analysis · b visualisation · c analytical outputs · d decision-support outputs · e model outputs · f limitations | Apply + Evaluate |
| MLO4 | Evaluate digital-health technologies, including AI-enabled tools, for clinical and biomedical applications, considering validity, safety, usability, bias, regulatory status and fitness for purpose. | a validity · b safety · c usability · d bias · e regulatory status · f fitness for purpose | Evaluate |
| MLO5 | Analyse privacy, cybersecurity, ethical, legal and governance requirements associated with healthcare data and digital technologies, and propose appropriate risk controls. | a privacy · b cybersecurity · c ethics · d legal · e governance · f propose controls | Analyse + Create (propose) |
| MLO6 | Integrate medical informatics concepts to evaluate or design a BMS-relevant healthcare solution or workflow and communicate its rationale, benefits, risks and trade-offs. | a integrate · b evaluate/design · c communicate | Evaluate / Create |
 
---
 
## 2. Matrix A — MLO × Week (teach, practise, evidence)
 
**Key:** T = taught in OAL · P = practised in practical · F = formative evidence produced · Σ = candidate summative evidence (pending blueprint) · — = not addressed
 
| Week | MLO1 Data | MLO2 Systems | MLO3 Analytics | MLO4 Digital health & AI tools | MLO5 Governance | MLO6 Integration |
|---|---|---|---|---|---|---|
| 1 Introduction & ecosystem | T P F | T P F | — | — | T P F | P |
| 2 Systems & workflows | P | T P F | — | — | P F | P |
| 3 Laboratory data | T P F | P | — | — | P F | P |
| 4 LIM & interoperability | P | T P F | — | — | P F | P |
| 5 Result validation | T P F | T P F | P | — | P F | P |
| 6 Analytics & decision support | P | — | T P F | — | P F | P |
| 7 Digital health | P | — | P | T P F | P | P |
| 8 Privacy & governance | P | P | — | P | T P F | P |
| 9 Singapore ecosystem & implementation | — | T P | P | T P F | P | T P F |
| 10 Integration | P | P | P | P | P Σ | T P F Σ |
 
**Summative (Option A, decided 1 Nov 2026):** C1 after W5 — MLO1, MLO2 · C2 after W7 — MLO3, MLO4 · C3 in W10 — MLO5, MLO6. MLO1–4 are applied in C3 but not re-graded. See `03_Assessment_Blueprint_v0.1.md`.
 
**Reading:** each MLO is taught and practised before Week 10, and each has at least one week of formative evidence. MLO3 has one teaching week; MLO5 has one teaching week after its Week 1 introduction but formative evidence in eight weeks through embedded privacy decisions.
 
---
 
## 3. Matrix B — WLO → MLO alignment
 
Cognitive levels use revised Bloom's taxonomy. "Evidence" is the item in which the WLO is demonstrated.
 
| WLO | Weekly learning outcome (abridged) | MLO (primary; supporting) | Level | Evidence |
|---|---|---|---|---|
| 1.1 | Explain the role of medical informatics in healthcare and laboratory operations | MLO2 | Understand | OAL quiz |
| 1.2 | Distinguish data, information and knowledge | MLO1 | Understand | OAL quiz |
| 1.3 | Map stages from test request to reported result | MLO2; MLO1 | Apply | Journey map |
| 1.4 | Identify stakeholders, hand-offs and information risks | MLO2; MLO5 | Analyse | Journey map |
| 2.1 | Describe and distinguish roles of common systems | MLO2 | Understand | OAL matching |
| 2.2 | Explain how systems support workflow stages | MLO2 | Understand | Systems-layer map |
| 2.3 | Analyse effects of incorrect, missing, delayed or unavailable information | MLO2; MLO1 | Analyse | Failure-mode analysis |
| 2.4 | Identify controls for common workflow errors | MLO2; MLO5 | Apply | Failure-mode analysis |
| 3.1 | Classify data by characteristics, intended use and lifecycle stage (G2) | MLO1 | Understand | OAL check; C1.6 |
| 3.2 | Evaluate laboratory data for quality problems | MLO1 | Evaluate | Data-quality audit |
| 3.3 | Explain how specimen, method, units and reference intervals affect interpretation | MLO1 | Understand | Data-quality audit |
| 3.4 | Distinguish generation, validation and interpretation | MLO1; MLO2 | Analyse | OAL check |
| 4.1 | Explain LIS and LIMS functions and settings | MLO2 | Understand | OAL check |
| 4.2 | Describe exchange between instruments, systems and shared records | MLO2 | Understand | OAL exchange diagram |
| 4.3 | Distinguish interoperability levels | MLO2 | Analyse | Interoperability table |
| 4.4 | Analyse effects of mismatched identifiers, units, codes, formats | MLO2; MLO1 | Analyse | Interoperability table |
| 5.1 | Distinguish analytical QC from individual-result validation | MLO1 | Analyse | OAL check |
| 5.2 | Apply supplied validation rules (accept / hold / escalate) | MLO2; MLO1 | Apply | Result-review worksheet |
| 5.3 | Explain how reference intervals, critical values, delta checks and context support review | MLO1; MLO3 | Understand | Result-review worksheet |
| 5.4 | Justify the need for human review | MLO2; MLO5 | Evaluate | Result-review worksheet |
| 6.1 | Summarise a dataset with descriptive measures | MLO3 | Apply | Chart and interpretation |
| 6.2 | Select and interpret a suitable visualisation | MLO3 | Apply | Chart and interpretation |
| 6.3 | Evaluate a dashboard or analytical output | MLO3 | Evaluate | Output critique |
| 6.4 | Distinguish QC, result validation, population analytics and CDS | MLO3; MLO1 | Analyse | OAL four-way check |
| 6.5 | Evaluate a CDS or AI-generated output | MLO3 | Evaluate | Output critique; OAL check covering all three output types (G3) |
| 7.1 | Describe digital-health technologies, including POCT | MLO4 | Understand | OAL check |
| 7.2 | Evaluate quality and limitations of digital-health data | MLO4; MLO1 | Evaluate | Evaluation matrix |
| 7.3 | Evaluate fitness for purpose, including validity, bias and regulatory status | MLO4 | Evaluate | Evaluation matrix |
| 7.4 | Recommend conditions for use | MLO4; MLO6 | Evaluate | Recommendation |
| 8.1 | Identify privacy, security and ethical risks | MLO5 | Understand | OAL scenario check |
| 8.2 | Explain purpose of governance and security controls | MLO5 | Understand | OAL scenario check |
| 8.3 | Analyse a data-handling scenario | MLO5 | Analyse | Risk-assessment worksheet |
| 8.4 | Recommend proportionate controls and escalation | MLO5 | Create | Risk-assessment worksheet |
| 9.1 | Describe ecosystem components, including HIA effect, and distinguish institutional, shared and patient-facing systems (merged, G5) | MLO2; MLO5 | Analyse | OAL distinction check |
| 9.2 | Evaluate implementation readiness of a solution | MLO6; MLO4 | Evaluate | Implementation plan |
| 9.3 | Recommend measures of implementation benefit | MLO4; MLO6 | Evaluate | Implementation plan (incl. stakeholder-facing summary, G4) |
| 10.1 | Analyse an integrated multi-system scenario | MLO6; MLO1–5 | Analyse | Integrated case |
| 10.2 | Identify and prioritise problems | MLO6; MLO1–5 | Evaluate | Problem-and-risk table |
| 10.3 | Propose a justified workflow improvement | MLO6 | Create | Integrated case |
| 10.4 | Communicate benefits, limitations, risks and trade-offs | MLO6 | Create | Individual justification |
 
**WLO count by primary MLO:** MLO1 7 · MLO2 14 · MLO3 5 · MLO4 5 · MLO5 4 · MLO6 5 (40 WLOs; v0.1.3 merged 9.1 and 9.2).
 
---
 
## 4. Matrix C — MLO component coverage
 
Rating: **Green** = taught, practised and evidenced · **Amber** = present but thin or dependent on verification · **Red** = absent.
 
| MLO | Component | Where taught | Where practised / evidenced | Rating |
|---|---|---|---|---|
| MLO1 | a types | W3 | W3 audit | Green |
| | b lifecycle | W3 | WLO 3.1 OAL check; W3 privacy decision (secondary use); C1.6 (G2) | Green |
| | c quality | W3 | W3 audit; W4 table; W7 matrix | Green |
| | d context | W3, W5 | W3 audit; W5 worksheet | Green |
| | e terminology | W3, W4 | W3 audit; W4 table | Green |
| MLO2 | a systems | W1, W2, W4, W9 | W2 map; W4 table | Green |
| | b interoperability | W4 | W4 table | Green |
| | c generation | W3, W4 | W3 audit | Green |
| | d management | W2, W4 | W2 map | Green |
| | e exchange | W4, W9 | W4 table | Green |
| MLO3 | a analysis | W6 | W6 chart | Green |
| | b visualisation | W6 | W6 chart | Green |
| | c analytical outputs | W6 | W6 critique; W6 OAL check | Green |
| | d decision-support outputs | W6 | W6 OAL check (all students, G3); W6 critique option | Green |
| | e model outputs | W6 | W6 OAL check (all students, G3); W6 critique option | Green |
| | f limitations | W6, W7 | W6 chart; W7 matrix | Green |
| MLO4 | a validity | W7 | W7 matrix | Green |
| | b safety | W7, W9 | W7 matrix; W9 plan | Green |
| | c usability | W7, W9 | W7 matrix; W9 plan | Green |
| | d bias | W6, W7 | W7 matrix | Green |
| | e regulatory status | W7 (pending verification) | W7 matrix | **Amber** |
| | f fitness for purpose | W7 | W7 matrix | Green |
| MLO5 | a privacy | W1, W8 | Privacy decisions W1–W6; W8 worksheet | Green |
| | b cybersecurity | W8 | W8 worksheet | Green |
| | c ethics | W8 | W8 worksheet | Green |
| | d legal | W8, W9 (pending verification) | W8 worksheet | **Amber** |
| | e governance | W8, W9 | W8 worksheet; W9 plan | Green |
| | f propose controls | W2, W8 | W2 FMA; W8 worksheet | Green |
| MLO6 | a integrate | W10 | W10 case | Green |
| | b evaluate/design | W9, W10 | W9 plan; W10 case | Green |
| | c communicate | W9, W10 | W9 stakeholder-facing summary (G4); W10 individual justification | Green |
 
**Summary:** 29 Green, 2 Amber, 0 Red (v0.1.1: 25 Green, 6 Amber). Remaining Amber items (MLO4e, MLO5d) depend on Singapore verification (G6).
 
---
 
## 5. Cognitive progression check
 
| Phase | Weeks | Dominant levels | Judgement |
|---|---|---|---|
| Foundation | 1–2 | Understand, Apply, early Analyse | Green — appropriate entry |
| Laboratory lifecycle | 3–5 | Analyse, Evaluate | Green — steps up with authentic data |
| Insight and technology | 6–7 | Apply, Evaluate | Green |
| Governance and implementation | 8–9 | Analyse, Evaluate, Create | Green |
| Integration | 10 | Analyse, Evaluate, Create | Green — transfer to new setting |
 
Each MLO's highest required level is reached in at least one WLO before Week 10. MLO6 "communicate" is now first practised in Week 9 (G4, accepted 12 Nov 2026).
 
---
 
## 6. Summative evidence requirements (pending blueprint)
 
No weights, dates or formats are set here. The following are **requirements** any blueprint should satisfy, followed by options for the curriculum owner.
 
### 6.1 Requirements
 
1. Each MLO is summatively assessed at least once, at its highest cognitive level (§1).
2. Each MLO has individual evidence, even where tasks are group-based.
3. MLO3 and MLO5, each with one primary week, are explicitly sampled.
4. Compound MLOs (MLO3, MLO4, MLO5) are marked with a separate criterion per component.
5. GenAI use is defined per assessment, with required verification evidence.
6. Summative tasks use fictional data and new scenarios, not repeats of weekly practicals.
### 6.2 Options for decision
 
| Option | Structure | MLO coverage | Strength | Risk |
|---|---|---|---|---|
| A | Three components: (1) laboratory-information task after W5; (2) evaluation task after W7; (3) integrated case in W10 | (1) MLO1, MLO2 · (2) MLO3, MLO4 · (3) MLO5, MLO6 + integrative | Spaced; each MLO sampled near its teaching | Higher assessment load |
| B | Two components: (1) mid-module laboratory task after W5; (2) integrated case in W10 | (1) MLO1, MLO2 · (2) MLO3–MLO6 | Lower load | MLO3 and MLO4 rest on one late task |
| C | Portfolio of selected weekly artefacts plus W10 integrated case | Selected artefacts from W3, W5, W6, W7, W8 + W10 | Uses existing work; low extra load | Integrity of weekly artefacts; GenAI exposure |
 
**Decision: Option A selected by curriculum owner, 1 Nov 2026.** Specified in `03_Assessment_Blueprint_v0.1.md`.
 
---
 
## 7. Gaps and recommended actions
 
| # | Gap | Rating | Recommended action |
|---|---|---|---|
| G1 | Blueprint drafted (Option A); weights, dates and GenAI rules pending | Amber | Close blueprint §8 decisions 1–6 |
| G2 | MLO1b lifecycle had no WLO or evidence | **Closed — accepted 12 Nov 2026** | WLO 3.1 amended to "…characteristics, intended use and lifecycle stage"; blueprint C1.6 added (syllabus v0.2.4; blueprint v0.1.2) |
| G3 | MLO3d/e: CDS and model outputs were alternative options in the W6 critique | **Closed — accepted 12 Nov 2026** | W6 OAL check covers all three output types; one practical option retained (syllabus v0.2.3, W6) |
| G4 | MLO6c communication first practised in W10 | **Closed — accepted 12 Nov 2026** | Communication criterion (stakeholder-facing summary) added to the W9 plan; no new task (syllabus v0.2.3, W9) |
| G5 | W9 WLOs 9.1–9.2 mapped primarily to MLO2, which is Supporting in W9 | **Closed — accepted 12 Nov 2026** | 9.1 and 9.2 merged into one WLO; W9 MLO2 stays Supporting (syllabus v0.2.4) |
| G6 | MLO4e regulatory status and MLO5d legal depend on unverified Singapore requirements | Amber | Close syllabus §8 items 5–7 before content development |
| G7 | MLO2 carries 14 of 40 WLOs | Green (note) | Acceptable given the laboratory-centred design; avoid over-weighting MLO2 in summative marks |
 
---
 
## 8. Changes required elsewhere
 
| Document | Change | Status |
|---|---|---|
| `10_Week_Syllabus_v0.2.md` §2 | Mark MLOs approved 1 Nov 2026 | Applied (v0.2.1) |
| `10_Week_Syllabus_v0.2.md` §8 | Close items 1 (MLOs; PLO mapping remains open) and 3 | Applied (v0.2.1) |
| `10_Week_Syllabus_v0.2.md` W6, W9 | G3, G4 | Applied (v0.2.3) |
| `10_Week_Syllabus_v0.2.md` W3, W9 | G2, G5 | Applied (v0.2.4) |
| `03_Assessment_Blueprint_v0.1.md` C1 | C1.6 Data lifecycle (G2) | Applied (v0.1.2) |
 
---
 
## 9. Decisions required
 
1. Confirm the approved MLO wording matches §1.
2. ~~Choose a summative structure (§6.2)~~ **Closed** — Option A, 1 Nov 2026.
3. ~~G2–G5~~ **Closed** — all accepted 12 Nov 2026.
4. Supply programme learning outcomes so a PLO mapping can be added.
**Next step:** confirm blueprint weights, timing and GenAI rules; close G6 through Singapore verification.