import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { business, categories, categoryHref, categoryPhoto, isLang, serviceHref, t, ui, type Lang } from '@/lib/content';

export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{
  const {lang:raw}=await params; if(!isLang(raw)) return {};
  const lang=raw as Lang;
  return {
    title:lang==='en'?'Services':lang==='ar'?'الخدمات':'خدمات',
    description:lang==='en'?'Explore Al Mizan typing, visa, business setup and document services in Ras Al Khaimah.':lang==='ar'?'استكشف خدمات الميزان للطباعة والتأشيرات وتأسيس الأعمال والمستندات في رأس الخيمة.':'رأس الخیمہ میں ال میزان کی ٹائپنگ، ویزا، بزنس سیٹ اپ اور دستاویزی خدمات دیکھیں۔'
  };
}

export default async function ServicesPage({params}:{params:Promise<{lang:string}>}){
  const {lang:raw}=await params; if(!isLang(raw)) notFound(); const lang=raw as Lang;
  const totalServices = categories.reduce((sum, category) => sum + category.services.length, 0);

  const copy = {
    heroTitle: lang==='en' ? 'The right service, without the runaround.' : lang==='ar' ? 'الخدمة المناسبة، بدون تعقيد.' : 'درست سروس، بغیر غیر ضروری چکر کے۔',
    heroText: lang==='en' ? 'Start with what you need, see the exact transactions we support, and move straight to WhatsApp or a detailed service page.' : lang==='ar' ? 'ابدأ بما تحتاجه، ثم استعرض المعاملات المتاحة وانتقل مباشرة إلى واتساب أو صفحة الخدمة التفصيلية.' : 'اپنی ضرورت سے شروع کریں، متعلقہ معاملات دیکھیں، پھر سیدھا واٹس ایپ یا مکمل سروس پیج پر جائیں۔',
    browseTitle: lang==='en' ? 'A service directory built around real tasks.' : lang==='ar' ? 'دليل خدمات منظم حسب المعاملات الفعلية.' : 'حقیقی کاموں کے مطابق ترتیب دی گئی سروس ڈائریکٹری۔',
    browseText: lang==='en' ? 'Each section opens into the specific applications we can help prepare. No duplicate cards, no endless scrolling through the same layout.' : lang==='ar' ? 'يفتح كل قسم على المعاملات المحددة التي يمكننا مساعدتك في تجهيزها، دون تكرار البطاقات أو نفس النمط.' : 'ہر سیکشن میں وہ مخصوص درخواستیں ہیں جن کی تیاری میں ہم مدد کرتے ہیں — بار بار ایک جیسے کارڈز نہیں۔',
    serviceCount: lang==='en' ? 'specific services' : lang==='ar' ? 'خدمة محددة' : 'مخصوص خدمات',
    openCategory: lang==='en' ? 'Explore this category' : lang==='ar' ? 'استكشف هذه الفئة' : 'یہ کیٹیگری دیکھیں',
    needHelp: lang==='en' ? 'Not sure what your transaction is called?' : lang==='ar' ? 'غير متأكد من اسم معاملتك؟' : 'سروس کا درست نام معلوم نہیں؟',
    needHelpText: lang==='en' ? 'Send us a photo or short description on WhatsApp. We’ll help you identify the practical next step.' : lang==='ar' ? 'أرسل صورة أو وصفاً مختصراً عبر واتساب، وسنساعدك في تحديد الخطوة العملية التالية.' : 'واٹس ایپ پر تصویر یا مختصر تفصیل بھیجیں، ہم اگلا عملی مرحلہ سمجھنے میں مدد کریں گے۔',
  };

  return <>
    <section className="services-showcase-hero">
      <div className="services-hero-mesh"/>
      <div className="container services-showcase-grid">
        <div className="services-showcase-copy" data-reveal>
          <span className="eyebrow"><Icon name="sparkle" size={15}/>{t(ui.nav.services,lang)}</span>
          <h1>{copy.heroTitle}</h1>
          <p>{copy.heroText}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20}/>{t(ui.common.whatsapp,lang)}</a>
            <Link className="button button-secondary" href={`/${lang}/contact/`}>{t(ui.common.contactUs,lang)}<Icon name="arrow" size={17}/></Link>
          </div>
          <div className="services-hero-stats">
            <div><strong>{categories.length}</strong><span>{lang==='en'?'service groups':lang==='ar'?'فئات رئيسية':'سروس کیٹیگریز'}</span></div>
            <div><strong>{totalServices}+</strong><span>{copy.serviceCount}</span></div>
            <div><strong>3</strong><span>{lang==='en'?'languages':lang==='ar'?'لغات':'زبانیں'}</span></div>
          </div>
        </div>

        <div className="services-showcase-visual" data-reveal>
          <div className="services-visual-photo"><Image src="/images/unique/site/services-hero.webp" alt="Al Mizan service desk" fill priority sizes="(max-width: 900px) 100vw, 46vw"/></div>
          <div className="services-visual-shade"/>
          <div className="services-visual-label"><span className="status-dot"/><span>{lang==='en'?'Ras Al Khaimah service desk':lang==='ar'?'مكتب خدمات في رأس الخيمة':'رأس الخیمہ سروس ڈیسک'}</span></div>
          <div className="services-orbit services-orbit-a"><span className="service-icon tone-mint"><Icon name="id" size={20}/></span><strong>{t(categories[0].shortTitle,lang)}</strong></div>
          <div className="services-orbit services-orbit-b"><span className="service-icon tone-blue"><Icon name="plane" size={20}/></span><strong>{t(categories[1].shortTitle,lang)}</strong></div>
          <div className="services-orbit services-orbit-c"><span className="service-icon tone-violet"><Icon name="building" size={20}/></span><strong>{t(categories[5].shortTitle,lang)}</strong></div>
        </div>
      </div>
    </section>

    <section className="section services-directory-section">
      <div className="container">
        <div className="services-directory-heading" data-reveal>
          <div><span className="eyebrow"><Icon name="document" size={14}/>{t(ui.common.browse,lang)}</span><h2>{copy.browseTitle}</h2></div>
          <p>{copy.browseText}</p>
        </div>

        <div className="services-directory-list">
          {categories.map((category,index)=>(
            <article className={`services-directory-row ${index % 2 ? 'is-reverse' : ''}`} key={category.slug} data-reveal style={{'--delay':`${Math.min(index,4)*45}ms`} as React.CSSProperties}>
              <div className="services-directory-media">
                <Image src={categoryPhoto(category.slug,'directory')} alt={t(category.title,lang)} fill sizes="(max-width: 900px) 100vw, 38vw"/>
                <span className="services-directory-wash"/>
                <span className="services-directory-number">{String(index+1).padStart(2,'0')}</span>
                <span className={`services-directory-icon tone-${category.accent}`}><Icon name={category.icon} size={25}/></span>
              </div>
              <div className="services-directory-content">
                <div className="services-directory-titleline">
                  <div><small>{category.services.length} {copy.serviceCount}</small><h3>{t(category.title,lang)}</h3></div>
                  <Link prefetch={false} className="services-round-link" href={categoryHref(lang,category.slug)} aria-label={copy.openCategory}><Icon name="arrow" size={19}/></Link>
                </div>
                <p>{t(category.description,lang)}</p>
                <div className="services-transaction-list">
                  {category.services.slice(0,6).map((service)=><Link prefetch={false} key={service.slug} href={serviceHref(lang,category.slug,service.slug)}><span><Icon name="check" size={13}/></span>{t(service.title,lang)}</Link>)}
                </div>
                <div className="services-directory-actions">
                  <Link prefetch={false} className="text-link" href={categoryHref(lang,category.slug)}>{copy.openCategory}<Icon name="arrow" size={16}/></Link>
                  {category.services.length > 6 && <span className="services-more-count">+{category.services.length-6} {lang==='en'?'more':lang==='ar'?'أخرى':'مزید'}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="services-contact-cta-section">
      <div className="container">
        <div className="services-contact-cta" data-reveal>
          <div className="services-cta-photo"><Image src="/images/unique/site/services-cta.webp" alt="Al Mizan office" fill sizes="(max-width: 800px) 100vw, 40vw"/></div>
          <div className="services-cta-overlay"/>
          <div className="services-cta-content">
            <span className="eyebrow eyebrow-on-dark"><Icon name="sparkle" size={14}/>{lang==='en'?'Direct help':lang==='ar'?'مساعدة مباشرة':'براہِ راست مدد'}</span>
            <h2>{copy.needHelp}</h2>
            <p>{copy.needHelpText}</p>
            <div className="hero-actions">
              <a className="button button-light" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20}/>{t(ui.common.whatsapp,lang)}</a>
              <a className="button button-outline-light" href={`tel:${business.phoneHref}`}><Icon name="phone" size={18}/>{business.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}
