# Content Management & Data Update Guide

## 1. Overview

Content across Car's Energy Co. website is organized in typed, structured data files inside `src/data/`. This enables straightforward maintenance, adding new services, updating brand lines, expanding the FAQ knowledge base, or uploading workshop gallery photos without modifying UI layout components.

---

## 2. Managing Services Data (`src/data/servicesData.ts`)

To add a new service or update technical specifications:
1. Open `src/data/servicesData.ts`.
2. Locate the service object or add a new object conforming to the `ServiceDetail` interface:
   - `slug`: URL slug (e.g., `sequential-calibration-upgrade`)
   - `iconName`: Name of Lucide icon (e.g., `Cpu`, `Wrench`, `Gauge`)
   - `titleEn` & `titleAs`: English and Assamese titles
   - `shortDescEn` & `shortDescAs`: Brief description for cards
   - `whatItIsEn` & `whatItIsAs`: Comprehensive overview
   - `whoNeedsItEn` & `whoNeedsItAs`: Bullet points for customer personas
   - `processStepsEn` & `processStepsAs`: 4 to 5 step workflow
   - `considerationsEn` & `considerationsAs`: Important customer considerations
   - `technicalHighlightsEn` & `technicalHighlightsAs`: Specifications table data
3. The new service will automatically appear on the Homepage, Services Overview page, Header dropdown, Footer links, and create its own dedicated dynamic detail route!

---

## 3. Managing Products & Brands (`src/data/productsData.ts`)

Hardware, conversion kits, and PESO cylinders are cataloged in `src/data/productsData.ts`:
- `category`: `'kit'` | `'cylinder'` | `'component'`
- `origin`: Manufacturer & Country (e.g. `Italy / Lovato Gas S.p.A.`)
- `featuresEn` & `featuresAs`: Array of key engineering bullet points
- `compatibility`: Engine types and car models
- `status`: Stock status and authorization guarantee

---

## 4. Managing Gallery & Videos (`src/data/galleryData.ts`)

- **Workshop Photos:** Add entries to `galleryData` with `category` (`'fitment'` | `'testing'` | `'diagnostics'` | `'facility'`), high-resolution image URL, English title/description, and Assamese title/description.
- **Videos:** Add entries to `videoGalleryData` with `youtubeId`, duration string, and bilingual descriptions.

---

## 5. Managing FAQs (`src/data/faqsData.ts`)

Add or update questions in `faqsData`:
- `category`: `'installation'` | `'safety'` | `'legal'` | `'maintenance'`
- `questionEn` & `questionAs`
- `answerEn` & `answerAs`
