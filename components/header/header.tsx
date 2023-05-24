'use client';

import Link from 'next/link';
import {useState} from 'react';
import MobileMenuToggleButton from '../buttons/mobile-menu-toggle-button';

export default function Header() {
  const [mobileHeaderVisible, setMobileHeaderVisible] =
    useState<boolean>(false);

  return (
    <div>
      <div className='flex items-end pt-10 px-8'>
        <MobileMenuToggleButton
          state={mobileHeaderVisible}
          setStatus={setMobileHeaderVisible}
        />
        <MobileMenu />
      </div>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className='bg-yellow-400 pt-28 pr-8 pb-8 fixed z-40 top-0 left-0 h-screen w-full font-calistoga text-2xl text-slate-950 lg:hidden'>
      <div className='flex flex-col gap-8 items-end mb-16'>
        <Link href='/'>
          <span
            className='text-red-500 text-sm text-right block'
            aria-hidden='true'
          >
            Join
          </span>
          <span>Franchise</span>
        </Link>
        <Link href='/'>
          <span
            className='text-red-500 text-sm text-right block'
            aria-hidden='true'
          >
            Join
          </span>
          <span>Reseller</span>
        </Link>
        <Link href='/'>
          <span>Profile</span>
        </Link>
        <Link href='/'>
          <span>Proposal Franchise</span>
        </Link>
      </div>

      <div className='flex flex-col gap-8 items-end'>
        <span className='text-sm text-red-500 text-right'>Order Frozen</span>

        <Link href='/'>
          <span>Tokopedia</span>
        </Link>
        <Link href='/'>
          <span>Shopee</span>
        </Link>
      </div>
    </div>
  );
}
