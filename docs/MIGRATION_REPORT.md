# MAA KAMAKHYA AUTO GAS: COMPLETE WEBSITE MIGRATION REPORT
**From:** Car's Energy Co. (Delhi-NCR)  
**To:** Maa Kamakhya Auto Gas (Guwahati, Assam)  
**Live Demo:** [any172262-hue.github.io/demo/](https://any172262-hue.github.io/demo/)  
**Primary Reference:** Justdial Guwahati Profile (`9999PX361-X361-230531130523-M2H7_BZDET`)  
**Document Version:** 2.0 | November 2026  

---

## 1. Executive Summary of Migration

This project executes a content, identity, and regional migration from the former "Car's Energy Co." corporate template to an authentic, high-converting digital presence for **Maa Kamakhya Auto Gas**, based on NH-37, Garchuk, Guwahati, Assam.

All changes strictly adhere to the user's primary constraint: **Preserve Existing UI/UX, Color Palette, Typography, Navigation, Responsive Grid, Rectangular Button Geometry, and Component Architecture.**

---

## 2. Classification & Migration Matrix

### A. KEEP (Working Architectural Strengths & Features)
- React 18 + Vite 6 + TypeScript frontend framework.
- Tailwind CSS design system with custom automotive color palette (`#FF5722` energetic orange, `#1A1E24` charcoal, `#0F1216` dark mode).
- Rectangular button standard (`rounded-lg`, 8px radius) with zero pill buttons.
- Full bilingual English (`en`) and Assamese (`as`) context switching (`LanguageContext.tsx`).
- Full Dark / Light theme persistence (`ThemeContext.tsx`).
- Streamlined 5-field appointment form with anti-bot honeypot and speed check.
- Interactive two-step appointment review modal before WhatsApp handoff.
- Express backend REST API (`server/index.js`) with rate-limiting, CORS, and atomic flat-file database (`enquiries.json`).
- Keyboard-accessible global site search (`Ctrl+K` / `Cmd+K`).
- Dynamic SEO & OpenGraph metadata system (`react-helmet-async`).

### B. MODIFY (Components Requiring Identity & Content Updates)
- `src/locales/en/common.json` & `src/locales/as/common.json`: Replaced all old company names, addresses, contacts, and copyright texts with Maa Kamakhya Auto Gas data.
- `src/locales/en/contact.json` & `src/locales/as/contact.json`: Replaced Delhi Mundka/Paschim Vihar workshops with verified Guwahati Paschim Boragaon facility.
- `src/locales/en/home.json` & `src/locales/as/home.json`: Replaced old Delhi RFC-261 stats, dates (1998 -> 2022), and descriptions with Guwahati automotive gas retrofitting leadership.
- `src/locales/en/pages.json` & `src/locales/as/pages.json`: Updated About Us, Products, Gallery, FAQs, and Privacy Policy.
- `src/components/Header.tsx`: Replaced logo mark (`MK / AUTO GAS`), updated direct hotline link (`+91 9678******`) and WhatsApp link (`+91 9678******`).
- `src/components/Footer.tsx`: Replaced logo, about bio, Guwahati facility address, contact links, and copyright text.
- `src/components/FloatingContactWidget.tsx`: Synced direct WhatsApp and phone hotlines with Maa Kamakhya Auto Gas numbers.
- `src/components/SEO.tsx`: Updated localBusiness schema to Guwahati address, geo-coordinates, and operating hours.
- `src/components/AppointmentForm.tsx` & `AppointmentModal.tsx`: Updated WhatsApp message template to reflect "MAA KAMAKHYA AUTO GAS - SERVICE ENQUIRY" and number `+91 9678******`.
- `src/components/GetInTouchForm.tsx`: Updated phone hotlines and confirmation text.
- `src/data/servicesData.ts`: Retuned service details to reflect Guwahati and Northeast Assam automotive standards.
- `src/data/productsData.ts`: Verified brands (Motozen, Lovato, Tomasetto Achille, BRC, Zavoli, STAG).
- `src/data/galleryData.ts`: Updated image descriptions and location tags to Guwahati workshop facility.
- `src/data/testimonialsData.ts`: Shifted from fake individual reviews to authentic third-party ratings: 4.9/5 stars based on 97+ verified Justdial reviews, plus an original customer review submission form.
- `src/data/faqsData.ts`: Updated answers to reflect Guwahati and Assam DTO procedures.
- `src/data/searchIndex.ts`: Synced search keywords and index records.
- `server/index.js`: Updated API branding, response messages, contact fallbacks, and reference ID prefix (`MK-2026-XXXX`).
- `index.html`: Updated page title, description, and metadata.
- `public/robots.txt` & `public/sitemap.xml`: Synced with updated URLs and metadata.

### C. REMOVE (Unrelated & Obsolete Delhi-NCR Artifacts)
- All mentions of "Car's Energy Co.", "carsenergy.co.in", "carsenergyco@gmail.com".
- All mentions of Delhi facilities: "215 & 216/5, Mundka, Metro Pillar 536" and "Paschim Vihar CSC A-4".
- All old Delhi phone numbers: `+91 92122 18180` and `+91 79828 24255`.
- Delhi Transport Department specific RFC Code No. 261 references.
- Obsolete claims of establishment in 1998 (Maa Kamakhya Auto Gas verified established in 2022).

### D. ADD (New Verified Information & Enhancements)
- Verified primary address: Shop No. 7, Opposite Nezone Steel, Near Indian Oil Petrol Pump & Kumar Resorts, NH-37, Paschim Boragaon, Garchuk, Guwahati, Assam - 781035.
- Verified hotlines: `+91 9678******` & `+91 9678******`.
- Verified WhatsApp: `+91 9678******`.
- Verified Email: `maakamakhyaautogas@gmail.com`.
- Verified Operating hours: 9:00 AM – 7:30 PM, Monday to Sunday (Open all 7 days).
- Verified Justdial rating integration: 4.9 / 5.0 (97+ verified customer ratings).
- Google Maps responsive embed for NH-37 Paschim Boragaon, Guwahati with "Get Directions" navigation action.
- Payment methods section: Cash, UPI, Cards, Net Banking, EMI Financing.
- Customer Review Submission Form on Testimonials page for collecting verified direct feedback.
