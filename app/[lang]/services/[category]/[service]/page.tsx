import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { business, categories, genericServiceCopy, getService, isLang, serviceHref, servicePhoto, t, ui, type Lang } from '@/lib/content';

export function generateStaticParams(){
  return ['en','ar','ur'].flatMap((lang)=>categories.flatMap((category)=>category.services.map((service)=>({lang,category:category.slug,service:service.slug}))));
}

export async function generateMetadata({params}:{params:Promise<{lang:string;category:string;service:string}>}):Promise<Metadata>{
  const {lang:raw,category,service}=await params; if(!isLang(raw)) return {};
  const found=getService(category,service); if(!found.category||!found.service) return {};
  const title=t(found.service.title,raw as Lang);
  return {title,description:`${title} — ${t(found.category.description,raw as Lang)}`};
}

export default async function ServiceDetail({params}:{params:Promise<{lang:string;category:string;service:string}>}){
  const {lang:raw,category:categorySlug,service:serviceSlug}=await params; if(!isLang(raw)) notFound(); const lang=raw as Lang;
  const {category,service}=getService(categorySlug,serviceSlug); if(!category||!service) notFound();
  const copy=genericServiceCopy[lang];
  const related=category.services.filter(s=>s.slug!==service.slug).slice(0,4);
  const visual=servicePhoto(category.slug,service.slug,'hero');
  const ctaVisual=servicePhoto(category.slug,service.slug,'cta');
  const sidebarVisual=servicePhoto(category.slug,service.slug,'sidebar');
  const message=encodeURIComponent(`${t(service.title,lang)} — ${lang==='ar'?'أحتاج مساعدة في هذه الخدمة.':lang==='ur'?'مجھے اس سروس کے بارے میں مدد چاہیے۔':'I need help with this service.'}`);
  return <>
    <section className={`service-hero page-hero-${category.accent}`}>
      <div className="hero-grid-lines"/><div className="hero-orb hero-orb-a"/><div className="hero-orb hero-orb-b"/>
      <div className="container service-hero-grid">
        <div className="service-hero-copy" data-reveal>
          <Link className="breadcrumb" href={`/${lang}/services/${category.slug}/`}><Icon name={category.icon} size={14}/>{t(category.shortTitle,lang)}</Link>
          <h1>{t(service.title,lang)}</h1>
          <p>{copy.overview}</p>
          <div className="hero-actions"><a className="button button-primary" href={`https://wa.me/${business.whatsapp}?text=${message}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20}/>{t(ui.common.whatsapp,lang)}</a><a className="button button-secondary" href={`tel:${business.phoneHref}`}><Icon name="phone" size={18}/>{t(ui.common.call,lang)}</a></div>
          <div className="service-trust-row"><span><Icon name="check" size={15}/>{lang==='en'?'Document check':lang==='ar'?'مراجعة المستندات':'دستاویز چیک'}</span><span><Icon name="check" size={15}/>{lang==='en'?'Typing support':lang==='ar'?'دعم الطباعة':'ٹائپنگ سپورٹ'}</span><span><Icon name="check" size={15}/>{lang==='en'?'Local RAK team':lang==='ar'?'فريق محلي':'مقامی RAK ٹیم'}</span></div>
        </div>
        <div className="service-hero-media" data-reveal>
          <div className="service-photo"><Image src={visual} alt={t(service.title,lang)} fill priority sizes="(max-width: 900px) 100vw, 45vw"/><span className="service-photo-wash"/></div>
          <div className="service-visual-card service-visual-top"><span className={`service-icon tone-${category.accent}`}><Icon name={category.icon} size={22}/></span><div><small>{lang==='en'?'Service category':lang==='ar'?'فئة الخدمة':'سروس کیٹیگری'}</small><strong>{t(category.shortTitle,lang)}</strong></div></div>
          <div className="service-visual-card service-visual-bottom"><Icon name="clock" size={20}/><div><small>{lang==='en'?'Start quickly':lang==='ar'?'ابدأ بسرعة':'جلدی شروع کریں'}</small><strong>WhatsApp +971 56 169 0094</strong></div></div>
        </div>
      </div>
    </section>

    <section className="section service-detail-body">
      <div className="container service-detail-grid">
        <div className="service-main-column">
          <div className="content-card" data-reveal><span className="eyebrow"><Icon name="document" size={14}/>{lang==='en'?'What we help with':lang==='ar'?'كيف نساعدك':'ہم کیسے مدد کرتے ہیں'}</span><h2>{lang==='en'?'Clear preparation before you submit.':lang==='ar'?'تجهيز واضح قبل التقديم.':'جمع کرانے سے پہلے واضح تیاری۔'}</h2><p>{copy.overview}</p><div className="feature-pills"><span><Icon name="check" size={15}/>{lang==='en'?'Application typing':lang==='ar'?'طباعة الطلب':'درخواست ٹائپنگ'}</span><span><Icon name="check" size={15}/>{lang==='en'?'Document review':lang==='ar'?'مراجعة المستندات':'دستاویز جائزہ'}</span><span><Icon name="check" size={15}/>{lang==='en'?'Next-step guidance':lang==='ar'?'إرشاد للخطوة التالية':'اگلے مرحلے کی رہنمائی'}</span></div></div>

          <div className="content-card" data-reveal><span className="eyebrow"><Icon name="document" size={14}/>{lang==='en'?'Common documents':lang==='ar'?'مستندات شائعة':'عام دستاویزات'}</span><h2>{lang==='en'?'What you may need to bring.':lang==='ar'?'ما قد تحتاج إلى إحضاره.':'آپ کو کیا ساتھ لانا پڑ سکتا ہے۔'}</h2><div className="document-list">{copy.documents.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,'0')}</span><p>{item}</p><Icon name="check" size={17}/></div>)}</div><p className="muted-note">{lang==='en'?'Exact requirements can differ by case. Message us first if you want us to check what applies to you.':lang==='ar'?'قد تختلف المتطلبات حسب الحالة. راسلنا أولاً للتأكد مما ينطبق على معاملتك.':'ضروریات کیس کے مطابق مختلف ہو سکتی ہیں۔ پہلے ہمیں پیغام کریں تاکہ ہم آپ کے لیے درکار چیزیں چیک کر سکیں۔'}</p></div>

          <div className="content-card" data-reveal><span className="eyebrow"><Icon name="sparkle" size={14}/>{lang==='en'?'How it works':lang==='ar'?'كيف تعمل الخدمة':'طریقہ کار'}</span><h2>{lang==='en'?'A simple four-step flow.':lang==='ar'?'أربع خطوات بسيطة.':'چار آسان مراحل۔'}</h2><div className="timeline">{copy.steps.map((step,i)=><div className="timeline-item" key={step}><span className={`timeline-dot tone-${category.accent}`}>{i+1}</span><div><strong>{step}</strong><p>{lang==='en'?['Send the service name and any documents you already have.','We flag common missing items or information before typing.','Your application and supporting paperwork are prepared carefully.','We explain the submission, appointment or payment step that follows.'][i]:lang==='ar'?['أرسل اسم الخدمة والمستندات المتوفرة لديك.','نوضح أي مستندات أو معلومات ناقصة قبل الطباعة.','يتم تجهيز الطلب والمستندات الداعمة بعناية.','نشرح خطوة التقديم أو الموعد أو الدفع التالية.'][i]:['سروس کا نام اور موجود دستاویزات بھیجیں۔','ٹائپنگ سے پہلے عام طور پر غائب معلومات یا دستاویزات بتائی جاتی ہیں۔','درخواست اور متعلقہ کاغذات احتیاط سے تیار کیے جاتے ہیں۔','اگلے جمع کرانے، اپوائنٹمنٹ یا ادائیگی کے مرحلے کی وضاحت کی جاتی ہے۔'][i]}</p></div></div>)}</div></div>
        </div>

        <aside className="service-sidebar">
          <div className="sidebar-card sidebar-contact" data-reveal><span className={`service-icon tone-${category.accent}`}><Icon name="whatsapp" size={23}/></span><h3>{lang==='en'?'Check your documents first':lang==='ar'?'تحقق من مستنداتك أولاً':'پہلے اپنی دستاویزات چیک کروائیں'}</h3><p>{lang==='en'?'Send clear photos on WhatsApp and tell us which service you need.':lang==='ar'?'أرسل صوراً واضحة عبر واتساب واذكر الخدمة المطلوبة.':'واٹس ایپ پر واضح تصاویر بھیجیں اور مطلوبہ سروس بتائیں۔'}</p><a className="button button-primary button-full" href={`https://wa.me/${business.whatsapp}?text=${message}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={19}/>{t(ui.common.whatsapp,lang)}</a></div>
          <div className="sidebar-photo" data-reveal><Image src={sidebarVisual} alt={t(service.title,lang)} fill sizes="360px"/><span/><div><small>{t(ui.common.office,lang)}</small><strong>{t(business.address,lang)}</strong></div></div>
          <div className="sidebar-card disclaimer-card" data-reveal><Icon name="shield" size={22}/><p>{copy.disclaimer}</p></div>
        </aside>
      </div>
    </section>

    <section className="service-detail-cta-section">
      <div className="container">
        <div className="service-detail-cta" data-reveal>
          <div className="service-detail-cta-visual"><Image src={ctaVisual} alt="" fill sizes="280px"/></div>
          <div className="service-detail-cta-copy"><span className="eyebrow eyebrow-on-dark"><Icon name="sparkle" size={14}/>{lang==='en'?'Start with a document check':lang==='ar'?'ابدأ بمراجعة المستندات':'دستاویز چیک سے آغاز کریں'}</span><h2>{lang==='en'?'Send the service name. We’ll help you prepare the next step.':lang==='ar'?'أرسل اسم الخدمة وسنساعدك في تجهيز الخطوة التالية.':'سروس کا نام بھیجیں، ہم اگلا مرحلہ تیار کرنے میں مدد کریں گے۔'}</h2></div>
          <div className="service-detail-cta-actions"><a className="button button-light" href={`https://wa.me/${business.whatsapp}?text=${message}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20}/>{t(ui.common.whatsapp,lang)}</a><a className="button button-outline-light" href={`tel:${business.phoneHref}`}><Icon name="phone" size={18}/>{t(ui.common.call,lang)}</a></div>
        </div>
      </div>
    </section>

    {related.length>0 && <section className="section soft-section"><div className="container"><div className="section-heading split-heading" data-reveal><div><span className="eyebrow"><Icon name="sparkle" size={14}/>{lang==='en'?'Related services':lang==='ar'?'خدمات مرتبطة':'متعلقہ خدمات'}</span><h2>{lang==='en'?'You may also need one of these.':lang==='ar'?'قد تحتاج أيضاً إلى إحدى هذه الخدمات.':'آپ کو ان میں سے کسی سروس کی بھی ضرورت ہو سکتی ہے۔'}</h2></div></div><div className="related-grid">{related.map((item)=><Link key={item.slug} className="related-card related-card-photo" href={serviceHref(lang,category.slug,item.slug)}><span className="related-card-image"><Image src={servicePhoto(category.slug,item.slug,'related')} alt="" fill sizes="220px"/></span><span className={`service-icon tone-${category.accent}`}><Icon name={category.icon} size={19}/></span><strong>{t(item.title,lang)}</strong><Icon name="arrow" size={17}/></Link>)}</div></div></section>}
  </>;
}
