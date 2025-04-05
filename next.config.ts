import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optimize for Cloudflare
  typescript: {
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
  images: {
    // If you want to use a custom image loader, uncomment the following lines
    // loader: 'custom',
    // loaderFile: './src/lib/imageLoader.ts',
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Skip type checking during build for better performance
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

// Setup Cloudflare dev platform if in development
if (process.env.NODE_ENV === 'development') {
  (async () => {
    await setupDevPlatform();
  })();
}

const withMDX = createMDX({
  // Add markdown plugins here, if needed
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
