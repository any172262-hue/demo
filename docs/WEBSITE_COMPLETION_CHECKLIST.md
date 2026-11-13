# CAR'S ENERGY CO. - WEBSITE COMPLETION & OWNER PRE-LAUNCH CHECKLIST

**Document Status:** PRE-LAUNCH REVIEW (Launch Prohibited Pending Explicit Owner Approval)  
**Project:** Car's Energy Co. Corporate Website (`carsenergy.co.in`)  
**Facility Reference:** Govt. Approved Retrofitting Center (RFC Code No. 261)  
**Last Updated:** November 2026  

---

## 1. Executive Summary & Launch Restrictions

In accordance with Section 9 of `docs/QUALITY_GATES_AND_DESIGN_RULES.md`, this website is strictly restricted to development, local preview, and pre-launch quality audits. 

**STRICT PRE-LAUNCH RESTRICTION:**
- No production deployment.
- No public domain DNS cutover.
- No production appointment submission processing.
- The project remains in **PRE-LAUNCH REVIEW** status until the business owner inspects the deliverables and signs off on this completion checklist.

---

## 2. Design System & Visual Quality Gates

| Check Item | Requirement | Implementation Status | Verified Evidence |
|---|---|---|---|
| **Canvas Palette** | Light theme canvas (`#F5F5F2`), pure white cards (`#FFFFFF`), light borders (`#E9EAEC`). | Complete | All page headers and body sections converted to light theme. |
| **Typography Palette** | Primary text charcoal (`#292D33`), secondary text (`#5A606A`), zero harsh contrast blacks. | Complete | Global font styles and CSS tokens applied across all components. |
| **Accent Palette** | Precision engineering safety orange (`#F47721`) for buttons, active tabs, and key accents. | Complete | Used for primary CTAs and interactive highlights. |
| **Button Geometry** | Rectangular or subtly rounded buttons (`rounded-lg`, `rounded-md`, `rounded-sm`). Zero pill-shaped (`rounded-full`) buttons or inputs. | Complete | 0 occurrences of `rounded-full` in `src/`. |
| **No Em or En Dashes** | Prohibit em dashes and en dashes anywhere in website copy, documentation, or interface text. Use standard hyphens (-), commas, or periods. | Complete | 0 occurrences of em/en dashes across all src/ .ts, .tsx, and .json files. |
| **AI Branding Removal** | Zero "Made with AI", "Built with AI", or generator watermarks in code or visible templates. | Complete | Audited and verified clean. Brand identity set strictly to Car's Energy Co. |
| **Motion Balance** | Respect `prefers-reduced-motion`. Subtle reveals only. Zero cursor animations, zero parallax hijacking, smooth 3-second transitions. | Complete | Reduced-motion media query active; smooth CSS transitions. |

---

## 3. Business Integrity & Authenticity of Claims

| Quality Gate | Standard | Status | Audit Note |
|---|---|---|---|
| **RFC Registration** | Display RFC Code No. 261 under CMVR Rule 115 and PESO regulations. | Verified | Prominently displayed in header bar, hero, and footer. |
| **Workshop Locations** | Exactly 2 certified facilities: 1. Mundka (Primary Hub), 2. Paschim Vihar (Express Center). | Verified | Real street addresses and contact numbers published. |
| **Establishment Year** | Founded in 1998 (26+ years of specialized engineering). | Verified | Supported by company records. |
| **Review Counters** | Zero fabricated counters (e.g. "15,000+ satisfied clients", "99% satisfaction"). | Complete | Removed all unverified metric counters. |
| **Customer Testimonials** | No fake client quotes or invented star ratings. Replaced with Technical Assurance and authentic Google Review instructions. | Complete | Section J converted to Customer Feedback & Technical Assurance policy. |
| **Copywriting Tone** | Clear, authentic automotive business tone. Zero generic marketing clichés ("Driving the future", "Redefining excellence"). | Complete | Concise, informative engineering descriptions throughout. |

---

## 4. Page Architecture & Functionality Matrix

| Page Route | Description | Desktop Status | Mobile Status | Bilingual (EN/AS) |
|---|---|---|---|---|
| `/` | Homepage (Editorial Hero, Showcase, Core Services, Technical Assurance) | Verified | Verified | Complete |
| `/about` | Company Background, Engineering Principles, Facilities & Infrastructure | Verified | Verified | Complete |
| `/services` | Services Overview (Directory of all 10 specialized engineering services) | Verified | Verified | Complete |
| `/services/:slug` | 10 Dedicated Service Detail Pages with CMVR/PESO technical specs | Verified | Verified | Complete |
| `/products` | Hardware & Partner Brands (Genuine kits, reducers, PESO cylinders) | Verified | Verified | Complete |
| `/gallery` | Workshop Photographic Documentation (Bays, fitment, hydro-testing) | Verified | Verified | Complete |
| `/videos` | Technical Video Demonstrations (Calibration, safety practices) | Verified | Verified | Complete |
| `/faqs` | Categorized Frequently Asked Questions with live search | Verified | Verified | Complete |
| `/book-appointment` | Multi-step service booking form with date, vehicle, and workshop selector | Verified | Verified | Complete |
| `/get-in-touch` | Simplified technical contact form: Name*, Car Model*, Mobile*, Address, Message | Verified | Verified | Complete |
| `/contact` | Workshop maps, directions, operating hours, direct phone/WhatsApp | Verified | Verified | Complete |
| `/privacy-policy` | Comprehensive data governance policy (compliant with Section 8A rules) | Verified | Verified | Complete |
| `/terms-and-conditions`| Commercial and CMVR/PESO terms (compliant with Section 8B rules) | Verified | Verified | Complete |
| `/sitemap` | Complete website index and technical documentation routes | Verified | Verified | Complete |
| `*` (404) | Branded error recovery page with navigation back to Homepage and Services | Verified | Verified | Complete |

---

## 5. Get In Touch Form Specification

Per explicit owner directive and design reference:
- **Field 1:** Name* (Required)
- **Field 2:** Which Car Model* (Required, text input replacing email)
- **Field 3:** Enter Mobile* (Required, 10-digit Indian phone validation)
- **Field 4:** Address (Optional)
- **Field 5:** Message (Optional, enquiry notes)
- **Submit Action:** Rectangular button with accessible contrast (`bg-[#54A044]` or safety orange).
- **Security:** Honeypot field and client submission speed gate (< 1.5s rejection) active.

---

## 6. Bilingual Completeness (English & Assamese)

| Locale Scope | English Dictionary (`src/locales/en/`) | Assamese Dictionary (`src/locales/as/`) | Verification Result |
|---|---|---|---|
| `common.json` | Complete navigation, buttons, contact info, footer, badges | Complete matching keys in authentic Assamese script | Pass |
| `pages.json` | Complete About, Products, Gallery, Videos, FAQs, Legal | Complete matching keys in authentic Assamese script | Pass |
| `services.json` | Complete descriptions for all 10 specialized services | Complete matching descriptions in Assamese | Pass |
| `contact.json` | Complete contact headers, workshop addresses, form labels | Complete matching keys in Assamese | Pass |
| `PrivacyPolicy.tsx` | Full 7-section data protection disclosure | Full 7-section Assamese translation | Pass |
| `TermsConditions.tsx`| Full 9-section commercial & CMVR/PESO terms | Full 9-section Assamese translation | Pass |

---

## 7. Technical, Build & Test Verification

| Test Suite | Purpose | Result |
|---|---|---|
| `npm test` | Automated backend API, honeypot spam protection, submission timing gate, sitemap completeness, locale key parity, services data verification. | **9 / 9 Passing (100%)** |
| `tsc && vite build` | TypeScript compilation and production bundle generation. | **Success (Exit code 0)** |
| API Health (`/api/health`) | Express server daemon connectivity on port 5000. | **Healthy (RFC-261 OK)** |

---

## 8. Owner Pre-Launch Review & Sign-Off

The development team certifies that all items in Phases 0 through 4 have been implemented according to `QUALITY_GATES_AND_DESIGN_RULES.md`, `PRD.md`, and `TRD.md`.

Final authorization to proceed to production deployment is reserved exclusively for the business owner.

### Approval Status
- [ ] **PRE-LAUNCH REVIEW** (Current Status: Local preview active at `http://localhost:5000/`)
- [ ] **CHANGES REQUESTED** (Specify revisions required below)
- [ ] **FINAL APPROVAL TO DEPLOY** (Explicit owner authorization granted)

### Owner Sign-Off Block

**Owner Name:** _____________________________________________  
**Date of Review:** _________________________________________  
**Signature:** ______________________________________________  
**Notes / Directives:**  
_________________________________________________________________  
_________________________________________________________________  
