import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { BackToTop } from './components/BackToTop';
import { FloatingContactWidget } from './components/FloatingContactWidget';
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
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { SitemapPage } from './pages/SitemapPage';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  useEffect(() => {
    // Capture privacy-conscious campaign attribution parameters on load
    captureUtmParameters();
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <ScrollToTop />
            <ScrollProgressBar />
            <div className="flex flex-col min-h-screen bg-offwhite dark:bg-darkbg text-charcoal dark:text-darktext transition-colors">
              <Header />
              <main className="flex-grow">
                <Routes>
                  {/* 1. Home */}
                  <Route path="/" element={<Home />} />

                  {/* 2. About */}
                  <Route path="/about" element={<About />} />

                  {/* 3. Services Overview */}
                  <Route path="/services" element={<ServicesOverview />} />

                  {/* 4 to 13. All 10 Individual Specialized Service Pages */}
                  <Route path="/services/cng-kit-installation" element={<ServiceDetailPage />} />
                  <Route path="/services/cng-kit-distribution" element={<ServiceDetailPage />} />
                  <Route path="/services/ecu-tuning-calibration" element={<ServiceDetailPage />} />
                  <Route path="/services/rto-documentation-rc-endorsement" element={<ServiceDetailPage />} />
                  <Route path="/services/cng-kit-servicing" element={<ServiceDetailPage />} />
                  <Route path="/services/cylinder-hydro-testing" element={<ServiceDetailPage />} />
                  <Route path="/services/annual-maintenance-contract" element={<ServiceDetailPage />} />
                  <Route path="/services/filter-replacement" element={<ServiceDetailPage />} />
                  <Route path="/services/reducer-servicing" element={<ServiceDetailPage />} />
                  <Route path="/services/cylinder-replacement" element={<ServiceDetailPage />} />
                  <Route path="/services/:slug" element={<ServiceDetailPage />} />

                  {/* 14. Products & Brands */}
                  <Route path="/products" element={<Products />} />

                  {/* 15. Workshop Gallery */}
                  <Route path="/gallery" element={<Gallery />} />

                  {/* 16. Video Gallery */}
                  <Route path="/videos" element={<VideoGallery />} />

                  {/* 17. Customer Testimonials */}
                  <Route path="/testimonials" element={<Testimonials />} />

                  {/* 18. FAQs */}
                  <Route path="/faqs" element={<FAQs />} />

                  {/* 19. Contact Us */}
                  <Route path="/contact" element={<Contact />} />

                  {/* 19b. Get In Touch (Direct Car Model Enquiry Form) */}
                  <Route path="/get-in-touch" element={<GetInTouch />} />

                  {/* 20. Book an Appointment */}
                  <Route path="/book-appointment" element={<BookAppointment />} />

                  {/* 21. Privacy Policy */}
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                  {/* 22. Terms & Conditions */}
                  <Route path="/terms-and-conditions" element={<TermsConditions />} />

                  {/* 23. Sitemap */}
                  <Route path="/sitemap" element={<SitemapPage />} />

                  {/* 24. Custom 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <BackToTop />
              <FloatingContactWidget />
            </div>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
