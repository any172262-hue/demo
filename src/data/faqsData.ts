export interface FAQItem {
  id: string;
  category: 'installation' | 'safety' | 'legal' | 'maintenance';
  questionEn: string;
  questionAs: string;
  answerEn: string;
  answerAs: string;
}

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'installation',
    questionEn: 'How much fuel expense can I save by switching my car to CNG?',
    questionAs: 'চিএনজি ব্যৱহাৰ কৰিলে কিমান ইন্ধন খৰচ সাশ্ৰয় হ\'ব পাৰে?',
    answerEn: 'Depending on prevailing petrol prices and vehicle engine capacity, converting to a sequential CNG system typically delivers a 60% to 70% reduction in per-kilometer running costs compared to petrol. A vehicle achieving 15 km/l on petrol usually yields approximately 22 to 26 km per kg of CNG.',
    answerAs: 'পেট্ৰলৰ বৰ্তমান মূল্য আৰু গাড়ীৰ ইঞ্জিনৰ ওপৰত ভিত্তি কৰি চিএনজিত চলিলে প্ৰতি কিলোমিটাৰত ৬০% ৰ পৰা ৭০% লৈকে খৰচ হ্ৰাস হয়। পেট্ৰলত ১৫ কিমি মাইলেজ দিয়া বাহন এখনত সাধাৰণতে প্ৰতি কেজি চিএনজিত ২২ ৰ পৰা ২৬ কিমি পৰ্যন্ত মাইলেজ পোৱা যায়।'
  },
  {
    id: 'faq-2',
    category: 'installation',
    questionEn: 'Will installing a sequential CNG kit reduce my car\'s acceleration or pickup?',
    questionAs: 'চিএনজি কিট লগালে গাড়ীৰ পিক-আপ বা এক্সিলাৰেশ্যন কমি যাব নেকি?',
    answerEn: 'With modern computerized sequential injection kits synchronized through OBD-II and paired with dynamic timing advancers (like STAG or Europegas), power loss is restricted to an imperceptible 3-5%, unlike older venturi/conventional kits where a 15-20% drop was common. Throttle response feels virtually identical to factory petrol.',
    answerAs: 'আধুনিক ছিকুৱেনচিয়েল কিট আৰু ডিজিটেল টাইমিং এডভান্সাৰৰ ব্যৱহাৰৰ ফলত শক্তি হ্ৰাস কেৱল মাত্ৰ ৩-৫% লৈ সীমাবদ্ধ থাকে, যিটো চলোৱাৰ সময়ত অনুভৱেই নহয়। পুৰণি সাধাৰণ কিটৰ তুলনাত এই নতুন ছিকুৱেনচিয়েল কিটত পেট্ৰলৰ দৰেই মসৃণ গতি লাভ হয়।'
  },
  {
    id: 'faq-3',
    category: 'safety',
    questionEn: 'How safe is an automotive CNG cylinder in a rear collision?',
    questionAs: 'পিছফালৰ পৰা খুন্দা খালে চিএনজি চিলিণ্ডাৰ কিমান সুৰক্ষিত?',
    answerEn: 'Automotive CNG cylinders are forged from high-strength seamless alloy steel with wall thicknesses exceeding 8-10 mm and are tested to withstand internal hydrostatic pressures of 330 bar (significantly tougher than a conventional sheet-metal petrol fuel tank). Additionally, the cylinder valve incorporates a thermal fusible plug and high-pressure burst disc to safely discharge gas in high-temperature emergencies without exploding.',
    answerAs: 'চিএনজি চিলিণ্ডাৰ ৮-১০ মিলিমিটাৰ ডাঠ মজবুত চিমলেছ এলয় ষ্টীলেৰে নিৰ্মিত আৰু ৩৩০ বাৰ উচ্চ চাপত পৰীক্ষিত (যিটো সাধাৰণ পেট্ৰল টেংকীতকৈ বহুগুণে শক্তিশালী)। ইয়াৰ উপৰিও সুৰক্ষা ভাল্ভত থাৰ্মেল প্লাগ থাকে, যিয়ে অতিমাত্ৰা উত্তাপত গেছ বিস্ফোৰণ নোহোৱাকৈ নিয়ন্ত্ৰিতভাৱে বাহিৰ কৰি দিয়ে।'
  },
  {
    id: 'faq-4',
    category: 'safety',
    questionEn: 'How frequently does a CNG cylinder need hydrostatic testing?',
    questionAs: 'চিএনজি চিলিণ্ডাৰ কিমান দিনৰ মূৰে মূৰে হাইড্ৰ\'-টেষ্ট কৰাব লাগে?',
    answerEn: 'Under the Gas Cylinders Rules prescribed by the Petroleum and Explosives Safety Organization (PESO), automotive CNG cylinders must undergo hydrostatic re-testing every 3 years from the date of manufacture or previous test. Carrying an un-tested or expired cylinder is illegal and violates fuel pump safety regulations.',
    answerAs: 'চৰকাৰী PESO নিৰ্দেশনা অনুসৰি বাহনৰ চিএনজি চিলিণ্ডাৰ নিৰ্মাণ বা পূৰ্বৰ টেষ্টৰ পৰা প্ৰতি ৩ বছৰৰ মূৰে মূৰে হাইড্ৰ\'-টেষ্ট কৰোৱাটো আইনগতভাৱে বাধ্যতামূলক। মেয়াদ উকলি যোৱা চিলিণ্ডাৰেৰে গেছ ভৰোৱাটো নিষিদ্ধ আৰু আইনবিৰুদ্ধ।'
  },
  {
    id: 'faq-5',
    category: 'legal',
    questionEn: 'What is the procedure for RTO endorsement after installation?',
    questionAs: 'কিট লগোৱাৰ পিছত আৰটিঅ\'ত কেনেদৰে অনুমোদন (Endorsement) কৰোৱা হয়?',
    answerEn: 'As an authorized Retrofitting Center in Guwahati, Maa Kamakhya Auto Gas issues Form 22 (manufacturer compliance), Form 21, and the valid PESO cylinder certificate. The vehicle is then scheduled for physical inspection at the local DTO where the motor vehicle inspector verifies engine/chassis numbers, issuing an updated RC with Dual Fuel (Petrol/CNG or LPG) endorsed.',
    answerAs: 'গুৱাহাটীৰ অনুমোদিত ৰেট্ৰ\'ফিটিং কেন্দ্ৰ হিচাপে মা কামাখ্যা অটো গেছে ফৰ্ম ২২, ফৰ্ম ২১ আৰু PESO প্ৰমাণপত্ৰ প্ৰদান কৰে। তাৰ পিছত স্থানীয় ডিটিঅ\'ত (DTO) বাহনখন পৰিদৰ্শন কৰাই পেট্ৰল/গেছ দ্বৈত ইন্ধন সম্বলিত নতুন আৰচি প্ৰাপ্ত কৰা হয়।'
  },
  {
    id: 'faq-6',
    category: 'maintenance',
    questionEn: 'What routine maintenance is required for a sequential CNG system?',
    questionAs: 'ছিকুৱেনচিয়েল চিএনজি কিটৰ বাবে কি কি নিয়মীয়া তত্বাৱধানৰ প্ৰয়োজন?',
    answerEn: 'Routine maintenance is straightforward: replace the low-pressure vapor gas filter every 10,000 km, inspect spark plug electrode gaps every 15,000 km, clean the injector rail plungers annually, and conduct electronic leak sniffer checks during regular oil changes.',
    answerAs: 'ইয়াৰ তত্বাৱধান অতি সহজ: প্ৰতি ১০,০০০ কিলোমিটাৰত গেছ ফিল্টাৰ সলনি কৰক, ১৫,০০০ কিলোমিটাৰত স্পাৰ্ক প্লাগ পৰীক্ষা কৰক, বছৰত এবাৰ ইনজেক্টৰ ৰেল পৰিষ্কাৰ কৰক আৰু নিয়মীয়া ছাৰ্ভিচিঙৰ সময়ত গেছ লিক পৰীক্ষা কৰক।'
  },
  {
    id: 'faq-7',
    category: 'installation',
    questionEn: 'Do you offer EMI financing options for CNG and LPG kit installation?',
    questionAs: 'চিএনজি আৰু এলপিজি কিট সংস্থাপনৰ বাবে ইএমআই (EMI) সুবিধা উপলব্ধ নেকি?',
    answerEn: 'Yes. Maa Kamakhya Auto Gas offers flexible 5 to 8-month EMI financing plans through major credit cards, debit cards, and banking partners to make conversion budget-friendly for both private car owners and commercial drivers.',
    answerAs: 'হয়, মা কামাখ্যা অটো গেছে যোগ্যতা সম্পন্ন বাহন গৰাকীসকলৰ বাবে ৫ ৰ পৰা ৮ মহীয়া সহজ আৰু সুবিধাজনক ইএমআই (EMI Financing) সুবিধা প্ৰদান কৰে। ডেবিট কাৰ্ড, ক্ৰেডিট কাৰ্ড আৰু বিত্তীয় অংশীদাৰৰ জৰিয়তে সহজে কিস্তিত পৰিশোধ কৰিব পাৰি।'
  },
  {
    id: 'faq-8',
    category: 'maintenance',
    questionEn: 'What are the workshop working hours and days?',
    questionAs: 'কৰ্মশালাৰ খোলা থকাৰ সময় আৰু দিনসমূহ কি কি?',
    answerEn: 'Our Guwahati workshop operates from 09:00 AM to 07:30 PM, Monday through Sunday. We are open all 7 days of the week, including Sundays, for installations, testing, and servicing.',
    answerAs: 'আমাৰ কৰ্মশালাখন সপ্তাহৰ আটাইকেইটা দিনতেই (দেওবাৰেও) পুৱা ০৯:০০ বজাৰ পৰা সন্ধিয়া ০৭:৩০ বজালৈকে খোলা থাকে।'
  },
  {
    id: 'faq-9',
    category: 'installation',
    questionEn: 'Which vehicles do you specialize in converting?',
    questionAs: 'আপোনালোকে কি কি বাহনত গেছ কিট সংস্থাপন কৰে?',
    answerEn: 'We specialize in both Cars (4-wheelers: hatchbacks, sedans, SUVs, private cars, commercial taxis) and Autos (3-wheelers). We work with Maruti Suzuki, Hyundai, Tata, Honda, Toyota, and other popular vehicle models.',
    answerAs: 'মা কামাখ্যা অটো গেছে সকলো ধৰণৰ ৪-চকীয়া ব্যক্তিগত আৰু বাণিজ্যিক গাড়ী (মাৰুতি ছুজুকি, হুন্দাই, টাটা, ইত্যাদি) আৰু ৩-চকীয়া অটো ৰিক্সাত অনুমোদিত চিএনজি আৰু এলপিজি কিট সংস্থাপন আৰু মেৰামতি কৰে।'
  },
  {
    id: 'faq-10',
    category: 'installation',
    questionEn: 'Is same-day delivery available for CNG kit installation?',
    questionAs: 'কিট সংস্থাপনৰ কাম এদিনতে সম্পূৰ্ণ হয় নেকি?',
    answerEn: 'Yes. For standard 4-cylinder vehicles with prior appointment booking, our certified technicians complete sequential kit mounting, wiring, and computerized calibration within 4 to 6 hours, ensuring same-day delivery.',
    answerAs: 'হয়, পূৰ্বতে নিৰ্ধাৰিত সময় অনুসৰি সাধাৰণ ৪-চিলিণ্ডাৰ বাহনত ছিকুৱেনচিয়েল কিট ফিটিং মাত্ৰ ৪ ৰ পৰা ৬ ঘণ্টাৰ ভিতৰত সম্পূৰ্ণ কৰি একেদিনাই গাড়ী হস্তান্তৰ (Same Day Delivery) কৰা হয়।'
  }
];
