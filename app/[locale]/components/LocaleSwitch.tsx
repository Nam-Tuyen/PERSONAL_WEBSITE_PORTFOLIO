'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {routing, Locale} from '@/i18n/routing';

export default function LocaleSwitch({current}: {current: Locale}) {
  const pathname = usePathname();

  const replaceLocaleInPath = (target: Locale) => {
    if (!pathname) return `/${target}`;
    const segments = pathname.split('/');
    segments[1] = target; // ['', 'vi', ...]
    return segments.join('/') || `/${target}`;
  };

  return (
    <div style={{display: 'flex', gap: 8}}>
      {routing.locales.map((loc) => (
        <Link
          key={loc}
          href={replaceLocaleInPath(loc)}
          aria-current={loc === current ? 'page' : undefined}
          style={{
            padding: '4px 10px',
            border: '1px solid #ccc',
            borderRadius: 999,
            background: loc === current ? '#111' : 'transparent',
            color: loc === current ? '#fff' : '#111',
            textDecoration: 'none'
          }}
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
