'use client';

import type { ChangeEventHandler } from 'react';
import { routing, usePathname } from '@/libs/i18nNavigation';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    router.push(`/${event.target.value}${pathname}`);
    router.refresh();
  };

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      className="border border-gray-300 font-medium focus:outline-none focus-visible:ring"
      aria-label="lang-switcher"
    >
      {routing.locales.map(elt => (
        <option key={elt} value={elt}>
          {elt.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
