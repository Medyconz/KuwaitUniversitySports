import { EventFilterList } from '@/components/ClientFilters';
import { SectionHeading } from '@/components/LayoutParts';
import { content } from '@/lib/content';
import type { Locale } from '@/i18n';

export default function EventsPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  return <section className="container-shell section-pad"><SectionHeading title={locale === 'ar' ? 'الفعاليات والتسجيل' : 'Events & Signup'} body={locale === 'ar' ? 'التسجيل يتم من خلال Microsoft Forms. عند السماح بمرافق واحد، يتم رفع الهوية المدنية أو جواز السفر من خلال النموذج الرسمي.' : 'Registration happens through Microsoft Forms. When +1 guest access is allowed, Civil ID or passport upload is handled inside the official form.'} /><EventFilterList events={content.events} locale={locale} /></section>;
}
