import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CategoryCard } from '@/components/ServiceCard';
import { Gallery } from '@/components/Gallery';
import { MapBlock } from '@/components/MapBlock';
import { Icon } from '@/components/Icon';
import { business, categories, isLang, officeImages, popularServices, serviceHref, t, ui, type Lang } from '@/lib/content';

export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{
  const {lang:raw}=await params; if(!isLang(raw)) return {};
  const lang=raw as Lang;
  return {title: lang==='en'?'Typing & Documents Clearing in Ras Al Khaimah':lang==='ar'?'الميزان للطباعة وإنجاز المعاملات في رأس الخيمة':'رأس الخیمہ میں ٹائپنگ اور ڈاکیومنٹس کلیئرنگ',description:t(ui.home.intro,lang)};
}

export default async function HomePage({ params }: { params: Promise<{lang:string}> }) {
  const {lang:raw}=await params; if(!isLang(raw)) notFound(); const lang=raw as Lang;
  const popular=popularServices.map(([c,s])=>{const category=categories.find(x=>x.slug===c)!; return {category,service:category.services.find(x=>x.slug===s)!};});
  return <>
    <section className="home-hero">
      <div className="hero-grid-lines"/><div className="hero-orb hero-orb-a"/><div className="hero-orb hero-orb-b"/>
      <div className="container home-hero-grid">
        <div className="home-hero-copy" data-reveal>
          <span className="eyebrow"><Icon name="sparkle" size={15}/>{t(ui.home.eyebrow,lang)}</span>
          <h1>{t(ui.home.title,lang)}</h1>
          <p>{t(ui.home.intro,lang)}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20}/>{t(ui.common.whatsapp,lang)}<Icon name="arrow" size={17}/></a>
            <Link className="button button-secondary" href={`/${lang}/services/`}>{t(ui.common.explore,lang)}<Icon name="arrow" size={17}/></Link>
          </div>
          <div className="hero-proof-row">
            <span><i className="status-dot"/>{t(ui.home.stat1,lang)}</span>
            <span><i className="status-dot"/>{t(ui.home.stat2,lang)}</span>
            <span><i className="status-dot"/>{t(ui.home.stat3,lang)}</span>
          </div>
        </div>
        <div className="home-hero-visual" data-reveal>
          <div className="hero-photo-main"><Image src="/images/unique/site/home-hero-main.webp" alt="Al Mizan office interior" fill priority sizes="(max-width: 900px) 100vw, 48vw"/></div>
          <div className="hero-photo-small hero-photo-small-a"><Image src="/images/unique/site/home-hero-small.webp" alt="Al Mizan service desk" fill sizes="280px"/></div>
          <div className="hero-service-card hero-service-card-a"><span className="service-icon tone-mint"><Icon name="id"/></span><span><small>ICP</small><strong>{t(categories[0].shortTitle,lang)}</strong></span></div>
          <div className="hero-service-card hero-service-card-b"><span className="service-icon tone-violet"><Icon name="building"/></span><span><small>RAK</small><strong>{t(categories[5].shortTitle,lang)}</strong></span></div>
          <div className="hero-ring hero-ring-a"/><div className="hero-ring hero-ring-b"/>
        </div>
      </div>
      <div className="hero-ticker" aria-hidden="true"><div>{categories.concat(categories).map((c,i)=><span key={`${c.slug}-${i}`}><Icon name={c.icon} size={15}/>{t(c.shortTitle,lang)}</span>)}</div></div>
    </section>

    <section className="section section-services">
      <div className="container">
        <div className="section-heading split-heading" data-reveal>
          <div><span className="eyebrow"><Icon name="sparkle" size={14}/>{t(ui.common.browse,lang)}</span><h2>{lang==='en'?'One center. A wide range of practical services.':lang==='ar'?'مركز واحد لمجموعة واسعة من الخدمات العملية.':'ایک سینٹر، عملی خدمات کی وسیع رینج۔'}</h2></div>
          <p>{lang==='en'?'Start with the category that matches your need. Every service page explains the next steps, common documents and the quickest way to contact us.':lang==='ar'?'ابدأ بالفئة التي تناسب معاملتك. توضح كل صفحة الخطوات والمستندات الشائعة وأسرع طريقة للتواصل معنا.':'اپنی ضرورت کے مطابق کیٹیگری منتخب کریں۔ ہر سروس پیج پر اگلے مراحل، عام دستاویزات اور رابطے کا آسان طریقہ دیا گیا ہے۔'}</p>
        </div>
        <div className="category-grid">{categories.map((c,i)=><CategoryCard key={c.slug} category={c} lang={lang} index={i}/>)}</div>
      </div>
    </section>

    <section className="section section-popular">
      <div className="container popular-layout">
        <div className="popular-copy" data-reveal>
          <span className="eyebrow"><Icon name="sparkle" size={14}/>{t(ui.common.popular,lang)}</span>
          <h2>{lang==='en'?'Quick access to commonly requested services.':lang==='ar'?'وصول سريع إلى الخدمات الأكثر طلباً.':'زیادہ مطلوب خدمات تک فوری رسائی۔'}</h2>
          <p>{lang==='en'?'Not sure which category fits? Start with one of these frequent enquiries or message our team with a photo of the document you have.':lang==='ar'?'إذا لم تكن متأكداً من الفئة المناسبة، ابدأ بإحدى هذه الخدمات أو أرسل لنا صورة المستند عبر واتساب.':'اگر کیٹیگری واضح نہیں تو ان عام سروسز سے شروع کریں، یا واٹس ایپ پر موجود دستاویز کی تصویر بھیج دیں۔'}</p>
          <a className="button button-dark" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20}/>{t(ui.common.whatsapp,lang)}</a>
        </div>
        <div className="popular-stack">
          {popular.map(({category,service},i)=><Link className="popular-row" data-reveal style={{'--delay':`${i*55}ms`} as React.CSSProperties} key={service.slug} href={serviceHref(lang,category.slug,service.slug)}><span className={`service-icon tone-${category.accent}`}><Icon name={category.icon} size={19}/></span><span><small>{t(category.shortTitle,lang)}</small><strong>{t(service.title,lang)}</strong></span><Icon name="arrow" size={18}/></Link>)}
        </div>
      </div>
    </section>

    <section className="section section-gallery">
      <div className="container">
        <div className="section-heading center-heading" data-reveal><span className="eyebrow"><Icon name="sparkle" size={14}/>{t(ui.common.office,lang)}</span><h2>{t(ui.home.galleryTitle,lang)}</h2><p>{t(ui.home.galleryText,lang)}</p></div>
        <Gallery images={officeImages}/>
      </div>
    </section>

    <section className="section section-location">
      <div className="container location-grid">
        <div className="location-copy" data-reveal>
          <span className="eyebrow"><Icon name="map" size={14}/>{t(ui.common.address,lang)}</span>
          <h2>{lang==='en'?'Find us in Al Nakheel, Ras Al Khaimah.':lang==='ar'?'زورونا في النخيل، رأس الخيمة.':'النخیل، رأس الخیمہ میں ہمیں تلاش کریں۔'}</h2>
          <p>{t(business.address,lang)}</p>
          <div className="contact-mini-grid"><a href={`tel:${business.phoneHref}`}><Icon name="phone"/><span><small>{t(ui.common.call,lang)}</small><strong>{business.phoneDisplay}</strong></span></a><a href={`mailto:${business.email}`}><Icon name="mail"/><span><small>Email</small><strong>{business.email}</strong></span></a></div>
          <a className="button button-primary" href={business.maps} target="_blank" rel="noreferrer"><Icon name="map" size={19}/>{t(ui.common.map,lang)}<Icon name="external" size={15}/></a>
        </div>
        <div data-reveal><MapBlock lang={lang}/></div>
      </div>
    </section>

    <section className="section section-cta"><div className="container"><div className="cta-panel" data-reveal><div className="cta-orb"/><span className="eyebrow eyebrow-on-dark"><Icon name="sparkle" size={14}/>{lang==='en'?'Need a quick answer?':lang==='ar'?'تحتاج إجابة سريعة؟':'فوری جواب چاہیے؟'}</span><h2>{lang==='en'?'Send your document. We’ll tell you the practical next step.':lang==='ar'?'أرسل مستندك وسنوضح لك الخطوة العملية التالية.':'اپنی دستاویز بھیجیں، ہم آپ کو اگلا عملی مرحلہ بتائیں گے۔'}</h2><div className="hero-actions"><a className="button button-light" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20}/>{t(ui.common.whatsapp,lang)}</a><Link className="button button-outline-light" href={`/${lang}/contact/`}>{t(ui.common.contactUs,lang)}<Icon name="arrow" size={17}/></Link></div></div></div></section>
  </>;
}
