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
  const siteUrl = 'https://any172262-hue.github.io/demo';
  const fullCanonical = `${siteUrl}${canonicalPath}`;
  const fullTitle = `${title} | Maa Kamakhya Auto Gas`;

  // Default LocalBusiness Schema
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'Maa Kamakhya Auto Gas',
    image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80',
    url: siteUrl,
    telephone: '+919678******',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. 7, Opposite Nezone Steel, Near Indian Oil Petrol Pump, NH-37, Paschim Boragaon, Garchuk',
      addressLocality: 'Guwahati',
      addressRegion: 'Assam',
      postalCode: '781035',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.1200128',
      longitude: '91.6965264',
    },
    hasMap: 'https://www.google.com/maps/place/26%C2%B007\'12.1%22N+91%C2%B041\'47.5%22E/@26.1200128,91.6965264,17z',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '19:30',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '97',
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: ['Guwahati', 'Kamrup Metropolitan', 'Assam', 'North East India'],
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
      <meta property="og:site_name" content="Maa Kamakhya Auto Gas" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(finalSchema)}</script>
    </Helmet>
  );
};
