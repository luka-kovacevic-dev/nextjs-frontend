import { MetadataRoute } from 'next';

// Set Edge runtime for Cloudflare compatibility
export const runtime = 'edge';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://domain.com/sitemap.xml',
  };
}
