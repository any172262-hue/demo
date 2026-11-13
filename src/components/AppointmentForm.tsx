import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AppointmentModal } from './AppointmentModal';
import { captureUtmParameters, formatUtmSummary, UtmData } from '../utils/utm';
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageSquare,
  ShieldCheck,
  Loader2,
  Car,
  User,
  ExternalLink,
  RefreshCw,
  Copy,
  Check,
} from 'lucide-react';

interface AppointmentFormProps {
  defaultService?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = () => {
  const { language, contact } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    carName: '',
    carModel: '',
    carNumber: '',
    honeypot: '',
    privacyConsent: true,
  });

  const [formStartTime] = useState(Date.now());
  const [idempotencyKey] = useState(() => 'ce_idemp_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9));
  const [utmData, setUtmData] = useState<UtmData | null>(null);
  const [copiedMessage, setCopiedMessage] = useState(false);

  // Form State Machine
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [handoffState, setHandoffState] = useState<{
    status: 'idle' | 'preparing' | 'opened' | 'failed' | 'backend_offline' | 'submitted';
    referenceNumber?: string;
    whatsappUrl?: string;
    errorMessage?: string;
  }>({ status: 'idle' });

  // Capture UTM parameters on load
  useEffect(() => {
    const utm = captureUtmParameters();
    setUtmData(utm);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = e.target.checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear specific field error on edit
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  // Validate form inputs: ONLY customer name, mobile no, car name, car model, car no
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName =
        language === 'as'
          ? 'অনুগ্ৰহ কৰি আপোনাৰ সম্পূৰ্ণ নাম উল্লেখ কৰক।'
          : 'Please enter customer name (minimum 2 characters).';
    }

    const cleanMobile = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      errors.mobileNumber =
        language === 'as'
          ? 'অনুগ্ৰহ কৰি ১০টা অংকৰ বৈধ মোবাইল নম্বৰ দিয়ক।'
          : 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (!formData.carName.trim() || formData.carName.trim().length < 2) {
      errors.carName =
        language === 'as'
          ? 'গাড়ীৰ নাম বা নিৰ্মাতা উল্লেখ কৰক (যেনেঃ মাৰুতি চুজুকি, হুন্দাই)।'
          : 'Please enter car name / make (e.g. Maruti Suzuki, Hyundai, Honda).';
    }

    if (!formData.carModel.trim() || formData.carModel.trim().length < 2) {
      errors.carModel =
        language === 'as'
          ? 'গাড়ীৰ মডেল উল্লেখ কৰক (যেনেঃ ৱেগনাৰ, চুইফট ডিজায়াৰ)।'
          : 'Please enter car model (e.g. Swift Dzire, WagonR, i10, City).';
    }

    if (!formData.carNumber.trim() || formData.carNumber.trim().length < 4) {
      errors.carNumber =
        language === 'as'
          ? 'গাড়ীৰ পঞ্জীয়ন নম্বৰ দিয়ক (যেনেঃ DL 01 AB 1234)।'
          : 'Please enter car registration number (e.g. DL 01 AB 1234).';
    }

    if (!formData.privacyConsent) {
      errors.privacyConsent =
        language === 'as'
          ? 'সেৱা নিশ্চিতকৰণৰ বাবে সন্মতি দিয়া বাধ্যতামূলক।'
          : 'Privacy consent is required for service scheduling.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Initial Submit Trigger -> Opens Confirmation Review Modal
  const handlePreSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsReviewOpen(true);
    }
  };

  // Build Structured WhatsApp Message with strictly 5 details
  const buildWhatsAppMessage = (refId: string): string => {
    const utmSummary = formatUtmSummary(utmData);

    const messageLines = [
      "*MAA KAMAKHYA AUTO GAS - SERVICE ENQUIRY*",
      'Guwahati Retrofitting & Fitment Center (NH-37, Garchuk)',
      `Ref ID: ${refId}`,
      '',
      '*CUSTOMER INFORMATION:*',
      `• Customer Name: ${formData.fullName.trim()}`,
      `• Mobile Number: ${formData.mobileNumber.trim()}`,
      '',
      '*VEHICLE DETAILS:*',
      `• Car Name: ${formData.carName.trim()}`,
      `• Car Model: ${formData.carModel.trim()}`,
      `• Car Number: ${formData.carNumber.trim().toUpperCase()}`,
      '',
      utmSummary ? `*ATTRIBUTION:* [${utmSummary}]` : null,
      '',
      '_Enquiry logged via Maa Kamakhya Auto Gas website. Awaiting workshop confirmation._',
    ].filter(Boolean);

    return messageLines.join('\n');
  };

  // Helper to copy prepared message
  const handleCopyMessage = () => {
    const refId = handoffState.referenceNumber || `MK-${new Date().getFullYear()}-ENQ`;
    const text = buildWhatsAppMessage(refId);
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 3000);
  };

  // Confirm in Modal -> Submit to Backend API and Handoff to WhatsApp
  const handleConfirmAndHandoff = async () => {
    if (isSubmitting) return; // Prevent double-clicks
    setIsSubmitting(true);
    setHandoffState({ status: 'preparing' });

    try {
      // 1. Submit to Backend API with Idempotency Key
      const payload = {
        fullName: formData.fullName.trim(),
        mobileNumber: formData.mobileNumber.trim(),
        carName: formData.carName.trim(),
        carModel: formData.carModel.trim(),
        carNumber: formData.carNumber.trim().toUpperCase(),
        vehicleMake: formData.carName.trim(),
        vehicleModel: formData.carModel.trim(),
        honeypot: formData.honeypot,
        idempotencyKey,
        submittedAt: formStartTime,
        utm: utmData,
      };

      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const refId = data.referenceNumber || `MK-${new Date().getFullYear()}-ENQ`;
        const whatsappText = buildWhatsAppMessage(refId);
        const encodedText = encodeURIComponent(whatsappText);
        const whatsappUrl = `https://wa.me/919678******?text=${encodedText}`;

        setIsReviewOpen(false);
        setIsSubmitting(false);

        setHandoffState({
          status: 'opened',
          referenceNumber: refId,
          whatsappUrl,
        });

        // 2. Open WhatsApp in new tab/window
        const win = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        if (!win || win.closed || typeof win.closed === 'undefined') {
          // Popup blocked or mobile redirection
          setHandoffState((prev) => ({
            ...prev,
            status: 'opened',
          }));
        }
      } else {
        // Backend returned error
        setIsReviewOpen(false);
        setIsSubmitting(false);
        setHandoffState({
          status: 'failed',
          errorMessage: data.error || (language === 'as' ? 'চাৰ্ভাৰত সমস্যা হৈছে।' : 'Failed to register appointment enquiry.'),
        });
      }
    } catch {
      // Server offline or network connection lost
      const offlineRef = `MK-OFFLINE-${Math.floor(1000 + Math.random() * 9000)}`;
      const whatsappText = buildWhatsAppMessage(offlineRef);
      const encodedText = encodeURIComponent(whatsappText);
      const whatsappUrl = `https://wa.me/919678******?text=${encodedText}`;

      setIsReviewOpen(false);
      setIsSubmitting(false);
      setHandoffState({
        status: 'backend_offline',
        referenceNumber: offlineRef,
        whatsappUrl,
        errorMessage:
          language === 'as'
            ? 'চাৰ্ভাৰ সংযোগত সমস্যা হৈছে (অনুসন্ধান পঞ্জীয়ন হোৱা নাই)। আপুনি পোনে পোনে আমাৰ চৰকাৰী হোৱাটছএপত বাৰ্তা প্ৰেৰণ কৰিব পাৰে।'
            : 'Unable to connect to workshop database. Your enquiry has not been stored yet. You can still send your details directly via official WhatsApp or call our workshop.',
      });
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      mobileNumber: '',
      carName: '',
      carModel: '',
      carNumber: '',
      honeypot: '',
      privacyConsent: true,
    });
    setFieldErrors({});
    setHandoffState({ status: 'idle' });
  };

  return (
    <div className="bg-purewhite dark:bg-darksurface rounded-2xl border border-lightgrey dark:border-darkborder shadow-premium p-6 sm:p-8 transition-colors">
      {/* Form Header */}
      <div className="mb-6 pb-6 border-b border-lightgrey dark:border-darkborder">
        <div className="flex items-center gap-2 text-xs font-bold text-orange uppercase tracking-wider mb-1">
          <Calendar className="w-4 h-4 text-orange" />
          <span>{contact.appointmentTitle}</span>
        </div>
        <p className="text-xs text-secondary dark:text-darkmuted leading-relaxed">
          {contact.appointmentSubtitle}
        </p>
      </div>

      {/* WHATSAPP HANDOFF & SUCCESS STATE */}
      {handoffState.status === 'opened' && (
        <div className="mb-8 p-6 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-xl space-y-4 animate-fade-in">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-base text-emerald-900 dark:text-emerald-200">
                {language === 'as'
                  ? 'হোৱাটছএপত আপোনাৰ অনুসন্ধান বাৰ্তা প্ৰস্তুত কৰা হৈছে'
                  : 'Your enquiry message is ready in WhatsApp'}
              </h4>
              <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed font-semibold">
                {language === 'as'
                  ? 'অনুগ্ৰহ কৰি ইয়াক পৰ্যালোচনা কৰক আৰু আমালৈ প্ৰেৰণ কৰিবলৈ Send টিপক।'
                  : 'Please review it and press Send to share it with us.'}
              </p>
              <div className="p-3 bg-white/80 dark:bg-darkcard/80 border border-emerald-200 dark:border-emerald-800/60 rounded-lg text-xs space-y-1.5">
                <div className="font-mono font-bold text-emerald-900 dark:text-emerald-200 flex flex-wrap items-center justify-between gap-2">
                  <span>Enquiry Ref ID: {handoffState.referenceNumber}</span>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 px-2 py-0.5 rounded font-sans">
                    Enquiry Logged in Database
                  </span>
                </div>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 leading-relaxed">
                  {language === 'as'
                    ? 'মন কৰিব: হোৱাটছএপ খোল খোৱাৰ অৰ্থ এইটো নহয় যে এপইণ্টমেণ্ট নিশ্চিত হৈছে। কাৰিকৰী পৰামৰ্শদাতাই বাহনৰ প্ৰয়োজনীয়তা পৰীক্ষা কৰি স্লট নিশ্চিত কৰাৰ পিছতহে এপইণ্টমেণ্ট নিশ্চিত হ’ব।'
                    : 'Important: Opening WhatsApp does NOT mean the enquiry was sent or confirmed. An appointment is confirmed only after our technical advisor reviews your vehicle details and confirms slot allocation.'}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            {handoffState.whatsappUrl && (
              <a
                href={handoffState.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-purewhite font-heading font-bold text-xs shadow-md transition-all inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>
                  {language === 'as' ? 'হোৱাটছএপ পুনৰ খোলক' : 'Open WhatsApp Again'}
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              type="button"
              onClick={() => handleCopyMessage()}
              className="px-4 py-2.5 rounded-lg border border-emerald-300 dark:border-emerald-800 bg-white dark:bg-darkcard text-emerald-900 dark:text-emerald-200 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
            >
              {copiedMessage ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-emerald-600" />}
              <span>{copiedMessage ? (language === 'as' ? 'কপি কৰা হ’ল!' : 'Message Copied!') : (language === 'as' ? 'বাৰ্তা কপি কৰক' : 'Copy Prepared Message')}</span>
            </button>

            <button
              type="button"
              onClick={handleResetForm}
              className="px-4 py-2.5 rounded-lg border border-bordergrey dark:border-darkborder text-charcoal dark:text-darktext hover:bg-lightgrey dark:hover:bg-darkcard text-xs font-bold transition-colors inline-flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{language === 'as' ? 'নতুন বুকিং কৰক' : 'Submit Another Enquiry'}</span>
            </button>
          </div>
        </div>
      )}

      {/* BACKEND OFFLINE / STORAGE UNAVAILABLE STATE */}
      {handoffState.status === 'backend_offline' && (
        <div className="mb-6 p-5 bg-amber-50 dark:bg-amber-950/25 border border-amber-200 dark:border-amber-800/40 rounded-xl text-xs text-amber-900 dark:text-amber-200 space-y-3 animate-fade-in">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h5 className="font-heading font-bold text-sm text-amber-900 dark:text-amber-100">
                {language === 'as' ? 'চাৰ্ভাৰ সংযোগত সমস্যা (অনুসন্ধান ডাটাবেচত সংৰক্ষণ হোৱা নাই)' : 'Backend Storage Unavailable (Enquiry Not Yet Saved)'}
              </h5>
              <p className="leading-relaxed text-amber-800 dark:text-amber-300">
                {language === 'as'
                  ? 'কাৰিকৰী সংযোগৰ সমস্যাৰ বাবে আমি আপোনাৰ অনুসন্ধান কৰ্মশালাৰ ডাটাবেচত সংৰক্ষণ কৰিব নোৱাৰিলোঁ। আপোনাৰ অনুসন্ধান এতিয়াও ৰেকৰ্ড হোৱা নাই। আপুনি পোনে পোনে আমাৰ চৰকাৰী হোৱাটছএপ (+91 9678******) যোগে বাৰ্তা প্ৰেৰণ কৰিব পাৰে বা কৰ্মশালাত ফোন কৰিব পাৰে।'
                  : 'Due to a temporary server connection issue, your enquiry could not be saved to our workshop database and has NOT been recorded yet. You can still send your details directly via official WhatsApp (+91 9678******), copy your prepared message, or call our workshop advisor directly.'}
              </p>
            </div>
          </div>
          <div className="pt-2 flex flex-wrap gap-2.5">
            {handoffState.whatsappUrl && (
              <a
                href={handoffState.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-purewhite font-bold inline-flex items-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{language === 'as' ? 'হোৱাটছএপত পোনপটীয়া প্ৰেৰণ' : 'Send via WhatsApp Direct (+91 9678******)'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              type="button"
              onClick={() => handleCopyMessage()}
              className="px-4 py-2.5 rounded-lg border border-amber-300 dark:border-amber-700 bg-white dark:bg-darkcard text-amber-900 dark:text-amber-200 hover:bg-amber-100 font-bold inline-flex items-center gap-1.5"
            >
              {copiedMessage ? <Check className="w-3.5 h-3.5 text-amber-700" /> : <Copy className="w-3.5 h-3.5 text-amber-700" />}
              <span>{copiedMessage ? (language === 'as' ? 'কপি কৰা হ’ল!' : 'Message Copied!') : (language === 'as' ? 'বাৰ্তা কপি কৰক' : 'Copy Prepared Message')}</span>
            </button>
            <a
              href="tel:+919678******"
              className="px-4 py-2.5 rounded-lg bg-charcoal dark:bg-darkcard text-purewhite font-bold inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-orange" />
              <span>{language === 'as' ? 'ফোন কৰক (+91 9678******)' : 'Call Workshop Hotline (+91 9678******)'}</span>
            </a>
          </div>
        </div>
      )}

      {/* ERROR / FALLBACK STATE */}
      {handoffState.status === 'failed' && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/40 rounded-xl text-xs text-red-800 dark:text-red-300 space-y-3 animate-fade-in">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-heading font-bold text-sm">
                {language === 'as' ? 'অনুৰোধ প্ৰেৰণত সমস্যা' : 'Submission Issue'}
              </h5>
              <p className="mt-1 leading-relaxed">{handoffState.errorMessage}</p>
            </div>
          </div>
          <div className="pt-2 flex flex-wrap gap-2">
            <a
              href="tel:+919678******"
              className="px-4 py-2 rounded-lg bg-charcoal text-purewhite font-bold inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-orange" />
              <span>Call +91 9678******</span>
            </a>
            <a
              href="https://wa.me/919678******"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-emerald-600 text-purewhite font-bold inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      )}

      {/* THE MAIN FORM (Simplified to strictly Customer Name, Mobile No, Car Name, Car Model, Car No) */}
      <form onSubmit={handlePreSubmit} className="space-y-6">
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

        {/* 1. Customer Details */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-darktext pb-2 border-b border-lightgrey dark:border-darkborder flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-orange-light text-orange flex items-center justify-center font-mono text-[10px] font-bold">
              1
            </span>
            <User className="w-3.5 h-3.5 text-orange" />
            <span>{language === 'as' ? 'গ্ৰাহকৰ তথ্য' : 'Customer Details'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="apt-fullName"
                className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
              >
                {language === 'as' ? 'গ্ৰাহকৰ সম্পূৰ্ণ নাম' : 'Customer Name'} <span className="text-orange">*</span>
              </label>
              <input
                id="apt-fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={contact.form.fullNamePlaceholder || 'e.g. Rajesh Sharma'}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs bg-purewhite dark:bg-darkbg text-charcoal dark:text-darktext outline-none transition-all ${
                  fieldErrors.fullName
                    ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-lightgrey dark:border-darkborder focus:border-orange focus:ring-2 focus:ring-orange/20'
                }`}
              />
              {fieldErrors.fullName && (
                <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{fieldErrors.fullName}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="apt-mobileNumber"
                className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
              >
                {language === 'as' ? 'ম’বাইল নম্বৰ' : 'Mobile Number'} <span className="text-orange">*</span>
              </label>
              <input
                id="apt-mobileNumber"
                name="mobileNumber"
                type="tel"
                maxLength={14}
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder={contact.form.mobilePlaceholder || '10-digit mobile number'}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs bg-purewhite dark:bg-darkbg text-charcoal dark:text-darktext outline-none transition-all ${
                  fieldErrors.mobileNumber
                    ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-lightgrey dark:border-darkborder focus:border-orange focus:ring-2 focus:ring-orange/20'
                }`}
              />
              {fieldErrors.mobileNumber && (
                <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{fieldErrors.mobileNumber}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 2. Vehicle Details */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-darktext pb-2 border-b border-lightgrey dark:border-darkborder flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-orange-light text-orange flex items-center justify-center font-mono text-[10px] font-bold">
              2
            </span>
            <Car className="w-3.5 h-3.5 text-orange" />
            <span>{language === 'as' ? 'বাহনৰ তথ্য' : 'Vehicle Details'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="apt-carName"
                className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
              >
                {language === 'as' ? 'গাড়ীৰ নাম / ব্ৰেণ্ড' : 'Car Name / Make'} <span className="text-orange">*</span>
              </label>
              <input
                id="apt-carName"
                name="carName"
                type="text"
                value={formData.carName}
                onChange={handleChange}
                placeholder="e.g. Maruti Suzuki, Hyundai"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs bg-purewhite dark:bg-darkbg text-charcoal dark:text-darktext outline-none transition-all ${
                  fieldErrors.carName
                    ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-lightgrey dark:border-darkborder focus:border-orange focus:ring-2 focus:ring-orange/20'
                }`}
              />
              {fieldErrors.carName && (
                <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{fieldErrors.carName}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="apt-carModel"
                className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
              >
                {language === 'as' ? 'গাড়ীৰ মডেল' : 'Car Model'} <span className="text-orange">*</span>
              </label>
              <input
                id="apt-carModel"
                name="carModel"
                type="text"
                value={formData.carModel}
                onChange={handleChange}
                placeholder="e.g. Swift Dzire, WagonR, i10"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs bg-purewhite dark:bg-darkbg text-charcoal dark:text-darktext outline-none transition-all ${
                  fieldErrors.carModel
                    ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-lightgrey dark:border-darkborder focus:border-orange focus:ring-2 focus:ring-orange/20'
                }`}
              />
              {fieldErrors.carModel && (
                <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{fieldErrors.carModel}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="apt-carNumber"
                className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
              >
                {language === 'as' ? 'গাড়ীৰ নম্বৰ' : 'Car Number'} <span className="text-orange">*</span>
              </label>
              <input
                id="apt-carNumber"
                name="carNumber"
                type="text"
                value={formData.carNumber}
                onChange={handleChange}
                placeholder="e.g. DL 01 AB 1234"
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs bg-purewhite dark:bg-darkbg text-charcoal dark:text-darktext uppercase outline-none transition-all ${
                  fieldErrors.carNumber
                    ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-lightgrey dark:border-darkborder focus:border-orange focus:ring-2 focus:ring-orange/20'
                }`}
              />
              {fieldErrors.carNumber && (
                <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{fieldErrors.carNumber}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 3. Privacy Consent & Submit */}
        <div className="space-y-4 pt-2">
          <div className="flex items-start gap-2.5">
            <input
              id="apt-privacyConsent"
              name="privacyConsent"
              type="checkbox"
              checked={formData.privacyConsent}
              onChange={handleChange}
              className="mt-1 w-4 h-4 rounded text-orange focus:ring-orange/30 border-lightgrey dark:border-darkborder"
            />
            <label
              htmlFor="apt-privacyConsent"
              className="text-xs text-secondary dark:text-darkmuted leading-relaxed"
            >
              {contact.form.privacyConsent}
            </label>
          </div>
          {fieldErrors.privacyConsent && (
            <p className="text-[11px] text-red-600 font-medium flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{fieldErrors.privacyConsent}</span>
            </p>
          )}

          {/* Privacy Information Disclosure & Link to Privacy Policy */}
          <div className="p-3.5 rounded-lg bg-offwhite dark:bg-darkbg border border-lightgrey dark:border-darkborder text-[11px] text-secondary dark:text-darkmuted leading-relaxed">
            <span className="font-semibold text-charcoal dark:text-darktext">
              {language === 'as' ? 'গোপনীয়তা সুৰক্ষা:' : 'Privacy Protection:'}{' '}
            </span>
            {language === 'as'
              ? 'মা কামাখ্যা অটো গেছ-এ কেৱল চিএনজি/এলপিজি সংস্থাপনৰ যোগ্যতা নিৰ্ধাৰণ আৰু কৰ্মশালাৰ বে’ আবণ্টনৰ বাবেহে আপোনাৰ তথ্য সংগ্ৰহ কৰা হয়। আমি কেতিয়াও আপোনাৰ ব্যক্তিগত তথ্য বিক্ৰী নকৰো বা অপ্ৰয়োজনীয় স্থানত সংৰক্ষণ নকৰো। অধিক তথ্যৰ বাবে আমাৰ '
              : 'At Maa Kamakhya Auto Gas, we collect vehicle details and mobile number solely to assess CNG/LPG compatibility and allocate inspection slots. We never sell your data, use third-party ad tracking scripts, or store personal details in browser storage. Read our '}
            <a
              href="/privacy-policy"
              className="text-orange hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === 'as' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
            </a>
            .
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-lg bg-orange hover:bg-orange-hover active:scale-[0.99] text-purewhite font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-orange/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{language === 'as' ? 'প্ৰক্ৰিয়াকৰণ কৰি থকা হৈছে...' : 'Processing...'}</span>
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4" />
                  <span>
                    {language === 'as'
                      ? 'তথ্য পৰীক্ষা কৰি হোৱাটছএপত বুক কৰক'
                      : 'Review & Continue to WhatsApp Booking'}
                  </span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-center text-secondary dark:text-darkmuted">
            {language === 'as'
              ? 'মা কামাখ্যা অটো গেছ • কোনো ভুৱা বুকিং নাই • অফিচিয়েল হোৱাটছএপ (+91 9678******)'
              : 'Maa Kamakhya Auto Gas • Direct Workshop Booking • Official WhatsApp (+91 9678******)'}
          </p>
        </div>
      </form>

      {/* CONFIRMATION REVIEW MODAL */}
      <AppointmentModal
        isOpen={isReviewOpen}
        data={{
          fullName: formData.fullName,
          mobileNumber: formData.mobileNumber,
          carName: formData.carName,
          carModel: formData.carModel,
          carNumber: formData.carNumber,
          utm: utmData,
        }}
        isSubmitting={isSubmitting}
        onEdit={() => setIsReviewOpen(false)}
        onConfirm={handleConfirmAndHandoff}
        onClose={() => setIsReviewOpen(false)}
      />
    </div>
  );
};
