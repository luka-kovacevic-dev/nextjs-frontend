import Image from 'next/image';
import Link from 'next/link';

import { Metadata } from 'next';

import CreamContainer from '@/components/layout/cream-container';
import { BreadcrumbProvider } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { generateMetadata, getWebPageSchema } from '@/lib/utils/metadata';

export const metadata: Metadata = generateMetadata({
  path: '/not-found',
  title: 'Page Not Found | 404',
  description: 'The page you are looking for could not be found.',
});

export default function NotFound() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Page Not Found', path: '/not-found' },
  ];

  return (
    <BreadcrumbProvider items={breadcrumbItems}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              getWebPageSchema(
                '/not-found',
                'Page Not Found | 404',
                'The page you are looking for could not be found.',
              ),
            ],
          }),
        }}
      />
      <CreamContainer className="via-muted to-muted/80">
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          <div className="space-y-4">
            <div className="relative mx-auto mb-8 h-40 w-40">
              <Image
                src="/404.svg"
                fill
                alt="404 illustration"
                className="object-contain"
              />
            </div>
            <h1 className="text-foreground text-4xl font-semibold sm:text-5xl">
              Page not found
            </h1>
            <p className="text-muted-foreground mx-auto max-w-md text-lg">
              Sorry, we can&apos;t find that page. You&apos;ll find lots to
              explore on the home page.
            </p>
            <div className="pt-10">
              <Button asChild size="lg">
                <Link href="/">Back to Homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </CreamContainer>
    </BreadcrumbProvider>
  );
}
