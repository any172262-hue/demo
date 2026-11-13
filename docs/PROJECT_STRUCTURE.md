# Project Structure & Architecture Guide

## Overview

Car's Energy Co. website is engineered as a modern, high-performance, bilingual full-stack application built with React 18, TypeScript, Tailwind CSS, Vite, and an Express.js backend with atomic persistence.

---

## Directory Hierarchy

```
cars-energy/
├── .env.example                       # Environment template
├── index.html                         # Entry HTML with typography & SEO preconnects
├── package.json                       # Package definition and build scripts
├── postcss.config.js                  # PostCSS plugins
├── tailwind.config.js                 # Automotive Design System tokens
├── tsconfig.json                      # TypeScript root compiler configuration
├── tsconfig.node.json                 # TypeScript build tool configuration
├── vite.config.ts                     # Vite bundler configuration & dev server proxy
│
├── public/                            # Static assets directly served
│   ├── favicon.svg                    # Vector automotive logo favicon
│   ├── robots.txt                     # Search engine crawler instructions
│   └── sitemap.xml                    # 24-page canonical XML sitemap
│
├── scripts/
│   └── ensure-wasm-rollup.cjs         # Rollup WASM compatibility script
│
├── server/                            # Secure Express Backend API
│   ├── index.js                       # API routes, Helmet CSP, Rate Limiting, Sanitization
│   └── data/
│       └── enquiries.json             # Persistent atomic JSON datastore for appointments
│
├── src/                               # Frontend Application Source Code
│   ├── main.tsx                       # React DOM root initialization
│   ├── App.tsx                        # 24-page Client Router, ScrollToTop, Layout
│   ├── index.css                      # Base CSS, typography tokens, custom components
│   │
│   ├── components/                    # Reusable UI & Layout Components
│   │   ├── AppointmentForm.tsx        # Interactive booking form with spam traps & API
│   │   ├── Breadcrumbs.tsx            # Accessible breadcrumbs hierarchy
│   │   ├── Footer.tsx                 # 4-column corporate footer with locations & links
│   │   ├── Header.tsx                 # Top bar, bilingual switcher, sticky navbar, mobile drawer
│   │   ├── Lightbox.tsx               # Accessible image lightbox modal with keyboard nav
│   │   ├── ScrollToTop.tsx            # Auto-scroll restoration on page route transitions
│   │   ├── SEO.tsx                    # React Helmet wrapper + JSON-LD LocalBusiness schema
│   │   └── ServiceCard.tsx            # Technical capability card with hover indicators
│   │
│   ├── context/                       # React State Management
│   │   └── LanguageContext.tsx        # Global bilingual state (EN/AS) & persistence
│   │
│   ├── data/                          # Structured Business & Content Datastores
│   │   ├── faqsData.ts                # Real automotive FAQ database in EN & AS
│   │   ├── galleryData.ts             # Workshop photographic documentation & videos
│   │   ├── productsData.ts            # Authentic brand systems (Lovato, Motozen, etc.)
│   │   └── servicesData.ts            # Complete technical specs for all 10 services
│   │
│   ├── locales/                       # Bilingual Translation Architecture
│   │   ├── en/                        # English Translation Files
│   │   │   ├── common.json            # Navigation, buttons, footer, contacts
│   │   │   ├── contact.json           # Form fields, workshop cards, alerts
│   │   │   ├── home.json              # All 14 homepage section contents
│   │   │   ├── pages.json             # About, products, gallery, videos, legal
│   │   │   └── services.json          # Service labels and consultation text
│   │   └── as/                        # Natural Human-Written Assamese Translations
│   │       ├── common.json            # Assamese common terms and navigation
│   │       ├── contact.json           # Assamese form fields and messages
│   │       ├── home.json              # Assamese homepage copy
│   │       ├── pages.json             # Assamese page copy
│   │       └── services.json          # Assamese service copy
│   │
│   └── pages/                         # Complete 24 Website Pages
│       ├── About.tsx                  # About Company, 1998 history, RFC 261
│       ├── BookAppointment.tsx       # Dedicated booking page & pre-inspection checklist
│       ├── Contact.tsx                # Mundka & Paschim Vihar workshops, maps, form
│       ├── FAQs.tsx                   # Searchable interactive FAQ knowledge base
│       ├── Gallery.tsx                # Workshop photographic gallery with categories
│       ├── Home.tsx                   # Corporate homepage with all required sections
│       ├── NotFound.tsx               # Custom 404 error page with navigation paths
│       ├── PrivacyPolicy.tsx          # Comprehensive data protection policy
│       ├── Products.tsx               # Partner brands, sequential kits, cylinders
│       ├── ServiceDetailPage.tsx      # Dynamic deep-dive for all 10 specialized services
│       ├── ServicesOverview.tsx       # Searchable catalog of all services
│       ├── SitemapPage.tsx            # Complete human-readable HTML sitemap
│       ├── TermsConditions.tsx        # Legal guidelines and workshop policies
│       ├── Testimonials.tsx           # Verified car owner feedback and ratings
│       └── VideoGallery.tsx           # Technical video walkthroughs & dyno insights
│
├── test/                              # Automated Testing Suite
│   ├── api_live.test.js               # E2E API tests, database persistence, anti-spam
│   └── backend_and_content.test.js    # Routes, locales, schemas, sitemaps, build tests
│
└── docs/                              # Complete Project Technical Documentation
    ├── CONTENT_MANAGEMENT.md
    ├── DEPLOYMENT.md
    ├── DESIGN_SYSTEM.md
    ├── PROJECT_STRUCTURE.md
    ├── SECURITY.md
    ├── SEO.md
    ├── TESTING.md
    └── TRANSLATIONS.md
```
