# Quality Assurance & Testing Documentation

## 1. Testing Framework

The testing suite uses Node.js's native test runner (`node:test` and `node:assert/strict`). It tests:
1. Complete Route & Canonical URL coverage for all 24 required pages.
2. Bilingual translation parity between English and Assamese JSON locale dictionaries.
3. Service Data completeness for all 10 specialized services.
4. Backend API functionality, anti-spam honeypot detection, speed-bot filtering, and atomic JSON persistence.
5. Production bundle artifacts verification.

---

## 2. Running Automated Tests

Run the test suite from the project root:
```bash
npm test
```

### Expected Output:
```
▶ LIVE BACKEND SUITE: End-to-End API and Security Testing
  ✔ POST /api/appointments: Valid Submission produces 201 and reference ID
  ✔ Anti-Spam Logic: Honeypot trap triggers rejection
  ✔ Anti-Bot Speed Logic: Fast submissions (< 1.5s) are rejected
✔ LIVE BACKEND SUITE: End-to-End API and Security Testing
✔ 1. SITEMAP & ROBOTS: Verify all 24 required pages are mapped and accessible
✔ 2. BILINGUAL ARCHITECTURE: Verify completeness of English and Assamese locales
✔ 3. SERVICES DATA: Verify complete technical data for all 10 specialized services
✔ 4. BACKEND INTEGRATION: Live API Verification with Express & Database
✔ 5. PRODUCTION BUILD VERIFICATION: Dist artifacts check
ℹ tests 9
ℹ pass 9
ℹ fail 0
```

---

## 3. Manual Testing Checklist Verified

- [x] **Route Coverage:** All 24 pages render without 404s or blank screens.
- [x] **Responsive Navigation:** Mobile navigation drawer functions smoothly on viewports from 320px up to 4K displays.
- [x] **Bilingual Switching:** Switching between `EN` and `অসমীয়া` maintains current page route and persists across browser refresh.
- [x] **Forms:** Validates Indian 10-digit phone numbers, required fields, and displays distinct `ENQUIRY_RECEIVED` reference modal.
- [x] **Spam Traps:** Hidden honeypot rejects bots with HTTP 400.
- [x] **Performance & Accessibility:** Semantic tags (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`), ARIA attributes, and `@media (prefers-reduced-motion)` respected.

---

## 4. Advanced Features Testing Suite

Automated verification in `test/advanced_features.test.js`:
1. **UTM Sanitization:** Validates HTML tag stripping and 64-character parameter length ceiling.
2. **WhatsApp URL Protocol:** Validates international format (`917982824255`), character encoding, and data completeness.
3. **Backend UTM Integration:** Validates that `/api/appointments` accepts, sanitizes, and records attribution logs alongside appointment requests.

### Advanced Features Manual Verification Matrix:
- [x] **Light & Dark Theme Toggle:** Verified on desktop and mobile viewports.
- [x] **Theme Persistence:** Stored in `localStorage` without screen flashing on reload.
- [x] **Site-Wide Search:** Verified in English and Assamese; highlights terms; keyboard operable with `Ctrl+K`, arrows, Enter, and Escape.
- [x] **Back to Top Button:** Verified appear/disappear at 300px threshold; smooth scroll active.
- [x] **Scroll Progress Bar:** Accurately reflects reading percentage without layout shifts.
- [x] **Appointment Confirmation Modal:** Displays all entered customer, vehicle, and scheduling data before WhatsApp handoff.
- [x] **WhatsApp Click-to-Chat:** Targets verified number `+91 79828 24255` with complete formatted details.
- [x] **Floating Contact Widget:** Verified WhatsApp, Phone (+91 92122 18180), and Booking triggers on mobile and desktop.
- [x] **Zero Em/En Dashes:** Scanned and verified across all source files and test suites.

