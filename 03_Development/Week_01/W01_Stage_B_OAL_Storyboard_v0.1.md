# Week 1 — Stage B: OAL Storyboard
 
**Module:** Medical Informatics (Year 3 BMS, Ngee Ann Polytechnic)
**Week:** 1 — Introduction to Medical Informatics and the Healthcare Information Ecosystem
**Version:** 0.1.1 (12 November 2026)
**Status:** Approved at design gate B; v0.1.1 applies decision D10 (12 Nov 2026): the potassium teaching example in LO2-S2 and LO2-S3 item 2 is no longer attributed to Patient A, because Patient A's result is first released in Week 3 (`06_Case_State_Register_v0.1.md`)
**Baseline:** `W01_Stage_A_Instructional_Design_v0.1.md` (approved 1 Nov 2026); T&L Design v0.1.1 §2.1; Singapore Context v0.1
 
**Scope:** screen-level storyboard with narration key points, visuals, interactions and feedback. Full narration scripts (Stage D) and quiz items (Stage C) follow. Brightspace build (Stage E) follows the production specification, still to be supplied.
 
**Conventions**
- Screen IDs: `W1-LOx-Sy`.
- Narration time ≤ 8 min per segment; total narrated time ≈ 30 min.
- All patient details are fictional. No real identifiers or NRIC-style numbers.
- Every visual has alt text; every narrated segment has captions and a transcript; every drag-and-drop has a keyboard or dropdown alternative.
---
 
## Overview
 
| LO | Title | Time | Screens | WLO |
|---|---|---|---|---|
| LO1 | Patient A's test | 10 min | 3 | Engage |
| LO2 | What is medical informatics? | 25 min | 5 | 1.1, 1.2 |
| LO3 | The journey of a test | 30 min | 5 | 1.3, 1.4 |
| LO4 | Who does what in Singapore | 20 min | 4 | Context for 1.1, 1.4 |
| LO5 | Looking after patient information | 15 min | 4 | 1.4 (MLO5) |
| LO6 | Check and prepare | 20 min | 3 | All |
| | **Total** | **120 min** | **24** | |
 
---
 
## LO1 — Patient A's test (10 min)
 
| Screen | On-screen content | Narration key points | Visual | Interaction and feedback |
|---|---|---|---|---|
| W1-LO1-S1 | Title; week question: *When an analyser produces a number, why is that not yet a reliable result in the doctor's hands?* | Welcome; this module follows one fictional patient's test; today we look at the people and information around it | Week banner; journey icon strip | None |
| W1-LO1-S2 | **Case card:** Patient A, a fictional adult with type 2 diabetes, attends an outpatient clinic at a fictional hospital. The doctor orders a renal panel (including potassium) and HbA1c. | Introduce Patient A; stress fictional; we will not interpret results; we follow the journey | Case card illustration (no faces, no real hospital names) | **Predict:** "How many different people will handle information about this test before the doctor acts on it?" (free number). Feedback: "Most students underestimate. Keep your number — you will check it in LO3." |
| W1-LO1-S3 | Prior-knowledge check (ungraded, 3 items) | — | — | See items below |
 
**LO1-S3 prior-knowledge items (ungraded)**
 
| # | Item | Expected answer | Feedback |
|---|---|---|---|
| 1 | Name two patient identifiers that should be checked before blood is collected. | Any two agreed identifiers (e.g. full name and date of birth, or name and hospital number) | "Correct identification at collection protects every later step. Week 2 returns to identifiers as a workflow control." |
| 2 | Put in order: analysis · specimen received in the laboratory · test ordered · result reported | Ordered → received → analysis → reported | "This is the backbone of today's journey map." |
| 3 | True or false: if the analyser's quality control is in range, every result from that run is reliable for the patient. | False | "QC tells us the analytical process is working. It does not tell us the specimen belonged to the right patient or reached the right doctor. LO3 shows why." |
 
---
 
## LO2 — What is medical informatics? (25 min)
 
| Screen | On-screen content | Narration key points | Visual | Interaction and feedback |
|---|---|---|---|---|
| W1-LO2-S1 | Microlecture 1 (≤ 7 min): *What medical informatics is* | Medical informatics uses data, information and systems to support care and laboratory work. It is not "IT support". For BMS graduates it is about making results reliable, findable and safe to use. Three examples: a lab tracking specimens; a clinician viewing a result; a team reviewing a clinic's HbA1c trend. | Three-panel illustration; definition card | None |
| W1-LO2-S2 | Microlecture 2 (≤ 7 min): *Data → information → knowledge* | **Data:** recorded values without enough context to act on (an analyser shows "5.8"). **Information:** data with context — whose, what test, units, when, reference interval ("Potassium 5.8 mmol/L, Patient B — a fictional clinic patient — collected 08:40, reference 3.5–5.1"). **Knowledge:** understanding or rules used to act ("delayed separation of blood can falsely raise potassium, so specimens must reach the laboratory within a stated time"). The boundary depends on context. *(v0.1.1: example attributed to Patient B, not Patient A — D10.)* | Layered pyramid with the potassium example at each level | None |
| W1-LO2-S3 | Interactive sort: 8 laboratory examples | Instruction only | Three drop zones: Data · Information · Knowledge | Drag-and-drop (dropdown alternative); item feedback below |
| W1-LO2-S4 | "Same item, different category?" | Context changes category: "5.8" becomes information when linked to a patient, test, unit and time. Missing context turns information back into data — a theme for Weeks 3 and 4. | Before/after card | Reflection prompt (not marked): "Which example was hardest to classify, and what context would settle it?" |
| W1-LO2-S5 | Summary card | — | Definitions; link to glossary | None |
 
**LO2-S3 sort items**
 
| # | Example | Answer | Feedback |
|---|---|---|---|
| 1 | "5.8" shown on an analyser screen | Data | A value without patient, test, unit or time cannot be acted on. |
| 2 | "Potassium 5.8 mmol/L, Patient B, collected 08:40, reference interval 3.5–5.1 mmol/L" *(v0.1.1: Patient B, not Patient A — D10)* | Information | Context — patient, test, unit, time, reference — makes it usable. |
| 3 | "Delayed separation of blood can falsely raise potassium, so specimens must reach the laboratory within a stated time." | Knowledge | A general rule from experience and evidence that guides action. |
| 4 | A barcode number printed on a specimen tube label | Data | An identifier on its own; it gains meaning only when linked to a request. |
| 5 | "Specimen received 10:15; renal panel; linked to Patient A's request" | Information | A receipt record that tells staff what arrived, when and for whom. |
| 6 | A clinic's HbA1c results for the past year, summarised as a trend chart | Information | Organised and summarised data that shows a pattern. |
| 7 | A clinical guideline on how often people with diabetes should have HbA1c checked | Knowledge | Generalised, evidence-based guidance used to decide what to do. |
| 8 | An unlabelled column of numbers exported from an analyser | Data | Without labels or units, these values cannot be interpreted safely. |
 
---
 
## LO3 — The journey of a test (30 min)
 
| Screen | On-screen content | Narration key points | Visual | Interaction and feedback |
|---|---|---|---|---|
| W1-LO3-S1 | Microlecture 3 (≤ 8 min): *From order to action* | Walk the 10 stages (table below). At each stage, someone creates, checks or uses information. Systems are named by role only ("where the order is placed", "the system that manages laboratory work"); Week 2 covers what they do. | Horizontal journey diagram, 10 stages, people icons | Revisit LO1 prediction: "Count the people on the diagram. Was your estimate close?" |
| W1-LO3-S2 | Hand-offs | A hand-off is any point where information or a specimen passes between people or places. Hand-offs are where errors, delays and losses tend to occur. | Diagram with hand-off arrows highlighted | None |
| W1-LO3-S3 | **Worked example:** collection → laboratory receipt | Step through: (1) what is created at collection — labelled tubes, collection time, collector identity; (2) what travels — specimens and the request; (3) what the laboratory checks — label matches request, specimen suitable, time of receipt; (4) what can go wrong — wrong label (error), late arrival (delay), missing collection time (loss); (5) consequence — a correct analysis on the wrong or unsuitable specimen gives an unreliable result. | Zoomed hand-off panel, annotated in five steps | None |
| W1-LO3-S4 | **Your turn:** annotate the hand-off *laboratory report → doctor* | Instruction only | Partial panel with four blank callouts | Students fill: information that travels; what should be checked; one risk and its type; consequence. Model answer revealed after attempt (below). |
| W1-LO3-S5 | Summary: risk types | **Error** (wrong information), **Delay** (right information, too late), **Loss** (information missing or not received). Introduce the symbols used in the practical. | Three symbols — triangle, clock, broken circle — distinguishable without colour | None |
 
**LO3-S1 journey stages (generic, vendor-neutral)**
 
| # | Stage | Who acts | Information created or used |
|---|---|---|---|
| 1 | Test ordered | Doctor | Patient identity; tests; clinical details; urgency; requesting doctor |
| 2 | Patient identified, specimen collected | Phlebotomist or nurse | Identity check; labelled tubes; collection time; collector |
| 3 | Specimen transported | Porter or courier | Specimens with request; dispatch time |
| 4 | Received and registered in the laboratory | Laboratory staff | Label–request match; specimen suitability; receipt time; laboratory number |
| 5 | Prepared for analysis | Medical technologist | Processing record; any specimen-quality comment |
| 6 | Analysed | Medical technologist with analyser | Measured values with units; QC status |
| 7 | Reviewed before release | Medical technologist; senior or pathologist as required | Reference intervals; previous results; review decision |
| 8 | Reported | Laboratory | Report with values, units, reference intervals, flags, comments |
| 9 | Received by the doctor | Doctor (or covering doctor) | Notification; result viewed |
| 10 | Acted on and communicated | Doctor; patient | Decision; documentation; information to the patient |
 
**LO3-S4 model answer**
- Travels: values, units, reference intervals, flags, comments, patient identity, requesting doctor.
- Check: right patient, right doctor, report complete, any urgent flag noticed.
- Risk examples: sent to a doctor no longer caring for the patient (loss); urgent result not seen for hours (delay); comment dropped so the result is misread (error).
- Consequence: a reliable result fails to support the right decision at the right time.
---
 
## LO4 — Who does what in Singapore (20 min)
 
| Screen | On-screen content | Narration key points | Visual | Interaction and feedback |
|---|---|---|---|---|
| W1-LO4-S1 | Orientation map (≤ 5 min narration) | **MOH** sets policy and regulates. **Synapxe** is the national HealthTech agency; it builds and runs national systems including NEHR and HealthHub. **Three public clusters** — NHG Health, NUHS, SingHealth — deliver care with their own institutional systems. **NEHR** holds selected key health information, not every record. **HealthHub** is a patient-facing app; it is not the NEHR. National rules will require laboratories to share results with NEHR (Weeks 4, 8, 9). | One-page map with arrows: regulate · build and run · deliver care · share key information · patient view | None |
| W1-LO4-S2 | Curated reading (8 min) | Guiding question: *What does the NEHR hold, what does it not hold, and who manages it?* | Link: Synapxe, *About National Electronic Health Record System (NEHR)* [Singapore Context R5] | Short-answer note (not marked) |
| W1-LO4-S3 | Matching: organisation or service → role (6 items) | — | Two columns | Item feedback below |
| W1-LO4-S4 | Summary card | Recognition level only; depth in Week 9 | Map thumbnail | None |
 
**LO4-S3 matching items**
 
| Organisation or service | Role | Feedback on common wrong match |
|---|---|---|
| MOH | Sets health policy and regulates healthcare services | Synapxe does not regulate; it builds and runs systems. |
| Synapxe | National HealthTech agency that builds and runs national health IT systems | Not a hospital or regulator. |
| NHG Health, NUHS, SingHealth | Public healthcare clusters delivering care | Clusters are care providers, not IT agencies. |
| NEHR | National repository of selected key health information | It does not hold every record or doctors' detailed notes. |
| HealthHub | Patient-facing app for records, appointments and payments | It is not the NEHR, although some records shown come from it. |
| A hospital's own record system | Institutional system used to deliver care within that organisation | Distinct from national shared records. |
 
**Source check before production:** confirm R5 wording and the cluster names against Singapore Context v0.1 (verified 1 Nov 2026).
 
---
 
## LO5 — Looking after patient information (15 min)
 
| Screen | On-screen content | Narration key points | Visual | Interaction and feedback |
|---|---|---|---|---|
| W1-LO5-S1 | Microlecture 4 (≤ 6 min): *Confidentiality, integrity, availability* | **Confidentiality:** only people who need the information for their role see it. **Integrity:** information is accurate, complete and attached to the right patient. **Availability:** information is there when needed. Laboratory examples for each. | Three-part diagram with lab icons | None |
| W1-LO5-S2 | Scenarios (3) | — | Scenario cards | Choose the property most at risk; feedback below |
| W1-LO5-S3 | **Module rules on patient information and AI** | (1) Never enter identifiable patient information into external AI tools. (2) This module uses fictional data and approved tools only. (3) Never access NEHR or any real patient record for coursework, including on placement. | Rule card | Acknowledgement checkbox (completion only) |
| W1-LO5-S4 | Summary | Link forward: Week 2 adds who can access what; Week 8 covers governance and law | — | None |
 
**LO5-S2 scenarios**
 
| Scenario | Answer | Feedback |
|---|---|---|
| A printed laboratory report is left on a shared printer in a clinic corridor. | Confidentiality | People with no role in the patient's care could read it. |
| A result is filed against the wrong patient's record. | Integrity | The value may be correct, but it is attached to the wrong person. |
| The laboratory system is unavailable for two hours and results cannot be viewed. | Availability | Correct results exist but cannot support decisions in time; Week 2 explores downtime. |
 
---
 
## LO6 — Check and prepare (20 min)
 
| Screen | On-screen content | Interaction and feedback |
|---|---|---|
| W1-LO6-S1 | Formative quiz — 8 items; ungraded; 2 attempts; feedback after each attempt | Items written in Stage C to the blueprint in Stage A §10 |
| W1-LO6-S2 | **Practical brief:** scenario summary; your role will be assigned in class; what you will produce (information-journey map); success criteria 1–7 in the same wording as the practical rubric | Read and note one question to bring |
| W1-LO6-S3 | Week summary and look ahead: "Next week, your map gains a systems layer." | None |
 
---
 
## Accessibility and production checklist
 
| Item | Requirement |
|---|---|
| Narration | Captions and downloadable transcript for S1/S2 of LO2, LO3-S1, LO4-S1, LO5-S1 |
| Images | Alt text for every diagram; journey diagram also provided as a table (LO3-S1 table) |
| Interactions | Keyboard or dropdown alternative for drag-and-drop and matching |
| Colour | Risk symbols differ by shape; charts colour-blind safe |
| Reading | External link opens in new tab; summary provided if link fails |
| Data | Fictional only; check no realistic identifiers before release |
| Brightspace/SCORM | Per production specification (to be supplied); not tested |
 
---
 
## Approval items
 
1. Approve storyboard content and timings.
2. Confirm the NEHR coursework rule in LO5-S3 is approved (taken as approved with the Stage A design).
## Change log
 
| Version | Date | Change |
|---|---|---|
| 0.1 | 1 Nov 2026 | Storyboard drafted |
| 0.1.1 | 12 Nov 2026 | D10: potassium example in LO2-S2 and LO2-S3 item 2 re-attributed from Patient A to Patient B |