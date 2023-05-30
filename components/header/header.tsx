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
        <div className='flex fixed w-full top-0 left-0 z-50 isolate items-end pt-10 px-8 lg:backdrop-blur-sm'>
          <MobileBottomNavigation />

          <MobileMenuToggleButton
            state={mobileHeaderVisible}
            setStatus={setMobileHeaderVisible}
          />

          <MobileMenu state={mobileHeaderVisible} />
          <DesktopMenu />

          <div className='lg:w-[92px] lg:h-[140px] left-1/2 -translate-x-1/2 top-4 hidden lg:block absolute'>
            <Image src='/assets/decoration/logo.png' alt='' fill={true} />
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
