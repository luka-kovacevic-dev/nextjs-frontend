'use client';

import { useEffect } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

// Extend Window interface to include _mtm
declare global {
  interface Window {
    _mtm: Array<Record<string, unknown>>;
  }
}

export function MatomoAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views when the route changes
  useEffect(() => {
    if (window._mtm) {
      window._mtm.push({
        event: 'mtm.PageView',
        'mtm.pageURL': window.location.href,
        'mtm.pageTitle': document.title,
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Script id="matomo-tag-manager" strategy="afterInteractive">
        {`
          var _mtm = window._mtm = window._mtm || [];
          _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
          (function() {
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src='https://cdn.matomo.cloud/jaanz.matomo.cloud/XXX.js'; s.parentNode.insertBefore(g,s);
          })();
        `}
      </Script>
    </>
  );
}
