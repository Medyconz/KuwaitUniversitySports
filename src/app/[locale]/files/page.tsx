import { FileFilterList } from '@/components/ClientFilters';
import { SectionHeading } from '@/components/LayoutParts';
import { content } from '@/lib/content';
import type { Locale } from '@/i18n';

export default function FilesPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  return <section className="container-shell section-pad"><SectionHeading title={locale === 'ar' ? 'النماذج والاستمارات' : 'PDF & Files'} body={locale === 'ar' ? 'مركز واحد للنماذج، اللوائح، متطلبات الفحص الطبي، وأدلة الفعاليات.' : 'One hub for forms, waivers, rules, medical check requirements, and event guides.'} /><FileFilterList files={content.files} locale={locale} /></section>;
}
