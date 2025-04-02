import React from 'react';

import { Metadata } from 'next';

import CreamContainer from '@/components/layout/cream-container';
import { Pricing } from '@/components/sections/pricing';
import Pricing2 from '@/components/sections/pricing2';
import {
  generateMetadata,
  getBreadcrumbSchema,
  getOrganizationSchema,
  getProductSchema,
} from '@/lib/utils/metadata';

// This would typically come from your CMS or API
const pricingData = {
  name: 'Mainline Subscription',
  description: 'Access to all Mainline features and templates',
  prices: [
    { amount: '0', currency: 'USD' }, // Free tier
    { amount: '29', currency: 'USD' }, // Pro tier
    { amount: '99', currency: 'USD' }, // Enterprise tier
  ],
};

export const metadata: Metadata = generateMetadata({
  path: '/pricing',
  title: 'Pricing | Mainline',
  description: 'Simple, transparent pricing for teams of all sizes.',
});

const Page = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
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
              getProductSchema(
                pricingData.name,
                pricingData.description,
                pricingData.prices,
              ),
              getBreadcrumbSchema(breadcrumbItems),
            ],
          }),
        }}
      />
      <CreamContainer>
        {/* Breadcrumb is now included in the layout */}
        <Pricing className="py-28 text-center lg:pt-44 lg:pb-32" />
        <Pricing2 />
      </CreamContainer>
    </>
  );
};

export default Page;
