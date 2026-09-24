import Image from 'next/image';
import type { IconName, Lang } from '@/lib/content';
import { Icon } from '@/components/Icon';

export function PageHero({ lang, eyebrow, title, text, image, icon = 'sparkle', accent='mint', children }: { lang: Lang; eyebrow: string; title: string; text: string; image?: string; icon?: IconName; accent?: string; children?: React.ReactNode }) {
  return <section className={`page-hero page-hero-${accent}`}>
    <div className="hero-grid-lines"/>
    <div className="hero-orb hero-orb-a"/><div className="hero-orb hero-orb-b"/>
    <div className="container page-hero-grid">
      <div className="page-hero-copy" data-reveal>
        <span className="eyebrow"><Icon name={icon} size={15}/>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        {children && <div className="hero-actions">{children}</div>}
      </div>
      {image && <div className="page-hero-visual" data-reveal>
        <div className="hero-image-shell"><Image src={image} alt="Al Mizan" fill priority sizes="(max-width: 900px) 100vw, 45vw"/><span className="hero-image-overlay"/></div>
        <div className="hero-float-card hero-float-card-a"><span className={`service-icon tone-${accent}`}><Icon name="check" size={18}/></span><span>{lang==='en'?'Clear guidance':lang==='ar'?'إرشاد واضح':'واضح رہنمائی'}</span></div>
        <div className="hero-float-card hero-float-card-b"><span className="status-dot"/><span>{lang==='en'?'Local RAK support':lang==='ar'?'دعم محلي في رأس الخيمة':'مقامی RAK سپورٹ'}</span></div>
      </div>}
    </div>
  </section>;
}
