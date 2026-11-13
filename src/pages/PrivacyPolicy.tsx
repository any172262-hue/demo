import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const { language, pages, common } = useLanguage();

  return (
    <>
      <SEO
        title={pages.legal.privacyTitle}
        description="Privacy policy and data governance practices of Car's Energy Co."
        canonicalPath="/privacy-policy"
      />

      <section className="relative bg-[#181B1F] text-purewhite pt-8 pb-14 border-b border-white/10 overflow-hidden">
        <div className="section-container relative z-10 space-y-4">
          <Breadcrumbs items={[{ label: pages.legal.privacyTitle }]} variant="dark" />
          <div className="max-w-3xl space-y-3 pt-2">
            <span className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>DATA GOVERNANCE & COMPLIANCE —</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-purewhite">
              {pages.legal.privacyTitle}
            </h1>
            <p className="text-sm text-white/80 leading-relaxed">
              Car's Energy Co. is committed to protecting your personal information and ensuring technical transparency across all automotive services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purewhite">
        <div className="section-container max-w-4xl space-y-8 text-xs sm:text-sm text-secondary leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-charcoal">
              1. Information We Collect
            </h2>
            <p>
              When you submit an appointment enquiry or contact form through our website, we collect your name, mobile phone number, email address (optional), vehicle make, model, year, and service requirements. We do not collect unnecessary private information, financial card credentials, or biometric data through this website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-charcoal">
              2. How Your Information is Used
            </h2>
            <p>
              Your contact and vehicle information is utilized solely to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>Process and schedule your workshop appointment and technical vehicle inspection.</li>
              <li>Communicate via phone call or WhatsApp regarding bay availability and spare parts suitability.</li>
              <li>Issue statutory compliance certificates and RTO endorsement documentation required under CMVR regulations.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-charcoal">
              3. No Customer Account or Password Storage
            </h2>
            <p>
              In strict accordance with our engineering privacy principles, this website does not operate customer registration accounts, user profiles, or public customer logins. You do not need to create passwords or store credentials with us online.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-charcoal">
              4. Data Protection & Security
            </h2>
            <p>
              All enquiry transmissions are protected using HTTPS transport layer encryption. Server endpoints apply rate limiting, parameter sanitization, and strict access controls. Customer details are never sold, traded, or distributed to third-party telemarketers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-charcoal">
              5. Contacting Our Data Officer
            </h2>
            <p>
              For any questions regarding your personal details or to request removal of your contact record from our workshop communications list, contact us directly at <span className="font-semibold text-charcoal">carsenergyco@gmail.com</span> or call our Mundka facility at <span className="font-semibold text-charcoal">+91 92122 18180</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
