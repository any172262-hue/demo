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
    titleEn: "Home - Car's Energy Co.",
    titleAs: "মুখ্য পৃষ্ঠা - কাৰ্ছ এনাৰ্জী কো.",
    snippetEn: 'Precision CNG Engineering, Certified Automotive Retrofitting RFC #261 since 1998 in Delhi-NCR.',
    snippetAs: '১৯৯৮ চনৰ পৰা দিল্লী-এনচিআৰত অনুমোদিত ছিকুৱেনচিয়েল চিএনজি কিট সংস্থাপন আৰু কাৰিকৰী সেৱা।',
    url: '/',
    badgeEn: 'Overview',
    badgeAs: 'পৰিচিতি',
    keywordsEn: ['home', 'cng', 'retrofitting', 'engineering', 'delhi', 'rfc 261', 'sequential'],
    keywordsAs: ['মুখ্য', 'চিএনজি', 'ৰেট্ৰফিটিং', 'দিল্লী', 'কিট'],
  },
  {
    id: 'page-about',
    category: 'page',
    titleEn: "About Car's Energy Co.",
    titleAs: "আমাৰ সম্পৰ্কে - কাৰ্ছ এনাৰ্জী কো.",
    snippetEn: 'Founded in 1998 with 26+ years of alternative fuel engineering integrity, 2 certified Delhi workshops, and RFC Code 261 accreditation.',
    snippetAs: '১৯৯৮ চনত প্ৰতিষ্ঠিত, ২৬ বছৰৰ কাৰিকৰী সততা, দুটা সুসজ্জিত কেন্দ্ৰ আৰু চৰকাৰী স্বীকৃতি।',
    url: '/about',
    badgeEn: 'Company',
    badgeAs: 'প্ৰতিষ্ঠান',
    keywordsEn: ['about', 'history', 'experience', 'mundka', 'paschim vihar', 'infrastructure', 'mission', '1998'],
    keywordsAs: ['সম্পৰ্কে', 'ইতিহাস', 'মুণ্ডকা', 'পশ্চিম বিহাৰ', 'অভিজ্ঞতা'],
  },
  {
    id: 'page-services',
    category: 'page',
    titleEn: 'Specialized CNG Engineering Services',
    titleAs: 'আমাৰ কাৰিকৰী সেৱাসমূহ',
    snippetEn: 'Full directory of all 10 specialized automotive engineering services from sequential conversions to PESO cylinder testing.',
    snippetAs: 'ছিকুৱেনচিয়েল কিট সংস্থাপনৰ পৰা চিলিণ্ডাৰ হাইড্ৰ টেষ্টিঙলৈকে সকলো ১০টা বিশেষ সেৱা।',
    url: '/services',
    badgeEn: '10 Services',
    badgeAs: '১০টা সেৱা',
    keywordsEn: ['services', 'sequential', 'calibration', 'hydro testing', 'amc', 'filter', 'reducer', 'rto'],
    keywordsAs: ['সেৱা', 'টেষ্টিং', 'টিউনিং', 'আৰটিঅ'],
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
    snippetEn: 'Real photographs of high-pressure installations, engine bays, computerized tuning, and certified testing bays.',
    snippetAs: 'কিট ফিটিং, ইঞ্জিন বে, কম্পিউটাৰ নিদান আৰু টেষ্টিং কেন্দ্ৰৰ প্ৰকৃত আলোকচিত্ৰ।',
    url: '/gallery',
    badgeEn: 'Photos',
    badgeAs: 'ফটো',
    keywordsEn: ['gallery', 'photos', 'workshop', 'engine bay', 'fitment', 'bays', 'images'],
    keywordsAs: ['ফটো', 'গেলেৰী', 'কৰ্মশালা'],
  },
  {
    id: 'page-videos',
    category: 'page',
    titleEn: 'Technical Video Demonstrations',
    titleAs: 'কাৰিকৰী ভিডিঅ নিদৰ্শন',
    snippetEn: 'In-depth video demonstrations of sequential kit calibration, dyno performance, and safety practices from our Mundka workshop.',
    snippetAs: 'মুণ্ডকা কৰ্মশালাৰ পৰা ছিকুৱেনচিয়েল কিট টিউনিং আৰু সুৰক্ষা নিয়ম সম্পৰ্কীয় ভিডিঅ।',
    url: '/videos',
    badgeEn: 'Videos',
    badgeAs: 'ভিডিঅ',
    keywordsEn: ['videos', 'youtube', 'demonstrations', 'tutorials', 'dyno', 'calibration'],
    keywordsAs: ['ভিডিঅ', 'টিউনিং', 'মুণ্ডকা'],
  },
  {
    id: 'page-faqs',
    category: 'page',
    titleEn: 'Frequently Asked Questions',
    titleAs: 'সঘনাই সোধা প্ৰশ্নসমূহ',
    snippetEn: 'Answers to fuel savings, engine safety, 3-year hydro testing intervals, RTO endorsements, and warranty.',
    snippetAs: 'চিএনজি কিট, মাইলেজ, নিৰাপত্তা আৰু আৰটিঅ নিয়ম সম্পৰ্কীয় স্পষ্ট উত্তৰ।',
    url: '/faqs',
    badgeEn: 'Support',
    badgeAs: 'সহায়তা',
    keywordsEn: ['faqs', 'questions', 'mileage', 'safety', 'savings', 'cost', 'hydro testing', 'rto endorsement'],
    keywordsAs: ['প্ৰশ্ন', 'উত্তৰ', 'মাইলেজ', 'সুৰক্ষা', 'খৰচ'],
  },
  {
    id: 'page-contact',
    category: 'page',
    titleEn: 'Workshop Locations & Contact',
    titleAs: 'যোগাযোগ আৰু কৰ্মশালাৰ ঠিকনা',
    snippetEn: 'Addresses, phone numbers, WhatsApp links, and operating hours for Mundka Main Facility and Paschim Vihar Express Center.',
    snippetAs: 'মুণ্ডকা আৰু পশ্চিম বিহাৰ কৰ্মশালাৰ ঠিকনা, ফোন নম্বৰ আৰু সময়সূচী।',
    url: '/contact',
    badgeEn: 'Locations',
    badgeAs: 'ঠিকনা',
    keywordsEn: ['contact', 'phone', 'whatsapp', 'address', 'mundka', 'paschim vihar', 'hours', 'location'],
    keywordsAs: ['যোগাযোগ', 'ফোন', 'হোৱাটছএপ', 'ঠিকনা'],
  },
  {
    id: 'page-get-in-touch',
    category: 'page',
    titleEn: 'Get In Touch (Car Model Enquiry)',
    titleAs: 'যোগাযোগ কৰক (গাড়ীৰ মডেল অনুসন্ধান)',
    snippetEn: 'Direct vehicle enquiry desk: submit your name, car model, mobile number, and requirements for immediate consultation.',
    snippetAs: 'আপোনাৰ নাম, গাড়ীৰ মডেল আৰু মবাইল নম্বৰ দি কাৰিকৰী পৰামৰ্শ লাভ কৰক।',
    url: '/get-in-touch',
    badgeEn: 'Enquiry',
    badgeAs: 'অনুসন্ধান',
    keywordsEn: ['get in touch', 'enquiry', 'car model', 'quote', 'consultation', 'mobile'],
    keywordsAs: ['অনুসন্ধান', 'গাড়ীৰ মডেল', 'যোগাযোগ'],
  },
  {
    id: 'page-book-appointment',
    category: 'page',
    titleEn: 'Book Service Appointment',
    titleAs: 'সেৱাৰ বাবে সময় বুক কৰক',
    snippetEn: 'Schedule a workshop inspection, installation, or cylinder hydro test at Mundka or Paschim Vihar.',
    snippetAs: 'মুণ্ডকা বা পশ্চিম বিহাৰ কৰ্মশালাত বাহন পৰীক্ষণৰ বাবে সময় সংৰক্ষণ কৰক।',
    url: '/book-appointment',
    badgeEn: 'Booking',
    badgeAs: 'বুকিং',
    keywordsEn: ['book', 'appointment', 'schedule', 'inspection', 'fitment booking', 'slot'],
    keywordsAs: ['বুকিং', 'এপইণ্টমেণ্ট', 'সময়'],
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
    snippetEn: 'Commercial service terms, CMVR regulations, cylinder hydro test condemnation guidelines, and RTO rules.',
    snippetAs: 'বাণিজ্যিক চৰ্ত, CMVR বিধি, চিলিণ্ডাৰ বাতিলকৰণ নীতি আৰু আৰটিঅ নিয়ম।',
    url: '/terms-and-conditions',
    badgeEn: 'Legal',
    badgeAs: 'আইনী',
    keywordsEn: ['terms', 'conditions', 'legal', 'cmvr', 'peso', 'disclaimers', 'rules'],
    keywordsAs: ['চৰ্ত', 'নিয়ম', 'আইন'],
  },
];

/**
 * Builds the comprehensive search index including static pages, services,
 * products, FAQs, and facility locations.
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

  // 4. Index Facility Locations & Contacts
  index.push(
    {
      id: 'contact-mundka',
      category: 'contact',
      titleEn: 'Mundka Primary Retrofitment Facility (RFC #261)',
      titleAs: 'মুণ্ডকা প্ৰধান ৰেট্ৰফিটমেণ্ট কেন্দ্ৰ (RFC #261)',
      snippetEn: '215 & 216/5, Opp. Metro Pillar 536, Mundka, New Delhi - 110041. Hours: 10:30 AM - 07:00 PM (Wed Closed). Phone: +91 92122 18180.',
      snippetAs: 'মেট্ৰ স্তম্ভ ৫৩৬ৰ বিপৰীতে, মুণ্ডকা উদ্যোগ নগৰ, নতুন দিল্লী। ফোন: +91 92122 18180.',
      url: '/contact',
      badgeEn: 'Main Hub',
      badgeAs: 'প্ৰধান কেন্দ্ৰ',
      keywordsEn: ['mundka', 'metro pillar 536', 'rohtak road', 'hub', 'testing bay', 'phone', 'location'],
      keywordsAs: ['মুণ্ডকা', 'মেট্ৰ', 'স্তম্ভ ৫৩৬', 'ঠিকনা'],
    },
    {
      id: 'contact-paschim-vihar',
      category: 'contact',
      titleEn: 'Paschim Vihar Express Service Center',
      titleAs: 'পশ্চিম বিহাৰ এক্সপ্ৰেছ সেৱা কেন্দ্ৰ',
      snippetEn: 'Shop No. 21, C.S.C. A-4, Gole D.D.A. Market, Rohtak Road, Paschim Vihar, New Delhi - 110063. Phone: +91 92122 18180.',
      snippetAs: 'দোকান নং ২১, চিএছচি এ-৪, গোল ডিডিএ মাৰ্কেট, ৰোহতক ৰোড, পশ্চিম বিহাৰ।',
      url: '/contact',
      badgeEn: 'Express Center',
      badgeAs: 'এক্সপ্ৰেছ কেন্দ্ৰ',
      keywordsEn: ['paschim vihar', 'dda market', 'gole', 'express', 'tuning', 'servicing', 'location'],
      keywordsAs: ['পশ্চিম বিহাৰ', 'মাৰ্কেট', 'ঠিকনা'],
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
