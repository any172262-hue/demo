# MAA KAMAKHYA AUTO GAS - WHATSAPP APPOINTMENT INTEGRATION SPECIFICATION

**Document Status:** ACTIVE PRODUCTION SPECIFICATION  
**Target Number:** +91 9678****** (Official Workshop WhatsApp)  
**Alternative Phone:** +91 9678******  
**Facility:** Shop No. 7, Opposite Nezone Steel, Near Kumar Resorts, NH-37, Garchuk, Guwahati, Assam - 781035  
**Last Updated:** November 2026  

---

## 1. Architectural Philosophy & Safety Directives

The appointment system connects customer scheduling requests directly to the technical team at Maa Kamakhya Auto Gas via WhatsApp while persisting an audit record to the backend API (`/api/appointments`).

### Non-Negotiable Directives:
1. **Verified WhatsApp Number Only:** All links must use `+91 9678******` (encoded as `919678******` in international numeric format).
2. **5-Field Streamlined Payload:** Form strictly uses 5 fields:
   - `fullName` (Customer Name)
   - `mobileNumber` (Mobile Number)
   - `carName` (Car Name / Make)
   - `carModel` (Car Model)
   - `carNumber` (Car Registration Number)
3. **No Silent Sending:** Web browsers cannot and must not send WhatsApp messages silently. The customer must review and manually press Send in WhatsApp.
4. **Accurate Status Language:** The interface explicitly states:
   *"Your enquiry message is ready in WhatsApp. Please review it and press Send."*
   It is strictly prohibited to state *"Appointment Confirmed"* until a technical advisor conducts a vehicle review and confirms slot allocation.
5. **Backend Audit Trail:** Every enquiry records a reference ID (e.g. `MK-2026-XXXX`) to `server/data/enquiries.json` before triggering the handoff.
6. **No Personal Data in Tracking URLs:** Campaign parameters are placed only in message body text, never leaked into URL parameters.

---

## 2. Integration Workflow

```
[Customer Fills 5 Fields]
        │
        ▼
[Field-Level Validation] ──(Invalid)──> [Shows Inline Error beside fields]
        │
     (Valid)
        ▼
[Review Confirmation Modal (5 Fields)]
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
     [3. Launch https://wa.me/919678******?text=...]
                 │
                 ▼
     [4. Customer Clicks "Send" inside WhatsApp]
```

---

## 3. Structured Message Format

```
*MAA KAMAKHYA AUTO GAS - SERVICE ENQUIRY*
Ref ID: MK-2026-XXXX

*Customer Details:*
• Name: [fullName]
• Phone: +91 [mobileNumber]

*Vehicle Details:*
• Car Name: [carName]
• Car Model: [carModel]
• Car Number: [carNumber]

*Workshop Location:*
Shop No. 7, Opposite Nezone Steel, Near Kumar Resorts, NH-37, Garchuk, Guwahati - 781035
```

---

## 4. Fallback Architecture

If the backend server is temporarily unreachable:
1. The form catches the network error without freezing.
2. An informative fallback banner appears explaining that local registration failed.
3. The customer can directly click **"Send via WhatsApp Direct (+91 9678******)"** or **"Copy Prepared Message"** or **"Call Workshop (+91 9678******)"**.
4. No enquiry is lost.
