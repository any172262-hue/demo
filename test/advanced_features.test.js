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
    const verifiedWhatsApp = '+91 79828 24255';
    const cleanNumber = verifiedWhatsApp.replace(/[\s\+]/g, '');
    assert.equal(cleanNumber, '917982824255', 'Correct international WhatsApp numeric format without symbols');

    const sampleMessage = "*CAR'S ENERGY CO. - SERVICE ENQUIRY*\nRef ID: CE-2026-1234\nCustomer: Rajesh Sharma\nMake: Maruti Suzuki\nModel: Swift Dzire";
    const encoded = encodeURIComponent(sampleMessage);
    const generatedUrl = `https://wa.me/${cleanNumber}?text=${encoded}`;

    assert.ok(generatedUrl.startsWith('https://wa.me/917982824255?text='), 'Valid click-to-chat URL format');
    assert.ok(!generatedUrl.includes(' '), 'Zero raw unencoded spaces in URL');
    assert.ok(generatedUrl.includes('Rajesh'), 'Encoded message includes customer name');
  });

  await t.test('3. BACKEND API: Appointment with UTM Attribution', async () => {
    const payload = JSON.stringify({
      fullName: 'Vikram Batra',
      mobileNumber: '9810198101',
      email: 'vikram@example.com',
      vehicleMake: 'Hyundai',
      vehicleModel: 'Aura CNG',
      vehicleYear: '2023',
      serviceRequired: 'CNG Kit Servicing',
      preferredWorkshop: 'Mundka Facility (Opp. Metro Pillar 536)',
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
    assert.ok(response.body.referenceNumber.startsWith('CE-'), 'Returns valid reference number prefix');
  });
});
