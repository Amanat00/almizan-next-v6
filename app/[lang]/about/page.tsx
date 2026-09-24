import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { Gallery } from '@/components/Gallery';
import { MapBlock } from '@/components/MapBlock';
import { Icon } from '@/components/Icon';
import { business, isLang, officeImages, t, ui, type Lang } from '@/lib/content';

export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{ const {lang:raw}=await params; if(!isLang(raw))return{}; const lang=raw as Lang; return {title:t(ui.nav.about,lang),description:t(ui.about.intro,lang)}; }

export default async function AboutPage({params}:{params:Promise<{lang:string}>}){
  const {lang:raw}=await params; if(!isLang(raw)) notFound(); const lang=raw as Lang;
  const values=[
    ['shield',lang==='en'?'Clear, independent support':lang==='ar'?'دعم واضح ومستقل':'واضح اور آزاد معاونت',lang==='en'?'We explain what we can prepare and what remains with the relevant authority.':lang==='ar'?'نوضح ما يمكننا تجهيزه وما يبقى من اختصاص الجهة المعنية.':'ہم واضح کرتے ہیں کہ ہم کیا تیار کر سکتے ہیں اور کیا متعلقہ ادارے کے اختیار میں ہے۔'],
    ['clock',lang==='en'?'Practical and efficient':lang==='ar'?'عملي وفعّال':'عملی اور مؤثر',lang==='en'?'We organize requirements before typing so you avoid unnecessary back-and-forth.':lang==='ar'?'ننظم المتطلبات قبل الطباعة لتقليل المراجعات غير الضرورية.':'ٹائپنگ سے پہلے ضروریات منظم کی جاتی ہیں تاکہ غیر ضروری چکر کم ہوں۔'],
    ['users',lang==='en'?'For people and companies':lang==='ar'?'للأفراد والشركات':'افراد اور کمپنیوں کے لیے',lang==='en'?'Our service mix supports residents, families, workers, entrepreneurs and local businesses.':lang==='ar'?'نخدم السكان والعائلات والموظفين ورواد الأعمال والشركات المحلية.':'ہم رہائشیوں، خاندانوں، ملازمین، کاروباری افراد اور مقامی کمپنیوں کی معاونت کرتے ہیں۔']
  ] as const;
  return <>
    <PageHero lang={lang} eyebrow={t(ui.about.eyebrow,lang)} title={t(ui.about.title,lang)} text={t(ui.about.intro,lang)} image="/images/unique/site/about-hero.webp" icon="sparkle" accent="lime">
      <a className="button button-primary" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20}/>{t(ui.common.whatsapp,lang)}</a>
      <Link className="button button-secondary" href={`/${lang}/services/`}>{t(ui.common.explore,lang)}<Icon name="arrow" size={17}/></Link>
    </PageHero>

    <section className="section"><div className="container story-grid"><div className="story-visual" data-reveal><div className="story-photo-main"><Image src="/images/unique/site/about-story-main.webp" alt="Al Mizan workspace" fill sizes="(max-width:900px) 100vw,45vw"/></div><div className="story-photo-small"><Image src="/images/unique/site/about-story-small.webp" alt="Al Mizan desk" fill sizes="220px"/></div><div className="story-badge"><span>RAK</span><small>{lang==='en'?'Local support':lang==='ar'?'دعم محلي':'مقامی سپورٹ'}</small></div></div><div className="story-copy" data-reveal><span className="eyebrow"><Icon name="sparkle" size={14}/>{lang==='en'?'Our role':lang==='ar'?'دورنا':'ہمارا کردار'}</span><h2>{lang==='en'?'We make paperwork easier to understand before it moves to the authority.':lang==='ar'?'نجعل المعاملات أسهل للفهم قبل انتقالها إلى الجهة المختصة.':'ہم کاغذی کارروائی کو متعلقہ ادارے تک جانے سے پہلے سمجھنے اور تیار کرنے میں آسان بناتے ہیں۔'}</h2><p>{lang==='en'?'Typing centers sit between complex forms and real-life needs. Our job is to help you prepare the information, format the application, check common requirements and understand the next step.':lang==='ar'?'تربط مراكز الطباعة بين النماذج المعقدة واحتياجات الناس اليومية. دورنا هو تجهيز المعلومات وتنسيق الطلب ومراجعة المتطلبات الشائعة وشرح الخطوة التالية.':'ٹائپنگ سینٹر پیچیدہ فارم اور روزمرہ ضرورت کے درمیان پل کا کام کرتے ہیں۔ ہمارا کام معلومات تیار کرنا، درخواست بنانا، عام ضروریات چیک کرنا اور اگلا مرحلہ سمجھانا ہے۔'}</p><div className="mini-stats"><div><strong>9</strong><span>{lang==='en'?'service groups':lang==='ar'?'فئات خدمات':'سروس کیٹیگریز'}</span></div><div><strong>3</strong><span>{lang==='en'?'languages':lang==='ar'?'لغات':'زبانیں'}</span></div><div><strong>RAK</strong><span>{lang==='en'?'local office':lang==='ar'?'مكتب محلي':'مقامی دفتر'}</span></div></div></div></div></section>

    <section className="section soft-section"><div className="container"><div className="section-heading center-heading" data-reveal><span className="eyebrow"><Icon name="sparkle" size={14}/>{lang==='en'?'How we work':lang==='ar'?'كيف نعمل':'ہم کیسے کام کرتے ہیں'}</span><h2>{lang==='en'?'Professional service without the stiff, confusing experience.':lang==='ar'?'خدمة مهنية دون تعقيد أو غموض.':'پروفیشنل سروس، مگر غیر ضروری پیچیدگی کے بغیر۔'}</h2></div><div className="value-grid">{values.map(([icon,title,text],i)=><article className="value-card" data-reveal style={{'--delay':`${i*80}ms`} as React.CSSProperties} key={title}><span className="value-icon"><Icon name={icon as any} size={24}/></span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="section section-gallery"><div className="container"><div className="section-heading split-heading" data-reveal><div><span className="eyebrow"><Icon name="sparkle" size={14}/>{t(ui.common.office,lang)}</span><h2>{lang==='en'?'A look inside our Ras Al Khaimah office.':lang==='ar'?'نظرة داخل مكتبنا في رأس الخيمة.':'ہمارے رأس الخیمہ دفتر کی ایک جھلک۔'}</h2></div><p>{lang==='en'?'Click any image to open the full gallery.':lang==='ar'?'اضغط على أي صورة لفتح المعرض الكامل.':'مکمل گیلری کے لیے کسی بھی تصویر پر کلک کریں۔'}</p></div><Gallery images={officeImages.slice(2)}/></div></section>

    <section className="section"><div className="container location-grid"><div className="location-copy" data-reveal><span className="eyebrow"><Icon name="map" size={14}/>{t(ui.common.address,lang)}</span><h2>{lang==='en'?'Visit us in Al Nakheel, Ras Al Khaimah.':lang==='ar'?'زورونا في النخيل، رأس الخيمة.':'النخیل، رأس الخیمہ میں تشریف لائیں۔'}</h2><p>{t(business.address,lang)}</p><a className="button button-primary" href={business.maps} target="_blank" rel="noreferrer"><Icon name="map" size={18}/>{t(ui.common.map,lang)}</a></div><div data-reveal><MapBlock lang={lang}/></div></div></section>
  </>;
}
