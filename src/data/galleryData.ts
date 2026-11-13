export interface GalleryItem {
  id: string;
  category: 'fitment' | 'testing' | 'diagnostics' | 'facility';
  titleEn: string;
  titleAs: string;
  descEn: string;
  descAs: string;
  imageUrl: string;
  tag: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    category: 'fitment',
    titleEn: 'Precision Manifold Injection Rail Integration',
    titleAs: 'ইনটেক মেনিফ\'ল্ডত ইনজেক্টৰ ৰেল সংস্থাপন',
    descEn: 'Equi-distant high-pressure gas hoses routed with heat insulation sleeves into 4-cylinder engine runners.',
    descAs: 'চাৰি চিলিণ্ডাৰ ইঞ্জিনত সমদূৰত্বত তাপ প্ৰতিৰোধী পাইপেৰে ইনজেক্টৰ ৰেল সংযোগ।',
    imageUrl: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1000&q=80',
    tag: 'Fitment Standards'
  },
  {
    id: 'gal-2',
    category: 'diagnostics',
    titleEn: 'Live OBD-II Fuel Trim & MAP Sensor Calibration',
    titleAs: 'লাইভ OBD-II আৰু মেপ চেন্সৰ কেলিব্ৰেশ্যন',
    descEn: 'Real-time laptop diagnostic interface syncing fuel injection milliseconds with original vehicle ECU.',
    descAs: 'লেপটপ ডায়েগনষ্টিক ছফ্টৱেৰৰ জৰিয়তে মূল ইঞ্জিন ইচিইউৰ সৈতে চিএনজি মেপিং সংহতি।',
    imageUrl: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=1000&q=80',
    tag: 'Computerized Tuning'
  },
  {
    id: 'gal-3',
    category: 'testing',
    titleEn: 'PESO Hydrostatic 330 Bar Pressure Testing Rig',
    titleAs: 'PESO ৩৩০ বাৰ হাইড্ৰ\'ষ্টেটিক চাপ পৰীক্ষা কেন্দ্ৰ',
    descEn: 'Water jacket enclosure testing volumetric expansion and structural resilience of seamless cylinders.',
    descAs: 'পানীৰ জেকেটত উচ্চ চাপ প্ৰয়োগ কৰি চিলিণ্ডাৰৰ মজবুতি আৰু প্ৰসাৰণ ক্ষমতা পৰীক্ষা।',
    imageUrl: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&w=1000&q=80',
    tag: 'Safety Hydro-Test'
  },
  {
    id: 'gal-4',
    category: 'facility',
    titleEn: 'Guwahati Workshop Installation Bays',
    titleAs: 'গুৱাহাটী কৰ্মশালাৰ ইনষ্টলেচন বে\'',
    descEn: 'Spacious, well-equipped multi-bay gas retrofitting facility located opposite Nezone Steel on NH-37, Garchuk, Guwahati.',
    descAs: 'গুৱাহাটীৰ গড়চুকৰ এনএইচ-৩৭, নেজোন ষ্টীলৰ বিপৰীতে অৱস্থিত সুসজ্জিত কাৰিকৰী কৰ্মশালা চৌহদ।',
    imageUrl: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1000&q=80',
    tag: 'Guwahati Facility'
  },
  {
    id: 'gal-5',
    category: 'fitment',
    titleEn: 'Rigid Boot Floor Cradle & Safety Burst Valve Mounting',
    titleAs: 'ডিকিত মজবুত ষ্টীল ক্ৰেডল আৰু সুৰক্ষা ভাল্ভ সংস্থাপন',
    descEn: 'Anti-corrosive rubber cushioned clamps holding seamless steel PESO cylinder with external vent ducts.',
    descAs: 'বাহ্যিক গেছ নিৰ্গমন নলীৰ সৈতে ডিকিৰ মজিয়াত চিলিণ্ডাৰ সুৰক্ষিতভাৱে ফিটিং।',
    imageUrl: 'https://images.unsplash.com/photo-1632823469850-2e21b0b57fa2?auto=format&fit=crop&w=1000&q=80',
    tag: 'Secure Mounting'
  },
  {
    id: 'gal-6',
    category: 'diagnostics',
    titleEn: 'Electronic Combustible Gas Leak Sniffer Inspection',
    titleAs: 'ইলেক্ট্ৰনিক সংবেদনশীল গেছ লিক নিৰীক্ষণ',
    descEn: 'High-precision micro-leak sniffing across every union joint, high-pressure reducer and filling valve.',
    descAs: 'প্ৰতিটো ভাল্ভ, ৰিডিউচাৰ আৰু সংযোগস্থলত অতি ক্ষুদ্ৰ গেছ লিক পৰীক্ষা।',
    imageUrl: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1000&q=80',
    tag: 'Zero Leak Protocol'
  }
];

export interface VideoItem {
  id: string;
  titleEn: string;
  titleAs: string;
  duration: string;
  descriptionEn: string;
  descriptionAs: string;
  thumbnailUrl: string;
  youtubeId: string;
}

export const videoGalleryData: VideoItem[] = [
  {
    id: 'vid-1',
    titleEn: 'Sequential Kit Fitting on Dual-Jet Engine: Detailed Walkthrough',
    titleAs: 'ডুৱেল-জেট ইঞ্জিনত ছিকুৱেনচিয়েল কিট সংস্থাপনৰ পদ্ধতি',
    duration: '8:45',
    descriptionEn: 'Senior technician walkthrough of proper nozzle angle, injector rail placement, and fire-resistant wiring harness routing.',
    descriptionAs: 'আমাৰ মেকানিকৰ দ্বাৰা নজেল এংগল, ইনজেক্টৰ সংযোগ আৰু সুৰক্ষিত ৱায়াৰিং হাৰ্নেছৰ বিৱৰণ।',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600793575654-910699b5e4d4?auto=format&fit=crop&w=800&q=80',
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'vid-2',
    titleEn: 'Digital ECU Tuning: How We Achieve Zero Lag on AC Load',
    titleAs: 'ডিজিটেল ইচিইউ টিউনিং: এচি অন থকা অৱস্থাতো লেগ-মুক্ত পিক-আপ',
    duration: '6:15',
    descriptionEn: 'Demonstrating live fuel trim matching using diagnostic software to prevent check-engine lights and retain petrol-like response.',
    descriptionAs: 'ডায়েগনষ্টিক ছফ্টৱেৰৰ জৰিয়তে ফুৱেল মেপিং কৰি চেক ইঞ্জিন লাইট নোহোৱাকৈ গাড়ী সুচল ৰখাৰ উপায়।',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'vid-3',
    titleEn: 'Why Cylinder Hydro-Testing Every 3 Years is Vital for Your Safety',
    titleAs: 'প্ৰতি ৩ বছৰত চিলিণ্ডাৰ হাইড্ৰ\'-টেষ্টিং কিয় জীৱনৰ বাবে অপৰিহাৰ্য',
    duration: '5:20',
    descriptionEn: 'Inside the PESO hydro-testing chamber: seeing how 330 bar hydrostatic pressure checks for internal metal fatigue.',
    descriptionAs: 'PESO হাইড্ৰ\'-টেষ্টিং ৰিগৰ ভিতৰত ৩৩০ বাৰ চাপত চিলিণ্ডাৰৰ ক্ষমতা কেনেদৰে পৰীক্ষা কৰা হয় চাওক।',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
    youtubeId: 'dQw4w9WgXcQ'
  }
];
