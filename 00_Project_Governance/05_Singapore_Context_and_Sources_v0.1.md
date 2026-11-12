# Medical Informatics — Singapore Context and Sources

**Programme:** Diploma in Biomedical Science, Ngee Ann Polytechnic
**Module:** Medical Informatics (Year 3, 10 weeks)
**Version:** 0.1 (1 November 2026)
**Status:** Working draft — reference register
**Verified as at:** 1 November 2026
**Baseline:** `10_Week_Syllabus_v0.2.md` (v0.2.2) §7

**Purpose:** a single, sourced reference for the Singapore organisations, national systems, legislation and guidance used in teaching. Weekly packages cite this file rather than re-researching facts.

**This is not legal advice.** Legal content is taught at awareness level (syllabus §6.2). Re-verify every item marked **Verify**, and all legal items, before each delivery.

---

## 1. Status labels

| Label | Meaning | Use in teaching |
|---|---|---|
| **V-O** | Verified against an official source (government, regulator, healthcare organisation) | May be taught as fact, with the source |
| **V-S** | Verified through a reputable secondary source only (law firm, trade press) | Teach with "reported"; confirm against the official source before production |
| **Verify** | Not yet verified, or evolving | Do not teach as fact |
| **Illustrative** | Fictional or generic example | Label as fictional or generic on every slide |

References in square brackets (e.g. [R3]) point to the source register in §8.

---

## 2. Organisations

| Organisation | Teaching-level role | Status | Ref | Weeks |
|---|---|---|---|---|
| Ministry of Health (MOH) | Health policy and regulation; licenses healthcare services under the Healthcare Services Act; owns the NEHR | V-O | R1, R5, R9 | 1, 8, 9 |
| Synapxe | National HealthTech agency for the public healthcare sector; manages the NEHR on MOH's behalf; develops and operates HealthHub; certifies HIA-compliant clinic systems for NEHR connectivity | V-O | R5, R6, R10, R11 | 1, 4, 9 |
| Synapxe — former name | Formerly Integrated Health Information Systems (IHiS); renamed Synapxe on 27 July 2023 | V-S | R12 | 1, 8 |
| Public healthcare clusters | Three regional clusters deliver public primary, acute, specialist and intermediate care: NHG Health (Central), NUHS (Western), SingHealth (Eastern) | V-O | R13, R14 | 1, 9 |
| NHG Health | Name used by the former National Healthcare Group since July 2025 (legal entity name in MOH circulars remains National Healthcare Group Pte Ltd) | V-O | R14, R1 | 1 |
| Health Sciences Authority (HSA) | Regulates health products, including medical devices and software as a medical device (SaMD) | V-O | R20, R21 | 7 |
| Cyber Security Agency of Singapore (CSA) | Administers the Cybersecurity Act; regulates critical information infrastructure owners | V-O | R18 | 8 |
| Personal Data Protection Commission (PDPC) | Administers the PDPA; issues sector advisory guidelines, including for healthcare | V-O | R16, R17 | 8 |
| Singapore Accreditation Council (SAC) | National accreditation body; accredits medical laboratories to ISO 15189 under SAC-SINGLAS | V-O | R24 | 5 (optional) |

**Teaching distinction (syllabus §7.3):** MOH sets policy and regulates; Synapxe builds and runs national systems; clusters and private providers deliver care and run their own institutional systems. Do not present Synapxe as a regulator or HealthHub as the NEHR.

---

## 3. National systems and services

### 3.1 National Electronic Health Record (NEHR)

| Fact | Status | Ref |
|---|---|---|
| A national repository of **selected key health information** copied from institutions' own systems; it does not hold doctors' detailed notes | V-O | R5, R6 |
| Owned by MOH and managed by Synapxe | V-O | R5 |
| In use since 2011 | V-O | R5, R7 |
| Contribution is system-to-system: the institution's record system sends a copy of selected data to NEHR | V-O | R5, R7 |
| Access is limited to authorised healthcare professionals providing care to the patient | V-O | R1, R6 |
| Patients can view which providers accessed their record via HealthHub | V-O | R1, R6 |
| Patients can currently restrict access for all providers; MOH stated that from the later part of 2026 patients will be able to choose providers. Under restriction, only basic information (allergies, vaccinations) is visible | V-O (stated plan) — **Verify** whether provider selection is live | R1 |
| Doctors may override restrictions in emergencies; overrides are audited | V-O | R1, R2 |
| NEHR may be used for patient care and approved statutory medical examinations, **not** for insurance, employment, research, audits or teaching | V-O | R1 |

**Teaching implication:** students on placement must never access NEHR for coursework. This reinforces the fictional-data rule.

### 3.2 HealthHub

| Fact | Status | Ref |
|---|---|---|
| National digital health platform; an MOH initiative developed and operated by Synapxe | V-O | R10, R11 |
| Patients view records, book appointments, pay bills and request refills, for themselves and dependants | V-O | R10 |
| Lab reports shown in HealthHub come from NEHR, cover general lab tests from the past 3 years, and may not contain all details of the printed report | V-O | R11 |

**Teaching implication (Week 4 lens):** HealthHub lab reports are an authentic example of information that travels but may lose detail or context between systems.

### 3.3 Institutional and clinic systems

| Item | Status | Ref |
|---|---|---|
| Clinics contribute to NEHR through a health information management system (HIMS), e.g. a clinic management system, certified by Synapxe as HIA-compliant | V-O | R1 |
| In March 2026, 17 HIMS were integrated with NEHR for GP onboarding | V-O | R1 |
| Which electronic medical record product each cluster or hospital uses | **Verify** — stay vendor-neutral | — |

### 3.4 Interoperability standards

| Item | Status | Ref |
|---|---|---|
| Synapxe has adopted HL7 FHIR and developed the Singapore Core Dataset for Interoperability (SGCDI) | V-O (Synapxe news; extract only) | R25 |
| SS 719:2025 — national guidance on terminology for exchanging clinical information, including lab results; draws on SNOMED CT and LOINC plus the Singapore Drug Dictionary | V-S | R26 |
| SS 720 — FHIR-based API standard for remote-monitoring data (e.g. home blood pressure, glucose) to reach clinical systems | V-S | R26 |
| HL7 v2 use in local laboratory interfaces | **Verify** | — |

**Teaching implication:** supports the Week 4 example set (FHIR Observation, LOINC). SS 720 links Week 4 to the Week 7 home-monitoring case.

---

## 4. Legislation and regulatory guidance

### 4.1 Health Information Act (HIA)

| Fact | Status | Ref |
|---|---|---|
| Health Information Bill passed in Parliament on 12 January 2026 | V-O | R2 |
| MOH intends the Act to take effect from early 2027 | V-O | R2, R3 |
| All licensed providers under the Healthcare Services Act, and retail pharmacies, must contribute key health information of citizens, PRs and long-term pass holders to NEHR; contribution is prospective only | V-O | R1 |
| Key health information includes laboratory test results | V-O | R2 |
| Implementation is batched: **Batch 1** (incl. **Clinical Laboratory**, acute and community hospitals, GP clinics) by **September 2027**; Batch 2 by September 2028; Batch 3 by March 2030 | V-O | R1 |
| HCSA licensees not required to contribute must still implement cyber and data security measures by September 2028 | V-O | R1 |
| Providers must meet cybersecurity and data-security requirements and notify MOH of confirmed incidents and breaches; MOH stated only significant breaches will require notification, with details in subsidiary legislation | V-O | R2, R4 |
| Treatment of sensitive health information (e.g. mental, sexual and reproductive, genetic) to be set in subsidiary legislation | V-O (stated) — **Verify** final rules | R3, R4 |
| Guidance resources are published at healthinfo.gov.sg | V-O | R1 |

**Teaching implication (Weeks 4, 8, 9):** clinical laboratories are in the **first** batch. The Week 9 practical can make the laboratory itself the contributor, not only a community provider.

### 4.2 Other instruments

| Instrument | Teaching-level summary | Relevance | Status | Ref |
|---|---|---|---|---|
| Healthcare Services Act 2020 (HCSA) | Licenses healthcare services, including **Clinical Laboratory Service**, with specified services and a Clinical Governance Officer; supported by the Healthcare Services (Clinical Laboratory Service and Radiological Service) Regulations 2021 | Laboratory licensing context (W5, W8) | V-O | R8, R9 |
| Personal Data Protection Act 2012 (PDPA) | Baseline personal-data law; PDPC healthcare advisory guidelines revised 20 Sep 2023; public agencies are excluded from the PDPA | Privacy (W1, W8) | V-O (guidelines); exclusion V-S | R16, R17 |
| PDPA applicability by provider type | PDPC applied the PDPA to SingHealth and IHiS in 2019; how it applies across public, private and laboratory providers needs authoritative confirmation | Avoid teaching PDPA as universal | **Verify** | R15 |
| Cybersecurity Act 2018 | Regulates owners of critical information infrastructure (CII), including in healthcare; amended in 2024 to cover virtual and overseas systems and wider incident reporting | Governance (W8) | V-O (Act objectives); amendments V-S | R18, R19 |
| HSA — Regulatory Guidelines for Software Medical Devices (life-cycle approach) | Covers SaMD across its life cycle, including AI medical devices and cybersecurity | W7 regulatory status | V-O (R2, Apr 2022); a later revision is reported — **Verify** current edition | R20 |
| HSA — Risk Classification of SaMD and Qualification of CDSS | Revised July 2025; decision-support software based solely on established clinical guidelines, without adaptive logic or AI, is not regulated as a medical device | W6/W7: when a CDS alert is or is not a regulated device | V-S | R21 |
| MOH–HSA AI in Healthcare Guidelines (AIHGle 2.0) | Launched 10 Mar 2026; sets responsibilities for AI developers, deployers and users; addresses generative AI; complements HSA SaMD guidelines | W7, W8, W9 | V-O | R22 |
| MOH Cybersecurity and Data Security (CS/DS) Essentials | Baseline security measures for HIA entities, aligned with CSA cyber-hygiene standards; builds on Healthcare Cybersecurity Essentials (2021) and Cyber & Data Security Guidelines (2023) | W8 controls | V-O | R1, R23 |
| MOH guidance on GenAI in public healthcare | A 2023 MOH circular on GenAI use is cited secondhand | W8 GenAI governance | **Verify** | — |
| ISO 15189:2022 (medical laboratories) | Current edition; SAC assessed on the 2022 edition from 1 Jan 2024; labs not transitioned by 5 Dec 2025 could not issue accredited reports | Optional W5 | V-O | R24 |
| Human Biomedical Research Act | Possibly relevant to a research-laboratory (LIMS) case in W10 | — | **Verify** | — |

---

## 5. Authentic Singapore case: 2018 SingHealth cyberattack

| Fact | Status | Ref |
|---|---|---|
| Cyberattack on SingHealth's patient database in mid-2018 | V-O | R27 |
| Committee of Inquiry public report released 10 January 2019, with 16 recommendations | V-O (release); recommendations count V-S | R27, R28 |
| PDPC found SingHealth and IHiS breached the PDPA protection obligation; penalties of S$250,000 and S$750,000 | V-O | R15 |

**Suitability for Week 8:** recommended. It connects governance to consequences, involves a public cluster and the national HealthTech agency, and is documented by official public reports. Use the public COI report and PDPC decision only. Teaching angles: incident detection and escalation, shared responsibility between data owner and IT provider, and the link to later national cybersecurity guidance.

---

## 6. Implications for the syllabus

Recommended updates for owner decision. None has been applied.

| # | Finding | Affected | Recommended change |
|---|---|---|---|
| S1 | Clinical laboratories are HIA Batch 1 (by Sep 2027) | W4, W8, W9; §7.1 | Add batch timing to §7.1; consider the laboratory as contributor in the W9 scenario |
| S2 | NEHR may not be used for teaching or research | §7.3; T&L Design §10 | Add explicit rule: students never use NEHR for coursework, including on placement |
| S3 | HealthHub lab reports come from NEHR and may omit details | W4 | Use as an authentic "meaning lost" example |
| S4 | HSA 2025 CDSS qualification rule | W6, W7 | Use to contrast rule-based CDS with AI-based tools |
| S5 | AIHGle 2.0 developer/deployer/user roles | W7, W8, W9 | Use as the framework for AI responsibility |
| S6 | SS 719 (LOINC, SNOMED CT) and FHIR use confirmed locally | W4 | Keep FHIR Observation and LOINC; HL7 v2 remains to verify |
| S7 | Cluster renamed NHG Health | W1 | Use current name |
| S8 | ISO 15189:2022 is current | W5 (optional) | Close syllabus §8 item 14 verification |
| S9 | PDPA applicability by provider type unresolved | W8 | Keep as Verify; teach "which law applies depends on the provider" |

---

## 7. Outstanding verification

| Item | Why it matters | Suggested authority |
|---|---|---|
| HIA commencement date and subsidiary legislation (sensitive health information, breach thresholds) | Core W8/W9 content | MOH, healthinfo.gov.sg, Singapore Statutes Online |
| NEHR provider-selection restriction live status | W9 HealthHub content | MOH, HealthHub |
| PDPA applicability by provider type | Avoid misteaching | PDPC; NP legal or compliance office |
| Current HSA SaMD guideline edition | W7 regulatory status | HSA guidance documents page |
| HL7 v2 use in local laboratory interfaces | W4 example choice | Synapxe; a partner laboratory |
| MOH GenAI circular (2023) | W8 GenAI governance | MOH circulars |
| Human Biomedical Research Act relevance | W10 research-lab option | MOH |
| Vendor EMR/LIS products by institution | Avoid unverified claims | Stay vendor-neutral |

---

## 8. Source register

All accessed 1 November 2026. Type: O = official; S = secondary.

| Ref | Title | Publisher, date | Type | URL |
|---|---|---|---|---|
| R1 | Overview and Implementation of the Health Information Act (Circular MOH-MHC-0018-2026) | MOH, 6 Mar 2026 | O | https://isomer-user-content.by.gov.sg/7/b4959e8f-ca85-469e-b4d5-067581b7ea10/MOH%20MHC%20Cir%200018_2026%20Overview%20and%20Implementation%20of%20the%20Health%20Information%20Act%20(HIA).pdf |
| R2 | What is the Health Information Bill? | gov.sg, 13 Jan 2026 | O | https://www.gov.sg/explainers/health-information-bill/ |
| R3 | Opening speech, Second Reading of the Health Information Bill | MOH, Jan 2026 | O | https://www.moh.gov.sg/newsroom/health-information-bill-second-reading-opening-speech-for-sms-tan-kiat-how/ |
| R4 | Closing speech, Second Reading of the Health Information Bill | MOH, Jan 2026 | O | https://www.moh.gov.sg/newsroom/closing-speech-by-mr-tan-kiat-how--senior-minister-of-state--mddi---moh--for-the-second-reading-of-the-health-information-bill/ |
| R5 | About National Electronic Health Record System (NEHR) | Synapxe | O | https://www.synapxe.sg/nehr/ |
| R6 | NEHR FAQ | Synapxe | O | https://www.synapxe.sg/healthtech/national-programmes/national-electronic-health-record-nehr/faq |
| R7 | Guidelines on appropriate use and access to NEHR | MOH, 12 May 2023 | O | https://www.moh.gov.sg/licensing-and-regulation/regulations-guidelines-and-circulars/details/guidelines-on-appropriate-use-and-access-to-national-electronic-health-records-(nehr) |
| R8 | Clinical Laboratory Service — regulatory requirements | MOH | O | https://www.moh.gov.sg/hcsa/clinical-support-services/clinical-laboratory-service |
| R9 | Healthcare services regulation and licensing | MOH | O | https://www.moh.gov.sg/others/health-regulation/healthcare-services-regulation-and-licensing/ |
| R10 | About HealthHub | Synapxe | O | https://synapxe.sg/healthtech/national-programmes/healthhub |
| R11 | View and access health records in one place; Getting started | HealthHub support | O | https://support.healthhub.sg/hc/en-us/articles/60562942315673-View-and-Access-Health-Records-in-One-Place |
| R12 | MOH launches new identity for national health tech agency | Baker McKenzie, Aug 2023 | S | https://insightplus.bakermckenzie.com/bm/healthcare-life-sciences/singapore-ministry-of-health-launches-new-identity-for-national-health-tech-agency-and-sets-out-strategic-priorities-for-the-singapore-healthcare-ecosystem |
| R13 | Our partners — public healthcare clusters | MOH | O | https://www.moh.gov.sg/about-us/our-partners/ |
| R14 | NHG Health Yearbook 2025 | NHG Health | O | https://edge.sitecorecloud.io/synapxeptelb9fd-nhgsitese828-prode8b4-ecd8/media/Project/nhg-sites/nhg-official/pdf/about-us/milestone/NHG-Health-Yearbook-2025.pdf |
| R15 | PDPC imposes financial penalty on both IHIS and SingHealth | PDPC, 15 Jan 2019 | O | https://www.pdpc.gov.sg/news-and-events/press-room/2019/01/pdpc-imposes-financial-penalty-on-both-ihis-and-singhealth |
| R16 | Advisory Guidelines for the Healthcare Sector (revised 20 Sep 2023) | PDPC | O | https://www.pdpc.gov.sg/organisations/regulations-decisions/regulatory-guidance/advisory-guidelines-for-the-healthcare-sector |
| R17 | MDDI response to PQs on public sector data breaches (public agency exclusion) | MDDI | O | https://www.mddi.gov.sg/newsroom/pqs-on-hsa-data-leak-and-public-sector-data-breaches/ |
| R18 | Cybersecurity Act | CSA | O | https://www.csa.gov.sg/Legislation/Cybersecurity-Act |
| R19 | Provisions in Singapore's Cybersecurity (Amendment) Act came into force on 31 October 2025 | Hogan Lovells | S | https://www.hlc.com/en/publications/provisions-in-singapores-cybersecurity-amendment-act-came-into-force-on-31-october-2025 |
| R20 | Regulatory Guidelines for Software Medical Devices — A Life Cycle Approach (R2, Apr 2022) | HSA | O | https://www.hsa.gov.sg/docs/default-source/hprg-mdb/guidance-documents-for-medical-devices/regulatory-guidelines-for-software-medical-devices---a-life-cycle-approach_r2-(2022-apr)-pub.pdf |
| R21 | HSA updates guidelines on risk classification of SaMD and qualification of CDSS | Baker McKenzie, Jul 2025 | S | https://www.bakermckenzie.com/en/insight/publications/alerts/2025/07/singapore-hsa-update-guidelines-risk-classification-samd-qualification-cdss |
| R22 | Updated MOH AI in Healthcare Guidelines (AIHGle 2.0) (Circular MOH-MHC-0024-2026) | MOH, 13 Mar 2026 | O | https://isomer-user-content.by.gov.sg/7/f5b5f08c-4c34-499c-89d4-3368b5d93088/MOH MHC Cir 0024_2026 Updated MOH Artificial Intelligence in Healthcare Guidelines (AIHGle 2.0).pdf |
| R23 | Health providers will be supported through cybersecurity transition | MOH, 25 Feb 2026 | O | https://www.moh.gov.sg/newsroom/health-providers-will-be-supported-through-cybersecurity-transition/ |
| R24 | Publication of ISO 15189:2022 | SAC | O | https://www.sac-accreditation.gov.sg/media/news-releases/publication-of-iso-15189-2022/ |
| R25 | Achieving connected care through APIs, data liquidity and FHIR standards | Synapxe, 22 May 2026 | O | https://www.synapxe.sg/news/solutions/connected-care-apis-data-liquidity-fhir-standards |
| R26 | Better interoperability support for Singaporean health tech startups (SS 719, SS 720) | Healthcare IT News | S | https://www.healthcareitnews.com/news/asia/better-interoperability-support-singaporean-health-tech-startups |
| R27 | Public Report of the COI into the cyber attack on SingHealth | MDDI (formerly MCI), 10 Jan 2019 | O | https://www.mddi.gov.sg/newsroom/public-report-of-the-coi/ |
| R28 | Staff lapses and IT system vulnerabilities are key reasons behind SingHealth cyberattack | Healthcare IT News, Jan 2019 | S | https://www.healthcareitnews.com/news/asia/staff-lapses-and-it-system-vulnerabilities-are-key-reasons-behind-singhealth-cyberattack |

**Method note:** R1, R2 and the Baker McKenzie HIA summary were read in full. Other official sources were checked through search extracts of the official page; open each in full before producing slides.

---

## 9. Maintenance

- Re-verify §3–§5 before each delivery, and whenever MOH announces HIA subsidiary legislation.
- Record each re-check as a new "Verified as at" date and version.
- When a **Verify** item is confirmed, move it into the relevant table with its source and update syllabus §7.
- Weekly packages cite this file's reference numbers; do not copy facts without the reference.
