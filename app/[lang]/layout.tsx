import { notFound } from 'next/navigation';
import { ClientShell } from '@/components/ClientShell';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { SiteEntrance } from '@/components/SiteEntrance';
import { isLang, type Lang } from '@/lib/content';

export function generateStaticParams() { return [{lang:'en'},{lang:'ar'},{lang:'ur'}]; }

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{lang:string}> }) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  const lang = raw as Lang;
  return <ClientShell lang={lang}><SiteEntrance/><SiteHeader lang={lang}/><main>{children}</main><SiteFooter lang={lang}/><WhatsAppFloat lang={lang}/></ClientShell>;
}
