import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';
import { MapBlock } from '@/components/MapBlock';
import { Icon } from '@/components/Icon';
import { business, isLang, t, ui, type Lang } from '@/lib/content';

export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{const{lang:raw}=await params;if(!isLang(raw))return{};const lang=raw as Lang;return{title:t(ui.nav.contact,lang),description:t(ui.contact.intro,lang)}}

export default async function ContactPage({params}:{params:Promise<{lang:string}>}){
  const{lang:raw}=await params;if(!isLang(raw))notFound();const lang=raw as Lang;
  return <>
    <PageHero lang={lang} eyebrow={t(ui.contact.eyebrow,lang)} title={t(ui.contact.title,lang)} text={t(ui.contact.intro,lang)} image="/images/unique/site/contact-hero.webp" icon="mail" accent="blue">
      <a className="button button-primary" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20}/>{t(ui.common.whatsapp,lang)}</a>
      <a className="button button-secondary" href={`tel:${business.phoneHref}`}><Icon name="phone" size={18}/>{t(ui.common.call,lang)}</a>
    </PageHero>
    <section className="section contact-section"><div className="container contact-layout"><div data-reveal><ContactForm lang={lang}/></div><aside className="contact-aside"><div className="contact-direct-card" data-reveal><span className="eyebrow"><Icon name="sparkle" size={14}/>{lang==='en'?'Reach us directly':lang==='ar'?'تواصل معنا مباشرة':'براہ راست رابطہ'}</span><h2>{lang==='en'?'Choose the quickest route.':lang==='ar'?'اختر أسرع طريقة للتواصل.':'اپنے لیے سب سے آسان طریقہ منتخب کریں۔'}</h2><a href={`tel:${business.phoneHref}`}><span className="service-icon tone-mint"><Icon name="phone" size={19}/></span><span><small>{t(ui.common.call,lang)}</small><strong>{business.phoneDisplay}</strong></span><Icon name="arrow" size={16}/></a><a href={`mailto:${business.email}`}><span className="service-icon tone-blue"><Icon name="mail" size={19}/></span><span><small>Email</small><strong>{business.email}</strong></span><Icon name="arrow" size={16}/></a><a href={business.maps} target="_blank" rel="noreferrer"><span className="service-icon tone-amber"><Icon name="map" size={19}/></span><span><small>{t(ui.common.address,lang)}</small><strong>{t(business.address,lang)}</strong></span><Icon name="external" size={16}/></a></div><div data-reveal><MapBlock lang={lang} compact/></div></aside></div></section>
    <section className="section soft-section"><div className="container contact-tips"><div data-reveal><span className="eyebrow"><Icon name="document" size={14}/>{lang==='en'?'Before you message':lang==='ar'?'قبل التواصل':'پیغام سے پہلے'}</span><h2>{lang==='en'?'A few details help us answer faster.':lang==='ar'?'بعض التفاصيل تساعدنا على الرد بسرعة أكبر.':'کچھ تفصیل ہمیں جلد جواب دینے میں مدد دیتی ہے۔'}</h2></div><div className="tip-grid">{[lang==='en'?['1','Name the service','Tell us which application or document you need.']:lang==='ar'?['1','اذكر الخدمة','حدد الطلب أو المستند الذي تحتاجه.']:['1','سروس کا نام بتائیں','بتائیں کس درخواست یا دستاویز کی ضرورت ہے۔'],lang==='en'?['2','Share clear photos','Send the front and back where relevant.']:lang==='ar'?['2','أرسل صوراً واضحة','أرسل الوجهين عند الحاجة.']:['2','واضح تصاویر بھیجیں','ضرورت کے مطابق سامنے اور پیچھے کی تصویر بھیجیں۔'],lang==='en'?['3','Mention your deadline','If something is urgent, tell us the date.']:lang==='ar'?['3','اذكر الموعد','إذا كانت المعاملة عاجلة فاذكر التاريخ.']:['3','ڈیڈ لائن بتائیں','اگر کام فوری ہے تو تاریخ ضرور بتائیں۔']].map(([n,title,text])=><article data-reveal key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  </>;
}
