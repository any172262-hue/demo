# CAR'S ENERGY CO. - PRIVACY-CONSCIOUS UTM ATTRIBUTION SPECIFICATION

**Document Status:** PRE-LAUNCH SPECIFICATION  
**Scope:** Privacy-conscious campaign source tracking  
**Last Updated:** November 2026  

---

## 1. Overview & Privacy Principles

Car's Energy Co. utilizes a privacy-conscious, zero-cookie attribution utility designed to capture inbound campaign parameters without invading customer privacy or injecting heavy third-party surveillance scripts.

### Core Architecture Rules:
1. **Zero Third-Party Trackers:** No Facebook Pixels, Google Analytics tracking beacons, or third-party ad network scripts are injected into the client bundle.
2. **Strict Sanitization:** Every UTM parameter is sanitized, stripped of HTML tags, and length-restricted to prevent parameter pollution or injection attacks.
3. **Session-Bound Storage:** Attribution is stored in browser `sessionStorage`, expiring naturally when the customer closes their browsing session.
4. **Separation of Concerns:** Campaign attribution is stored separately from customer personally identifiable information (PII) on the server.
5. **No Personal Data in URLs:** Personal details (name, phone, vehicle model) are never placed into URL tracking strings.

---

## 2. Supported Parameters

| Parameter | Purpose | Example | Validation Constraint |
|---|---|---|---|
| `utm_source` | Traffic source platform | `google`, `facebook`, `delhi_metro_qr` | Max 64 chars, alphanumeric + `_-` |
| `utm_medium` | Marketing medium | `cpc`, `qr_code`, `direct` | Max 64 chars, alphanumeric + `_-` |
| `utm_campaign` | Campaign identifier | `winter_mileage_2026` | Max 64 chars, alphanumeric + `_-` |
| `utm_term` | Search keyword (if supplied) | `cng_sequential_kit_delhi` | Max 64 chars, alphanumeric + `_-` |
| `utm_content` | Creative variant | `header_banner_a` | Max 64 chars, alphanumeric + `_-` |

---

## 3. Implementation Details (`src/utils/utm.ts`)

### Capture Logic:
When a visitor accesses any URL containing UTM parameters (e.g. `https://carsenergy.co.in/?utm_source=google_ads&utm_campaign=winter2026`):
1. `captureUtmParameters()` parses `window.location.search`.
2. Values are cleaned using `sanitizeParam()`:
   ```typescript
   const sanitizeParam = (val: string): string => {
     return val
       .replace(/<[^>]*>/g, '')
       .trim()
       .slice(0, 64)
       .replace(/[^a-zA-Z0-9_\-\.\+\s]/g, '');
   };
   ```
3. The resulting record is serialized into `sessionStorage` under the key `cars_utm_attribution`.

### Form & WhatsApp Integration:
- In `AppointmentForm.tsx`, `getStoredUtm()` retrieves the active session parameters.
- When an appointment enquiry is submitted, attribution data is sent to the backend as a distinct `utm` object within the request body.
- The confirmation modal displays the campaign source summary.
- The generated WhatsApp text appends a clean attribution tag: `*ATTRIBUTION:* [Source: google_ads | Campaign: winter2026]`.

---

## 4. Server-Side Handling (`server/index.js`)

In `/api/appointments`:
- The backend sanitizes each attribution parameter individually.
- The record is stored under an independent `attribution` property inside `server/data/enquiries.json`:
  ```json
  "attribution": {
    "source": "google_ads",
    "medium": "cpc",
    "campaign": "winter2026",
    "term": "",
    "content": ""
  }
  ```
- If no campaign parameters exist, `attribution` defaults to `null`.

---

## 5. Data Retention & Deletion Policy

- Customer attribution logs are maintained solely for marketing efficiency analysis and workshop scheduling capacity planning.
- Attribution data is never distributed, licensed, or sold to data brokers or telemarketers.
- Customers may request the deletion of their enquiry record by emailing `carsenergyco@gmail.com`.
