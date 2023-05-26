'use client';

import React from 'react';
import {useState} from 'react';
import Image from 'next/image';

import MobileMenu from './mobile-menu';
import MobileMenuToggleButton from '../buttons/mobile-menu-toggle-button';
import MobileBottomNavigation from './mobile-bottom-nav';

export default function Header() {
  const [mobileHeaderVisible, setMobileHeaderVisible] =
    useState<boolean>(false);

  return (
    <div>
      <div className='flex fixed w-full top-0 left-0 z-50 isolate items-end pt-10 px-8'>
        <MobileBottomNavigation />

        <MobileMenuToggleButton
          state={mobileHeaderVisible}
          setStatus={setMobileHeaderVisible}
        />

        <MobileMenu state={mobileHeaderVisible} />

        <HeaderMobileDecoration />
      </div>
    </div>
  );
}

function HeaderMobileDecoration() {
  return (
    <div
      className='fixed w-full left-0 top-0 z-40 sm:hidden opacity-10'
      aria-hidden='true'
      style={{paddingTop: 'calc((103 / 430) * 100%)'}}
    >
      <div className='absolute inset-0'>
        <Image
          src='/assets/decoration/mobile%20top%20decoration.png'
          alt=''
          fill={true}
        />
      </div>
    </div>
  );
}
