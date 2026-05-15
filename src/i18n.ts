export type Locale = 'en' | 'ar';

export const locales: Locale[] = ['en', 'ar'];

export const localeMeta = {
  en: { dir: 'ltr', label: 'English', other: 'العربية', home: '/en/' },
  ar: { dir: 'rtl', label: 'العربية', other: 'English', home: '/ar/' },
} as const;

export const navItems = [
  { key: 'home', href: '' },
  { key: 'events', href: 'events' },
  { key: 'calendar', href: 'calendar' },
  { key: 'facilities', href: 'facilities' },
  { key: 'book', href: 'book-facility' },
  { key: 'files', href: 'files' },
  { key: 'about', href: 'about' },
  { key: 'team', href: 'team' },
  { key: 'news', href: 'news' },
  { key: 'media', href: 'media' },
  { key: 'faq', href: 'faq' },
] as const;

export const t = {
  en: {
    brand: 'Kuwait University Sports',
    formalBrand: 'Kuwait University Sports Activities Administration',
    nav: { home: 'Home', events: 'Events & Signup', calendar: 'Calendar', facilities: 'Facilities', book: 'Book Facility', files: 'PDF & Files', about: 'About', team: 'Team', news: 'News', media: 'Afaq & Media', faq: 'FAQ' },
    cta: { events: 'See Events & Signup', book: 'Book Facility', files: 'Download Forms', details: 'View details', register: 'Register Now', calendar: 'Add to Calendar', directions: 'Directions', download: 'Download', contact: 'Contact' },
    labels: { upcoming: 'Upcoming events', closed: 'Closed', open: 'Open', urgent: 'Important update', featured: 'Featured', guest: '+1 guest allowed when rules permit', status: 'Status', search: 'Search', category: 'Category', all: 'All', campus: 'Campus', gender: 'Gender' },
    footer: { location: 'Shadadiya Administrative Building, 4th floor', edit: 'Content is editable from JSON files in the repository.' },
  },
  ar: {
    brand: 'إدارة الأنشطة الرياضية',
    formalBrand: 'إدارة الأنشطة الرياضية بجامعة الكويت',
    nav: { home: 'الصفحة الرئيسية', events: 'سجل الآن', calendar: 'التقويم', facilities: 'المرافق والمنشآت الرياضية', book: 'حجز المرافق الرياضية', files: 'النماذج والاستمارات', about: 'نبذة عن الإدارة', team: 'المنسقون', news: 'الأخبار', media: 'جريدة آفاق والأرشيف', faq: 'الأسئلة الشائعة' },
    cta: { events: 'عرض الفعاليات والتسجيل', book: 'حجز المرافق', files: 'تحميل النماذج', details: 'عرض التفاصيل', register: 'سجل الآن', calendar: 'إضافة للتقويم', directions: 'الاتجاهات', download: 'تحميل', contact: 'تواصل' },
    labels: { upcoming: 'الفعاليات القادمة', closed: 'مغلق', open: 'متاح', urgent: 'تنبيه مهم', featured: 'مميز', guest: 'يسمح بمرافق واحد عند سماح قواعد الفعالية', status: 'الحالة', search: 'بحث', category: 'الفئة', all: 'الكل', campus: 'الحرم الجامعي', gender: 'الفئة' },
    footer: { location: 'المبنى الإداري في الشدادية، الدور الرابع', edit: 'يمكن تعديل المحتوى من ملفات JSON داخل المستودع.' },
  },
} as const;

export function localizedPath(locale: Locale, path = '') {
  const clean = path.replace(/^\//, '').replace(/\/$/, '');
  return `/${locale}/${clean ? `${clean}/` : ''}`;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'ar' : 'en';
}
