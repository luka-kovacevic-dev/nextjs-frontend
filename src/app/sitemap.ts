// Set Edge runtime for Cloudflare compatibility
export const runtime = 'edge';

const DOMAIN = 'https://domain.com';

export default async function sitemap() {
  // Define static routes
  const staticRoutes = [
    '',
    '/about',
    '/pricing',
    '/faq',
    '/contact',
    '/privacy',
  ];

  // Create sitemap entries for static routes
  const staticEntries = staticRoutes.map((route) => ({
    url: `${DOMAIN}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticEntries];
}
