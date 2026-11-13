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
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Harpreet Singh',
    location: 'Paschim Vihar, New Delhi',
    vehicle: 'Maruti Suzuki Dzire (K12N Petrol)',
    serviceReceivedEn: 'Lovato Sequential Kit Fitment + RC Endorsement',
    serviceReceivedAs: 'Lovato ছিকুৱেনচিয়েল কিট ফিটিং আৰু আৰচি অনুমোদন',
    quoteEn: 'I commute 75 km daily between Paschim Vihar and Gurugram. Car\'s Energy installed a genuine Lovato kit with high-speed injectors. The car drives exactly like petrol with no lag when overtaking. Their team also handled the complete RTO documentation in Delhi smoothly.',
    quoteAs: 'মই প্ৰতিদিনে পশ্চিম বিহাৰৰ পৰা গুৰুগ্ৰামলৈ ৭৫ কিমি যাত্ৰা কৰোঁ। কাৰ্ছ এনাৰ্জীয়ে প্ৰকৃত Lovato কিট সংস্থাপন কৰি দিলে। গাড়ীখন পেট্ৰলৰ দৰেই মসৃণভাৱে চলে আৰু অভাৰটেক কৰোঁতে কোনো লেগ নাই। আৰটিঅ\' নথিপত্ৰৰ কামো তেওঁলোকে নিখুঁতভাৱে কৰি দিলে।',
    rating: 5,
    date: 'October 2026'
  },
  {
    id: 't-2',
    name: 'Virender Kumar',
    location: 'Mundka Industrial Area, Delhi',
    vehicle: 'Hyundai Grand i10 (1.2L Kappa)',
    serviceReceivedEn: 'Cylinder Hydro-Testing & Reducer Servicing',
    serviceReceivedAs: 'চিলিণ্ডাৰ হাইড্ৰ\'-টেষ্টিং আৰু ৰিডিউচাৰ চাৰ্ভিচিং',
    quoteEn: 'My cylinder was due for its 3-year mandatory test. Took it to their Mundka facility; they handled de-gassing, water jacket hydrostatic testing, stamped the collar, and gave me an official PESO test certificate within 24 hours. Very transparent technical setup.',
    quoteAs: 'মোৰ চিলিণ্ডাৰৰ ৩ বছৰীয়া বাধ্যতামূলক পৰীক্ষাৰ সময় হৈছিল। মুণ্ডকা কৰ্মশালাত দিলোঁ; ২৪ ঘণ্টাৰ ভিতৰতে হাইড্ৰ\'-টেষ্ট কৰি চিলিণ্ডাৰত ষ্টাম্প মাৰি অফিচিয়েল PESO প্ৰমাণপত্ৰ দিলে। তেওঁলোকৰ কাম আৰু পদ্ধতি অতি স্বচ্ছ।',
    rating: 5,
    date: 'September 2026'
  },
  {
    id: 't-3',
    name: 'Dr. Amitav Baruah',
    location: 'Rohini Sector 14, Delhi',
    vehicle: 'Honda City (1.5L i-VTEC)',
    serviceReceivedEn: 'ECU Map Calibration & STAG Timing Advancer',
    serviceReceivedAs: 'ইচিইউ মেপ কেলিব্ৰেশ্যন আৰু STAG টাইমিং এডভান্সাৰ',
    quoteEn: 'I had previously converted my car at a local garage which caused constant check engine light warnings. Car\'s Energy diagnosed the lean fuel mixture, recalibrated the fuel map on road load, and installed a STAG advancer. The engine feels completely revitalized.',
    quoteAs: 'মই পূৰ্বে আন এঠাইত কিট লগাইছিলোঁ যাৰ বাবে বাৰে বাৰে চেক ইঞ্জিন লাইট জ্বলি আছিল। কাৰ্ছ এনাৰ্জীৰ অভিজ্ঞ টিমে কম্পিউটাৰৰ সহায়ত ফুৱেল মেপ টিউন কৰি STAG এডভান্সাৰ সংযোগ কৰিলে। গাড়ীৰ ইঞ্জিন এতিয়া সম্পূৰ্ণ মসৃণ আৰু শক্তিশালী।',
    rating: 5,
    date: 'August 2026'
  },
  {
    id: 't-4',
    name: 'Sunil Sharma',
    location: 'Dwarka Sector 11, Delhi',
    vehicle: 'Maruti Suzuki WagonR 1.0',
    serviceReceivedEn: 'Annual Maintenance Contract (AMC)',
    serviceReceivedAs: 'বাৰ্ষিক তত্বাৱধান চুক্তি (AMC)',
    quoteEn: 'Signed up for their AMC for my commercial taxi. Having scheduled filter swaps and free tuning checkups without standing in long queues saves me both time and money every month. Genuine technicians who know their trade.',
    quoteAs: 'মোৰ বাণিজ্যিক টেক্সিখনৰ বাবে তেওঁলোকৰ AMC চুক্তি লৈছোঁ। শাৰী নাপাতি সময়মতে ফিল্টাৰ সলনি আৰু ফ্ৰী টিউনিং পোৱাৰ বাবে মোৰ বহু সময় আৰু টকা সাশ্ৰয় হৈছে। কাৰিকৰসকল অতি অভিজ্ঞ।',
    rating: 5,
    date: 'November 2026'
  }
];
