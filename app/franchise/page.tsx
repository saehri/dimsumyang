'use client';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

export default function Redirect() {
  const router = useRouter();
  router.push('/franchise/dim');

  return null;
}
