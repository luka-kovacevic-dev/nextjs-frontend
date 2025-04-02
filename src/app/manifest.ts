import { MetadataRoute } from 'next';

// Set Edge runtime for Cloudflare compatibility
export const runtime = 'edge';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Deploia',
    short_name: 'Deploia',
    description: 'Deploia - Modern web platform',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#7c3aed',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
