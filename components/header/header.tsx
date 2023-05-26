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

        <div className='w-[46px] h-[70px] sm:hidden absolute left-1/2 -translate-x-1/2'>
          <Image src='/assets/decoration/logo.png' alt='0' fill={true} />
        </div>
      </div>
    </div>
  );
}
