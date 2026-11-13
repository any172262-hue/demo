# Car's Energy Co. — Original Premium Automotive Corporate Website

![Car's Energy Co.](https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80)

> **Official Automotive Engineering & Retrofitting Facility**  
> Government Approved Retrofitting Center (RFC Code No. 261) • Established 1998  
> Operating across Delhi-NCR with Primary Installation & Testing Hub in Mundka and Express Center in Paschim Vihar.

---

## 1. Project Overview

This repository contains the complete, production-ready, original corporate website for **Car's Energy Co.** Built from the ground up as a modern multi-page web platform, it adheres strictly to the **Bright Premium Automotive Technology** aesthetic, featuring:

- **100% Original Design Identity:** No copied layouts, templates, or artificial promotional fluff.
- **24 Complete Pages:** Every single requested page is fully developed with zero placeholder content.
- **Full Bilingual Architecture:** Seamless, reactive switching between **English** and natural **Assamese (অসমীয়া)** with persistent local storage.
- **Secure Appointment Enquiry Engine:** Working backend API connected to persistent atomic datastore, featuring spam honeypots, submission velocity checks, rate limiting, and clear distinction between *Enquiry Received* and *Appointment Confirmed*.
- **Comprehensive Quality Assurance:** 9/9 automated unit & integration test suites passing.

---

## 2. Complete 24-Page Map

| # | Page Route | Description |
|---|---|---|
| 1 | `/` | **Home:** Compact introduction, overview, service cards, why choose us, 4-stage process, brand grid, workshop photo & video previews, verified testimonials, accordion FAQs, enquiry form, and facility contacts. |
| 2 | `/about` | **About Company:** 26+ years history (Est. 1998), RFC Code 261 accreditation, engineering mission, core operating principles, and workshop infrastructure. |
| 3 | `/services` | **Our Services Overview:** Complete searchable catalog of all 10 specialized automotive services. |
| 4 | `/services/cng-kit-installation` | **CNG Kit Installation:** Sequential & conventional fitment with OBD-II synchronization. |
| 5 | `/services/cng-kit-distribution` | **CNG Kit Distribution:** Authorized wholesale & retail supply of Italian & Indian hardware. |
| 6 | `/services/ecu-tuning-calibration` | **ECU Tuning & Calibration:** Digital fuel mapping, short/long-term fuel trim matching. |
| 7 | `/services/rto-documentation-rc-endorsement` | **RTO Documentation & RC Endorsement:** Complete CMVR Form 21/22 and RC legal support. |
| 8 | `/services/cng-kit-servicing` | **CNG Kit Servicing:** Preventative maintenance, rail cleaning, and diagnostic scans. |
| 9 | `/services/cylinder-hydro-testing` | **Cylinder Hydro Testing:** Statutory 3-year PESO 330 bar hydrostatic water-jacket testing. |
| 10 | `/services/annual-maintenance-contract` | **Annual Maintenance Contract (AMC):** Year-round proactive service plans for cars & fleets. |
| 11 | `/services/filter-replacement` | **Filter Replacement:** Dual-stage high-pressure and coalescing vapor filter maintenance. |
| 12 | `/services/reducer-servicing` | **Reducer Servicing:** Pressure regulator overhaul, diaphragm renewal, and bench calibration. |
| 13 | `/services/cylinder-replacement` | **Cylinder Replacement:** Fresh PESO-certified seamless steel tanks and safety burst valves. |
| 14 | `/products` | **Products & Brands:** Genuine hardware from Lovato, Motozen, Gastech Italy, Mijo, STAG advancers, and Rama/EKC seamless cylinders. |
| 15 | `/gallery` | **Workshop Gallery:** Photographic documentation with category filters (Fitment, Testing, Diagnostics, Facility) and lightbox modal. |
| 16 | `/videos` | **Video Gallery:** Video demonstrations of sequential kit calibration, dyno performance, and safety practices. |
| 17 | `/testimonials` | **Customer Testimonials:** Verified reviews from daily commuters, fleet operators, and car enthusiasts in Delhi-NCR. |
| 18 | `/faqs` | **Frequently Asked Questions:** Searchable interactive accordion covering mileage, safety, legal, and maintenance topics. |
| 19 | `/contact` | **Contact Us:** Mundka & Paschim Vihar facility directions, hours, contact form, and direct WhatsApp / call links. |
| 20 | `/book-appointment` | **Book an Appointment:** Full booking engine with pre-inspection checklist and process explanation. |
| 21 | `/privacy-policy` | **Privacy Policy:** Data governance, HTTPS standards, and zero customer account storage policy. |
| 22 | `/terms-and-conditions` | **Terms & Conditions:** Workshop policies, safety condemnation rules, and pre-inspection criteria. |
| 23 | `/sitemap` | **Sitemap:** Complete human-readable directory of all 24 pages. |
| 24 | `/*` | **Custom 404 Page:** Clean error handling with recovery navigation paths. |

---

## 3. Technology Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS, Lucide Icons, React Router v6, React Helmet Async.
- **Build Tool:** Vite 6 with Rollup WASM compatibility layer.
- **Backend API:** Express.js, Helmet (CSP, X-Content-Type-Options), CORS, Express Rate Limit.
- **Persistence:** Atomic JSON datastore with transaction locking for customer appointment records.
- **Typography:** Google Fonts *Plus Jakarta Sans*, *Inter*, and *Noto Sans Bengali/Assamese* (supporting Assamese Unicode characters).
- **Testing:** Node.js native test runner (`node:test`, `node:assert/strict`).

---

## 4. Quickstart Guide

### Prerequisites
- Node.js 18+ (tested on Node v24.22.1)
- npm 9+

### 1. Installation
```bash
cd cars-energy
npm install
```

### 2. Run in Development Mode
To start the Vite frontend development server with API proxy:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Run the Backend API Server
In a separate terminal:
```bash
npm run server
```
The API server starts on [http://localhost:5000](http://localhost:5000).

### 4. Build for Production
```bash
npm run build
```
Generates optimized production assets in `dist/`.

### 5. Run the Automated Test Suite
```bash
npm test
```
Executes all 9 automated test suites verifying routes, locales, services, anti-spam mechanisms, and database persistence.

---

## 5. Technical Documentation Index

Detailed engineering guides are located in the [`docs/`](./docs) folder:
- [docs/PROJECT_STRUCTURE.md](./docs/PROJECT_STRUCTURE.md) — Directory layout and component architecture.
- [docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) — Color tokens, typography, and UI component standards.
- [docs/SECURITY.md](./docs/SECURITY.md) — Cybersecurity controls, Helmet headers, rate limiting, and spam protection.
- [docs/TRANSLATIONS.md](./docs/TRANSLATIONS.md) — English and Assamese bilingual architecture and expansion guide.
- [docs/CONTENT_MANAGEMENT.md](./docs/CONTENT_MANAGEMENT.md) — How to update services, products, FAQs, and media.
- [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) — Unified Express deployment, PM2, and Nginx reverse proxy configs.
- [docs/TESTING.md](./docs/TESTING.md) — Automated testing suites and QA verification checklist.
- [docs/SEO.md](./docs/SEO.md) — JSON-LD structured data schemas, XML sitemap, and canonical URL structure.

---

## 6. Workshop Facilities & Contacts

- **Mundka Primary Retrofitment Facility:**  
  215 & 216/5, Ground Floor, Opposite Metro Pillar Number 536, Mundka, Udyog Nagar (Kaleva Sweets Wali Gali), New Delhi – 110041  
  *Hours:* 10:30 AM – 07:00 PM (Wednesday Closed)  
  *Phone:* +91 92122 18180 | *WhatsApp:* +91 79828 24255

- **Paschim Vihar Express Service Center:**  
  Shop No. 21, C.S.C. A-4, Gole D.D.A. Market, Rohtak Road, Paschim Vihar, New Delhi – 110063  
  *Hours:* 10:30 AM – 02:00 PM (Wednesday Closed)  
  *Phone:* +91 92122 18180

- **Email:** [carsenergyco@gmail.com](mailto:carsenergyco@gmail.com)  
- **Official Domain:** [https://carsenergy.co.in](https://carsenergy.co.in)
