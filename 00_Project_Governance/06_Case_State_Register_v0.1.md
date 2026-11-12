# Medical Informatics — Case-State Register
 
**Module:** Medical Informatics, Year 3 Diploma in BMS, Ngee Ann Polytechnic
**Version:** 0.3 (12 November 2026)
**Status:** §2–§5 **approved** (curriculum owner: D2 and D12, 12 Nov 2026). §2a records facts released by the Week 2–5 Stage B packages; §2b (W6–W9) and §6 (W10) are **proposed** pending gate B, D13 and D15.
**Baseline:** syllabus v0.2.4 §3.0; `05_Weekly_Learning_Architecture_W2-W10_v0.1.md` §3; `W01/` Stage A–C
 
**Purpose:** the single authoritative record of what is established about Patient A, and when students learn it. Every weekly package checks its case content against this register before release. When a week adds a fact, update this register in the same change.
 
All people, places, identifiers and values are **fictional and synthetic**. Values are **teaching values**, not a real laboratory's reference intervals or protocol.
 
---
 
## 1. Rules
 
1. Students may rely only on facts released in the current or an earlier week (the "Released" column).
2. Lecturer-only notes (§4) are never shown to students unless a later week releases them here first.
3. Quiz or OAL hypotheticals that involve Patient A begin with "Suppose…", or use another fictional patient, so that they are not read as case facts (Week 1 issue I11).
4. Teaching examples that are not case facts use "a clinic patient" or "Patient B", never Patient A (Week 1 issue I10).
5. No identifier may resemble an NRIC/FIN format (`04` §10).
6. Week 10 uses a separate case (§6); nothing about Patient A carries into it.
---
 
## 2. Established facts (student-facing)
 
| Fact | Released | Source |
|---|---|---|
| Patient A is a fictional adult with type 2 diabetes | W1 | Syllabus §3.0; W1 case card |
| Attends the outpatient clinic at **Riverside General Hospital** (fictional) | W1 | W1 practical §3 |
| At today's review, the doctor orders a **renal panel (including potassium)** and **HbA1c** | W1 | W1 case card |
| Blood is taken in the clinic and sent to the hospital laboratory; results return to the ordering doctor | W1 | W1 case card |
| Specimen received in the laboratory at **10:15**, linked to Patient A's renal-panel request | W1 | W1-LO2-S3 item 5 |
| Patient A is **not admitted**; later events follow the clinic review | W1 (implicit); stated W7 | Syllabus v0.2.3 §3.0 |
| Order placed electronically; specimen collected and labelled | W2 | Syllabus W2 §5 |
 
### 2a. Facts released by Stage B packages (v0.2)
 
| Fact | Released | Source package |
|---|---|---|
| Clinic review and collection on **10 March 2026**, 08:40; ordering doctor **Doctor 1**; covering **Doctor 2**; hospital no **RGH-204417** | W2 | W02 practical §3 |
| Laboratory number **26-0518**; sodium **139 mmol/L** (renal panel) | W3 | W03 practical §5 |
| Results reported **11:32**; sent to clinic EHR (received 11:33) and to a shared record by overnight batch (entry created 2026-03-13 02:00) | W4 | W04 practical §5 |
| Fictional clinician free-text note on the request (employment concern) | W4 | W04 practical §5.1 |
| Haemolysis index **moderate**; previous results dated **8 December 2025**; analytical QC within limits | W5 | W05 practical §3 |
 
**Week-local patients** (not part of the longitudinal case; no facts carry forward): W3 extract RGH-118203, -337910, -251146, -402278, -163390; W5 Patients G, H, J, L, M, N. **OAL storyboards:** W2 worked example (unnamed clinic patient, urine culture); W3 worked example RGH-601233, -602871, -60287 (invalid format, deliberate); W4 worked example RGH-604418; W5 Patients Q (RGH-605120), R (RGH-605377), S (RGH-605641). Reserve RGH-60xxxx numbers for OAL examples.
 
---
 
### 2b. Facts released by W6–W9 Stage B packages (v0.3; proposed)
 
| Week | Fact | Source |
|---|---|---|
| 6 | Repeat potassium 4.6 (non-haemolysed). Cohort file: Patient A = StudyID C-087, single row 40-49/F/sector 54/P2/2026-03/8.1%. **Sex (F) and age band (40–49) become inferable (D13)** | `W06/` package, CSV |
| 6 | Fictional CDS "AKI risk" alert fires on eGFR 61 → 52; PPV ≈ 20% in the teaching example | `W06/` package |
| 7 | 4-week home glucose log (52 rows; gap 31 Mar–2 Apr; duplicate 7 Apr; 24.8 contamination 9 Apr; 11 Apr clock error; 13–14 Apr in mg/dL). Fictional GlucoLink Home meter and RiskSense AI flag (HIGH on 13 Apr, probable unit artefact) | `W07/` package, CSV |
| 8 | Four incident variants (misdirected report to Hillcrest Family Clinic; after-hours LIS access; public GenAI paste; phishing email quoting 26-0518). None confirms a breach. Teaching assumption: HIA CS/DS duties apply to RGH | `W08/` package |
| 9 | Harbourview Family Clinic (fictional, 4 GPs; Doctor 3); readiness checklist R1–R11; PDF route today | `W09/` package |
 
## 3. Results and values (approved D2)
 
| Item | Value | Units | Released | Notes |
|---|---|---|---|---|
| Potassium (index specimen) | **6.3** | mmol/L | W3 | Carries a **haemolysis comment** |
| Creatinine | **118** | µmol/L | W3 | = 1.33 mg/dL (for the W4 unit discrepancy) |
| eGFR | **52** | mL/min/1.73 m² | W3 | Reported by the laboratory; the equation is not taught |
| HbA1c | **8.1** | % (DCCT) | W3 | = **65** mmol/mol (IFCC); both units support the W3 unit-inconsistency task |
| Previous potassium (≈ 3 months earlier) | **4.4** | mmol/L | W5 | Supports the delta check |
| Previous eGFR (≈ 3 months earlier) | **61** | mL/min/1.73 m² | W5 | |
| Repeat potassium, recollected non-haemolysed specimen | **4.6** | mmol/L | W6 | Resolves W5; students must not assume it during W5 |
| Teaching reference interval, potassium | **3.5–5.1** | mmol/L | W1 (as generic teaching example) | Matches W1-LO2; reuse in W3 and W5 |
 
---
 
## 4. Week-by-week case state
 
| Week | Established before | New this week | Do not assume |
|---|---|---|---|
| 1 | — | §2 W1 facts | System names; results |
| 2 | W1 | Electronic order; specimen collected and labelled; systems layer added to W1 map | Results |
| 3 | W1–2 | §3 index results with haemolysis comment, inside a flawed laboratory dataset | Clinical meaning |
| 4 | W1–3 | Result sent to clinic EHR and shared record; discrepancies in units, test name/code, identifier, timestamp; haemolysis comment lost | Which discrepancy caused any later event |
| 5 | W1–4 | Previous potassium 4.4; previous eGFR 61 | True potassium |
| 6 | W1–5 | Repeat potassium 4.6; de-identified clinic HbA1c cohort (includes Patient A's 8.1%); CDS alert on eGFR fall 61 → 52 | That the alert is correct |
| 7 | W1–6 | Following the clinic review, home glucose self-testing with remote monitoring and an AI risk flag proposed | Device accuracy; AI flag validation |
| 8 | W1–7 | One information incident involving Patient A's record (four variants, one per group) | That a breach is confirmed |
| 9 | W1–8 | Fictional community GP clinic (Harbourview) takes over Patient A's follow-up; electronic result delivery from RGH proposed. RGH laboratory contributes its reports to NEHR; the clinic contributes its own specified information (D15, proposed) | Specific system names; national technical arrangements |
| 10 | — | Separate case (§6) | Anything from Patient A |
 
### Design constraints for Stage B (lecturer-facing; approved with D2)
 
- **W5 teaching ruleset:** the critical-potassium threshold must be **≤ 6.3 mmol/L** (recommended teaching threshold ≥ 6.0), so Patient A's result raises the real conflict between critical-result notification and a haemolysed specimen. Label the ruleset "teaching ruleset — not a real laboratory protocol".
- **W4 discrepancies:** use creatinine µmol/L vs mg/dL and HbA1c % vs mmol/mol as unit mismatches; the haemolysis comment is the context loss.
- **W6 alert:** the eGFR fall (61 → 52, about 15%) triggers the fictional CDS alert. The alert's rule and threshold are set in W6 Stage B.
- **W7 readings:** the 4-week glucose log is created in W7 Stage B and recorded here.
- **W8 incidents:** none of the four variants confirms a breach in the scenario text.
---
 
## 5. Identifiers and lecturer-only values (approved D12, 12 Nov 2026)
 
These let W2–W5 use realistic identity checks without inventing details each week. ◇ marks values approved in D12.
 
| Item | Proposed value | Released | Rationale |
|---|---|---|---|
| ◇ Hospital number | **RGH-204417** | W2 | Second identifier for identity checks; "RGH-" + 6 digits is deliberately unlike NRIC/FIN |
| ◇ Laboratory number format | **YY-NNNN** (index specimen **26-0518**) | W3 | Matches the W1 quiz example format (26-0451) |
| ◇ Collection time | **08:40** | W2 | Same time as the W1 teaching example. With receipt at 10:15, this gives a 95-min collection-to-receipt interval that W3 can examine (delayed separation, per the W1-LO2 knowledge example) |
| ◇ Doctors | **Doctor 1** (ordering), **Doctor 2** (covering, same clinic) | W2 | Role labels, not names; supports "result not visible to intended recipient" |
| ◇ Haemolysis comment text | "Specimen haemolysed. Potassium may be falsely elevated." | W3 | Same wording reused in W4 (lost) and W5 (decision) |
| ◇ Sex and date of birth | **Not released.** Lecturer-only: female, born 1984 (age 42) | Only if a week needs it | See consistency note |
 
**Lecturer-only consistency note:** with the CKD-EPI 2021 creatinine equation, creatinine 118 µmol/L gives an eGFR of about 51–52 for a woman aged about 40–42. About 103 µmol/L would give the previous eGFR of 61. If a later week releases a previous creatinine, use about 103 µmol/L. Verify which eGFR equation Singapore laboratories report before stating it to students; the module does not teach the equation.
 
---
 
## 6. Week 10 transfer case (separate)
 
Fictional **Lakeside Anticoagulation Network**: clinics Alder (AL-), Birch (BI-), Cedar (CE-), Damar (DM-); Model Q POCT INR meters; LinkHub connectivity hub; Northshore Hospital (NSH) laboratory for POCT QA and venous confirmation; fictional protocol P1–P5 (venous confirmation > 4.5; urgent ≥ 8.0). Extract: 28 uploads, 1–11 Sep 2026 (`scripts/gen_w10.py`). Seeded issues S1–S6 and discriminator U-1006 in the marking guide. Patient IDs: clinic prefix + 4 digits; NetworkKey NK-5xxx. Shares no people, places or identifiers with Patient A. NEHR feed is a **case assumption** (POCT scope unverified).
 
---
 
## 7. Change log
 
| Version | Date | Change | Authority |
|---|---|---|---|
| 0.1 | 12 Nov 2026 | Register created; §2–§4 values approved (D2); §5 proposed | Curriculum owner |
| 0.2 | 12 Nov 2026 | §5 approved (D12); §2a added for facts released in W2–W5 Stage B practical packages | Curriculum owner |
| 0.3 | 12 Nov 2026 | §2b (W6–W9) and §6 (W10) added; W9 row corrected per MOH HIA FAQ v1.2 (D15) | Proposed; gate B |