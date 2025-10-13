'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {Locale} from '@/i18n/routing';

export default function Nav({locale}: {locale: Locale}) {
  const t = useTranslations('Nav');

  const items = [
    {href: `/${locale}#home`, label: t('home')},
    {href: `/${locale}#about`, label: t('about')},
    {href: `/${locale}#edu`, label: t('edu')},
    {href: `/${locale}#skills`, label: t('skills')},
    {href: `/${locale}#awards`, label: t('awards')},
    {href: `/${locale}#exp`, label: t('exp')},
    {href: `/${locale}#projects`, label: t('projects')},
    {href: `/${locale}#contact`, label: t('contact')}
  ];

  return (
    <nav aria-label="primary" style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
      {items.map((it) => (
        <Link key={it.href} href={it.href}>
          {it.label}
        </Link>
      ))}
    </nav>
  );
}
