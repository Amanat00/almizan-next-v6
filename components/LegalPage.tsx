import type { Lang } from '@/lib/content';
import { Icon } from '@/components/Icon';

export function LegalPage({lang,title,intro,sections}:{lang:Lang;title:string;intro:string;sections:{heading:string;body:string}[]}){
  return <section className="section legal-page"><div className="container legal-shell"><div className="legal-heading" data-reveal><span className="eyebrow"><Icon name="shield" size={14}/>{lang==='en'?'Website information':lang==='ar'?'معلومات الموقع':'ویب سائٹ معلومات'}</span><h1>{title}</h1><p>{intro}</p></div><div className="legal-content">{sections.map((section)=><article key={section.heading} data-reveal><h2>{section.heading}</h2><p>{section.body}</p></article>)}</div></div></section>;
}
