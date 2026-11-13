import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Calendar,
  CheckCircle2,
  X,
  Edit2,
  MessageSquare,
  Car,
  User,
  Phone,
  Mail,
  MapPin,
  Clock,
  FileText,
  Tag,
  Loader2,
} from 'lucide-react';
import { UtmData, formatUtmSummary } from '../utils/utm';

export interface AppointmentSummaryData {
  fullName: string;
  mobileNumber: string;
  email?: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  serviceRequired: string;
  preferredWorkshop: string;
  preferredDate: string;
  preferredTime: string;
  additionalMessage?: string;
  utm?: UtmData | null;
}

interface AppointmentModalProps {
  isOpen: boolean;
  data: AppointmentSummaryData | null;
  isSubmitting: boolean;
  onEdit: () => void;
  onConfirm: () => void;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  data,
  isSubmitting,
  onEdit,
  onConfirm,
  onClose,
}) => {
  const { language } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);
  const confirmBtnRef = useRef<HTMLButtonElement>(null);

  // Focus trap, Escape listener, and body modal-open class
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      setTimeout(() => {
        confirmBtnRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && !isSubmitting) {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.classList.remove('modal-open');
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen, isSubmitting, onClose]);

  if (!isOpen || !data) return null;

  const utmSummary = formatUtmSummary(data.utm || null);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-review-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoaldark/70 backdrop-blur-sm animate-fade-in"
      onClick={() => {
        if (!isSubmitting) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-xl bg-purewhite dark:bg-darksurface rounded-2xl shadow-2xl border border-lightgrey dark:border-darkborder overflow-hidden flex flex-col max-h-[90vh] animate-slide-up transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-lightgrey dark:border-darkborder bg-offwhite/50 dark:bg-darkbg/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-light text-orange flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3
                id="modal-review-title"
                className="font-heading font-bold text-sm sm:text-base text-charcoal dark:text-darktext"
              >
                {language === 'as' ? 'এপইণ্টমেণ্ট তথ্য পৰ্যালোচনা' : 'Review Appointment Details'}
              </h3>
              <p className="text-[11px] text-secondary dark:text-darkmuted">
                {language === 'as'
                  ? 'হোৱাটছএপত প্ৰেৰণ কৰাৰ পূৰ্বে তথ্যসমূহ পৰীক্ষা কৰক'
                  : 'Verify your vehicle and booking details before continuing to WhatsApp'}
              </p>
            </div>
          </div>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={onClose}
            className="p-1 rounded-lg text-secondary dark:text-darkmuted hover:text-charcoal dark:hover:text-darktext transition-colors disabled:opacity-40"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Structured Details */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs">
          {/* Customer Details Box */}
          <div className="bg-offwhite/60 dark:bg-darkbg/60 p-4 rounded-xl border border-lightgrey dark:border-darkborder space-y-2.5">
            <div className="flex items-center gap-1.5 text-orange font-bold uppercase tracking-wider text-[11px]">
              <User className="w-3.5 h-3.5" />
              <span>{language === 'as' ? 'গ্ৰাহকৰ তথ্য' : 'Customer Information'}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-charcoal dark:text-darktext">
              <div>
                <span className="text-secondary dark:text-darkmuted block text-[11px]">
                  {language === 'as' ? 'নাম' : 'Full Name'}:
                </span>
                <span className="font-semibold">{data.fullName}</span>
              </div>
              <div>
                <span className="text-secondary dark:text-darkmuted block text-[11px]">
                  {language === 'as' ? 'ম’বাইল নম্বৰ' : 'Mobile Number'}:
                </span>
                <span className="font-semibold">{data.mobileNumber}</span>
              </div>
              {data.email && (
                <div className="sm:col-span-2">
                  <span className="text-secondary dark:text-darkmuted block text-[11px]">
                    {language === 'as' ? 'ইমেইল' : 'Email'}:
                  </span>
                  <span className="font-semibold">{data.email}</span>
                </div>
              )}
            </div>
          </div>

          {/* Vehicle Details Box */}
          <div className="bg-offwhite/60 dark:bg-darkbg/60 p-4 rounded-xl border border-lightgrey dark:border-darkborder space-y-2.5">
            <div className="flex items-center gap-1.5 text-orange font-bold uppercase tracking-wider text-[11px]">
              <Car className="w-3.5 h-3.5" />
              <span>{language === 'as' ? 'বাহনৰ তথ্য' : 'Vehicle Information'}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-charcoal dark:text-darktext">
              <div>
                <span className="text-secondary dark:text-darkmuted block text-[11px]">
                  {language === 'as' ? 'নিৰ্মাতা' : 'Make'}:
                </span>
                <span className="font-semibold">{data.vehicleMake}</span>
              </div>
              <div>
                <span className="text-secondary dark:text-darkmuted block text-[11px]">
                  {language === 'as' ? 'মডেল' : 'Model'}:
                </span>
                <span className="font-semibold">{data.vehicleModel}</span>
              </div>
              <div>
                <span className="text-secondary dark:text-darkmuted block text-[11px]">
                  {language === 'as' ? 'নিৰ্মাণ বৰ্ষ' : 'Manufacturing Year'}:
                </span>
                <span className="font-semibold">{data.vehicleYear}</span>
              </div>
            </div>
          </div>

          {/* Appointment Schedule Box */}
          <div className="bg-offwhite/60 dark:bg-darkbg/60 p-4 rounded-xl border border-lightgrey dark:border-darkborder space-y-2.5">
            <div className="flex items-center gap-1.5 text-orange font-bold uppercase tracking-wider text-[11px]">
              <Clock className="w-3.5 h-3.5" />
              <span>{language === 'as' ? 'সেৱা আৰু সময়সূচী' : 'Service & Schedule'}</span>
            </div>
            <div className="space-y-2 text-charcoal dark:text-darktext">
              <div>
                <span className="text-secondary dark:text-darkmuted block text-[11px]">
                  {language === 'as' ? 'প্ৰয়োজনীয় সেৱা' : 'Service Requested'}:
                </span>
                <span className="font-semibold text-orange">{data.serviceRequired}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <div>
                  <span className="text-secondary dark:text-darkmuted block text-[11px]">
                    {language === 'as' ? 'কৰ্মশালা কেন্দ্ৰ' : 'Preferred Workshop'}:
                  </span>
                  <span className="font-semibold">{data.preferredWorkshop}</span>
                </div>
                <div>
                  <span className="text-secondary dark:text-darkmuted block text-[11px]">
                    {language === 'as' ? 'নিৰ্ধাৰিত তাৰিখ আৰু সময়' : 'Date & Time'}:
                  </span>
                  <span className="font-semibold">
                    {data.preferredDate} ({data.preferredTime})
                  </span>
                </div>
              </div>

              {data.additionalMessage && (
                <div className="pt-1">
                  <span className="text-secondary dark:text-darkmuted block text-[11px]">
                    {language === 'as' ? 'অতিৰিক্ত বাৰ্তা' : 'Notes / Symptoms'}:
                  </span>
                  <p className="p-2 rounded bg-purewhite dark:bg-darksurface border border-lightgrey dark:border-darkborder text-[11px] leading-relaxed break-words">
                    {data.additionalMessage}
                  </p>
                </div>
              )}

              {utmSummary && (
                <div className="pt-1 flex items-center gap-1.5 text-[10px] text-secondary dark:text-darkmuted font-mono">
                  <Tag className="w-3 h-3 text-secondary" />
                  <span>Campaign: {utmSummary}</span>
                </div>
              )}
            </div>
          </div>

          <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-xl text-[11px] text-emerald-800 dark:text-emerald-300 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {language === 'as'
                  ? 'গ্ৰাহকৰ সন্মতি আৰু হোৱাটছএপ বাৰ্তা নীতি'
                  : 'Customer Consent & WhatsApp Privacy Notice'}
              </span>
            </div>
            <p className="leading-relaxed">
              {language === 'as'
                ? 'ওপৰত প্ৰদৰ্শিত সকলো তথ্য কাৰ্ছ এনাৰ্জী কো.-ৰ চৰকাৰী হোৱাটছএপ নম্বৰলৈ (+91 79828 24255) প্ৰেৰণ কৰা বাৰ্তাত অন্তৰ্ভুক্ত হ’ব। "নিশ্চিত কৰি হোৱাটছএপলৈ যাওক"ত ক্লিক কৰি আপুনি এই তথ্যসমূহ হোৱাটছএপৰ জৰিয়তে আমালৈ প্ৰেৰণ কৰিবলৈ স্পষ্ট সন্মতি প্ৰদান কৰিছে। বাৰ্তাখন হোৱাটছএপত খোল খাব য’ত আপুনি নিজহাতে বাৰ্তাটো পৰীক্ষা কৰি "Send" টিপিব লাগিব। আমি কেতিয়াও আপোনাৰ অনুমতি অবিহনে স্বয়ংক্ৰিয়ভাৱে বাৰ্তা প্ৰেৰণ নকৰো।'
                : 'All information displayed above will be included in your WhatsApp enquiry message to official workshop number +91 79828 24255. By clicking "Confirm & Continue to WhatsApp", you explicitly consent to sharing these details. The message will open in WhatsApp where you must manually review and press Send. We never send messages automatically.'}
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 border-t border-lightgrey dark:border-darkborder bg-offwhite/50 dark:bg-darkbg/50 flex flex-col sm:flex-row items-center justify-end gap-2.5">
          <button
            type="button"
            disabled={isSubmitting}
            onClick={onEdit}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-bordergrey dark:border-darkborder text-charcoal dark:text-darktext font-heading font-bold text-xs hover:bg-lightgrey dark:hover:bg-darkcard transition-colors flex items-center justify-center gap-1.5 disabled:opacity-40"
          >
            <Edit2 className="w-3.5 h-3.5" />
            <span>{language === 'as' ? 'সংশোধন কৰক' : 'Edit Details'}</span>
          </button>

          <button
            ref={confirmBtnRef}
            type="button"
            disabled={isSubmitting}
            onClick={onConfirm}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-purewhite font-heading font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{language === 'as' ? 'প্ৰেৰণ কৰি থকা হৈছে...' : 'Processing...'}</span>
              </>
            ) : (
              <>
                <MessageSquare className="w-4 h-4" />
                <span>
                  {language === 'as'
                    ? 'নিশ্চিত কৰি হোৱাটছএপলৈ যাওক'
                    : 'Confirm & Continue to WhatsApp'}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
