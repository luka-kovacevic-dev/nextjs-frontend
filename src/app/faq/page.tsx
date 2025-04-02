import React from 'react';

import { Metadata } from 'next';

import { DashedLine } from '@/components/dashed-line';
import CreamContainer from '@/components/layout/cream-container';
import { FAQ } from '@/components/sections/faq';
import { Testimonials } from '@/components/sections/testimonials';
import {
  generateMetadata,
  getBreadcrumbSchema,
  getFAQPageSchema,
  getOrganizationSchema,
} from '@/lib/utils/metadata';

// This would typically come from your CMS or API
const faqData = [
  {
    question: 'What is Mainline?',
    answer:
      'Mainline is a modern Next.js template built with Shadcn/UI, TailwindCSS and TypeScript.',
  },
  {
    question: 'How do I get started?',
    answer:
      'You can get started by cloning the repository and following our documentation.',
  },
  // Add more FAQ items as needed
];

export const metadata: Metadata = generateMetadata({
  path: '/faq',
  title: 'FAQ | Mainline',
  description: 'Frequently asked questions about Mainline and our services.',
});

const Page = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              getOrganizationSchema(),
              getFAQPageSchema(faqData),
              getBreadcrumbSchema(breadcrumbItems),
            ],
          }),
        }}
      />
      <CreamContainer>
        {/* Breadcrumb is now included in the layout */}
        <FAQ
          className="py-28 text-center lg:pt-44 lg:pb-32"
          className2="max-w-xl lg:grid-cols-1"
          headerTag="h1"
        />
        <DashedLine className="mx-auto max-w-xl" />
        <Testimonials dashedLineClassName="hidden" />
      </CreamContainer>
    </>
  );
};

export default Page;
