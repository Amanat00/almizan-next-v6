import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { Icon } from '@/components/Icon';
import { business, categories, categoryPhoto, getCategory, isLang, serviceHref, servicePhoto, t, ui, type Lang } from '@/lib/content';

export function generateStaticParams() {
  return ['en','ar','ur'].flatMap((lang)=>categories.map((category)=>({lang,category:category.slug})));
}

export async function generateMetadata({params}:{params:Promise<{lang:string;category:string}>}):Promise<Metadata>{
  const {lang:raw,category:slug}=await params; if(!isLang(raw)) return {};
  const category=getCategory(slug); if(!category) return {};
  return {title:t(category.title,raw as Lang),description:t(category.description,raw as Lang)};
}

export default async function CategoryPage({params}:{params:Promise<{lang:string;category:string}>}){
  const {lang:raw,category:slug}=await params; if(!isLang(raw)) notFound(); const lang=raw as Lang;
  const category=getCategory(slug); if(!category) notFound();

  const copy = {
    choose: lang==='en'?'Choose the transaction you need.':lang==='ar'?'اختر المعاملة التي تحتاجها.':'اپنی مطلوبہ سروس منتخب کریں۔',
    intro: lang==='en'?'Open any service for the practical overview, common documents and direct enquiry options.':lang==='ar'?'افتح أي خدمة للاطلاع على شرح عملي والمستندات الشائعة وخيارات التواصل المباشر.':'کسی بھی سروس کو کھولیں اور عملی معلومات، عام دستاویزات اور براہِ راست رابطہ دیکھیں۔',
    desk: lang==='en'?'Need help choosing?':lang==='ar'?'تحتاج مساعدة في الاختيار؟':'سروس منتخب کرنے میں مدد چاہیے؟',
    deskText: lang==='en'?'Send us a short message or a document photo. We will help identify the most relevant transaction to start with.':lang==='ar'?'أرسل رسالة قصيرة أو صورة للمستند وسنساعدك في تحديد المعاملة الأنسب للبدء.':'مختصر پیغام یا دستاویز کی تصویر بھیجیں، ہم مناسب سروس شناخت کرنے میں مدد کریں گے۔',
    open: lang==='en'?'Open service':lang==='ar'?'عرض الخدمة':'سروس کھولیں',
    next: lang==='en'?'Ready to prepare your application?':lang==='ar'?'جاهز لتجهيز معاملتك؟':'اپنی درخواست تیار کروانا چاہتے ہیں؟',
    nextText: lang==='en'?'Share the service name on WhatsApp and our team can start with a document check.':lang==='ar'?'أرسل اسم الخدمة عبر واتساب ويمكن لفريقنا البدء بمراجعة المستندات.':'واٹس ایپ پر سروس کا نام بھیجیں، ہماری ٹیم دستاویز چیک سے آغاز کر سکتی ہے۔',
  };

  return <>
    <PageHero lang={lang} eyebrow={t(category.shortTitle,lang)} title={t(category.title,lang)} text={t(category.description,lang)} image={categoryPhoto(category.slug,'hero')} icon={category.icon} accent={category.accent}>
      <a className="button button-primary" href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(t(category.title,lang))}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20}/>{t(ui.common.whatsapp,lang)}</a>
      <Link className="button button-secondary" href={`/${lang}/contact/`}>{t(ui.common.contactUs,lang)}<Icon name="arrow" size={17}/></Link>
    </PageHero>

    <section className="section category-index-section">
      <div className="container category-index-heading" data-reveal>
        <div><span className="eyebrow"><Icon name="document" size={15}/>{lang==='en'?'Service directory':lang==='ar'?'دليل الخدمات':'سروس ڈائریکٹری'}</span><h2>{copy.choose}</h2></div>
        <p>{copy.intro}</p>
      </div>

      <div className="container category-index-layout">
        <aside className="category-index-aside" data-reveal>
          <div className="category-index-image"><Image src={categoryPhoto(category.slug,'aside')} alt={t(category.title,lang)} fill sizes="(max-width: 900px) 100vw, 34vw"/><span/></div>
          <div className="category-index-help">
            <span className={`service-icon tone-${category.accent}`}><Icon name={category.icon} size={21}/></span>
            <div><h3>{copy.desk}</h3><p>{copy.deskText}</p></div>
            <a className="button button-primary button-full" href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(t(category.title,lang))}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={19}/>{t(ui.common.whatsapp,lang)}</a>
          </div>
        </aside>

        <div className="category-service-list">
          {category.services.map((service,i)=><Link prefetch={false} className="category-service-row" key={service.slug} href={serviceHref(lang,category.slug,service.slug)} data-reveal style={{'--delay':`${Math.min(i,7)*35}ms`} as React.CSSProperties}>
            <span className="category-service-num">{String(i+1).padStart(2,'0')}</span>
            <span className="category-service-thumb"><Image src={servicePhoto(category.slug,service.slug,'thumb')} alt="" fill sizes="84px"/></span>
            <span className="category-service-main"><strong>{t(service.title,lang)}</strong><small>{lang==='en'?'Application typing · document guidance':lang==='ar'?'طباعة الطلب · إرشاد المستندات':'درخواست ٹائپنگ · دستاویز رہنمائی'}</small></span>
            <span className="category-service-action"><small>{copy.open}</small><span><Icon name="arrow" size={18}/></span></span>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="category-inline-cta-section">
      <div className="container">
        <div className="category-inline-cta" data-reveal>
          <div className="category-inline-copy"><span className="eyebrow eyebrow-on-dark"><Icon name="sparkle" size={14}/>{lang==='en'?'Quick enquiry':lang==='ar'?'استفسار سريع':'فوری رابطہ'}</span><h2>{copy.next}</h2><p>{copy.nextText}</p></div>
          <div className="category-inline-actions"><a className="button button-light" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20}/>{t(ui.common.whatsapp,lang)}</a><a className="button button-outline-light" href={`tel:${business.phoneHref}`}><Icon name="phone" size={18}/>{business.phoneDisplay}</a></div>
        </div>
      </div>
    </section>

    <section className="section section-process soft-section">
      <div className="container">
        <div className="section-heading center-heading" data-reveal><span className="eyebrow"><Icon name="sparkle" size={14}/>{lang==='en'?'Simple process':lang==='ar'?'خطوات بسيطة':'آسان طریقہ'}</span><h2>{lang==='en'?'From question to prepared application in four clear steps.':lang==='ar'?'من الاستفسار إلى الطلب المجهز في أربع خطوات واضحة.':'سوال سے تیار درخواست تک، چار واضح مراحل۔'}</h2></div>
        <div className="process-grid">
          {[
            [lang==='en'?'Message us':lang==='ar'?'راسلنا':'ہمیں پیغام کریں',lang==='en'?'Tell us the service and share the documents you already have.':lang==='ar'?'اذكر الخدمة وأرسل المستندات المتوفرة لديك.':'سروس بتائیں اور موجود دستاویزات شیئر کریں۔','01'],
            [lang==='en'?'Document check':lang==='ar'?'مراجعة المستندات':'دستاویزات چیک',lang==='en'?'We identify common missing items before typing begins.':lang==='ar'?'نحدد المستندات الناقصة قبل بدء الطباعة.':'ٹائپنگ سے پہلے عام طور پر درکار کمی چیک کی جاتی ہے۔','02'],
            [lang==='en'?'Prepare':lang==='ar'?'التجهيز':'تیاری',lang==='en'?'We prepare the application and supporting paperwork.':lang==='ar'?'نجهز الطلب والمستندات الداعمة.':'درخواست اور متعلقہ کاغذات تیار کیے جاتے ہیں۔','03'],
            [lang==='en'?'Next step':lang==='ar'?'الخطوة التالية':'اگلا مرحلہ',lang==='en'?'We guide you toward submission, appointment or payment as applicable.':lang==='ar'?'نرشدك للتقديم أو الموعد أو الدفع حسب الحالة.':'ضرورت کے مطابق جمع کرانے، اپوائنٹمنٹ یا ادائیگی کی رہنمائی دی جاتی ہے۔','04']
          ].map(([title,text,num],i)=><div className="process-card" data-reveal style={{'--delay':`${i*60}ms`} as React.CSSProperties} key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section category-visual-band"><div className="container visual-band"><div className="visual-band-image" style={{backgroundImage:`url(${categoryPhoto(category.slug,'band')})`}}/><div className="visual-band-copy" data-reveal><span className="eyebrow"><Icon name="shield" size={14}/>{lang==='en'?'Independent assistance':lang==='ar'?'مساعدة مستقلة':'آزاد معاونت'}</span><h2>{lang==='en'?'We prepare the paperwork. The authority makes the decision.':lang==='ar'?'نحن نجهز المعاملة، والجهة المختصة تتخذ القرار.':'ہم کاغذی کارروائی تیار کرتے ہیں، فیصلہ متعلقہ ادارہ کرتا ہے۔'}</h2><p>{lang==='en'?'Fees, eligibility, approvals and processing times remain subject to the relevant UAE authority.':lang==='ar'?'الرسوم والأهلية والموافقات ومدة المعالجة تخضع للجهة الحكومية المختصة في دولة الإمارات.':'فیس، اہلیت، منظوری اور پراسیسنگ کا وقت متعلقہ یو اے ای ادارے کے قواعد کے مطابق ہوتا ہے۔'}</p></div></div></section>
  </>;
}
