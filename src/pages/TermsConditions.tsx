import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const TermsConditions: React.FC = () => {
  const { language, pages, common } = useLanguage();

  return (
    <>
      <SEO
        title={pages.legal.termsTitle}
        description="Terms and conditions governing automotive retrofitting and engineering services at Car's Energy Co."
        canonicalPath="/terms-and-conditions"
      />

      <section className="relative bg-[#181B1F] text-purewhite pt-8 pb-14 border-b border-white/10 overflow-hidden">
        <div className="section-container relative z-10 space-y-4">
          <Breadcrumbs items={[{ label: pages.legal.termsTitle }]} variant="dark" />
          <div className="max-w-3xl space-y-3 pt-2">
            <span className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <span>LEGAL DIRECTIVES & CMVR COMPLIANCE —</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-purewhite">
              {pages.legal.termsTitle}
            </h1>
            <p className="text-sm text-white/80 leading-relaxed">
              General commercial terms and engineering standards governing retrofitment, testing, and servicing contracts with Car's Energy Co.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purewhite">
        <div className="section-container max-w-4xl space-y-8 text-xs sm:text-sm text-secondary leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-charcoal">
              1. Scope of Automotive Services
            </h2>
            <p>
              Car's Energy Co. (RFC Code No. 261) operates certified retrofitting, maintenance, diagnostic calibration, and cylinder testing facilities under the statutory framework of the Central Motor Vehicles Rules (CMVR) and Petroleum and Explosives Safety Organization (PESO). All recommendations are subject to physical vehicle inspection.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-charcoal">
              2. Appointment Enquiries vs. Confirmed Bookings
            </h2>
            <p>
              Submission of an appointment enquiry on this website logs an official request for technical scheduling. An appointment is only deemed confirmed once a technical service advisor speaks with the customer via phone or WhatsApp, reviews mechanical suitability, and confirms bay slot allocation.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-charcoal">
              3. Vehicle Mechanical Condition & Pre-Inspection
            </h2>
            <p>
              Vehicles presented for CNG conversion or tuning must be mechanically roadworthy. Existing ignition defects, head gasket leakages, low compression, or non-functional catalytic converters must be repaired prior to calibration. Our technicians reserve the right to advise against conversion if an engine fails baseline compression benchmarks.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-charcoal">
              4. Cylinder Hydrostatic Testing & Safety Condemnation
            </h2>
            <p>
              Under PESO Gas Cylinder regulations, any cylinder that exhibits permanent volumetric expansion beyond acceptable thresholds, severe structural pitting, or fire damage during hydrostatic testing will be officially condemned for safety. Condemned cylinders cannot be re-certified or re-installed.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-heading font-bold text-charcoal">
              5. Statutory RTO Endorsement Responsibilities
            </h2>
            <p>
              While Car's Energy Co. prepares genuine compliance certificates (Form 21, Form 22, and PESO certificates), final statutory endorsement on the vehicle Registration Certificate is subject to formal inspection and approval by the respective Regional Transport Office (RTO) in accordance with state guidelines.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
