# UI/UX Design Brief
## Car's Energy Co. - Bright Premium Automotive Technology

- **Design status:** Approved direction; detailed visual QA required
- **Theme:** Light
- **Motion:** Balanced
- **Language:** English + Assamese
- **Reference use:** Business understanding only; no visual copying

---

## 1. Design objective

Create an original, premium and approachable corporate experience for an automotive engineering/CNG services company. The interface should feel technically capable and dependable without becoming dark, aggressive, overly futuristic or difficult to use.

The visitor should quickly understand the company, find a relevant service and contact the business.

## 2. Creative direction

**Concept:** Bright Premium Automotive Technology.

Visual qualities:
- Clean and confident.
- Editorial rather than template-like.
- Automotive photography with natural light.
- Technical detail used sparingly.
- Clear information hierarchy.
- Calm motion and responsive feedback.
- Human, plain-language content.

Do not reproduce the reference website's layout, visual identity, colours, hero composition, navigation or section order.

## 3. Design tokens

| Token | Value | Usage |
|---|---|---|
| Canvas | `#F5F5F2` | Main page background |
| Surface | `#FFFFFF` | Cards, forms and panels |
| Text | `#292D33` | Main text and headings |
| Accent | `#F47721` | Primary actions and selected highlights |
| Border | `#E9EAEC` | Dividers and card edges |
| Muted | `#73777D` | Supporting text |
| Deep surface | `#1E2126` | Limited footer or contrast sections only |

The dark colour is a supporting colour, not the dominant page theme. Do not make the header or every page banner dark by default.

## 4. Typography

- Use a highly readable Latin typeface for English.
- Provide a tested Assamese-capable font, such as Noto Sans Assamese, with a suitable fallback.
- Use consistent heading scale and line-height.
- Avoid all-caps for long headings or body text.
- Assamese text must have enough line-height and must not clip vowel marks or conjuncts.
- Verify real font loading and glyph rendering on common Android and Windows devices.

## 5. Layout and responsive behaviour

### Desktop
- Clear content width and generous but purposeful whitespace.
- Navigation with visible active state.
- Multi-column service and content grids where useful.
- Avoid overly wide text paragraphs.

### Tablet
- Reduce grid columns without shrinking text excessively.
- Keep touch targets comfortable.
- Ensure dropdowns are usable by touch.

### Mobile
- Compact header with accessible menu.
- Stack content into a clear single-column flow.
- Place primary actions within easy reach.
- Use full-width form fields.
- Avoid tiny text and dense multi-column layouts.
- No horizontal scrolling at 320px viewport width.

## 6. Core page patterns

### Header
- Light background.
- Company logo/wordmark.
- Main navigation.
- Language switcher.
- Clear call or appointment action.
- Sticky state may add a subtle border/shadow.
- Mobile drawer must trap/restore focus appropriately and close on Escape.

### Home
- Compact, useful company introduction rather than an oversized slogan.
- A high-quality automotive image or editorial split layout.
- Clear service discovery.
- Company overview and verified trust points.
- Process explanation.
- Products/brands, gallery, FAQs and contact.
- Do not let a carousel dominate the first screen.

### Service pages
- Clear service title and summary.
- What the service includes.
- Who may need it.
- Process and considerations.
- Relevant image or illustration.
- Call/WhatsApp/appointment actions.
- Avoid unsupported technical promises.

### Forms
- Visible labels (not placeholder-only labels).
- Required/optional states.
- Inline errors associated with fields.
- Clear loading, success and failure states.
- Preserve input on recoverable error.
- Explain that an enquiry is not an appointment confirmation.

### Gallery
- Consistent image ratios.
- Lazy loading.
- Keyboard-accessible lightbox.
- Meaningful alt text.
- No layout shift while images load.

### Footer
- Contact and workshop information.
- Navigation and legal links.
- Language access.
- Social links only where official URLs are verified.

## 7. Motion specification - balanced

Use motion to clarify state and add polish, not to entertain at the expense of usability.

| Interaction | Motion |
|---|---|
| Page entry | Short opacity/translate transition |
| Scroll reveal | Subtle fade/translate; avoid hiding key content before JS |
| Cards | Small elevation/border/arrow feedback |
| Buttons | Fast colour and position feedback |
| Menus | Short opacity/height transition |
| FAQ | Smooth expand/collapse |
| Gallery | Soft fade/scale for lightbox |
| Parallax | Optional and very subtle; disable on reduced motion/mobile if costly |

Guidelines:
- Typical micro-interactions should feel quick (roughly 150–250ms).
- Avoid long blocking transitions.
- Avoid constant auto-moving carousels; if auto-rotation remains, provide pause/controls and stop when the user interacts.
- Honour `prefers-reduced-motion`.
- Avoid scroll listeners that cause excessive re-rendering.

## 8. Accessibility

Target WCAG 2.2 AA:
- Semantic landmarks and heading order.
- Keyboard-operable controls.
- Visible focus indicators.
- Sufficient contrast.
- Accessible names for icon-only buttons.
- Labels and announced form errors.
- No focus loss when opening/closing menus or dialogs.
- Reduced-motion support.
- Captions/transcripts where video content requires them.

## 9. Content voice

Write like a knowledgeable local business speaking clearly to a customer.

Prefer:
- Short sentences.
- Concrete service explanations.
- Clear next steps.
- Honest limits and qualifications.
- Natural Assamese, not word-for-word robotic translation.

Avoid:
- “Revolutionary”, “world-class” and similar unsupported claims.
- Repeated generic phrases.
- Fake urgency.
- Unverified savings, customer counts, approvals or guarantees.
- Dense engineering jargon without explanation.

## 10. Photography and media

- Use genuine company/workshop imagery where available and authorised.
- Use licensed stock imagery only when real images are unavailable.
- Do not present stock images as actual company facilities.
- Optimise images and provide responsive variants.
- Avoid decorative images that compete with content.
- Use video embeds with privacy/performance considerations and user-controlled playback.

## 11. Design QA checklist

- [ ] Header and page headers consistently follow the light theme.
- [ ] No copied reference layout or identity.
- [ ] All key actions are visible and understandable.
- [ ] English and Assamese layouts both work.
- [ ] Assamese glyphs are not clipped.
- [ ] Mobile menu is keyboard and touch accessible.
- [ ] Forms have labels, validation and status feedback.
- [ ] Reduced-motion mode works.
- [ ] Contrast and focus states are checked.
- [ ] Images have alt text and stable dimensions.
- [ ] No horizontal overflow.
