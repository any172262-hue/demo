# CAR'S ENERGY CO. - WHATSAPP APPOINTMENT INTEGRATION SPECIFICATION

**Document Status:** PRE-LAUNCH SPECIFICATION  
**Target Number:** +91 79828 24255 (Official Workshop WhatsApp)  
**Regulatory Facility:** RFC Code No. 261 / Mundka & Paschim Vihar  
**Last Updated:** November 2026  

---

## 1. Architectural Philosophy & Safety Directives

The appointment system connects customer scheduling requests directly to the technical team at Car's Energy Co. via WhatsApp while persisting an audit record to the backend API (`/api/appointments`).

### Non-Negotiable Directives:
1. **Verified WhatsApp Number Only:** All links must use `+91 79828 24255` (encoded as `917982824255` in international numeric format).
2. **No Silent Sending:** Web browsers cannot and must not send WhatsApp messages silently. The customer must review and manually press Send.
3. **Accurate Status Language:** The interface must state:
   *"Your enquiry message is ready in WhatsApp. Please review it and press Send."*
   It is strictly prohibited to state *"Appointment Confirmed"* until a technical advisor conducts a vehicle review and confirms bay slot allocation.
4. **Backend Audit Trail:** Every enquiry records a reference ID (e.g. `CE-2026-XXXX`) to `server/data/enquiries.json` before triggering the handoff.
5. **No Personal Data in Tracking URLs:** Campaign parameters are placed only in message body text, never leaked into URL parameters.

---

## 2. Integration Workflow

```
[Customer Fills Form]
        │
        ▼
[Field-Level Validation] ──(Invalid)──> [Shows Inline Error beside fields]
        │
     (Valid)
        ▼
[Review Confirmation Modal]
        │
        ├── Edit Details ──> (Returns to Form with inputs intact)
        │
        └── Confirm & Continue
                 │
                 ▼
     [1. POST /api/appointments]
                 │
                 ▼
     [2. Generate Structured Message]
                 │
                 ▼
     [3. Launch https://wa.me/917982824255?text=...]
                 │
                 ▼
     [4. Display Handoff Confirmation & Fallback Hotline]
```

---

## 3. Pre-Submission Review Modal (`src/components/AppointmentModal.tsx`)

Before any message is generated, the modal displays:
- **Customer Information:** Full name, 10-digit mobile number, optional email.
- **Vehicle Specifications:** Make, model, manufacturing year.
- **Service & Schedule:** Requested service, chosen facility (Mundka or Paschim Vihar), date, and time slot.
- **Customer Notes:** Specific issues, check-engine lights, or mileage questions.
- **Campaign Attribution:** Campaign source and name (if arrived via a tracked campaign).

---

## 4. Message Format & URL Encoding

### Structured Message Format:
```
*CAR'S ENERGY CO. - SERVICE ENQUIRY*
RFC Code No. 261 (Govt. Approved Retrofitting Center)
Ref ID: CE-2026-4819

*CUSTOMER INFORMATION:*
• Full Name: Rajesh Sharma
• Mobile Number: 9810198101
• Email: rajesh@example.com

*VEHICLE DETAILS:*
• Manufacturer: Maruti Suzuki
• Vehicle Model: Swift Dzire
• Manufacturing Year: 2021

*APPOINTMENT DETAILS:*
• Requested Service: CNG Kit Installation
• Preferred Workshop: Mundka Facility (Opp. Metro Pillar 536)
• Preferred Date: 2026-11-20
• Preferred Time: Morning (10:30 AM - 01:00 PM)
• Notes/Symptoms: Asking about Italian sequential kit options

*ATTRIBUTION:* [Source: google_ads | Campaign: winter_mileage]

_Enquiry logged via carsenergy.co.in. Awaiting workshop confirmation._
```

### URL Generation:
```typescript
const encodedText = encodeURIComponent(messageText);
const whatsappUrl = `https://wa.me/917982824255?text=${encodedText}`;
```

---

## 5. Handoff States & Fallback Handling

| State | User Experience | Action Available |
|---|---|---|
| **Preparing** | Modal displays a spinner while recording to `/api/appointments`. | Non-interactive to prevent double submissions. |
| **Opened** | Window opens WhatsApp. Webpage shows green confirmation card with Reference ID. | "Open WhatsApp Again" button and "Submit Another Enquiry". |
| **Fallback (Popup Blocked / Offline)** | If WhatsApp fails to launch, the page presents the exact formatted text and direct phone hotline. | Call +91 92122 18180 or tap direct WhatsApp link. |
| **Server Error** | If the backend database fails, user is informed with clear message. | Direct phone support offered immediately. |

---

## 6. Testing Instructions

1. Fill out the appointment form with test data: `Vikram Batra`, `9810198101`, `Hyundai Aura`, `CNG Kit Servicing`.
2. Click "Review & Continue to WhatsApp Booking".
3. Verify that the confirmation modal appears displaying all entered details accurately.
4. Click "Confirm & Continue to WhatsApp".
5. Verify that:
   - A reference number starting with `CE-` is generated.
   - WhatsApp URL targets `917982824255`.
   - The message contains all customer, vehicle, and scheduling data.
   - The page displays: *"Your enquiry message is ready in WhatsApp. Please review it and press Send."*
