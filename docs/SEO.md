# Search Engine Optimisation (SEO) & Schema Architecture

## 1. Overview

Car's Energy Co. website is engineered for organic search visibility across Delhi-NCR and alternative fuel search queries. The implementation follows modern technical SEO best practices, structured semantic HTML, and JSON-LD schema markup.

---

## 2. Meta Tags & Canonicalization

Every page utilizes `<SEO />` powered by `react-helmet-async` with:
- **Unique Page Title:** Follows the pattern `<Page Title> | Car's Energy Co.`.
- **Unique Meta Description:** Informative description under 160 characters describing the specific page or service.
- **Canonical URLs:** Self-referential canonical tags (e.g. `<link rel="canonical" href="https://carsenergy.co.in/services/cng-kit-installation" />`) to prevent duplicate content penalties.
- **Open Graph Protocol:** Full `og:title`, `og:description`, `og:url`, `og:type`, and `og:site_name` tags for social preview rendering.

---

## 3. Structured Data (JSON-LD Schemas)

### AutomotiveBusiness Schema (Global)
Applied across pages to define physical workshop identity, coordinates, telephone numbers, and operating hours:
```json
{
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "Car's Energy Co.",
  "image": "https://carsenergy.co.in/images/workshop-main.jpg",
  "url": "https://carsenergy.co.in",
  "telephone": "+919212218180",
  "priceRange": "₹₹",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "215 & 216/5, Ground Floor, Opp. Metro Pillar 536, Mundka, Udyog Nagar",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110041",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 21, C.S.C. A-4, Gole D.D.A. Market, Rohtak Road, Paschim Vihar",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110063",
      "addressCountry": "IN"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:30",
      "closes": "19:00"
    }
  ]
}
```

### Service Schema (Service Pages)
Applied on all 10 specialized service detail pages, referencing the specific service type and provider.

---

## 4. Crawlability Assets

- **XML Sitemap:** Accessible at `/sitemap.xml`, mapping all 24 URLs with priority weights and change frequencies.
- **Robots.txt:** Accessible at `/robots.txt`, granting search crawlers open access and declaring the sitemap index.
