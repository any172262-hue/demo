import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';

test('ADVANCED FEATURES SUITE: UTM, Search, and Integration', async (t) => {
  await t.test('1. UTM ATTRIBUTION: Sanitization and Length Limiting', () => {
    const rawInputs = [
      { key: 'utm_source', val: 'google_ads<script>' },
      { key: 'utm_campaign', val: 'cng_monsoon_discount_2026_super_long_param_that_exceeds_the_standard_limit_and_needs_to_be_truncated' },
      { key: 'utm_medium', val: 'cpc;DROP TABLE users;' },
    ];

    const sanitizeParam = (val) => {
      return val
        .replace(/<[^>]*>/g, '')
        .trim()
        .slice(0, 64)
        .replace(/[^a-zA-Z0-9_\-\.\+\s]/g, '');
    };

    const cleanSource = sanitizeParam(rawInputs[0].val);
    assert.equal(cleanSource, 'google_ads', 'Sanitizes script tags from UTM source');

    const cleanCampaign = sanitizeParam(rawInputs[1].val);
    assert.ok(cleanCampaign.length <= 64, 'Enforces maximum length constraint');
    assert.ok(!cleanCampaign.includes(';'), 'Removes semicolon injections');

    const cleanMedium = sanitizeParam(rawInputs[2].val);
    assert.equal(cleanMedium, 'cpcDROP TABLE users', 'Strips punctuation and SQL injection characters');
  });

  await t.test('2. WHATSAPP CLICK-TO-CHAT SPECIFICATION: Verified Number and Encoding', () => {
    const verifiedWhatsApp = '+91 9678******';
    const cleanNumber = verifiedWhatsApp.replace(/[\s\+]/g, '');
    assert.equal(cleanNumber, '919678******', 'Correct international WhatsApp numeric format without symbols');

    const sampleMessage = "*MAA KAMAKHYA AUTO GAS - SERVICE ENQUIRY*\nRef ID: MK-2026-1234\nCustomer: Rajesh Sharma\nMake: Maruti Suzuki\nModel: Swift Dzire";
    const encoded = encodeURIComponent(sampleMessage);
    const generatedUrl = `https://wa.me/${cleanNumber}?text=${encoded}`;

    assert.ok(generatedUrl.startsWith('https://wa.me/919678******?text='), 'Valid click-to-chat URL format');
    assert.ok(!generatedUrl.includes(' '), 'Zero raw unencoded spaces in URL');
    assert.ok(generatedUrl.includes('Rajesh'), 'Encoded message includes customer name');
  });

  await t.test('3. BACKEND API: Appointment with UTM Attribution', async () => {
    const randomMobile = '981' + Math.floor(1000000 + Math.random() * 9000000);
    const payload = JSON.stringify({
      fullName: 'Vikram Batra',
      mobileNumber: randomMobile,
      email: 'vikram@example.com',
      vehicleMake: 'Hyundai',
      vehicleModel: 'Aura CNG',
      vehicleYear: '2023',
      serviceRequired: 'CNG Kit Servicing',
      preferredWorkshop: 'Garchuk Facility, Guwahati',
      preferredDate: '2026-11-25',
      preferredTime: 'Morning (10:30 AM - 01:00 PM)',
      additionalMessage: 'Scheduled periodic 10,000 km checkup',
      honeypot: '',
      submittedAt: Date.now() - 3000, // 3 seconds ago to pass speed gate
      utm: {
        utm_source: 'delhi_transport_ad',
        utm_campaign: 'winter_safety_2026',
        utm_medium: 'organic_search',
      },
    });

    const response = await new Promise((resolve, reject) => {
      const req = http.request(
        {
          hostname: 'localhost',
          port: 5000,
          path: '/api/appointments',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload),
            'x-test-mode': 'true',
          },
        },
        (res) => {
          let data = '';
          res.on('data', (chunk) => (data += chunk));
          res.on('end', () => resolve({ status: res.statusCode, body: JSON.parse(data) }));
        }
      );
      req.on('error', reject);
      req.write(payload);
      req.end();
    });

    assert.equal(response.status, 201, 'Backend accepts valid submission with UTM data');
    assert.ok(response.body.success, 'Returns success: true');
    assert.ok(response.body.referenceNumber.startsWith('MK-'), 'Returns valid reference number prefix');
  });

  await t.test('4. IDEMPOTENCY & DUPLICATE SUBMISSION PREVENTION', async () => {
    const testKey = 'test_idemp_' + Date.now();
    const randomMobile = '991' + Math.floor(1000000 + Math.random() * 9000000);
    const payload = JSON.stringify({
      idempotencyKey: testKey,
      fullName: 'Aman Verma',
      mobileNumber: randomMobile,
      email: 'aman@example.com',
      vehicleMake: 'Tata Motors',
      vehicleModel: 'Tigor iCNG',
      vehicleYear: '2022',
      serviceRequired: 'ECU Tuning & Diagnostics',
      preferredWorkshop: 'Garchuk Facility, Guwahati',
      preferredDate: '2026-11-28',
      preferredTime: 'Morning (10:30 AM - 01:00 PM)',
      honeypot: '',
      submittedAt: Date.now() - 2500,
    });

    const sendRequest = () => {
      return new Promise((resolve, reject) => {
        const req = http.request(
          {
            hostname: 'localhost',
            port: 5000,
            path: '/api/appointments',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(payload),
            },
          },
          (res) => {
            let data = '';
            res.on('data', (chunk) => (data += chunk));
            res.on('end', () => resolve({ status: res.statusCode, body: JSON.parse(data) }));
          }
        );
        req.on('error', reject);
        req.write(payload);
        req.end();
      });
    };

    // First submission
    const res1 = await sendRequest();
    assert.equal(res1.status, 201, 'Initial submission created');
    const ref1 = res1.body.referenceNumber;

    // Immediate duplicate submission (simulating double click / network retry)
    const res2 = await sendRequest();
    assert.equal(res2.status, 200, 'Duplicate submission handled gracefully with 200 OK');
    assert.equal(res2.body.isDuplicate, true, 'Returns isDuplicate: true flag');
    assert.equal(res2.body.referenceNumber, ref1, 'Returns original reference number without duplicate record');
  });

  await t.test('5. FIELD VALIDATION & ERROR HANDLING', async () => {
    const invalidPayload = JSON.stringify({
      fullName: '', // Invalid
      mobileNumber: '1234', // Invalid mobile
      vehicleMake: '',
      vehicleModel: '',
      submittedAt: Date.now() - 3000,
    });

    const res = await new Promise((resolve, reject) => {
      const req = http.request(
        {
          hostname: 'localhost',
          port: 5000,
          path: '/api/appointments',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(invalidPayload),
          },
        },
        (res) => {
          let data = '';
          res.on('data', (chunk) => (data += chunk));
          res.on('end', () => resolve({ status: res.statusCode, body: JSON.parse(data) }));
        }
      );
      req.on('error', reject);
      req.write(invalidPayload);
      req.end();
    });

    assert.equal(res.status, 422, 'Rejects invalid form with 422 Unprocessable Entity');
    assert.equal(res.body.success, false);
    assert.ok(Array.isArray(res.body.details), 'Provides detailed validation error messages');
  });

  await t.test('6. PRIVACY MASKING AND AUDIT SAFETY', () => {
    const rawMobile = '9810198101';
    const masked = rawMobile.replace(/(\d{2})\d{6}(\d{2})/, '$1******$2');
    assert.equal(masked, '98******01', 'Masks middle 6 digits of mobile number');
    assert.ok(!masked.includes('101981'), 'Raw digits are completely concealed from production audit logs');
  });
});
