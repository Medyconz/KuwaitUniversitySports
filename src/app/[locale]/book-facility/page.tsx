import { FacilityCard } from '@/components/Cards';
import { SectionHeading } from '@/components/LayoutParts';
import { content } from '@/lib/content';
import type { Locale } from '@/i18n';

export default function BookFacilityPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  return <section className="container-shell section-pad"><SectionHeading title={locale === 'ar' ? 'حجز المرافق الرياضية' : 'Book Facility'} body={locale === 'ar' ? 'راجع حالة الحجز أولاً، ثم استخدم النموذج الرسمي للمرفق المطلوب.' : 'Check booking status first, then use the official request form for the selected facility.'} /><div className="surface mb-8 border-amber-200 bg-amber-50 p-5 text-amber-950"><strong>{locale === 'ar' ? 'تنبيه الحجز:' : 'Booking notice:'}</strong> {locale === 'ar' ? 'روابط الحجز الحالية تجريبية ويجب استبدالها بروابط Microsoft Forms الرسمية.' : 'Current booking links are sample placeholders and should be replaced with official Microsoft Forms links.'}</div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{content.facilities.map((facility) => <FacilityCard key={facility.id} facility={facility} locale={locale} />)}</div></section>;
}
