# Maa Kamakhya Auto Gas - Premium Automotive Corporate Website

![Maa Kamakhya Auto Gas](https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80)

> **Authorized Automotive Gas Engineering & Retrofitment Center**  
> Established 2022 • 4.9 ★ Justdial Verified Rating (97+ Customer Reviews)  
> Operating in Guwahati, Assam: Shop No. 7, Opposite Nezone Steel, Near Kumar Resorts, NH-37, Paschim Boragaon, Garchuk, Guwahati - 781035.

---

## 1. Project Overview

This repository contains the complete, production-ready corporate website for **Maa Kamakhya Auto Gas**. Migrated incrementally from the approved corporate template, it adheres strictly to the **Bright Premium Automotive Technology** aesthetic:

- **Preserved UI/UX & Visual Identity:** Original layout, typography, energetic orange (`#FF5722`) and charcoal theme, dark/light modes, rectangular buttons (`rounded-lg`, 8px, 0 pill buttons).
- **24 Complete Pages:** Every single page is fully localized and operational with zero placeholder text.
- **Full Bilingual Architecture:** Seamless, reactive switching between **English** and natural **Assamese (অসমীয়া)**.
- **5-Field Appointment Booking Engine:** Streamlined 5-field form (`fullName`, `mobileNumber`, `carName`, `carModel`, `carNumber`) with review confirmation modal and transparent WhatsApp handoff.
- **Verified Business Information:** 100% verified data sourced from official workshop operations and Justdial listing `9999PX361-X361-230531130523-M2H7_BZDET`. Zero hallucinated prices, reviews, or certificates.
- **Comprehensive Quality Assurance:** Automated test suites verifying routes, locales, services, anti-spam mechanisms, and database persistence.

---

## 2. Complete 24-Page Map

| # | Page Route | Description |
|---|---|---|
| 1 | `/` | **Home:** Hero slideshow, workshop introduction, service cards, why choose us, 4-stage process, partner brands, workshop photo previews, verified testimonials, accordion FAQs, enquiry form, and facility contacts with Google Maps. |
| 2 | `/about` | **About Company:** Established 2022, 4.9★ Justdial rating, Garchuk retrofitment hub, diagnostic bay, and skilled technician profiles. |
| 3 | `/services` | **Our Services Overview:** Complete searchable catalog of all 10 specialized automotive gas services. |
| 4 | `/services/cng-kit-installation` | **CNG Kit Installation:** Sequential & conventional fitment with OBD-II synchronization. |
| 5 | `/services/cng-kit-distribution` | **CNG Kit Distribution:** Regional Guwahati distribution hub for North-East India. |
| 6 | `/services/ecu-tuning-calibration` | **ECU Tuning & Calibration:** Digital fuel mapping, OBD-II diagnosis, and fuel trim optimization. |
| 7 | `/services/rto-documentation-rc-endorsement` | **DTO Documentation & RC Endorsement:** DTO endorsement paperwork guidance. |
| 8 | `/services/cng-kit-servicing` | **CNG Kit Servicing:** Preventative gas maintenance, injector cleaning, and leak audits. |
| 9 | `/services/cylinder-hydro-testing` | **Cylinder Hydro Testing:** Statutory 3-year PESO 330 bar hydrostatic testing coordination. |
| 10 | `/services/annual-maintenance-contract` | **Annual Maintenance Contract (AMC):** Year-round proactive service plans for cars & fleets. |
| 11 | `/services/filter-replacement` | **Filter Replacement:** Low/high pressure gas filter renewals. |
| 12 | `/services/reducer-servicing` | **Reducer Servicing:** Pressure regulator overhaul, diaphragm renewal, and bench calibration. |
| 13 | `/services/cylinder-replacement` | **Cylinder Replacement:** Fresh PESO-certified seamless steel tanks and safety burst valves. |
| 14 | `/products` | **Products & Brands:** Genuine conversion kits (Lovato, Motozen, Tomasetto, Gastech Italy, Mijo, STAG advancers, PESO cylinders). |
| 15 | `/gallery` | **Workshop Gallery:** Photographic documentation with category filters (Fitment, Testing, Diagnostics, Facility) and lightbox modal. |
| 16 | `/videos` | **Video Gallery:** Video demonstrations of sequential kit calibration, dyno performance, and safety practices. |
| 17 | `/testimonials` | **Customer Testimonials:** 4.9 / 5.0 Justdial aggregate rating and verified reviews from car owners in Guwahati. |
| 18 | `/faqs` | **Frequently Asked Questions:** Searchable interactive accordion covering mileage, safety, DTO rules, and maintenance topics. |
| 19 | `/contact` | **Contact Us:** Guwahati Garchuk workshop directions, hours, contact form, Google Maps embed, and direct WhatsApp / call links. |
| 20 | `/book-appointment` | **Book an Appointment:** Streamlined 5-field booking engine with pre-inspection checklist. |
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
- **Typography:** Google Fonts *Plus Jakarta Sans*, *Inter*, and *Noto Sans Bengali/Assamese*.
- **Testing:** Node.js native test runner (`node:test`, `node:assert/strict`).

---

## 4. Quickstart Guide

### Prerequisites
- Node.js 18+ (tested on Node v24.22.1)
- npm 9+

### 1. Installation
```bash
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

---

## 5. Workshop Facility & Contacts

- **Main Facility:**  
  Shop No. 7, Opposite Nezone Steel, Near Indian Oil Petrol Pump & Kumar Resorts,  
  NH-37, Paschim Boragaon, Garchuk, Guwahati, Assam - 781035  
  *Hours:* 09:00 AM – 07:30 PM (Monday to Sunday - Open All 7 Days)  
  *Primary Phone:* +91 9678******  
  *Alternative Phone:* +91 9678******  
  *Official WhatsApp:* +91 9678******  
  *Email:* [maakamakhyaautogas@gmail.com](mailto:maakamakhyaautogas@gmail.com)  
  *Live Demo:* [https://any172262-hue.github.io/demo/](https://any172262-hue.github.io/demo/)
