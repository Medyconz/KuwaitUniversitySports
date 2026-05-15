import type { Metadata, Viewport } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: 'Kuwait University Sports',
  description: 'Official bilingual hub for Kuwait University sports activities, facilities, forms, and announcements.',
  manifest: `${basePath}/manifest.webmanifest`,
  appleWebApp: {
    capable: true,
    title: 'KU Sports',
    statusBarStyle: 'default',
  },
};

export const viewport: Viewport = {
  themeColor: '#0b2a55',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
