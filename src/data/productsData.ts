export interface ProductItem {
  id: string;
  name: string;
  category: 'kit' | 'cylinder' | 'component';
  origin: string;
  imageUrl: string;
  descriptionEn: string;
  descriptionAs: string;
  featuresEn: string[];
  featuresAs: string[];
  compatibility: string;
  status: 'In Stock & Authorized' | 'মজুত আৰু অনুমোদিত';
}

export const productsData: ProductItem[] = [
  {
    id: 'lovato-smart-exr',
    name: 'Lovato SMART ExR Sequential Kit',
    category: 'kit',
    origin: 'Italy / Lovato Gas S.p.A.',
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
    descriptionEn: 'World-renowned Italian sequential injection system engineered for superior throttle response, precise OBD-II synchronization, and durable injector solenoids.',
    descriptionAs: 'উৎকৃষ্ট এক্সিলাৰেশ্যন, সঠিক OBD-II সংযোগ আৰু দীৰ্ঘস্থায়ী ইনজেক্টৰযুক্ত বিশ্বপ্ৰসিদ্ধ ইটালীৰ ছিকুৱেনচিয়েল চিএনজি কিট।',
    featuresEn: [
      'High-speed 32-bit automotive microcontroller',
      'Integrated real-time fuel trim adaptation',
      'Lovato RGJ series high-performance reducer',
      'Low noise, high durability KP injector rail'
    ],
    featuresAs: [
      'দ্ৰুত ৩২-বিট অট\'ম\'বাইল মাইক্ৰ\'কণ্ট্ৰলাৰ',
      'ৰিয়েল-টাইম ফুৱেল ট্ৰিম এডাপ্টেচন',
      'Lovato RGJ ছিৰিজৰ উচ্চ ক্ষমতাসম্পন্ন ৰিডিউচাৰ',
      'কম শব্দযুক্ত, অতি দীৰ্ঘস্থায়ী KP ইনজেক্টৰ ৰেল'
    ],
    compatibility: '3 & 4 Cylinder MPFi / DualJet Petrol Engines',
    status: 'In Stock & Authorized'
  },
  {
    id: 'motozen-advance-obd',
    name: 'Motozen Pro OBD-II Sequential Kit',
    category: 'kit',
    origin: 'India / Approved OEM Partner',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    descriptionEn: 'High-reliability sequential CNG system optimized for Indian driving conditions, dusty environments, and variable gas pump pressures.',
    descriptionAs: 'ভাৰতীয় পথ আৰু পৰিৱেশৰ বাবে বিশেষভাৱে উপযোগী, অতি নিৰ্ভৰযোগ্য Motozen OBD-II ছিকুৱেনচিয়েল চিএনজি কিট।',
    featuresEn: [
      'Waterproof IP67 aluminum ECU casing',
      'Advanced dynamic timing advance capability',
      'Instantaneous petrol-to-gas switchover logic',
      'Comprehensive onboard diagnostics error logging'
    ],
    featuresAs: [
      'জলৰোধক IP67 এলুমিনিয়াম ইচিইউ কেছিং',
      'উন্নত ডাইনামিক টাইমিং এডভান্স সুবিধা',
      'পেট্ৰলৰ পৰা চিএনজিলৈ পলকতে মসৃণ ছুইচিং',
      'সম্পূৰ্ণ অনব\'ৰ্ড ডায়েগনষ্টিক ক\'ড সংৰক্ষণ'
    ],
    compatibility: '3, 4 & 6 Cylinder Commercial & Passenger Vehicles',
    status: 'In Stock & Authorized'
  },
  {
    id: 'gastech-italy-kit',
    name: 'Gastech Italy Sequential System',
    category: 'kit',
    origin: 'Italy / Gastech S.r.l.',
    imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
    descriptionEn: 'Premium European alternative fuel management unit providing silky smooth power delivery and high resistance to engine bay temperatures.',
    descriptionAs: 'ইউৰোপীয় প্ৰযুক্তিৰ দ্বাৰা নিৰ্মিত প্ৰিমিয়াম গেছ প্ৰণালী, যিয়ে অতি মসৃণ শক্তি আৰু ইঞ্জিনৰ উষ্ণতা সহনশীলতা প্ৰদান কৰে।',
    featuresEn: [
      'Fast 2.0 ohm injector impedance for pinpoint fuel metering',
      'Two-stage pressure reduction with integrated gas shut-off',
      'Built-in safety thermal fuse protection',
      'Optimized cold-start gas switch temperature algorithms'
    ],
    featuresAs: [
      'নিখুঁত গেছ যোগানৰ বাবে দ্ৰুত ২.০ ওহম ইনজেক্টৰ',
      'দুটা পৰ্যায়ৰ প্ৰেচাৰ ৰেগুলেচন আৰু সুৰক্ষা চলেনইড',
      'অন্তৰ্নিহিত সুৰক্ষা থাৰ্মেল ফিউজ',
      'শীতকালত সঠিক উষ্ণতাত গেছ সলনি হোৱা এলগৰিথম'
    ],
    compatibility: 'Sedans, Compact SUVs, and MPVs up to 2500cc',
    status: 'In Stock & Authorized'
  },
  {
    id: 'mijo-sequential-kit',
    name: 'Mijo Super Sequential CNG Kit',
    category: 'kit',
    origin: 'India / Certified CMVR Compliant',
    imageUrl: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&w=800&q=80',
    descriptionEn: 'Cost-effective, highly durable alternative fuel solution widely preferred for urban cabs and high-usage family cars.',
    descriptionAs: 'সুলভ মূল্যত অতি মজবুত আৰু কাৰ্যক্ষম চিএনজি কিট, চহৰৰ টেক্সি আৰু নিয়মীয়া পৰিয়ালৰ বাহনৰ বাবে বিশেষভাৱে জনপ্ৰিয়।',
    featuresEn: [
      'Heavy-duty brass nozzle injector rail',
      'Reliable analog & digital pressure gauge compatibility',
      'Easy-to-tune calibration interface',
      'Low replacement cost for wear items'
    ],
    featuresAs: [
      'মজবুত পিতলৰ নজেলযুক্ত ইনজেক্টৰ ৰেল',
      'এনালগ আৰু ডিজিটেল প্ৰেচাৰ গজ সংযোগযোগ্যতা',
      'সহজ আৰু স্পষ্ট ছফ্টৱেৰ টিউনিং ব্যৱস্থা',
      'খুচুৰা পাৰ্টছৰ সুলভ মূল্য'
    ],
    compatibility: 'Maruti Suzuki, Hyundai, Tata, Honda Models',
    status: 'In Stock & Authorized'
  },
  {
    id: 'peso-seamless-cylinder',
    name: 'PESO Approved Seamless Alloy Steel Cylinder',
    category: 'cylinder',
    origin: 'EKC / Rama Cylinders / Certified PESO',
    imageUrl: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80',
    descriptionEn: 'Hydrostatically pre-tested at 330 bar, seamless steel construction without longitudinal welds, complying strictly with IS 15490 / ISO 11439 standards.',
    descriptionAs: '৩৩০ বাৰ চাপত পূৰ্ব-পৰীক্ষিত, কোনো জোৰা নথকা চিমলেছ এলয় ষ্টীল চিলিণ্ডাৰ, IS 15490 / ISO 11439 মানদণ্ডসম্পন্ন।',
    featuresEn: [
      'Tested to 330 bar hydrostatic test pressure (200 bar working pressure)',
      'Burst disc integrated safety valve with thermal fusible element',
      'Epoxy internal coating against trace compressor oil moisture',
      'Available in 55L, 60L, and 65L capacities'
    ],
    featuresAs: [
      '৩৩০ বাৰ টেষ্ট প্ৰেচাৰত পৰীক্ষিত (২০০ বাৰ কাৰ্যক্ষম চাপ)',
      'থাৰ্মেল ফিউজিবল প্লাগ আৰু সুৰক্ষা ভাল্ভযুক্ত',
      'ভিতৰত মামৰে নধৰাকৈ বিশেষ সুৰক্ষামূলক প্ৰলেপ',
      '৫৫ লিটাৰ, ৬০ লিটাৰ আৰু ৬৫ লিটাৰ আকাৰত উপলব্ধ'
    ],
    compatibility: 'Universal Boot Mount for Passenger & Fleet Vehicles',
    status: 'In Stock & Authorized'
  },
  {
    id: 'stag-dynamic-advancer',
    name: 'STAG Dynamic Timing Advancer',
    category: 'component',
    origin: 'Europe / AC S.A.',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    descriptionEn: 'Intelligent microprocessor-controlled ignition timing advancer that modifies crank/cam signals to optimize high-octane CNG combustion and eliminate power loss.',
    descriptionAs: 'বুদ্ধিমত্তাপূৰ্ণ মাইক্ৰ\'প্ৰচেছৰযুক্ত টাইমিং এডভান্সাৰ, যাৰ দ্বাৰা চিএনজিত গাড়ীৰ পিক-আপ আৰু গতি হ্ৰাস নহয়।',
    featuresEn: [
      'Real-time ignition advance up to 15 degrees based on engine load',
      'Eliminates engine hesitation during acceleration from low speeds',
      'Reduces exhaust gas temperatures (EGT) protecting exhaust valves',
      'Universal compatibility with Hall and Inductive crank sensors'
    ],
    featuresAs: [
      'ইঞ্জিনৰ গতি আৰু লোড অনুসৰি ১৫ ডিগ্ৰী পৰ্যন্ত টাইমিং বৃদ্ধি',
      'নিম্ন গতিত এক্সিলাৰেটৰ টিপিলে হোৱা লেগ নাইকিয়া কৰে',
      'নিৰ্গমন উষ্ণতা হ্ৰাস কৰি ইঞ্জিন ভাল্ভ সুৰক্ষিত ৰাখে',
      'হাল আৰু ইনডাক্তিভ চেন্সৰৰ সৈতে সৰ্বজনীন উপযোগী'
    ],
    compatibility: 'Compatible with all modern electronic fuel injection petrol engines',
    status: 'In Stock & Authorized'
  }
];
