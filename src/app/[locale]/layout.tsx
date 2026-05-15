import { notFound } from 'next/navigation';
import { AlertBanner, Footer } from '@/components/LayoutParts';
import { NavBar } from '@/components/NavBar';
import { localeMeta, locales, type Locale } from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: Locale } }) {
  if (!locales.includes(params.locale)) notFound();
  return <div lang={params.locale} dir={localeMeta[params.locale].dir}><AlertBanner locale={params.locale} /><NavBar locale={params.locale} /><main>{children}</main><Footer locale={params.locale} /></div>;
}
