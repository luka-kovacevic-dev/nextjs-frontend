import localFont from 'next/font/local';

import type { Metadata } from 'next';

import { Footer } from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { MatomoAnalytics } from '@/components/matomo-analytics';
import { ThemeProvider } from '@/components/theme-provider';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import './globals.css';

// Set Edge runtime for Cloudflare compatibility
export const runtime = 'edge';

const jSans = localFont({
  src: [
    {
      path: '../../fonts/jsans/jsans-medium-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/jsans/jsans-bold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/jsans/jsans-black-webfont.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-jsans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Mainline - Modern Next.js Template',
    template: '%s | Mainline',
  },
  description:
    'A modern, fully featured Next.js template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.',
  metadataBase: new URL('https://domain.com'),
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Template',
    'Shadcn/UI',
    'Web Development',
  ],
  authors: [{ name: 'Mainline Team' }],
  creator: 'Mainline Team',
  publisher: 'Mainline',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'Mainline - Modern Next.js Template',
    description:
      'A modern, fully featured Next.js template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.',
    siteName: 'Mainline',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mainline - Modern Next.js Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mainline - Modern Next.js Template',
    description:
      'A modern, fully featured Next.js template built with Shadcn/UI, TailwindCSS and TypeScript, perfect for your next web application.',
    images: ['/og-image.jpg'],
    creator: '@mainline',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`h-screen ${jSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MatomoAnalytics />
          <Navbar />
          <main>
            <Breadcrumb />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
