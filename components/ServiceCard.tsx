import Image from 'next/image';
import Link from 'next/link';
import type { Category, Lang, Service } from '@/lib/content';
import { categoryHref, categoryPhoto, serviceHref, servicePhoto, t, ui } from '@/lib/content';
import { Icon } from '@/components/Icon';

export function CategoryCard({ category, lang, index = 0 }: { category: Category; lang: Lang; index?: number }) {
  return <Link href={categoryHref(lang, category.slug)} className="category-card" data-reveal style={{'--delay': `${Math.min(index,6)*55}ms`} as React.CSSProperties}>
    <div className="category-photo"><Image src={categoryPhoto(category.slug,'home')} alt={t(category.title,lang)} fill sizes="(max-width: 700px) 100vw, 33vw"/><span className="photo-wash"/></div>
    <div className="category-card-top"><span className={`service-icon tone-${category.accent}`}><Icon name={category.icon} size={23}/></span><span className="count-badge">{category.services.length}</span></div>
    <div className="category-card-copy"><h3>{t(category.title,lang)}</h3><p>{t(category.description,lang)}</p><span className="text-link">{t(ui.common.learn,lang)} <Icon name="arrow" size={16}/></span></div>
  </Link>;
}

export function ServiceLinkCard({ category, service, lang, index = 0 }: { category: Category; service: Service; lang: Lang; index?: number }) {
  return <Link href={serviceHref(lang,category.slug,service.slug)} className="service-link-card service-link-card-photo" data-reveal style={{'--delay': `${Math.min(index,8)*40}ms`} as React.CSSProperties}>
    <span className="service-link-photo"><Image src={servicePhoto(category.slug,service.slug,'card')} alt="" fill sizes="88px"/></span>
    <span className={`service-icon tone-${category.accent}`}><Icon name={category.icon} size={19}/></span>
    <span className="service-link-copy"><strong>{t(service.title,lang)}</strong><small>{t(category.shortTitle,lang)}</small></span>
    <span className="service-card-arrow"><Icon name="arrow" size={17}/></span>
  </Link>;
}
