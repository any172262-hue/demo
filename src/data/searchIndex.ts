import { servicesData } from './servicesData';
import { productsData } from './productsData';
import { faqsData } from './faqsData';

export type SearchCategory = 'page' | 'service' | 'product' | 'faq' | 'contact';

export interface SearchResultItem {
  id: string;
  category: SearchCategory;
  titleEn: string;
  titleAs: string;
  snippetEn: string;
  snippetAs: string;
  url: string;
  badgeEn?: string;
  badgeAs?: string;
  keywordsEn: string[];
  keywordsAs: string[];
}

export const staticPages: SearchResultItem[] = [
  {
    id: 'page-home',
    category: 'page',
    titleEn: 'Home - Maa Kamakhya Auto Gas',
    titleAs: 'মুখ্য পৃষ্ঠা - মা কামাখ্যা অটো গেছ',
    snippetEn: 'Precision Automotive Gas Engineering, Certified CNG & LPG Retrofitting in Garchuk, Guwahati, Assam.',
    snippetAs: 'গুৱাহাটীৰ গড়চুকত চৰকাৰী অনুমোদিত ছিকুৱেনচিয়েল চিএনজি আৰু এলপিজি কিট সংস্থাপন আৰু কাৰিকৰী সেৱা।',
    url: '/',
    badgeEn: 'Overview',
    badgeAs: 'পৰিচিতি',
    keywordsEn: ['home', 'cng', 'lpg', 'retrofitting', 'engineering', 'guwahati', 'garchuk', 'assam', 'sequential'],
    keywordsAs: ['মুখ্য', 'চিএনজি', 'এলপিজি', 'ৰেট্ৰফিটিং', 'গুৱাহাটী', 'গড়চুক', 'কিট'],
  },
  {
    id: 'page-about',
    category: 'page',
    titleEn: 'About Maa Kamakhya Auto Gas',
    titleAs: 'আমাৰ সম্পৰ্কে - মা কামাখ্যা অটো গেছ',
    snippetEn: 'Founded in 2022 with verified engineering integrity, modern Guwahati workshop on NH-37, and DTO compliant accreditation.',
    snippetAs: '২০২২ চনত প্ৰতিষ্ঠিত, কাৰিকৰী সততা, গড়চুকৰ এনএইচ-৩৭ স্থিত আধুনিক কেন্দ্ৰ আৰু চৰকাৰী স্বীকৃতি।',
    url: '/about',
    badgeEn: 'Company',
    badgeAs: 'প্ৰতিষ্ঠান',
    keywordsEn: ['about', 'history', 'experience', 'guwahati', 'garchuk', 'nh 37', 'infrastructure', 'mission', '2022'],
    keywordsAs: ['সম্পৰ্কে', 'ইতিহাস', 'গুৱাহাটী', 'গড়চুক', 'অভিজ্ঞতা'],
  },
  {
    id: 'page-services',
    category: 'page',
    titleEn: 'Specialized Gas Engineering Services',
    titleAs: 'আমাৰ কাৰিকৰী সেৱাসমূহ',
    snippetEn: 'Full directory of all 10 specialized automotive engineering services from sequential conversions to PESO cylinder testing.',
    snippetAs: 'ছিকুৱেনচিয়েল কিট সংস্থাপনৰ পৰা চিলিণ্ডাৰ হাইড্ৰ টেষ্টিঙলৈকে সকলো ১০টা বিশেষ সেৱা।',
    url: '/services',
    badgeEn: '10 Services',
    badgeAs: '১০টা সেৱা',
    keywordsEn: ['services', 'sequential', 'calibration', 'hydro testing', 'amc', 'filter', 'reducer', 'dto', 'lpg'],
    keywordsAs: ['সেৱা', 'টেষ্টিং', 'টিউনিং', 'ডিটিঅ'],
  },
  {
    id: 'page-products',
    category: 'page',
    titleEn: 'Hardware & Partner Brands',
    titleAs: 'সা-সঁজুলি আৰু অংশীদাৰ ব্ৰেণ্ডসমূহ',
    snippetEn: 'Direct distributor and certified installer of Lovato, Motozen, Tomasetto, BRC, and PESO certified seamless cylinders.',
    snippetAs: "লোভাত'ো, ম'ট'জেন, টমাছেট্ট' আৰু চৰকাৰী PESO স্বীকৃত চিলিণ্ডাৰৰ প্ৰত্যক্ষ সংস্থাপক।",
    url: '/products',
    badgeEn: 'Hardware',
    badgeAs: 'সামগ্ৰী',
    keywordsEn: ['products', 'brands', 'lovato', 'motozen', 'tomasetto', 'brc', 'cylinders', 'reducers', 'hardware'],
    keywordsAs: ['ব্ৰেণ্ড', 'কিট', 'চিলিণ্ডাৰ', 'লোভাতো', 'মটোজেন'],
  },
  {
    id: 'page-gallery',
    category: 'page',
    titleEn: 'Workshop Photographic Documentation',
    titleAs: 'কৰ্মশালাৰ ফটো সংগ্ৰহ',
    snippetEn: 'Real photographs of high-pressure installations, engine bays, computerized tuning, and certified testing bays in Guwahati.',
    snippetAs: 'কিট ফিটিং, ইঞ্জিন বে, কম্পিউটাৰ নিদান আৰু টেষ্টিং কেন্দ্ৰৰ প্ৰকৃত আলোকচিত্ৰ।',
    url: '/gallery',
    badgeEn: 'Photos',
    badgeAs: 'ফটো',
    keywordsEn: ['gallery', 'photos', 'workshop', 'engine bay', 'fitment', 'bays', 'images', 'guwahati'],
    keywordsAs: ['ফটো', 'গেলেৰী', 'কৰ্মশালা', 'গুৱাহাটী'],
  },
  {
    id: 'page-faqs',
    category: 'page',
    titleEn: 'Frequently Asked Questions',
    titleAs: 'সঘনাই সোধা প্ৰশ্নসমূহ',
    snippetEn: 'Answers to fuel savings, engine safety, 3-year hydro testing intervals, DTO endorsements, and warranty.',
    snippetAs: 'চিএনজি কিট, মাইলেজ, নিৰাপত্তা আৰু ডিটিঅ নিয়ম সম্পৰ্কীয় স্পষ্ট উত্তৰ।',
    url: '/faqs',
    badgeEn: 'Support',
    badgeAs: 'সহায়তা',
    keywordsEn: ['faqs', 'questions', 'mileage', 'safety', 'savings', 'cost', 'hydro testing', 'dto endorsement'],
    keywordsAs: ['প্ৰশ্ন', 'উত্তৰ', 'মাইলেজ', 'সুৰক্ষা', 'খৰচ'],
  },
  {
    id: 'page-contact',
    category: 'page',
    titleEn: 'Workshop Location & Contact',
    titleAs: 'যোগাযোগ আৰু কৰ্মশালাৰ ঠিকনা',
    snippetEn: 'Address, phone numbers, WhatsApp links, and operating hours for Maa Kamakhya Auto Gas on NH-37, Garchuk, Guwahati.',
    snippetAs: 'গুৱাহাটীৰ গড়চুকৰ এনএইচ-৩৭ স্থিত কৰ্মশালাৰ ঠিকনা, ফোন নম্বৰ আৰু সময়সূচী।',
    url: '/contact',
    badgeEn: 'Location',
    badgeAs: 'ঠিকনা',
    keywordsEn: ['contact', 'phone', 'whatsapp', 'address', 'garchuk', 'guwahati', 'nh 37', 'nezone steel', 'hours', 'location'],
    keywordsAs: ['যোগাযোগ', 'ফোন', 'হোৱাটছএপ', 'ঠিকনা', 'গড়চুক', 'গুৱাহাটী'],
  },
  {
    id: 'page-book-appointment',
    category: 'page',
    titleEn: 'Book Service Appointment',
    titleAs: 'সেৱাৰ বাবে সময় বুক কৰক',
    snippetEn: 'Schedule a workshop inspection, installation, or cylinder hydro test at our Garchuk, Guwahati workshop.',
    snippetAs: 'গুৱাহাটীৰ গড়চুকস্থিত কৰ্মশালাত বাহন পৰীক্ষণৰ বাবে সময় সংৰক্ষণ কৰক।',
    url: '/book-appointment',
    badgeEn: 'Booking',
    badgeAs: 'বুকিং',
    keywordsEn: ['book', 'appointment', 'schedule', 'inspection', 'fitment booking', 'slot', 'guwahati'],
    keywordsAs: ['বুকিং', 'এপইণ্টমেণ্ট', 'সময়', 'গুৱাহাটী'],
  },
  {
    id: 'page-privacy',
    category: 'page',
    titleEn: 'Privacy Policy',
    titleAs: 'গোপনীয়তা নীতি',
    snippetEn: 'Data governance, encryption standards, no customer accounts, and privacy officer contact info.',
    snippetAs: 'তথ্য সুৰক্ষা, এনক্ৰিপচন নীতি আৰু ব্যক্তিগত তথ্য সংৰক্ষণৰ নিয়ম।',
    url: '/privacy-policy',
    badgeEn: 'Legal',
    badgeAs: 'আইনী',
    keywordsEn: ['privacy', 'data', 'policy', 'protection', 'encryption', 'legal'],
    keywordsAs: ['গোপনীয়তা', 'নীতি', 'তথ্য সুৰক্ষা'],
  },
  {
    id: 'page-terms',
    category: 'page',
    titleEn: 'Terms & Conditions',
    titleAs: 'চৰ্ত আৰু নিয়মসমূহ',
    snippetEn: 'Commercial service terms, CMVR regulations, cylinder hydro test condemnation guidelines, and DTO rules.',
    snippetAs: 'বাণিজ্যিক চৰ্ত, CMVR বিধি, চিলিণ্ডাৰ বাতিলকৰণ নীতি আৰু ডিটিঅ নিয়ম।',
    url: '/terms-and-conditions',
    badgeEn: 'Legal',
    badgeAs: 'আইনী',
    keywordsEn: ['terms', 'conditions', 'legal', 'cmvr', 'peso', 'disclaimers', 'rules'],
    keywordsAs: ['চৰ্ত', 'নিয়ম', 'আইন'],
  },
];

/**
 * Builds the comprehensive search index including static pages, services,
 * products, FAQs, and facility location.
 */
export const buildSearchIndex = (): SearchResultItem[] => {
  const index: SearchResultItem[] = [...staticPages];

  // 1. Index All 10 Services
  servicesData.forEach((s) => {
    index.push({
      id: `service-${s.slug}`,
      category: 'service',
      titleEn: s.titleEn,
      titleAs: s.titleAs,
      snippetEn: s.shortDescEn,
      snippetAs: s.shortDescAs,
      url: `/services/${s.slug}`,
      badgeEn: s.badgeEn,
      badgeAs: s.badgeAs,
      keywordsEn: [
        s.titleEn.toLowerCase(),
        s.slug.replace(/-/g, ' '),
        s.shortDescEn.toLowerCase(),
        ...s.whoNeedsItEn.map((w) => w.toLowerCase()),
      ],
      keywordsAs: [
        s.titleAs,
        s.shortDescAs,
        ...s.whoNeedsItAs,
      ],
    });
  });

  // 2. Index Products & Partner Brands
  productsData.forEach((p) => {
    index.push({
      id: `product-${p.id}`,
      category: 'product',
      titleEn: p.name,
      titleAs: p.name,
      snippetEn: `${p.origin} - ${p.descriptionEn}`,
      snippetAs: `${p.origin} - ${p.descriptionAs}`,
      url: '/products',
      badgeEn: p.category.toUpperCase(),
      badgeAs: p.category.toUpperCase(),
      keywordsEn: [
        p.name.toLowerCase(),
        p.origin.toLowerCase(),
        p.category,
        p.compatibility.toLowerCase(),
        ...p.featuresEn.map((f) => f.toLowerCase()),
      ],
      keywordsAs: [
        p.name,
        p.descriptionAs,
        ...p.featuresAs,
      ],
    });
  });

  // 3. Index FAQs
  faqsData.forEach((f) => {
    index.push({
      id: `faq-${f.id}`,
      category: 'faq',
      titleEn: f.questionEn,
      titleAs: f.questionAs,
      snippetEn: f.answerEn,
      snippetAs: f.answerAs,
      url: '/faqs',
      badgeEn: f.category.toUpperCase(),
      badgeAs: f.category.toUpperCase(),
      keywordsEn: [
        f.questionEn.toLowerCase(),
        f.answerEn.toLowerCase(),
        f.category,
      ],
      keywordsAs: [
        f.questionAs,
        f.answerAs,
        f.category,
      ],
    });
  });

  // 4. Index Facility Location & Contacts
  index.push(
    {
      id: 'contact-garchuk',
      category: 'contact',
      titleEn: 'Maa Kamakhya Auto Gas Main Workshop',
      titleAs: 'মা কামাখ্যা অটো গেছ প্ৰধান কৰ্মশালা',
      snippetEn: 'Shop No. 7, Opp. Nezone Steel, Near Indian Oil Petrol Pump, NH-37, Paschim Boragaon, Garchuk, Guwahati - 781035. Hours: 9:00 AM - 07:30 PM (All 7 Days Open). Phone: +91 9678******.',
      snippetAs: 'দোকান নং ৭, নেজোন ষ্টীলৰ বিপৰীতে, ইণ্ডিয়ান অইল পেট্ৰল পাম্পৰ সমীপত, এনএইচ-৩৭, পশ্চিম বৰাগাঁও, গড়চুক, গুৱাহাটী। ফোন: +91 9678******.',
      url: '/contact',
      badgeEn: 'Main Hub',
      badgeAs: 'প্ৰধান কেন্দ্ৰ',
      keywordsEn: ['garchuk', 'guwahati', 'nezone steel', 'boragaon', 'nh 37', 'kumar resorts', 'hub', 'testing bay', 'phone', 'location'],
      keywordsAs: ['গড়চুক', 'গুৱাহাটী', 'নেজোন ষ্টীল', 'বৰাগাঁও', 'এনএইচ ৩৭', 'ঠিকনা'],
    }
  );

  return index;
};

/**
 * Searches the index against a query string for both English and Assamese.
 */
export const searchContent = (
  query: string,
  language: 'en' | 'as',
  index: SearchResultItem[]
): SearchResultItem[] => {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return [];

  const terms = cleanQuery.split(/\s+/).filter(Boolean);

  return index.filter((item) => {
    const title = (language === 'as' ? item.titleAs : item.titleEn).toLowerCase();
    const snippet = (language === 'as' ? item.snippetAs : item.snippetEn).toLowerCase();
    const otherTitle = (language === 'as' ? item.titleEn : item.titleAs).toLowerCase();
    const otherSnippet = (language === 'as' ? item.snippetEn : item.snippetAs).toLowerCase();
    const keywords = (language === 'as' ? item.keywordsAs : item.keywordsEn).join(' ').toLowerCase();

    // Match if all search terms appear in either the active language or cross-language data
    return terms.every(
      (term) =>
        title.includes(term) ||
        snippet.includes(term) ||
        otherTitle.includes(term) ||
        otherSnippet.includes(term) ||
        keywords.includes(term)
    );
  });
};
