import { Metadata } from 'next';

import CreamContainer from '@/components/layout/cream-container';
import { FAQ } from '@/components/sections/faq';
import { Features } from '@/components/sections/features';
import Hero from '@/components/sections/hero';
import Logos from '@/components/sections/logos';
import { Pricing } from '@/components/sections/pricing';
import { ResourceAllocation } from '@/components/sections/resource-allocation';
import { Testimonials } from '@/components/sections/testimonials';
import {
  DEFAULT_METADATA,
  generateMetadata,
  getOrganizationSchema,
  getWebSiteSchema,
} from '@/lib/utils/metadata';

export const metadata: Metadata = generateMetadata({
  path: '/',
  title: DEFAULT_METADATA.title,
  description: DEFAULT_METADATA.description,
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [getOrganizationSchema(), getWebSiteSchema()],
          }),
        }}
      />
      <CreamContainer className="via-muted to-muted/80">
        <Hero />
        <Logos />
        <Features />
        <ResourceAllocation />
      </CreamContainer>
      <Testimonials />
      <CreamContainer variant="bottom">
        <Pricing />
        <FAQ />
      </CreamContainer>
    </>
  );
}
