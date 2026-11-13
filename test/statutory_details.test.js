import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

test('STATUTORY DETAILS SUITE: Verification of Owner-Provided Reference Fields', async (t) => {
  const dataPath = path.join(ROOT, 'src', 'data', 'statutoryData.ts');
  const compPath = path.join(ROOT, 'src', 'components', 'BusinessStatutorySection.tsx');

  assert.ok(fs.existsSync(dataPath), 'statutoryData.ts must exist');
  assert.ok(fs.existsSync(compPath), 'BusinessStatutorySection.tsx must exist');

  const content = fs.readFileSync(dataPath, 'utf-8');
  const compContent = fs.readFileSync(compPath, 'utf-8');

  await t.test('1. Section Heading: "Business Statutory Details" & Assamese parity', () => {
    assert.ok(content.includes("sectionTitleEn: 'Business Statutory Details'"), 'Must contain exact English section heading');
    assert.ok(content.includes("sectionTitleAs: 'ব্যৱসায়িক বিধিবদ্ধ তথ্য'"), 'Must contain natural Assamese section heading');
    assert.ok(compContent.includes('Business Statutory Details') || compContent.includes('statutoryData.sectionTitleEn'));
  });

  await t.test('2. Exact Business Information Fields & Masked GSTIN Preservation', () => {
    // Legal Name
    assert.ok(content.includes("valueEn: 'Maa Kamakhya Auto Gas'"), 'Legal name must be Maa Kamakhya Auto Gas');
    assert.ok(content.includes("valueAs: 'মা কামাখ্যা অটো গেছ'"), 'Legal name in Assamese');

    // Year of Establishment
    assert.ok(content.includes("valueEn: '2022'"), 'Establishment year must be 2022');
    assert.ok(content.includes("valueAs: '২০২২'"), 'Establishment year in Assamese');

    // No of Employee
    assert.ok(content.includes("valueEn: 'Less than 10'"), 'Employee count must be Less than 10');
    assert.ok(content.includes("valueAs: '১০ জনতকৈ কম'"), 'Employee count in Assamese');

    // Turn Over
    assert.ok(content.includes("valueEn: '51 Lakh - 1 Crore'"), 'Turnover must be 51 Lakh - 1 Crore');
    assert.ok(content.includes("valueAs: '৫১ লাখ - ১ কোটি'"), 'Turnover in Assamese');

    // GSTIN - Preserved exactly as masked
    assert.ok(content.includes("valueEn: '18**********1ZS'"), 'Masked GSTIN 18**********1ZS must be preserved exactly');
    assert.ok(content.includes("valueAs: '18**********1ZS'"), 'Masked GSTIN must not be altered');
    assert.ok(content.includes("isMasked: true"), 'Flagged as masked field');

    // Mode of Payment
    assert.ok(
      content.includes("EMI Financing, Visa / Master Card / Rupay, UPI, Net Banking, Cash"),
      'Mode of payment must contain all specified payment methods'
    );
  });

  await t.test('3. Three Specialisation Subsections & Required Items', () => {
    // Services subsection
    assert.ok(content.includes("titleEn: 'Services'"), 'Must have Services subsection');
    assert.ok(content.includes("nameEn: 'Company Authorised Dealer'"), 'Must include Company Authorised Dealer');
    assert.ok(content.includes("nameEn: 'Same Day Delivery'"), 'Must include Same Day Delivery');

    // Mechanical Repairs subsection
    assert.ok(content.includes("titleEn: 'Mechanical Repairs'"), 'Must have Mechanical Repairs subsection');
    assert.ok(content.includes("nameEn: 'CNG Installation'"), 'Must include CNG Installation');
    assert.ok(content.includes("nameEn: 'Conversion Kit Repair'"), 'Must include Conversion Kit Repair');

    // Vehicle Specialisation subsection
    assert.ok(content.includes("titleEn: 'Vehicle Specialisation'"), 'Must have Vehicle Specialisation subsection');
    assert.ok(content.includes("nameEn: 'Auto'"), 'Must include Auto');
    assert.ok(content.includes("nameEn: 'Car'"), 'Must include Car');
  });

  await t.test('4. Responsive Layout & 3-Column Architecture', () => {
    // Check 3-column classes in component
    assert.ok(compContent.includes('lg:grid-cols-3'), 'Must implement 3-column layout on desktop');
    assert.ok(compContent.includes('grid-cols-1'), 'Must implement stacked layout on mobile');
    assert.ok(compContent.includes('break-words'), 'Must allow long payment text to wrap naturally');
  });

  await t.test('5. Owner Verification Safeguards', () => {
    assert.ok(content.includes("verificationStatus: 'Needs owner confirmation'"), 'Must flag unconfirmed items for owner sign-off');
    const verifDoc = path.join(ROOT, 'docs', 'BUSINESS_INFORMATION_VERIFICATION.md');
    assert.ok(fs.existsSync(verifDoc), 'Verification doc must exist');
    const verifContent = fs.readFileSync(verifDoc, 'utf-8');
    assert.ok(verifContent.includes('18**********1ZS'), 'Verification doc must record masked GSTIN');
    assert.ok(verifContent.includes('51 Lakh - 1 Crore'), 'Verification doc must record turnover');
  });

  await t.test('6. Explore Our Services Smooth Navigation Anchor', () => {
    const homePath = path.join(ROOT, 'src', 'pages', 'Home.tsx');
    const homeContent = fs.readFileSync(homePath, 'utf-8');
    const servicesPath = path.join(ROOT, 'src', 'pages', 'ServicesOverview.tsx');
    const servicesContent = fs.readFileSync(servicesPath, 'utf-8');

    assert.ok(compContent.includes('id="services-specialisations"'), 'BusinessStatutorySection must have id="services-specialisations"');
    assert.ok(homeContent.includes('href="#services-specialisations"'), 'Home hero ctaServices must anchor to #services-specialisations');
    assert.ok(servicesContent.includes('<BusinessStatutorySection />'), 'ServicesOverview must include BusinessStatutorySection');
  });

  await t.test('7. Official Trade Directory Options: statutoryData definitions', () => {
    const expectedOptions = [
      'Car Dealers',
      'CNG Conversion Kit Dealers',
      'CNG Conversion Kit Distributors',
      'Automobile Wholesalers',
      'Automobile Repair & Services',
      'Maruti Suzuki Alto 800-Car Dealers',
      'Automobile Manufacturers',
      'LPG Conversion Kit Installation Services',
      'Automobile Importers',
      'Automobile Distributors',
    ];

    for (const opt of expectedOptions) {
      assert.ok(content.includes(`'${opt}'`), `statutoryData.ts must include exact option: ${opt}`);
    }
  });

  await t.test('8. Navbar Services Dropdown & Mobile Menu: 9 Specified Trade Options', () => {
    const headerPath = path.join(ROOT, 'src', 'components', 'Header.tsx');
    const headerContent = fs.readFileSync(headerPath, 'utf-8');
    const footerPath = path.join(ROOT, 'src', 'components', 'Footer.tsx');
    const footerContent = fs.readFileSync(footerPath, 'utf-8');

    const expectedNine = [
      'CNG Conversion Kit Dealers',
      'CNG Conversion Kit Distributors',
      'Automobile Wholesalers',
      'Automobile Repair & Services',
      'Maruti Suzuki Alto 800-Car Dealers',
      'Automobile Manufacturers',
      'LPG Conversion Kit Installation Services',
      'Automobile Importers',
      'Automobile Distributors',
    ];

    assert.ok(content.includes('headerServiceOptions'), 'statutoryData.ts must export headerServiceOptions');
    for (const opt of expectedNine) {
      assert.ok(content.includes(`'${opt}'`), `Must include option: ${opt}`);
    }

    assert.ok(headerContent.includes('headerServiceOptions'), 'Header.tsx must import and use headerServiceOptions');
    assert.ok(headerContent.includes('headerServiceOptions.map'), 'Header.tsx must map headerServiceOptions');
    assert.ok(footerContent.includes('headerServiceOptions'), 'Footer.tsx must use headerServiceOptions');
  });

  await t.test('9. Homepage Section Cleanliness: Unwanted FAQ Section Removed', () => {
    const homePath = path.join(ROOT, 'src', 'pages', 'Home.tsx');
    const homeContent = fs.readFileSync(homePath, 'utf-8');

    assert.ok(!homeContent.includes('SECTION K: Frequently Asked Questions'), 'FAQ section must be removed from Homepage');
  });
});
