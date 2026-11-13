import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { AppointmentModal, AppointmentSummaryData } from './AppointmentModal';
import { getStoredUtm, captureUtmParameters, formatUtmSummary, UtmData } from '../utils/utm';
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  Clock,
  Phone,
  MessageSquare,
  ShieldCheck,
  Loader2,
  Car,
  Wrench,
  MapPin,
  ExternalLink,
  RefreshCw,
} from 'lucide-react';

interface AppointmentFormProps {
  defaultService?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ defaultService = '' }) => {
  const { language, contact } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '2020',
    serviceRequired: defaultService,
    preferredWorkshop: 'Mundka Facility (Opp. Metro Pillar 536)',
    preferredDate: '',
    preferredTime: 'Morning (10:30 AM - 01:00 PM)',
    additionalMessage: '',
    honeypot: '',
    privacyConsent: true,
  });

  const [formStartTime] = useState(Date.now());
  const [utmData, setUtmData] = useState<UtmData | null>(null);

  // Form State Machine
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [handoffState, setHandoffState] = useState<{
    status: 'idle' | 'preparing' | 'opened' | 'failed' | 'submitted';
    referenceNumber?: string;
    whatsappUrl?: string;
    errorMessage?: string;
  }>({ status: 'idle' });

  // Capture UTM parameters on load
  useEffect(() => {
    const utm = captureUtmParameters();
    setUtmData(utm);
  }, []);

  // Update default service if changed by parent prop
  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, serviceRequired: defaultService }));
    }
  }, [defaultService]);

  const vehicleMakes = [
    'Maruti Suzuki',
    'Hyundai',
    'Tata Motors',
    'Honda',
    'Toyota',
    'Mahindra',
    'Kia',
    'Renault',
    'Nissan',
    'Volkswagen',
    'Skoda',
    'Ford',
    'Chevrolet',
    'Other Manufacturer',
  ];

  const workshopOptions = [
    'Mundka Facility (Opp. Metro Pillar 536)',
    'Paschim Vihar Center (Rohtak Road, CSC A-4)',
  ];

  const timeOptions = [
    'Morning (10:30 AM - 01:00 PM)',
    'Afternoon (01:00 PM - 04:00 PM)',
    'Evening (04:00 PM - 07:00 PM)',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
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

  // Validate form inputs (Section 9B)
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName =
        language === 'as'
          ? 'অনুগ্ৰহ কৰি আপোনাৰ সম্পূৰ্ণ নাম উল্লেখ কৰক।'
          : 'Please enter your full name (minimum 2 characters).';
    }

    const cleanMobile = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      errors.mobileNumber =
        language === 'as'
          ? 'অনুগ্ৰহ কৰি ১০টা অংকৰ বৈধ মোবাইল নম্বৰ দিয়ক।'
          : 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email =
        language === 'as' ? 'অনুগ্ৰহ কৰি বৈধ ইমেইল উল্লেখ কৰক।' : 'Please enter a valid email address.';
    }

    if (!formData.vehicleMake) {
      errors.vehicleMake =
        language === 'as' ? 'বাহনৰ নিৰ্মাতা বাচনি কৰক।' : 'Please select your vehicle make.';
    }

    if (!formData.vehicleModel.trim()) {
      errors.vehicleModel =
        language === 'as' ? 'বাহনৰ মডেল উল্লেখ কৰক।' : 'Please enter your vehicle model.';
    }

    if (!formData.serviceRequired) {
      errors.serviceRequired =
        language === 'as' ? 'প্ৰয়োজনীয় সেৱা বাচনি কৰক।' : 'Please select the required service.';
    }

    if (!formData.preferredDate) {
      errors.preferredDate =
        language === 'as' ? 'পৰিদৰ্শনৰ তাৰিখ নিৰ্বাচন কৰক।' : 'Please select a preferred date.';
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

  // Build Structured WhatsApp Message (Section 11)
  const buildWhatsAppMessage = (refId: string): string => {
    const utmSummary = formatUtmSummary(utmData);

    const messageLines = [
      "*CAR'S ENERGY CO. - SERVICE ENQUIRY*",
      'RFC Code No. 261 (Govt. Approved Retrofitting Center)',
      `Ref ID: ${refId}`,
      '',
      '*CUSTOMER INFORMATION:*',
      `• Full Name: ${formData.fullName.trim()}`,
      `• Mobile Number: ${formData.mobileNumber.trim()}`,
      formData.email.trim() ? `• Email: ${formData.email.trim()}` : null,
      '',
      '*VEHICLE DETAILS:*',
      `• Manufacturer: ${formData.vehicleMake}`,
      `• Vehicle Model: ${formData.vehicleModel.trim()}`,
      `• Manufacturing Year: ${formData.vehicleYear}`,
      '',
      '*APPOINTMENT DETAILS:*',
      `• Requested Service: ${formData.serviceRequired}`,
      `• Preferred Workshop: ${formData.preferredWorkshop}`,
      `• Preferred Date: ${formData.preferredDate}`,
      `• Preferred Time: ${formData.preferredTime}`,
      formData.additionalMessage.trim() ? `• Notes/Symptoms: ${formData.additionalMessage.trim()}` : null,
      '',
      utmSummary ? `*ATTRIBUTION:* [${utmSummary}]` : null,
      '',
      '_Enquiry logged via carsenergy.co.in. Awaiting workshop confirmation._',
    ].filter(Boolean);

    return messageLines.join('\n');
  };

  // Confirm in Modal -> Submit to Backend API and Handoff to WhatsApp
  const handleConfirmAndHandoff = async () => {
    setIsSubmitting(true);
    setHandoffState({ status: 'preparing' });

    try {
      // 1. Submit to Backend API
      const payload = {
        ...formData,
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
        const refId = data.referenceNumber || `CE-${new Date().getFullYear()}-ENQ`;
        const whatsappText = buildWhatsAppMessage(refId);
        const encodedText = encodeURIComponent(whatsappText);
        const whatsappUrl = `https://wa.me/917982824255?text=${encodedText}`;

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
        setIsSubmitting(false);
        setHandoffState({
          status: 'failed',
          errorMessage: data.error || (language === 'as' ? 'চাৰ্ভাৰত সমস্যা হৈছে।' : 'Failed to register appointment enquiry.'),
        });
      }
    } catch {
      setIsSubmitting(false);
      setHandoffState({
        status: 'failed',
        errorMessage:
          language === 'as'
            ? 'চাৰ্ভাৰ সংযোগত সমস্যা হৈছে। অনুগ্ৰহ কৰি তলত দিয়া নম্বৰত পোনে পোনে যোগাযোগ কৰক।'
            : 'Unable to connect to workshop server. Please call or WhatsApp our technical advisor directly.',
      });
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: '2020',
      serviceRequired: '',
      preferredWorkshop: 'Mundka Facility (Opp. Metro Pillar 536)',
      preferredDate: '',
      preferredTime: 'Morning (10:30 AM - 01:00 PM)',
      additionalMessage: '',
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

      {/* WHATSAPP HANDOFF & SUCCESS STATE (Section 9E & 9G) */}
      {handoffState.status === 'opened' && (
        <div className="mb-8 p-6 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-xl space-y-4 animate-fade-in">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-base text-emerald-900 dark:text-emerald-200">
                {language === 'as'
                  ? 'অনুসন্ধান বাৰ্তা হোৱাটছএপত সাজু কৰা হৈছে'
                  : 'Your enquiry message is ready in WhatsApp'}
              </h4>
              <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">
                {language === 'as'
                  ? 'আপোনাৰ অনুৰোধ আমাৰ ডাটাবেচত সফলতাৰে সংৰক্ষণ কৰা হৈছে (Ref: ' +
                    handoffState.referenceNumber +
                    ')। অনুগ্ৰহ কৰি হোৱাটছএপত বাৰ্তাটো পৰীক্ষা কৰক আৰু "Send" টিপক।'
                  : 'Your appointment enquiry is registered in our workshop database. Please review the pre-filled message in WhatsApp and press Send.'}
              </p>
              <div className="inline-block bg-white dark:bg-darkcard border border-emerald-300 dark:border-emerald-800 rounded px-3 py-1.5 text-xs font-mono font-bold text-emerald-900 dark:text-emerald-300">
                Reference ID: {handoffState.referenceNumber}
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
              onClick={handleResetForm}
              className="px-4 py-2.5 rounded-lg border border-bordergrey dark:border-darkborder text-charcoal dark:text-darktext hover:bg-lightgrey dark:hover:bg-darkcard text-xs font-bold transition-colors inline-flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{language === 'as' ? 'নতুন বুকিং কৰক' : 'Submit Another Enquiry'}</span>
            </button>
          </div>
        </div>
      )}

      {/* ERROR / FALLBACK STATE (Section 9F & 9H) */}
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
              href="tel:+919212218180"
              className="px-4 py-2 rounded-lg bg-charcoal text-purewhite font-bold inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-orange" />
              <span>Call +91 92122 18180</span>
            </a>
            <a
              href="https://wa.me/917982824255"
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

      {/* THE MAIN FORM (Sections 9A, 9B, 9C) */}
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

        {/* 1. Customer Personal Information */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-darktext pb-2 border-b border-lightgrey dark:border-darkborder flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-orange-light text-orange flex items-center justify-center font-mono text-[10px] font-bold">
              1
            </span>
            <span>{language === 'as' ? 'ব্যক্তিগত তথ্য' : 'Customer Information'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="apt-fullName"
                className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
              >
                {contact.form.fullName} <span className="text-orange">*</span>
              </label>
              <input
                id="apt-fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={contact.form.fullNamePlaceholder}
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
                {contact.form.mobileNumber} <span className="text-orange">*</span>
              </label>
              <input
                id="apt-mobileNumber"
                name="mobileNumber"
                type="tel"
                maxLength={14}
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder={contact.form.mobilePlaceholder}
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

            <div className="sm:col-span-2">
              <label
                htmlFor="apt-email"
                className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
              >
                {contact.form.email}{' '}
                <span className="text-secondary dark:text-darkmuted text-[10px] font-normal">
                  (Optional)
                </span>
              </label>
              <input
                id="apt-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={contact.form.emailPlaceholder}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs bg-purewhite dark:bg-darkbg text-charcoal dark:text-darktext outline-none transition-all ${
                  fieldErrors.email
                    ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                    : 'border-lightgrey dark:border-darkborder focus:border-orange focus:ring-2 focus:ring-orange/20'
                }`}
              />
              {fieldErrors.email && (
                <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{fieldErrors.email}</span>
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
            <span>{language === 'as' ? 'বাহনৰ বিৱৰণ' : 'Vehicle Specifications'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="apt-vehicleMake"
                className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
              >
                {contact.form.vehicleMake} <span className="text-orange">*</span>
              </label>
              <select
                id="apt-vehicleMake"
                name="vehicleMake"
                value={formData.vehicleMake}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs bg-purewhite dark:bg-darkbg text-charcoal dark:text-darktext outline-none transition-all ${
                  fieldErrors.vehicleMake
                    ? 'border-red-500'
                    : 'border-lightgrey dark:border-darkborder focus:border-orange'
                }`}
              >
                <option value="">{language === 'as' ? 'বাচনি কৰক' : 'Select Make'}</option>
                {vehicleMakes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              {fieldErrors.vehicleMake && (
                <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{fieldErrors.vehicleMake}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="apt-vehicleModel"
                className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
              >
                {contact.form.vehicleModel} <span className="text-orange">*</span>
              </label>
              <input
                id="apt-vehicleModel"
                name="vehicleModel"
                type="text"
                value={formData.vehicleModel}
                onChange={handleChange}
                placeholder={contact.form.vehicleModelPlaceholder}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs bg-purewhite dark:bg-darkbg text-charcoal dark:text-darktext outline-none transition-all ${
                  fieldErrors.vehicleModel
                    ? 'border-red-500'
                    : 'border-lightgrey dark:border-darkborder focus:border-orange'
                }`}
              />
              {fieldErrors.vehicleModel && (
                <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{fieldErrors.vehicleModel}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="apt-vehicleYear"
                className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
              >
                {contact.form.vehicleYear}
              </label>
              <select
                id="apt-vehicleYear"
                name="vehicleYear"
                value={formData.vehicleYear}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey dark:border-darkborder text-xs bg-purewhite dark:bg-darkbg text-charcoal dark:text-darktext focus:border-orange outline-none transition-all"
              >
                {Array.from({ length: 15 }, (_, i) => new Date().getFullYear() - i).map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 3. Service & Scheduling */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal dark:text-darktext pb-2 border-b border-lightgrey dark:border-darkborder flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-orange-light text-orange flex items-center justify-center font-mono text-[10px] font-bold">
              3
            </span>
            <span>{language === 'as' ? 'সেৱা আৰু কৰ্মশালা নিৰ্বাচন' : 'Service & Workshop Booking'}</span>
          </h3>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="apt-serviceRequired"
                className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
              >
                {contact.form.serviceRequired} <span className="text-orange">*</span>
              </label>
              <select
                id="apt-serviceRequired"
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-xs bg-purewhite dark:bg-darkbg text-charcoal dark:text-darktext outline-none transition-all ${
                  fieldErrors.serviceRequired
                    ? 'border-red-500'
                    : 'border-lightgrey dark:border-darkborder focus:border-orange'
                }`}
              >
                <option value="">{language === 'as' ? 'সেৱা বাচনি কৰক' : 'Select Required Service'}</option>
                {servicesData.map((s) => (
                  <option key={s.slug} value={s.titleEn}>
                    {language === 'as' ? s.titleAs : s.titleEn}
                  </option>
                ))}
              </select>
              {fieldErrors.serviceRequired && (
                <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{fieldErrors.serviceRequired}</span>
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="apt-preferredWorkshop"
                  className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
                >
                  {contact.form.preferredWorkshop} <span className="text-orange">*</span>
                </label>
                <select
                  id="apt-preferredWorkshop"
                  name="preferredWorkshop"
                  value={formData.preferredWorkshop}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey dark:border-darkborder text-xs bg-purewhite dark:bg-darkbg text-charcoal dark:text-darktext focus:border-orange outline-none transition-all"
                >
                  {workshopOptions.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="apt-preferredDate"
                  className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
                >
                  {contact.form.preferredDate} <span className="text-orange">*</span>
                </label>
                <input
                  id="apt-preferredDate"
                  name="preferredDate"
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-xs bg-purewhite dark:bg-darkbg text-charcoal dark:text-darktext outline-none transition-all ${
                    fieldErrors.preferredDate
                      ? 'border-red-500'
                      : 'border-lightgrey dark:border-darkborder focus:border-orange'
                  }`}
                />
                {fieldErrors.preferredDate && (
                  <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{fieldErrors.preferredDate}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="apt-preferredTime"
                  className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
                >
                  {contact.form.preferredTime}
                </label>
                <select
                  id="apt-preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey dark:border-darkborder text-xs bg-purewhite dark:bg-darkbg text-charcoal dark:text-darktext focus:border-orange outline-none transition-all"
                >
                  {timeOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="apt-additionalMessage"
                className="block text-xs font-semibold text-charcoal dark:text-darktext mb-1"
              >
                {contact.form.additionalMessage}{' '}
                <span className="text-secondary dark:text-darkmuted text-[10px] font-normal">
                  (Optional notes on mileage, RPM lag, or cylinder expiry)
                </span>
              </label>
              <textarea
                id="apt-additionalMessage"
                name="additionalMessage"
                rows={3}
                value={formData.additionalMessage}
                onChange={handleChange}
                placeholder={contact.form.additionalMessagePlaceholder}
                className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey dark:border-darkborder text-xs bg-purewhite dark:bg-darkbg text-charcoal dark:text-darktext focus:border-orange outline-none transition-all resize-none"
              />
            </div>
          </div>
        </div>

        {/* 4. Privacy Consent & Submit */}
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

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-orange hover:bg-orange-hover active:scale-[0.99] text-purewhite font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-orange/30 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>
                {language === 'as'
                  ? 'তথ্য পৰীক্ষা কৰি হোৱাটছএপত বুক কৰক'
                  : 'Review & Continue to WhatsApp Booking'}
              </span>
            </button>
          </div>

          <p className="text-[11px] text-center text-secondary dark:text-darkmuted">
            {language === 'as'
              ? 'চৰকাৰী অনুমোদিত RFC ক’ড নং ২৬১ • কোনো ভুৱা বুকিং নাই'
              : 'Govt. Approved Retrofitting Center (RFC Code No. 261) • Official WhatsApp (+91 79828 24255)'}
          </p>
        </div>
      </form>

      {/* CONFIRMATION REVIEW MODAL (Section 10) */}
      <AppointmentModal
        isOpen={isReviewOpen}
        data={{
          ...formData,
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
