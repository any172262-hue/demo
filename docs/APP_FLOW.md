# Application Flow
## Car's Energy Co. Public Website

- **Version:** 1.0
- **Scope:** Public visitor journeys; no customer authentication

---

## 1. High-level site flow

```mermaid
flowchart TD
    A[Visitor opens website] --> B[Home page]
    B --> C{What does visitor need?}
    C --> D[Learn about company]
    C --> E[Explore services]
    C --> F[Find products / brands]
    C --> G[View gallery / videos]
    C --> H[Read FAQs]
    C --> I[Contact / appointment]
    D --> J[About page]
    E --> K[Services overview]
    K --> L[Service detail]
    L --> I
    F --> M[Products page]
    G --> N[Gallery or video page]
    H --> O[FAQ answer]
    O --> L
    I --> P[Call / WhatsApp / map / form]
    P --> Q[Enquiry submitted]
    Q --> R[Enquiry received message + reference]
    R --> S[Company team reviews and contacts visitor]
    S --> T[Appointment confirmed separately]
```

## 2. Navigation flow

```mermaid
flowchart TD
    H[Home] --> AB[About]
    H --> SV[Services]
    SV --> SD[Service detail]
    H --> PR[Products]
    H --> GA[Gallery]
    H --> VI[Videos]
    H --> TE[Testimonials]
    H --> FAQ[FAQs]
    H --> CO[Contact]
    H --> AP[Book appointment]
    H --> LG[Language switch]
    LG --> EN[English]
    LG --> AS[অসমীয়া]
    EN --> H
    AS --> H
```

Language switching should keep the visitor on the equivalent current route wherever translated content exists.

## 3. Appointment enquiry flow

```mermaid
flowchart TD
    A[Visitor selects Book Appointment] --> B[Appointment form]
    B --> C[Enter contact and vehicle details]
    C --> D[Select service, workshop and preferred date/time]
    D --> E[Client-side validation]
    E -->|Invalid| F[Show field-level errors]
    F --> C
    E -->|Valid| G[Submit HTTPS POST /api/appointments]
    G --> H[Server validates request]
    H --> I{Spam / rate limit / validation check}
    I -->|Rejected| J[Return safe error response]
    J --> K[Show helpful retry or contact option]
    I -->|Passed| L[Persist enquiry]
    L --> M{Persistence successful?}
    M -->|No| N[Return server error; do not show success]
    N --> K
    M -->|Yes| O[Return reference + ENQUIRY_RECEIVED]
    O --> P[Show confirmation that enquiry was received]
    P --> Q[Staff reviews and contacts visitor]
    Q --> R[Staff confirms or proposes appointment slot]
```

**Important:** The website must not display “Appointment confirmed” merely because the API accepted an enquiry.

## 4. General contact flow

```mermaid
flowchart TD
    A[Contact page] --> B{Choose contact method}
    B --> C[Tap phone]
    B --> D[Open WhatsApp]
    B --> E[Open map]
    B --> F[Fill contact form]
    F --> G[Validate fields]
    G -->|Invalid| H[Show field errors]
    H --> F
    G -->|Valid| I[POST /api/contact]
    I --> J{Accepted and stored?}
    J -->|No| K[Show error and direct contact details]
    J -->|Yes| L[Show enquiry received reference]
```

## 5. Service discovery flow

```mermaid
flowchart TD
    A[Home or navigation] --> B[Services overview]
    B --> C[Browse or search service]
    C --> D[Open service detail]
    D --> E[Read purpose and process]
    E --> F[Review practical considerations]
    F --> G{Next action}
    G --> H[Call workshop]
    G --> I[WhatsApp]
    G --> J[Book appointment enquiry]
```

## 6. Gallery and video flow

- Visitor opens Gallery or Videos.
- Visitor selects a category or item.
- Image opens in accessible lightbox, or video opens with user-controlled playback.
- Visitor can close with visible close control, Escape key and (for lightbox) arrow-key navigation where supported.
- No video should autoplay with sound.

## 7. Error and fallback flow

| Situation | Expected behaviour |
|---|---|
| Unknown route | Show custom 404 with Home and Services links |
| API unavailable | Explain that the enquiry could not be submitted; show phone/WhatsApp |
| Invalid form | Keep entered values and show field-level errors |
| Rate limit reached | Explain that the visitor should wait or call the workshop |
| Missing translation | Use a development warning; do not silently ship mixed-language UI |
| Image fails | Show a useful fallback and preserve layout dimensions |
| No video embed | Show a clear unavailable state rather than a broken player |

## 8. Authentication and roles

There is no customer login and no public customer account role.

Operational access to enquiry records is outside the public website scope. If a staff dashboard is added in a future release, it must be a separate, access-controlled project with staff authentication, authorisation, audit logging and a privacy review.

## 9. Advanced Feature Flows

### 9.1 Theme Toggle Flow
- Visitor clicks Sun/Moon icon in desktop navbar or mobile drawer.
- Theme state toggles immediately between Light and Dark mode.
- Preference saves to `localStorage` and persists across navigation and page reloads.

### 9.2 Site-Wide Search Flow
- Visitor clicks Search icon or presses `Ctrl+K` / `Cmd+K`.
- Search modal opens with focus trapped in input.
- Visitor types keyword (e.g. "ECU Tuning" or "হাইড্ৰ টেষ্টিং").
- Live results appear categorized by type with matched terms highlighted.
- Visitor navigates with Arrow keys and presses Enter or clicks result to jump directly to page.
- Pressing Escape closes modal.

### 9.3 Appointment Modal Review & WhatsApp Handoff Flow
- Visitor completes appointment form and clicks "Review & Continue".
- Confirmation modal opens displaying all entered customer, vehicle, and scheduling data.
- Clicking "Edit Details" dismisses modal with all input data intact.
- Clicking "Confirm & Continue":
  1. Submits appointment enquiry and UTM attribution to `/api/appointments`.
  2. Receives official Reference ID.
  3. Pre-fills structured message targeting verified WhatsApp number +91 79828 24255.
  4. Opens WhatsApp and updates webpage with handoff confirmation and fallback direct call hotline.

### 9.4 Floating Contact Widget Flow
- Fixed button anchored at bottom-right corner.
- Clicking reveals 3 direct actions: WhatsApp (+91 79828 24255), Call (+91 92122 18180), and Book Inspection.
- Collapses on selection, outside click, or Escape key.

### 9.5 Detailed Flow Documentation
- Advanced Feature Flow: `docs/ADVANCED_FEATURES.md`
- WhatsApp Handoff Lifecycle: `docs/WHATSAPP_INTEGRATION.md`
- Campaign Attribution Lifecycle: `docs/UTM_TRACKING.md`

