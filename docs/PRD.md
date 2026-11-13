# Product Requirements Document (PRD)
## Car's Energy Co. - Bilingual Automotive Services Website

- **Document status:** Draft for stakeholder review
- **Product:** Car's Energy Co. public corporate website
- **Version:** 1.0
- **Prepared from:** Source archive `cars-energy.zip`
- **Reference:** https://carsenergy.co.in/index.html
- **Design direction:** Original bright-premium automotive technology; light theme; balanced animation

---

## 1. Product summary

Car's Energy Co. needs a clear, trustworthy and easy-to-use public website that explains its automotive/CNG services, helps visitors understand which service may be relevant to their vehicle, and gives them straightforward ways to contact the company or submit an appointment enquiry.

The reference website is used only to understand the business domain, information categories and existing contact/service context. The new experience must have its own visual identity, page composition, typography, components and interaction patterns.

This is a public business website. **Customer login, customer registration, passwords and customer dashboards are out of scope.**

## 2. Problem statement

Visitors need to quickly answer:
- What does the company do?
- Which services are available?
- What should they know before requesting a service?
- Where are the workshops and when are they open?
- How can they call, WhatsApp or submit an enquiry?
- Has an enquiry been received, and is an appointment actually confirmed?

The current project has a substantial React implementation, but its planning documents and some production decisions need to be formalised. The current light design tokens are not consistently reflected by every page: the homepage hero, header/top bar and some page headers still use dark treatments.

## 3. Product goals

1. Present a credible and original corporate identity.
2. Make services and company information easy to discover.
3. Support English and Assamese throughout the public experience.
4. Make phone, WhatsApp, location and appointment actions easy to find.
5. Receive enquiries safely and explain their status honestly.
6. Work well on phones, tablets, laptops and desktops.
7. Meet practical accessibility, performance, SEO and security expectations.
8. Give the company maintainable documentation for content and technical updates.

## 4. Non-goals

- Customer accounts, sign-in, registration or password reset.
- Online payments or checkout.
- Customer booking dashboard.
- Instant appointment confirmation unless a real scheduling integration is later approved.
- Unverified claims, fabricated testimonials, invented prices or unsupported guarantees.
- A copied version of the reference website.
- A complex CMS/admin panel in this release.
- A public-facing customer enquiry listing.

## 5. Target audiences and needs

| Audience | Main need | Website response |
|---|---|---|
| Private vehicle owner | Understand service suitability and contact the workshop | Plain-language service pages, FAQs and enquiry form |
| Existing customer | Find contact details, service information and workshop hours | Prominent contact actions and location details |
| Fleet/commercial operator | Understand service coverage and request a discussion | Clear service descriptions and contact route |
| Assamese-speaking visitor | Read important information comfortably | Complete English/Assamese language switch |
| Mobile visitor | Call or enquire without friction | Responsive navigation, tap-to-call and WhatsApp |

## 6. Core user journeys

1. **Discover a service:** Home → Services → Service detail → Call/WhatsApp or appointment enquiry.
2. **Make an appointment enquiry:** Header/CTA → Appointment form → Validation → Submission → Enquiry reference and next-step message.
3. **Contact the business:** Contact page → choose workshop/contact method → call, WhatsApp, map or general enquiry.
4. **Find trust information:** About → company background/verified credentials → services/contact.
5. **Change language:** Language switcher → same page in selected language → language preference persists.
6. **Find an answer:** FAQs → search/browse question → answer → relevant service/contact link.

## 7. Information architecture and routes

The current source defines these main routes:

| Area | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Services index | `/services` |
| Service details | `/services/:slug` |
| Products | `/products` |
| Workshop gallery | `/gallery` |
| Videos | `/videos` |
| Testimonials | `/testimonials` |
| FAQs | `/faqs` |
| Contact | `/contact` |
| Get in touch | `/get-in-touch` |
| Appointment enquiry | `/book-appointment` |
| Privacy | `/privacy-policy` |
| Terms | `/terms-and-conditions` |
| HTML sitemap | `/sitemap` |
| Not found | `*` |

The sitemap and route tests should be kept in sync when routes are added or removed.

## 8. Functional requirements

### FR-01 - Navigation
- Provide consistent desktop and mobile navigation.
- Navigation must expose the main site areas and clear contact/appointment actions.
- Mobile navigation must be keyboard accessible and close after route selection.
- Active page state must be visible.

### FR-02 - Bilingual content
- English is the default language.
- Assamese is available from a visible language control.
- All navigation, page content, service information, forms, validation messages, FAQs and footer content must be translated.
- Switching language must preserve the current route where a translation exists.
- Language preference may persist locally; do not store sensitive personal data in browser storage.

### FR-03 - Service discovery
- Show a readable services overview.
- Each service detail must explain purpose, intended audience, process and practical considerations.
- Avoid unsupported legal, technical, savings or safety claims.
- Provide clear contact/appointment next steps.

### FR-04 - Appointment enquiry
- Collect only information needed to respond to the enquiry.
- Validate fields in the browser and again on the server.
- Show loading, validation, success and failure states.
- A successful submission means **enquiry received**, not confirmed appointment.
- Return a reference identifier and clear next steps.
- Do not imply real-time slot availability unless a scheduling system is implemented.

### FR-05 - General contact enquiry
- Provide a short contact form and direct contact options.
- Validate and store the enquiry using the same privacy and security standards as appointment enquiries.

### FR-06 - Contact options
- Use correct `tel:` links.
- Use correctly formatted WhatsApp links.
- Provide verified workshop address, hours and map links.
- Clearly identify which contact details belong to which workshop.

### FR-07 - Gallery and video
- Images must have useful alternative text.
- Gallery lightbox must support keyboard and touch interaction.
- Videos should load efficiently and must not autoplay with sound.

### FR-08 - SEO
- Each indexable page must have a meaningful title and description.
- Canonical URLs, sitemap, robots instructions and relevant structured data must be correct.
- Content must be crawlable and not depend entirely on client-only interactions.

### FR-09 - Accessibility
- Use semantic HTML, visible focus states, form labels and accessible error messages.
- Respect reduced-motion preferences.
- Maintain readable contrast and touch target sizes.
- Do not communicate important information by colour alone.

## 9. Design and experience requirements

- **Theme:** Light, bright-premium automotive technology.
- **Palette:** Off-white `#F5F5F2`, white `#FFFFFF`, charcoal `#292D33`, orange `#F47721`, light grey `#E9EAEC`, muted text `#73777D`.
- **Animation:** Balanced; subtle reveal, hover feedback, controlled transitions and restrained parallax.
- **Avoid:** A giant promotional hero slogan, dark-first visual identity, excessive glass effects, constant motion and copied reference layouts.
- **Responsive:** Mobile-first; no horizontal overflow.
- **Content tone:** Natural, direct and helpful. Avoid robotic sales language.

## 10. Content and business-data rules

All business facts must be confirmed by an authorised company representative before production release:
- Company establishment year and experience claims.
- RFC/approval/certification number, issuing authority and current validity.
- Workshop addresses, contact numbers and operating hours.
- Brand/partner authorisations.
- Technical limits, hydro-test claims and regulatory descriptions.
- Customer counts, savings percentages, warranty claims and testimonials.

Do not present a claim as verified merely because it appears in an old page or source file.

## 11. Success measures

- Visitors can reach a service detail in no more than a few clear navigation steps.
- Contact and appointment actions work on mobile and desktop.
- English/Assamese parity is checked automatically.
- No broken internal links or unhandled routes.
- Enquiry submissions are validated, persisted reliably and return an honest status.
- Core Web Vitals and accessibility are measured on the deployed site.
- No secrets or customer records are exposed in the public frontend or repository.

## 12. Acceptance criteria

The release is acceptable when:
1. All approved routes render and have correct page metadata.
2. The light design system is consistently applied, including header, hero, page banners and footer.
3. English and Assamese are complete for all customer-facing content.
4. Mobile, tablet and desktop layouts pass manual checks.
5. Forms have client/server validation and tested success/failure handling.
6. Production enquiry storage is durable, backed up and access-controlled.
7. Privacy, retention and contact processes are documented.
8. Automated tests and production build pass.
9. Business claims and contact details have been signed off.
10. Deployment and rollback steps are documented.

## 13. Advanced Functionality Extensions

1. **Dark Mode & Light Mode:** Fully responsive theme switcher with anti-flash script, localStorage persistence, and system preference detection. Default mode remains approved Light Theme.
2. **Site-Wide Search:** Full modal search over all static pages, 10 specialized services, hardware products, FAQs, and facility locations in English and Assamese.
3. **Scroll Reading Progress:** Viewport top progress bar indicating document scroll percentage.
4. **Accessible Back to Top:** Scroll-triggered floating button with reduced-motion support.
5. **Sticky Navigation:** Header smoothly compacts while maintaining logo, links, search, theme switcher, language selector, and CTA.
6. **Privacy-Conscious UTM Attribution:** Captures and sanitizes inbound campaign parameters into sessionStorage, passed cleanly to the backend and WhatsApp message summary without third-party tracking scripts.
7. **Appointment Review Modal & WhatsApp Handoff:** Pre-submission confirmation modal showing full customer, vehicle, and scheduling data, followed by structured WhatsApp click-to-chat generation targeting verified number +91 79828 24255.
8. **Floating Contact Widget:** Expandable bottom action menu providing direct WhatsApp, phone call (+91 92122 18180), and appointment booking access.

