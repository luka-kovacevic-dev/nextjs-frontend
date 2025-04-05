import { Metadata } from 'next';

import { DashedLine } from '@/components/dashed-line';
import CreamContainer from '@/components/layout/cream-container';
import About from '@/components/sections/about';
import { AboutHero } from '@/components/sections/about-hero';
import { Investors } from '@/components/sections/investors';
import { BreadcrumbProvider } from '@/components/ui/breadcrumb';
import {
  generateMetadata,
  getAboutPageSchema,
  getOrganizationSchema,
} from '@/lib/utils/metadata';

export const metadata: Metadata = generateMetadata({
  path: '/about',
  title: 'About Us | Mainline',
  description: 'Learn about our mission, team, and the story behind Mainline.',
});

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <BreadcrumbProvider items={breadcrumbItems}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              getOrganizationSchema(),
              getAboutPageSchema(
                '/about',
                'About Us | Mainline',
                'Learn about our mission, team, and the story behind Mainline.',
                breadcrumbItems,
              ),
            ],
          }),
        }}
      />
      <CreamContainer>
        <div className="py-28 lg:py-32 lg:pt-44">
          <AboutHero />
          <About />
          <div className="pt-28 lg:pt-32">
            <DashedLine className="container max-w-5xl scale-x-115" />
            <Investors />
          </div>
        </div>
      </CreamContainer>
    </BreadcrumbProvider>
  );
}
