# Cybersecurity & Architecture Specifications

## 1. Threat Model & Overview

The security architecture of **Car's Energy Co.** is engineered to safeguard customer appointment data, eliminate vulnerabilities (OWASP Top 10), prevent spam abuse, and guarantee that no sensitive credentials or internal database configurations leak to the client.

---

## 2. Frontend Security Controls

- **Strict Input Sanitization:** All text inputs are trimmed and stripped of `<, >, ', ", &, ;` characters to prevent Cross-Site Scripting (XSS).
- **Safe Link Attributes:** All external hyperlinks (e.g. WhatsApp, Google Maps) enforce `target="_blank" rel="noopener noreferrer"` to prevent reverse tabnabbing and window opener hijacking.
- **Zero Client-Side Secrets:** No database connection strings, internal API tokens, or server secrets are stored or bundled in frontend client code.
- **Honeypot Anti-Spam Trap:** An invisible input field `honeypot` with `tabindex="-1"` and `aria-hidden="true"` catches automated bot web scrapers and silently invalidates malicious submissions.
- **Submission Speed Check:** Form submissions occurring in under 1.5 seconds from form load are rejected as automated bot scripts.

---

## 3. Backend Security Controls (Express & Node.js)

- **HTTP Security Headers (Helmet):**
  - **Content Security Policy (CSP):** Limits scripts to `'self'`, fonts to Google Fonts, and images to Unsplash and trusted origins.
  - **X-Content-Type-Options:** `nosniff` prevents MIME-type sniffing.
  - **X-Frame-Options:** Prevents clickjacking by blocking unauthorized framing.
  - **Referrer-Policy:** `strict-origin-when-cross-origin`.
- **Dual-Tier Rate Limiting:**
  - *Tier 1 (Global API):* Restricts general API requests to a maximum of 100 requests per 15-minute window per IP.
  - *Tier 2 (Form Endpoints):* Restricts appointment and contact submissions to a strict maximum of 10 requests per 10-minute window per IP, mitigating spam and denial-of-service attempts.
- **Strict Cross-Origin Resource Sharing (CORS):**
  - Explicit whitelist of authorized origins (`http://localhost:5173`, `http://localhost:5000`, `https://carsenergy.co.in`).
  - Wildcard `*` origins are rejected for state-changing POST requests.
- **Payload Size Restrictions:** Body parsers enforce a strict `20kb` payload ceiling to prevent memory-exhaustion DoS attacks.
- **Privacy-Conscious Audit Logging:** Server logs mask customer contact numbers (e.g., `98******10`), preventing full PII exposure in server telemetry.
- **No Customer Accounts:** In accordance with prompt guidelines, there is no customer login, user account database, or password hashing pipeline - eliminating account takeover and credential stuffing attack surfaces entirely.

---

## 4. Security Checklist for Production

- [x] HTTPS enforced across all production domains.
- [x] Helmet security headers active on Express server.
- [x] Rate limiters active on `/api/appointments` and `/api/contact`.
- [x] Input sanitization and phone regex validations verified.
- [x] Honeypot and speed-bot detection mechanisms verified.
- [x] Sensitive environment variables isolated in `.env`.
- [x] Masked PII in server console logs.

---

## 5. Advanced Features Security & Privacy Controls

### 5.1 Privacy-Conscious Campaign Attribution
- **Zero Third-Party Beacons:** No external surveillance scripts, Facebook Pixels, or Google tag trackers are injected.
- **HTML Tag Stripping & Parameter Sanitization:** All inbound UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`) are stripped of HTML tags and restricted to 64 characters before storage.
- **Session-Bound Storage:** Stored in browser `sessionStorage`, automatically purged when the user closes their browser.
- **Separation from PII:** On the backend, campaign attribution is stored in a separate `attribution` object and never merged into customer contact credentials.

### 5.2 WhatsApp Click-to-Chat Security
- **Explicit Customer Control:** WhatsApp messages are generated as draft click-to-chat links. No message is automatically transmitted without the customer manually pressing Send.
- **Strict URI Encoding:** All message text is encoded via `encodeURIComponent` to prevent parameter injection or URL breakage.
- **No PII in URLs:** Customer personal data is contained exclusively within the WhatsApp message payload body, not in query tracking variables.

### 5.3 Modal Focus & Accessibility Security
- The appointment confirmation modal applies focus management, focus trap, and Escape key listeners, preventing keyboard navigation traps and ensuring accessible modal closure.

