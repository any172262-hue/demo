/**
 * Privacy-Conscious UTM Attribution Utility
 * Captures, sanitizes, and stores campaign tracking parameters.
 * Does not capture or store personal identification data.
 */

export interface UtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  capturedAt?: string;
}

const STORAGE_KEY = 'cars_utm_attribution';
const MAX_PARAM_LENGTH = 64;

// Strip tags and allow alphanumeric, underscores, hyphens, periods, plus signs and spaces
const sanitizeParam = (val: string): string => {
  return val
    .replace(/<[^>]*>/g, '')
    .trim()
    .slice(0, MAX_PARAM_LENGTH)
    .replace(/[^a-zA-Z0-9_\-\.\+\s]/g, '');
};

export const captureUtmParameters = (): UtmData | null => {
  if (typeof window === 'undefined') return null;

  try {
    const searchParams = new URLSearchParams(window.location.search);
    const keys: (keyof Omit<UtmData, 'capturedAt'>)[] = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
    ];

    let hasUtm = false;
    const utmData: UtmData = {};

    keys.forEach((key) => {
      const rawValue = searchParams.get(key);
      if (rawValue) {
        const cleanValue = sanitizeParam(rawValue);
        if (cleanValue.length > 0) {
          utmData[key] = cleanValue;
          hasUtm = true;
        }
      }
    });

    if (hasUtm) {
      utmData.capturedAt = new Date().toISOString();
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utmData));
      return utmData;
    }
  } catch {
    // SessionStorage unavailable or restricted
  }

  return getStoredUtm();
};

export const getStoredUtm = (): UtmData | null => {
  if (typeof window === 'undefined') return null;

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed as UtmData;
  } catch {
    return null;
  }
};

export const clearStoredUtm = (): void => {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore
  }
};

/**
 * Returns a clean summary string for inclusion in appointment notes or WhatsApp
 * without leaking sensitive data or tracking parameters into URLs.
 */
export const formatUtmSummary = (utm: UtmData | null): string => {
  if (!utm) return '';
  const parts: string[] = [];
  if (utm.utm_source) parts.push(`Source: ${utm.utm_source}`);
  if (utm.utm_campaign) parts.push(`Campaign: ${utm.utm_campaign}`);
  if (utm.utm_medium) parts.push(`Medium: ${utm.utm_medium}`);
  return parts.length > 0 ? parts.join(' | ') : '';
};
