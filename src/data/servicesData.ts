export interface ServiceDetail {
  slug: string;
  iconName: string;
  imageUrl: string;
  titleEn: string;
  titleAs: string;
  shortDescEn: string;
  shortDescAs: string;
  badgeEn: string;
  badgeAs: string;
  whatItIsEn: string;
  whatItIsAs: string;
  whoNeedsItEn: string[];
  whoNeedsItAs: string[];
  processStepsEn: { step: string; title: string; description: string }[];
  processStepsAs: { step: string; title: string; description: string }[];
  considerationsEn: string[];
  considerationsAs: string[];
  technicalHighlightsEn: { label: string; value: string }[];
  technicalHighlightsAs: { label: string; value: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "cng-kit-installation",
    iconName: "Wrench",
    imageUrl: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80",
    titleEn: "CNG Kit Installation",
    titleAs: "চিএনজি কিট সংস্থাপন",
    shortDescEn: "Professional fitment of RTO and PESO approved sequential and conventional CNG systems with seamless engine integration.",
    shortDescAs: "চৰকাৰী স্বীকৃতিপ্ৰাপ্ত ছিকুৱেনচিয়েল আৰু সাধাৰণ চিএনজি কিটৰ পেছাদাৰী সংস্থাপন।",
    badgeEn: "Sequential & Conventional Kits",
    badgeAs: "ছিকুৱেনচিয়েল আৰু সাধাৰণ কিট",
    whatItIsEn: "Our CNG Kit Installation service provides certified retrofitting for petrol vehicles using high-precision sequential injection technology. The system features a dedicated electronic control unit (ECU), high-speed rail injectors, dynamic timing advancers, and PESO-compliant seamless cylinders designed to deliver comparable petrol-like acceleration with substantial fuel savings.",
    whatItIsAs: "আমাৰ চিএনজি কিট সংস্থাপন সেৱাৰ জৰিয়তে পেট্ৰল চালিত বাহনসমূহত উচ্চ মানৰ ছিকুৱেনচিয়েল গেছ ইনজেকচন প্ৰযুক্তি সংস্থাপন কৰা হয়। ইয়াত নিৰ্দিষ্ট ইচিইউ, দ্ৰুত ইনজেক্টৰ ৰেল, আৰু চৰকাৰী PESO অনুমোদিত চিলিণ্ডাৰ ব্যৱহাৰ কৰা হয়, যাৰ দ্বাৰা পেট্ৰলৰ দৰেই সুচল গতি আৰু যথেষ্ট ইন্ধন সাশ্ৰয় লাভ হয়।",
    whoNeedsItEn: [
      "Owners of petrol cars seeking up to 60-70% reduction in monthly running fuel expenses.",
      "Daily city commuters and commercial cab operators desiring higher per-kilometer mileage.",
      "Vehicle owners needing a government-authorized RFC fitment with valid safety endorsement."
    ],
    whoNeedsItAs: [
      "যিসকল গাড়ী চালকে মাহেকীয়া ইন্ধন খৰচ ৬০-৭০% লৈকে হ্ৰাস কৰিব বিচাৰে।",
      "দৈনন্দিন চহৰত বাহন চলোৱা আৰু বাণিজ্যিক টেক্সি চালকসকল।",
      "চৰকাৰী স্বীকৃতিপ্ৰাপ্ত RFC কেন্দ্ৰৰ দ্বাৰা বৈধ সুৰক্ষা অনুমোদন বিচৰা বাহনৰ গৰাকীসকল।"
    ],
    processStepsEn: [
      { step: "01", title: "Vehicle & Electrical Diagnostic Scan", description: "Comprehensive inspection of spark plugs, ignition coils, engine compression, and battery voltage." },
      { step: "02", title: "Cylinder & Pipeline Mounting", description: "Rigid floor-mounted cradle installation with vent hoses, safety burst disc valves, and seamless steel gas piping." },
      { step: "03", title: "Manifold Drilling & Injector Fitting", description: "Precision angled nozzle placement into intake manifold runners for optimal gas distribution." },
      { step: "04", title: "Wiring & Reducer Integration", description: "OEM-grade soldered wiring harness with waterproof connectors, reducer mount, and vacuum hoses." },
      { step: "05", title: "Computerized Calibration & Leak Test", description: "Electronic gas sniff-testing followed by dynamic OBD-II synchronized road calibration." }
    ],
    processStepsAs: [
      { step: "০১", title: "বাহন আৰু বৈদ্যুতিক নিদান পৰীক্ষা", description: "স্পাৰ্ক প্লাগ, ইগনিশ্বন কইল, কমপ্ৰেচন আৰু বেটাৰী ভল্টেজৰ সম্পূৰ্ণ পৰীক্ষা।" },
      { step: "০২", title: "চিলিণ্ডাৰ আৰু পাইপলাইন সংস্থাপন", description: "ভেণ্ট হ'জ, সুৰক্ষা ভাল্ভ আৰু মজবুত পাইপলাইনৰ সৈতে চিলিণ্ডাৰ ফিটিং।" },
      { step: "০৩", title: "মেনিফ'ল্ড ড্ৰিলিং আৰু ইনজেক্টৰ সংযোগ", description: "গেছৰ সঠিক বিতৰণৰ বাবে ইঞ্জিন ইনটেক মেনিফ'ল্ডত নিখুঁত এংগলত নজেল ফিটিং।" },
      { step: "০৪", title: "তাঁৰ আৰু ৰিডিউচাৰ সংযোগ", description: "ৱাটাৰপ্ৰুফ সংযোগকাৰী আৰু মজবুত ভেকুৱাম পাইপৰ সৈতে ৰিডিউচাৰ সংযোগ।" },
      { step: "০৫", title: "কম্পিউটাৰাইজড টিউনিং আৰু লিক পৰীক্ষা", description: "গেছ লিক নিৰীক্ষণ আৰু বাস্তৱ পথ পৰীক্ষণৰ দ্বাৰা ইচিইউ কেলিব্ৰেশ্যন সম্পন্ন কৰা।" }
    ],
    considerationsEn: [
      "Ensure your vehicle engine is mechanically sound and free of existing misfire trouble codes prior to fitment.",
      "Select a compatible cylinder capacity (usually 12kg or 14kg water capacity) depending on your boot space requirements.",
      "Always retain the fitment invoice and compliance plates required for subsequent RTO endorsement."
    ],
    considerationsAs: [
      "ফিটিং কৰাৰ আগতে গাড়ীৰ ইঞ্জিন সম্পূৰ্ণ সুস্থ আৰু কোনো মিছফায়াৰ ক'ড নথকাটো নিশ্চিত কৰক।",
      "গাড়ীৰ ডিকিৰ ঠাই অনুসৰি উপযুক্ত চিলিণ্ডাৰৰ আকাৰ বাছনি কৰক (সাধাৰণতে ১২ কেজি বা ১৪ কেজি)।",
      "ভৱিষ্যতৰ আৰটিঅ' অনুমোদনৰ বাবে প্ৰদান কৰা ইনভয়েচ আৰু সুৰক্ষা ফলক সদায় সংৰক্ষণ কৰক।"
    ],
    technicalHighlightsEn: [
      { label: "Compatible Engines", value: "3, 4, 6 & 8 Cylinder MPFi / Dual-Jet Petrol" },
      { label: "System Type", value: "Sequential Multi-Point Gas Injection" },
      { label: "Cylinder Standard", value: "PESO Approved Seamless Alloy Steel (IS 15490)" },
      { label: "Emissions Standard", value: "BS-IV & BS-VI Stage II OBD Compliant" }
    ],
    technicalHighlightsAs: [
      { label: "উপযোগী ইঞ্জিন", value: "৩, ৪, ৬ আৰু ৮ চিলিণ্ডাৰ MPFi / Dual-Jet পেট্ৰল" },
      { label: "পদ্ধতিৰ ধৰণ", value: "ছিকুৱেনচিয়েল মাল্টি-পইণ্ট গেছ ইনজেকচন" },
      { label: "চিলিণ্ডাৰ মানদণ্ড", value: "PESO অনুমোদিত চিমলেছ ষ্টীল (IS 15490)" },
      { label: "নিৰ্গমন মানদণ্ড", value: "BS-IV আৰু BS-VI ষ্টেজ ২ OBD মান্য" }
    ]
  },
  {
    slug: "cng-kit-distribution",
    iconName: "PackageCheck",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    titleEn: "CNG Kit Distribution",
    titleAs: "চিএনজি কিট বিতৰণ",
    shortDescEn: "Authorized wholesale and retail distribution of authentic conversion kits, cylinders, and certified OEM spare parts.",
    shortDescAs: "প্ৰকৃত চিএনজি কিট, চিলিণ্ডাৰ আৰু স্পেয়াৰ পাৰ্টছৰ অনুমোদিত পাইকাৰী আৰু খুচুৰা বিতৰণ।",
    badgeEn: "Wholesale & Retail Network",
    badgeAs: "পাইকাৰী আৰু খুচুৰা নেটৱৰ্ক",
    whatItIsEn: "As an authorized distributor operating since 1998, Car's Energy Co. supplies automotive retrofitting workshops, authorized car dealerships, fleet workshops, and retailers with genuine conversion kits, gas injectors, electronic timing advancers, reducers, and high-pressure valves from reputable international and domestic manufacturers.",
    whatItIsAs: "১৯৯৮ চনৰ পৰা এক অনুমোদিত বিতৰক হিচাপে কাৰ্ছ এনাৰ্জী কো.-এ বিভিন্ন অটোমোবাইল ৱৰ্কশ্বপ, ডিলাৰ আৰু খুচুৰা বিক্ৰেতাসকলক বিশ্বস্ত ব্ৰেণ্ডৰ প্ৰকৃত চিএনজি কিট, গেছ ইনজেক্টৰ, টাইমিং এডভান্সাৰ, ৰিডিউচাৰ আৰু সুৰক্ষা ভাল্ভ যোগান ধৰি আহিছে।",
    whoNeedsItEn: [
      "Regional CNG fitment centers looking for bulk wholesale supply of certified kits.",
      "Automotive repair workshops requiring original replacement spare parts and repair kits.",
      "Fleet logistics managers seeking bulk maintenance components for commercial fleets."
    ],
    whoNeedsItAs: [
      "প্ৰমাণিত কিটৰ পাইকাৰী যোগান বিচৰা আঞ্চলিক চিএনজি সংস্থাপন কেন্দ্ৰসমূহ।",
      "প্ৰকৃত স্পেয়াৰ পাৰ্টছ আৰু মেৰামতি সামগ্ৰী বিচৰা অটোমোবাইল মেৰামতি কেন্দ্ৰসমূহ।",
      "বাণিজ্যিক বাহনসমূহৰ বাবে নিয়মিত সামগ্ৰী বিচৰা পৰিবহণ সংস্থা আৰু ফ্লিট পৰিচালকসকল।"
    ],
    processStepsEn: [
      { step: "01", title: "B2B Technical Requirement Evaluation", description: "Reviewing workshop volume, vehicle models handled, and desired brand ecosystem." },
      { step: "02", title: "Batch Verification & Serial Allocation", description: "Matching barcoded kits with manufacturer warranty records and batch test reports." },
      { step: "03", title: "Packaging & Logistics Dispatch", description: "Damage-resistant transit packaging and nationwide expedited courier dispatch." },
      { step: "04", title: "Dealer Technical Support", description: "Providing wiring diagrams, calibration software files, and troubleshooting manuals." }
    ],
    processStepsAs: [
      { step: "০১", title: "কাৰিকৰী প্ৰয়োজনীয়তা নিৰূপণ", description: "কৰ্মশালাৰ প্ৰয়োজনীয়তা, বাহনৰ মডেল আৰু বিচৰা ব্ৰেণ্ডসমূহৰ পৰ্যালোচনা।" },
      { step: "০২", title: "চিৰিয়েল পৰীক্ষা আৰু আবণ্টন", description: "নিৰ্মাতাৰ ৱাৰেণ্টি আৰু টেষ্ট ৰিপৰ্টৰ সৈতে বাৰক'ড যুক্ত কিট মিলোৱা।" },
      { step: "০৩", title: "সুৰক্ষিত পেকিং আৰু প্ৰেৰণ", description: "পৰিবহণত ক্ষতি নোহোৱাকৈ সুৰক্ষিত পেকিং আৰু দ্ৰুত কুৰিয়াৰ প্ৰেৰণ।" },
      { step: "০৪", title: "ডিলাৰ কাৰিকৰী সাহায্য", description: "ৱায়াৰিং ডায়েগ্ৰাম, কেলিব্ৰেশ্যন ছফ্টৱেৰ আৰু মেৰামতি নিৰ্দেশনা প্ৰদান।" }
    ],
    considerationsEn: [
      "Minimum Order Quantities (MOQ) apply for wholesale distributor tier pricing.",
      "Distributor warranty requires fitment by certified technicians following manufacturer guidelines.",
      "All kits include official hologram stamps preventing counterfeit substitutions."
    ],
    considerationsAs: [
      "পাইকাৰী মূল্যৰ বাবে নিম্নতম অৰ্ডাৰৰ সীমা (MOQ) প্ৰযোজ্য হয়।",
      "ৱাৰেণ্টি বাহাল ৰাখিবলৈ নিৰ্মাতাৰ নিৰ্দেশনা অনুসৰি প্ৰশিক্ষিত কাৰিকৰৰ দ্বাৰা ফিটিং কৰাব লাগিব।",
      "সকলো সামগ্ৰীত নকল প্ৰতিৰোধক অফিচিয়েল হল'গ্ৰাম উপলব্ধ।"
    ],
    technicalHighlightsEn: [
      { label: "Authorized Brands", value: "Lovato, Motozen, Gastech Italy, Mijo, STAG" },
      { label: "Inventory Categories", value: "ECUs, Reducers, Injector Rails, Advancers, Harnesses" },
      { label: "Warranty Support", value: "Official Manufacturer Backed Guarantee" },
      { label: "Distribution Hub", value: "Mundka Central Warehouse, New Delhi" }
    ],
    technicalHighlightsAs: [
      { label: "অনুমোদিত ব্ৰেণ্ডসমূহ", value: "Lovato, Motozen, Gastech Italy, Mijo, STAG" },
      { label: "উপলব্ধ সামগ্ৰী", value: "ECU, ৰিডিউচাৰ, ইনজেক্টৰ ৰেল, এডভান্সাৰ, ৱায়াৰিং হাৰ্নেছ" },
      { label: "ৱাৰেণ্টি সাহায্য", value: "নিৰ্মাতা কোম্পানীৰ অফিচিয়েল নিশ্চয়তা" },
      { label: "বিতৰণ কেন্দ্ৰ", value: "মুণ্ডকা কেন্দ্ৰীয় গুদাম, নতুন দিল্লী" }
    ]
  },
  {
    slug: "ecu-tuning-calibration",
    iconName: "Cpu",
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80",
    titleEn: "ECU Tuning & Calibration",
    titleAs: "ইচিইউ টিউনিং আৰু কেলিব্ৰেশ্যন",
    shortDescEn: "Computerized digital fuel mapping, OBD-II synchronization, and real-time gas trim optimization.",
    shortDescAs: "কম্পিউটাৰাইজড ডিজিটেল ইন্ধন মেপিং, OBD-II সংযোগ আৰু নিখুঁত গেছ টিউনিং।",
    badgeEn: "Digital Map Optimization",
    badgeAs: "ডিজিটেল মেপ টিউনিং",
    whatItIsEn: "ECU Tuning & Calibration aligns the microsecond injection duration of the CNG system with the vehicle’s original petrol ECU. Using proprietary diagnostic software and live OBD-II data readers, our engineers adjust fuel trims (STFT & LTFT) across varying loads and engine temperatures to eliminate lag, prevent flat spots, and maximize thermal efficiency.",
    whatItIsAs: "ইচিইউ টিউনিং আৰু কেলিব্ৰেশ্যনৰ জৰিয়তে গাড়ীৰ মূল পেট্ৰল কম্পিউটাৰৰ সৈতে চিএনজি গেছ ইনজেকচনৰ সময় আৰু অনুপাত মিলি থকাকৈ মিলোৱা হয়। ডায়েগনষ্টিক ছফ্টৱেৰ আৰু লাইভ OBD-II ডাটা ব্যৱহাৰ কৰি আমি ইঞ্জিনৰ শক্তি বৃদ্ধি আৰু তেলৰ উপযুক্ত কাৰ্যক্ষমতা নিশ্চিত কৰোঁ।",
    whoNeedsItEn: [
      "Vehicles experiencing sluggish acceleration or jerking while switching between petrol and CNG.",
      "Cars displaying Check Engine Lights (P0171 lean or P0172 rich codes) post gas conversion.",
      "Owners noticing unexpected drops in gas mileage or uneven idling when AC is turned on."
    ],
    whoNeedsItAs: [
      "পেট্ৰল আৰু চিএনজিৰ মাজত সলনি হওঁতে লেগ বা ঝাঁকুনি অনুভৱ হোৱা বাহনসমূহ।",
      "ডেশ্বব'ৰ্ডত চেক ইঞ্জিন লাইট (P0171 বা P0172) জ্বলি থকা বাহনসমূহ।",
      "এচি চলোৱাৰ সময়ত ইঞ্জিন কঁপা বা গেছৰ মাইলেজ হঠাৎ কমি যোৱা বাহনৰ গৰাকীসকল।"
    ],
    processStepsEn: [
      { step: "01", title: "Baseline OBD Scan", description: "Reading short-term and long-term petrol fuel trims under normal driving conditions." },
      { step: "02", title: "Pressure & Temperature Calibration", description: "Configuring temperature sensor curves and differential pressure thresholds." },
      { step: "03", title: "Autocalibration & Injection Mapping", description: "Executing multi-point RPM vs Manifold Absolute Pressure (MAP) curve matching." },
      { step: "04", title: "Dynamic Road Testing", description: "Fine-tuning cruising, overtaking, and decel-cut fuel trims under live load." }
    ],
    processStepsAs: [
      { step: "০১", title: "প্ৰাথমিক OBD স্কেন", description: "স্বাভাৱিক অৱস্থাত ইঞ্জিনৰ পেট্ৰল ফুৱেল ট্ৰিম আৰু কাৰ্যক্ষমতা নিৰীক্ষণ।" },
      { step: "০২", title: "চাপ আৰু উষ্ণতা সংৰক্ষণ", description: "উষ্ণতা আৰু পাৰ্থক্যজনিত চাপৰ সীমা ছফ্টৱেৰত সঠিকভাৱে নিৰ্ধাৰণ।" },
      { step: "০৩", title: "ইনজেকচন মেপিং", description: "RPM আৰু MAP অনুপাতৰ সৈতে মিলি থকাকৈ গেছ মেপ সংহতি কৰা।" },
      { step: "০৪", title: "বাস্তৱ পথ পৰীক্ষা", description: "গাড়ী চলোৱাৰ সময়ত অভাৰটেকিং আৰু এচি লোডত নিখুঁত টিউনিং সম্পূৰ্ণ কৰা।" }
    ],
    considerationsEn: [
      "Ensure the petrol fuel system (injectors, O2 sensors) is working properly before tuning CNG.",
      "Never drive continuously with an illuminated check engine warning indicating lean fuel mixture.",
      "Recalibration is advised following major spark plug changes or reducer pressure maintenance."
    ],
    considerationsAs: [
      "চিএনজি টিউন কৰাৰ পূৰ্বে পেট্ৰল ইঞ্জিন আৰু O2 চেন্সৰ ঠিকে থকাটো প্ৰয়োজনীয়।",
      "চেক ইঞ্জিন লাইট জ্বলি থাকিলে গাড়ীখন বহু সময় চলোৱাৰ পৰা বিৰত থাকক।",
      "স্পাৰ্ক প্লাগ বা ৰিডিউচাৰ মেৰামতি কৰাৰ পিছত পুনৰ কেলিব্ৰেশ্যন কৰাটো উপযুক্ত।"
    ],
    technicalHighlightsEn: [
      { label: "Diagnostic Protocols", value: "ISO 9141-2, KWP2000, CAN 2.0 (11/29 bit)" },
      { label: "Trim Alignment Target", value: "Within ±5% of factory petrol baseline" },
      { label: "Switchover Strategy", value: "RPM & temperature gradual seamless transition" },
      { label: "Software Suites", value: "Official Lovato, STAG, Gastech, AEB interfaces" }
    ],
    technicalHighlightsAs: [
      { label: "ডায়েগনষ্টিক প্ৰটকল", value: "ISO 9141-2, KWP2000, CAN 2.0 (11/29 bit)" },
      { label: "ট্ৰিম মিলোৱাৰ লক্ষ্য", value: "মূল পেট্ৰল মানৰ ±৫% ভিতৰত" },
      { label: "ছুইচ অভাৰ ব্যৱস্থা", value: "RPM আৰু উষ্ণতাভিত্তিক মসৃণ পৰিৱৰ্তন" },
      { label: "ছফ্টৱেৰ প্লেটফৰ্ম", value: "অফিচিয়েল Lovato, STAG, Gastech, AEB ইণ্টাৰফেচ" }
    ]
  },
  {
    slug: "rto-documentation-rc-endorsement",
    iconName: "FileCheck2",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80",
    titleEn: "RTO Documentation & RC Endorsement",
    titleAs: "আৰটিঅ' নথিপত্ৰ আৰু আৰচি এনডৰ্ছমেণ্ট",
    shortDescEn: "Complete statutory paperwork assistance for lawful endorsement of CNG fuel conversion on the vehicle RC.",
    shortDescAs: "বাহনৰ পঞ্জীয়ন প্ৰমাণপত্ৰত (RC) চিএনজি বৈধভাৱে অনুমোদন কৰাৰ বাবে প্ৰয়োজনীয় নথি সাহায্য।",
    badgeEn: "Legal Compliance Support",
    badgeAs: "আইনী স্বীকৃতি সাহায্য",
    whatItIsEn: "Converting a motor vehicle to CNG legally mandates updating the registration record with the Regional Transport Office (RTO) under the Central Motor Vehicles Rules (CMVR). As an authorized RFC (RFC Code No. 261), Car's Energy Co. provides authentic fitment certificates, emission test reports, and complete file processing support to have the CNG fuel type successfully endorsed on your official Registration Certificate (RC).",
    whatItIsAs: "ভাৰতীয় মটৰ বাহন আইন (CMVR) অনুসৰি চিএনজি কিট লগোৱাৰ পিছত আঞ্চলিক পৰিবহণ কাৰ্যালয়ত (RTO) পঞ্জীয়ন নথিপত্ৰ উন্নীত কৰাটো বাধ্যতামূলক। কাৰ্ছ এনাৰ্জী কো.-এ (RFC ক'ড নং ২৬১) প্ৰকৃত ফিটমেণ্ট প্ৰমাণপত্ৰ, প্ৰদূষণ প্ৰতিবেদন আৰু সম্পূৰ্ণ নথিপত্ৰ সাহায্য আগবঢ়ায় যাতে আপোনাৰ RC-ত চিএনজি আইনীভাৱে নথিবদ্ধ হয়।",
    whoNeedsItEn: [
      "Car owners who have recently installed an authorized retrofitting kit.",
      "Used car buyers wishing to legalize unendorsed retrofits.",
      "Commercial fleet operators requiring strict compliance for annual fitness renewals."
    ],
    whoNeedsItAs: [
      "নতুনকৈ অনুমোদিত চিএনজি কিট লগোৱা বাহনৰ গৰাকীসকল।",
      "পূৰ্বে অনুমোদন নকৰা পুৰণি গাড়ী ক্ৰয় কৰা চালকসকল।",
      "বাৰ্ষিক বাহন ফিটনেছ নবীকৰণৰ বাবে আইনী নথি প্ৰয়োজন হোৱা বাণিজ্যিক বাহন পৰিচালকসকল।"
    ],
    processStepsEn: [
      { step: "01", title: "Fitment Audit & Invoice Generation", description: "Verifying cylinder serial number and issuing Form 21 & Form 22 compliance documents." },
      { step: "02", title: "Emission & Hydro-Test Certification", description: "Generating verified pollution check and valid PESO cylinder testing reports." },
      { step: "03", title: "RTO Application Submission", description: "Filing statutory forms (Form 33 / endorsement) with relevant transport authority." },
      { step: "04", title: "Vehicle Physical Inspection", description: "Coordinating physical verification of engine/chassis numbers by motor vehicle inspectors." },
      { step: "05", title: "Endorsed RC Dispatch", description: "Receiving the updated smart-card Registration Certificate noting Dual Fuel Petrol/CNG." }
    ],
    processStepsAs: [
      { step: "০১", title: "ফিটমেণ্ট পৰীক্ষা আৰু প্ৰমাণপত্ৰ প্ৰস্তুত", description: "চিলিণ্ডাৰ নং পৰীক্ষা কৰি ফৰ্ম ২১ আৰু ফৰ্ম ২২ প্ৰস্তুত কৰা।" },
      { step: "০২", title: "প্ৰদূষণ আৰু হাইড্ৰ'-টেষ্ট প্ৰতিবেদন", description: "বৈধ প্ৰদূষণ পৰীক্ষা আৰু PESO চিলিণ্ডাৰ নিৰাপত্তা প্ৰতিবেদন সংগ্ৰহ।" },
      { step: "০৩", title: "আৰটিঅ' আবেদন দাখিল", description: "পৰিবহণ কৰ্তৃপক্ষৰ ওচৰত যাৱতীয় ফৰ্ম আৰু মাচুল দাখিল কৰা।" },
      { step: "০৪", title: "বাহন পৰিদৰ্শন", description: "মটৰ বাহন পৰিদৰ্শকৰ দ্বাৰা চেছিছ আৰু ইঞ্জিন নম্বৰৰ ভৌতিক পৰীক্ষণ।" },
      { step: "০৫", title: "অনুমোদিত আৰচি প্ৰদান", description: "পেট্ৰল/চিএনজি দ্বৈত ইন্ধন উল্লেখ থকা নতুন আৰচি স্মাৰ্ট কাৰ্ড প্ৰাপ্ত কৰা।" }
    ],
    considerationsEn: [
      "Ensure the vehicle has valid insurance, clear hypothecation status (or NOC if financed), and pending challans settled.",
      "Vehicle engine number and chassis number stamped on the frame must be clearly legible.",
      "Driving an unendorsed converted vehicle invalidates motor insurance claims in event of collision."
    ],
    considerationsAs: [
      "গাড়ীৰ বীমা বৈধ হ'ব লাগিব আৰু কোনো বকেয়া চালান নাথাকিব লাগিব।",
      "গাড়ীৰ চেছিছ আৰু ইঞ্জিন নম্বৰ স্পষ্টভাৱে পঢ়িব পৰা হ'ব লাগিব।",
      "অনুমোদন নোহোৱাকৈ গাড়ী চলালে দুৰ্ঘটনাৰ সময়ত বীমাৰ সুবিধা নাপাব পাৰে।"
    ],
    technicalHighlightsEn: [
      { label: "Workshop License", value: "Authorized RFC Code No. 261" },
      { label: "Statutory Framework", value: "Central Motor Vehicles Rules (CMVR) Rule 115" },
      { label: "Documentation Included", value: "Type Approval, Form 22, Cylinder Safety Certificate" },
      { label: "Fuel Category Endorsed", value: "Bi-Fuel (Petrol / CNG)" }
    ],
    technicalHighlightsAs: [
      { label: "কৰ্মশালাৰ অনুজ্ঞাপত্ৰ", value: "স্বীকৃত RFC ক'ড নং ২৬১" },
      { label: "আইনী ব্যৱস্থা", value: "কেন্দ্ৰীয় মটৰ বাহন নিয়ম (CMVR) ৰুল ১১৫" },
      { label: "প্ৰদান কৰা নথি", value: "টাইপ এপ্ৰুভেল, ফৰ্ম ২২, চিলিণ্ডাৰ সুৰক্ষা প্ৰমাণপত্ৰ" },
      { label: "ইন্ধন শ্ৰেণী", value: "দ্বৈত ইন্ধন (পেট্ৰল / চিএনজি)" }
    ]
  },
  {
    slug: "cng-kit-servicing",
    iconName: "Settings",
    imageUrl: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1000&q=80",
    titleEn: "CNG Kit Servicing",
    titleAs: "চিএনজি কিট চাৰ্ভিচিং",
    shortDescEn: "Comprehensive diagnostics, high-pressure leak inspections, injector rail cleaning, and filter servicing.",
    shortDescAs: "নিদান, উচ্চ চাপৰ লিক পৰীক্ষা, ইনজেক্টৰ ৰেল পৰিষ্কাৰ আৰু সামগ্ৰিক চাৰ্ভিচিং।",
    badgeEn: "Preventative Maintenance",
    badgeAs: "নিয়মীয়া তত্বাৱধান",
    whatItIsEn: "Periodic CNG kit servicing is essential to maintain peak engine compression, prevent carbon buildup, and ensure optimal fuel economy. Our specialized service protocol covers multi-point electronic gas leak checks, ultrasonic rail injector cleaning, low and high-pressure filter replacements, pressure regulator inspection, and ECU software diagnostics.",
    whatItIsAs: "চিএনজি কিটৰ নিয়মিত চাৰ্ভিচিঙে ইঞ্জিনৰ শক্তি অটুট ৰাখে, কাৰ্বন জমা হোৱা ৰোধ কৰে আৰু ভাল মাইলেজ প্ৰদান কৰে। আমাৰ এই সেৱাত বৈদ্যুতিক গেছ লিক পৰীক্ষা, ইনজেক্টৰ ৰেল পৰিষ্কাৰ, ফিল্টাৰ সলনি আৰু প্ৰেচাৰ ৰেগুলেটৰৰ কাৰ্যক্ষমতা পৰীক্ষা অন্তৰ্ভুক্ত।",
    whoNeedsItEn: [
      "Vehicles that have completed 10,000 to 15,000 km since their last CNG maintenance.",
      "Drivers noticing faint gas odors inside the cabin or around the engine compartment.",
      "Cars displaying rough idling or hesitation when switching fuels under heavy load."
    ],
    whoNeedsItAs: [
      "পূৰ্বৰ চাৰ্ভিচিঙৰ পিছত ১০,০০০ ৰ পৰা ১৫,০০০ কিলোমিটাৰ অতিক্ৰম কৰা বাহনসমূহ।",
      "কেবিনৰ ভিতৰত বা ইঞ্জিনৰ ওচৰত গেছৰ গোন্ধ পোৱা বাহনৰ গৰাকীসকল।",
      "গাড়ীখন ইঞ্জিন আৰম্ভ কৰোঁতে বা এচি চলাওঁতে কঁপি উঠা অনুভৱ কৰিলে।"
    ],
    processStepsEn: [
      { step: "01", title: "Electronic Sniffer Leak Detection", description: "Scanning joints, valves, high-pressure lines, and filling points using calibrated detectors." },
      { step: "02", title: "Dual Filter Replacement", description: "Removing spent low-pressure (vapor) and high-pressure cartridge elements." },
      { step: "03", title: "Ultrasonic Injector Cleaning", description: "De-gumming injector plungers to ensure uniform delivery across all cylinders." },
      { step: "04", title: "Reducer Pressure Verification", description: "Checking dynamic output pressure against factory staging specification." },
      { step: "05", title: "Final Diagnostic Scan", description: "Resetting service counters and clearing intermittent diagnostic trouble codes." }
    ],
    processStepsAs: [
      { step: "০১", title: "লিক চিনাক্তকৰণ", description: "সকলো পাইপ আৰু ভাল্ভত বিশেষ চেন্সৰৰ সহায়ত গেছ লিক পৰীক্ষা কৰা।" },
      { step: "০২", title: "ফিল্টাৰ সলনি", description: "পুৰণি হাই-প্ৰেচাৰ আৰু ভাপ ফিল্টাৰ কাৰ্টিজ সলনি কৰা।" },
      { step: "০৩", title: "ইনজেক্টৰ পৰিষ্কাৰ", description: "ইনজেক্টৰ প্লাঞ্জাৰসমূহ পৰিষ্কাৰ কৰি গেছৰ যোগান একসমান কৰা।" },
      { step: "০৪", title: "ৰিডিউচাৰ চাপ নিৰীক্ষণ", description: "কাৰখানাৰ মান অনুসৰি ৰিডিউচাৰৰ আউটপুট চাপ সঠিক কৰা।" },
      { step: "০৫", title: "চূড়ান্ত নিদান স্কেন", description: "ডায়েগনষ্টিক ছিষ্টেমৰ ক'ডসমূহ নিৰীক্ষণ কৰি ছাৰ্ভিচিং সম্পূৰ্ণ কৰা।" }
    ],
    considerationsEn: [
      "Service intervals should not exceed 10,000 km to prevent oil impurities from contaminating the injector rail.",
      "Always replace both low-pressure vapor and high-pressure liquid-line filters together.",
      "Report any metallic rattle or hiss immediately to prevent regulator diaphragm damage."
    ],
    considerationsAs: [
      "ইনজেক্টৰ সুৰক্ষিত ৰাখিবলৈ প্ৰতি ১০,০০০ কিলোমিটাৰত চাৰ্ভিচিং কৰোৱা উচিত।",
      "উভয় ফিল্টাৰ একেলগে সলনি কৰাটো অধিক ফলপ্ৰসূ।",
      "কোনো ধৰণৰ অস্বাভাৱিক শব্দ বা গোন্ধ পালে তৎকালীনভাৱে পৰীক্ষা কৰাওক।"
    ],
    technicalHighlightsEn: [
      { label: "Recommended Interval", value: "Every 10,000 km or 6 months" },
      { label: "Leak Testing Standard", value: "Electronic Combustible Gas Detector (ppm sensitivity)" },
      { label: "Injector Servicing", value: "Ultrasonic pulsed bath & flow bench test" },
      { label: "Parts Replaced", value: "OEM coalescing filter & O-ring seals" }
    ],
    technicalHighlightsAs: [
      { label: "পৰামৰ্শিত সময়", value: "প্ৰতি ১০,০০০ কিমি বা ৬ মাহৰ মূৰে মূৰে" },
      { label: "লিক পৰীক্ষাৰ মান", value: "ইলেক্ট্ৰনিক গেছ ডিটেক্টৰ (ppm সংবেদনশীলতা)" },
      { label: "ইনজেক্টৰ চাৰ্ভিচিং", value: "আল্ট্ৰাছনিক ক্লিনিং আৰু ফ্ল' টেষ্ট" },
      { label: "পৰিৱৰ্তিত সামগ্ৰী", value: "প্ৰকৃত ফিল্টাৰ আৰু অ'-ৰিং ছীল" }
    ]
  },
  {
    slug: "cylinder-hydro-testing",
    iconName: "ShieldAlert",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    titleEn: "Cylinder Hydro Testing",
    titleAs: "চিলিণ্ডাৰ হাইড্ৰ' টেষ্টিং",
    shortDescEn: "Statutory hydrostatic pressure testing, ultrasonic wall inspection, and government PESO safety compliance certification.",
    shortDescAs: "চৰকাৰী PESO নিৰ্দেশনা অনুসৰি হাইড্ৰ'ষ্টেটিক চাপ পৰীক্ষা আৰু নিৰাপত্তা প্ৰমাণপত্ৰ।",
    badgeEn: "PESO Mandated Testing",
    badgeAs: "PESO বাধ্যতামূলক পৰীক্ষা",
    whatItIsEn: "Under the Gas Cylinders Rules (Petroleum and Explosives Safety Organization - PESO), every automotive CNG cylinder must undergo hydrostatic pressure testing every 3 years. The procedure subjects the cylinder to 1.5 times its working pressure (330 bar) inside a water jacket to measure elastic expansion, verify structural integrity, and detect metal fatigue.",
    whatItIsAs: "পেট্ৰ'লিয়াম এণ্ড এক্সপ্ল'ছিভছ ছেফটি অৰ্গেনাইজেচন (PESO) ৰ নিয়ম অনুসৰি প্ৰতি ৩ বছৰৰ মূৰে মূৰে বাহনৰ চিএনজি চিলিণ্ডাৰৰ হাইড্ৰ'ষ্টেটিক পৰীক্ষা কৰোৱাটো আইনগতভাৱে বাধ্যতামূলক। ইয়াত চিলিণ্ডাৰটোক পানীৰ ভিতৰত ৩৩০ বাৰ উচ্চ চাপত পৰীক্ষা কৰি ইয়াৰ নিৰাপত্তা আৰু স্থায়িত্ব নিশ্চিত কৰা হয়।",
    whoNeedsItEn: [
      "Vehicles where 3 years have elapsed since the date of initial cylinder manufacturing or last hydro-test.",
      "Commercial vehicles undergoing annual fitness testing at the RTO authority.",
      "Vehicles with cylinders displaying surface corrosion, scratch damage, or impact marks."
    ],
    whoNeedsItAs: [
      "চিলিণ্ডাৰ নিৰ্মাণ বা পূৰ্বৰ হাইড্ৰ'-টেষ্টৰ পৰা ৩ বছৰ সম্পূৰ্ণ হোৱা সকলো বাহন।",
      "আৰটিঅ'ত বাৰ্ষিক বাহন ফিটনেছ টেষ্ট দিবলগীয়া বাণিজ্যিক বাহনসমূহ।",
      "চিলিণ্ডাৰৰ বাহিৰত কোনো মামৰে ধৰা বা খুন্দা খোৱাৰ চিন থকা বাহনসমূহ।"
    ],
    processStepsEn: [
      { step: "01", title: "Degassing & Cylinder Removal", description: "Controlled depressurization and safe venting of residual gas prior to unmounting." },
      { step: "02", title: "Internal Video Borescope Inspection", description: "Internal cavity examination to detect pitting, rust scale, and thread condition." },
      { step: "03", title: "Hydrostatic Water Jacket Test", description: "Pressurizing cylinder with water up to 330 bar and recording permanent volumetric expansion." },
      { step: "04", title: "Internal Drying & Valve Overhaul", description: "Hot air purging to eliminate internal moisture followed by fitting a serviced safety valve." },
      { step: "05", title: "Official Certification & Stamping", description: "Punching new test date on the cylinder collar and issuing valid PESO compliance certificate." }
    ],
    processStepsAs: [
      { step: "০১", title: "গেছ মুক্ত কৰা আৰু চিলিণ্ডাৰ খোলা", description: "চিলিণ্ডাৰৰ ভিতৰত থকা অৱশিষ্ট গেছ সুৰক্ষিতভাৱে বাহিৰ কৰি চিলিণ্ডাৰ খোলা।" },
      { step: "০২", title: "ভিতৰৰ নিৰীক্ষণ", description: "কেমেৰাৰ সহায়ত চিলিণ্ডাৰৰ ভিতৰৰ মামৰে ধৰা বা ফাঁট মেলা পৰীক্ষা কৰা।" },
      { step: "০৩", title: "হাইড্ৰ'ষ্টেটিক চাপ পৰীক্ষা", description: "৩৩০ বাৰ উচ্চ পানীৰ চাপত চিলিণ্ডাৰৰ প্ৰসাৰণ আৰু ক্ষমতা পৰীক্ষা কৰা।" },
      { step: "০৪", title: "শুকান কৰা আৰু ভাল্ভ সংযোগ", description: "ভিতৰৰ পানী সম্পূৰ্ণ শুকাই নতুন সুৰক্ষা ভাল্ভ সঠিকভাৱে সংযোগ কৰা।" },
      { step: "০৫", title: "প্ৰমাণপত্ৰ আৰু ষ্টাম্পিং", description: "চিলিণ্ডাৰত নতুন পৰীক্ষাৰ তাৰিখ ষ্টাম্প কৰি আনুষ্ঠানিক PESO প্ৰমাণপত্ৰ প্ৰদান।" }
    ],
    considerationsEn: [
      "Testing takes approximately 24 to 48 hours for complete de-gassing, drying, and certified stamping.",
      "A cylinder that exceeds permanent expansion limits cannot be certified and must be condemned for safety.",
      "Carrying an expired test certificate is a punishable traffic violation and voids fuel pump filling authorization."
    ],
    considerationsAs: [
      "সম্পূৰ্ণ পৰীক্ষা, শুকুওৱা আৰু প্ৰমাণপত্ৰৰ বাবে সাধাৰণতে ২৪ ৰ পৰা ৪৮ ঘণ্টা সময়ৰ প্ৰয়োজন হয়।",
      "সুৰক্ষা সীমা অতিক্ৰম কৰা চিলিণ্ডাৰ আইনগতভাৱে বাতিল ঘোষণা কৰা হয়।",
      "ম্যাদ উকলি যোৱা চিলিণ্ডাৰেৰে গাড়ী চলোৱা বেআইনী আৰু গেছ ষ্টেচনত গেছ ভৰোৱাটো নিষিদ্ধ।"
    ],
    technicalHighlightsEn: [
      { label: "Regulatory Mandate", value: "PESO / Gas Cylinder Rules 2016" },
      { label: "Test Pressure", value: "330 Bar (1.5x of 200 Bar working pressure)" },
      { label: "Valid Duration", value: "3 Years from test date" },
      { label: "Inspection Technique", value: "Volumetric expansion water-jacket method & ultrasonic" }
    ],
    technicalHighlightsAs: [
      { label: "আইনী নিৰ্দেশনা", value: "PESO / গেছ চিলিণ্ডাৰ বিধি ২০১৬" },
      { label: "পৰীক্ষাৰ চাপ", value: "৩৩০ বাৰ (২০০ বাৰ কাৰ্যক্ষম চাপৰ ১.৫ গুণ)" },
      { label: "বৈধতাৰ সময়সীমা", value: "পৰীক্ষাৰ তাৰিখৰ পৰা ৩ বছৰ" },
      { label: "পৰীক্ষাৰ পদ্ধতি", value: "পানীৰ জেকেট পদ্ধতি আৰু আল্ট্ৰাছনিক নিৰীক্ষণ" }
    ]
  },
  {
    slug: "annual-maintenance-contract",
    iconName: "CalendarCheck",
    imageUrl: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1000&q=80",
    titleEn: "Annual Maintenance Contract (AMC)",
    titleAs: "বাৰ্ষিক তত্বাৱধান চুক্তি (AMC)",
    shortDescEn: "Year-round proactive service packages, emergency roadside assistance, and discounted genuine parts.",
    shortDescAs: "বছৰজোৰা নিয়মিত চাৰ্ভিচিং পেকেজ, জৰুৰী সাহায্য আৰু স্পেয়াৰ পাৰ্টছত ৰেহাই।",
    badgeEn: "Year-Round Peace of Mind",
    badgeAs: "বছৰজোৰা সুৰক্ষা নিশ্চয়তা",
    whatItIsEn: "Our Annual Maintenance Contract (AMC) is a comprehensive ownership plan engineered to give private vehicle owners and fleet managers predictable operating costs and flawless reliability. The plan covers scheduled filter changes, tuning checkups, leak audits, priority workshop lane access, and round-the-clock telephone breakdown support.",
    whatItIsAs: "আমাৰ বাৰ্ষিক তত্বাৱধান চুক্তি (AMC) হৈছে ব্যক্তিগত আৰু বাণিজ্যিক বাহন চালকসকলৰ বাবে এক সুচল বাৰ্ষিক পৰিকল্পনা। ইয়াৰ অধীনত নিয়মীয়া ফিল্টাৰ সলনি, টিউনিং, লিক পৰীক্ষা, অগ্ৰাধিকাৰ ভিত্তিত সেৱা আৰু জৰুৰী কাৰিকৰী সহায় প্ৰদান কৰা হয়।",
    whoNeedsItEn: [
      "High-mileage commuters traveling 50+ km daily wanting total reliability.",
      "Commercial taxi, delivery, and corporate fleet operators.",
      "Car owners who prefer budgeted maintenance over sudden unforeseen repairs."
    ],
    whoNeedsItAs: [
      "প্ৰতিদিনে ৫০ কিমিৰ অধিক গাড়ী চলোৱা নিয়মীয়া যাত্ৰীসকল।",
      "বাণিজ্যিক টেক্সি, ডেলিভাৰী আৰু কৰ্পোৰেট বাহন পৰিচালকসকল।",
      "হঠাৎ হোৱা খৰচৰ পৰা হাত সাৰি সুপৰিকল্পিত বাজেটত গাড়ীৰ যত্ন বিচৰা লোকসকল।"
    ],
    processStepsEn: [
      { step: "01", title: "Initial Vehicle Health Inspection", description: "Complete 30-point evaluation before enrolling the vehicle in the AMC program." },
      { step: "02", title: "Scheduled Periodic Services", description: "Up to 3 free routine checkups per year including computerized calibration." },
      { step: "03", title: "Complimentary Filter Replacements", description: "Scheduled replacement of low-pressure gas filters during the contract period." },
      { step: "04", title: "Priority Lane Access", description: "Zero waiting queue at our Mundka and Paschim Vihar workshops." }
    ],
    processStepsAs: [
      { step: "০১", title: "প্ৰাৰম্ভিক বাহন নিৰীক্ষণ", description: "এএমচি চুক্তিৰ পূৰ্বে গাড়ীখনৰ ৩০টা গুৰুত্বপূৰ্ণ পইণ্ট পৰীক্ষা কৰা।" },
      { step: "০২", title: "নিয়মীয়া সাময়িক সেৱা", description: "বছৰত ৩ বাৰ পৰ্যন্ত বিনামূলীয়া কম্পিউটাৰাইজড টিউনিং আৰু পৰীক্ষণ।" },
      { step: "০৩", title: "বিনামূলীয়া ফিল্টাৰ সলনি", description: "চুক্তিৰ সময়ছোৱাত নিৰ্ধাৰিত ফিল্টাৰ বিনামূলীয়াকৈ সলনি কৰা।" },
      { step: "০৪", title: "অগ্ৰাধিকাৰ সেৱা", description: "আমাৰ মুণ্ডকা আৰু পশ্চিম বিহাৰ কৰ্মশালাত দীঘলীয়া লাইন নোহোৱাকৈ দ্ৰুত সেৱা।" }
    ],
    considerationsEn: [
      "Contracts run for 12 months from the date of agreement.",
      "AMC covers labor and routine consumables; accidental damage is excluded.",
      "Transferable if vehicle ownership changes during the contract validity."
    ],
    considerationsAs: [
      "চুক্তিৰ সময়সীমা স্বাক্ষৰ কৰা তাৰিখৰ পৰা ১২ মাহৰ বাবে বাহাল থাকে।",
      "ইয়াত সাধাৰণ মেইণ্টেনেন্স অন্তৰ্ভুক্ত; দুৰ্ঘটনাজনিত ক্ষতি অন্তৰ্ভুক্ত নহয়।",
      "চুক্তিৰ সময়ত বাহনখন বিক্ৰী কৰিলে নতুন গৰাকীলৈ চুক্তি স্থানান্তৰ কৰিব পাৰি।"
    ],
    technicalHighlightsEn: [
      { label: "Validity Period", value: "1 Year (Renewable)" },
      { label: "Included Services", value: "3 Routine Tune-ups & 1 Complimentary Filter Set" },
      { label: "Discount on Parts", value: "15% Off on replacement injectors & reducers" },
      { label: "Emergency Support", value: "Direct technician hotline assistance" }
    ],
    technicalHighlightsAs: [
      { label: "বৈধতাৰ সময়", value: "১ বছৰ (নবীকৰণযোগ্য)" },
      { label: "অন্তৰ্ভুক্ত সেৱা", value: "৩ বাৰ ৰুটিন টিউনিং আৰু ১ ছেট বিনামূলীয়া ফিল্টাৰ" },
      { label: "সামগ্ৰীত ৰেহাই", value: "ইনজেক্টৰ আৰু ৰিডিউচাৰত ১৫% ৰেহাই" },
      { label: "জৰুৰী সহায়", value: "পোনপটীয়া মেকানিক হটলাইন সুবিধা" }
    ]
  },
  {
    slug: "filter-replacement",
    iconName: "Filter",
    imageUrl: "https://images.unsplash.com/photo-1580274455191-1c62238fa298?auto=format&fit=crop&w=1000&q=80",
    titleEn: "Filter Replacement",
    titleAs: "ফিল্টাৰ পৰিৱৰ্তন",
    shortDescEn: "Replacement of high-pressure liquid and low-pressure coalescing vapor filters to protect the injector rail.",
    shortDescAs: "ইনজেক্টৰ ৰেল সুৰক্ষিত ৰাখিবলৈ উচ্চ আৰু নিম্ন চাপৰ গেছ ফিল্টাৰ পৰিৱৰ্তন।",
    badgeEn: "Rail Protection",
    badgeAs: "ইনজেক্টৰ সুৰক্ষা",
    whatItIsEn: "CNG dispensing stations often carry microscopic trace oils, heavy paraffin waxes, and moisture from compressors. Without clean filtration, these contaminants clog delicate injector nozzles and damage reducer diaphragms. Our Filter Replacement service installs genuine dual-stage OEM filters to safeguard high-precision engine fuel components.",
    whatItIsAs: "গেছ ষ্টেচনৰ পৰা গেছ ভৰাওঁতে সামান্য পৰিমাণৰ তেল বা পানীৰ কণা প্ৰৱেশ কৰিব পাৰে। এইবোৰে ইনজেক্টৰ আৰু ৰিডিউচাৰৰ ক্ষতি কৰে। আমাৰ ফিল্টাৰ পৰিৱৰ্তন সেৱাত প্ৰকৃত অ'ইএম ফিল্টাৰ সংস্থাপন কৰি ইঞ্জিনক সুৰক্ষিত ৰখা হয়।",
    whoNeedsItEn: [
      "Any vehicle with 10,000 km logged since previous filter replacement.",
      "Engines experiencing rough idle or hesitation under acceleration.",
      "Vehicles operating in regions with older commercial filling compressors."
    ],
    whoNeedsItAs: [
      "পূৰ্বৰ ফিল্টাৰ সলনি কৰাৰ পিছত ১০,০০০ কিলোমিটাৰ চলোৱা বাহনসমূহ।",
      "গাড়ীৰ গতি তুলিবলৈ চেষ্টা কৰোঁতে বাধা অনুভৱ হোৱা বাহন।",
      "পুৰণি ফিলিং ষ্টেচনৰ পৰা নিয়মীয়াকৈ গেছ ভৰোৱা বাহনসমূহ।"
    ],
    processStepsEn: [
      { step: "01", title: "System Depressurization", description: "Safely closing cylinder valve and running the line dry." },
      { step: "02", title: "Filter Housing Disassembly", description: "Opening aluminum canister and inspecting for oily residue." },
      { step: "03", title: "Ultrasonic Chamber Cleaning", description: "Purging housing cavities before fitting new microfiber cartridge." },
      { step: "04", title: "High-Torque Reassembly & Sniffer Test", description: "Installing fresh Viton O-rings and validating high-pressure gas tightness." }
    ],
    processStepsAs: [
      { step: "০১", title: "চাপ মুক্ত কৰা", description: "চিলিণ্ডাৰ ভাল্ভ বন্ধ কৰি পাইপৰ গেছ সুৰক্ষিতভাৱে নিৰ্গমন কৰা।" },
      { step: "০২", title: "ফিল্টাৰ খোলা", description: "ফিল্টাৰ বক্স খুলি ভিতৰৰ তেল বা মলি নিৰীক্ষণ কৰা।" },
      { step: "০৩", title: "চেম্বাৰ পৰিষ্কাৰ", description: "নতুন ফিল্টাৰ লগোৱাৰ পূৰ্বে বাকচটো সুন্দৰভাৱে পৰিষ্কাৰ কৰা।" },
      { step: "০৪", title: "নতুন ফিল্টাৰ আৰু লিক পৰীক্ষা", description: "নতুন ছীল সংযোগ কৰি উচ্চ চাপত লিক নিৰীক্ষণ কৰা।" }
    ],
    considerationsEn: [
      "Always replace both low-pressure (12mm/14mm) and high-pressure filters together.",
      "Never attempt to wash or blow compressed air into used filter cartridges.",
      "Use only original coalescent media filters rated for automotive methane gas."
    ],
    considerationsAs: [
      "সদায় দুয়োটা ফিল্টাৰ একেলগে সলনি কৰাটো উচিত।",
      "ব্যৱহৃত পুৰণি ফিল্টাৰ কেতিয়াও ধুই পুনৰ ব্যৱহাৰ কৰিব নালাগে।",
      "কেৱল মাত্ৰ প্ৰকৃত আৰু নিৰাপদ ফিল্টাৰ ব্যৱহাৰ কৰক।"
    ],
    technicalHighlightsEn: [
      { label: "Filter Media", value: "Multi-layer coalescing microfiber with metal mesh" },
      { label: "Micron Rating", value: "2 to 10 micron particulate separation" },
      { label: "Recommended Cycle", value: "Every 10,000 km" },
      { label: "Seal Specification", value: "High-temperature Viton elastomeric O-rings" }
    ],
    technicalHighlightsAs: [
      { label: "ফিল্টাৰৰ উপাদান", value: "মাল্টি-লেয়াৰ মাইক্ৰ'ফাইবাৰ আৰু ধাতুৰ জাল" },
      { label: "মাইক্ৰন ক্ষমতা", value: "২ ৰ পৰা ১০ মাইক্ৰন মলি ফিল্টাৰ কৰা" },
      { label: "সলনিৰ সময়", value: "প্ৰতি ১০,০০০ কিমি" },
      { label: "ছীলৰ মানদণ্ড", value: "উচ্চ উষ্ণতা সহনশীল ভাইটন অ'-ৰিং" }
    ]
  },
  {
    slug: "reducer-servicing",
    iconName: "Gauge",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
    titleEn: "Reducer Servicing",
    titleAs: "ৰিডিউচাৰ চাৰ্ভিচিং",
    shortDescEn: "Pressure regulator overhaul, internal diaphragm renewal, and computerized 2nd-stage pressure tuning.",
    shortDescAs: "প্ৰেচাৰ ৰেগুলেটৰ পৰীক্ষা, ডায়েফ্ৰাম সলনি আৰু দ্বিতীয় পৰ্যায়ৰ চাপ টিউনিং।",
    badgeEn: "Pressure Calibration",
    badgeAs: "চাপ নিয়ন্ত্ৰণ",
    whatItIsEn: "The CNG pressure reducer (or vaporizer) steps down cylinder pressure from 200 bar down to an operating pressure of 1.2 to 2.0 bar. Over years of thermal cycling, internal rubber diaphragms stiffen and pressure springs lose tension. Reducer Servicing rebuilds the unit using genuine factory repair kits to restore rock-steady gas delivery.",
    whatItIsAs: "চিএনজি ৰিডিউচাৰে চিলিণ্ডাৰৰ পৰা অহা ২০০ বাৰ উচ্চ চাপক ইঞ্জিনৰ বাবে উপযুক্ত ১.২ ৰ পৰা ২.০ বাৰলৈ কমাই দিয়ে। বহু দিন চলাৰ পিছত ইয়াৰ ভিতৰৰ ৰবৰৰ ডায়েফ্ৰাম টান হৈ পৰে। আমাৰ ৰিডিউচাৰ সেৱাত প্ৰকৃত মেৰামতি কিট ব্যৱহাৰ কৰি ইয়াৰ পূৰ্বৰ নিখুঁত কাৰ্যক্ষমতা ঘূৰাই অনা হয়।",
    whoNeedsItEn: [
      "Vehicles displaying fuel pressure drops under heavy throttle acceleration.",
      "Cars where the reducer shows external coolant seepage or gas smell.",
      "Systems with over 50,000 km of service or older than 4 years."
    ],
    whoNeedsItAs: [
      "দ্ৰুত গতি তোলাৰ সময়ত গেছৰ চাপ কমি যোৱা বাহনসমূহ।",
      "ৰিডিউচাৰৰ বাহিৰত কুলেন্ট বা গেছৰ সামান্য গোন্ধ পোৱা বাহন।",
      "৫০,০০০ কিলোমিটাৰৰ অধিক বা ৪ বছৰৰ পুৰণি চিএনজি কিট থকা বাহনসমূহ।"
    ],
    processStepsEn: [
      { step: "01", title: "Regulator Disassembly & Degumming", description: "Decoupling coolant ports and unbolting chamber covers to strip worn internals." },
      { step: "02", title: "Diaphragm & Valve Core Replacement", description: "Fitting fresh OEM high-flexibility rubber diaphragms, piston seals, and pressure springs." },
      { step: "03", title: "Solenoid Valve Verification", description: "Testing electromagnetic shut-off coil resistance and seating plunger response." },
      { step: "04", title: "Bench Pressure Calibration", description: "Bench-testing on calibrated pressure source to lock dynamic output to precise manufacturer spec." }
    ],
    processStepsAs: [
      { step: "০১", title: "ৰেগুলেটৰ খোলা আৰু পৰিষ্কাৰ", description: "কুলেন্ট পাইপ খুলি পুৰণি চেম্বাৰ পৰিষ্কাৰ কৰা।" },
      { step: "০২", title: "ডায়েফ্ৰাম আৰু ভাল্ভ সলনি", description: "নতুন প্ৰকৃত ৰবৰ ডায়েফ্ৰাম আৰু স্প্ৰিং সংস্থাপন কৰা।" },
      { step: "০৩", title: "চলেনইড ভাল্ভ পৰীক্ষা", description: "গেছ বন্ধ কৰা চলেনইড কইলৰ বৈদ্যুতিক ক্ষমতা পৰীক্ষা কৰা।" },
      { step: "০৪", title: "চাপ সংহতি", description: "পৰীক্ষণ বেঞ্চত জোখ লৈ আউটপুট চাপ নিৰ্ভুলভাৱে নিৰ্ধাৰণ কৰা।" }
    ],
    considerationsEn: [
      "Always flush and replace engine coolant if the reducer coolant chamber shows corrosion.",
      "Severely pitted aluminum housings should be replaced entirely rather than rebuilt.",
      "Recalibration with ECU software is mandatory following regulator servicing."
    ],
    considerationsAs: [
      "কুলেন্ট চেম্বাৰত মামৰে ধৰিলে গাড়ীৰ কুলেন্ট সলনি কৰা প্ৰয়োজন।",
      "অত্যধিক পুৰণি বা ফাঁট মেলা ৰিডিউচাৰ মেৰামতি নকৰি নতুন লগোৱাটো উচিত।",
      "ৰিডিউচাৰ চাৰ্ভিচ কৰাৰ পিছত ছফ্টৱেৰৰ জৰিয়তে পুনৰ টিউন কৰাটো বাধ্যতামূলক।"
    ],
    technicalHighlightsEn: [
      { label: "Primary Inlet Pressure", value: "Up to 260 Bar" },
      { label: "Secondary Outlet Pressure", value: "1.20 to 1.85 Bar differential" },
      { label: "Heating Circuit", value: "Integrated engine coolant jacket" },
      { label: "Safety Feature", value: "Integrated mechanical overpressure relief valve" }
    ],
    technicalHighlightsAs: [
      { label: "ইনলেট চাপ", value: "২৬০ বাৰ পৰ্যন্ত" },
      { label: "আউটলেট চাপ", value: "১.২০ ৰ পৰা ১.৮৫ বাৰ" },
      { label: "হিটিং ব্যৱস্থা", value: "ইঞ্জিন কুলেন্টৰ সৈতে সংযুক্ত" },
      { label: "সুৰক্ষা ভাল্ভ", value: "অতিৰিক্ত চাপ প্ৰশমন কৰা বিশেষ ভাল্ভ" }
    ]
  },
  {
    slug: "cylinder-replacement",
    iconName: "RefreshCw",
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80",
    titleEn: "Cylinder Replacement",
    titleAs: "চিলিণ্ডাৰ পৰিৱৰ্তন",
    shortDescEn: "Installation of fresh government-approved PESO seamless gas cylinders, upgraded brackets, and high-flow safety valves.",
    shortDescAs: "নতুন চৰকাৰী PESO অনুমোদিত চিমলেছ গেছ চিলিণ্ডাৰ আৰু উন্নত সুৰক্ষা ভাল্ভ সংস্থাপন।",
    badgeEn: "Fresh PESO Tanks",
    badgeAs: "নতুন PESO চিলিণ্ডাৰ",
    whatItIsEn: "When a CNG cylinder reaches its statutory end-of-life (maximum 15 to 20 years per PESO regulations), fails a hydrostatic safety expansion test, or when a vehicle owner needs to downsize or upsize tank volume for luggage space, our Cylinder Replacement service provides brand-new, factory-certified seamless steel cylinders complete with PESO approval punch marks, new safety burst disc valves, and structural isolation cushions.",
    whatItIsAs: "যেতিয়া এটা চিএনজি চিলিণ্ডাৰৰ বৈধ ম্যাদ শেষ হয় (PESO নিয়ম অনুসৰি সৰ্বোচ্চ ১৫ ৰ পৰা ২০ বছৰ), হাইড্ৰ'-টেষ্টত অনুত্তীৰ্ণ হয়, অথবা ডিকিৰ ঠাই অনুসৰি চিলিণ্ডাৰৰ আকাৰ সলনি কৰিবলগীয়া হয়, তেতিয়া আমাৰ চিলিণ্ডাৰ পৰিৱৰ্তন সেৱাৰ জৰিয়তে নতুন, চৰকাৰী মান্য চিমলেছ ষ্টীল চিলিণ্ডাৰ আৰু নতুন সুৰক্ষা ভাল্ভ সংস্থাপন কৰা হয়।",
    whoNeedsItEn: [
      "Vehicles with cylinders condemned during hydrostatic inspection.",
      "Tanks nearing the 15-year statutory retirement age mandate.",
      "Owners wanting to switch between 10kg, 12kg, or 14kg water capacity tanks."
    ],
    whoNeedsItAs: [
      "হাইড্ৰ'-টেষ্টত অনুত্তীৰ্ণ হোৱা চিলিণ্ডাৰ থকা বাহনসমূহ।",
      "১৫ বছৰীয়া চৰকাৰী ম্যাদ শেষ হোৱা চিলিণ্ডাৰসমূহ।",
      "১০ কেজি, ১২ কেজি বা ১৪ কেজিৰ নতুন আকাৰৰ চিলিণ্ডাৰ লগোৱাৰ বাবে।"
    ],
    processStepsEn: [
      { step: "01", title: "Safe Gas Evacuation", description: "De-pressurizing and disposing of expired or damaged tank safely." },
      { step: "02", title: "Cradle & Floor Inspection", description: "Checking chassis mount points and coating bare metal against galvanic rust." },
      { step: "03", title: "Brand New Cylinder Fitment", description: "Mounting fresh PESO certified cylinder with vibration-damping rubber dampeners." },
      { step: "04", title: "Safety Valve & Vent Integration", description: "Torquing a new safety valve with thermal fusible plug and external vent sleeves." },
      { step: "05", title: "Documentation & Stamping Audit", description: "Verifying cylinder serial number and issuing endorsement certification." }
    ],
    processStepsAs: [
      { step: "০১", title: "সুৰক্ষিতভাৱে গেছ অপসাৰণ", description: "পুৰণি চিলিণ্ডাৰৰ গেছ খালী কৰি সুৰক্ষিতভাৱে খুলি লোৱা।" },
      { step: "০২", title: "ফ্ৰেম আৰু মজিয়া পৰীক্ষা", description: "গাড়ীৰ তলৰ ফ্ৰেম পৰীক্ষা কৰি মামৰে নধৰাকৈ ৰং কৰা।" },
      { step: "০৩", title: "নতুন চিলিণ্ডাৰ সংস্থাপন", description: "নতুন PESO অনুমোদিত চিলিণ্ডাৰ ৰবৰ কুশ্বনৰ সৈতে মজবুতভাৱে ফিটিং কৰা।" },
      { step: "০৪", title: "সুৰক্ষা ভাল্ভ সংযোগ", description: "নতুন সুৰক্ষা ভাল্ভ আৰু বহিঃ নিৰ্গমন নলী সঠিকভাৱে সংযোগ কৰা।" },
      { step: "০৫", title: "নথি প্ৰস্তুত", description: "নতুন চিলিণ্ডাৰৰ নম্বৰ মিলি থকাটো পৰীক্ষা কৰি বৈধ নথি প্ৰদান কৰা।" }
    ],
    considerationsEn: [
      "Never purchase unbranded or scrap yard cylinders; only factory-certified PESO tanks are legal.",
      "Upgrading cylinder size alters vehicle rear axle loading; consider rear suspension coil buffers if necessary.",
      "Always have the new cylinder serial number updated in your vehicle's statutory papers."
    ],
    considerationsAs: [
      "কেতিয়াও পুৰণি বা অবৈধ চিলিণ্ডাৰ কিনিব নালাগে; কেৱল নতুন চৰকাৰী চিলিণ্ডাৰহে বৈধ।",
      "ডাঙৰ আকাৰৰ চিলিণ্ডাৰ লগালে পিছফালৰ ভাৰসাম্যৰ প্ৰতি লক্ষ্য ৰখা প্ৰয়োজন।",
      "নতুন চিলিণ্ডাৰৰ নম্বৰ গাড়ীৰ নথি-পত্ৰত অন্তৰ্ভুক্ত কৰাটো অপৰিহাৰ্য।"
    ],
    technicalHighlightsEn: [
      { label: "Manufacturing Standard", value: "IS 15490 / ISO 11439 approved seamless steel" },
      { label: "Available Sizes", value: "30L, 55L, 60L, 65L (approx 8kg to 14kg gas)" },
      { label: "Testing Compliance", value: "Pre-tested at 330 bar with factory PESO certificate" },
      { label: "Valve Standard", value: "High-flow with integrated rupture disc and fusible plug" }
    ],
    technicalHighlightsAs: [
      { label: "নিৰ্মাণৰ মানদণ্ড", value: "IS 15490 / ISO 11439 অনুমোদিত চিমলেছ ষ্টীল" },
      { label: "উপলব্ধ আকাৰ", value: "৩০ লিটাৰ, ৫৫ লিটাৰ, ৬০ লিটাৰ, ৬৫ লিটাৰ" },
      { label: "পৰীক্ষাৰ মান", value: "৩৩০ বাৰত পূৰ্ব-পৰীক্ষিত আৰু PESO প্ৰমাণিত" },
      { label: "ভাল্ভৰ মানদণ্ড", value: "সুৰক্ষা প্লাগ আৰু প্ৰেচাৰ ভাল্ভযুক্ত" }
    ]
  }
];
