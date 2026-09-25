'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import type { Lang } from '@/lib/content';
import {
  categories,
  categoryHref,
  t,
  ui,
  business,
} from '@/lib/content';

import { Icon } from '@/components/Icon';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSwitch } from '@/components/LanguageSwitch';

export function SiteHeader({ lang }: { lang: Lang }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nav = [
    { href: `/${lang}/`, label: t(ui.nav.home, lang) },
    { href: `/${lang}/about/`, label: t(ui.nav.about, lang) },
    { href: `/${lang}/business-setup/`, label: t(ui.nav.business, lang) },
    { href: `/${lang}/local-support/`, label: t(ui.nav.local, lang) },
    { href: `/${lang}/contact/`, label: t(ui.nav.contact, lang) },
  ];

  const mobileNav = [
    { href: `/${lang}/`, label: t(ui.nav.home, lang) },
    { href: `/${lang}/services/`, label: t(ui.nav.services, lang) },
    { href: `/${lang}/about/`, label: t(ui.nav.about, lang) },
    { href: `/${lang}/business-setup/`, label: t(ui.nav.business, lang) },
    { href: `/${lang}/local-support/`, label: t(ui.nav.local, lang) },
    { href: `/${lang}/contact/`, label: t(ui.nav.contact, lang) },
  ];

  const openMega = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setMegaOpen(true);
  };

  const scheduleCloseMega = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setMegaOpen(false);
    }, 180);
  };

  return (
    <header className="site-header-wrap">
      <div className="site-header">
        <Link
          className="brand"
          href={`/${lang}/`}
          aria-label="Al Mizan home"
        >
          <span className="brand-mark">
            <Image
              src="/images/logo.jpg"
              alt="Al Mizan"
              width={58}
              height={58}
              priority
            />
          </span>

          <span className="brand-copy">
            <strong>AL MIZAN</strong>

            <small>
              {lang === 'ar'
                ? 'للطباعة وإنجاز المعاملات'
                : lang === 'ur'
                  ? 'ٹائپنگ اور ڈاکیومنٹس کلیئرنگ'
                  : 'Typing & Documents Clearing'}
            </small>
          </span>
        </Link>

        <nav
          className="desktop-nav"
          aria-label="Primary navigation"
        >
          <Link href={`/${lang}/`}>
            {t(ui.nav.home, lang)}
          </Link>

          <div
            className={`mega-trigger ${megaOpen ? 'is-open' : ''}`}
            onMouseEnter={openMega}
            onMouseLeave={scheduleCloseMega}
            onFocus={openMega}
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(
                  event.relatedTarget as Node | null
                )
              ) {
                scheduleCloseMega();
              }
            }}
          >
            <Link
              href={`/${lang}/services/`}
              className="mega-link"
              aria-expanded={megaOpen}
            >
              {t(ui.nav.services, lang)}

              <Icon
                name="chevron"
                size={13}
              />
            </Link>

            <div
              className="mega-panel"
              aria-hidden={!megaOpen}
              onMouseEnter={openMega}
              onMouseLeave={scheduleCloseMega}
            >
              <div className="mega-intro">
                <span className="eyebrow">
                  <Icon
                    name="sparkle"
                    size={15}
                  />

                  {t(ui.common.browse, lang)}
                </span>

                <h3>
                  {lang === 'en'
                    ? 'Everything you need, organised in one place.'
                    : lang === 'ar'
                      ? 'كل ما تحتاجه، منظم في مكان واحد.'
                      : 'آپ کی تمام ضروری خدمات، ایک ہی جگہ منظم انداز میں۔'}
                </h3>

                <p>
                  {lang === 'en'
                    ? 'Government applications, visas, business setup and everyday document services.'
                    : lang === 'ar'
                      ? 'طلبات حكومية وتأشيرات وتأسيس أعمال وخدمات مستندية يومية.'
                      : 'سرکاری درخواستیں، ویزا، بزنس سیٹ اپ اور روزمرہ دستاویزی خدمات۔'}
                </p>

                <Link
                  className="text-link"
                  href={`/${lang}/services/`}
                >
                  {t(ui.common.viewAll, lang)}

                  <Icon
                    name="arrow"
                    size={16}
                  />
                </Link>
              </div>

              <div className="mega-grid">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={categoryHref(lang, category.slug)}
                    className="mega-item"
                  >
                    <span
                      className={`service-icon tone-${category.accent}`}
                    >
                      <Icon
                        name={category.icon}
                        size={19}
                      />
                    </span>

                    <span>
                      <strong>
                        {t(category.shortTitle, lang)}
                      </strong>

                      <small>
                        {category.services.length}{' '}
                        {lang === 'ar'
                          ? 'خدمات'
                          : lang === 'ur'
                            ? 'خدمات'
                            : 'services'}
                      </small>
                    </span>
                  </Link>
                ))}
              </div>

              <Link
                href={`/${lang}/contact/`}
                className="mega-feature"
              >
                <Image
                  src="/images/unique/site/mega-office.webp"
                  alt="Al Mizan office"
                  fill
                  sizes="260px"
                />

                <span className="mega-feature-overlay" />

                <span className="mega-feature-copy">
                  <small>
                    {t(ui.common.office, lang)}
                  </small>

                  <strong>
                    {t(ui.common.getHelp, lang)}
                  </strong>

                  <span>
                    {business.phoneDisplay}
                  </span>
                </span>
              </Link>
            </div>
          </div>

          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />

          <LanguageSwitch lang={lang} />

          <a
            className="button button-whatsapp header-whatsapp"
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              name="whatsapp"
              size={20}
            />

            <span>
              {lang === 'ar'
                ? 'واتساب'
                : 'WhatsApp'}
            </span>
          </a>

          <button
            className="icon-button mobile-menu-button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>

      <div
        className={`mobile-drawer ${
          mobileOpen ? 'is-open' : ''
        }`}
        aria-hidden={!mobileOpen}
      >
        <button
          className="drawer-backdrop"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />

        <aside className="drawer-panel">

          <div className="drawer-top">
  <span></span>

  <button
    className="icon-button"
    onClick={() => setMobileOpen(false)}
    aria-label="Close menu"
  >
    <Icon name="close" />
  </button>
</div>

          <div className="drawer-links">
            {mobileNav.map((item) => (
              <Link
                key={item.href}
                onClick={() => setMobileOpen(false)}
                href={item.href}
              >
                <span>
                  {item.label}
                </span>

                <Icon
                  name="arrow"
                  size={16}
                />
              </Link>
            ))}
          </div>

          <div className="drawer-services-head">
            <span className="drawer-section-label">
              {t(ui.common.browse, lang)}
            </span>

            <Link
              href={`/${lang}/services/`}
              onClick={() => setMobileOpen(false)}
            >
              {t(ui.common.viewAll, lang)}

              <Icon
                name="arrow"
                size={14}
              />
            </Link>
          </div>

          <div className="drawer-services">
            {categories.map((category) => (
              <Link
                key={category.slug}
                onClick={() => setMobileOpen(false)}
                href={categoryHref(
                  lang,
                  category.slug
                )}
              >
                <span
                  className={`service-icon tone-${category.accent}`}
                >
                  <Icon
                    name={category.icon}
                    size={18}
                  />
                </span>

                <span>
                  {t(category.shortTitle, lang)}
                </span>

                <Icon
                  name="arrow"
                  size={14}
                />
              </Link>
            ))}
          </div>

          <a
            className="button button-primary drawer-cta"
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              name="whatsapp"
              size={20}
            />

            {t(ui.common.whatsapp, lang)}
          </a>
        </aside>
      </div>
    </header>
  );
}