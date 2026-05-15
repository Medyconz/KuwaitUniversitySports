'use client';

import { useMemo, useState } from 'react';
import { EventCard, FileDownloadCard } from '@/components/Cards';
import { text, type EventItem, type FileItem } from '@/lib/content';
import { t, type Locale } from '@/i18n';

export function EventFilterList({ events, locale }: { events: EventItem[]; locale: Locale }) {
  const [query, setQuery] = useState('');
  const [campus, setCampus] = useState('all');
  const campuses = useMemo(() => Array.from(new Set(events.map((event) => text(event.campus, locale)))), [events, locale]);
  const filtered = events.filter((event) => {
    const haystack = `${text(event.title, locale)} ${text(event.category, locale)} ${text(event.location, locale)}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (campus === 'all' || text(event.campus, locale) === campus);
  });
  return <div><div className="mb-6 grid gap-3 sm:grid-cols-[1fr_220px]"><input className="rounded-md border border-ku-line px-4 py-3" placeholder={t[locale].labels.search} value={query} onChange={(event) => setQuery(event.target.value)} /><select className="rounded-md border border-ku-line px-4 py-3" value={campus} onChange={(event) => setCampus(event.target.value)}><option value="all">{t[locale].labels.all}</option>{campuses.map((item) => <option key={item}>{item}</option>)}</select></div><div className="grid gap-5 md:grid-cols-2">{filtered.map((event) => <EventCard key={event.id} event={event} locale={locale} />)}</div></div>;
}

export function FileFilterList({ files, locale }: { files: FileItem[]; locale: Locale }) {
  const [query, setQuery] = useState('');
  const filtered = files.filter((file) => `${text(file.title, locale)} ${text(file.category, locale)} ${text(file.description, locale)}`.toLowerCase().includes(query.toLowerCase()));
  return <div><input className="mb-6 w-full rounded-md border border-ku-line px-4 py-3" placeholder={t[locale].labels.search} value={query} onChange={(event) => setQuery(event.target.value)} /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map((file) => <FileDownloadCard key={file.id} item={file} locale={locale} />)}</div></div>;
}
