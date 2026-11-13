import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  schema,
}) => {
  const { language } = useLanguage();
  const siteUrl = 'https://carsenergy.co.in';
  const fullCanonical = `${siteUrl}${canonicalPath}`;
  const fullTitle = `${title} | Car's Energy Co.`;

  // Default LocalBusiness Schema
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: "Car's Energy Co.",
    image: 'https://carsenergy.co.in/images/workshop-main.jpg',
    url: siteUrl,
    telephone: '+919212218180',
    priceRange: '₹₹',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '215 & 216/5, Ground Floor, Opp. Metro Pillar 536, Mundka, Udyog Nagar',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110041',
        addressCountry: 'IN',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Shop No. 21, C.S.C. A-4, Gole D.D.A. Market, Rohtak Road, Paschim Vihar',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110063',
        addressCountry: 'IN',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '10:30',
        closes: '19:00',
      },
    ],
    areaServed: ['Delhi', 'New Delhi', 'Delhi-NCR', 'Gurugram', 'Noida'],
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      <html lang={language === 'as' ? 'as' : 'en'} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Car's Energy Co." />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(finalSchema)}</script>
    </Helmet>
  );
};
