'use client';

import { useContext, createContext } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

// Create a context to share breadcrumb items
export const BreadcrumbContext = createContext<BreadcrumbItem[] | null>(null);

export function BreadcrumbProvider({
  children,
  items,
}: {
  children: React.ReactNode;
  items: BreadcrumbItem[];
}) {
  return (
    <BreadcrumbContext.Provider value={items}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const pathname = usePathname();
  const contextItems = useContext(BreadcrumbContext);

  // Don't show breadcrumbs on homepage
  if (pathname === '/') {
    return null;
  }

  // Use items prop, then context items, then generate default items
  const breadcrumbItems = items ||
    contextItems || [
      { name: 'Home', path: '/' },
      // Generate a title from the current path
      {
        name: pathname.split('/').pop()?.replace(/-/g, ' ') || '',
        path: pathname,
      },
    ];

  // Make first letter uppercase for auto-generated breadcrumbs
  if (!items && !contextItems && breadcrumbItems.length > 1) {
    breadcrumbItems[1].name = breadcrumbItems[1].name
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  return (
    <div className="sr-only" aria-hidden="false">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="inline-flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">/</span>}
              <Link
                href={item.path}
                className={
                  index === breadcrumbItems.length - 1
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
