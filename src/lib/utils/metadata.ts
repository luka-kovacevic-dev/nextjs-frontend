import { Metadata } from 'next';

import { generateOGImage, validateStructuredData } from './seo';
import {
  AboutPage,
  BreadcrumbList,
  FAQPage,
  Organization,
  Product,
  WebPage,
  WebSite,
} from '../types/schema';

const DOMAIN = 'https://example.com';

export const DEFAULT_METADATA = {
  title: 'Mainline - Modern Next.js Template',
  description:
    'A modern, fully featured Next.js template built with Shadcn/UI, TailwindCSS and TypeScript.',
  url: DOMAIN,
};

export const getOrganizationSchema = (): Organization => {
  const schema: Organization = {
    '@context': 'https://schema.org' as const,
    '@type': 'Organization' as const,
    name: DEFAULT_METADATA.title,
    url: DEFAULT_METADATA.url,
    logo: `${DOMAIN}/logo.svg`,
    sameAs: [
      'https://twitter.com/example',
      'https://linkedin.com/company/example',
    ],
    description: DEFAULT_METADATA.description,
  };

  if (!validateStructuredData(schema)) {
    throw new Error('Invalid Organization schema');
  }

  return schema;
};

export const getWebSiteSchema = (): WebSite => ({
  '@context': 'https://schema.org' as const,
  '@type': 'WebSite' as const,
  name: DEFAULT_METADATA.title,
  url: DEFAULT_METADATA.url,
  description: DEFAULT_METADATA.description,
});

export const getBreadcrumbSchema = (
  items: { name: string; path: string }[],
): BreadcrumbList => ({
  '@context': 'https://schema.org' as const,
  '@type': 'BreadcrumbList' as const,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem' as const,
    position: index + 1,
    name: item.name,
    item: `${DOMAIN}${item.path}`,
  })),
});

export const getWebPageSchema = (
  path: string,
  title: string,
  description: string,
  breadcrumbItems?: { name: string; path: string }[],
): WebPage => {
  const schema: WebPage = {
    '@context': 'https://schema.org' as const,
    '@type': 'WebPage' as const,
    name: title,
    description: description,
    url: `${DOMAIN}${path}`,
    ...(breadcrumbItems && {
      breadcrumb: getBreadcrumbSchema(breadcrumbItems),
    }),
  };

  if (!validateStructuredData(schema)) {
    throw new Error('Invalid WebPage schema');
  }

  return schema;
};

export const getAboutPageSchema = (
  path: string,
  title: string,
  description: string,
  breadcrumbItems?: { name: string; path: string }[],
): AboutPage => {
  const webPage = getWebPageSchema(path, title, description, breadcrumbItems);
  const aboutPage: AboutPage = {
    ...webPage,
    '@type': 'AboutPage' as const,
  };
  return aboutPage;
};

export const getFAQPageSchema = (
  faqs: { question: string; answer: string }[],
): FAQPage => ({
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question' as const,
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer' as const,
      text: faq.answer,
    },
  })),
});

export const getProductSchema = (
  name: string,
  description: string,
  prices: { amount: string; currency: string }[],
): Product => ({
  '@context': 'https://schema.org' as const,
  '@type': 'Product' as const,
  name,
  description,
  offers: prices.map((price) => ({
    '@type': 'Offer' as const,
    price: price.amount,
    priceCurrency: price.currency,
    availability: 'https://schema.org/InStock',
  })),
});

export const generateMetadata = ({
  path,
  title,
  description,
  ogImage = '/og-image.jpg',
}: {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
}): Metadata => {
  const ogImages = generateOGImage(title, description, ogImage);

  return {
    title,
    description,
    alternates: {
      canonical: `${DOMAIN}${path}`,
    },
    openGraph: {
      title,
      description,
      url: `${DOMAIN}${path}`,
      siteName: DEFAULT_METADATA.title,
      images: ogImages,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImages.map((img) => img.url),
      creator: '@mainline',
      site: '@mainline',
    },
    robots: {
      index: !path.startsWith('/login') && !path.startsWith('/signup'),
      follow: true,
      googleBot: {
        index: !path.startsWith('/login') && !path.startsWith('/signup'),
        follow: true,
      },
    },
  };
};
