import Image from 'next/image';
import Link from 'next/link';
import type { Lang } from '@/lib/content';
import { business, categories, categoryHref, t, ui } from '@/lib/content';
import { Icon } from '@/components/Icon';

export function SiteFooter({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-orbit footer-orbit-a"/><div className="footer-orbit footer-orbit-b"/>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href={`/${lang}/`} className="brand brand-on-dark">
            <span className="brand-mark"><Image src="/images/logo.jpg" alt="Al Mizan" width={58} height={58}/></span>
            <span className="brand-copy"><strong>AL MIZAN</strong><small>{lang === 'ar' ? 'للطباعة وإنجاز المعاملات' : lang === 'ur' ? 'ٹائپنگ اور ڈاکیومنٹس کلیئرنگ' : 'Typing & Documents Clearing'}</small></span>
          </Link>
          <p>{lang === 'en' ? 'Independent typing and document assistance in Ras Al Khaimah for individuals, families and businesses.' : lang === 'ar' ? 'مركز مستقل للطباعة ومساعدة المعاملات في رأس الخيمة للأفراد والعائلات والشركات.' : 'رأس الخیمہ میں افراد، خاندانوں اور کاروباروں کے لیے آزاد ٹائپنگ اور دستاویزی معاونت۔'}</p>
          <div className="footer-contact-pills">
            <a href={`tel:${business.phoneHref}`}><Icon name="phone" size={17}/>{business.phoneDisplay}</a>
            <a href={`mailto:${business.email}`}><Icon name="mail" size={17}/>{business.email}</a>
          </div>
          <div className="footer-socials" aria-label="Social media">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" size={18}/></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Icon name="facebook" size={18}/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18}/></a>
          </div>
        </div>
        <div className="footer-col">
          <h3>{t(ui.nav.services, lang)}</h3>
          {categories.slice(0,5).map((c) => <Link key={c.slug} href={categoryHref(lang,c.slug)}>{t(c.shortTitle,lang)}</Link>)}
        </div>
        <div className="footer-col">
          <h3>{lang === 'en' ? 'More' : lang === 'ar' ? 'المزيد' : 'مزید'}</h3>
          {categories.slice(5).map((c) => <Link key={c.slug} href={categoryHref(lang,c.slug)}>{t(c.shortTitle,lang)}</Link>)}
          <Link href={`/${lang}/faq/`}>{t(ui.nav.faq,lang)}</Link>
        </div>
        <div className="footer-col footer-contact">
          <h3>{t(ui.common.address, lang)}</h3>
          <p>{t(business.address,lang)}</p>
          <a href={business.maps} target="_blank" rel="noreferrer">{t(ui.common.map,lang)} <Icon name="external" size={14}/></a>
          <a className="button button-light" href={`/${lang}/contact/`}>{t(ui.common.contactUs,lang)} <Icon name="arrow" size={16}/></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} Al Mizan Typing & Documents Clearing.</span>
        <div><Link href={`/${lang}/privacy-policy/`}>{lang==='ar'?'الخصوصية':lang==='ur'?'پرائیویسی':'Privacy'}</Link><Link href={`/${lang}/terms/`}>{lang==='ar'?'الشروط':lang==='ur'?'شرائط':'Terms'}</Link><Link href={`/${lang}/service-disclaimer/`}>{lang==='ar'?'إخلاء المسؤولية':lang==='ur'?'ڈسکلیمر':'Service disclaimer'}</Link></div>
      </div>
    </footer>
  );
}
