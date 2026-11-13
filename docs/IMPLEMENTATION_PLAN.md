# Implementation Plan
## Car's Energy Co. - Website Completion and Production Readiness

- **Version:** 1.0
- **Planning basis:** Uploaded source archive inspection
- **Approach:** Incremental, testable delivery; preserve working features

---

## 1. Delivery principles

1. Inspect before changing.
2. Keep the existing React/TypeScript/Vite and Express architecture unless a measured reason justifies a change.
3. Make the approved light theme consistent across every route.
4. Treat the reference as business research, not a design template.
5. Do not add customer login or registration.
6. Verify business facts before publishing.
7. Do not claim production readiness until persistence, security, tests and deployment have been verified.

## 2. Current baseline from archive

Observed:
- React 18 + TypeScript + Vite 6 frontend.
- React Router page routing.
- Tailwind CSS and custom design tokens.
- English and Assamese locale JSON files.
- Express API with appointment and contact endpoints.
- Helmet, CORS and express-rate-limit dependencies.
- Local JSON-file enquiry persistence.
- Existing `docs/` documentation and Node test files.
- A prebuilt `dist/` directory and `node_modules/` included in the supplied archive.

Known gaps/risks to address:
- Light tokens exist, but several prominent components still use dark styling (header/top bar, home hero and contact page banner).
- Current JSON persistence is not a managed production database.
- CORS configuration is hard-coded in server code; align it with environment configuration.
- CSP includes inline allowances and needs review.
- Sanitisation currently strips characters from user text; replace with field validation and context-safe output handling.
- Business facts and marketing claims need written approval.
- Existing documentation contains assertions such as “production-ready” and “all tests passing”; independently rerun checks before relying on those statements.
- The archive contains generated/build and dependency directories; avoid committing customer data or unnecessary build/dependency artifacts to source control.

## 3. Phased implementation

### Phase 0 - Project baseline and safety
**Tasks**
- Create a clean working branch or backup.
- Inspect package scripts, routes, source, assets and environment files.
- Confirm current Git status and deployment target.
- Identify secrets and any real customer records in the archive.
- Run existing tests and production build before edits.
- Record baseline output.

**Deliverables**
- Baseline audit.
- List of blockers and verified business facts.
- Safe rollback point.

**Exit criteria**
- Project can be installed/built/tested, or known baseline failures are documented.
- No real customer data or secrets are copied into the working branch.

### Phase 1 - Product and content sign-off
**Tasks**
- Confirm company name and approved logo.
- Confirm official phone, WhatsApp, email, workshop addresses and hours.
- Confirm legal/approval credentials and current validity.
- Verify service list, product brands, warranties and technical claims.
- Approve genuine testimonials and media rights.
- Review English and Assamese translations.

**Deliverables**
- Approved business facts sheet.
- Content inventory.
- Translation review checklist.

**Exit criteria**
- No unsupported claim is required for launch.

### Phase 2 - Design system and visual alignment
**Tasks**
- Audit every route for dark-first sections and inconsistent styling.
- Apply light theme to header, nav, hero, page banners, cards, forms and footer.
- Keep charcoal as a controlled contrast colour, not the dominant canvas.
- Standardise typography, spacing, radii, shadows and focus states.
- Rework the homepage composition so useful company/service content appears immediately.
- Remove or reduce distracting auto-rotation and heavy parallax.
- Validate responsive states.

**Deliverables**
- Updated design tokens.
- Shared component updates.
- Responsive page templates.
- Design QA evidence/screenshots.

**Exit criteria**
- All routes match the approved light visual direction.
- Balanced motion and reduced-motion support work.

### Phase 3 - Content, routes and localisation
**Tasks**
- Review all route definitions and sitemap.
- Check each page has real, useful content.
- Centralise repeated company facts.
- Audit every English key against Assamese keys.
- Review Assamese grammar, readability and font rendering.
- Add translation parity tests.
- Confirm metadata and canonical URLs.

**Deliverables**
- Route/content matrix.
- Complete EN/AS dictionaries.
- Updated SEO metadata.

**Exit criteria**
- No missing customer-facing translations or broken internal routes.

### Phase 4 - Enquiry backend and data persistence
**Tasks**
- Choose a production datastore and hosting plan.
- Define enquiry schema and retention policy.
- Migrate appointment and contact writes from local JSON to the chosen durable datastore.
- Add request schema validation and field length limits.
- Validate date/time and required fields server-side.
- Align CORS with environment configuration.
- Review CSP and security headers.
- Implement robust anti-abuse controls.
- Ensure failure responses never imply successful submission.
- Define how staff receive and handle enquiries.
- Add backup and restore procedures.

**Deliverables**
- Data model/migration.
- API contract.
- Secure persistence implementation.
- Operations and retention notes.

**Exit criteria**
- Concurrent submissions do not overwrite one another.
- Data survives redeploy/restart.
- Access is restricted.
- Backup restore is tested.
- Staff workflow is clear.

### Phase 5 - SEO, accessibility and performance
**Tasks**
- Validate title, description and canonical for every route.
- Validate sitemap and robots.
- Validate structured data against visible verified content.
- Optimise images and font loading.
- Lazy-load below-fold media.
- Review keyboard and screen-reader behaviour.
- Test colour contrast and focus.
- Test reduced-motion.
- Measure Core Web Vitals and Lighthouse as diagnostic tools.

**Deliverables**
- SEO QA report.
- Accessibility QA report.
- Performance report and fixes.

**Exit criteria**
- No critical accessibility or SEO blockers.
- Performance issues are documented and prioritised.

### Phase 6 - Testing and release candidate
**Tasks**
- Run TypeScript build.
- Run lint.
- Run automated tests.
- Add API integration tests against a test datastore.
- Test mobile/tablet/desktop.
- Test English and Assamese.
- Test form success, validation, spam and server failure.
- Test 404 and deep links.
- Test deployment preview.
- Perform security configuration review.

**Deliverables**
- Test report.
- Known-issues list.
- Release candidate.

**Exit criteria**
- All release-blocking tests pass.
- No known critical security issue.
- Business owner signs off content.

### Phase 7 - Production deployment and handover
**Tasks**
- Configure production environment and secrets.
- Deploy API and frontend.
- Configure HTTPS, domain, CORS and reverse proxy/CDN.
- Run health check and form smoke test.
- Submit sitemap to search engine tools.
- Verify analytics only if approved and privacy-compliant.
- Confirm backups, monitoring and support owner.
- Document rollback.

**Deliverables**
- Live website.
- Deployment record.
- Handover documentation.
- Operations checklist.

**Exit criteria**
- Production smoke tests pass.
- Enquiry storage and staff follow-up work end-to-end.
- Rollback and support ownership are known.

## 4. Suggested implementation order

| Priority | Work item | Reason |
|---|---|---|
| P0 | Verify business facts and remove unsupported claims | Trust and legal accuracy |
| P0 | Durable enquiry storage and privacy controls | Customer data reliability |
| P0 | Fix light-theme inconsistency | Matches approved product direction |
| P0 | Validate API and form flows | Core business function |
| P1 | Complete EN/AS parity | Required audience support |
| P1 | Accessibility and responsive fixes | Usability across devices |
| P1 | SEO and page metadata audit | Discoverability |
| P2 | Refine gallery/video and motion | Polish after core flows |
| P2 | Monitoring and operational improvements | Long-term reliability |

## 5. Definition of done

A feature is complete only when:
- It is implemented in source code.
- It works on supported viewport sizes.
- It works in English and Assamese where applicable.
- It has loading, empty, error and success states as needed.
- It is keyboard accessible.
- It respects reduced motion.
- It has automated or documented manual tests.
- It does not expose secrets or personal data.
- Its documentation is updated.

## 6. Release checklist

- [ ] Business owner approved all company facts.
- [ ] All page routes and deep links work.
- [ ] Light theme is consistent across the site.
- [ ] Mobile, tablet and desktop checks passed.
- [ ] English and Assamese content reviewed.
- [ ] Forms tested against production-like API.
- [ ] Enquiries stored in durable persistent storage.
- [ ] Privacy and retention policy approved.
- [ ] CORS/CSP/security headers reviewed.
- [ ] No secrets or customer records in repository.
- [ ] SEO sitemap and metadata validated.
- [ ] Accessibility and reduced-motion checks passed.
- [ ] Backups and restore tested.
- [ ] Production health check passed.
- [ ] Rollback and support owner documented.

---

## 7. Phase 7 - Advanced Functionality Delivery

### Tasks Executed:
1. **Dark Mode Integration:** Created `ThemeContext.tsx`, enabled Tailwind `darkMode: 'class'`, added anti-flash script in `index.html`, calibrated dark tokens in `index.css`, and placed toggles in desktop and mobile navigation.
2. **Site-Wide Search:** Built `searchIndex.ts` and `SearchModal.tsx` covering all pages, services, products, FAQs, and facilities in English and Assamese.
3. **Viewport Progress Bar:** Built `ScrollProgressBar.tsx` for real-time scroll progress.
4. **Floating Action Controls:** Implemented `BackToTop.tsx` and `FloatingContactWidget.tsx` with WhatsApp, phone, and appointment actions.
5. **Campaign Attribution:** Built `utm.ts` for privacy-conscious UTM parameter capture and backend integration.
6. **Appointment State Machine & WhatsApp Handoff:** Added review modal (`AppointmentModal.tsx`), field-level validation, backend persistence, structured click-to-chat WhatsApp URL generator targeting `+91 79828 24255`, and fallback states.
7. **Automated Testing:** Added `advanced_features.test.js` validating UTM sanitization, WhatsApp URL encoding, and API integration.

### Phase 7 Architecture Documentation:
- `docs/ADVANCED_FEATURES.md`: Full technical architecture for theme, search, scrolling, and action widgets.
- `docs/WHATSAPP_INTEGRATION.md`: Click-to-chat integration contract, message formatting, and validation lifecycle.
- `docs/UTM_TRACKING.md`: Privacy-conscious campaign attribution protocol, sanitization, and database mapping.

