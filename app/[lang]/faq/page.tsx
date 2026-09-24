import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { Icon } from '@/components/Icon';
import { business, isLang, t, ui, type Lang } from '@/lib/content';

export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{const{lang:raw}=await params;if(!isLang(raw))return{};return{title:'FAQ'}}

export default async function FAQPage({params}:{params:Promise<{lang:string}>}){
  const{lang:raw}=await params;if(!isLang(raw))notFound();const lang=raw as Lang;
  const faqs = lang==='en' ? [
    ['Are you a government authority?','No. Al Mizan is an independent typing and documents clearing center. We help prepare applications and documents, while approvals, eligibility, fees and processing times are controlled by the relevant authorities.'],
    ['Can I send documents on WhatsApp before visiting?','Yes. Sending clear photos first can help us identify the service and common missing documents before you come to the office.'],
    ['Do you support Arabic and Urdu?','Yes. The website and customer guidance can be used in English, Arabic and Urdu.'],
    ['Can you guarantee approval or a processing time?','No. We can help with preparation and guidance, but decisions and timelines belong to the relevant authority or third-party provider.'],
    ['Where are you located?','Al Mizan is on Al Manama – Ras Al Khaimah Road in Al Nakheel, Ras Al Khaimah. Use the map button on this website for navigation.']
  ] : lang==='ar' ? [
    ['هل أنتم جهة حكومية؟','لا. الميزان مركز مستقل للطباعة وإنجاز المعاملات. نساعد في تجهيز الطلبات والمستندات، بينما تبقى الموافقات والأهلية والرسوم ومدة المعالجة من اختصاص الجهات المعنية.'],
    ['هل يمكنني إرسال المستندات عبر واتساب قبل الزيارة؟','نعم. إرسال صور واضحة مسبقاً يساعدنا في تحديد الخدمة والمستندات الناقصة الشائعة قبل زيارتك.'],
    ['هل تدعمون العربية والأردو؟','نعم. يمكن استخدام الموقع وخدمة العملاء بالإنجليزية والعربية والأردو.'],
    ['هل تضمنون الموافقة أو مدة المعالجة؟','لا. نساعد في التجهيز والإرشاد، لكن القرار والمدة تعود للجهة المختصة أو مزود الخدمة الخارجي.'],
    ['أين موقعكم؟','يقع الميزان على طريق المنامة – رأس الخيمة في النخيل، رأس الخيمة. استخدم زر الخريطة في الموقع للوصول إلينا.']
  ] : [
    ['کیا آپ سرکاری ادارہ ہیں؟','نہیں۔ ال میزان ایک آزاد ٹائپنگ اور ڈاکیومنٹس کلیئرنگ سینٹر ہے۔ ہم درخواست اور دستاویزات تیار کرنے میں مدد دیتے ہیں، جبکہ منظوری، اہلیت، فیس اور پراسیسنگ کا وقت متعلقہ اداروں کے اختیار میں ہوتا ہے۔'],
    ['کیا دفتر آنے سے پہلے واٹس ایپ پر دستاویزات بھیج سکتا ہوں؟','جی ہاں۔ پہلے واضح تصاویر بھیجنے سے ہم سروس اور عام طور پر غائب دستاویزات کی نشاندہی کر سکتے ہیں۔'],
    ['کیا آپ عربی اور اردو میں مدد کرتے ہیں؟','جی ہاں۔ ویب سائٹ اور کسٹمر رہنمائی انگریزی، عربی اور اردو میں دستیاب ہے۔'],
    ['کیا آپ منظوری یا پراسیسنگ ٹائم کی ضمانت دیتے ہیں؟','نہیں۔ ہم تیاری اور رہنمائی میں مدد کرتے ہیں، مگر فیصلہ اور وقت متعلقہ ادارے یا تھرڈ پارٹی فراہم کنندہ کے اختیار میں ہوتا ہے۔'],
    ['آپ کا دفتر کہاں ہے؟','ال میزان، المنامہ – رأس الخیمہ روڈ، النخیل، رأس الخیمہ میں واقع ہے۔ راستے کے لیے ویب سائٹ کا میپ بٹن استعمال کریں۔']
  ];
  return <>
    <PageHero lang={lang} eyebrow={t(ui.nav.faq,lang)} title={lang==='en'?'Straight answers before you start.':lang==='ar'?'إجابات واضحة قبل أن تبدأ.':'شروع کرنے سے پہلے واضح جوابات۔'} text={lang==='en'?'A few common questions about how Al Mizan works and what to expect.':lang==='ar'?'إجابات على أسئلة شائعة حول طريقة عمل الميزان وما يمكنك توقعه.':'ال میزان کے طریقہ کار اور توقعات کے بارے میں چند عام سوالات۔'} image="/images/unique/site/faq-hero.webp" icon="sparkle" accent="amber">
      <a className="button button-primary" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20}/>{t(ui.common.whatsapp,lang)}</a>
    </PageHero>
    <section className="section"><div className="container faq-layout"><div className="faq-list">{faqs.map(([q,a],i)=><details data-reveal key={q} open={i===0}><summary><span>{String(i+1).padStart(2,'0')}</span><strong>{q}</strong><i>+</i></summary><p>{a}</p></details>)}</div><aside className="faq-aside" data-reveal><span className="service-icon tone-mint"><Icon name="whatsapp"/></span><h2>{lang==='en'?'Still unsure?':lang==='ar'?'ما زلت غير متأكد؟':'اب بھی سوال ہے؟'}</h2><p>{lang==='en'?'Send us the service name and a photo of the document you have.':lang==='ar'?'أرسل لنا اسم الخدمة وصورة المستند المتوفر لديك.':'سروس کا نام اور موجود دستاویز کی تصویر بھیجیں۔'}</p><a className="button button-primary button-full" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={19}/>{t(ui.common.whatsapp,lang)}</a></aside></div></section>
  </>;
}
