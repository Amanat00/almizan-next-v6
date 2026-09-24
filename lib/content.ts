export type Lang = 'en' | 'ar' | 'ur';
export type Localized = { en: string; ar: string; ur: string };
export type Service = {
  slug: string;
  title: Localized;
  summary?: Localized;
  tags?: string[];
};
export type Category = {
  slug: string;
  title: Localized;
  shortTitle: Localized;
  description: Localized;
  image: string;
  accent: string;
  icon: IconName;
  services: Service[];
};
export type IconName =
  | 'id'
  | 'plane'
  | 'briefcase'
  | 'home'
  | 'heart'
  | 'building'
  | 'stamp'
  | 'print'
  | 'handshake'
  | 'check'
  | 'clock'
  | 'map'
  | 'shield'
  | 'arrow'
  | 'whatsapp'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'phone'
  | 'mail'
  | 'search'
  | 'chevron'
  | 'external'
  | 'document'
  | 'users'
  | 'sparkle'
  | 'instagram'
  | 'facebook'
  | 'linkedin';

const L = (en: string, ar: string, ur: string): Localized => ({ en, ar, ur });
const S = (slug: string, en: string, ar: string, ur: string, tags: string[] = []): Service => ({
  slug,
  title: L(en, ar, ur),
  tags,
});

export const business = {
  name: 'AL MIZAN Typing & Documents Clearing',
  email: 'almizan.rakuae@gmail.com',
  phoneDisplay: '+971 56 169 0094',
  phoneHref: '+971561690094',
  whatsapp: '971561690094',
  maps: 'https://maps.app.goo.gl/ctdcqVp287wK4XZW9',
  address: L(
    'Al Manama – Ras Al Khaimah Rd, Al Nakheel, Ras Al Khaimah, UAE',
    'طريق المنامة – رأس الخيمة، النخيل، رأس الخيمة، الإمارات العربية المتحدة',
    'المنامہ – رأس الخیمہ روڈ، النخیل، رأس الخیمہ، متحدہ عرب امارات'
  ),
};

export const categories: Category[] = [
  {
    slug: 'emirates-id-icp',
    title: L('Emirates ID & ICP Services', 'خدمات الهوية الإماراتية والهيئة الاتحادية للهوية والجنسية', 'امارات آئی ڈی اور ICP خدمات'),
    shortTitle: L('Emirates ID & ICP', 'الهوية و ICP', 'امارات آئی ڈی & ICP'),
    description: L(
      'Typing and application support for Emirates ID transactions and biometric appointment guidance in Ras Al Khaimah.',
      'خدمات طباعة وتجهيز طلبات معاملات الهوية الإماراتية وإرشادات مواعيد البصمة في رأس الخيمة.',
      'رأس الخیمہ میں امارات آئی ڈی معاملات کی ٹائپنگ، درخواست کی تیاری اور بایومیٹرک اپوائنٹمنٹ رہنمائی۔'
    ),
    image: '/images/unique/categories/emirates-id-icp/hero.webp',
    accent: 'mint',
    icon: 'id',
    services: [
      S('emirates-id-new-renewal-replacement', 'Emirates ID — New / Renewal / Replacement', 'الهوية الإماراتية — إصدار / تجديد / بدل فاقد أو تالف', 'امارات آئی ڈی — نیا / تجدید / متبادل'),
      S('emirates-id-biometric-appointment', 'Emirates ID Biometric Appointment', 'موعد البصمة للهوية الإماراتية', 'امارات آئی ڈی بایومیٹرک اپوائنٹمنٹ'),
    ],
  },
  {
    slug: 'immigration-visa-echannel',
    title: L('Immigration, Visa & E-Channel Services', 'خدمات الهجرة والتأشيرات والقنوات الإلكترونية', 'امیگریشن، ویزا اور ای-چینل خدمات'),
    shortTitle: L('Immigration & Visa', 'الهجرة والتأشيرات', 'امیگریشن & ویزا'),
    description: L(
      'Application typing and document support for establishment, employment, residence, family and visit visa transactions.',
      'طباعة الطلبات ودعم المستندات لمعاملات المنشآت والعمل والإقامة والعائلة والزيارة.',
      'اسٹیبلشمنٹ، ملازمت، رہائش، فیملی اور وزٹ ویزا معاملات کے لیے درخواست ٹائپنگ اور دستاویزی معاونت۔'
    ),
    image: '/images/unique/categories/immigration-visa-echannel/hero.webp',
    accent: 'blue',
    icon: 'plane',
    services: [
      S('e-channel-registration', 'E-Channel Registration — New Company', 'تسجيل القنوات الإلكترونية — شركة جديدة', 'ای-چینل رجسٹریشن — نئی کمپنی'),
      S('establishment-card', 'Establishment Card — New / Renewal / Cancellation', 'بطاقة المنشأة — إصدار / تجديد / إلغاء', 'اسٹیبلشمنٹ کارڈ — نیا / تجدید / منسوخی'),
      S('employment-visa-entry-permit', 'Employment Visa / Entry Permit', 'تأشيرة عمل / إذن دخول', 'ملازمت ویزا / انٹری پرمٹ'),
      S('residence-visa-stamping', 'Residence Visa — New / Renewal', 'الإقامة — إصدار / تجديد', 'رہائشی ویزا — نیا / تجدید'),
      S('visa-cancellation', 'Visa Cancellation — Inside / Outside UAE', 'إلغاء التأشيرة — داخل / خارج الدولة', 'ویزا منسوخی — امارات کے اندر / باہر'),
      S('evisa-echannel-transfer-amendment', 'E-Visa & E-Channel Transfer / Amendment', 'التأشيرة الإلكترونية ونقل / تعديل القنوات الإلكترونية', 'ای-ویزا اور ای-چینل ٹرانسفر / ترمیم'),
      S('visit-tourist-visa', 'Visit / Tourist Visa — 30 / 60 / 90 Days', 'تأشيرة زيارة / سياحة — 30 / 60 / 90 يوماً', 'وزٹ / ٹورسٹ ویزا — 30 / 60 / 90 دن'),
      S('family-visa', 'Family Visa — New / Renewal / Cancellation', 'تأشيرة العائلة — إصدار / تجديد / إلغاء', 'فیملی ویزا — نیا / تجدید / منسوخی'),
      S('golden-visa-typing', 'Golden Visa Typing — 10 Years', 'طباعة طلب الإقامة الذهبية — 10 سنوات', 'گولڈن ویزا ٹائپنگ — 10 سال'),
      S('status-change', 'Status Change — Inside UAE', 'تعديل الوضع — داخل الدولة', 'اسٹیٹس چینج — امارات کے اندر'),
      S('overstay-fine', 'Overstay Fine Payment / Reduction Application', 'دفع غرامات تجاوز مدة الإقامة / طلب تخفيض', 'اوور اسٹے جرمانہ ادائیگی / کمی کی درخواست'),
    ],
  },
  {
    slug: 'mohre-tasheel',
    title: L('MOHRE / Tasheel Services', 'خدمات وزارة الموارد البشرية والتوطين / تسهيل', 'MOHRE / تسہیل خدمات'),
    shortTitle: L('MOHRE / Tasheel', 'الموارد البشرية / تسهيل', 'MOHRE / تسہیل'),
    description: L(
      'Employment-document typing and application assistance for work permits, labour contracts, quota and related MOHRE transactions.',
      'طباعة مستندات العمل والمساعدة في طلبات تصاريح العمل والعقود والحصص ومعاملات الوزارة ذات الصلة.',
      'ورک پرمٹ، لیبر کنٹریکٹ، کوٹہ اور متعلقہ MOHRE معاملات کے لیے ملازمت دستاویزات کی ٹائپنگ اور درخواست معاونت۔'
    ),
    image: '/images/unique/categories/mohre-tasheel/hero.webp',
    accent: 'amber',
    icon: 'briefcase',
    services: [
      S('labour-card', 'MOHRE Labour Card — New / Renewal', 'بطاقة العمل — إصدار / تجديد', 'MOHRE لیبر کارڈ — نیا / تجدید'),
      S('labour-contract', 'Labour Contract Typing — New / Renewal / Amendment', 'طباعة عقد العمل — جديد / تجديد / تعديل', 'لیبر کنٹریکٹ ٹائپنگ — نیا / تجدید / ترمیم'),
      S('work-permit', 'Work Permit — New / Renewal / Cancellation', 'تصريح العمل — إصدار / تجديد / إلغاء', 'ورک پرمٹ — نیا / تجدید / منسوخی'),
      S('job-offer-letter', 'Job Offer Letter Typing', 'طباعة عرض العمل', 'جاب آفر لیٹر ٹائپنگ'),
      S('quota-application', 'Quota Application / Modification', 'طلب الحصة / التعديل', 'کوٹہ درخواست / ترمیم'),
      S('salary-designation-change', 'Salary Modification / Designation Change', 'تعديل الراتب / المسمى الوظيفي', 'تنخواہ ترمیم / عہدہ تبدیلی'),
      S('labour-complaint-absconding', 'Labour Complaint / Absconding Removal Support', 'شكوى عمالية / دعم إزالة بلاغ الانقطاع عن العمل', 'لیبر شکایت / ابسکونڈنگ ریموول معاونت'),
      S('tawjeeh-class-booking', 'Tawjeeh Class Booking', 'حجز جلسة توجيه', 'توجیہ کلاس بکنگ'),
    ],
  },
  {
    slug: 'tadbeer-domestic-workers',
    title: L('Tadbeer / Domestic Worker Services', 'خدمات تدبير والعمالة المساعدة', 'تدبیر / گھریلو کارکن خدمات'),
    shortTitle: L('Tadbeer / Domestic Workers', 'تدبير / العمالة المساعدة', 'تدبیر / گھریلو کارکن'),
    description: L(
      'Support for domestic worker visa typing, contract renewal and insurance-card related documentation.',
      'دعم طباعة تأشيرات العمالة المساعدة وتجديد العقود والمستندات المتعلقة ببطاقات التأمين.',
      'گھریلو کارکن ویزا ٹائپنگ، کنٹریکٹ تجدید اور انشورنس کارڈ سے متعلق دستاویزی معاونت۔'
    ),
    image: '/images/unique/categories/tadbeer-domestic-workers/hero.webp',
    accent: 'rose',
    icon: 'home',
    services: [
      S('domestic-worker-visa', 'Domestic Worker Visa — Maid, Cook, Nanny, Driver, Gardener', 'تأشيرة العمالة المساعدة — عاملة منزلية، طباخ، مربية، سائق، بستاني', 'گھریلو کارکن ویزا — میڈ، کک، نینی، ڈرائیور، گارڈنر'),
      S('domestic-worker-contract-renewal', 'Domestic Worker Contract Renewal', 'تجديد عقد العمالة المساعدة', 'گھریلو کارکن کنٹریکٹ تجدید'),
      S('domestic-worker-insurance-card', 'Domestic Worker Insurance Card', 'بطاقة تأمين العمالة المساعدة', 'گھریلو کارکن انشورنس کارڈ'),
    ],
  },
  {
    slug: 'medical-insurance',
    title: L('Medical & Insurance Services', 'الخدمات الطبية والتأمين', 'میڈیکل اور انشورنس خدمات'),
    shortTitle: L('Medical & Insurance', 'الطبي والتأمين', 'میڈیکل & انشورنس'),
    description: L(
      'Typing assistance for medical fitness applications and health-insurance related paperwork.',
      'المساعدة في طباعة طلبات اللياقة الطبية والأوراق المتعلقة بالتأمين الصحي.',
      'میڈیکل فٹنس درخواستوں اور ہیلتھ انشورنس سے متعلق کاغذی کارروائی کے لیے ٹائپنگ معاونت۔'
    ),
    image: '/images/unique/categories/medical-insurance/hero.webp',
    accent: 'teal',
    icon: 'heart',
    services: [
      S('medical-fitness-typing', 'Medical Fitness Typing', 'طباعة طلب اللياقة الطبية', 'میڈیکل فٹنس ٹائپنگ'),
      S('health-insurance', 'Health Insurance Assistance', 'مساعدة في التأمين الصحي', 'ہیلتھ انشورنس معاونت'),
    ],
  },
  {
    slug: 'business-setup-licensing',
    title: L('Business Setup & Licensing', 'تأسيس الأعمال والتراخيص', 'بزنس سیٹ اپ اور لائسنسنگ'),
    shortTitle: L('Business Setup', 'تأسيس الأعمال', 'بزنس سیٹ اپ'),
    description: L(
      'Document preparation and typing support for RAKEZ, RAK economic licensing and company amendments.',
      'تجهيز المستندات ودعم الطباعة لخدمات راكز والتراخيص الاقتصادية في رأس الخيمة وتعديلات الشركات.',
      'RAKEZ، رأس الخیمہ اقتصادی لائسنسنگ اور کمپنی ترامیم کے لیے دستاویزات کی تیاری اور ٹائپنگ معاونت۔'
    ),
    image: '/images/unique/categories/business-setup-licensing/hero.webp',
    accent: 'violet',
    icon: 'building',
    services: [
      S('new-trade-rakez-license', 'New Trade License / RAKEZ License', 'رخصة تجارية جديدة / رخصة راكز', 'نیا ٹریڈ لائسنس / RAKEZ لائسنس'),
      S('license-renewal-cancellation-amendment', 'License Renewal / Cancellation / Amendment', 'تجديد / إلغاء / تعديل الرخصة', 'لائسنس تجدید / منسوخی / ترمیم'),
      S('activity-add-remove', 'Business Activity Add / Remove', 'إضافة / حذف نشاط تجاري', 'کاروباری سرگرمی شامل / ختم'),
      S('partner-manager-add-remove', 'Partner / Manager Add / Remove', 'إضافة / حذف شريك أو مدير', 'پارٹنر / مینیجر شامل / ختم'),
      S('moa-lsa-poa-typing', 'MOA, LSA & Power of Attorney Typing', 'طباعة عقد التأسيس واتفاقية وكيل الخدمات والوكالة', 'MOA، LSA اور پاور آف اٹارنی ٹائپنگ'),
      S('trade-name-reservation', 'Trade Name Reservation', 'حجز الاسم التجاري', 'ٹریڈ نیم ریزرویشن'),
    ],
  },
  {
    slug: 'government-attestation',
    title: L('Government & Attestation Services', 'الخدمات الحكومية والتصديقات', 'سرکاری اور تصدیقی خدمات'),
    shortTitle: L('Government & Attestation', 'الحكومي والتصديقات', 'سرکاری & تصدیق'),
    description: L(
      'Typing and documentation support for attestations, translation, traffic, municipality and selected government-service applications.',
      'خدمات الطباعة وتجهيز المستندات للتصديقات والترجمة والمرور والبلدية وبعض طلبات الخدمات الحكومية.',
      'تصدیق، ترجمہ، ٹریفک، میونسپلٹی اور منتخب سرکاری درخواستوں کے لیے ٹائپنگ اور دستاویزی معاونت۔'
    ),
    image: '/images/unique/categories/government-attestation/hero.webp',
    accent: 'orange',
    icon: 'stamp',
    services: [
      S('mofa-attestation-typing', 'MOFA / Foreign Affairs Attestation Typing', 'طباعة طلبات تصديق وزارة الخارجية', 'MOFA / خارجہ امور تصدیق ٹائپنگ'),
      S('certificate-attestation', 'Certificate Attestation — Degree, Birth, Marriage, PCC', 'تصديق الشهادات — دراسية، ميلاد، زواج، حسن سيرة', 'سرٹیفکیٹ تصدیق — ڈگری، پیدائش، شادی، PCC'),
      S('legal-translation', 'Legal Translation — Arabic / English / Urdu', 'ترجمة قانونية — عربي / إنجليزي / أردو', 'قانونی ترجمہ — عربی / انگریزی / اردو'),
      S('driving-license-mulkiya', 'Driving License / Mulkiya Renewal Typing', 'طباعة تجديد رخصة القيادة / ملكية المركبة', 'ڈرائیونگ لائسنس / ملکیت تجدید ٹائپنگ'),
      S('traffic-fine-vehicle-registration', 'Traffic Fine / Vehicle Registration Typing', 'طباعة معاملات المخالفات المرورية / تسجيل المركبات', 'ٹریفک جرمانہ / گاڑی رجسٹریشن ٹائپنگ'),
      S('police-clearance-certificate', 'Police Clearance Certificate (PCC) Typing', 'طباعة طلب شهادة حسن السيرة والسلوك', 'پولیس کلیئرنس سرٹیفکیٹ (PCC) ٹائپنگ'),
      S('tenancy-municipality', 'Tenancy Contract & Municipality Services', 'عقد الإيجار وخدمات البلدية', 'کرایہ معاہدہ اور میونسپلٹی خدمات'),
      S('golden-schengen-assistance', 'Golden Visa & Schengen Visa Assistance', 'مساعدة في الإقامة الذهبية وتأشيرة شنغن', 'گولڈن ویزا اور شینگن ویزا معاونت'),
      S('civil-defence-certificate', 'Civil Defence Certificate — New / Renewal', 'شهادة الدفاع المدني — إصدار / تجديد', 'سول ڈیفنس سرٹیفکیٹ — نیا / تجدید'),
      S('environmental-permit-epda', 'Environmental Permit (EPDA)', 'تصريح بيئي (EPDA)', 'ماحولیاتی پرمٹ (EPDA)'),
      S('etihadwe-services', 'EtihadWE / Federal Electricity & Water Services', 'خدمات الاتحاد للماء والكهرباء EtihadWE', 'EtihadWE / وفاقی بجلی و پانی خدمات'),
    ],
  },
  {
    slug: 'general-typing-printing-design',
    title: L('General Typing, Printing & Design', 'الطباعة العامة والتصميم', 'جنرل ٹائپنگ، پرنٹنگ اور ڈیزائن'),
    shortTitle: L('Typing, Printing & Design', 'الطباعة والتصميم', 'ٹائپنگ، پرنٹنگ & ڈیزائن'),
    description: L(
      'Everyday document services including photocopying, scanning, CV preparation, applications and print-ready design support.',
      'خدمات مستندية يومية تشمل التصوير والمسح الضوئي والسيرة الذاتية والطلبات والتصميم الجاهز للطباعة.',
      'روزمرہ دستاویزی خدمات، فوٹو کاپی، اسکیننگ، CV تیاری، درخواستیں اور پرنٹ کے لیے ڈیزائن معاونت۔'
    ),
    image: '/images/unique/categories/general-typing-printing-design/hero.webp',
    accent: 'cyan',
    icon: 'print',
    services: [
      S('photocopy', 'Photocopy — Black & White / Color', 'تصوير مستندات — أبيض وأسود / ملون', 'فوٹو کاپی — بلیک اینڈ وائٹ / کلر'),
      S('document-printing', 'Document Printing — Color / Large Format', 'طباعة مستندات — ملون / مقاسات كبيرة', 'دستاویز پرنٹنگ — کلر / لارج فارمیٹ'),
      S('scanning', 'Document Scanning', 'مسح ضوئي للمستندات', 'دستاویز اسکیننگ'),
      S('cv-resume', 'CV Making / Resume Typing', 'إعداد السيرة الذاتية', 'CV بنانا / ریزیومے ٹائپنگ'),
      S('application-cover-letter', 'Application / Cover Letter Typing', 'طباعة الطلبات / خط التغطية', 'درخواست / کور لیٹر ٹائپنگ'),
      S('designing-printing', 'Designing & Printing', 'التصميم والطباعة', 'ڈیزائننگ اور پرنٹنگ'),
    ],
  },
  {
    slug: 'local-support-corporate-services',
    title: L('Local Support & Corporate Services', 'الدعم المحلي وخدمات الشركات', 'لوکل سپورٹ اور کارپوریٹ خدمات'),
    shortTitle: L('Local Support', 'الدعم المحلي', 'لوکل سپورٹ'),
    description: L(
      'Practical local coordination for service-agent support, corporate sponsorship arrangements and office setup assistance.',
      'تنسيق محلي عملي لدعم وكيل الخدمات وترتيبات الرعاية للشركات والمساعدة في تجهيز المكاتب.',
      'لوکل سروس ایجنٹ معاونت، کارپوریٹ اسپانسرشپ انتظامات اور آفس سیٹ اپ کے لیے عملی مقامی تعاون۔'
    ),
    image: '/images/unique/categories/local-support-corporate-services/hero.webp',
    accent: 'lime',
    icon: 'handshake',
    services: [
      S('local-service-agent', 'Local Service Agent Support', 'دعم وكيل الخدمات المحلي', 'لوکل سروس ایجنٹ سپورٹ'),
      S('corporate-sponsorship', 'Corporate Sponsorship Arrangements', 'ترتيبات الرعاية للشركات', 'کارپوریٹ اسپانسرشپ انتظامات'),
      S('office-arrangements', 'Office Arrangements & Setup Support', 'ترتيبات وتجهيز المكاتب', 'آفس انتظامات اور سیٹ اپ سپورٹ'),
    ],
  },
];


export type CategoryPhotoPlacement = 'home' | 'directory' | 'hero' | 'aside' | 'band';
export type ServicePhotoVariant = 'hero' | 'cta' | 'related' | 'sidebar' | 'card' | 'thumb';

/**
 * All visible photography uses placement-specific local WebP assets.
 * This prevents the same file from being repeated in hero, CTA, list and related-service slots.
 */
export function categoryPhoto(categorySlug: string, placement: CategoryPhotoPlacement = 'hero') {
  return `/images/unique/categories/${categorySlug}/${placement}.webp`;
}

export function servicePhoto(categorySlug: string, serviceSlug: string, variant: ServicePhotoVariant = 'hero') {
  return `/images/unique/services/${categorySlug}/${serviceSlug}-${variant}.webp`;
}

export const ui = {
  nav: {
    home: L('Home', 'الرئيسية', 'ہوم'),
    services: L('Services', 'الخدمات', 'خدمات'),
    about: L('About', 'من نحن', 'ہمارے بارے میں'),
    business: L('Business Setup', 'تأسيس الأعمال', 'بزنس سیٹ اپ'),
    local: L('Local Support', 'الدعم المحلي', 'لوکل سپورٹ'),
    contact: L('Contact', 'اتصل بنا', 'رابطہ'),
    faq: L('FAQ', 'الأسئلة الشائعة', 'عمومی سوالات'),
  },
  common: {
    explore: L('Explore services', 'استكشف الخدمات', 'خدمات دیکھیں'),
    whatsapp: L('WhatsApp us', 'راسلنا عبر واتساب', 'واٹس ایپ کریں'),
    call: L('Call now', 'اتصل الآن', 'ابھی کال کریں'),
    learn: L('View details', 'عرض التفاصيل', 'تفصیل دیکھیں'),
    viewAll: L('View all services', 'عرض كل الخدمات', 'تمام خدمات دیکھیں'),
    popular: L('Popular services', 'الخدمات الأكثر طلباً', 'مقبول خدمات'),
    browse: L('Browse by category', 'تصفح حسب الفئة', 'کیٹیگری کے مطابق دیکھیں'),
    map: L('Open in Google Maps', 'افتح في خرائط جوجل', 'گوگل میپس میں کھولیں'),
    address: L('Our location', 'موقعنا', 'ہماری لوکیشن'),
    contactUs: L('Contact us', 'تواصل معنا', 'ہم سے رابطہ کریں'),
    getHelp: L('Tell us what you need', 'أخبرنا بما تحتاجه', 'ہمیں بتائیں آپ کو کیا چاہیے'),
    office: L('Inside Al Mizan', 'من داخل الميزان', 'ال میزان کے اندر'),
  },
  home: {
    eyebrow: L('Typing & Documents Clearing • Ras Al Khaimah', 'طباعة وإنجاز معاملات • رأس الخيمة', 'ٹائپنگ اور ڈاکیومنٹس کلیئرنگ • رأس الخیمہ'),
    title: L(
      'Government services, typing & business support — handled with clarity.',
      'خدمات حكومية وطباعة ودعم أعمال — بوضوح وسهولة.',
      'سرکاری خدمات، ٹائپنگ اور کاروباری معاونت — واضح اور آسان طریقے سے۔'
    ),
    intro: L(
      'From Emirates ID and visa typing to MOHRE, business licensing and document services, our Ras Al Khaimah team helps you prepare and process paperwork with confidence.',
      'من معاملات الهوية والتأشيرات إلى خدمات وزارة الموارد البشرية وتراخيص الأعمال، يساعدك فريقنا في رأس الخيمة على تجهيز معاملاتك بثقة ووضوح.',
      'امارات آئی ڈی اور ویزا ٹائپنگ سے لے کر MOHRE، بزنس لائسنسنگ اور دستاویزات تک، رأس الخیمہ میں ہماری ٹیم آپ کی کاغذی کارروائی واضح اور پراعتماد انداز میں تیار کرنے میں مدد کرتی ہے۔'
    ),
    stat1: L('9 service groups', '9 مجموعات خدمات', '9 سروس کیٹیگریز'),
    stat2: L('3 languages', '3 لغات', '3 زبانیں'),
    stat3: L('Local RAK support', 'دعم محلي في رأس الخيمة', 'مقامی RAK سپورٹ'),
    galleryTitle: L('A calm, professional place to get things done.', 'مكان مهني وهادئ لإنجاز معاملاتك.', 'آپ کے کام مکمل کرنے کے لیے پُرسکون اور پروفیشنل جگہ۔'),
    galleryText: L(
      'Visit our Al Nakheel office in Ras Al Khaimah. Tap any image to view the gallery.',
      'زوروا مكتبنا في النخيل، رأس الخيمة. اضغط على أي صورة لعرض المعرض.',
      'رأس الخیمہ، النخیل میں ہمارے دفتر تشریف لائیں۔ گیلری دیکھنے کے لیے کسی بھی تصویر پر کلک کریں۔'
    ),
  },
  about: {
    eyebrow: L('About Al Mizan', 'عن الميزان', 'ال میزان کے بارے میں'),
    title: L('Local document support built around clarity, care and convenience.', 'دعم محلي للمعاملات قائم على الوضوح والاهتمام والسهولة.', 'مقامی دستاویزی معاونت جو وضاحت، توجہ اور آسانی کے گرد بنائی گئی ہے۔'),
    intro: L(
      'Al Mizan is an independent typing and documents clearing center in Ras Al Khaimah. We help individuals, families and businesses prepare applications and documents across a broad range of services.',
      'الميزان مركز مستقل للطباعة وإنجاز المعاملات في رأس الخيمة. نساعد الأفراد والعائلات والشركات في تجهيز الطلبات والمستندات لمجموعة واسعة من الخدمات.',
      'ال میزان رأس الخیمہ میں ایک آزاد ٹائپنگ اور ڈاکیومنٹس کلیئرنگ سینٹر ہے۔ ہم افراد، خاندانوں اور کاروباروں کو مختلف خدمات کے لیے درخواستیں اور دستاویزات تیار کرنے میں مدد دیتے ہیں۔'
    ),
  },
  contact: {
    eyebrow: L('Contact & Enquiries', 'التواصل والاستفسارات', 'رابطہ اور معلومات'),
    title: L('Tell us the service. We’ll help you plan the next step.', 'اختر الخدمة وسنساعدك في معرفة الخطوة التالية.', 'سروس منتخب کریں، ہم آپ کو اگلے مرحلے کی رہنمائی دیں گے۔'),
    intro: L(
      'Select a service category and send your enquiry by WhatsApp, phone or email. For urgent document checks, WhatsApp is usually the quickest route.',
      'اختر فئة الخدمة وأرسل استفسارك عبر واتساب أو الهاتف أو البريد الإلكتروني. لفحص المستندات بسرعة، يكون واتساب غالباً الخيار الأسرع.',
      'سروس کیٹیگری منتخب کریں اور واٹس ایپ، فون یا ای میل کے ذریعے اپنی درخواست بھیجیں۔ فوری دستاویز چیک کے لیے عموماً واٹس ایپ سب سے تیز راستہ ہے۔'
    ),
  },
};

export const popularServices = [
  ['emirates-id-icp', 'emirates-id-new-renewal-replacement'],
  ['immigration-visa-echannel', 'employment-visa-entry-permit'],
  ['immigration-visa-echannel', 'family-visa'],
  ['mohre-tasheel', 'work-permit'],
  ['business-setup-licensing', 'new-trade-rakez-license'],
  ['government-attestation', 'certificate-attestation'],
] as const;

export function isLang(value: string): value is Lang {
  return value === 'en' || value === 'ar' || value === 'ur';
}

export function t(value: Localized, lang: Lang) {
  return value[lang];
}

export function direction(lang: Lang) {
  return lang === 'en' ? 'ltr' : 'rtl';
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getService(categorySlug: string, serviceSlug: string) {
  const category = getCategory(categorySlug);
  const service = category?.services.find((item) => item.slug === serviceSlug);
  return { category, service };
}

export function serviceHref(lang: Lang, category: string, service: string) {
  return `/${lang}/services/${category}/${service}/`;
}

export function categoryHref(lang: Lang, category: string) {
  return `/${lang}/services/${category}/`;
}

export const genericServiceCopy: Record<Lang, { overview: string; disclaimer: string; steps: string[]; documents: string[] }> = {
  en: {
    overview: 'We assist with application typing, document preparation, appointment guidance and submission support. Requirements can vary by applicant and authority, so our team checks your case before final submission.',
    disclaimer: 'Al Mizan is an independent typing and documents clearing center. Government approvals, fees, eligibility and processing times are controlled by the relevant authorities.',
    steps: ['Share your requirement', 'We review the documents', 'Application typing & preparation', 'Guidance for submission / next step'],
    documents: ['Passport / Emirates ID copy where applicable', 'Recent photo where required', 'Supporting certificates or contracts', 'Any previous application or reference number'],
  },
  ar: {
    overview: 'نساعدك في طباعة الطلبات وتجهيز المستندات والإرشاد إلى المواعيد ودعم خطوات التقديم. قد تختلف المتطلبات حسب الحالة والجهة المختصة، لذلك نراجع معاملتك قبل التقديم النهائي.',
    disclaimer: 'الميزان مركز مستقل للطباعة وإنجاز المعاملات. تعتمد الموافقات والرسوم والأهلية ومدة المعالجة على الجهات الحكومية المختصة.',
    steps: ['أرسل لنا متطلباتك', 'نراجع المستندات', 'طباعة وتجهيز الطلب', 'إرشاد للتقديم والخطوة التالية'],
    documents: ['نسخة جواز السفر / الهوية عند الحاجة', 'صورة حديثة عند الطلب', 'الشهادات أو العقود الداعمة', 'رقم طلب أو مرجع سابق إن وجد'],
  },
  ur: {
    overview: 'ہم درخواست کی ٹائپنگ، دستاویزات کی تیاری، اپوائنٹمنٹ رہنمائی اور جمع کرانے کے مراحل میں معاونت فراہم کرتے ہیں۔ ضروریات درخواست گزار اور متعلقہ ادارے کے مطابق مختلف ہو سکتی ہیں، اس لیے آخری جمع کرانے سے پہلے ہم آپ کے کیس کا جائزہ لیتے ہیں۔',
    disclaimer: 'ال میزان ایک آزاد ٹائپنگ اور ڈاکیومنٹس کلیئرنگ سینٹر ہے۔ سرکاری منظوری، فیس، اہلیت اور پراسیسنگ کا وقت متعلقہ اداروں کے اختیار میں ہوتا ہے۔',
    steps: ['اپنی ضرورت ہمیں بتائیں', 'ہم دستاویزات چیک کرتے ہیں', 'درخواست ٹائپ اور تیار کی جاتی ہے', 'جمع کرانے اور اگلے مرحلے کی رہنمائی'],
    documents: ['ضرورت کے مطابق پاسپورٹ / امارات آئی ڈی کی کاپی', 'جہاں درکار ہو تازہ تصویر', 'متعلقہ سرٹیفکیٹس یا کنٹریکٹس', 'اگر موجود ہو تو سابقہ درخواست یا ریفرنس نمبر'],
  },
};

export const officeImages = Array.from({ length: 6 }, (_, i) => `/images/unique/gallery/gallery-${String(i + 1).padStart(2, '0')}.webp`);
