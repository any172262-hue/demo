import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { BackToTop } from './components/BackToTop';
import { FloatingContactWidget } from './components/FloatingContactWidget';
import { DemoNoticeModal } from './components/DemoNoticeModal';
import { captureUtmParameters } from './utils/utm';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesOverview } from './pages/ServicesOverview';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { Products } from './pages/Products';
import { Gallery } from './pages/Gallery';
import { VideoGallery } from './pages/VideoGallery';
import { Testimonials } from './pages/Testimonials';
import { FAQs } from './pages/FAQs';
import { Contact } from './pages/Contact';
import { GetInTouch } from './pages/GetInTouch';
import { BookAppointment } from './pages/BookAppointment';
import { MapPage } from './pages/MapPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { SitemapPage } from './pages/SitemapPage';

const getBasename = () => {
  return typeof window !== 'undefined' && window.location.pathname.startsWith('/demo')
    ? '/demo'
    : '';
};

export const App: React.FC = () => {
  useEffect(() => {
    // Capture privacy-conscious campaign attribution parameters on load
    captureUtmParameters();
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Router basename={getBasename()}>
            <ScrollToTop />
            <ScrollProgressBar />
            <div className="flex flex-col min-h-screen bg-offwhite dark:bg-darkbg text-charcoal dark:text-darktext transition-colors">
              <Header />
              <main className="flex-grow">
                <Routes>
                  {/* 1. Home */}
                  <Route path="/" element={<Home />} />
                  <Route path="/demo" element={<Navigate to="/" replace />} />
                  <Route path="/demo/*" element={<Navigate to="/" replace />} />

                  {/* 2. About */}
                  <Route path="/about" element={<About />} />

                  {/* 3. Services Overview */}
                  <Route path="/services" element={<ServicesOverview />} />

                  {/* 4 to 11. All 8 Individual Specialized Service Pages */}
                  <Route path="/services/cng-kit-installation" element={<ServiceDetailPage />} />
                  <Route path="/services/ecu-tuning-calibration" element={<ServiceDetailPage />} />
                  <Route path="/services/rto-documentation-rc-endorsement" element={<ServiceDetailPage />} />
                  <Route path="/services/cng-kit-servicing" element={<ServiceDetailPage />} />
                  <Route path="/services/cylinder-hydro-testing" element={<ServiceDetailPage />} />
                  <Route path="/services/filter-replacement" element={<ServiceDetailPage />} />
                  <Route path="/services/reducer-servicing" element={<ServiceDetailPage />} />
                  <Route path="/services/cylinder-replacement" element={<ServiceDetailPage />} />
                  <Route path="/services/cng-kit-distribution" element={<Navigate to="/services" replace />} />
                  <Route path="/services/annual-maintenance-contract" element={<Navigate to="/services" replace />} />
                  <Route path="/services/:slug" element={<ServiceDetailPage />} />

                  {/* 12. Products & Brands */}
                  <Route path="/products" element={<Products />} />

                  {/* 13. Workshop Photographic Gallery */}
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/videos" element={<Navigate to="/gallery" replace />} />

                  {/* 14. Customer Testimonials */}
                  <Route path="/testimonials" element={<Testimonials />} />

                  {/* 15. FAQs */}
                  <Route path="/faqs" element={<FAQs />} />

                  {/* 16. Contact Us */}
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/get-in-touch" element={<Navigate to="/contact" replace />} />

                  {/* 17. Book an Appointment */}
                  <Route path="/book-appointment" element={<BookAppointment />} />

                  {/* 18. Workshop Location & Live Map */}
                  <Route path="/map" element={<MapPage />} />
                  <Route path="/workshop-location" element={<Navigate to="/map" replace />} />

                  {/* 21. Privacy Policy */}
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                  {/* 22. Terms & Conditions */}
                  <Route path="/terms-and-conditions" element={<TermsConditions />} />
                  <Route path="/terms-conditions" element={<Navigate to="/terms-and-conditions" replace />} />

                  {/* 23. Sitemap */}
                  <Route path="/sitemap" element={<SitemapPage />} />

                  {/* 24. Fallback: Always redirect to home without showing 404 */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
              <BackToTop />
              <FloatingContactWidget />
              <DemoNoticeModal />
            </div>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
