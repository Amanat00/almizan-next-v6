'use client';

import { FormEvent, useState } from 'react';
import type { Lang } from '@/lib/content';
import { business, categories, t } from '@/lib/content';
import { Icon } from '@/components/Icon';

export function ContactForm({ lang }: { lang: Lang }) {
  const [selected, setSelected] = useState(categories[0].slug);

  const labels = {
    name: lang === 'ar' ? 'الاسم' : lang === 'ur' ? 'نام' : 'Name',
    phone: lang === 'ar' ? 'رقم الهاتف' : lang === 'ur' ? 'فون نمبر' : 'Phone number',
    email: lang === 'ar' ? 'البريد الإلكتروني' : lang === 'ur' ? 'ای میل' : 'Email address',
    message: lang === 'ar' ? 'تفاصيل الطلب' : lang === 'ur' ? 'درخواست کی تفصیل' : 'What do you need help with?',
    submit: lang === 'ar' ? 'إرسال عبر واتساب' : lang === 'ur' ? 'واٹس ایپ پر بھیجیں' : 'Send on WhatsApp',
    select: lang === 'ar' ? 'اختر نوع الخدمة' : lang === 'ur' ? 'سروس منتخب کریں' : 'Choose a service area',
  };

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const category = categories.find((item) => item.slug === selected);
    const message = [
      lang === 'ar' ? 'مرحباً فريق الميزان،' : lang === 'ur' ? 'السلام علیکم ال میزان ٹیم،' : 'Hello Al Mizan team,',
      `${labels.select}: ${category ? t(category.title, lang) : selected}`,
      `${labels.name}: ${data.get('name') || ''}`,
      `${labels.phone}: ${data.get('phone') || ''}`,
      `${labels.email}: ${data.get('email') || ''}`, 
      `${labels.message}: ${data.get('message') || ''}`,
    ].join('\n');
    window.open(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return <form className="contact-form-card" onSubmit={submit}>
    <div className="form-heading">
      <span className="eyebrow"><Icon name="sparkle" size={14}/>{labels.select}</span>
      <h2>{lang === 'ar' ? 'ما الخدمة التي تحتاجها؟' : lang === 'ur' ? 'آپ کو کس سروس کی ضرورت ہے؟' : 'What can we help with?'}</h2>
      <p>{lang === 'ar' ? 'اختر فئة واحدة ثم أرسل تفاصيلك.' : lang === 'ur' ? 'ایک کیٹیگری منتخب کریں اور اپنی تفصیل بھیجیں۔' : 'Pick one service area, then tell us the details.'}</p>
    </div>

    <div className="service-choice-grid" role="radiogroup" aria-label={labels.select}>
      {categories.map((category) => {
        const active = selected === category.slug;
        return <button key={category.slug} type="button" role="radio" aria-checked={active} className={`service-choice ${active ? 'is-selected' : ''}`} onClick={() => setSelected(category.slug)}>
          <span className={`service-icon tone-${category.accent}`}><Icon name={category.icon} size={18}/></span>
          <span>{t(category.shortTitle, lang)}</span>
          <i className="radio-dot" />
        </button>;
      })}
    </div>

    <div className="form-grid">
      <label><span>{labels.name}</span><input name="name" placeholder={lang==='ar'?'الاسم الكامل':lang==='ur'?'آپ کا پورا نام':'Your full name'} required /></label>
      <label><span>{labels.phone}</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+971 …" required /></label>
      <label className="form-field-wide"><span>{labels.email}</span><input name="email" type="email" inputMode="email" autoComplete="email" placeholder={lang==='ar'?'name@example.com':lang==='ur'?'name@example.com':'name@example.com'} required /></label>
    </div>
    <label><span>{labels.message}</span><textarea name="message" rows={5} placeholder={lang==='ar'?'اكتب تفاصيل معاملتك هنا…':lang==='ur'?'اپنی درخواست کی تفصیل یہاں لکھیں…':'Tell us about the application, document or deadline…'} required /></label>
    <button className="button button-primary button-full" type="submit"><Icon name="whatsapp" size={20}/>{labels.submit}<Icon name="arrow" size={17}/></button>
    <small className="form-note">{lang==='ar'?'عند الإرسال سيتم فتح واتساب مع تفاصيل طلبك.':lang==='ur'?'بھیجنے پر آپ کی درخواست کی تفصیل کے ساتھ واٹس ایپ کھل جائے گا۔':'Submitting opens WhatsApp with your enquiry pre-filled.'}</small>
  </form>;
}
