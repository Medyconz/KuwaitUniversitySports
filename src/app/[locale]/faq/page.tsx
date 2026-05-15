import { SectionHeading } from '@/components/LayoutParts';
import { content, text } from '@/lib/content';
import type { Locale } from '@/i18n';

export default function FaqPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  return <section className="container-shell section-pad"><SectionHeading title={locale === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'} body={locale === 'ar' ? 'إجابات مختصرة حول التسجيل، المرافق، نظام المرافق، والتواصل.' : 'Short answers about registration, facilities, guest access, and contact.'} /><div className="grid gap-4">{content.faqs.map((faq) => <details key={faq.id} className="surface p-5"><summary className="cursor-pointer text-lg font-bold text-ku-blue">{text(faq.question, locale)}</summary><p className="mt-3 leading-7 text-ku-ink/72">{text(faq.answer, locale)}</p></details>)}</div></section>;
}
