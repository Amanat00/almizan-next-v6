import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { ServiceLinkCard } from '@/components/ServiceCard';
import { Icon } from '@/components/Icon';
import { business, getCategory, isLang, t, ui, type Lang } from '@/lib/content';

export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{const{lang:raw}=await params;if(!isLang(raw))return{};const lang=raw as Lang;return{title:t(ui.nav.local,lang),description:lang==='en'?'Local service agent, corporate sponsorship and office arrangement support in Ras Al Khaimah.':lang==='ar'?'دعم وكيل الخدمات والرعاية للشركات وترتيبات المكاتب في رأس الخيمة.':'رأس الخیمہ میں لوکل سروس ایجنٹ، کارپوریٹ اسپانسرشپ اور آفس انتظامات کی معاونت۔'}}

export default async function LocalSupportPage({params}:{params:Promise<{lang:string}>}){
  const{lang:raw}=await params;if(!isLang(raw))notFound();const lang=raw as Lang;const category=getCategory('local-support-corporate-services')!;
  return <>
    <PageHero lang={lang} eyebrow={t(ui.nav.local,lang)} title={lang==='en'?'Local support for the practical details around doing business in RAK.':lang==='ar'?'دعم محلي للتفاصيل العملية المرتبطة بممارسة الأعمال في رأس الخيمة.':'RAK میں کاروبار کے عملی معاملات کے لیے مقامی معاونت۔'} text={t(category.description,lang)} image="/images/unique/site/local-page-hero.webp" icon="handshake" accent="lime">
      <a className="button button-primary" href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(t(category.title,lang))}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20}/>{t(ui.common.whatsapp,lang)}</a>
      <Link className="button button-secondary" href={`/${lang}/contact/`}>{t(ui.common.contactUs,lang)}<Icon name="arrow" size={17}/></Link>
    </PageHero>
    <section className="section"><div className="container detail-intro-grid"><div data-reveal><span className="eyebrow"><Icon name="handshake" size={14}/>{t(category.title,lang)}</span><h2>{lang==='en'?'Support that goes beyond typing a form.':lang==='ar'?'دعم يتجاوز مجرد طباعة نموذج.':'صرف فارم ٹائپ کرنے سے آگے کی معاونت۔'}</h2></div><p data-reveal>{lang==='en'?'Some business needs are local and operational. These services focus on coordination, arrangements and practical support.':lang==='ar'?'بعض احتياجات الأعمال محلية وتشغيلية، وتركز هذه الخدمات على التنسيق والترتيبات والدعم العملي.':'بعض کاروباری ضروریات مقامی اور عملی ہوتی ہیں؛ یہ خدمات کوآرڈینیشن، انتظامات اور عملی معاونت پر مرکوز ہیں۔'}</p></div><div className="container service-link-grid">{category.services.map((s,i)=><ServiceLinkCard key={s.slug} category={category} service={s} lang={lang} index={i}/>)}</div></section>
    <section className="section soft-section"><div className="container local-support-cards">{[
      [lang==='en'?'Understand the requirement':lang==='ar'?'فهم المتطلبات':'ضرورت سمجھیں',lang==='en'?'We start by clarifying the business context and what kind of local arrangement is being considered.':lang==='ar'?'نبدأ بفهم سياق النشاط ونوع الترتيب المحلي المطلوب.':'ہم کاروباری پس منظر اور مطلوبہ مقامی انتظام کو واضح کرنے سے آغاز کرتے ہیں۔','01'],
      [lang==='en'?'Coordinate practical options':lang==='ar'?'تنسيق الخيارات العملية':'عملی آپشنز کوآرڈینیٹ کریں',lang==='en'?'We help organise the documents, conversations and next steps around the arrangement.':lang==='ar'?'نساعد في تنظيم المستندات والتواصل والخطوات التالية.':'ہم دستاویزات، رابطوں اور اگلے مراحل کو منظم کرنے میں مدد دیتے ہیں۔','02'],
      [lang==='en'?'Keep the scope clear':lang==='ar'?'وضوح نطاق الخدمة':'دائرہ کار واضح رکھیں',lang==='en'?'Where external parties or authorities are involved, their terms and decisions remain separate from our assistance.':lang==='ar'?'عند مشاركة جهات خارجية أو حكومية، تبقى شروطها وقراراتها منفصلة عن خدماتنا.':'جہاں بیرونی فریق یا سرکاری ادارے شامل ہوں، ان کی شرائط اور فیصلے ہماری معاونت سے الگ رہتے ہیں۔','03']
    ].map(([title,text,num])=><article data-reveal key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  </>;
}
