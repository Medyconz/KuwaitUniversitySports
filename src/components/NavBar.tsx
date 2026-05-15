'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { alternateLocale, localeMeta, localizedPath, navItems, t, type Locale } from '@/i18n';

export function NavBar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || `/${locale}/`;
  const other = alternateLocale(locale);
  const section = pathname.split('/').filter(Boolean)[1] || '';
  const otherHref = localizedPath(other, section);

  return (
    <header className="sticky top-0 z-40 border-b border-ku-line/80 bg-[oklch(0.995_0.006_245_/_0.92)] backdrop-blur">
      <nav className="container-shell flex min-h-16 items-center justify-between gap-4 py-3" aria-label="Main navigation">
        <Link href={localizedPath(locale)} className="flex items-center gap-3 font-bold text-ku-blue">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-ku-blue text-sm text-white">KU</span>
          <span className="max-w-[14rem] leading-tight">{t[locale].brand}</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.key} href={localizedPath(locale, item.href)} className="rounded-md px-3 py-2 text-sm font-semibold text-ku-ink/80 hover:bg-ku-blue/8 hover:text-ku-blue">
              {t[locale].nav[item.key]}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link href={otherHref} className="rounded-md border border-ku-line px-3 py-2 text-sm font-bold text-ku-blue" hrefLang={other} lang={other} dir={localeMeta[other].dir}>
            {localeMeta[locale].other}
          </Link>
          <button className="rounded-md border border-ku-line p-2 lg:hidden" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="container-shell grid gap-1 pb-4 lg:hidden">
          {navItems.map((item) => (
            <Link key={item.key} href={localizedPath(locale, item.href)} className="rounded-md px-3 py-3 font-semibold hover:bg-ku-blue/8" onClick={() => setOpen(false)}>
              {t[locale].nav[item.key]}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
