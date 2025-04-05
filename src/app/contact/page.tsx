import React from 'react';

import { Metadata } from 'next';

import CreamContainer from '@/components/layout/cream-container';
import Contact from '@/components/sections/contact';
import {
  generateMetadata,
  getOrganizationSchema,
  getWebPageSchema,
} from '@/lib/utils/metadata';

export const metadata: Metadata = generateMetadata({
  path: '/contact',
  title: 'Contact Us | Mainline',
  description: 'Get in touch with our team for support or inquiries.',
});

const Page = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
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
              getWebPageSchema(
                '/contact',
                'Contact Us | Mainline',
                'Get in touch with our team for support or inquiries.',
                breadcrumbItems,
              ),
            ],
          }),
        }}
      />
      <CreamContainer>
        <Contact />
      </CreamContainer>
    </>
  );
};

export default Page;
