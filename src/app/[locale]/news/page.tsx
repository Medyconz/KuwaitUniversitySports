import { AnnouncementCard } from '@/components/Cards';
import { SectionHeading } from '@/components/LayoutParts';
import { content } from '@/lib/content';
import type { Locale } from '@/i18n';

export default function NewsPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  return <section className="container-shell section-pad"><SectionHeading title={locale === 'ar' ? 'الأخبار والتنبيهات' : 'News & Announcements'} body={locale === 'ar' ? 'تنبيهات مهمة، تحديثات المرافق، النتائج، وأخبار عامة.' : 'Important notices, facility updates, results, and general news.'} /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{content.announcements.map((item) => <AnnouncementCard key={item.id} item={item} locale={locale} />)}</div></section>;
}
