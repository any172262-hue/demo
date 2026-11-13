# Bright Premium Automotive Technology - Design System

## 1. Visual Philosophy

The design system for **Car's Energy Co.** adheres strictly to the **Bright Premium Automotive Technology** style. The visual identity reflects industrial precision, mechanical integrity, and modern clean engineering - steering completely away from template tropes, oversized dark hero slogans, or gratuitous glassmorphic effects.

---

## 2. Color Palette & Tokens

| Color Name | Hex Code | Role | Tailwind Token |
|---|---|---|---|
| **Off-White** | `#F5F5F2` | Primary page canvas, warm engineering backdrop | `bg-offwhite`, `text-offwhite` |
| **Pure White** | `#FFFFFF` | Component surfaces, elevated cards, inputs | `bg-purewhite`, `text-purewhite` |
| **Charcoal** | `#292D33` | Primary typography, deep structural elements, brand mark | `bg-charcoal`, `text-charcoal` |
| **Charcoal Dark** | `#1E2126` | Top announcement bar, footer background | `bg-charcoaldark` |
| **Electric Orange** | `#F47721` | Interactive elements, CTAs, focus indicators, highlights | `bg-orange`, `text-orange` |
| **Orange Light** | `#FDEEE4` | Subtle badge backgrounds, active pill highlights | `bg-orange-light` |
| **Light Grey** | `#E9EAEC` | Card borders, divider rules, subtle chip fills | `bg-lightgrey`, `border-lightgrey` |
| **Secondary Text** | `#73777D` | Explanatory body text, metadata, subtle timestamps | `text-secondary` |

> **Design Rule:** Electric Orange (`#F47721`) is applied **selectively** to high-intent actions (e.g. "Book Appointment", active tabs, key status badges) and never overused as full background washes.

---

## 3. Typography Architecture

### Font Families
- **Headings:** `"Plus Jakarta Sans"`, `"Inter"`, `"Noto Sans Assamese"`, `sans-serif`
  - Crisp geometric letterforms, high legibility in automotive and mechanical contexts.
- **Body & Technical Specs:** `"Inter"`, `"Noto Sans Assamese"`, `"Noto Sans Bengali"`, `system-ui`, `sans-serif`
  - High x-height, neutral readability, full native Unicode rendering of Assamese glyphs (e.g., `ৰ` [U+09F0], `ৱ` [U+09F1], conjunct ligatures `ক্ষ`, `ন্ত্ৰ`).

### Type Scale & Hierarchy
- **Display / H1:** 2.25rem – 2.5rem (36px – 40px), font-extrabold, tracking-tight (`-0.02em`)
- **H2 (Section Titles):** 1.75rem – 2rem (28px – 32px), font-extrabold
- **H3 (Card & Feature Titles):** 1.125rem – 1.25rem (18px – 20px), font-bold
- **Body Regular:** 0.875rem (14px), font-normal, line-height 1.6
- **Metadata / Chips:** 0.6875rem – 0.75rem (11px – 12px), font-semibold, tracking-wider

---

## 4. UI Components & Micro-Interactions

### Buttons
1. **Primary Button (`.btn-primary`):** Electric Orange (`#F47721`), white text, 8px rounded corners, subtle shadow on hover, accessible focus rings.
2. **Secondary Button (`.btn-secondary`):** Pure white background with border `#DFE1E5`, charcoal text, smooth background transition.
3. **Outline Button (`.btn-outline`):** Bordered charcoal, transitions to inverted solid charcoal fill on hover.

### Cards (`.card-premium`)
- Clean white background (`#FFFFFF`) with 1px border (`#E9EAEC`) and 12px corner radius.
- Interactive top reveal bar in Orange (`#F47721`) that scales in horizontally on hover.
- Soft elevation shadow (`0 4px 20px -2px rgba(41, 45, 51, 0.08)`).

### Motion & Animation Principles
- Smooth scroll behavior (`scroll-behavior: smooth`).
- Subtle section reveals (`animate-slide-up`, `animate-fade-in`).
- Complete accessibility support via `@media (prefers-reduced-motion: reduce)`.
