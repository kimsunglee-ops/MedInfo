# Weekly Syllabus — Medical Informatics

Status: **DRAFT v0.1 — pending module lead approval**
Last updated: 2026-11-12
Governed by: `Module_Architecture.md`, `Approved_MLOs.md`

Singapore items marked **[VERIFY]** must be checked against official sources (MOH, Synapxe, HealthHub, Singapore Statutes Online) before content is written. All patient cases and datasets are **synthetic**.

## 1. Overview

| Wk | Topic | Central Question | Big Idea | Bloom peak | MLOs (primary) | Assessment |
|---|---|---|---|---|---|---|
| 1 | Healthcare problems & information | Why can a correct lab result still fail the patient? | Healthcare runs on information; its value depends on reaching the right person, at the right time, in a usable form. | Explain | 1 | Quiz |
| 2 | Health data & data quality | When can we trust a health record? | Data quality is fitness-for-purpose, and it is largely decided at the point of capture. | Interpret | 2 | Quiz, Portfolio 1 |
| 3 | Information systems & interoperability | Why can't a hospital system simply "send" a result to a polyclinic? | Systems must share meaning, not just data — standards make information portable. | Apply | 2, 3 | Quiz |
| 4 | Electronic health records | Does an electronic record make care safer? | EHRs are socio-technical systems: safety depends on design, workflow and use, not digitisation alone. | Analyse | 3 | Quiz, Portfolio 2 |
| 5 | Clinical & laboratory informatics | How does a specimen become a trusted, actionable result? | Laboratory informatics controls error across the total testing process. | Analyse | 2, 3 | Quiz, CA1 released |
| 6 | Health data analytics | What can routine data reveal that a single result cannot? | Aggregated data reveal patterns, but patterns are not explanations. | Analyse | 4 | Quiz, Portfolio 3 |
| 7 | AI in healthcare | Should we trust an algorithm that "outperforms" a specialist? | AI performance is only meaningful relative to its data, validation and context of use. | Evaluate | 4 | Quiz, **CA1 due** |
| 8 | Clinical decision support & digital health | When does a digital alert help — and when does it harm? | Decision support works only when it fits human workflow and judgement. | Evaluate | 3, 4 | Quiz, CA3 released |
| 9 | Data governance, ethics & privacy | Who should be allowed to use your health data, and for what? | Trust is the infrastructure of digital health; governance makes data use legitimate. | Evaluate | 5 | Quiz, Portfolio 4 |
| 10 | Precision & population health | How do lab, genomic and clinical data combine to personalise care and protect populations? | Integration multiplies value — and multiplies quality, equity and governance risks. | Evaluate | 4, 5 | Quiz |
| 11 | Evaluating digital health solutions | How do we know a digital health solution actually works? | Adoption must follow evidence across clinical, usability, economic and ethical dimensions. | Justify | 6 | **CA3 report due** |
| 12 | Future directions & professional practice | What must a biomedical scientist do differently in a data-driven health system? | Informatics competence is now part of biomedical professional competence. | Design / Justify | 6 | **CA3 pitch** |

Cognitive progression: Explain (1) → Interpret (2) → Apply (3) → Analyse (4–6) → Evaluate (7–10) → Justify/Design (11–12). ✔ No regression.

---

## 2. Weekly constructive alignment matrices

### Week 1 — Healthcare problems and information

| Component | Design |
|---|---|
| Central Question | Why can a correct lab result still fail the patient? |
| Big Idea | Healthcare runs on information; its value depends on reaching the right person, at the right time, in a usable form. |
| LO1 | Explain the difference between data, information and knowledge using a laboratory example. (MLO1) |
| LO2 | Map the information flow of a patient episode from test request to clinical action. (MLO1) |
| LO3 | Identify points where information failure can cause patient harm. (MLO1, MLO5) |
| Anchor | DIKW model; case of a critical potassium result that reached no one in time (hypothetical). |
| Augment | Students ask GenAI to list causes of "missed results", then compare against the mapped workflow. |
| Advance | Groups propose one information-flow fix and justify its impact on patient safety. |
| OAL | Microlecture (DIKW); annotated patient-journey diagram; case card; 5-item retrieval check; reflection prompt. |
| Practical | Swim-lane mapping of a synthetic polyclinic → lab → clinician episode; mark failure points; prioritise one fix. |
| Formative assessment | Quiz: classify items as data/information/knowledge; identify the failure point in a short scenario. |
| Evidence of learning | Annotated information-flow map with ≥3 failure points and a justified fix. |
| Singapore context | Overview of healthcare ecosystem: MOH, public healthcare clusters, polyclinics, Synapxe as national HealthTech agency **[VERIFY]**. |
| Biomedical context | The biomedical scientist as information producer: results only matter if acted on. |
| PAIR opportunity | P: why results go missing · A: GenAI to brainstorm causes · I: ask it to rank by likelihood and justify · R: check each cause against the map; flag unsupported claims. |
| Builds on / Prepares for | Laboratory Techniques, Research Methodology / W2 data quality. |

### Week 2 — Health data and data quality

| Component | Design |
|---|---|
| Central Question | When can we trust a health record? |
| Big Idea | Data quality is fitness-for-purpose, and it is largely decided at the point of capture. |
| LO1 | Describe dimensions of data quality (accuracy, completeness, timeliness, consistency, validity). (MLO2) |
| LO2 | Interpret a synthetic laboratory dataset to detect data-quality problems. (MLO2) |
| LO3 | Explain how a data-quality issue could affect a clinical or public-health decision. (MLO1, MLO2) |
| Anchor | Quality dimensions; structured vs unstructured data; units and reference ranges. |
| Augment | Spreadsheet filters/conditional formatting to surface errors; GenAI to suggest validation rules. |
| Advance | Decide whether the dataset is fit for (a) individual care and (b) surveillance; justify difference. |
| OAL | Microlecture; worked example (unit mismatch mmol/L vs mg/dL); interactive "spot the error"; short reading; check. |
| Practical | Data-quality audit of a synthetic HbA1c/creatinine dataset; produce issue log and fitness verdict. |
| Formative assessment | Match errors to quality dimensions; misconception item ("more data = better data"). |
| Evidence of learning | Issue log + fitness-for-purpose judgement (**Portfolio 1**). |
| Singapore context | Data sharing via NEHR depends on upstream quality **[VERIFY current NEHR scope]**. |
| Biomedical context | Pre-analytical errors, mislabelled specimens, units, reference intervals. |
| PAIR opportunity | P: detect invalid records · A: GenAI proposes validation rules · I: students test rules on data, refine false positives · R: report which AI rules failed and why. |
| Builds on / Prepares for | W1 information flow / W3 standards; W5 LIS. |

### Week 3 — Healthcare information systems and interoperability

| Component | Design |
|---|---|
| Central Question | Why can't a hospital system simply "send" a result to a polyclinic? |
| Big Idea | Systems must share meaning, not just data — standards make information portable. |
| LO1 | Describe the main types of healthcare information systems and their roles. (MLO3) |
| LO2 | Explain syntactic vs semantic interoperability using HL7 FHIR, LOINC, SNOMED CT and ICD as examples. (MLO2) |
| LO3 | Apply a terminology standard to code a set of laboratory tests and diagnoses. (MLO2, MLO3) |
| Anchor | System landscape (EHR, LIS, RIS/PACS, pharmacy, patient portal); levels of interoperability. |
| Augment | Use public terminology browsers (e.g. LOINC/SNOMED CT browsers) to find codes. |
| Advance | Diagnose why two "identical" glucose results cannot be merged; recommend a standards-based fix. |
| OAL | System map; microlecture on interoperability; worked FHIR resource (read-only, no coding); coding exercise; check. |
| Practical | Map local test names from two synthetic labs to LOINC; identify mismatches and clinical risk. |
| Formative assessment | Classify standards by purpose; scenario: identify interoperability level that failed. |
| Evidence of learning | Completed mapping table with justified resolution of ≥2 conflicts. |
| Singapore context | National data-exchange and standards adoption **[VERIFY: current Synapxe/MOH standards guidance]**. |
| Biomedical context | Same analyte, different methods/units/specimens — why coding must capture this. |
| PAIR opportunity | P: map test names to codes · A: GenAI suggests LOINC codes · I: students verify every code in official browser · R: record AI error rate; explain why hallucinated codes are dangerous. |
| Builds on / Prepares for | W2 data quality / W4 EHR; W5 LIS. |

### Week 4 — Electronic health records

| Component | Design |
|---|---|
| Central Question | Does an electronic record make care safer? |
| Big Idea | EHRs are socio-technical systems: safety depends on design, workflow and use, not digitisation alone. |
| LO1 | Describe the core functions and structure of an EHR. (MLO3) |
| LO2 | Analyse how EHR design and workflow can introduce or prevent errors. (MLO3) |
| LO3 | Explain how national record sharing supports continuity of care, and its limits. (MLO1, MLO5) |
| Anchor | EHR components; EMR vs EHR vs PHR; socio-technical model. |
| Augment | Navigate a sandbox/synthetic EHR (or provided screenshots) to complete clinical tasks. |
| Advance | Root-cause analysis of a hypothetical EHR-related incident; recommend design/workflow changes. |
| OAL | Microlecture; annotated EHR screen walkthrough; case (copy-paste error, wrong-patient order); check. |
| Practical | Sandbox EHR task + incident analysis using a socio-technical framework. |
| Formative assessment | Identify error type in screenshots; misconception: "digital = accurate". |
| Evidence of learning | Incident analysis with ≥2 contributing factors and justified recommendations (**Portfolio 2**). |
| Singapore context | NEHR; HealthHub as patient-facing access **[VERIFY features and access rules]**. |
| Biomedical context | How lab results appear (and get missed) in the clinician's view. |
| PAIR opportunity | P: root-cause an incident · A: GenAI drafts a fishbone · I: students challenge each cause with case evidence · R: identify AI-assumed facts not in the case. |
| Builds on / Prepares for | W3 systems / W5 LIS; W8 CDS. |

### Week 5 — Clinical and laboratory informatics

| Component | Design |
|---|---|
| Central Question | How does a specimen become a trusted, actionable result? |
| Big Idea | Laboratory informatics controls error across the total testing process. |
| LO1 | Describe LIS functions across pre-analytical, analytical and post-analytical phases. (MLO3) |
| LO2 | Analyse how LIS features (barcoding, autoverification, delta checks, critical-value alerts) reduce error. (MLO2, MLO3) |
| LO3 | Evaluate whether a set of results should be autoverified, held or escalated. (MLO2) |
| Anchor | Total testing process; LIS–analyser–EHR integration; QC data. |
| Augment | Apply delta-check and critical-value rules to a synthetic result batch in a spreadsheet. |
| Advance | Design/critique autoverification rules for a test; justify thresholds and risks. |
| OAL | Process-flow diagram; microlecture; worked delta-check example; interactive decision items; check. |
| Practical | "Validation bench": triage 30 synthetic results — release, hold, repeat or call — with justification. |
| Formative assessment | Phase-of-error classification; calculate a delta and decide action. |
| Evidence of learning | Triage log with rule-based justifications. CA1 brief released. |
| Singapore context | Laboratory accreditation and LIS in public/private labs **[VERIFY: relevant accreditation body and requirements]**. |
| Biomedical context | Core professional domain — direct link to clinical chemistry, haematology, microbiology practice. |
| PAIR opportunity | P: set autoverification limits · A: GenAI proposes thresholds · I: students test against synthetic batch, inspect misclassifications · R: justify final thresholds independently of AI. |
| Builds on / Prepares for | W2–4 / W6 analytics; W8 alerts. |

### Week 6 — Health data analytics

| Component | Design |
|---|---|
| Central Question | What can routine data reveal that a single result cannot? |
| Big Idea | Aggregated data reveal patterns, but patterns are not explanations. |
| LO1 | Explain descriptive, diagnostic, predictive and prescriptive analytics with healthcare examples. (MLO4) |
| LO2 | Interpret summary statistics, trends and dashboards from routine health data. (MLO4) |
| LO3 | Analyse limitations (confounding, bias, missing data) in an analytic conclusion. (MLO2, MLO4) |
| Anchor | Analytics types; surveillance concepts; correlation vs causation. |
| Augment | Pivot tables/charts in a spreadsheet; read a provided dashboard. |
| Advance | Judge whether a dashboard "trend" justifies a public-health action. |
| OAL | Microlecture; worked pivot-table example; dashboard interpretation task; misconception item; check. |
| Practical | Synthetic regional lab-surveillance dataset (e.g. dengue NS1 positives): describe trend, test a claim, write a briefing. |
| Formative assessment | Interpret a chart; spot a misleading visualisation. |
| Evidence of learning | One-page analytic briefing with stated limitations (**Portfolio 3**). |
| Singapore context | Public-health surveillance (e.g. dengue) **[VERIFY: use only publicly published data/descriptions]**. |
| Biomedical context | Lab data as the backbone of disease surveillance. |
| PAIR opportunity | P: interpret a trend · A: GenAI writes a draft interpretation · I: students check every numeric claim against the data · R: annotate overclaims and causal language. |
| Builds on / Prepares for | Basic Statistics, W2 quality / W7 AI. |

### Week 7 — Artificial intelligence in healthcare

| Component | Design |
|---|---|
| Central Question | Should we trust an algorithm that "outperforms" a specialist? |
| Big Idea | AI performance is only meaningful relative to its data, validation and context of use. |
| LO1 | Explain at a conceptual level how supervised machine learning learns from labelled data. (MLO4) |
| LO2 | Interpret AI performance metrics (sensitivity, specificity, PPV/NPV, AUC) from a confusion matrix. (MLO4) |
| LO3 | Evaluate an AI study claim for bias, generalisability and clinical usefulness. (MLO4, MLO5) |
| Anchor | ML concepts without code; training/validation/test; prevalence effect on PPV. |
| Augment | No-code classifier demo or provided model outputs; compute metrics in spreadsheet. |
| Advance | Critique a (simplified) published AI diagnostic study; recommend adopt/pilot/reject. |
| OAL | Microlecture; animated confusion matrix; worked PPV-at-different-prevalence example; case; check. |
| Practical | Digital pathology / blood-film AI case with synthetic outputs: calculate metrics, test subgroup performance, decide. |
| Formative assessment | Calculate metrics; misconception: "95% accuracy = 95% chance the positive is correct". |
| Evidence of learning | Metric calculations + structured critique. **CA1 due.** |
| Singapore context | National AI-in-healthcare guidance **[VERIFY: current MOH/HSA/IMDA AI guidelines]**. |
| Biomedical context | AI in digital pathology, haematology, microbiology imaging. |
| PAIR opportunity | P: is the model fit for our population? · A: GenAI summarises the study · I: students interrogate it for sample, validation, subgroups · R: compare AI summary against the paper; list omissions. |
| Builds on / Prepares for | W6 analytics, Basic Statistics / W8 CDS; W9 ethics. |

### Week 8 — Clinical decision support and digital health

| Component | Design |
|---|---|
| Central Question | When does a digital alert help — and when does it harm? |
| Big Idea | Decision support works only when it fits human workflow and judgement. |
| LO1 | Describe types of clinical decision support and consumer digital health tools. (MLO3) |
| LO2 | Analyse how alert design and alert fatigue affect clinical decisions. (MLO3) |
| LO3 | Evaluate a CDS rule or digital health tool against workflow, safety and usability criteria. (MLO4, MLO6) |
| Anchor | Rule-based vs AI-based CDS; "five rights" of CDS; telehealth, remote monitoring, patient apps. |
| Augment | Simulate a rule set (spreadsheet) on synthetic patients; count true/false alerts. |
| Advance | Redesign an alert to reduce fatigue while preserving safety; justify trade-offs. |
| OAL | Microlecture; alert-burden simulation; case (critical value alert ignored); check. |
| Practical | CDS rule redesign workshop: AKI/creatinine or drug–lab interaction alert. |
| Formative assessment | Classify CDS types; trade-off scenario question. |
| Evidence of learning | Redesigned rule with alert counts before/after and justification. CA3 brief released. |
| Singapore context | Patient-facing digital tools and telehealth **[VERIFY: HealthHub features; telehealth regulation]**. |
| Biomedical context | Lab-driven alerts (critical values, AKI, antimicrobial stewardship). |
| PAIR opportunity | P: reduce alert fatigue · A: GenAI proposes alternative rules · I: students run each on the synthetic set · R: choose and defend a rule on evidence, not AI preference. |
| Builds on / Prepares for | W4–7 / W11 evaluation. |

### Week 9 — Data governance, ethics and privacy

| Component | Design |
|---|---|
| Central Question | Who should be allowed to use your health data, and for what? |
| Big Idea | Trust is the infrastructure of digital health; governance makes data use legitimate. |
| LO1 | Explain key principles of data protection, consent and secondary use relevant to health data in Singapore. (MLO5) |
| LO2 | Analyse privacy and security risks in a health-data scenario, including re-identification. (MLO5) |
| LO3 | Evaluate a proposed secondary use of health data using an ethical and governance framework. (MLO5, MLO6) |
| Anchor | PDPA principles; consent; de-identification vs anonymisation; cybersecurity basics. |
| Augment | Re-identification exercise on a synthetic "de-identified" dataset. |
| Advance | Ethics committee role-play: approve, modify or reject a research data request. |
| OAL | Microlecture; case study of a major healthcare data breach **[VERIFY facts from official public inquiry report]**; reading; check. |
| Practical | Data-request review panel with stakeholder roles; written decision. |
| Formative assessment | Scenario items on consent and permitted use; misconception: "removing names = anonymous". |
| Evidence of learning | Governance decision memo (**Portfolio 4**). |
| Singapore context | PDPA; Health Information Bill; HBRA for research **[VERIFY: current legislative status and provisions]**. |
| Biomedical context | Biobanking, residual specimens, research use of lab data. |
| PAIR opportunity | P: assess a data request · A: GenAI summarises applicable rules · I: students verify each legal claim on Singapore Statutes Online · R: document AI legal inaccuracies; explain why legal claims need primary sources. |
| Builds on / Prepares for | W2, W4, W7 / W10 integration; W11 evaluation. |

### Week 10 — Integrated applications: precision and population health

| Component | Design |
|---|---|
| Central Question | How do lab, genomic and clinical data combine to personalise care and protect populations? |
| Big Idea | Integration multiplies value — and multiplies quality, equity and governance risks. |
| LO1 | Explain how integrated data support precision medicine and population health management. (MLO1, MLO4) |
| LO2 | Interpret a pharmacogenomic or risk-stratification output for a synthetic patient. (MLO4) |
| LO3 | Evaluate equity, consent and data-quality risks of integrated data initiatives. (MLO5) |
| Anchor | Precision medicine pipeline; pharmacogenomics; risk stratification; population health. |
| Augment | Use public resources (e.g. ClinPGx/PharmGKB, CPIC guidelines) to interpret a genotype. |
| Advance | Advise on a synthetic patient's therapy using genotype + lab + clinical data; flag uncertainty. |
| OAL | Data-integration diagram; worked pharmacogenomic example; case; check. |
| Practical | Integrated case: synthetic patient record + genotype → recommendation; then population view of the same cohort. |
| Formative assessment | Interpret a genotype–phenotype table; equity scenario. |
| Evidence of learning | Patient-level recommendation + population-level risk note with limitations. |
| Singapore context | National precision medicine and population health initiatives **[VERIFY: current programme names, status and scope]**. |
| Biomedical context | Molecular biology, genetics and bioinformatics applied to care. |
| PAIR opportunity | P: interpret a genotype for prescribing · A: GenAI explains the gene–drug pair · I: students cross-check against CPIC/ClinPGx · R: identify outdated or overconfident AI statements. |
| Builds on / Prepares for | Molecular Biology, Basic Bioinformatics, W6–9 / W11. |

### Week 11 — Evaluating digital health solutions

| Component | Design |
|---|---|
| Central Question | How do we know a digital health solution actually works? |
| Big Idea | Adoption must follow evidence across clinical, usability, economic and ethical dimensions. |
| LO1 | Describe evaluation dimensions and frameworks for digital health technologies. (MLO6) |
| LO2 | Evaluate a digital health solution against an evidence framework. (MLO6) |
| LO3 | Justify an adoption recommendation for a specified healthcare setting. (MLO6) |
| Anchor | Evaluation frameworks (e.g. NICE Evidence Standards Framework, WHO digital health evaluation guidance); outcomes vs outputs. |
| Augment | GenAI-assisted evidence scan; students verify sources. |
| Advance | Groups finalise CA3 evaluation and recommendation. |
| OAL | Microlecture; framework walkthrough; worked evaluation of an example app; check. |
| Practical | CA3 studio: peer review of draft evaluations against rubric. |
| Formative assessment | Peer feedback using rubric; self-check on evidence quality. |
| Evidence of learning | **CA3 report due.** |
| Singapore context | Health technology assessment and procurement considerations **[VERIFY: ACE/MOH HTA role]**. |
| Biomedical context | Evaluating lab-related tools (e.g. point-of-care testing connectivity, AI triage). |
| PAIR opportunity | P: build an evidence base · A: GenAI finds candidate sources · I: students verify existence and claims of each source · R: declare AI use; list rejected sources and why. |
| Builds on / Prepares for | All prior weeks / W12 pitch. |

### Week 12 — Future directions and professional practice

| Component | Design |
|---|---|
| Central Question | What must a biomedical scientist do differently in a data-driven health system? |
| Big Idea | Informatics competence is now part of biomedical professional competence. |
| LO1 | Justify a digital health recommendation to a stakeholder panel. (MLO6) |
| LO2 | Evaluate emerging trends (GenAI, automation, wearables, federated data) for impact on biomedical roles. (MLO5, MLO6) |
| LO3 | Design a personal informatics development plan linked to professional practice. (MLO6) |
| Anchor | Trend scan; informatics roles in labs and health systems. |
| Augment | GenAI used as simulated stakeholder to stress-test pitch arguments. |
| Advance | CA3 pitch and defence; personal development plan. |
| OAL | Short trend microlectures; career/role profiles; reflection. |
| Practical | **CA3 pitch** + module synthesis (revisit Week 1 information map with new lens). |
| Formative assessment | Final reflection against MLOs. |
| Evidence of learning | Pitch performance; development plan. |
| Singapore context | Healthcare workforce and digital transformation directions **[VERIFY: current national plans]**. |
| Biomedical context | Future lab: automation, digital pathology, data roles. |
| PAIR opportunity | P: anticipate stakeholder objections · A: GenAI role-plays stakeholder · I: students rebut and refine · R: reflect on which objections AI missed. |
| Builds on / Prepares for | Whole module / Industry attachment and practice. |

---

## 3. Coherence check

| Check | Result |
|---|---|
| Prerequisites | Draws on Basic Statistics (W6–7), Molecular Biology/Bioinformatics (W10), Lab Techniques (W1, W5). No programming required. ✔ |
| Repetition | Data quality revisited intentionally (W2, W3, W5, W6) with rising cognitive level. Watch W8/W11 evaluation overlap. ⚠ |
| Conceptual progression | Information → data → systems → analytics/AI → decisions → responsibility → integration. ✔ |
| Cognitive progression | Explain → Interpret → Apply → Analyse → Evaluate → Justify/Design. ✔ |
| Practical progression | Mapping → auditing → coding → analysing → deciding → redesigning → recommending. ✔ |
| Assessment progression | Portfolio (W2–9) → CA1 (W7) → CA3 (W11–12). ✔ |
| GenAI progression | Brainstorm/verify → test AI-generated rules → critique AI claims → defend against AI stakeholder. ✔ |

## 4. Risks and decisions required

| # | Issue | Consequence | Proposal | Decision |
|---|---|---|---|---|
| 1 | Assessment structure is proposed, not sourced | Misalignment with approved syllabus | Confirm against official module document | Module lead |
| 2 | W7 (AI) + CA1 due same week | Workload peak | Move CA1 due to W8 or reduce W7 practical scope | Module lead |
| 3 | W5 and W10 content-heavy | OAL overload (>2 h) | Limit to 5 learning objects; cut breadth not depth | Developer |
| 4 | Sandbox EHR availability (W4) | Practical may be screenshot-only | Confirm tool access by W2 | IT / module lead |
| 5 | Many Singapore facts flagged [VERIFY] | Inaccuracy risk | Verify during storyboard stage, cite sources | Developer |

## 5. Approval record

| Version | Date | Change | Approved by |
|---|---|---|---|
| 0.1 | 2026-11-12 | Initial 12-week draft | — |
