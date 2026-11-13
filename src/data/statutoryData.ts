export interface StatutoryField {
  id: string;
  labelEn: string;
  labelAs: string;
  valueEn: string;
  valueAs: string;
  iconName: string;
  verificationStatus: 'Verified' | 'Needs owner confirmation';
  isMasked?: boolean;
}

export interface SpecialisationCategory {
  id: string;
  titleEn: string;
  titleAs: string;
  iconName: string;
  verificationStatus: 'Verified' | 'Needs owner confirmation';
  items: {
    nameEn: string;
    nameAs: string;
    noteEn?: string;
    noteAs?: string;
  }[];
}

export interface AlsoListedCategory {
  id: string;
  nameEn: string;
  nameAs: string;
  badgeEn?: string;
  badgeAs?: string;
}

export interface HeaderServiceOption {
  id: string;
  nameEn: string;
  nameAs: string;
  badgeEn: string;
  badgeAs: string;
}

export const headerServiceOptions: HeaderServiceOption[] = [
  {
    id: 'cng-conversion-kit-dealers',
    nameEn: 'CNG Conversion Kit Dealers',
    nameAs: 'চিএনজি কিট ডিলাৰ',
    badgeEn: 'Authorized Dealers',
    badgeAs: 'অনুমোদিত ডিলাৰ',
  },
  {
    id: 'cng-conversion-kit-distributors',
    nameEn: 'CNG Conversion Kit Distributors',
    nameAs: 'চিএনজি কিট বিতৰক',
    badgeEn: 'Kit Distribution',
    badgeAs: 'কিট বিতৰণ',
  },
  {
    id: 'automobile-wholesalers',
    nameEn: 'Automobile Wholesalers',
    nameAs: 'অটোমোবাইল পাইকাৰী বিক্ৰেতা',
    badgeEn: 'Wholesale Spares',
    badgeAs: 'পাইকাৰী যন্ত্ৰাংশ',
  },
  {
    id: 'automobile-repair-services',
    nameEn: 'Automobile Repair & Services',
    nameAs: 'অটোমোবাইল মেৰামতি আৰু সেৱা',
    badgeEn: 'Certified Workshop',
    badgeAs: 'অনুমোদিত ৱৰ্কশ্বপ',
  },
  {
    id: 'maruti-suzuki-alto-800-car-dealers',
    nameEn: 'Maruti Suzuki Alto 800-Car Dealers',
    nameAs: 'মাৰুতি চুজুকি অল্টো ৮০০ গাড়ী ডিলাৰ',
    badgeEn: 'Alto 800 Specialist',
    badgeAs: 'অল্টো ৮০০ বিশেষ',
  },
  {
    id: 'automobile-manufacturers',
    nameEn: 'Automobile Manufacturers',
    nameAs: 'অটোমোবাইল নিৰ্মাতা',
    badgeEn: 'OEM Compliant',
    badgeAs: 'অ\'ইএম মান্য',
  },
  {
    id: 'lpg-conversion-kit-installation-services',
    nameEn: 'LPG Conversion Kit Installation Services',
    nameAs: 'এলপিজি কিট সংস্থাপন সেৱা',
    badgeEn: 'LPG Retrofitting',
    badgeAs: 'এলপিজি সংস্থাপন',
  },
  {
    id: 'automobile-importers',
    nameEn: 'Automobile Importers',
    nameAs: 'অটোমোবাইল আমদানিকাৰক',
    badgeEn: 'Italian Gas Kits',
    badgeAs: 'ইটালিয়ান কিট',
  },
  {
    id: 'automobile-distributors',
    nameEn: 'Automobile Distributors',
    nameAs: 'অটোমোবাইল বিতৰক',
    badgeEn: 'Regional Network',
    badgeAs: 'আঞ্চলিক নেটৱৰ্ক',
  },
];

export interface BusinessStatutoryData {
  sectionTitleEn: string;
  sectionTitleAs: string;
  sectionSubtitleEn: string;
  sectionSubtitleAs: string;
  verificationNoticeEn: string;
  verificationNoticeAs: string;
  fields: StatutoryField[];
  specialisations: SpecialisationCategory[];
  alsoListedIn: AlsoListedCategory[];
}

export const statutoryData: BusinessStatutoryData = {
  sectionTitleEn: 'Business Statutory Details',
  sectionTitleAs: 'ব্যৱসায়িক বিধিবদ্ধ তথ্য',
  sectionSubtitleEn: 'Official administrative, legal, and operational profile as registered with regulatory and trade directories.',
  sectionSubtitleAs: 'নিয়ন্ত্ৰক আৰু বাণিজ্যিক নিৰ্দেশিকা অনুসৰি পঞ্জীভুক্ত আনুষ্ঠানিক প্ৰশাসনিক, আইনী আৰু কাৰ্যকৰী তথ্য।',
  verificationNoticeEn: 'Turnover, employee count, GSTIN, and dealership details are recorded from trade directory references and marked for owner verification before statutory filing.',
  verificationNoticeAs: 'ব্যৱসায়িক লেনদেন, কৰ্মচাৰী সংখ্যা, জিএছটিআইএন আৰু ডিলাৰশ্বিপ তথ্য বাণিজ্যিক পঞ্জীয়নৰ পৰা লোৱা হৈছে আৰু আনুষ্ঠানিক অনুমোদনৰ বাবে চিহ্নিত কৰা হৈছে।',
  fields: [
    {
      id: 'legal-name',
      labelEn: 'Legal Name',
      labelAs: 'আইনী নাম',
      valueEn: 'Maa Kamakhya Auto Gas',
      valueAs: 'মা কামাখ্যা অটো গেছ',
      iconName: 'Building2',
      verificationStatus: 'Verified',
    },
    {
      id: 'est-year',
      labelEn: 'Year of Establishment',
      labelAs: 'প্ৰতিষ্ঠাৰ বৰ্ষ',
      valueEn: '2022',
      valueAs: '২০২২',
      iconName: 'Calendar',
      verificationStatus: 'Verified',
    },
    {
      id: 'employees',
      labelEn: 'No of Employee',
      labelAs: 'কৰ্মচাৰীৰ সংখ্যা',
      valueEn: 'Less than 10',
      valueAs: '১০ জনতকৈ কম',
      iconName: 'Users',
      verificationStatus: 'Needs owner confirmation',
    },
    {
      id: 'turnover',
      labelEn: 'Turn Over',
      labelAs: 'বাৰ্ষিক লেনদেন (Turnover)',
      valueEn: '51 Lakh - 1 Crore',
      valueAs: '৫১ লাখ - ১ কোটি',
      iconName: 'TrendingUp',
      verificationStatus: 'Needs owner confirmation',
    },
    {
      id: 'gstin',
      labelEn: 'GSTIN',
      labelAs: 'জিএছটিআইএন (GSTIN)',
      valueEn: '18**********1ZS',
      valueAs: '18**********1ZS',
      iconName: 'FileCheck',
      verificationStatus: 'Needs owner confirmation',
      isMasked: true,
    },
    {
      id: 'payment-mode',
      labelEn: 'Mode of Payment',
      labelAs: 'পৰিশোধৰ মাধ্যম',
      valueEn: 'EMI Financing, Visa / Master Card / Rupay, UPI, Net Banking, Cash',
      valueAs: 'ইএমআই সুবিধা, ভিসা / মাষ্টাৰ কাৰ্ড / ৰূপে, ইউপিআই, নেট বেংকিং, নগদ ধন',
      iconName: 'CreditCard',
      verificationStatus: 'Needs owner confirmation',
    },
  ],
  specialisations: [
    {
      id: 'services',
      titleEn: 'Services',
      titleAs: 'সেৱাসমূহ (Services)',
      iconName: 'Award',
      verificationStatus: 'Needs owner confirmation',
      items: [
        {
          nameEn: 'Company Authorised Dealer',
          nameAs: 'কোম্পানী অনুমোদিত ডিলাৰ',
          noteEn: 'Authorized conversion hardware & spares',
          noteAs: 'অনুমোদিত কিট আৰু যন্ত্ৰাংশ যোগান',
        },
        {
          nameEn: 'Same Day Delivery',
          nameAs: 'একেদিনাই ডেলিভাৰী',
          noteEn: 'Standard 4-cylinder fitment within 4-6 hours',
          noteAs: 'সাধাৰণ ৪-চিলিণ্ডাৰ বাহনত ৪-৬ ঘণ্টাত সংস্থাপন',
        },
      ],
    },
    {
      id: 'mechanical-repairs',
      titleEn: 'Mechanical Repairs',
      titleAs: 'যান্ত্ৰিক মেৰামতি (Mechanical Repairs)',
      iconName: 'Wrench',
      verificationStatus: 'Verified',
      items: [
        {
          nameEn: 'CNG Installation',
          nameAs: 'চিএনজি সংস্থাপন (CNG Installation)',
          noteEn: 'Sequential & multipoint gas kit fitment',
          noteAs: 'ছিকুৱেনচিয়েল আৰু মাল্টিপইণ্ট কিট ফিটিং',
        },
        {
          nameEn: 'Conversion Kit Repair',
          nameAs: 'ৰূপান্তৰ কিট মেৰামতি (Kit Repair)',
          noteEn: 'Pressure reducers, injectors & ECU recalibration',
          noteAs: 'ৰিডিউচাৰ, ইনজেক্টৰ আৰু ইচিইউ মেৰামতি',
        },
      ],
    },
    {
      id: 'vehicle-specialisation',
      titleEn: 'Vehicle Specialisation',
      titleAs: 'বাহনৰ পাৰদৰ্শিতা (Vehicle Specialisation)',
      iconName: 'Car',
      verificationStatus: 'Verified',
      items: [
        {
          nameEn: 'Auto',
          nameAs: 'অটো ৰিক্সা (Auto / 3-Wheelers)',
          noteEn: 'Commercial three-wheeler gas tuning & repair',
          noteAs: 'বাণিজ্যিক তিনিচকীয়া অটোৰ গেছ টিউনিং আৰু চাৰ্ভিচ',
        },
        {
          nameEn: 'Car',
          nameAs: 'চাৰিচকীয়া গাড়ী (Cars / Sedans / SUVs)',
          noteEn: 'Private hatchbacks, sedans, SUVs & commercial cabs',
          noteAs: 'ব্যক্তিগত গাড়ী, ছেডান, এছইউভি আৰু টেক্সি',
        },
      ],
    },
  ],
  alsoListedIn: [
    {
      id: 'car-dealers',
      nameEn: 'Car Dealers',
      nameAs: 'গাড়ীৰ ডিলাৰ (Car Dealers)',
    },
    {
      id: 'cng-conversion-kit-dealers',
      nameEn: 'CNG Conversion Kit Dealers',
      nameAs: 'চিএনজি ৰূপান্তৰ কিট ডিলাৰ (CNG Kit Dealers)',
    },
    {
      id: 'cng-conversion-kit-distributors',
      nameEn: 'CNG Conversion Kit Distributors',
      nameAs: 'চিএনজি কিট বিতৰক (CNG Distributors)',
    },
    {
      id: 'automobile-wholesalers',
      nameEn: 'Automobile Wholesalers',
      nameAs: 'অটোমোবাইল পাইকাৰী বিক্ৰেতা (Automobile Wholesalers)',
    },
    {
      id: 'automobile-repair-services',
      nameEn: 'Automobile Repair & Services',
      nameAs: 'অটোমোবাইল মেৰামতি আৰু সেৱা (Repair & Services)',
    },
    {
      id: 'maruti-suzuki-alto-800-car-dealers',
      nameEn: 'Maruti Suzuki Alto 800-Car Dealers',
      nameAs: 'মাৰুতি চুজুকি অল্টো ৮০০ গাড়ী ডিলাৰ',
    },
    {
      id: 'automobile-manufacturers',
      nameEn: 'Automobile Manufacturers',
      nameAs: 'অটোমোবাইল নিৰ্মাতা (Automobile Manufacturers)',
    },
    {
      id: 'lpg-conversion-kit-installation-services',
      nameEn: 'LPG Conversion Kit Installation Services',
      nameAs: 'এলপিজি কিট সংস্থাপন সেৱা (LPG Services)',
    },
    {
      id: 'automobile-importers',
      nameEn: 'Automobile Importers',
      nameAs: 'অটোমোবাইল আমদানিকাৰক (Automobile Importers)',
    },
    {
      id: 'automobile-distributors',
      nameEn: 'Automobile Distributors',
      nameAs: 'অটোমোবাইল বিতৰক (Automobile Distributors)',
    },
  ],
};
