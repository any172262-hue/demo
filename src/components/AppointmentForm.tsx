import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  Clock,
  Phone,
  MessageSquare,
  ShieldAlert,
  Loader2,
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
  const [submitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    referenceNumber?: string;
    message?: string;
    error?: string;
    details?: string[];
  } | null>(null);

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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionResult(null);

    // Basic frontend checks
    if (!formData.fullName.trim()) {
      setSubmissionResult({ success: false, error: 'Full name is required.' });
      return;
    }
    if (!formData.mobileNumber.trim() || formData.mobileNumber.replace(/\D/g, '').length < 10) {
      setSubmissionResult({ success: false, error: 'A valid 10-digit mobile number is required.' });
      return;
    }
    if (!formData.vehicleMake || !formData.vehicleModel.trim()) {
      setSubmissionResult({ success: false, error: 'Please specify vehicle make and model.' });
      return;
    }
    if (!formData.serviceRequired) {
      setSubmissionResult({ success: false, error: 'Please select required service.' });
      return;
    }
    if (!formData.preferredDate) {
      setSubmissionResult({ success: false, error: 'Please select a preferred date.' });
      return;
    }
    if (!formData.privacyConsent) {
      setSubmissionResult({
        success: false,
        error: 'Please accept the privacy consent to allow workshop contact.',
      });
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        ...formData,
        submittedAt: formStartTime,
      };

      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissionResult({
          success: true,
          referenceNumber: data.referenceNumber,
          message: data.message,
        });
        // Clear form fields
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
      } else {
        setSubmissionResult({
          success: false,
          error: data.error || 'Failed to submit enquiry.',
          details: data.details,
        });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmissionResult({
        success: false,
        error: 'Unable to connect to the backend server. Please call or WhatsApp us directly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-purewhite rounded-2xl border border-lightgrey shadow-premium p-6 sm:p-8">
      {/* Header of Form */}
      <div className="mb-6 pb-6 border-b border-lightgrey">
        <div className="flex items-center gap-2 text-xs font-bold text-orange uppercase tracking-wider mb-1">
          <Calendar className="w-4 h-4" />
          <span>{contact.appointmentTitle}</span>
        </div>
        <p className="text-xs text-secondary leading-relaxed">
          {contact.appointmentSubtitle}
        </p>
      </div>

      {/* Success Notification Banner */}
      {submissionResult && submissionResult.success && (
        <div className="mb-8 p-6 bg-emerald-50 border border-emerald-200 rounded-xl animate-fade-in">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-base text-emerald-900">
                {contact.messages.successTitle}
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed">
                {contact.messages.successBody}
              </p>
              <div className="inline-block bg-white border border-emerald-300 rounded px-3 py-1.5 text-xs font-mono font-bold text-emerald-900">
                Reference ID: {submissionResult.referenceNumber}
              </div>
              <p className="text-[11px] text-emerald-700 font-medium">
                Status: <span className="font-bold underline">ENQUIRY RECEIVED</span> (Our technical advisor will call to confirm slot availability).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Error Notification Banner */}
      {submissionResult && !submissionResult.success && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-xs text-red-800 animate-fade-in">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-1">
                {submissionResult.error || contact.messages.errorTitle}
              </span>
              {submissionResult.details && submissionResult.details.length > 0 && (
                <ul className="list-disc list-inside space-y-0.5 text-[11px] text-red-700">
                  {submissionResult.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}

      {/* The Enquiry Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot Spam Trap (Hidden) */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              {contact.form.fullName} <span className="text-orange">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder={contact.form.fullNamePlaceholder}
              className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey text-xs focus:ring-2 focus:ring-orange/30 focus:border-orange outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              {contact.form.mobileNumber} <span className="text-orange">*</span>
            </label>
            <input
              type="tel"
              name="mobileNumber"
              required
              maxLength={12}
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder={contact.form.mobilePlaceholder}
              className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey text-xs focus:ring-2 focus:ring-orange/30 focus:border-orange outline-none transition-colors"
            />
          </div>
        </div>

        {/* Optional Email */}
        <div>
          <label className="block text-xs font-semibold text-charcoal mb-1">
            {contact.form.email}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={contact.form.emailPlaceholder}
            className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey text-xs focus:ring-2 focus:ring-orange/30 focus:border-orange outline-none transition-colors"
          />
        </div>

        {/* Row 2: Vehicle Information */}
        <div className="p-4 bg-offwhite/60 rounded-xl border border-lightgrey/80 space-y-4">
          <span className="block text-xs font-bold text-charcoal uppercase tracking-wider">
            {language === 'as' ? 'বাহনৰ তথ্য' : 'Vehicle Specifications'}
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-secondary mb-1">
                {contact.form.vehicleMake} <span className="text-orange">*</span>
              </label>
              <select
                name="vehicleMake"
                required
                value={formData.vehicleMake}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg border border-lightgrey text-xs bg-purewhite focus:ring-2 focus:ring-orange/30 focus:border-orange outline-none"
              >
                <option value="">{contact.form.vehicleMakeSelect}</option>
                {vehicleMakes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-secondary mb-1">
                {contact.form.vehicleModel} <span className="text-orange">*</span>
              </label>
              <input
                type="text"
                name="vehicleModel"
                required
                value={formData.vehicleModel}
                onChange={handleChange}
                placeholder={contact.form.vehicleModelPlaceholder}
                className="w-full px-3 py-2 rounded-lg border border-lightgrey text-xs bg-purewhite focus:ring-2 focus:ring-orange/30 focus:border-orange outline-none"
              >
              </input>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-secondary mb-1">
                {contact.form.vehicleYear} <span className="text-orange">*</span>
              </label>
              <input
                type="number"
                name="vehicleYear"
                required
                min={1998}
                max={new Date().getFullYear() + 1}
                value={formData.vehicleYear}
                onChange={handleChange}
                placeholder={contact.form.vehicleYearPlaceholder}
                className="w-full px-3 py-2 rounded-lg border border-lightgrey text-xs bg-purewhite focus:ring-2 focus:ring-orange/30 focus:border-orange outline-none"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Service & Workshop Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              {contact.form.serviceRequired} <span className="text-orange">*</span>
            </label>
            <select
              name="serviceRequired"
              required
              value={formData.serviceRequired}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey text-xs bg-purewhite focus:ring-2 focus:ring-orange/30 focus:border-orange outline-none"
            >
              <option value="">{contact.form.serviceRequiredSelect}</option>
              {servicesData.map((s) => (
                <option key={s.slug} value={s.titleEn}>
                  {language === 'as' ? s.titleAs : s.titleEn}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              {contact.form.preferredWorkshop} <span className="text-orange">*</span>
            </label>
            <select
              name="preferredWorkshop"
              required
              value={formData.preferredWorkshop}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey text-xs bg-purewhite focus:ring-2 focus:ring-orange/30 focus:border-orange outline-none"
            >
              {workshopOptions.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4: Date & Time Slot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              {contact.form.preferredDate} <span className="text-orange">*</span>
            </label>
            <input
              type="date"
              name="preferredDate"
              required
              min={new Date().toISOString().split('T')[0]}
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey text-xs focus:ring-2 focus:ring-orange/30 focus:border-orange outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              {contact.form.preferredTime} <span className="text-orange">*</span>
            </label>
            <select
              name="preferredTime"
              required
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey text-xs bg-purewhite focus:ring-2 focus:ring-orange/30 focus:border-orange outline-none"
            >
              {timeOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message / Symptoms */}
        <div>
          <label className="block text-xs font-semibold text-charcoal mb-1">
            {contact.form.additionalMessage}
          </label>
          <textarea
            name="additionalMessage"
            rows={3}
            value={formData.additionalMessage}
            onChange={handleChange}
            placeholder={contact.form.additionalMessagePlaceholder}
            className="w-full px-3.5 py-2.5 rounded-lg border border-lightgrey text-xs focus:ring-2 focus:ring-orange/30 focus:border-orange outline-none"
          ></textarea>
        </div>

        {/* Privacy Consent Checkbox */}
        <div className="flex items-start gap-2 pt-1">
          <input
            type="checkbox"
            id="privacyConsent"
            name="privacyConsent"
            checked={formData.privacyConsent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-lightgrey text-orange focus:ring-orange"
          />
          <label htmlFor="privacyConsent" className="text-[11px] text-secondary leading-normal cursor-pointer">
            {contact.form.privacyConsent}
          </label>
        </div>

        {/* Clarifying Disclaimer */}
        <p className="text-[11px] text-secondary/80 italic bg-lightgrey/40 p-3 rounded-lg border border-lightgrey/60">
          {contact.form.disclaimerNotice}
        </p>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full py-3.5 text-sm uppercase tracking-wider"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{contact.form.submitLoading}</span>
              </>
            ) : (
              <span>{contact.form.submitButton}</span>
            )}
          </button>
        </div>
      </form>

      {/* Alternative Instant Contact Options */}
      <div className="mt-8 pt-6 border-t border-lightgrey flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <span className="text-secondary font-medium">
          {language === 'as' ? 'তৎকালীন সাহায্যৰ প্ৰয়োজন নেকি?' : 'Prefer immediate communication?'}
        </span>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href="tel:+919212218180"
            className="btn-secondary py-2 px-3 text-xs font-semibold flex-1 sm:flex-initial"
          >
            <Phone className="w-3.5 h-3.5 text-orange" />
            <span>+91 92122 18180</span>
          </a>
          <a
            href="https://wa.me/917982824255"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary py-2 px-3 text-xs font-semibold flex-1 sm:flex-initial text-emerald-700 hover:text-emerald-800"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
