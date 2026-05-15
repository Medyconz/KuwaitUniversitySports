import { EventCard } from '@/components/Cards';
import { SectionHeading } from '@/components/LayoutParts';
import { content } from '@/lib/content';
import type { Locale } from '@/i18n';

export default function CalendarPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const grouped = content.events.reduce<Record<string, typeof content.events>>((acc, event) => { const month = event.date.slice(0, 7); acc[month] = [...(acc[month] || []), event]; return acc; }, {});
  return <section className="container-shell section-pad"><SectionHeading title={locale === 'ar' ? 'تقويم الأنشطة' : 'Activity Calendar'} body={locale === 'ar' ? 'عرض شهري مبسط قابل للربط لاحقاً مع Microsoft 365 أو SharePoint.' : 'A static monthly view that can later connect to Microsoft 365, SharePoint, or Outlook calendar data.'} />{Object.entries(grouped).map(([month, events]) => <div key={month} className="mb-10"><h2 className="mb-4 text-2xl font-black text-ku-blue">{month}</h2><div className="grid gap-5 md:grid-cols-2">{events.map((event) => <EventCard key={event.id} event={event} locale={locale} />)}</div></div>)}</section>;
}
