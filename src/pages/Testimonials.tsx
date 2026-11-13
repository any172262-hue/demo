import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Award,
  FileCheck,
  ArrowRight,
  Phone,
  HelpCircle,
} from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { language, pages, common } = useLanguage();

  return (
    <>
      <SEO
        title="Customer Feedback & Quality Assurance | Car's Energy Co."
        description="Review our genuine customer feedback policy and technical quality assurance standards. Transport Dept. Approved RFC Code No. 261."
        canonicalPath="/testimonials"
      />

      {/* Hero / Header Section (Approved Light Theme) */}
      <section className="relative bg-[#F5F5F2] text-charcoal pt-8 pb-14 sm:pb-16 border-b border-lightgrey overflow-hidden">
        <div className="section-container relative z-10 space-y-6">
          <Breadcrumbs items={[{ label: language === 'as' ? 'গ্ৰাহকৰ মতামত' : 'Customer Feedback' }]} />

          <div className="max-w-3xl space-y-4 pt-1">
            <div className="inline-flex items-center gap-2 text-orange text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange" />
              <span>QUALITY ASSURANCE • RFC CODE NO. 261</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight tracking-tight">
              {language === 'as' ? 'গ্ৰাহকৰ মতামত আৰু কাৰিকৰী মানদণ্ড' : 'Customer Feedback & Technical Standards'}
            </h1>

            <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
              {language === 'as'
                ? 'কাৰ্ছ এনাৰ্জীয়ে কোনো কৃত্ৰিম পৰ্যালোচনা প্ৰকাশ নকৰে। আমাৰ প্ৰতিটো সেৱা চৰকাৰী PESO আৰু CMVR মানদণ্ড অনুসৰি পৰীক্ষা কৰা হয়।'
                : 'At Car’s Energy Co., we publish only genuine, verified feedback. Learn how we maintain engineering integrity and how vehicle owners can submit authentic reviews.'}
            </p>
          </div>

          {/* 4 Verified Credential Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal">26+ Years</span>
              <span className="text-[11px] text-secondary">Established 1998</span>
            </div>
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-orange">RFC #261</span>
              <span className="text-[11px] text-secondary">Transport Dept. Approved</span>
            </div>
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal">2 Centers</span>
              <span className="text-[11px] text-secondary">Mundka & Paschim Vihar</span>
            </div>
            <div className="bg-purewhite border border-lightgrey rounded-xl p-3.5 shadow-subtle">
              <span className="block font-heading font-extrabold text-lg sm:text-xl text-charcoal">PESO Bay</span>
              <span className="text-[11px] text-secondary">330-Bar Hydro Testing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feedback Policy Section */}
      <section className="py-16 bg-offwhite border-b border-lightgrey">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Columns: Our Authenticity Commitment */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-purewhite rounded-2xl border border-lightgrey p-7 sm:p-9 shadow-subtle space-y-5">
                <span className="badge-orange text-xs">Our Authenticity Commitment</span>
                <h2 className="text-2xl font-heading font-extrabold text-charcoal">
                  Zero Fake Reviews. 100% Technical Evidence.
                </h2>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  In compliance with our strict corporate quality guidelines, Car’s Energy Co. does not invent testimonials, customer review counts, or star ratings. Instead, every vehicle conversion or service performed at our Mundka and Paschim Vihar workshops is documented through physical inspection records and statutory certificates.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-lg bg-offwhite border border-lightgrey/80">
                    <FileCheck className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-xs text-charcoal">Diagnostic Verification</h4>
                      <p className="text-[11px] text-secondary leading-relaxed">
                        Every sequential kit installation receives a computerized OBD-II sensor health check and digital fuel mapping test before handover.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-lg bg-offwhite border border-lightgrey/80">
                    <ShieldCheck className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-xs text-charcoal">Statutory PESO Compliance</h4>
                      <p className="text-[11px] text-secondary leading-relaxed">
                        Hydro-testing is conducted using high-precision water jacket displacement rigs and stamped with authorized inspector credentials.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-lg bg-offwhite border border-lightgrey/80">
                    <Award className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-xs text-charcoal">Direct Manufacturer Backing</h4>
                      <p className="text-[11px] text-secondary leading-relaxed">
                        Authorized distributor support for Lovato, Motozen, Gastech Italy, Mijo, and STAG genuine spare parts and warranty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Leave Genuine Google Feedback */}
              <div className="bg-purewhite rounded-2xl border border-lightgrey p-7 sm:p-9 shadow-subtle space-y-4">
                <span className="badge-tech text-xs">Public Feedback</span>
                <h3 className="text-lg font-heading font-bold text-charcoal">
                  How Customers Share Real Feedback
                </h3>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  We encourage all vehicle owners who have availed CNG kit installation, cylinder testing, or ECU tuning to share their honest feedback on our official Google Business Profile or submit direct feedback to our technical desk.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/917982824255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-purewhite font-heading font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Service Review</span>
                  </a>
                  <a
                    href="tel:+919212218180"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-bordergrey hover:border-orange text-charcoal hover:text-orange font-heading font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <Phone className="w-4 h-4 text-orange" />
                    <span>Call Desk (+91 92122 18180)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Submit Service Feedback Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-purewhite rounded-2xl border border-lightgrey p-7 shadow-premium space-y-5">
                <span className="badge-orange text-xs">Direct Technical Desk</span>
                <h3 className="text-lg font-heading font-bold text-charcoal">
                  Have Questions or Feedback?
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  Whether you wish to enquire about your car model’s CNG compatibility or provide feedback regarding a recent workshop visit, our direct enquiry desk is ready to assist.
                </p>

                <div className="space-y-3 pt-2">
                  <Link
                    to="/get-in-touch"
                    className="w-full py-3 px-5 rounded-lg bg-orange hover:bg-orange-hover text-purewhite font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Submit Enquiry or Feedback</span>
                  </Link>

                  <Link
                    to="/book-appointment"
                    className="w-full py-3 px-5 rounded-lg bg-purewhite hover:bg-lightgrey text-charcoal border border-bordergrey font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                  >
                    <Calendar className="w-4 h-4 text-orange" />
                    <span>Book Workshop Inspection</span>
                  </Link>
                </div>

                <div className="pt-4 border-t border-lightgrey/80 text-[11px] text-secondary space-y-1">
                  <p><strong>Primary Facility:</strong> Opp. Metro Pillar 536, Mundka, Delhi</p>
                  <p><strong>Express Center:</strong> Shop 21, DDA Market, Paschim Vihar, Delhi</p>
                  <p><strong>Hours:</strong> 10:30 AM - 07:00 PM (Wednesday Closed)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
