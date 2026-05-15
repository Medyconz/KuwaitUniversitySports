import { CalendarPlus, Download, ExternalLink, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { formatDate, makeIcsHref, text, type AnnouncementItem, type CoordinatorItem, type EventItem, type FacilityItem, type FileItem, type MediaItem } from '@/lib/content';
import { t, type Locale } from '@/i18n';
import { LogoMark } from '@/components/LogoMark';

function statusClass(status: string) {
  if (['open', 'available'].includes(status)) return 'bg-emerald-50 text-emerald-800 border-emerald-200';
  if (['closed', 'suspended', 'not-available'].includes(status)) return 'bg-red-50 text-red-800 border-red-200';
  return 'bg-amber-50 text-amber-900 border-amber-200';
}

export function EventCard({ event, locale }: { event: EventItem; locale: Locale }) {
  const isOpen = event.status === 'open';
  return (
    <article className="surface grid gap-4 p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`badge ${statusClass(event.status)}`}>{isOpen ? t[locale].labels.open : t[locale].labels.closed}</span>
        {event.guestAllowed ? <span className="badge bg-ku-gold/10 text-ku-blue">{t[locale].labels.guest}</span> : null}
      </div>
      <div>
        <h3 className="text-xl font-bold text-ku-blue">{text(event.title, locale)}</h3>
        <p className="mt-2 text-sm leading-6 text-ku-ink/72">{text(event.excerpt, locale)}</p>
      </div>
      <dl className="grid gap-2 text-sm text-ku-ink/78">
        <div><dt className="font-bold">{formatDate(event.date, locale)}</dt><dd>{event.startTime} - {event.endTime}</dd></div>
        <div><dt className="font-bold">{text(event.campus, locale)}</dt><dd>{text(event.location, locale)} · {text(event.gender, locale)}</dd></div>
        <div><dt className="font-bold">{text(event.coordinator, locale)}</dt><dd>{text(event.category, locale)}</dd></div>
      </dl>
      <div className="flex flex-wrap gap-2">
        <a className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold ${isOpen ? 'bg-ku-blue text-white' : 'bg-ku-line text-ku-ink/70'}`} href={event.registrationUrl} aria-disabled={!isOpen}>{t[locale].cta.register}<ExternalLink size={16} /></a>
        <a className="inline-flex items-center gap-2 rounded-md border border-ku-line px-4 py-2 text-sm font-bold" href={makeIcsHref(event, locale)} download={`${event.id}.ics`}><CalendarPlus size={16} />{t[locale].cta.calendar}</a>
      </div>
    </article>
  );
}

export function FacilityCard({ facility, locale }: { facility: FacilityItem; locale: Locale }) {
  return (
    <article className="surface overflow-hidden">
      <div className="grid h-44 place-items-center bg-white p-5"><LogoMark className="h-full max-h-36 w-full" title={text(facility.name, locale)} /></div>
      <div className="grid gap-4 p-5">
        <span className={`badge w-fit ${statusClass(facility.status)}`}>{text(facility.statusLabel, locale)}</span>
        <div><h3 className="text-xl font-bold text-ku-blue">{text(facility.name, locale)}</h3><p className="mt-2 text-sm leading-6 text-ku-ink/72">{text(facility.notice, locale)}</p></div>
        <ul className="grid gap-2 text-sm text-ku-ink/78">{facility.facilities.map((item) => <li key={item.en}>• {text(item, locale)}</li>)}</ul>
        <div className="flex flex-wrap gap-2">
          <a className="inline-flex items-center gap-2 rounded-md bg-ku-blue px-4 py-2 text-sm font-bold text-white" href={facility.bookingUrl}>{t[locale].cta.book}<ExternalLink size={16} /></a>
          <a className="inline-flex items-center gap-2 rounded-md border border-ku-line px-4 py-2 text-sm font-bold" href={facility.mapUrl}><MapPin size={16} />{t[locale].cta.directions}</a>
        </div>
      </div>
    </article>
  );
}

export function AnnouncementCard({ item, locale }: { item: AnnouncementItem; locale: Locale }) {
  return (
    <article className="surface grid gap-3 p-5">
      <div className="flex flex-wrap items-center gap-2"><span className="badge bg-ku-blue/8 text-ku-blue">{text(item.category, locale)}</span>{item.urgent ? <span className="badge bg-red-50 text-red-800">{t[locale].labels.urgent}</span> : null}</div>
      <h3 className="text-xl font-bold text-ku-blue">{text(item.title, locale)}</h3>
      <p className="text-sm font-semibold text-ku-ink/60">{formatDate(item.date, locale)}</p>
      <p className="text-sm leading-6 text-ku-ink/72">{text(item.excerpt, locale)}</p>
    </article>
  );
}

export function FileDownloadCard({ item, locale }: { item: FileItem; locale: Locale }) {
  return (
    <article className="surface grid gap-3 p-5">
      <div className="flex flex-wrap gap-2"><span className="badge bg-ku-blue/8 text-ku-blue">{text(item.category, locale)}</span><span className="badge">{item.language}</span></div>
      <h3 className="text-lg font-bold text-ku-blue">{text(item.title, locale)}</h3>
      <p className="text-sm leading-6 text-ku-ink/72">{text(item.description, locale)}</p>
      <a className="inline-flex w-fit items-center gap-2 rounded-md bg-ku-blue px-4 py-2 text-sm font-bold text-white" href={item.url}><Download size={16} />{t[locale].cta.download}</a>
    </article>
  );
}

export function CoordinatorCard({ item, locale }: { item: CoordinatorItem; locale: Locale }) {
  return (
    <article className="surface grid gap-3 p-5">
      <h3 className="text-xl font-bold text-ku-blue">{text(item.name, locale)}</h3>
      <p className="font-semibold text-ku-ink/75">{text(item.role, locale)}</p>
      <p className="text-sm leading-6 text-ku-ink/72">{text(item.campus, locale)} · {text(item.sports, locale)}</p>
      <a className="inline-flex w-fit items-center gap-2 rounded-md border border-ku-line px-4 py-2 text-sm font-bold" href={item.whatsappUrl}><MessageCircle size={16} />WhatsApp</a>
    </article>
  );
}

export function MediaCard({ item, locale }: { item: MediaItem; locale: Locale }) {
  return (
    <article className="surface overflow-hidden">
      <div className="grid h-44 place-items-center bg-white p-5"><LogoMark className="h-full max-h-36 w-full" title={text(item.title, locale)} /></div>
      <div className="grid gap-3 p-5"><span className="badge w-fit bg-ku-gold/10 text-ku-blue">{item.year}</span><h3 className="text-xl font-bold text-ku-blue">{text(item.title, locale)}</h3><p className="text-sm leading-6 text-ku-ink/72">{text(item.description, locale)}</p><Link className="font-bold text-ku-blue" href={item.url}>{t[locale].cta.details}</Link></div>
    </article>
  );
}
