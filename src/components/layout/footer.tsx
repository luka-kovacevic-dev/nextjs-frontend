import Link from 'next/link';

import { ArrowUpRight, MousePointerClick } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function Footer() {
  const navigation = [
    { name: 'Product', href: '/#feature-modern-teams' },
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const social = [
    { name: 'X', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ];

  const legal = [{ name: 'Privacy Policy', href: '/privacy' }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="relative mx-auto w-full max-w-5xl lg:max-w-7xl">
        {/* Gradient background container */}
        <div className="relative rounded-4xl bg-gradient-to-br from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] p-2 dark:from-[#493d29] dark:via-[#7e3f6b] dark:to-[#573087]">
          {/* Background overlay with rounded corners - adapts to dark mode */}
          <div className="dark:bg-background/90 absolute inset-2 rounded-3xl bg-white/80"></div>

          {/* Content container */}
          <div className="relative px-8 pt-16 pb-12 text-center sm:py-20 md:px-16">
            <div className="mx-auto max-w-4xl space-y-6">
              <h2 className="text-muted-foreground font-mono text-xs font-semibold tracking-widest uppercase">
                Get started
              </h2>
              <p className="text-foreground mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to dive in?
                <br />
                Start your free trial today.
              </p>
              <p className="text-muted-foreground mx-auto mt-4 max-w-md text-sm md:text-base">
                Mainline is the fit-for-purpose tool for planning and building
                modern software products.
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group rounded-full px-8 py-2 transition-all duration-300 hover:scale-105"
                >
                  Get started{' '}
                  <MousePointerClick className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4 pb-8">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                rel="nofollow noopener noreferrer"
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
