import { Metadata } from 'next';

// Remove direct MDX import
// import Privacy from './privacy.mdx';

import {
  generateMetadata,
  getBreadcrumbSchema,
  getOrganizationSchema,
  getWebPageSchema,
} from '@/lib/utils/metadata';

export const metadata: Metadata = generateMetadata({
  path: '/privacy',
  title: 'Privacy Policy | Mainline',
  description: 'Our privacy policy and data protection practices.',
});

const Page = () => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy' },
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
                '/privacy',
                'Privacy Policy | Mainline',
                'Our privacy policy and data protection practices.',
                breadcrumbItems,
              ),
              getBreadcrumbSchema(breadcrumbItems),
            ],
          }),
        }}
      />
      <section className="mx-auto max-w-2xl px-4 py-28 lg:pt-44 lg:pb-32">
        {/* Breadcrumb is now included in the layout */}
        <div className="prose prose-gray dark:prose-invert mx-auto">
          <h1 className="mb-8 text-center text-3xl font-bold lg:text-4xl">
            Privacy Policy
          </h1>
          <p>Last updated: April 07, 2024</p>

          <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>

          <p>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>

          <h2>Interpretation and Definitions</h2>

          <h3>Interpretation</h3>

          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>

          {/* Additional privacy content would go here */}
          <p>
            Please refer to our full privacy policy document for complete
            details.
          </p>

          <h2>Contact Us</h2>

          <p>
            If you have any questions about this Privacy Policy, You can contact
            us:
          </p>

          <ul>
            <li>By email: example@example.com</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Page;
