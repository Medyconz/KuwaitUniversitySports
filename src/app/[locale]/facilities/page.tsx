import { FacilityCard } from '@/components/Cards';
import { SectionHeading } from '@/components/LayoutParts';
import { content } from '@/lib/content';
import type { Locale } from '@/i18n';

export default function FacilitiesPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  return <section className="container-shell section-pad"><SectionHeading title={locale === 'ar' ? 'المرافق والمنشآت الرياضية' : 'Facilities & Locations'} body={locale === 'ar' ? 'حالات المرافق والتنبيهات وروابط الحجز والاتجاهات في مكان واحد.' : 'Facility status, notices, booking links, and directions in one place.'} /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{content.facilities.map((facility) => <FacilityCard key={facility.id} facility={facility} locale={locale} />)}</div></section>;
}
