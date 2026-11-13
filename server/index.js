import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Data directory for persistence
const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'enquiries.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// Helpers for safe atomic JSON database storage
function readDatabase() {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('[DB] Error reading database:', err.message);
    return [];
  }
}

function writeDatabase(records) {
  try {
    const tempFile = `${DB_FILE}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(records, null, 2), 'utf-8');
    fs.renameSync(tempFile, DB_FILE);
    return true;
  } catch (err) {
    console.error('[DB] Error writing database:', err.message);
    return false;
  }
}

// Security Headers with Helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        imgSrc: ["'self'", 'data:', 'https://images.unsplash.com'],
        connectSrc: ["'self'"],
        frameSrc: ["'self'", 'https://www.youtube.com', 'https://www.google.com'],
      },
    },
    crossOriginEmbedderPolicy: false,
  })
);

// Strict CORS
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5000',
  'https://carsenergy.co.in'
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (like mobile apps, curl) or allowed origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Blocked by CORS policy'));
      }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Body parser with payload limit
app.use(express.json({ limit: '20kb' }));

// Global Rate Limiter: max 100 requests per 15 minutes per IP
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Too many requests from this IP, please try again later.' },
});
app.use('/api', globalLimiter);

// Specific stricter rate limiter for form submissions: max 5 bookings per 10 minutes per IP
const formLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Multiple enquiries received. Please wait before submitting another request or contact our workshop directly by phone.' },
});

// Sanitization utility
function sanitizeString(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>'"&;]/g, '').trim();
}

// Phone validator (Indian 10-digit mobile)
function isValidIndianMobile(phone) {
  const cleaned = phone.replace(/[\s\-\+]/g, '');
  return /^(?:91)?[6-9]\d{9}$/.test(cleaned);
}

// Email validator
function isValidEmail(email) {
  if (!email) return true; // Optional field
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: "Car's Energy Co. Core API",
    version: '1.0.0',
    rfc: 'RFC-261',
  });
});

// Appointment Enquiry Endpoint
app.post('/api/appointments', formLimiter, (req, res) => {
  try {
    const {
      fullName,
      mobileNumber,
      email,
      vehicleMake,
      vehicleModel,
      vehicleYear,
      serviceRequired,
      preferredWorkshop,
      preferredDate,
      preferredTime,
      additionalMessage,
      honeypot, // Spam trap
      submittedAt, // Timestamp for speed-bot detection
      utm, // Privacy-conscious campaign attribution
    } = req.body;

    // 1. Spam Protection: Honeypot check
    if (honeypot && honeypot.trim().length > 0) {
      console.warn('[SECURITY] Bot trap triggered by honeypot submission.');
      return res.status(400).json({ success: false, error: 'Invalid submission signature.' });
    }

    // 2. Spam Protection: Speed check (must take > 1.5 seconds to fill out legitimately)
    if (submittedAt && Date.now() - Number(submittedAt) < 1500) {
      console.warn('[SECURITY] Form submitted abnormally quickly (bot suspect).');
      return res.status(400).json({ success: false, error: 'Submission rejected due to automated behavior.' });
    }

    // 3. Server-side Field Validations
    const errors = [];

    const cleanFullName = sanitizeString(fullName);
    if (!cleanFullName || cleanFullName.length < 2) {
      errors.push('Full name must be at least 2 characters.');
    }

    if (!mobileNumber || !isValidIndianMobile(mobileNumber)) {
      errors.push('A valid 10-digit Indian mobile number is required.');
    }

    const cleanEmail = email ? sanitizeString(email) : '';
    if (cleanEmail && !isValidEmail(cleanEmail)) {
      errors.push('The email address provided is invalid.');
    }

    const cleanMake = sanitizeString(vehicleMake);
    if (!cleanMake) errors.push('Vehicle manufacturer is required.');

    const cleanModel = sanitizeString(vehicleModel);
    if (!cleanModel) errors.push('Vehicle model is required.');

    const numYear = parseInt(vehicleYear, 10);
    const currentYear = new Date().getFullYear();
    if (isNaN(numYear) || numYear < 1995 || numYear > currentYear + 1) {
      errors.push(`Manufacturing year must be between 1995 and ${currentYear + 1}.`);
    }

    const cleanService = sanitizeString(serviceRequired);
    if (!cleanService) errors.push('Service required selection is mandatory.');

    const cleanWorkshop = sanitizeString(preferredWorkshop);
    if (!cleanWorkshop) errors.push('Preferred workshop location is required.');

    if (!preferredDate) errors.push('Preferred date is required.');
    if (!preferredTime) errors.push('Preferred time window is required.');

    if (errors.length > 0) {
      return res.status(422).json({
        success: false,
        error: 'Validation failed',
        details: errors,
      });
    }

    // 4. Generate Unique Official Reference ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceNumber = `CE-${new Date().getFullYear()}-${randomSuffix}`;

    // 5. Build Sanitized Record
    const newEnquiry = {
      referenceNumber,
      status: 'ENQUIRY_RECEIVED', // Clearly distinct from confirmed
      statusNote: 'Pending phone/WhatsApp consultation with service advisor to confirm slot availability.',
      createdAt: new Date().toISOString(),
      customer: {
        fullName: cleanFullName,
        mobileNumber: mobileNumber.replace(/[\s\-]/g, ''),
        email: cleanEmail || null,
      },
      vehicle: {
        make: cleanMake,
        model: cleanModel,
        year: numYear,
      },
      booking: {
        service: cleanService,
        workshop: cleanWorkshop,
        date: preferredDate,
        time: sanitizeString(preferredTime),
        message: sanitizeString(additionalMessage),
      },
      attribution: utm && typeof utm === 'object' ? {
        source: sanitizeString(utm.utm_source || ''),
        medium: sanitizeString(utm.utm_medium || ''),
        campaign: sanitizeString(utm.utm_campaign || ''),
        term: sanitizeString(utm.utm_term || ''),
        content: sanitizeString(utm.utm_content || ''),
      } : null,
    };

    // 6. Persist to Database
    const records = readDatabase();
    records.unshift(newEnquiry);
    const saved = writeDatabase(records);

    if (!saved) {
      return res.status(500).json({
        success: false,
        error: 'Internal storage error. Please call the workshop directly.',
      });
    }

    // Privacy-conscious audit log (masking middle digits of phone)
    const maskedPhone = mobileNumber.replace(/(\d{2})\d{6}(\d{2})/, '$1******$2');
    console.log(`[APPOINTMENT] ${referenceNumber} logged for ${cleanMake} ${cleanModel} (Phone: ${maskedPhone}) at ${cleanWorkshop}.`);

    // 7. Return Verified Response
    return res.status(201).json({
      success: true,
      referenceNumber,
      status: 'ENQUIRY_RECEIVED',
      message: 'Your appointment enquiry has been successfully logged. Our technical advisor will review your vehicle requirements and call or WhatsApp you to confirm your exact appointment slot.',
      workshopContact: cleanWorkshop.includes('Paschim')
        ? { name: 'Paschim Vihar Center', phone: '+91 92122 18180' }
        : { name: 'Mundka Primary Center', phone: '+91 92122 18180', whatsapp: '+91 79828 24255' },
    });
  } catch (err) {
    console.error('[APPOINTMENT_ERROR]', err);
    return res.status(500).json({
      success: false,
      error: 'An unexpected server error occurred. Please contact our workshop by phone.',
    });
  }
});

// Get In Touch & General Contact Enquiry Endpoint
app.post('/api/contact', formLimiter, (req, res) => {
  try {
    const {
      name,
      fullName,
      carModel,
      vehicleModel,
      mobile,
      mobileNumber,
      phoneOrEmail,
      address,
      message,
      subject,
      honeypot,
      submittedAt,
    } = req.body;

    // 1. Spam check: Honeypot trap
    if (honeypot && honeypot.trim().length > 0) {
      console.warn('[SECURITY] Contact honeypot trap triggered.');
      return res.status(400).json({ success: false, error: 'Invalid submission' });
    }

    // 2. Anti-bot speed check (must take > 1.2s to fill out legitimately)
    if (submittedAt && Date.now() - Number(submittedAt) < 1200) {
      console.warn('[SECURITY] Contact submitted abnormally quickly.');
      return res.status(400).json({ success: false, error: 'Submission rejected due to automated behavior.' });
    }

    const cleanName = sanitizeString(name || fullName);
    const cleanCarModel = sanitizeString(carModel || vehicleModel);
    const rawMobile = mobile || mobileNumber || phoneOrEmail;
    const cleanAddress = sanitizeString(address);
    const cleanMsg = sanitizeString(message || subject);

    const errors = [];
    if (!cleanName || cleanName.length < 2) {
      errors.push('Name must be at least 2 characters.');
    }

    if (!cleanCarModel || cleanCarModel.length < 2) {
      errors.push('Please enter which car model you own (e.g. Maruti Dzire, WagonR, i10, City).');
    }

    if (!rawMobile || !isValidIndianMobile(rawMobile)) {
      errors.push('A valid 10-digit Indian mobile number is required.');
    }

    if (errors.length > 0) {
      return res.status(422).json({
        success: false,
        error: errors[0],
        details: errors,
      });
    }

    const cleanMobile = rawMobile.replace(/[\s\-\+]/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceNumber = `CE-TOUCH-${new Date().getFullYear()}-${randomSuffix}`;

    const newEnquiry = {
      referenceNumber,
      type: 'GET_IN_TOUCH',
      status: 'ENQUIRY_RECEIVED',
      createdAt: new Date().toISOString(),
      customer: {
        name: cleanName,
        carModel: cleanCarModel,
        mobile: cleanMobile,
        address: cleanAddress || 'Delhi-NCR',
      },
      message: cleanMsg || `Enquiry for ${cleanCarModel}`,
    };

    const records = readDatabase();
    records.unshift(newEnquiry);
    writeDatabase(records);

    const maskedPhone = cleanMobile.replace(/(\d{2})\d{6}(\d{2})/, '$1******$2');
    console.log(`[GET_IN_TOUCH] ${referenceNumber} logged for ${cleanName} - Car: ${cleanCarModel} (Mobile: ${maskedPhone})`);

    return res.status(201).json({
      success: true,
      referenceNumber,
      message: `Thank you, ${cleanName}! We have received your enquiry for ${cleanCarModel}. Our service advisor will call or WhatsApp you at +91 ${cleanMobile} shortly.`,
    });
  } catch (err) {
    console.error('[CONTACT_ERROR]', err);
    return res.status(500).json({ success: false, error: 'Server error occurred. Please call our workshop directly.' });
  }
});

// Serve frontend build if dist directory exists
const DIST_PATH = path.join(__dirname, '../dist');
if (fs.existsSync(DIST_PATH)) {
  app.use(express.static(DIST_PATH));
  app.get('*', (req, res) => {
    res.sendFile(path.join(DIST_PATH, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`[SERVER] Car's Energy Co. API running on port ${PORT}`);
  console.log(`[SERVER] Environment: ${process.env.NODE_ENV || 'development'}`);
});
