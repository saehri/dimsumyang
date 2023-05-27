'use client';

import React from 'react';
import {useState} from 'react';
import Image from 'next/image';
import {LazyMotion, domAnimation} from 'framer-motion';

import MobileMenu from './mobile-menu';
import MobileMenuToggleButton from '../buttons/mobile-menu-toggle-button';
import MobileBottomNavigation from './mobile-bottom-nav';
import DesktopMenu from './desktop-menu';

export default function Header() {
  const [mobileHeaderVisible, setMobileHeaderVisible] =
    useState<boolean>(false);

  return (
    <LazyMotion features={domAnimation}>
      <div>
        <div className='flex fixed w-full top-0 left-0 z-50 isolate max-sm:items-end max-sm:pt-10 max-sm:px-8 sm:backdrop-blur-sm'>
          <MobileBottomNavigation />

          <MobileMenuToggleButton
            state={mobileHeaderVisible}
            setStatus={setMobileHeaderVisible}
          />

          <MobileMenu state={mobileHeaderVisible} />
          <DesktopMenu />

          <div className='w-[46px] h-[70px] sm:hidden absolute left-1/2 -translate-x-1/2'>
            <Image src='/assets/decoration/logo.png' alt='0' fill={true} />
          </div>

          <div className='w-[92px] h-[140px] top-4 max-sm:hidden absolute left-1/2 -translate-x-1/2'>
            <Image src='/assets/decoration/logo.png' alt='0' fill={true} />
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
