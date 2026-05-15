import { CoordinatorCard } from '@/components/Cards';
import { SectionHeading } from '@/components/LayoutParts';
import { content } from '@/lib/content';
import type { Locale } from '@/i18n';

export default function TeamPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  return <section className="container-shell section-pad"><SectionHeading title={locale === 'ar' ? 'المنسقون والفريق' : 'Team & Coordinators'} body={locale === 'ar' ? 'اختر المنسق الرياضي المناسب ثم اضغط أيقونة التواصل أسفل الاسم.' : 'Choose the relevant sports coordinator, then use the social or WhatsApp icon under their name.'} /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{content.coordinators.map((item) => <CoordinatorCard key={item.id} item={item} locale={locale} />)}</div></section>;
}
