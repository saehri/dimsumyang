'use client';

import {usePathname, useSearchParams} from 'next/navigation';
import {useEffect} from 'react';

export default function NavigationEvent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
  }, [pathname, searchParams]);

  return null;
}
