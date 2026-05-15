# Kuwait University Sports Website

Modern bilingual website for Kuwait University Sports Activities Administration / إدارة الأنشطة الرياضية بجامعة الكويت.

## Editing content

Most site content lives in `src/data/*.json`:

- `events.json`: events, registration links, guest policy, calendar fields, surveys, QR/NFC links.
- `facilities.json`: campuses, facility status, notices, booking links, maps, photos.
- `announcements.json`: urgent and pinned notices, news, facility updates, results.
- `files.json`: downloadable forms and document metadata.
- `coordinators.json`: staff/coordinator contact cards.
- `media.json`: Afaq newspaper, videos, and gallery items.
- `faqs.json`: bilingual FAQ entries.

Replace sample Microsoft Forms, SharePoint, WhatsApp, PDF, map, and YouTube links with official links when available. Public imagery is referenced by URL and can be replaced with files in `public/images` later.

## Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## GitHub Pages deployment

The site is configured for static export with the repository base path `/KuwaitUniversitySports`. The workflow in `.github/workflows/deploy.yml` publishes the generated `out/` folder to GitHub Pages whenever `main` is updated.

## Important routes

- `/` and `/en/`: English homepage
- `/ar/`: Arabic RTL homepage
- `/en/events/`, `/ar/events/`
- `/en/calendar/`, `/ar/calendar/`
- `/en/facilities/`, `/ar/facilities/`
- `/en/book-facility/`, `/ar/book-facility/`
- `/en/files/`, `/ar/files/`
- `/en/about/`, `/ar/about/`
- `/en/team/`, `/ar/team/`
- `/en/news/`, `/ar/news/`
- `/en/media/`, `/ar/media/`
- `/en/faq/`, `/ar/faq/`

## Official references

Initial public wording and naming are aligned with Kuwait University and Deanship of Student Affairs references, including the Sports Activities Administration page: https://dsa.ku.edu.kw/departments/sports-activities-administration
