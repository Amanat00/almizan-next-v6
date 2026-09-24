import type { MetadataRoute } from 'next';
import { categories } from '@/lib/content';
export default function sitemap(): MetadataRoute.Sitemap {
  const base=process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const entries: MetadataRoute.Sitemap=[];
  for(const lang of ['en','ar','ur']){
    for(const path of ['', 'about','contact','faq','services','business-setup','local-support','privacy-policy','terms','service-disclaimer']) entries.push({url:`${base}/${lang}/${path ? path+'/' : ''}`});
    for(const category of categories){
      entries.push({url:`${base}/${lang}/services/${category.slug}/`});
      for(const service of category.services) entries.push({url:`${base}/${lang}/services/${category.slug}/${service.slug}/`});
    }
  }
  return entries;
}
