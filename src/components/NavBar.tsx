'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { localeMeta, localizedPath, navItems, t, type Locale } from '@/i18n';
import { LogoMark } from '@/components/LogoMark';

export function NavBar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || `/${locale}/`;
  const section = pathname.split('/').filter(Boolean)[1] || '';

  return (
    <header className="sticky top-0 z-40 border-b border-ku-line/80 bg-[oklch(0.995_0.006_245_/_0.92)] backdrop-blur">
      <nav className="container-shell flex min-h-16 items-center justify-between gap-4 py-3" aria-label="Main navigation">
        <Link href={localizedPath(locale)} className="flex items-center gap-3 font-bold text-ku-blue">
          <LogoMark className="h-12 w-12 rounded-md border border-ku-line bg-white object-contain p-1" />
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
          <div className="grid grid-cols-2 rounded-md border border-ku-line bg-white p-1 text-sm font-bold" aria-label="Language switcher">
            <Link href={localizedPath('en', section)} className={`rounded px-3 py-1.5 ${locale === 'en' ? 'bg-ku-blue text-white' : 'text-ku-blue'}`} hrefLang="en" lang="en" dir="ltr">EN</Link>
            <Link href={localizedPath('ar', section)} className={`rounded px-3 py-1.5 ${locale === 'ar' ? 'bg-ku-blue text-white' : 'text-ku-blue'}`} hrefLang="ar" lang="ar" dir={localeMeta.ar.dir}>عربي</Link>
          </div>
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
