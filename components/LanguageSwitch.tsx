'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Lang } from '@/lib/content';
import { Icon } from '@/components/Icon';

const langs: { id: Lang; label: string; native: string; short: string }[] = [
  { id: 'en', label: 'English', native: 'English', short: 'EN' },
  { id: 'ar', label: 'Arabic', native: 'العربية', short: 'AR' },
  { id: 'ur', label: 'Urdu', native: 'اردو', short: 'UR' },
];

export function LanguageSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const active = langs.find((item) => item.id === lang) ?? langs[0];

  useEffect(() => {
    function close(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', escape);
    };
  }, []);

  function change(next: Lang) {
    if (next === lang) { setOpen(false); return; }
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length && ['en', 'ar', 'ur'].includes(parts[0])) parts[0] = next;
    else parts.unshift(next);
    setOpen(false);
    router.push('/' + parts.join('/') + '/');
  }

  return (
    <div className={`language-switcher ${open ? 'is-open' : ''}`} ref={rootRef}>
      <button className="language-trigger" type="button" onClick={() => setOpen((value) => !value)} aria-haspopup="menu" aria-expanded={open} aria-label="Change language">
        <span className="language-globe" aria-hidden="true">◎</span>
        <strong>{active.short}</strong>
        <Icon name="chevron" size={13} />
      </button>
      <div className="language-popover" role="menu" aria-hidden={!open}>
        <div className="language-popover-head">
          <small>{lang === 'ar' ? 'اختر اللغة' : lang === 'ur' ? 'زبان منتخب کریں' : 'Choose language'}</small>
          <span>EN · AR · UR</span>
        </div>
        {langs.map((item) => (
          <button key={item.id} type="button" role="menuitemradio" aria-checked={lang === item.id} onClick={() => change(item.id)}>
            <span className="language-code">{item.short}</span>
            <span className="language-name"><strong>{item.native}</strong><small>{item.label}</small></span>
            <span className={`language-check ${lang === item.id ? 'is-active' : ''}`}><Icon name="check" size={14}/></span>
          </button>
        ))}
      </div>
    </div>
  );
}
