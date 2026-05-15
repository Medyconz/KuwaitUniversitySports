import { MediaCard } from '@/components/Cards';
import { SectionHeading } from '@/components/LayoutParts';
import { content } from '@/lib/content';
import type { Locale } from '@/i18n';

export default function MediaPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  return <section className="container-shell section-pad"><SectionHeading title={locale === 'ar' ? 'جريدة آفاق والأرشيف الرياضي' : 'Afaq Newspaper & Media Archive'} body={locale === 'ar' ? 'صور الفعاليات السابقة، صفحات آفاق الرياضية، ومقاطع الفيديو.' : 'Past event photos, Afaq sports coverage, and video highlights.'} /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{content.media.map((item) => <MediaCard key={item.id} item={item} locale={locale} />)}</div></section>;
}
