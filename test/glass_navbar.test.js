import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

test('ADVANCED TWO-STATE STICKY GLASS NAVBAR SUITE: Verification of Specification Requirements', async (t) => {
  const cssPath = path.join(ROOT, 'src', 'index.css');
  const cssContent = fs.readFileSync(cssPath, 'utf-8');

  const headerPath = path.join(ROOT, 'src', 'components', 'Header.tsx');
  const headerContent = fs.readFileSync(headerPath, 'utf-8');

  await t.test('1. State 1: Normal Full-Size Navbar at Page Top', () => {
    // Normal state at page top: solid, full-width, full logo, crisp border
    assert.ok(cssContent.includes('.navbar,'), 'CSS must define .navbar rule');
    assert.ok(cssContent.includes('.nav-light'), 'CSS must maintain .nav-light compatibility');
    assert.ok(cssContent.includes('background: #FFFFFF !important'), 'Normal state must have solid white background in light mode');
    assert.ok(cssContent.includes('border-bottom: 1px solid #E5E7EB !important'), 'Normal state must have clean bottom border');
    assert.ok(cssContent.includes('box-shadow: 0 2px 8px rgba(41, 45, 51, 0.05) !important'), 'Normal state must have subtle separation shadow');
    assert.ok(headerContent.includes('pt-0 pb-0 px-0'), 'Header at top must have zero outer padding (edge-to-edge)');
  });

  await t.test('2. State 2: Compact Floating Glass Navbar on Scroll (~60% Opacity & 14px Backdrop Blur)', () => {
    // Compact floating glass state on scroll
    assert.ok(cssContent.includes('.navbar.scrolled,'), 'CSS must define .navbar.scrolled rule');
    assert.ok(cssContent.includes('rgba(255, 255, 255, 0.60) !important'), 'Light mode glass navbar must use ~60% background opacity');
    assert.ok(cssContent.includes('backdrop-filter: blur(14px) !important'), 'Navbar must apply 14px backdrop blur');
    assert.ok(cssContent.includes('-webkit-backdrop-filter: blur(14px) !important'), 'Navbar must include -webkit-backdrop-filter for Safari compatibility');
    assert.ok(cssContent.includes('border-radius: 1rem !important'), 'Floating navbar must have rounded-2xl corners');
    assert.ok(headerContent.includes('pt-2 sm:pt-2.5 pb-2 px-3 sm:px-5 lg:px-6'), 'Floating navbar must have horizontal spacing from screen edges');
  });

  await t.test('3. Dark Mode Parity & Background Tint', () => {
    // State 1 & State 2 in Dark Mode
    assert.ok(cssContent.includes('.dark .navbar,'), 'CSS must define .dark .navbar rule');
    assert.ok(cssContent.includes('background: #181B1F !important'), 'Dark mode State 1 must use #181B1F');
    assert.ok(cssContent.includes('.dark .navbar.scrolled,'), 'CSS must define .dark .navbar.scrolled rule');
    assert.ok(cssContent.includes('rgba(24, 27, 31, 0.65) !important'), 'Dark mode scrolled navbar must use ~65% opacity');
    assert.ok(cssContent.includes('border: 1px solid rgba(255, 255, 255, 0.10) !important'), 'Dark mode navbar must have subtle light border');
  });

  await t.test('4. Proportional Logo Scaling & Compact Transition', () => {
    // Logo scales down proportionally without distortion
    assert.ok(headerContent.includes("scrolled ? 'w-8 h-8 sm:w-8.5 sm:h-8.5' : 'w-9.5 h-9.5 sm:w-10 sm:h-10'"), 'Logo mark badge dimensions scale down proportionally');
    assert.ok(headerContent.includes("scrolled ? 'text-sm sm:text-base' : 'text-base sm:text-lg'"), 'Company brand title font scales down smoothly');
    assert.ok(headerContent.includes('duration-350'), 'Transition timing must be within 300ms to 400ms (350ms)');
  });

  await t.test('5. Scroll Detection Mechanism & 50px Threshold', () => {
    // Header.tsx must use requestAnimationFrame and 50px threshold
    assert.ok(headerContent.includes('requestAnimationFrame'), 'Header.tsx must throttle scroll updates with requestAnimationFrame');
    assert.ok(headerContent.includes('SCROLL_THRESHOLD = 50'), 'Header.tsx must activate at exactly 50px');
    assert.ok(headerContent.includes('passive: true'), 'Scroll listener must use passive: true for smooth 60/120fps performance');
    assert.ok(headerContent.includes('prev !== isScrolled'), 'State updates must be deduplicated to prevent unnecessary re-renders');
  });

  await t.test('6. Structural Integrity, Dropdowns & Mobile Responsiveness', () => {
    // Header must stick at top: 0 with sticky positioning
    assert.ok(headerContent.includes('sticky top-0 z-50'), 'Header must have sticky top-0 position');
    assert.ok(headerContent.includes('scrolled nav-light-scrolled'), 'Header must apply scrolled class when active');
    // Dropdowns and mobile menus must retain clear solid backgrounds
    assert.ok(cssContent.includes('.nav-dropdown-light'), 'Dropdowns must maintain .nav-dropdown-light class');
    assert.ok(cssContent.includes('background: #FFFFFF !important'), 'Dropdown light theme must be solid white for readability');
    assert.ok(cssContent.includes('.dark .nav-dropdown-light'), 'Dark dropdown must have solid dark background');
    assert.ok(headerContent.includes('rounded-2xl'), 'Mobile drawer must have rounded-2xl corners matching design');
  });
});
