'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const HOME_RE = /^\/(en|ar|ur)\/?$/;
const DURATION = 5200;

export function SiteEntrance() {
  const pathname = usePathname();
  const isHome = HOME_RE.test(pathname || '');

  // IMPORTANT:
  // Do not render the entrance overlay during server-side rendering.
  // It will only appear after the browser JavaScript has loaded.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setVisible(false);
      document.body.classList.remove('entry-active');
      return;
    }

    setVisible(true);
    document.body.classList.add('entry-active');

    const timer = window.setTimeout(() => {
      setVisible(false);
      document.body.classList.remove('entry-active');
    }, DURATION);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove('entry-active');
    };
  }, [isHome, pathname]);

  if (!isHome || !visible) {
    return null;
  }

  return (
    <div
      className="site-entry"
      role="status"
      aria-label="Loading Al Mizan website"
    >
      <div className="site-entry-glow site-entry-glow-a" />
      <div className="site-entry-glow site-entry-glow-b" />
      <div className="site-entry-grid" />
      <div className="site-entry-sweep" />

      <div className="site-entry-brand">
        <span className="site-entry-logo">
          <Image
            src="/images/logo.jpg"
            alt="Al Mizan"
            width={82}
            height={82}
            priority
          />
        </span>

        <div className="site-entry-copy">
          <span className="site-entry-kicker">
            RAS AL KHAIMAH • UAE
          </span>

          <strong>AL MIZAN</strong>

          <span>
            Typing &amp; Documents Clearing
          </span>
        </div>

        <div className="site-entry-message">
          Government services. Clear guidance. One local team.
        </div>

        <div className="site-entry-progress">
          <i />
        </div>

        <small>Preparing your experience</small>
      </div>
    </div>
  );
}