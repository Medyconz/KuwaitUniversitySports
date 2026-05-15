import { ArrowRight, Bell, Building2, CalendarDays, Download, MapPin, Trophy } from 'lucide-react';
import Link from 'next/link';
import { content, text } from '@/lib/content';
import { localizedPath, t, type Locale } from '@/i18n';

export function AlertBanner({ locale }: { locale: Locale }) {
  const urgent = content.announcements.find((item) => item.urgent);
  if (!urgent) return null;
  return <div className="bg-ku-blue text-white"><div className="container-shell flex items-center gap-3 py-3 text-sm"><Bell size={18} /><strong>{t[locale].labels.urgent}:</strong><span>{text(urgent.title, locale)}</span></div></div>;
}

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-hidden bg-ku-blue text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="container-shell relative grid gap-8 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-28">
        <div className="max-w-3xl"><p className="mb-4 font-bold text-ku-gold">{t[locale].formalBrand}</p><h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{locale === 'ar' ? 'بوابة الرياضة الجامعية في جامعة الكويت' : 'Kuwait University Sports, rebuilt for fast access.'}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/84">{locale === 'ar' ? 'التسجيل، المرافق، النماذج، الأخبار، والتواصل مع المنسقين في تجربة رسمية وسريعة تدعم الهاتف أولاً.' : 'Events, facility booking, forms, announcements, calendars, and coordinator contacts in one official mobile-first hub.'}</p><div className="mt-8 flex flex-wrap gap-3"><Link className="rounded-md bg-ku-gold px-5 py-3 font-bold text-ku-blue" href={localizedPath(locale, 'events')}>{t[locale].cta.events}</Link><Link className="rounded-md border border-white/30 px-5 py-3 font-bold" href={localizedPath(locale, 'book-facility')}>{t[locale].cta.book}</Link><Link className="rounded-md border border-white/30 px-5 py-3 font-bold" href={localizedPath(locale, 'files')}>{t[locale].cta.files}</Link></div></div>
        <div className="surface bg-white/95 p-5 text-ku-ink"><h2 className="text-xl font-bold text-ku-blue">{t[locale].labels.upcoming}</h2><div className="mt-4 grid gap-3">{content.events.slice(0, 3).map((event) => <Link key={event.id} className="rounded-md border border-ku-line p-3 hover:border-ku-gold" href={localizedPath(locale, 'events')}><strong className="block text-ku-blue">{text(event.title, locale)}</strong><span className="text-sm text-ku-ink/68">{event.date} · {text(event.campus, locale)}</span></Link>)}</div></div>
      </div>
    </section>
  );
}

export function QuickActions({ locale }: { locale: Locale }) {
  const actions = [
    { icon: Trophy, title: t[locale].cta.events, href: 'events' },
    { icon: Building2, title: t[locale].cta.book, href: 'book-facility' },
    { icon: Download, title: t[locale].cta.files, href: 'files' },
    { icon: MapPin, title: t[locale].nav.facilities, href: 'facilities' },
    { icon: CalendarDays, title: t[locale].nav.calendar, href: 'calendar' },
  ];
  return <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{actions.map((action) => <Link key={action.href} href={localizedPath(locale, action.href)} className="surface flex items-center justify-between gap-4 p-4 font-bold text-ku-blue"><span className="flex items-center gap-3"><action.icon size={20} />{action.title}</span><ArrowRight size={16} /></Link>)}</div>;
}

export function Footer({ locale }: { locale: Locale }) {
  return <footer className="border-t border-ku-line bg-ku-blue text-white"><div className="container-shell grid gap-8 py-10 md:grid-cols-[1fr_1fr]"><div><h2 className="text-2xl font-black">{t[locale].brand}</h2><p className="mt-3 max-w-xl text-white/76">{t[locale].footer.location}</p><p className="mt-2 text-white/76">sports@ku.edu.kw · WhatsApp: +965 0000 0000</p></div><div className="grid grid-cols-2 gap-2 text-sm font-semibold md:justify-self-end">{['events','book-facility','files','facilities','team','faq'].map((href) => <Link key={href} href={localizedPath(locale, href)}>{href.replace('-', ' ')}</Link>)}</div></div></footer>;
}

export function SectionHeading({ eyebrow, title, body }: { eyebrow?: string; title: string; body?: string }) {
  return <div className="mb-8 max-w-3xl"><p className="mb-3 font-bold text-ku-gold">{eyebrow}</p><h2 className="text-3xl font-black leading-tight text-ku-blue sm:text-4xl">{title}</h2>{body ? <p className="mt-4 text-lg leading-8 text-ku-ink/72">{body}</p> : null}</div>;
}
