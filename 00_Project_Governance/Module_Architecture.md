# Module Architecture — Medical Informatics

Status: **DRAFT v0.1 — pending module lead approval**
Last updated: 2026-11-12

## 1. Module purpose

Enable Biomedical Science students to understand, interpret and responsibly apply information, data, digital technologies and computational approaches that support healthcare, biomedical practice, clinical decision-making, health systems and population health.

## 2. Graduate capability

> A graduate who can **trace how biomedical and clinical data become healthcare decisions**, **judge whether those data, systems and algorithms are trustworthy**, and **recommend responsible digital solutions** to healthcare problems within Singapore's health ecosystem.

Capability components:

| Capability | Meaning for a biomedical scientist |
|---|---|
| Information literacy | Knows where health data come from, how they move and who uses them |
| Data judgement | Assesses quality, standardisation and fitness-for-purpose of lab/clinical data |
| Systems thinking | Sees EHR, LIS and CDS as socio-technical systems embedded in workflows |
| Analytical interpretation | Reads analytics and AI outputs critically, incl. performance metrics and bias |
| Responsible practice | Applies privacy, consent, governance and ethics to data and AI use |
| Solution evaluation | Weighs evidence, stakeholders and risk to recommend digital health solutions |

## 3. Intellectual architecture

Bridge from discipline to decision:

```
Biomedical Science
 → Healthcare problems
   → Health data
     → Information systems
       → Analytics / AI
         → Clinical & healthcare decisions
           → Ethical, legal & professional implications
```

Four conceptual phases:

| Phase | Weeks | Driving question | Cognitive emphasis |
|---|---|---|---|
| A. Foundations: information & data | 1–2 | What information does healthcare need, and can we trust it? | Explain → Interpret |
| B. Systems: how data move and work | 3–5 | How do systems capture, share and act on biomedical data? | Apply → Analyse |
| C. Intelligence: from data to decisions | 6–8 | What can analytics and AI tell us, and when should we act on it? | Analyse → Evaluate |
| D. Responsibility & integration | 9–12 | How do we use health data and digital solutions responsibly and effectively? | Evaluate → Justify → Design |

Through-lines (revisited every phase):

1. **Data trust** — quality, provenance, standards (W2 → W3 → W5 → W6 → W7 → W10)
2. **Decision impact** — who acts on information and with what consequence (W1 → W4 → W8 → W11)
3. **Responsible use** — privacy, ethics, bias, governance (W2 → W7 → W9 → W10 → W12)
4. **GenAI literacy** — progressive PAIR use, from supported (Anchor) to critical (Advance)

Running case (recommended): a single fictional patient journey — e.g. a patient with suspected diabetes/CKD moving from polyclinic → lab → hospital → home monitoring — reused across weeks to connect topics. *Hypothetical scenario; must not depict real patients or institutions' internal processes.*

## 4. Weekly structure (summary)

| Wk | Topic | Phase |
|---|---|---|
| 1 | Healthcare problems and information | A |
| 2 | Health data and data quality | A |
| 3 | Healthcare information systems & interoperability | B |
| 4 | Electronic health records | B |
| 5 | Clinical & laboratory informatics | B |
| 6 | Health data analytics | C |
| 7 | Artificial intelligence in healthcare | C |
| 8 | Clinical decision support & digital health | C |
| 9 | Data governance, ethics and privacy | D |
| 10 | Integrated applications: precision & population health | D |
| 11 | Evaluating digital health solutions | D |
| 12 | Future directions & professional practice | D |

Details: `Weekly_Syllabus.md`.

## 5. Learning model

| Component | Time/week | Function |
|---|---|---|
| OAL | 2 h | Engage → Anchor → Explore → Augment (4–6 learning objects, retrieval checks) |
| Practical/application | 2 h | Apply → Advance → Reflect: Problem → Data → Interpretation → Decision → Justification → Reflection |
| Self-directed | ~1–2 h | Preparation, reflection, assessment work |

Notional total ≈ 5–6 h/week. **[VERIFY]** against institutional CU-to-hours conversion.

## 6. Assessment strategy — PROPOSED

**[DECISION REQUIRED]** No assessment brief exists in `01_Source_Materials/Assessments/`. The structure below is proposed and must be checked against the approved module syllabus and institutional assessment policy.

| Component | Weight | Timing | Type | MLOs | Evidence |
|---|---|---|---|---|---|
| CA1 Data & Systems Case Analysis | 30% | Due Wk 7 | Individual written case analysis of a lab/clinical data scenario | 1, 2, 3 | Data-quality audit, information-flow map, justified system recommendations |
| CA2 Practical Portfolio | 20% | Wks 2–10 (selected) | Individual; 4 selected practical outputs + PAIR reflections | 2, 3, 4, 5 | Practical artefacts, AI-verification logs |
| CA3 Digital Health Solution Evaluation | 40% | Report Wk 11, pitch Wk 12 | Group report + presentation | 4, 5, 6 | Evidence-based evaluation and justified recommendation |
| Weekly formative quizzes | 10% (or 0%) | Wks 1–12 | Online MCQ/short answer | 1–5 | Retrieval and application |

Assessment progression: Interpret (CA1) → Analyse/Apply (portfolio) → Evaluate/Justify (CA3).

## 7. GenAI integration principle

AI must increase cognitive quality, not automate learning. Use progresses:

| Phase | Typical AI role |
|---|---|
| A | Explanation partner; students check AI definitions against sources (Anchor) |
| B–C | Comparison, critique, hypothesis generation; students verify against data/standards (Augment) |
| D | AI as a tool under evaluation and as a drafting partner whose output students must justify, correct and own (Advance) |

Assessment GenAI rules: declared, logged and reflected on (PAIR Reflection); **[VERIFY]** institutional GenAI policy.

## 8. Design constraints

- No programming; tools limited to spreadsheets, provided dashboards, no-code/low-code demos, sandbox/synthetic records.
- Synthetic or openly licensed data only; no real patient data.
- Singapore facts verified at time of writing and re-checked before each release.

## 9. Change control

Changes to this file require: identified problem → consequence → proposed revision → module lead decision → version increment and entry below.

| Version | Date | Change | Approved by |
|---|---|---|---|
| 0.1 | 2026-11-12 | Initial draft | — |
