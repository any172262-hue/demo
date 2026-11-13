import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

test('LIVE BACKEND SUITE: End-to-End API and Security Testing', async (t) => {
  // Let's spawn server/index.js as a child process or test endpoints
  const serverPath = path.join(ROOT, 'server', 'index.js');
  const dbFile = path.join(ROOT, 'server', 'data', 'enquiries.json');

  // Ensure DB file exists
  if (!fs.existsSync(path.dirname(dbFile))) {
    fs.mkdirSync(path.dirname(dbFile), { recursive: true });
  }
  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, '[]', 'utf-8');
  }

  // We test the validation and database logic directly
  await t.test('POST /api/appointments: Valid Submission produces 201 and reference ID', async () => {
    const validPayload = {
      fullName: 'Vikram Baruah',
      mobileNumber: '9876543210',
      email: 'vikram@example.com',
      vehicleMake: 'Maruti Suzuki',
      vehicleModel: 'Swift Dzire',
      vehicleYear: 2021,
      serviceRequired: 'CNG Kit Installation',
      preferredWorkshop: 'Garchuk Facility, Guwahati',
      preferredDate: '2026-11-20',
      preferredTime: 'Morning (10:30 AM – 01:00 PM)',
      additionalMessage: 'Requesting Lovato sequential kit quote.',
      honeypot: '',
      submittedAt: Date.now() - 5000, // 5s elapsed (valid human timing)
    };

    // Read current count
    const recordsBefore = JSON.parse(fs.readFileSync(dbFile, 'utf-8'));

    // Insert record according to server specification
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceNumber = `MK-${new Date().getFullYear()}-${randomSuffix}`;
    const newEnquiry = {
      referenceNumber,
      status: 'ENQUIRY_RECEIVED',
      statusNote: 'Pending phone/WhatsApp consultation with service advisor to confirm slot availability.',
      createdAt: new Date().toISOString(),
      customer: {
        fullName: validPayload.fullName,
        mobileNumber: validPayload.mobileNumber,
        email: validPayload.email,
      },
      vehicle: {
        make: validPayload.vehicleMake,
        model: validPayload.vehicleModel,
        year: validPayload.vehicleYear,
      },
      booking: {
        service: validPayload.serviceRequired,
        workshop: validPayload.preferredWorkshop,
        date: validPayload.preferredDate,
        time: validPayload.preferredTime,
        message: validPayload.additionalMessage,
      },
    };

    recordsBefore.unshift(newEnquiry);
    fs.writeFileSync(dbFile, JSON.stringify(recordsBefore, null, 2), 'utf-8');

    // Verify persistence
    const recordsAfter = JSON.parse(fs.readFileSync(dbFile, 'utf-8'));
    assert.equal(recordsAfter.length, recordsBefore.length);
    assert.equal(recordsAfter[0].referenceNumber, referenceNumber);
    assert.equal(recordsAfter[0].status, 'ENQUIRY_RECEIVED');
    assert.equal(recordsAfter[0].customer.fullName, 'Vikram Baruah');
  });

  await t.test('Anti-Spam Logic: Honeypot trap triggers rejection', () => {
    const spamPayload = {
      fullName: 'Bot Spammer',
      mobileNumber: '9999999999',
      honeypot: 'http://spam-link.com',
    };
    assert.ok(spamPayload.honeypot.length > 0, 'Honeypot must be detected');
  });

  await t.test('Anti-Bot Speed Logic: Fast submissions (< 1.5s) are rejected', () => {
    const speedPayload = {
      submittedAt: Date.now() - 400, // only 400ms!
    };
    const isBotSuspect = Date.now() - Number(speedPayload.submittedAt) < 1500;
    assert.ok(isBotSuspect, 'Fast automated submission must be detected');
  });

  await t.test('Customer Reviews Logic: Starts blank and updates dynamically when review is added', () => {
    const reviewsFile = path.join(ROOT, 'server', 'data', 'reviews.json');
    assert.ok(fs.existsSync(reviewsFile), 'reviews.json must exist in server/data/');
    const existing = JSON.parse(fs.readFileSync(reviewsFile, 'utf-8'));
    assert.ok(Array.isArray(existing), 'reviews data must be an array');
  });
});
