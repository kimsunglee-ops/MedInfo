# Week 1 — Stage C: Formative Quiz, Answer Key and Feedback
 
**Module:** Medical Informatics (Year 3 BMS, Ngee Ann Polytechnic)
**Week:** 1 — Introduction to Medical Informatics and the Healthcare Information Ecosystem
**Version:** 0.1.1 (13 November 2026; filename retained for stable reference)
**Status:** Draft for approval at design gate C. v0.1.1 applies issue I11: Q5, Q6 and Q8 stems open with "Suppose…" so hypothetical problems are not read as Patient A case facts (`06_Case_State_Register_v0.1.md` §1 rule 3); Q8 time removed to avoid conflict with the register's 11:32 report time
**Baseline:** Stage A blueprint §10 (approved); Stage B storyboard LO6-S1 (approved); T&L Design §6.2–6.3; Production Specification §5.1
 
**Assessment type:** formative, ungraded. **GenAI:** not used (Week 1 Rule stage); the quiz is completed independently.
 
---
 
## 1. Quiz settings
 
| Setting | Value |
|---|---|
| Brightspace object | `W01 Formative quiz` (OAL LO6-S1) |
| Items | 8 (7 multiple choice, 1 ordering) |
| Grade item | Not linked to Grades |
| Attempts | At least 2; feedback after each attempt |
| Results display | Questions, learner responses, correct answers, question feedback |
| Time limit | None |
| Question order | Fixed; answer options shuffled (except Q3, ordering) |
| Question Library | Section `W01/LO6`; title prefix shows WLO and level, e.g. `[WLO 1.2][Understand] Q1` |
 
## 2. Blueprint coverage
 
| Q | Item type | WLO | Bloom | Target misconception | Remediation |
|---|---|---|---|---|---|
| 1 | Retrieval | 1.2 | Understand | Electronic = information | W1-LO2-S2 |
| 2 | Application (classify) | 1.2 | Apply | Any lab document = information | W1-LO2-S2, S4 |
| 3 | Application (order) | 1.3 | Apply | Review happens after reporting | W1-LO3-S1 |
| 4 | Misconception | 1.1 | Understand | HealthHub is the NEHR; NEHR holds every record | W1-LO4-S1, S2 |
| 5 | Misconception | 1.4 | Understand | QC in range = reliable result | W1-LO3-S3 |
| 6 | Higher-order | 1.4 | Analyse | All risks are equally serious | W1-LO3-S3, S5 |
| 7 | Role check | 1.1 | Understand | Informatics = IT support | W1-LO2-S1 |
| 8 | Application (risk type) | 1.4 | Apply | A correct result cannot be a risk | W1-LO3-S5 |
 
**Coverage check:** every WLO has ≥ 1 item (1.1 × 2; 1.2 × 2; 1.3 × 1; 1.4 × 3). Items at Apply or above: Q2, Q3, Q6, Q8 = 4 of 8 (meets the one-third rule).
 
---
 
## 3. Items
 
### Q1 — Data, information and knowledge
 
**WLO 1.2 · Understand · Multiple choice**
 
Which statement best describes **information** in a laboratory setting?
 
| Option | Text | Key |
|---|---|---|
| A | A recorded value, such as a number shown on an analyser screen | |
| B | Data placed in context — whose result, which test, units and when — so it can be interpreted | ✓ |
| C | A general rule, built from evidence and experience, that guides what to do | |
| D | Any value that has been stored electronically in a hospital system | |
 
**Explanation:** Information is data with enough context to be interpreted and used. "5.8" becomes information when it is linked to a patient, a test, units, a time and a reference interval.
 
**Distractor rationale**
- A describes **data**: a value without context.
- C describes **knowledge**: a general rule that guides action.
- D confuses storage with meaning. A value can be stored electronically and still lack the context that makes it information.
**Feedback — correct:** Right. Context is what turns data into information.
**Feedback — incorrect:** Not quite. Ask: does this item have enough context — patient, test, units, time — to be interpreted? Review W1-LO2-S2.
 
**Likely misconception:** if it is in the computer, it is information.
 
---
 
### Q2 — Classify a laboratory example
 
**WLO 1.2 · Apply · Multiple choice**
 
A laboratory procedure states: *"Specimens without a collection time on the label must be rejected and recollected."*
 
How is this statement best classified?
 
| Option | Text | Key |
|---|---|---|
| A | Data | |
| B | Information | |
| C | Knowledge | ✓ |
 
**Explanation:** The statement is a general rule, based on understanding that a missing collection time prevents staff from judging whether a specimen is suitable. Staff apply it to decide what to do with any specimen. That makes it knowledge.
 
**Distractor rationale**
- A: it is not a raw value or identifier.
- B: it contains no patient-specific facts in context. It would produce information (e.g. "Specimen 26-0451 rejected: no collection time") when applied to a specimen.
**Feedback — correct:** Yes. It is a rule that guides action across all specimens.
**Feedback — incorrect:** Look for patient-specific context. This statement applies to every specimen and tells staff what to do, so it is a rule. Review W1-LO2-S2 and S4.
 
**Likely misconception:** any written laboratory document counts as information.
 
---
 
### Q3 — Order the journey
 
**WLO 1.3 · Apply · Ordering**
 
Put these stages of Patient A's test in the correct order, from first to last.
 
| Displayed (shuffled) | Correct order |
|---|---|
| Result reviewed before release | 5 |
| Test ordered | 1 |
| Specimen analysed | 4 |
| Result received by the doctor | 6 |
| Patient identified and specimen collected | 2 |
| Specimen received and registered in the laboratory | 3 |
 
**Explanation:** The order is: test ordered → patient identified and specimen collected → specimen received and registered → specimen analysed → result reviewed before release → result received by the doctor. Review comes **before** the result leaves the laboratory.
 
**Common errors**
- Placing review after the doctor receives the result: review is a release check, not a later audit.
- Placing registration before collection: the laboratory cannot register a specimen that has not been collected.
**Feedback — correct:** Correct. This sequence is the backbone of your practical map.
**Feedback — incorrect:** Check two points: the laboratory registers a specimen only after it arrives, and results are reviewed before release. Review W1-LO3-S1.
 
**Scoring note:** Brightspace ordering questions can give partial credit; as the quiz is ungraded, use the item statistic only for the entry check.
 
---
 
### Q4 — HealthHub and NEHR
 
**WLO 1.1 · Understand · Multiple choice**
 
A classmate says: *"If Patient A can see a lab result in HealthHub, then every result Patient A has ever had must be stored in the NEHR."*
 
Which response is most accurate?
 
| Option | Text | Key |
|---|---|---|
| A | Correct — HealthHub is the patient's view of the NEHR, which stores all healthcare records. | |
| B | Not correct — the NEHR holds selected key health information, and HealthHub is a separate patient-facing app that shows some records drawn from it. | ✓ |
| C | Not correct — lab results in HealthHub come only from private clinics, not the NEHR. | |
| D | Correct — every provider in Singapore has uploaded all past records to the NEHR since 2011. | |
 
**Explanation:** The NEHR is a national repository of **selected** key health information, not every record. HealthHub is a patient-facing app; its lab reports come from the NEHR, cover general lab tests from the past three years, and may not include every detail of the printed report.
 
**Distractor rationale**
- A combines two misconceptions: HealthHub is not the NEHR, and the NEHR does not hold all records.
- C is false: HealthHub lab reports are drawn from the NEHR.
- D is false: not all providers contribute yet, and contribution under the new national rules applies to records going forward.
**Feedback — correct:** Right. Keep the distinction: the NEHR is a selective national record; HealthHub is a patient app.
**Feedback — incorrect:** The NEHR holds selected key information, and HealthHub is a separate app. Review W1-LO4-S1 and the NEHR reading in W1-LO4-S2.
 
**Source:** Singapore Context v0.1, R5, R11, R1. Re-verify before each delivery.
 
---
 
### Q5 — Quality control and reliability
 
**WLO 1.4 · Understand · Multiple choice**
 
Suppose the analyser's internal quality control for potassium was within limits all morning, and Patient A's potassium was measured on that analyser during the same period.
 
What can you conclude?
 
| Option | Text | Key |
|---|---|---|
| A | The result is reliable for Patient A's doctor. | |
| B | The analytical process was performing as expected, but the result could still be unreliable — for example, if the specimen was mislabelled or the report reached the wrong doctor. | ✓ |
| C | Quality control results tell us nothing about patient results. | |
| D | The result must be repeated, because quality control only applies to control samples. | |
 
**Explanation:** Internal QC shows that the analytical process is performing within limits. It does not check whose specimen was tested, whether the specimen was suitable, or whether the result reaches the right person in time.
 
**Distractor rationale**
- A is the target misconception: analytical correctness is not the same as reliability for the patient.
- C over-corrects: QC is essential evidence about analytical performance.
- D is incorrect: in-range QC does not require patient results to be repeated.
**Feedback — correct:** Exactly. QC covers one link in the chain. Week 5 returns to the difference between QC and checking individual results.
**Feedback — incorrect:** QC tells you the analytical step was working. Think about the steps before and after analysis. Review the worked example in W1-LO3-S3.
 
---
 
### Q6 — Which risk matters most?
 
**WLO 1.4 · Analyse · Multiple choice**
 
Suppose four problems occurred during Patient A's test journey. Which would pose the **greatest** risk to patient safety, and why?
 
| Option | Text | Key |
|---|---|---|
| A | The courier batches specimens and arrives 30 minutes later than usual — because any delay makes the result unusable. | |
| B | The tubes are labelled with another patient's details at collection — because a correct result would be silently attached to the wrong person, and later checks may not detect it. | ✓ |
| C | The clinic administrator can see that a report has arrived for Patient A — because this is a confidentiality breach. | |
| D | The laboratory number is printed in a small font on the receipt record — because staff might misread it. | |
 
**Explanation:** Wrong-patient labelling is a silent error at an early hand-off. Every later step can be performed correctly, yet the result belongs to someone else, and decisions for two patients may be affected.
 
**Distractor rationale**
- A: delay is a real risk (and can affect some tests — Week 3), but it is usually visible and recoverable; the stated reason ("any delay makes the result unusable") is an overstatement.
- C: knowing that a report exists, in order to route it, is part of the administrator's role and is not a breach of the result values.
- D: a usability concern with lower likelihood and consequence than misidentification.
**Feedback — correct:** Well reasoned. You weighed how likely a failure is to be detected and how serious its consequence would be.
**Feedback — incorrect:** Compare how easily each problem would be noticed and what would happen if it were not. Review W1-LO3-S3 and S5.
 
**Likely misconception:** all risks on the map are equally serious; any visibility of a patient's name is a breach.
 
---
 
### Q7 — What medical informatics does
 
**WLO 1.1 · Understand · Multiple choice**
 
Which example best shows medical informatics supporting **laboratory operations**?
 
| Option | Text | Key |
|---|---|---|
| A | Repairing a faulty centrifuge in the specimen-processing area | |
| B | Linking each specimen to its request with a unique laboratory number, so results return to the right patient and doctor | ✓ |
| C | Deciding which medicine to prescribe after the result is reported | |
| D | Installing software updates on staff laptops | |
 
**Explanation:** Medical informatics concerns how data and information are captured, linked, checked and delivered. A unique laboratory number linking specimen, request, patient and doctor is a core informatics control.
 
**Distractor rationale**
- A is equipment maintenance, not information management.
- C is a clinical decision made by the doctor; informatics may support it, but making it is outside the BMS role.
- D is general IT support — a common misconception about what informatics means.
**Feedback — correct:** Yes. Informatics keeps information linked and reliable as it moves.
**Feedback — incorrect:** Look for the option about managing information, not equipment, IT maintenance or clinical decisions. Review W1-LO2-S1.
 
---
 
### Q8 — Name the risk type
 
**WLO 1.4 · Apply · Multiple choice**
 
Suppose the laboratory released Patient A's correct result, but it was sent only to a doctor who had left the clinic the week before, and no one else was notified.
 
Which risk type does this **best** represent?
 
| Option | Text | Key |
|---|---|---|
| A | Error — the information is wrong | |
| B | Delay — the right information arrives too late | |
| C | Loss — the information does not reach anyone who can act on it | ✓ |
| D | No risk — the laboratory released a correct result | |
 
**Explanation:** The result is correct and released, but it goes only to someone no longer responsible, and no one else is told. Unless someone notices, it will never be acted on: that is loss.
 
**Distractor rationale**
- A: the values are correct; nothing in the information itself is wrong.
- B: delay applies if the result is eventually seen late. Here nothing would bring it to anyone's attention, so loss fits better. Accept delay as partly reasonable in discussion.
- D: release is not the end of the journey. A correct result that no one acts on does not support care.
**Feedback — correct:** Right. A correct result can still be lost at the final hand-off.
**Feedback — incorrect:** Ask: is the information wrong, late, or not received at all? Review the risk types in W1-LO3-S5.
 
---
 
## 4. Answer key
 
| Q | Key | WLO | Bloom |
|---|---|---|---|
| 1 | B | 1.2 | Understand |
| 2 | C | 1.2 | Apply |
| 3 | Ordered → collected → received/registered → analysed → reviewed → received by doctor | 1.3 | Apply |
| 4 | B | 1.1 | Understand |
| 5 | B | 1.4 | Understand |
| 6 | B | 1.4 | Analyse |
| 7 | B | 1.1 | Understand |
| 8 | C | 1.4 | Apply |
 
**Balance note:** the key is B for five items. Brightspace shuffles options on display, so learners will not see a pattern; if shuffling is disabled, re-letter options before build.
 
---
 
## 5. Entry-check guide (practical segment 1)
 
| If low on | Likely cause | 2-minute response in class |
|---|---|---|
| Q1 / Q2 | Category boundaries unclear | Re-show the potassium example at three levels; ask what context is missing |
| Q3 | Review placed after reporting | Ask: "Would you want a result checked before or after the doctor acts on it?" |
| Q4 | HealthHub/NEHR conflated | Show the orientation map; one-sentence distinction |
| Q5 | QC treated as proof of reliability | Debrief question 3 brought forward |
| Q6 | Likelihood and consequence not weighed | Compare A and B aloud: "Which would anyone notice?" |
| Q7 | Informatics seen as IT support | Contrast "fixing laptops" with "linking specimen to request" |
| Q8 | Delay and loss confused | Ask: "Will anyone ever see this result?" |
 
---
 
## 6. Item quality review
 
| Check | Result |
|---|---|
| Each item aligned to one WLO and tested at the stated level | Pass |
| Distractors plausible and drawn from known misconceptions | Pass |
| No "all/none of the above"; no negative stems | Pass |
| One defensible best answer; ambiguity acknowledged in Q8 feedback | Pass |
| Fictional data only; no realistic identifiers | Pass |
| Singapore facts traceable to verified sources (Q4) | Pass — re-verify before delivery |
| No clinical interpretation required of students | Pass |
| Plain English; short stems; readable on mobile | Pass |
| Feedback for correct and incorrect responses with remediation link | Pass |
 
---
 
## 7. Approval items
 
1. Approve the 8 items, key and feedback.
2. Confirm that partial credit on Q3 is acceptable for an ungraded quiz.
**Next step on approval:** Stage D (lecturer notes, slides, narration scripts) only if requested; otherwise Week 1 quality review (Stage F) and Week 2 Stage A.