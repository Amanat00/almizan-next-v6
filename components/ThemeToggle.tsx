'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@/components/Icon';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark');
  }, []);

  function toggle() {
    const next = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { window.localStorage.setItem('almizan-theme', next); } catch {}
    setDark(!dark);
  }

  return (
    <button className="icon-button" type="button" onClick={toggle} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>
      <Icon name={dark ? 'sun' : 'moon'} size={19} />
    </button>
  );
}
