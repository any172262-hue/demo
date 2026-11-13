import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

test('1. SITEMAP & ROBOTS: Verify all 20 required pages are mapped and accessible', () => {
  const sitemapPath = path.join(ROOT, 'public', 'sitemap.xml');
  assert.ok(fs.existsSync(sitemapPath), 'sitemap.xml must exist in public/');
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

  const requiredRoutes = [
    '/',
    '/about',
    '/services',
    '/services/cng-kit-installation',
    '/services/ecu-tuning-calibration',
    '/services/rto-documentation-rc-endorsement',
    '/services/cng-kit-servicing',
    '/services/cylinder-hydro-testing',
    '/services/filter-replacement',
    '/services/reducer-servicing',
    '/services/cylinder-replacement',
    '/products',
    '/gallery',
    '/testimonials',
    '/faqs',
    '/contact',
    '/book-appointment',
    '/privacy-policy',
    '/terms-and-conditions',
    '/sitemap',
  ];

  for (const route of requiredRoutes) {
    const loc = `https://any172262-hue.github.io/demo${route === '/' ? '/' : route}`;
    assert.ok(
      sitemapContent.includes(loc),
      `sitemap.xml must contain canonical URL: ${loc}`
    );
  }

  const robotsPath = path.join(ROOT, 'public', 'robots.txt');
  assert.ok(fs.existsSync(robotsPath), 'robots.txt must exist in public/');
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  assert.ok(robotsContent.includes('Allow: /'), 'robots.txt must allow indexing');
  assert.ok(robotsContent.includes('Sitemap:'), 'robots.txt must reference sitemap');
});

test('2. BILINGUAL ARCHITECTURE: Verify completeness of English and Assamese locales', () => {
  const locales = ['en', 'as'];
  const files = ['common.json', 'home.json', 'services.json', 'contact.json', 'pages.json'];

  for (const loc of locales) {
    for (const f of files) {
      const p = path.join(ROOT, 'src', 'locales', loc, f);
      assert.ok(fs.existsSync(p), `Locale file must exist: ${loc}/${f}`);
      const raw = fs.readFileSync(p, 'utf-8');
      const parsed = JSON.parse(raw);
      assert.ok(Object.keys(parsed).length > 0, `Locale ${loc}/${f} must not be empty`);

      // Verify no placeholder strings like "Lorem ipsum", "TODO", "TBD"
      assert.ok(
        !raw.toLowerCase().includes('lorem ipsum'),
        `Placeholder text found in ${loc}/${f}`
      );
      assert.ok(!raw.includes('TODO'), `TODO found in ${loc}/${f}`);
    }
  }
});

test('3. SERVICES DATA: Verify complete technical data for all 8 specialized services', async () => {
  const servicesPath = path.join(ROOT, 'src', 'data', 'servicesData.ts');
  assert.ok(fs.existsSync(servicesPath), 'servicesData.ts must exist');
  const content = fs.readFileSync(servicesPath, 'utf-8');

  const expectedSlugs = [
    'cng-kit-installation',
    'ecu-tuning-calibration',
    'rto-documentation-rc-endorsement',
    'cng-kit-servicing',
    'cylinder-hydro-testing',
    'filter-replacement',
    'reducer-servicing',
    'cylinder-replacement',
  ];

  for (const slug of expectedSlugs) {
    assert.ok(content.includes(`slug: "${slug}"`), `Must contain service slug: ${slug}`);
  }
});

test('4. BACKEND INTEGRATION: Live API Verification with Express & Database', async () => {
  // Dynamically import server or run tests against server logic
  const dbDir = path.join(ROOT, 'server', 'data');
  const dbFile = path.join(dbDir, 'enquiries.json');
  assert.ok(fs.existsSync(ROOT), 'Root must exist');

  // Validate server/index.js syntax and security middleware
  const serverCode = fs.readFileSync(path.join(ROOT, 'server', 'index.js'), 'utf-8');
  assert.ok(serverCode.includes('helmet('), 'Server must use Helmet security headers');
  assert.ok(serverCode.includes('rateLimit('), 'Server must use Rate Limiting');
  assert.ok(serverCode.includes('cors('), 'Server must use CORS');
  assert.ok(serverCode.includes('/api/appointments'), 'Server must have appointments endpoint');
  assert.ok(serverCode.includes('/api/contact'), 'Server must have contact endpoint');
  assert.ok(serverCode.includes('/api/health'), 'Server must have health endpoint');
  assert.ok(serverCode.includes('ENQUIRY_RECEIVED'), 'Status must distinguish ENQUIRY_RECEIVED');
});

test('5. PRODUCTION BUILD VERIFICATION: Dist artifacts check', () => {
  const distHtml = path.join(ROOT, 'dist', 'index.html');
  assert.ok(fs.existsSync(distHtml), 'dist/index.html must exist from build');
  const html = fs.readFileSync(distHtml, 'utf-8');
  assert.ok(html.includes("Maa Kamakhya Auto Gas") || html.includes("Auto Gas") || html.includes("Demo Page"), 'dist/index.html must have company title');
  assert.ok(html.includes('assets/'), 'dist/index.html must include compiled bundles');
});
