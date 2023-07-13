'use client';

import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

export default function Redirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/franchise/dim');
  }, []);

  return <div></div>;
}
