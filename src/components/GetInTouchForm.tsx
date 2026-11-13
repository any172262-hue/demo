import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Phone,
  MessageSquare,
  Car,
} from 'lucide-react';

export const GetInTouchForm: React.FC = () => {
  const { language, contact } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    carModel: '',
    mobile: '',
    address: '',
    message: '',
    honeypot: '',
  });

  const [formStartTime] = useState(Date.now());
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    referenceNumber?: string;
    message?: string;
    error?: string;
  } | null>(null);

  const t = contact.getInTouch || {
    title: 'Get In Touch',
    subtitle: 'Contact us to avail our trusted services. Our services will certainly meet your expectations.',
    namePlaceholder: 'Name*',
    carModelPlaceholder: 'Which Car Model*',
    mobilePlaceholder: 'Enter Mobile*',
    addressPlaceholder: 'Address',
    messagePlaceholder: 'Message',
    submitButton: 'Submit',
    submitting: 'Submitting...',
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);

    // Validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setResult({
        success: false,
        error: language === 'as' ? 'অনুগ্ৰহ কৰি আপোনাৰ নাম লিখক।' : 'Please enter your name.',
      });
      return;
    }

    if (!formData.carModel.trim() || formData.carModel.trim().length < 2) {
      setResult({
        success: false,
        error:
          language === 'as'
            ? 'অনুগ্ৰহ কৰি আপোনাৰ গাড়ীৰ মডেল উল্লেখ কৰক (যেনেঃ ৱেগনাৰ, চুইফট ডিজায়াৰ)।'
            : 'Please enter which car model you have (e.g. Maruti Dzire, WagonR, i10, City).',
      });
      return;
    }

    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      setResult({
        success: false,
        error:
          language === 'as'
            ? 'অনুগ্ৰহ কৰি ১০টা অংকৰ বৈধ ম’বাইল নম্বৰ দিয়ক।'
            : 'Please enter a valid 10-digit mobile number.',
      });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          carModel: formData.carModel.trim(),
          mobile: cleanMobile,
          address: formData.address.trim(),
          message: formData.message.trim(),
          honeypot: formData.honeypot,
          submittedAt: formStartTime,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult({
          success: true,
          referenceNumber: data.referenceNumber,
          message: data.message,
        });
        setFormData({
          name: '',
          carModel: '',
          mobile: '',
          address: '',
          message: '',
          honeypot: '',
        });
      } else {
        setResult({
          success: false,
          error: data.error || (language === 'as' ? 'অনুৰোধ প্ৰেৰণত বিফল।' : 'Failed to submit enquiry.'),
        });
      }
    } catch {
      setResult({
        success: false,
        error:
          language === 'as'
            ? 'নেটৱৰ্ক সংযোগত সমস্যা হৈছে। অনুগ্ৰহ কৰি পোনপটীয়াকৈ ফোন কৰক।'
            : 'Connection error. Please call our workshop directly at +91 92122 18180.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-purewhite p-6 sm:p-8 md:p-10 rounded-2xl border border-[#DFE3E8] shadow-premium max-w-2xl mx-auto">
      {/* Intro Header */}
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-charcoal tracking-tight">
          {t.title}
        </h2>
        <div className="w-12 h-1 bg-orange rounded-full mx-auto mt-2" />
      </div>

      {/* Success Notification */}
      {result && result.success && (
        <div className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 animate-fade-in">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <h4 className="font-heading font-bold text-sm">
              {language === 'as' ? 'অনুৰোধ সফলভাৱে গৃহীত হৈছে!' : 'Enquiry Received Successfully!'}
            </h4>
          </div>
          <p className="text-xs text-emerald-800 leading-relaxed">
            {result.message}
          </p>
          {result.referenceNumber && (
            <div className="text-xs font-mono font-bold bg-white/80 py-1.5 px-3 rounded-lg border border-emerald-300 inline-block">
              {language === 'as' ? 'ৰেফাৰেন্স আইডি' : 'Reference ID'}: {result.referenceNumber}
            </div>
          )}
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <a
              href="tel:+919212218180"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-700 text-purewhite font-bold hover:bg-emerald-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 92122 18180</span>
            </a>
            <a
              href="https://wa.me/917982824255"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 text-purewhite font-bold hover:bg-emerald-700 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {result && !result.success && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5 animate-fade-in">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">{result.error}</p>
        </div>
      )}

      {/* Form matching user's requested layout */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-spam honeypot */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          />
        </div>

        {/* 1. Name* */}
        <div>
          <label htmlFor="touch-name" className="sr-only">
            {t.namePlaceholder}
          </label>
          <input
            id="touch-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder={t.namePlaceholder}
            className="w-full px-4 py-3.5 rounded-xl border border-bordergrey focus:border-orange focus:ring-2 focus:ring-orange/20 text-xs sm:text-sm text-charcoal placeholder:text-secondary/70 bg-purewhite outline-none transition-all shadow-subtle"
          />
        </div>

        {/* 2. Which Car Model* (Replaces Email ID per user request!) */}
        <div>
          <label htmlFor="touch-carModel" className="sr-only">
            {t.carModelPlaceholder}
          </label>
          <div className="relative">
            <input
              id="touch-carModel"
              name="carModel"
              type="text"
              required
              value={formData.carModel}
              onChange={handleChange}
              placeholder={t.carModelPlaceholder}
              className="w-full px-4 py-3.5 pr-10 rounded-xl border border-bordergrey focus:border-orange focus:ring-2 focus:ring-orange/20 text-xs sm:text-sm text-charcoal placeholder:text-secondary/70 bg-purewhite outline-none transition-all shadow-subtle"
            />
            <Car className="w-4 h-4 text-secondary/60 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* 3. Enter Mobile* */}
        <div>
          <label htmlFor="touch-mobile" className="sr-only">
            {t.mobilePlaceholder}
          </label>
          <input
            id="touch-mobile"
            name="mobile"
            type="tel"
            required
            maxLength={14}
            value={formData.mobile}
            onChange={handleChange}
            placeholder={t.mobilePlaceholder}
            className="w-full px-4 py-3.5 rounded-xl border border-bordergrey focus:border-orange focus:ring-2 focus:ring-orange/20 text-xs sm:text-sm text-charcoal placeholder:text-secondary/70 bg-purewhite outline-none transition-all shadow-subtle"
          />
        </div>

        {/* 4. Address */}
        <div>
          <label htmlFor="touch-address" className="sr-only">
            {t.addressPlaceholder}
          </label>
          <input
            id="touch-address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            placeholder={t.addressPlaceholder}
            className="w-full px-4 py-3.5 rounded-xl border border-bordergrey focus:border-orange focus:ring-2 focus:ring-orange/20 text-xs sm:text-sm text-charcoal placeholder:text-secondary/70 bg-purewhite outline-none transition-all shadow-subtle"
          />
        </div>

        {/* 5. Message */}
        <div>
          <label htmlFor="touch-message" className="sr-only">
            {t.messagePlaceholder}
          </label>
          <textarea
            id="touch-message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder={t.messagePlaceholder}
            className="w-full px-4 py-3.5 rounded-xl border border-bordergrey focus:border-orange focus:ring-2 focus:ring-orange/20 text-xs sm:text-sm text-charcoal placeholder:text-secondary/70 bg-purewhite outline-none transition-all shadow-subtle resize-none"
          />
        </div>

        {/* 6. Submit Button (Matching reference screenshot green button) */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3.5 px-6 rounded-lg bg-[#4CAF50] hover:bg-[#43A047] active:scale-[0.99] text-purewhite font-heading font-bold text-base tracking-wide transition-all shadow-md hover:shadow-green-600/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>{t.submitting}</span>
            </>
          ) : (
            <>
              <span>{t.submitButton}</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-secondary/80 pt-1">
          {language === 'as'
            ? 'চৰকাৰী অনুমোদিত RFC নং ২৬১ • কোনো লুকোৱা মাচুল নাই'
            : 'Govt. Approved Retrofitting Center (RFC Code No. 261) • Zero hidden consultation fees'}
        </p>
      </form>
    </div>
  );
};
