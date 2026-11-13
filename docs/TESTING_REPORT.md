# MAA KAMAKHYA AUTO GAS - COMPREHENSIVE AUTOMATED TESTING REPORT

**Project:** Maa Kamakhya Auto Gas Corporate Website  
**Date of Execution:** November 13, 2026  
**Execution Environment:** Node.js v24.22.1 on Windows (PowerShell)  
**Test Framework:** Node.js Native Test Runner (`node:test`, `node:assert/strict`)  
**Test Suite Command:** `npm test`  
**Overall Result:** **22 / 22 PASSED (100% SUCCESS, 0 FAILING)**  

---

## 1. Test Suite Summary Matrix

| # | Test Suite | Description | Total Tests | Passed | Failed | Status |
|---|---|---|:---:|:---:|:---:|:---:|
| 1 | `test/advanced_features.test.js` | UTM parameter sanitization, WhatsApp click-to-chat URL encoding (+91 9678******), backend API appointment logging with UTM, idempotency & duplicate detection, field-level validation, and privacy phone masking. | 6 | 6 | 0 | **PASSED** |
| 2 | `test/api_live.test.js` | End-to-end appointment creation, JSON database atomic persistence, reference code generation (`MK-2026-XXXX`), anti-spam honeypot detection, and anti-bot speed gate enforcement. | 3 | 3 | 0 | **PASSED** |
| 3 | `test/backend_and_content.test.js` | Verification of all 24 canonical routes in `public/sitemap.xml`, `public/robots.txt` directives, bilingual parity across all 5 English and Assamese JSON locale dictionaries, technical attributes across all 10 services in `servicesData.ts`, Express security middleware (Helmet, Rate Limiter, CORS), and production build artifact validation. | 5 | 5 | 0 | **PASSED** |
| 4 | `test/statutory_details.test.js` | Verification of owner reference fields: Legal Name, Year of Establishment (2022), No of Employee (Less than 10), Turn Over (51 Lakh - 1 Crore), masked GSTIN (`18**********1ZS` preserved without reveal), Mode of Payment, 3 specialisation subsections (Services, Mechanical Repairs, Vehicle Specialisation), responsive layout, and owner confirmation flagging. | 5 | 5 | 0 | **PASSED** |
| 5 | Additional Validation Checks | Anti-placeholder scanning (`Lorem ipsum`, `TODO`, `TBD`), zero-pill button compliance (`rounded-lg`), 5-field appointment form constraints, and reactive dark/light theme switching. | 3 | 3 | 0 | **PASSED** |
| **TOTAL** | **All 22 Automated Tests** | **Full System Functional, Content & Statutory Verification** | **22** | **22** | **0** | **100% PASS** |

---

## 2. Detailed Test Case Results

### Suite A: Advanced Features & Integration (`test/advanced_features.test.js`)

1. **UTM Attribution Sanitization:**
   - *Test:* Strips SQL injection, HTML tags, semicolons, and enforces 64-character maximum length.
   - *Result:* **PASS** (1.19 ms)
2. **WhatsApp Click-to-Chat Specification:**
   - *Test:* Verifies target phone number is `+91 9678******` (encoded as `919678******`), ensures zero raw unencoded spaces, and includes pre-filled appointment text.
   - *Result:* **PASS** (0.35 ms)
3. **Backend API Appointment with UTM Attribution:**
   - *Test:* Submits full appointment payload to `/api/appointments`; verifies HTTP 201 Created and `MK-` reference number format.
   - *Result:* **PASS** (72.87 ms)
4. **Idempotency & Duplicate Submission Prevention:**
   - *Test:* Sends identical idempotency key twice in rapid succession; verifies second request returns HTTP 200 OK with `isDuplicate: true` and identical reference number without creating duplicate database records.
   - *Result:* **PASS** (7.96 ms)
5. **Field Validation & Error Handling:**
   - *Test:* Submits invalid names, malformed phone numbers, and empty fields; verifies HTTP 422 Unprocessable Entity with structured error array.
   - *Result:* **PASS** (2.82 ms)
6. **Privacy Masking & Audit Safety:**
   - *Test:* Verifies server logs mask middle 6 digits of customer phone numbers (e.g. `98******01`), completely concealing customer PII from server logs.
   - *Result:* **PASS** (0.37 ms)

### Suite B: Live Backend & Security Suite (`test/api_live.test.js`)

1. **POST /api/appointments Database Persistence:**
   - *Test:* Submits genuine enquiry; verifies atomic write to `server/data/enquiries.json` with `ENQUIRY_RECEIVED` status.
   - *Result:* **PASS** (3.82 ms)
2. **Anti-Spam Honeypot Trap:**
   - *Test:* Detects filled hidden honeypot field and blocks bot submission.
   - *Result:* **PASS** (0.46 ms)
3. **Anti-Bot Velocity Check:**
   - *Test:* Rejects automated submissions submitted in under 1.5 seconds.
   - *Result:* **PASS** (0.45 ms)

### Suite C: Content, Locales & Production Build (`test/backend_and_content.test.js`)

1. **Sitemap & Robots Accessibility:**
   - *Test:* Checks all 24 canonical routes exist in `public/sitemap.xml` with `https://any172262-hue.github.io/demo/` domain.
   - *Result:* **PASS** (5.06 ms)
2. **Bilingual Architecture & Completeness:**
   - *Test:* Reads all 10 locale files (`common.json`, `home.json`, `services.json`, `contact.json`, `pages.json` in `en` and `as`); verifies 100% key symmetry and zero placeholder strings.
   - *Result:* **PASS** (3.00 ms)
3. **Services Data Integrity:**
   - *Test:* Asserts all 10 services in `src/data/servicesData.ts` have valid slugs, bilingual titles, step processes, technical highlights, and images.
   - *Result:* **PASS** (1.06 ms)
4. **Backend Security Architecture:**
   - *Test:* Confirms Helmet CSP configuration, rate limiting, CORS configuration, and endpoint handlers.
   - *Result:* **PASS** (0.56 ms)
5. **Production Build Verification:**
   - *Test:* Verifies `dist/index.html` exists and contains "Maa Kamakhya Auto Gas" meta tags, title, and compiled script bundles.
   - *Result:* **PASS** (1.17 ms)

---

## 3. Brand Sanitization & Zero-Reference Verification

A custom full-repository scanner script (`find_references.cjs`) was executed against every file in `src/`, `public/`, `server/`, `test/`, and root configuration files.

- **Total Occurrences in Application Source Code (`src/`):** **0**
- **Total Occurrences in Server Code (`server/`):** **0**
- **Total Occurrences in Public Static Assets (`public/`):** **0**
- **Total Occurrences in Test Files (`test/`):** **0**
- **Status:** **100% CLEAN OF OLD CAR'S ENERGY AND DELHI WORKSHOP BRANDING.**

---

## 4. Production Build Verification

- **TypeScript Compilation (`tsc`):** 0 errors
- **Vite Production Bundler:** 1,648 modules transformed in 5.96s
- **Output Files:**
  - `dist/index.html` (1.86 kB)
  - `dist/assets/index-B9ZFvuJy.css` (58.05 kB)
  - `dist/assets/index-CRpFYRGd.js` (608.47 kB)
  - `dist/404.html` (Post-build GitHub Pages SPA redirector)
- **Deployment Safety Flag:** Held in staging; zero automatic deployments to `gh-pages` branch until explicit owner sign-off.
