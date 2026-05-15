import announcements from '@/data/announcements.json';
import coordinators from '@/data/coordinators.json';
import events from '@/data/events.json';
import facilities from '@/data/facilities.json';
import faqs from '@/data/faqs.json';
import files from '@/data/files.json';
import media from '@/data/media.json';
import type { Locale } from '@/i18n';

export type Localized = Record<Locale, string>;
export type EventItem = (typeof events)[number];
export type FacilityItem = (typeof facilities)[number];
export type AnnouncementItem = (typeof announcements)[number];
export type FileItem = (typeof files)[number];
export type CoordinatorItem = (typeof coordinators)[number];
export type MediaItem = (typeof media)[number];
export type FaqItem = (typeof faqs)[number];

export const content = { events, facilities, announcements, files, coordinators, media, faqs };

export function text(value: Localized, locale: Locale) {
  return value[locale] || value.en;
}

export function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-KW' : 'en-KW', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00+03:00`));
}

export function makeIcsHref(event: EventItem, locale: Locale) {
  const title = encodeURIComponent(text(event.title, locale));
  const details = encodeURIComponent(text(event.excerpt, locale));
  const date = event.date.replaceAll('-', '');
  return `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:${date}T${event.startTime.replace(':', '')}00%0ADTEND:${date}T${event.endTime.replace(':', '')}00%0ASUMMARY:${title}%0ADESCRIPTION:${details}%0ALOCATION:${encodeURIComponent(text(event.location, locale))}%0AEND:VEVENT%0AEND:VCALENDAR`;
}
