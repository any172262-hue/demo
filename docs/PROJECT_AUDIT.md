# Source Project Audit
## Review of the supplied `cars-energy.zip`

- **Review date:** 13 November 2026
- **Scope:** Static inspection of the supplied archive and selected source files
- **Important:** This is a source-code review, not a live penetration test or proof of production behaviour.

## 1. Project inventory

The archive contains a React/TypeScript/Vite application, an Express API, locale dictionaries, page components, service/product/gallery/FAQ data, existing documentation, tests, a built `dist/` directory and `node_modules/`.

The source includes:
- `src/App.tsx` — route configuration and shared layout.
- `src/pages/` — page-level components.
- `src/components/` — shared navigation, footer, forms, cards, SEO and gallery components.
- `src/context/LanguageContext.tsx` — language state.
- `src/locales/en/` and `src/locales/as/` — translation dictionaries.
- `src/data/` — service, product, FAQ, gallery and testimonial content.
- `server/index.js` — Express API.
- `server/data/enquiries.json` — local enquiry data file.
- `test/` — automated test files.
- `docs/` — existing implementation and operational guides.

## 2. Positive findings

- A clear React + TypeScript component structure exists.
- Public routes cover company, services, products, media, FAQs, contact and legal pages.
- English and Assamese locale files are present.
- Appointment and general contact API endpoints exist.
- Helmet, CORS and rate limiting are included.
- The UI has a reduced-motion CSS rule.
- Design tokens already define the approved light palette.
- README and docs provide a useful starting point for maintainers.

## 3. Important discrepancies

### 3.1 Approved light theme vs current implementation
The CSS defines off-white/white/charcoal/orange tokens, but source components still contain dark-first treatments:
- `src/components/Header.tsx` uses a dark top information bar and dark glass navigation classes.
- `src/pages/Home.tsx` uses a dark full-width hero with dark overlays and an automatically rotating background carousel.
- `src/pages/Contact.tsx` uses a dark page header.

This means the light theme is only partially applied. Audit all routes and shared components before declaring the design complete.

### 3.2 Persistence
`server/index.js` reads and writes `server/data/enquiries.json`. Atomic temp-file rename reduces the risk of partially written files, but it is not a database transaction system and does not guarantee safe concurrent updates or persistence on ephemeral hosting.

Production should use a managed durable datastore with access controls, backups, retention and tested restore.

### 3.3 Security configuration
- The allowed CORS origins are currently defined in source code. The `.env.example` lists `CORS_ORIGINS`, so confirm the server consumes the environment variable or update the documentation/configuration.
- CSP includes `'unsafe-inline'` for scripts and styles. Review a nonce/hash-based or otherwise stricter policy.
- The sanitiser removes selected punctuation from all input strings. This can change legitimate user input and is not a replacement for schema validation and safe output encoding.
- Confirm request date validation, field length limits, trusted proxy configuration and rate-limit behaviour in the real hosting environment.
- The API should not accept arbitrary origins or trust client-provided timestamps as the sole anti-bot mechanism.
- Keep real customer records out of source archives and Git history.

### 3.4 Content accuracy
The source and README contain specific statements about establishment year, experience, RFC status, approvals, testing capabilities, customer numbers, fuel savings, brands and technical standards. Treat these as unverified until the business supplies current supporting evidence and approves the exact wording.

Testimonials should be genuine and authorised. Stock photos must not be presented as actual workshop photos.

### 3.5 Documentation claims
The existing README and testing guide make strong claims about all pages being complete, production readiness and tests passing. Those claims must be checked against a fresh test/build run and real deployment checks. A static source review cannot confirm production status.

## 4. Recommended action list

| Priority | Action |
|---|---|
| Critical | Replace prototype JSON enquiry persistence before production |
| Critical | Verify all company/legal/technical claims |
| High | Apply light theme consistently to header, hero and all page banners |
| High | Review CSP, CORS and server-side validation |
| High | Define privacy retention, access and backup policy |
| Medium | Audit EN/AS translation completeness and Assamese font rendering |
| Medium | Review carousel auto-rotation and parallax for balanced motion |
| Medium | Re-run build, lint and automated tests from a clean install |
| Medium | Verify sitemap, canonical URLs and structured data against live routes |
| Low | Remove unnecessary generated/build/dependency files from source-control workflow |

## 5. Audit limitation

This review is based on files contained in the supplied ZIP. It does not confirm:
- The current live website's appearance or availability.
- Production server configuration.
- Real appointment delivery to company staff.
- Database durability or backups on the hosting provider.
- Actual CORS/CSP behaviour at the deployed domain.
- Business approval/certification validity.
- Lighthouse, Core Web Vitals or real-device performance.

These items require staging/production testing and business-owner confirmation.
