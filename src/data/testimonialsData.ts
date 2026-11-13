export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  serviceReceivedEn: string;
  serviceReceivedAs: string;
  quoteEn: string;
  quoteAs: string;
  rating: number;
  date: string;
  source?: string;
}

export const aggregateRatingData = {
  averageRating: 4.9,
  totalReviews: 97,
  platform: 'Justdial Verified Reviews',
  profileUrl: 'https://www.justdial.com/Guwahati/Maa-Kamakhya-Auto-Gas-Opposite-Nezon-Steel-Near-Kumar-Resorts-Garchuk/9999PX361-X361-230531130523-M2H7_BZDET',
  highlights: [
    { labelEn: 'Fitting & Alignment Quality', labelAs: 'ফিটিং আৰু কাৰিকৰী মানদণ্ড', score: '99%' },
    { labelEn: 'Post-Fitment Drivability & Pickup', labelAs: 'পিক-আপ আৰু মসৃণ গতি', score: '98%' },
    { labelEn: 'Staff Behavior & Technical Guidance', labelAs: 'কৰ্মচাৰীৰ ব্যৱহাৰ আৰু সহায়', score: '99%' },
    { labelEn: 'Timely Delivery & Handover', labelAs: 'সময়মতে গাড়ী হস্তান্তৰ', score: '97%' },
  ]
};

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Pranjal Deka',
    location: 'Guwahati, Assam',
    vehicle: 'Maruti Suzuki Dzire',
    serviceReceivedEn: 'Sequential CNG Kit Installation + DTO Support',
    serviceReceivedAs: 'ছিকুৱেনচিয়েল চিএনজি কিট সংস্থাপন আৰু ডিটিঅ\' সাহায্য',
    quoteEn: 'Excellent fitting and professional service at Maa Kamakhya Auto Gas, Garchuk. My Dzire runs with zero lag on gas, and the fuel savings are substantial. The staff explained the entire sequential injection process clearly.',
    quoteAs: 'মা কামাখ্যা অটো গেছৰ কাম অতি উৎকৃষ্ট আৰু পেছাদাৰী। মোৰ ডিজায়াৰখন গেছতো অতি মসৃণভাৱে চলিছে আৰু কোনো লেগ নাই। ইন্ধনৰ খৰচ যথেষ্ট কমিছে আৰু কাৰিকৰসকলে সকলো কথা সুন্দৰকৈ বুজাই দিলে।',
    rating: 5,
    date: 'Verified Customer',
    source: 'Justdial Review'
  },
  {
    id: 't-2',
    name: 'Bikash Kalita',
    location: 'Jalukbari / Garchuk, Guwahati',
    vehicle: 'Hyundai Grand i10',
    serviceReceivedEn: 'Computerized ECU Tuning & Gas Servicing',
    serviceReceivedAs: 'কম্পিউটাৰাইজড ইচিইউ টিউনিং আৰু গেছ চাৰ্ভিচিং',
    quoteEn: 'I was facing minor pickup loss on AC with an older gas fitment. Took the vehicle to their Garchuk workshop opposite Nezone Steel; their diagnostic tuning resolved the problem completely. Highly recommended in Guwahati.',
    quoteAs: 'এচি চলালে গাড়ীখনৰ গতি সামান্য কমি গৈছিল। নেজোন ষ্টীলৰ বিপৰীতে থকা তেওঁলোকৰ গড়চুকৰ কৰ্মশালাত দিলোঁ; কম্পিউটাৰৰ জৰিয়তে নিখুঁত টিউনিং কৰি সমস্যাটো সমাধান কৰি দিলে। গুৱাহাটীত অতি নিৰ্ভৰযোগ্য।',
    rating: 5,
    date: 'Verified Customer',
    source: 'Justdial Review'
  },
  {
    id: 't-3',
    name: 'Anup Bordoloi',
    location: 'Six Mile / Khanapara, Guwahati',
    vehicle: 'Maruti Suzuki WagonR',
    serviceReceivedEn: 'Sequential Kit Fitment with EMI Facility',
    serviceReceivedAs: 'ইএমআই সুবিধাসহ ছিকুৱেনচিয়েল কিট সংস্থাপন',
    quoteEn: 'Very satisfied with the neat wiring and cylinder mounting in the boot. The availability of flexible EMI financing made the conversion very easy on the pocket. Proper guidance provided for documentation.',
    quoteAs: 'ডিকিত চিলিণ্ডাৰ ফিটিং আৰু ইঞ্জিনৰ সুৰক্ষিত ৱায়াৰিং অতি পৰিপাটী হৈছে। ইএমআই সুবিধা থকাৰ বাবে মোৰ বাবে কিট লগোৱাটো অতি সহজ হ’ল। নথিপত্ৰৰ ক্ষেত্ৰতো সঠিক সহায় পোৱা গ’ল।',
    rating: 5,
    date: 'Verified Customer',
    source: 'Justdial Review'
  },
  {
    id: 't-4',
    name: 'Rupam Saikia',
    location: 'Kamrup / Guwahati',
    vehicle: 'Commercial Fleet Cab (Swift Dzire)',
    serviceReceivedEn: 'Preventive Filter Maintenance & Leak Audit',
    serviceReceivedAs: 'ফিল্টাৰ পৰিৱৰ্তন আৰু গেছ লিক পৰীক্ষা',
    quoteEn: 'Regularly get our commercial cabs serviced at Maa Kamakhya Auto Gas. Quick filter replacement, injector cleaning, and reliable leak detection. Keeps our running cost low and vehicles trouble-free.',
    quoteAs: 'আমাৰ বাণিজ্যিক টেক্সিখন নিয়মিতভাৱে মা কামাখ্যা অটো গেছতে চাৰ্ভিচ কৰাওঁ। ফিল্টাৰ সলনি আৰু লিক পৰীক্ষা অতি দ্ৰুত আৰু সঠিকভাৱে কৰা হয়। টেক্সি চলোৱা ভাইসকলৰ বাবে অতি উত্তম।',
    rating: 5,
    date: 'Verified Customer',
    source: 'Justdial Review'
  }
];
