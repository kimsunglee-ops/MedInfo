# Medical Informatics
## Structured 10-Week Syllabus
 
**Programme:** Diploma in Biomedical Science (BMS)
**Institution:** Ngee Ann Polytechnic, School of Life Sciences & Chemical Technology
**Target students:** Year 3 BMS students
**Proposed duration:** 10 weeks
**Proposed weekly learning hours:** 2 hours online asynchronous learning (OAL) + 2 hours practical/applied learning
**Document status:** Working draft — not yet approved
**Version:** 0.2.5 (13 November 2026)
 
---
 
# 0. Change Log
 
## 0.1 Version history
 
| Version | Date | Change | Authority |
|---|---|---|---|
| 0.1 | — | Initial working draft | Curriculum owner |
| 0.2 | 1 Nov 2026 | Revisions D1–D16 from the independent review applied | Curriculum owner instruction, 1 Nov 2026 |
| 0.2.1 | 1 Nov 2026 | MLOs (§2) approved; §8 items 1 and 3 updated | Curriculum owner, 1 Nov 2026 |
| 0.2.2 | 1 Nov 2026 | Summative structure Option A recorded; Week 10 hosts C3; §8 items 2 and 4 updated | Curriculum owner, 1 Nov 2026 |
| 0.2.3 | 12 Nov 2026 | Weeks 7 and 9 case wording "after discharge" → "following the clinic review"; alignment matrix G3 (Week 6) and G4 (Week 9) applied; Week 10 setting decided (community INR POCT network); PAIR added to §6.4; blueprint reference `30_` → `03_Assessment_Blueprint_v0.1.md`. OAL key concepts for Weeks 6, 8 and 9 grouped into five (topics unchanged; see `05_Weekly_Learning_Architecture_W2-W10_v0.1.md`) | Curriculum owner, 12 Nov 2026 |
| 0.2.4 | 12 Nov 2026 | Alignment matrix G2 applied (WLO 3.1 adds "lifecycle stage"); G5 applied (WLOs 9.1 and 9.2 merged; Week 9 now has three WLOs); Patient A case values approved and recorded in `06_Case_State_Register_v0.1.md`; §8 item 15 closed | Curriculum owner, 12 Nov 2026 |
| 0.2.5 | 13 Nov 2026 | Week 9 practical scenario corrected (architecture decision D15, per MOH HIA FAQ v1.2, 27 Aug 2026): the generating hospital laboratory, not the community clinic, contributes laboratory reports to NEHR; the clinic contributes its own specified information. Topics, WLOs and MLO mapping unchanged | Curriculum owner, 13 Nov 2026 |
 
## 0.2 Changes applied in v0.2
 
Topic titles and sequence are **unchanged**. All changes are content, mapping, practical-design or documentation changes.
 
| Ref | Change | Sections affected |
|---|---|---|
| D1 | Health Information Bill updated to Health Information Act (passed 12 Jan 2026; intended effect early 2027). Pre-delivery verification step added. | Weeks 4, 8, 9; §7 |
| D2 | AI split between MLOs: MLO3 = outputs; MLO4 = technologies. **Approved 1 Nov 2026.** | §2; Weeks 6, 7 |
| D3 | Week 6 rescoped; predictive models no longer a standalone topic. | Week 6 |
| D4 | Weeks 1 and 2 share one practical artefact. | Weeks 1, 2 |
| D5 | Week 7 = technology fitness for purpose; Week 9 = organisational implementation. | Weeks 7, 9 |
| D6 | One primary artefact per practical. | All weeks; §5 |
| D7 | "Lens" statements added where concepts recur. | Weeks 1–5 |
| D8 | Singapore context threaded through Weeks 1, 4, 8, 9. | Weeks 1, 4, 8, 9 |
| D9 | GenAI use mapped by week (Anchor → Augment → Advance). | All weeks; §6.4 |
| D10 | Four-way distinction: analytical QC, result validation, population analytics, clinical decision support. | Week 6; §6.5 |
| D11 | Point-of-care and patient self-testing as the Week 7 anchor. | Week 7 |
| D12 | One privacy decision embedded in each practical, Weeks 1–6. | Weeks 1–6 |
| D13 | LIS downtime scenario added as a Week 2 option. | Week 2 |
| D14 | Week 10 OAL defined; new setting; individual component. | Week 10 |
| D15 | Case-state line added to each week. | All weeks; §3.0 |
| D16 | Module glossary added. | §11 |
 
Mapping changes: Week 6 MLO4 S → — and MLO5 — → S; Week 9 MLO2 P → S.
 
---
 
# 1. Module Overview
 
## 1.1 Module Purpose
 
Medical Informatics explores how healthcare data are generated, managed, exchanged, analysed and used to support healthcare delivery, laboratory operations and decision-making.
 
For Biomedical Science students, the emphasis is on understanding and evaluating healthcare information systems and data workflows rather than developing software or acquiring advanced computing skills.
 
Students examine how information moves from a healthcare encounter and laboratory test request through specimen processing, result validation, reporting and subsequent use. They also explore digital-health technologies, healthcare analytics, interoperability, artificial intelligence, information security and governance.
 
The module uses biomedical laboratory scenarios, fictional patient records, healthcare information workflows and examples relevant to Singapore's healthcare environment.
 
## 1.2 Central Learning Question
 
**How does a test order become a reliable laboratory result, reach the right healthcare professional, and support an appropriate decision?**
 
## 1.3 Conceptual Learning Journey
 
**TEST ORDER → HEALTHCARE SYSTEMS → LABORATORY DATA → VALIDATION → INFORMATION EXCHANGE → INSIGHT AND DECISION → TRUST AND GOVERNANCE → IMPLEMENTATION AND IMPROVEMENT**
 
The sequence is a teaching framework, not a strictly linear representation of every workflow. In practice, these processes interact and may involve feedback loops.
 
## 1.4 Intended Graduate Capability
 
By the end of the module, students should be able to examine a biomedical or healthcare information problem, identify the relevant data and information systems, evaluate data quality and analytical outputs, recognise privacy and safety risks, and propose a reasoned improvement to a healthcare information workflow.
 
Students are not expected to become software developers, clinical diagnosticians or healthcare IT system administrators.
 
---
 
# 2. Module Learning Outcomes
 
**Approved by curriculum owner, 1 November 2026** (v0.2 wording, including D2). Programme-outcome mapping remains open.
 
| MLO | Module learning outcome | v0.2 status |
|---|---|---|
| **MLO1** | Explain and interpret healthcare data, including data types, lifecycle, quality, context and terminology, in biomedical and healthcare contexts. | Unchanged |
| **MLO2** | Analyse how healthcare information systems and interoperability enable the generation, management and exchange of reliable laboratory and clinical information. | Unchanged |
| **MLO3** | Apply appropriate analytical and visualisation approaches to healthcare data and evaluate analytical, decision-support and model-generated outputs for healthcare decision-making, including their limitations. | Approved (D2) |
| **MLO4** | Evaluate digital-health technologies, including AI-enabled tools, for clinical and biomedical applications, considering validity, safety, usability, bias, regulatory status and fitness for purpose. | Approved (D2) |
| **MLO5** | Analyse privacy, cybersecurity, ethical, legal and governance requirements associated with healthcare data and digital technologies, and propose appropriate risk controls. | Unchanged |
| **MLO6** | Integrate medical informatics concepts to evaluate or design a BMS-relevant healthcare solution or workflow and communicate its rationale, benefits, risks and trade-offs. | Unchanged |
 
**D2 rationale:** MLO3 assesses judgement about *outputs* (a chart, dashboard, alert or AI interpretation). MLO4 assesses judgement about *technologies* (a device, app or AI tool) as fit for a purpose. This removes the overlap in v0.1, where AI evaluation sat in both.
 
**Alignment note:** MLOs describe end-of-module capabilities. Weekly learning outcomes (WLOs) specify capabilities developed in individual weeks. They are not interchangeable.
 
**Note on compound MLOs:** MLO3, MLO4 and MLO5 each contain two actions. If NP rules permit compound outcomes, assess each component with a separate rubric criterion.
 
---
 
# 3. Structured Ten-Week Syllabus
 
## 3.0 Longitudinal case (D15; values approved 12 Nov 2026 — see `06_Case_State_Register_v0.1.md`)
 
A fictional, non-identifiable patient, **Patient A**, is followed through Weeks 1–9. All data are synthetic. Week 10 uses a **different** case and setting to test transfer.
 
**Baseline (established Week 1):** Patient A is a fictional adult with type 2 diabetes attending a fictional hospital outpatient clinic. A doctor orders a renal panel (including potassium) and HbA1c. Patient A is **not admitted**; later events follow the clinic review (v0.2.3).
 
Each week records a case-state line: what is established, what is new and what students must not assume. A separate case-state document should be maintained during weekly development. Students must never depend on details they were not given.
 
**Each week also states:**
- **Lens:** the specific angle taken on concepts that recur across weeks (D7).
- **Privacy decision:** one privacy judgement embedded in the practical, Weeks 1–6 (D12).
- **GenAI:** whether and how AI is used, following Anchor → Augment → Advance (D9).
- **Primary artefact:** the single required practical output (D6).
---
 
## Week 1 — Introduction to Medical Informatics and the Healthcare Information Ecosystem
 
### 1. Topics
 
- What medical informatics is and why it matters in healthcare.
- Healthcare data, information and knowledge.
- **Singapore orientation map — who does what:** MOH, Synapxe, healthcare clusters and providers, NEHR, HealthHub. Distinctions only; depth is in Week 9. *(D8)*
- Healthcare information flows across patients, healthcare professionals, laboratories and healthcare organisations.
- The patient-to-laboratory-to-clinician information journey.
- **Healthcare information systems named by role only** (e.g. "the system where the order is placed", "the system that manages laboratory work"). Functions are taught in Week 2; LIS vs LIMS in Week 4. *(D4, D7)*
- Introduction to confidentiality, integrity, availability and responsible data use, including the rule that identifiable patient information is never entered into external AI tools. *(D9)*
### 2. Weekly Learning Outcomes
 
By the end of this week, students should be able to:
 
1. Explain the role of medical informatics in supporting healthcare delivery and biomedical laboratory operations.
2. Distinguish data, information and knowledge using biomedical or healthcare examples.
3. Map the main stages through which a laboratory test request becomes a reported result.
4. Identify key stakeholders, information hand-offs and potential information risks within a healthcare workflow. *(v0.2: "information systems" replaced with "information hand-offs"; systems layer moves to Week 2.)*
### 3. Content Boundaries
 
**Include:**
- Foundational concepts and terminology.
- A simplified, accurate orientation to Singapore's healthcare information ecosystem.
- How laboratory information contributes to healthcare decisions.
- Basic awareness of privacy, security and patient safety.
**Exclude:**
- System functions in detail (Week 2) and LIS/LIMS distinctions (Week 4).
- Detailed system architecture or interface specifications.
- In-depth analytics, detailed legal interpretation, clinical diagnosis or treatment.
**Lens:** the journey as people, information and risk — not yet as systems.
 
### 4. Practical or Applied Learning
 
**Activity: Map the journey of a laboratory test (Part 1 of a two-week artefact)**
 
Using the Patient A scenario, students map the journey from test ordering to result reporting, identifying:
- The people involved and the information each creates or uses.
- Hand-offs between stakeholders.
- Points of potential error, delay or information loss.
- Where confidentiality and data integrity matter.
Students explain why a laboratory result is not reliable solely because an instrument has produced a numerical value.
 
**Privacy decision:** students mark which stakeholders genuinely need to see the result and which do not.
 
**GenAI:** none in the task. The AI confidentiality rule is introduced.
 
**Primary artefact:** information-journey map (retained and extended in Week 2).
 
### 5. Case state
 
Established: Patient A; outpatient clinic; renal panel and HbA1c ordered. New: none. Do not assume: any system names or results.
 
### 6. Links to MLOs
 
- **Primary:** MLO1, MLO2.
- **Supporting:** MLO5, MLO6.
### 7. Proposed Assessment Evidence
 
- Primary: information-journey map.
- OAL: short formative questions distinguishing data, information and knowledge.
**Evidence purpose:** establish whether students understand the basic information journey and the main parts of the ecosystem.
 
---
 
## Week 2 — Healthcare Information Systems and Clinical Workflows
 
### 1. Topics
 
- Functions of healthcare information systems: EHRs, hospital information systems and laboratory information systems (functional level).
- Laboratory information systems and their relationship with clinical systems.
- Clinical workflows and information hand-offs.
- Patient identification, test ordering, specimen registration and result reporting.
- Role-based access and user interactions with information systems.
- System integration and the consequences of incomplete or inconsistent information.
- **System downtime and continuity procedures** — what happens when an information system is unavailable. *(D13)*
- Commercial EHR environments as **generic, vendor-neutral illustrations**. Any vendor-specific statement requires verified documentation.
### 2. Weekly Learning Outcomes
 
1. Describe the roles of common healthcare information systems and distinguish their principal functions.
2. Explain how information systems support different stages of a clinical and laboratory workflow.
3. Analyse how incorrect, missing, delayed or unavailable information can affect laboratory operations and patient safety.
4. Identify appropriate information-system controls for reducing common workflow errors.
### 3. Content Boundaries
 
**Include:**
- Functional roles of EHRs, hospital information systems and LISs.
- Typical clinical and laboratory workflows; user roles, permissions and hand-offs.
- Generic electronic test ordering and result reporting.
- Downtime as a workflow risk at a conceptual level.
**Exclude:**
- Software configuration, system administration and database design.
- Vendor-specific implementation or claims not supported by documentation.
- LIS vs LIMS distinctions and interfaces (Week 4).
**Lens:** identifiers as a **workflow control** — where identity is entered and checked.
 
### 4. Practical or Applied Learning
 
**Activity: Add the systems layer and analyse a failure (Part 2 of the Week 1 artefact)** *(D4)*
 
Students extend their Week 1 map by adding where information is entered, retrieved, transferred or checked by information systems for Patient A's order.
 
Each group then analyses **one** failure scenario:
- A mismatched patient identifier on the specimen label.
- An incorrectly entered test request.
- A result not visible to the intended recipient.
- **The LIS is unavailable for two hours during peak specimen receipt.** *(D13)*
For the chosen failure, students state the consequence and propose one control.
 
**Privacy decision:** students assign role-based access to two roles on their map and justify one restriction.
 
**GenAI:** none.
 
**Primary artefact:** annotated systems-layer map with one failure-mode analysis.
 
### 5. Case state
 
Established: Week 1 map. New: order placed electronically; specimen collected and labelled. Do not assume: any results.
 
### 6. Links to MLOs
 
- **Primary:** MLO2.
- **Supporting:** MLO1, MLO5, MLO6.
### 7. Proposed Assessment Evidence
 
- Primary: annotated map with failure-mode analysis.
- OAL: system-function matching exercise.
**Evidence purpose:** determine whether students can explain how systems support workflows, not merely memorise system names.
 
---
 
## Week 3 — Laboratory Data: Generation, Quality, Meaning and Context
 
### 1. Topics
 
- Types of biomedical and healthcare data: structured and unstructured; qualitative and quantitative.
- Laboratory data generation and the laboratory testing process.
- Pre-analytical, analytical and post-analytical sources of error.
- Data quality dimensions: accuracy, completeness, consistency, timeliness, validity and uniqueness.
- Data provenance and traceability.
- Standardised terminology, units and reference intervals.
- Patient, specimen and testing context.
- Distinguishing an analytical measurement from its clinical interpretation.
- **Data lifecycle beyond generation:** retention, archiving and secondary use, taught and checked at Understand level (v0.2.4, G2). *(links to MLO1 "lifecycle"; assessed in C1.6)*
### 2. Weekly Learning Outcomes
 
1. Classify common biomedical and healthcare data according to their characteristics, intended use and lifecycle stage. *(v0.2.4: "lifecycle stage" added — alignment matrix G2)*
2. Evaluate laboratory data for selected quality problems, including missing values, inconsistent units, implausible values and mismatched identifiers.
3. Explain how specimen characteristics, testing methods, units and reference intervals influence the interpretation of laboratory information.
4. Distinguish the generation of an analytical result from its subsequent validation and clinical interpretation.
### 3. Content Boundaries
 
**Include:**
- Data-quality dimensions; laboratory data and metadata.
- Specimen traceability and provenance.
- Basic standardisation of units and terminology.
- Pre-, intra- and post-analytical error categories.
**Exclude:**
- Advanced statistical modelling or diagnostic algorithms.
- In-depth metrology, method validation or reference-interval derivation.
- Data-cleaning scripts or programming.
- Problems arising **between** systems during transfer (Week 4).
**Lens:** quality **within one dataset** — identifiers, units and codes as data-quality problems.
 
### 4. Practical or Applied Learning
 
**Activity: Investigate a flawed laboratory dataset**
 
Students receive a fictional dataset including Patient A's results and other fictional records, containing selected issues:
- Missing specimen identifiers; duplicate records.
- Inconsistent units; incorrect date formats.
- Implausible values; inconsistent terminology.
- Missing or inappropriate contextual information.
Students classify the problems, explain their consequences and decide whether each can be corrected from a verified source or must be investigated and escalated.
 
**Privacy decision:** the dataset contains one identifier not needed for the audit; students identify and justify removing it.
 
**GenAI — Augment:** after completing their own audit, students ask an approved AI tool to critique it using the fictional dataset only, then verify every AI claim against the data and record which claims were wrong.
 
**Primary artefact:** data-quality audit with correction/escalation justifications.
 
### 5. Case state
 
Established: Weeks 1–2. New: Patient A's renal panel and HbA1c results appear in the lab dataset; one sample carries a haemolysis comment. Do not assume: the clinical meaning of results.
 
### 6. Links to MLOs
 
- **Primary:** MLO1.
- **Supporting:** MLO2, MLO5, MLO6.
### 7. Proposed Assessment Evidence
 
- Primary: data-quality audit.
- OAL: classification of data types and quality dimensions.
**Evidence purpose:** assess whether students critically examine data quality and context rather than assume electronic data are reliable.
 
---
 
## Week 4 — Laboratory Information Management, Interoperability and Healthcare Data Exchange
 
### 1. Topics
 
- **LIS vs LIMS:** patient-centred clinical laboratory systems vs sample-centred research, industrial and quality-control laboratory systems. *(D7; relevant to BMS graduate destinations)*
- Laboratory information workflows and traceability.
- Interfaces between instruments, LISs and other healthcare systems.
- Interoperability levels, **citing the framework used** (e.g. foundational/technical, structural/syntactic, semantic and organisational levels; verify the citation). *(review B22)*
- Data formats, identifiers, terminology and units; preservation of meaning.
- **A limited set of example standards:** one laboratory result message (HL7 v2), FHIR Observation and LOINC, as read-only examples. Verify which are used locally before teaching. *(review B22)*
- Common reasons for failed or incomplete information exchange.
- **NEHR as an exchange destination for laboratory results.** Under the Health Information Act, laboratory test results are among the key health information that licensed providers will be required to contribute. *(D1, D8)*
### 2. Weekly Learning Outcomes
 
1. Explain the principal functions of LISs and LIMSs and distinguish their typical settings.
2. Describe how laboratory information may be exchanged between instruments, laboratory systems, clinical systems and shared records such as NEHR.
3. Distinguish levels of interoperability using relevant examples.
4. Analyse how mismatched identifiers, units, codes or data formats can affect the reliability and usability of exchanged information.
### 3. Content Boundaries
 
**Include:**
- System functions and information flows; conceptual interfaces.
- Basic interoperability concepts and the preservation of meaning.
- The selected example standards only.
**Exclude:**
- Programming interfaces, API development or interface-engine configuration.
- Advanced standards implementation; unverified vendor capabilities.
- Technical architecture of NEHR.
- The assumption that all organisations use the same systems or exchange every type of information.
**Lens:** identifiers, units and codes as **meaning lost or preserved between systems**.
 
### 4. Practical or Applied Learning
 
**Activity: Investigate an interoperability failure**
 
Patient A's result is transferred from the LIS to the clinic EHR and onward to a shared record. Source and destination records contain discrepancies:
- Different units.
- Different test names or codes.
- Inconsistent patient identifiers.
- Missing timestamps.
- A result that has lost its context (e.g. the haemolysis comment).
Students classify each discrepancy by interoperability level, explain its consequence and recommend a control. Simplified message examples are provided read-only; no coding.
 
**Privacy decision:** students decide whether the haemolysis comment and the ordering clinician's free-text note should travel with the result, and justify the choice.
 
**GenAI:** none.
 
**Primary artefact:** interoperability comparison table with controls.
 
### 5. Case state
 
Established: Weeks 1–3. New: result transferred to the clinic EHR and a shared record; discrepancies appear. Do not assume: which discrepancy caused any later event.
 
### 6. Links to MLOs
 
- **Primary:** MLO2.
- **Supporting:** MLO1, MLO5, MLO6.
### 7. Proposed Assessment Evidence
 
- Primary: interoperability comparison table.
- OAL: annotated information-exchange diagram (formative).
**Evidence purpose:** determine whether students understand that successful transmission does not guarantee successful information exchange.
 
---
 
## Week 5 — Laboratory Result Validation and Reporting Safety
 
### 1. Topics
 
- The purpose of laboratory result validation.
- Analytical quality control (IQC, EQA) versus individual-result validation. **Prerequisite check required** — see §8, item 8. *(review B13)*
- Result plausibility and consistency checks.
- Reference intervals, abnormal-result flags and critical values.
- Delta checks and contextual checks.
- Repeat testing, result holds and escalation.
- Autoverification and manual review.
- **Critical-result notification:** timeliness, recipient identification, read-back and documentation. *(review B23)*
- Result reporting, amendments and traceability.
- Human oversight, accountability and patient safety.
- Optional: laboratory accreditation requirements for information management (ISO 15189; verify current edition and local accreditation requirements).
### 2. Weekly Learning Outcomes
 
1. Distinguish analytical quality control from the validation of individual patient results.
2. Apply a supplied set of laboratory validation rules to identify results requiring acceptance, further review or escalation.
3. Explain how reference intervals, critical-value rules, delta checks and contextual information support result review.
4. Justify why some results should not be released automatically and identify the appropriate need for human review.
### 3. Content Boundaries
 
**Include:**
- Conceptual and applied result-validation workflows.
- Common rules used to identify potentially problematic results.
- Automated checks vs professional judgement; escalation and documentation.
- Limitations of rules-based autoverification.
**Exclude:**
- Independent clinical diagnosis.
- Creating real-world release rules or modifying quality systems.
- Complex clinical decision algorithms.
- The assumption that one abnormal flag means a result is erroneous or dangerous.
**Lens:** identifiers as an **identity check before release**.
 
### 4. Practical or Applied Learning
 
**Activity: Laboratory result review simulation**
 
Students receive fictional results, including Patient A's, with supplied reference intervals and validation rules, and classify each as:
1. Accept under the supplied rules.
2. Hold for further review.
3. Escalate according to the supplied protocol.
Cases include: a result outside the reference interval; a potentially implausible result; a significant delta from a previous result; a critical-value flag; a specimen-quality concern (Patient A's haemolysed sample with raised potassium); a result requiring identity confirmation.
 
Students justify each decision from supplied evidence. They do not diagnose.
 
**Privacy decision:** for the critical result, students decide what minimum information is shared by phone and how the recipient is verified.
 
**GenAI — Boundary:** AI is not used for release decisions. Students compare an AI-generated explanation of a delta check with the supplied protocol and identify discrepancies.
 
**Primary artefact:** result-review worksheet with a documented decision per case.
 
### 5. Case state
 
Established: Weeks 1–4. New: Patient A's potassium is raised on a haemolysed sample; a previous result is available. Do not assume: the patient's true potassium level.
 
### 6. Links to MLOs
 
- **Primary:** MLO1, MLO2.
- **Supporting:** MLO3, MLO5, MLO6.
### 7. Proposed Assessment Evidence
 
- Primary: result-review worksheet.
- OAL: short explanation distinguishing automated checks from human review.
**Evidence purpose:** assess application of defined rules, recognition of uncertainty and safe handling of laboratory information.
 
---
 
## Week 6 — Healthcare Data Analytics, Visualisation and Decision Support
 
*(Rescoped in v0.2 — D3)*
 
### 1. Topics
 
- Healthcare data analytics: patient-level vs population-level use of laboratory data.
- Descriptive statistics and summaries.
- Trends, comparisons and patterns in laboratory and healthcare data.
- Selecting appropriate charts; common misleading representations.
- Dashboard interpretation.
- **Four-way distinction:** analytical QC · individual-result validation/autoverification · population analytics · clinical decision support, using Week 5 examples. *(D10)*
- Clinical decision-support (CDS) alerts and model-generated outputs as **outputs to be evaluated**, not models to be built.
- Sensitivity, specificity and positive predictive value **only as needed to judge an alert**, including the effect of prevalence.
- **De-identification, re-identification risk and secondary use** of laboratory datasets. *(D12)*
- Limitations of associations, predictions and automated recommendations; bias in data and outputs.
**Removed from v0.1:** "Overview of predictive models" as a standalone topic. AI-*technology* evaluation moves to Week 7.
 
**OAL key concepts (v0.2.3):** the topics above are taught as five grouped key concepts; no topic is removed (see `05_` architecture).
 
### 2. Weekly Learning Outcomes
 
1. Summarise a supplied biomedical dataset using appropriate descriptive measures.
2. Select and interpret a suitable visualisation for a defined healthcare or laboratory question.
3. Evaluate a dashboard or analytical output for misleading presentation, inappropriate comparison or unsupported conclusions.
4. Distinguish analytical QC, individual-result validation, population analytics and clinical decision support.
5. Evaluate a decision-support or AI-generated output for its limitations and the need for human oversight.
### 3. Content Boundaries
 
**Include:**
- Descriptive analysis; distributions, trends and comparisons.
- Common charts and dashboards.
- Alert performance measures at an introductory level.
- Context, data quality, de-identification and human oversight.
**Exclude:**
- Programming-intensive analytics or advanced statistics.
- Machine-learning development or model internals.
- Evaluation of AI *tools* as products (Week 7).
- The assumption that correlation establishes causation, or that accuracy alone proves clinical usefulness.
### 4. Practical or Applied Learning
 
**Activity: Analyse a laboratory dataset and critique an output**
 
Students use a supplied, de-identified fictional dataset of HbA1c results from a diabetes clinic cohort (including Patient A) and a spreadsheet tool to:
- Calculate selected summary statistics and compare groups or periods.
- Create one appropriate chart and interpret the main pattern.
- Identify one limitation or source of bias.
Then, in a short second part, students critique **one** of: a misleading dashboard, a CDS alert about Patient A's renal function, or an AI-generated interpretation of the dataset.
 
**Privacy decision:** before analysis, students check whether the dataset could re-identify any patient and state one mitigation.
 
**GenAI — Augment:** critique of an AI-generated interpretation (option above); students verify each claim against their own analysis.
 
**Primary artefact:** one chart with a concise interpretation and output critique.
 
### 5. Case state
 
Established: Weeks 1–5. New: clinic cohort dashboard; a CDS alert concerning Patient A's renal function. Do not assume: that the alert is correct.
 
### 6. Links to MLOs
 
- **Primary:** MLO3.
- **Supporting:** MLO1, MLO5, MLO6. *(v0.2: MLO4 S removed; MLO5 S added)*
### 7. Proposed Assessment Evidence
 
- Primary: chart, interpretation and critique.
- OAL: four-way distinction check; alert-performance worked example; **output-evaluation check covering all three output types (dashboard, CDS alert, AI-generated interpretation), so every student is evidenced on MLO3c–e regardless of practical option** *(alignment matrix G3, accepted 12 Nov 2026)*.
**Evidence purpose:** assess whether students interpret data and evaluate conclusions rather than generate charts or repeat an AI explanation.
 
---
 
## Week 7 — Digital Health and Remote Healthcare
 
### 1. Topics
 
- Introduction to digital health; telehealth and telemedicine.
- **Point-of-care testing (POCT) and patient self-testing** (e.g. glucose, INR): device connectivity, data capture and quality assurance outside the laboratory. *(D11 — anchor example)*
- Remote patient monitoring; wearables and connected devices.
- Patient-generated health data and mobile health applications (generic; HealthHub depth is in Week 9).
- **AI-enabled digital-health tools:** evidence of validity, intended use, bias and regulatory status (e.g. software as a medical device; verify current HSA requirements). *(D2, review B16)*
- Integration of digital-health data into healthcare workflows.
- Data quality, reliability and usability challenges.
- Human factors, accessibility and digital inclusion; bias in who benefits. *(moved from Week 8)*
- Digital health as support for, not automatic replacement of, healthcare professionals.
### 2. Weekly Learning Outcomes
 
1. Describe selected digital-health technologies, including POCT, and explain how they generate or use healthcare data.
2. Evaluate the quality, limitations and contextual relevance of data generated by a digital-health technology.
3. Evaluate a digital-health or AI-enabled tool's fitness for a defined purpose, including evidence of validity, bias and regulatory status.
4. Recommend conditions under which a digital-health solution should or should not be used for a defined healthcare need.
### 3. Content Boundaries
 
**Include:**
- Common digital-health applications; data generation, transmission and use.
- Reliability, usability, workflow integration and quality assurance of POCT.
- Awareness-level regulatory status of devices and AI tools.
- Privacy, accessibility and digital inclusion.
**Exclude:**
- Building applications; device engineering; clinical prescribing.
- Claims that consumer wearables equal validated clinical instruments.
- Organisational implementation planning (Week 9).
- Detailed cybersecurity engineering.
**Lens:** **technology fitness for purpose** — does this tool produce data good enough for this decision?
 
### 4. Practical or Applied Learning
 
**Activity: Evaluate a digital-health solution**
 
Following the clinic review, Patient A is offered home glucose self-testing linked to a remote-monitoring service with an AI-generated risk flag. Students evaluate the proposed solution against:
- Suitability for the intended purpose.
- Reliability, completeness and quality assurance of the data.
- Ease of use and accessibility.
- Potential for missing or misleading readings.
- Evidence and regulatory status of the AI flag.
- Privacy and access controls.
- Consequences of missed alerts or over-reliance.
Students make a reasoned recommendation with conditions for use.
 
**GenAI:** none in the task; the AI flag is the object of evaluation.
 
**Primary artefact:** digital-health evaluation matrix with a conditional recommendation.
 
### 5. Case state
 
Established: Weeks 1–6. New: following the clinic review, home self-testing and remote monitoring proposed. Do not assume: device accuracy or the AI flag's validation.
 
### 6. Links to MLOs
 
- **Primary:** MLO4.
- **Supporting:** MLO1, MLO3, MLO5, MLO6.
### 7. Proposed Assessment Evidence
 
- Primary: evaluation matrix and recommendation.
**Evidence purpose:** determine whether students evaluate technology against a defined purpose rather than equate novelty with effectiveness.
 
---
 
## Week 8 — Healthcare Data Privacy, Cybersecurity, Ethics and Governance
 
### 1. Topics
 
- The sensitive nature of healthcare and laboratory data, including genetic information.
- Privacy, confidentiality and appropriate use.
- **Singapore legal and governance framework (awareness level):** *(D1)*
  - **Health Information Act** — Health Information Bill passed 12 January 2026; MOH intends it to take effect from early 2027. Covers mandatory contribution of key health information to NEHR, access limited generally to patient care, prohibition of access for employment or insurance purposes, cybersecurity and data-security requirements, and notification of confirmed incidents and breaches to MOH. **Verify commencement and subsidiary legislation before each delivery.**
  - **Personal Data Protection Act (PDPA)** — scope by provider type to be verified.
  - **Healthcare Services Act** and **Cybersecurity Act** — applicability to be verified.
- Access controls and role-based permissions; "break-glass" access and audit.
- Authentication, audit trails and accountability.
- Common threats: data breaches, phishing, ransomware.
- Data minimisation, retention and secure handling.
- Ethical considerations in healthcare data use. *(Bias and fairness of outputs and tools are taught in Weeks 6 and 7; Week 8 addresses governance of them.)*
- Responsible use of GenAI with healthcare information.
- Incident reporting and risk mitigation.
- **Authentic Singapore anchor case:** one documented incident, e.g. the 2018 SingHealth cyberattack and its Committee of Inquiry report (suitability and sources to be confirmed). *(review B15)*
**OAL key concepts (v0.2.3):** the topics above are taught as five grouped key concepts; no topic is removed (see `05_` architecture).
 
### 2. Weekly Learning Outcomes
 
1. Identify privacy, security and ethical risks associated with handling healthcare data.
2. Explain the purpose of selected governance and security controls, including those required under Singapore's health-information framework.
3. Analyse a healthcare data-handling scenario for legal, ethical or cybersecurity concerns.
4. Recommend proportionate controls and appropriate escalation actions for a defined information-risk scenario.
### 3. Content Boundaries
 
**Include:**
- Core principles of responsible healthcare data handling.
- Awareness of relevant Singapore legislation, distinguishing legal obligations from recommended good practice.
- Access-control and security scenarios; common threats.
- Ethical use of data and AI; incident reporting.
**Exclude:**
- Formal legal advice or interpretation.
- Penetration testing or security configuration.
- The assumption that all data-sharing situations have identical legal requirements, or that one Act applies uniformly to all providers.
- Real patient information.
### 4. Practical or Applied Learning
 
**Activity: Investigate a healthcare data incident**
 
Students examine one fictional incident involving Patient A:
- A laboratory report sent to the wrong recipient.
- Unauthorised access to the patient record.
- A staff member pasting identifiable results into an unapproved GenAI tool.
- A suspicious email requesting access to laboratory records.
Students identify the information at risk, consequences, immediate protective actions, reporting and escalation, and preventive controls. They distinguish what they may do themselves from what authorised personnel must handle.
 
**GenAI — Governance:** the unapproved-tool scenario is the object of analysis.
 
**Primary artefact:** risk-assessment worksheet with justified controls.
 
### 5. Case state
 
Established: Weeks 1–7. New: an information incident involving Patient A's record. Do not assume: that a breach has been confirmed.
 
### 6. Links to MLOs
 
- **Primary:** MLO5.
- **Supporting:** MLO1, MLO2, MLO4, MLO6.
### 7. Proposed Assessment Evidence
 
- Primary: risk-assessment worksheet.
- OAL: scenario-based check on legal obligations vs good practice.
**Evidence purpose:** assess whether students recognise risks and recommend responsible actions, rather than list terminology.
 
---
 
## Week 9 — Singapore's Healthcare Digital Ecosystem: Validation, Implementation and Transformation
 
**Scope note (D5, review B10):** In this week, **"validation" means pre-implementation evaluation of a digital solution** — evidence that it works as intended in the target setting. It is distinct from Week 5 individual-result validation. See Glossary.
 
### 1. Topics
 
- Singapore's healthcare digital ecosystem in depth: building on the Week 1 orientation map.
- Synapxe and its role in the public healthcare technology environment (verify current description).
- NEHR and its role in information sharing; **effect of the Health Information Act** on participation and access from early 2027. *(D1)*
- HealthHub's patient-facing functions, including patients' ability to view NEHR access and set access restrictions. *(D8)*
- Distinctions between institutional systems, shared health-information infrastructure and patient-facing services.
- **Organisational implementation:** stakeholder analysis, workflow integration, usability and human factors, change management. *(D5)*
- Validation before deployment; benefits realisation; monitoring performance, risks and unintended consequences.
**OAL key concepts (v0.2.3):** the topics above are taught as five grouped key concepts; no topic is removed (see `05_` architecture).
 
### 2. Weekly Learning Outcomes
 
1. Describe the roles of selected components of Singapore's healthcare digital ecosystem, including the effect of the Health Information Act, and distinguish the purposes of institutional healthcare systems, shared health-information infrastructure and patient-facing digital services. *(v0.2.4: former WLOs 9.1 and 9.2 merged — alignment matrix G5)*
2. Evaluate the implementation readiness of a proposed healthcare information solution, considering stakeholders, workflow, information quality, usability, safety and change management.
3. Recommend measures for assessing whether a digital-health implementation achieves its intended benefits.
### 3. Content Boundaries
 
**Include:**
- Selected, verified Singapore examples.
- Broad purposes of NEHR, HealthHub and relevant systems.
- Implementation, validation and evaluation principles; stakeholder needs and change management.
**Exclude:**
- Technical architecture of national systems.
- The assumption that NEHR holds every healthcare record (it holds key health information) or that all access is identical.
- Procurement, system administration or infrastructure engineering.
- Re-evaluating a technology's intrinsic fitness for purpose (Week 7).
**Lens:** **organisational implementation** — can this solution work here, for these people, and how will we know?
 
### 4. Practical or Applied Learning
 
**Activity: Evaluate the implementation of an information improvement**
 
Following the clinic review, a fictional community GP clinic takes over Patient A's follow-up. When the Health Information Act takes effect, the hospital laboratory that generates Patient A's results contributes its laboratory reports to NEHR, and the clinic contributes its own specified key health information. The clinic proposes a new electronic result-sharing workflow with the hospital laboratory. *(v0.2.5: D15)*
 
Students evaluate:
- The problem and intended users.
- Stakeholders affected and their concerns.
- Workflow, usability and interoperability implications.
- Privacy and security obligations.
- Implementation barriers and change-management needs.
- Measures of success and evidence needed before wider deployment.
**Communication criterion:** students write a short stakeholder-facing summary of their plan for a non-specialist (e.g. the clinic manager), stating rationale, benefits, risks and trade-offs. This is part of the existing plan, not a new task. *(alignment matrix G4, accepted 12 Nov 2026)*
 
**GenAI — Advance:** students ask an approved AI tool to generate counter-arguments to their plan, then verify each and defend or revise their position.
 
**Primary artefact:** implementation and evaluation plan with justified trade-offs, including the stakeholder-facing summary.
 
### 5. Case state
 
Established: Weeks 1–8. New: community provider; Health Information Act obligations. Do not assume: specific system names or national technical arrangements.
 
### 6. Links to MLOs
 
- **Primary:** MLO4, MLO6.
- **Supporting:** MLO2, MLO3, MLO5. *(v0.2: MLO2 P → S)*
### 7. Proposed Assessment Evidence
 
- Primary: implementation and evaluation plan (with communication criterion).
- OAL: ecosystem-distinction check (institutional vs shared vs patient-facing).
**Evidence purpose:** determine whether students can apply informatics concepts to a realistic implementation problem and communicate it to a stakeholder.
 
---
 
## Week 10 — Integration and Application of Medical Informatics
 
### 1. Topics
 
- Integration of the laboratory and healthcare information journey.
- Data quality and context; systems and interoperability; result validation and reporting safety.
- Analytics and decision support; digital-health integration.
- Privacy, cybersecurity and governance; evaluation of solutions.
- Communication of recommendations and limitations.
### 2. Weekly Learning Outcomes
 
1. Analyse an integrated biomedical or healthcare scenario involving multiple information systems and stakeholders.
2. Identify and prioritise problems involving data quality, information exchange, result validation, analytical interpretation or governance.
3. Propose an improvement to the information workflow, justified by evidence and principles.
4. Communicate the benefits, limitations, risks and trade-offs of the proposed solution.
### 3. Content Boundaries
 
**Include:**
- Integration and application of previously taught concepts.
- A **new case in a new setting** requiring transfer.
- Prioritisation, justification and communication.
**Exclude:**
- Major new technical concepts; programming; clinical diagnosis.
- Reuse of Patient A or reproduction of earlier weekly activities.
### 4. OAL (defined in v0.2 — D14)
 
- Case brief for the new scenario (released at the start of the week).
- Integrative retrieval practice across Weeks 1–9 (mixed-topic quiz with feedback).
- Guidance on the expected structure of the integrated response.
### 5. Practical or Applied Learning
 
**Activity: Integrated healthcare information case**
 
Students receive a **new** fictional scenario in a different setting: a **community anticoagulation INR point-of-care testing network** linking GP clinics, a device connectivity hub, clinic EHRs, NEHR contribution and a network dashboard, with hospital-laboratory POCT oversight *(setting decided 12 Nov 2026)*. The scenario involves a test request, specimen processing, result generation, information transfer and subsequent use.
 
The scenario contains selected issues:
- Incomplete or inconsistent data.
- A potential result-validation concern.
- A mismatch between systems.
- A potentially misleading analytical summary.
- An information-sharing or privacy risk.
Students:
1. Map the relevant information flow.
2. Identify and prioritise the problems.
3. Explain implications for information reliability and workflow safety.
4. Propose corrective or preventive measures.
5. Explain how the solution should be evaluated.
6. Communicate limitations and unresolved uncertainties.
**Individual component:** each student submits or presents an individual analysis of the case's governance issues with proposed controls, and a justification of one prioritised problem and proposed measure, to provide individual evidence and protect academic integrity. *(D14; blueprint C3 individual element)*
 
**GenAI — Advance:** permitted only as defined in the approved assessment rules; verification evidence required.
 
**Primary artefact:** integrated case analysis with a prioritised problem-and-risk table and individual justification.
 
**Summative:** Week 10 hosts component C3 (Option A, decided 1 Nov 2026; see `03_Assessment_Blueprint_v0.1.md`). Weeks 1–9 practicals provide scaffolding; dates and weights TBC.
 
### 6. Links to MLOs
 
- **Primary:** MLO6.
- **Integrative:** MLO1, MLO2, MLO3, MLO4, MLO5.
### 7. Proposed Assessment Evidence
 
- Integrated case analysis and annotated information-flow diagram.
- Prioritised problem-and-risk table.
- Individual governance analysis and justification (written or short presentation; format TBC).
**Evidence purpose:** evaluate whether students integrate the module's concepts and make defensible recommendations in an unfamiliar context.
 
---
 
# 4. Cross-Week Curriculum Alignment
 
**Key:** P = Primary; S = Supporting; I = Integrative. **[changed]** = changed in v0.2.
 
| Week | MLO1 Data | MLO2 Systems | MLO3 Analytics | MLO4 Digital health and AI tools | MLO5 Governance | MLO6 Integration |
|---|---|---|---|---|---|---|
| 1. Introduction and ecosystem | P | P | — | — | S | S |
| 2. Information systems and workflows | S | P | — | — | S | S |
| 3. Laboratory data quality and context | P | S | — | — | S | S |
| 4. Laboratory information management and interoperability | S | P | — | — | S | S |
| 5. Result validation and reporting safety | P | P | S | — | S | S |
| 6. Analytics and decision support | S | — | P | — **[changed]** | S **[changed]** | S |
| 7. Digital health and remote healthcare | S | — | S | P | S | S |
| 8. Privacy, cybersecurity, ethics and governance | S | S | — | S | P | S |
| 9. Singapore's digital ecosystem and implementation | — | S **[changed]** | S | P | S | P |
| 10. Integration and application | I | I | I | I | I | P |
 
### Alignment observations
 
1. **MLO1 and MLO2** are introduced early and revisited throughout. MLO2 now has four primary weeks (1, 2, 4, 5).
2. **MLO3 has one primary week (Week 6).** Week 6 has been rescoped to make this achievable; MLO3 is also applied in Weeks 5, 7, 9 and 10. Summative evidence for MLO3 is in C2.
3. **MLO4 is primary in Weeks 7 and 9.** With D2, Week 6 evaluates *outputs* (MLO3) and Week 7 evaluates *tools* (MLO4).
4. **MLO5 has one primary week (Week 8)** but now produces evidence in every practical from Week 1 through embedded privacy decisions.
5. **MLO6 is cumulative:** Week 9 implementation planning with a communication criterion (G4), Week 10 integration in a new setting.
6. **Assessment alignment:** this table shows learning coverage. Formal assessment is defined in the alignment matrix and `03_Assessment_Blueprint_v0.1.md`.
---
 
# 5. Proposed Assessment Evidence Across the Ten Weeks
 
Formative evidence plan; not a final summative scheme. One primary artefact per practical (D6).
 
| Week | Primary practical artefact | Intended assessment purpose |
|---|---|---|
| 1 | Information-journey map (Part 1) | Foundational understanding of information flows |
| 2 | Systems-layer map with one failure-mode analysis (Part 2) | System functions and workflow risks |
| 3 | Data-quality audit | Identifying and justifying handling of data-quality problems |
| 4 | Interoperability comparison table | Information exchange and preservation of meaning |
| 5 | Result-review worksheet | Applying validation rules and safe escalation |
| 6 | Chart, interpretation and output critique | Analytical interpretation and evaluation of outputs |
| 7 | Digital-health evaluation matrix | Technology fitness for purpose |
| 8 | Risk-assessment worksheet | Responsible handling of healthcare information |
| 9 | Implementation and evaluation plan (with stakeholder-facing summary) | Organisational implementation reasoning and communication |
| 10 | Integrated case analysis + individual justification (C3) | Integration and transfer |
 
### Assessment design considerations
 
Before deciding formal assessments, determine:
- Which MLOs require individual evidence of achievement.
- Which activities are formative and which contribute to grades.
- Individual, pair or group work.
- Required evidence modes: practical application, written analysis, oral communication.
- Academic integrity and GenAI rules for each assessment.
- Proportionate workload for a ten-week module.
- How criteria distinguish description from analysis, evaluation and justified recommendation.
**Recommendation:** do not assign marks to every weekly activity. Use formative tasks to prepare students for a smaller number of well-designed assessments.
 
---
 
# 6. Content Boundaries for the Module as a Whole
 
## 6.1 Emphasise
 
- Applied healthcare and biomedical informatics.
- Laboratory information workflows and systems.
- Data quality, traceability and contextual interpretation.
- Interoperability and reliable information exchange.
- Result validation and reporting safety.
- Basic healthcare data analytics and visualisation.
- Evaluation of analytical, decision-support and AI outputs, and of digital-health and AI tools.
- Privacy, cybersecurity, ethics and governance.
- Singapore healthcare applications.
- Evidence-based evaluation of information workflows and digital solutions.
## 6.2 Do not teach in depth
 
- Programming or software engineering.
- Database administration.
- Advanced statistics or machine learning; development of clinical AI.
- Healthcare IT configuration.
- Cybersecurity engineering.
- Independent clinical diagnosis or treatment.
- Formal legal interpretation.
- Engineering of instruments or national health-information infrastructure.
## 6.3 Expected level of performance
 
Students **explain, interpret, apply, analyse and evaluate** using supplied information and defined scenarios. They do not develop software, author clinical release rules or make clinical decisions beyond their role.
 
## 6.4 GenAI use across the module (D9)
 
| Week | Stage | Use |
|---|---|---|
| 1 | Rule | Introduce the confidentiality rule for AI tools; no AI task |
| 2 | — | None |
| 3 | Augment | AI critiques the student's completed audit; every claim verified against the dataset |
| 4 | — | None |
| 5 | Boundary | AI excluded from release decisions; AI explanation of a delta check compared with protocol |
| 6 | Augment | Critique of an AI-generated interpretation of the dataset |
| 7 | Object | AI risk flag evaluated as a tool, not used |
| 8 | Governance | Unapproved-tool data-entry incident analysed |
| 9 | Advance | AI generates counter-arguments; student verifies and defends |
| 10 | Advance | As permitted by approved assessment rules, with verification evidence |
 
**Rules:** fictional data only; independent attempt before any AI use; AI output is never authoritative because it is fluent; verification must be evidenced.
 
**PAIR (adopted 12 Nov 2026):** wherever students use AI, they document Problem formulation → AI tool selection → Interaction → Reflection. PAIR structures the Augment and Advance stages; it adds no AI use to weeks where the table shows none.
 
## 6.5 Four-way distinction (D10)
 
| Activity | Question it answers | Scope | Taught |
|---|---|---|---|
| Analytical quality control | Is the analytical process performing correctly? | Method/run | Prerequisite; contrasted in Week 5 |
| Individual-result validation / autoverification | Is this patient's result fit to release? | Single result | Week 5 |
| Population analytics | What patterns exist across many results or patients? | Cohort/service | Week 6 |
| Clinical decision support | What might this clinician consider for this patient now? | Clinical decision | Week 6 |
 
---
 
# 7. Singapore Context and Source Verification
 
Singapore examples are chosen because they illuminate learning outcomes, not for local colour.
 
## 7.1 Verified as of 1 November 2026
 
| Item | Status | Source |
|---|---|---|
| Health Information Bill passed | Passed in Parliament 12 Jan 2026 | gov.sg explainer, 13 Jan 2026 |
| Commencement | MOH intends effect from early 2027 | gov.sg explainer |
| Scope | All licensed providers to share key health information with NEHR, including laboratory test results | gov.sg explainer |
| Access | Generally for patient care; employment and insurance purposes prohibited | gov.sg explainer |
| Patient controls | Patients can monitor access and set NEHR access restrictions via HealthHub | gov.sg explainer |
| Security duties | Cybersecurity and data-security requirements; notify MOH of confirmed incidents and breaches | gov.sg explainer |
 
Source: *What is the Health Information Bill?*, gov.sg, 13 January 2026, https://www.gov.sg/explainers/health-information-bill/ (accessed 1 November 2026). Commencement ("early 2027") re-checked 9 November 2026 against MOH's Second Reading speech; see `05_` §6.
 
## 7.2 Requires verification before teaching
 
- HIA commencement date and subsidiary legislation, including definitions of sensitive health information.
- Which data-protection regime applies to public, private and laboratory providers.
- Applicability of the Healthcare Services Act, Cybersecurity Act and HSA software-as-medical-device requirements.
- Current official description of Synapxe.
- Interoperability standards and code sets used locally.
- Any Epic, TD Synergy or Cerner/Oracle Health statement.
- Suitability and sources of the 2018 SingHealth incident case.
- ISO 15189 edition and local accreditation requirements (optional content).
## 7.3 Source-verification rules
 
1. Use authoritative sources for legislation, regulation and national initiatives.
2. Re-verify legal status and terminology before each delivery.
3. Distinguish national infrastructure from institutional systems.
4. Do not imply all healthcare information is stored in one system; NEHR holds key health information.
5. Verify vendor-specific capabilities before using them as examples of actual behaviour.
6. Label illustrative workflows explicitly as generic.
7. Use fictional patient information and synthetic data only.
---
 
# 8. Unresolved Decisions
 
Items 1–5 block approval.
 
| # | Decide or verify | Action | Blocks approval |
|---|---|---|---|
| 1 | Programme-outcome mapping (MLO wording **closed** — approved 1 Nov 2026) | Obtain PLOs from programme documentation | Yes |
| 2 | Assessment blueprint: structure **decided** (Option A, 1 Nov 2026); weights, conditions and GenAI rules pending | See `03_Assessment_Blueprint_v0.1.md` §8 | Yes |
| 3 | ~~Accept proposed MLO3/MLO4 wording (D2)~~ **Closed — approved 1 Nov 2026** | — | — |
| 4 | Teaching calendar and dates for C1–C3 (Week 10 hosts C3 — **decided** 1 Nov 2026) | Confirm with school | Yes |
| 5 | HIA commencement date and subsidiary legislation; cohort timing vs early 2027 | Verify with MOH before each delivery | Yes |
| 6 | Data-protection regime by provider type | Verify with authoritative legal sources | No |
| 7 | Applicability of Healthcare Services Act, Cybersecurity Act and HSA SaMD rules | Verify | No |
| 8 | Prior coverage of IQC/EQA and sensitivity/specificity | Confirm with BMS programme; add OAL refresher if absent | No |
| 9 | Interoperability standards and code sets used locally | Verify with official documentation | No |
| 10 | Vendor claims | Verify or stay vendor-neutral | No |
| 11 | Practical tools (spreadsheet, visualisation, simulated LIS) and approved GenAI tool | Confirm availability and approval | No |
| 12 | 2018 SingHealth case for Week 8 | Confirm suitability | No |
| 13 | Week 9 "Validation": keep with definition, or rename | Owner decides; renaming needs approval | No |
| 14 | ISO 15189 content (optional) | Verify and decide | No |
| 15 | ~~Patient A case outline~~ **Closed — values approved 12 Nov 2026**; maintained in `06_Case_State_Register_v0.1.md` | — | — |
| 16 | ~~Week 10 setting~~ **Closed — community INR POCT network, 12 Nov 2026** | — | — |
 
---
 
# 9. Approval Sequence — Current Position
 
| Stage | Description | Status |
|---|---|---|
| 1 | Curriculum validation (MLOs, scope, hours) | Open — items 1, 4 |
| 2 | Independent critical review | Completed 1 Nov 2026 |
| 3 | Curriculum-owner decisions on review recommendations | D1–D16 applied in v0.2; D2 approved 1 Nov 2026 |
| 4 | Constructive-alignment matrix and assessment blueprint | Working drafts: matrix v0.1.3 (G2–G5 closed); blueprint v0.1.2 (§8 decisions 1–6 open) |
| 5 | Approval and version control | Not started |
| 6 | Weekly instructional design | Week 1 Stages A–C in `W01/`; Stage A for Weeks 2–10 in `05_` |
 
---
 
# 10. Overall Position
 
v0.2 retains the v0.1 sequence, titles and laboratory-centred progression. It corrects the legal content, separates AI across MLO3 and MLO4, rescopes Week 6, removes duplicated practicals, sets one primary artefact per week, threads privacy, Singapore context and GenAI through the module, and defines the longitudinal case and Week 10. v0.2.3 and v0.2.4 record owner decisions of 12 November 2026.
 
The syllabus remains a **working draft** until items 1–5 in Section 8 are closed.
 
---
 
# 11. Glossary (D16)
 
| Term | Meaning in this module |
|---|---|
| Weekly learning outcome (WLO) | What students should be able to do by the end of a week. Replaces "weekly learning objective" used in v0.1. |
| Analytical quality control (QC) | Monitoring analytical performance using control materials (IQC) and external schemes (EQA). Concerns the method or run, not one patient. |
| Individual-result validation | Review of a single patient result before release, using rules and professional judgement. |
| Autoverification | Rule-based automatic release of results meeting defined criteria; results failing criteria go to manual review. |
| Delta check | Comparison of a result with the same patient's previous result to detect implausible change. |
| Critical result | A result requiring urgent notification under a defined protocol. |
| Validation (Week 9 sense) | Pre-implementation evaluation that a digital solution works as intended in its target setting. Distinct from result validation. |
| Population analytics | Analysis of results across many patients or services to identify patterns. |
| Clinical decision support (CDS) | Information or alerts presented to clinicians to support a decision for a specific patient. |
| LIS | Laboratory information system: patient-centred system managing clinical laboratory workflow. |
| LIMS | Laboratory information management system: sample-centred system, typical in research, industrial and QC laboratories. |
| Interoperability | The ability of systems to exchange information and use it with its meaning preserved; taught by level. |
| NEHR | National Electronic Health Record: a national repository of key health information, not every healthcare record. |
| HealthHub | Patient-facing digital service; not the NEHR. |
| Health Information Act | Singapore legislation governing sharing of key health information via NEHR (Bill passed 12 Jan 2026; intended effect early 2027). |
| POCT | Point-of-care testing: testing performed near the patient, outside the central laboratory. |
| INR | International normalised ratio: a standardised clotting-time result used to monitor warfarin therapy (Week 10 case). |
| De-identification | Removing or transforming identifiers to reduce the risk of identifying individuals. |
| PAIR | Problem formulation → AI tool selection → Interaction → Reflection: the documented process students follow whenever AI use is permitted. |