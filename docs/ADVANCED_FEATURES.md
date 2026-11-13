# CAR'S ENERGY CO. - ADVANCED WEBSITE FEATURES ARCHITECTURE

**Document Status:** PRE-LAUNCH SPECIFICATION  
**Last Updated:** November 2026  
**Reference Standard:** RFC Code No. 261 / CMVR Rule 115  

---

## 1. Overview

This document specifies the architecture, components, and implementation guidelines for the advanced functionality implemented across the Car's Energy Co. website (`carsenergy.co.in`).

All features adhere to the non-negotiable design system rules:
- Light mode is default with a professionally calibrated Dark Mode.
- No pill-shaped buttons or badges (`rounded-full` prohibited).
- Zero em dashes or en dashes anywhere in user-facing or technical copy.
- Zero fake metrics, fake reviews, or fabricated numbers.
- Full bilingual fidelity in English and Assamese.

---

## 2. Dark Mode and Light Mode Architecture

### 2.1 Design Principles
Dark mode is not an automatic color inversion. It is engineered with custom contrast tokens:
- **Canvas / Background:** `#121417` (Deep technical charcoal)
- **Card Surfaces:** `#181B1F` and `#1E2126` (Layered elevation)
- **Borders & Dividers:** `#2A2F37` and `#374151` (Subtle boundary definition)
- **Primary Typography:** `#E9EAEC` (High legibility off-white)
- **Secondary Typography:** `#9CA3AF` (Muted technical text)
- **Brand Accent:** `#F47721` (Engineering safety orange)

### 2.2 Anti-Flash Theme Initializer
An inline execution script in `index.html` resolves the active theme before CSS rendering, eliminating Theme Flashing (FOUC):
```javascript
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
```

### 2.3 Context & Persistence
Managed by `src/context/ThemeContext.tsx`:
- Persists user selection in `localStorage.getItem('theme')`.
- Exposes `theme`, `toggleTheme()`, and `setTheme()`.
- Synchronizes with system preference changes when no explicit override is stored.
- Accessible SVG Sun and Moon toggle icons in both desktop navbar and mobile drawer.

---

## 3. Site-Wide Search Architecture

### 3.1 Content Coverage
The search index (`src/data/searchIndex.ts`) indexes:
1. **Static Pages:** Home, About, Services, Products, Gallery, Videos, Testimonials, FAQs, Contact, Get In Touch, Book Appointment, Legal Pages, and Sitemap.
2. **Specialized Services:** All 10 individual engineering service pages with technical descriptions, target vehicle types, and process steps.
3. **Hardware & Brands:** Lovato, Motozen, Tomasetto, BRC, and PESO seamless cylinders.
4. **FAQs:** All 12 verified technical queries across installation, mileage, safety, and legal categories.
5. **Workshop Facilities:** Mundka Primary Hub and Paschim Vihar Express Center.

### 3.2 Modal Features & Keyboard Navigation
Implemented in `src/components/SearchModal.tsx`:
- Global shortcut: `Ctrl+K` or `Cmd+K` toggles search overlay from any page.
- Accessible focus management with `role="dialog"` and `aria-modal="true"`.
- Keyboard navigation: Arrow Down (`↓`), Arrow Up (`↑`), Enter (`↵`) to navigate, and Escape (`ESC`) to dismiss.
- Real-time term highlighting using `<mark>` elements.
- Clean empty and no-results states with contextual keyword suggestions.
- Cross-lingual search matching across English and Assamese fields.

---

## 4. Scroll Progress Indicator & Back to Top

### 4.1 Scroll Progress Bar (`src/components/ScrollProgressBar.tsx`)
- Viewport-fixed reading bar (`h-1 bg-orange fixed top-0 left-0 right-0 z-[60]`).
- Dynamically computes `(window.scrollY / (scrollHeight - innerHeight)) * 100`.
- Zero layout shifts; operates seamlessly with the sticky header on mobile and desktop.
- Respects `prefers-reduced-motion`.

### 4.2 Floating Back to Top Button (`src/components/BackToTop.tsx`)
- Threshold: Appears smoothly once page scroll exceeds 300px.
- Accessible action: Triggers smooth window scroll to top.
- Positioned at `bottom-24 right-5 sm:right-6` to prevent collision with the contact widget.
- Screen-reader accessible with `aria-label="Back to top"`.

---

## 5. Floating Workshop Contact Widget (`src/components/FloatingContactWidget.tsx`)

A compact floating action widget anchored at `bottom-6 right-5 sm:right-6 z-40`:
- **Verified WhatsApp Action:** Direct link to `https://wa.me/917982824255`.
- **Verified Phone Action:** One-tap call to `tel:+919212218180`.
- **Inspection Booking Action:** Direct navigation to `/book-appointment`.
- Non-intrusive speed-dial design that collapses on outside click or Escape key.
- Full dark and light mode adaptation with accessible labels.
