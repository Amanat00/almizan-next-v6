'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import type { Lang } from '@/lib/content';
import { direction } from '@/lib/content';

export function ClientShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = direction(lang);
    root.dataset.lang = lang;
    let saved: string | null = null;
    try { saved = window.localStorage.getItem('almizan-theme'); } catch {}
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved === 'dark' || saved === 'light' ? saved : prefersDark ? 'dark' : 'light';
    root.dataset.theme = theme;
  }, [lang]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!nodes.length) return;
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }),
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
    );

    nodes.forEach((node) => {
      if (!node.classList.contains('is-visible')) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return <div className={`site-shell lang-${lang}`} dir={direction(lang)}>{children}</div>;
}
