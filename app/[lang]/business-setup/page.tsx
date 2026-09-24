import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { ServiceLinkCard } from '@/components/ServiceCard';
import { Icon } from '@/components/Icon';
import { business, getCategory, isLang, t, ui, type Lang } from '@/lib/content';

export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{const{lang:raw}=await params;if(!isLang(raw))return{};const lang=raw as Lang;return{title:t(ui.nav.business,lang),description:lang==='en'?'RAKEZ and Ras Al Khaimah business setup, licensing and company-document support.':lang==='ar'?'دعم تأسيس الأعمال والتراخيص ومستندات الشركات في راكز ورأس الخيمة.':'RAKEZ اور رأس الخیمہ بزنس سیٹ اپ، لائسنسنگ اور کمپنی دستاویزات کی معاونت۔'}}

export default async function BusinessPage({params}:{params:Promise<{lang:string}>}){
  const{lang:raw}=await params;if(!isLang(raw))notFound();const lang=raw as Lang;const category=getCategory('business-setup-licensing')!;
  return <>
    <PageHero lang={lang} eyebrow="RAKEZ • RAK" title={lang==='en'?'Set up, renew or change your Ras Al Khaimah business with clearer paperwork.':lang==='ar'?'أسّس أو جدد أو عدّل أعمالك في رأس الخيمة بإجراءات أوضح.':'رأس الخیمہ میں اپنا کاروبار قائم، تجدید یا تبدیل کریں — زیادہ واضح کاغذی کارروائی کے ساتھ۔'} text={t(category.description,lang)} image="/images/unique/site/business-page-hero.webp" icon="building" accent="violet">
      <a className="button button-primary" href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(t(category.title,lang))}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20}/>{t(ui.common.whatsapp,lang)}</a>
      <Link className="button button-secondary" href={`/${lang}/contact/`}>{t(ui.common.contactUs,lang)}<Icon name="arrow" size={17}/></Link>
    </PageHero>
    <section className="section"><div className="container detail-intro-grid"><div data-reveal><span className="eyebrow"><Icon name="building" size={14}/>{t(category.title,lang)}</span><h2>{lang==='en'?'From trade-name reservation to licence amendments.':lang==='ar'?'من حجز الاسم التجاري إلى تعديلات الرخصة.':'ٹریڈ نیم ریزرویشن سے لائسنس ترمیم تک۔'}</h2></div><p data-reveal>{lang==='en'?'Choose the transaction you need. Each page is structured around common documents, preparation steps and direct support.':lang==='ar'?'اختر المعاملة المطلوبة. لكل خدمة صفحة توضح المستندات والخطوات وطريقة الدعم.':'مطلوبہ معاملہ منتخب کریں۔ ہر پیج پر عام دستاویزات، تیاری کے مراحل اور براہ راست معاونت موجود ہے۔'}</p></div><div className="container service-link-grid">{category.services.map((s,i)=><ServiceLinkCard key={s.slug} category={category} service={s} lang={lang} index={i}/>)}</div></section>
    <section className="section soft-section"><div className="container business-feature-grid"><div className="business-feature-copy" data-reveal><span className="eyebrow"><Icon name="sparkle" size={14}/>{lang==='en'?'Business paperwork, organised':lang==='ar'?'تنظيم مستندات الأعمال':'کاروباری کاغذات، منظم انداز میں'}</span><h2>{lang==='en'?'Documents often connect across several steps. We help keep the sequence clear.':lang==='ar'?'غالباً ما ترتبط مستندات الشركة بعدة خطوات، ونساعدك على ترتيبها بوضوح.':'کمپنی کے کاغذات اکثر کئی مراحل سے جڑے ہوتے ہیں؛ ہم ترتیب کو واضح رکھنے میں مدد دیتے ہیں۔'}</h2><div className="business-checks"><span><Icon name="check"/>Trade name & activity</span><span><Icon name="check"/>Licence documentation</span><span><Icon name="check"/>Partner / manager changes</span><span><Icon name="check"/>MOA / LSA / POA typing</span></div></div><div className="business-mosaic" data-reveal><div style={{backgroundImage:'url(/images/unique/site/business-mosaic-1.webp)'}}/><div style={{backgroundImage:'url(/images/unique/site/business-mosaic-2.webp)'}}/><div style={{backgroundImage:'url(/images/unique/site/business-mosaic-3.webp)'}}/></div></div></section>
  </>;
}
