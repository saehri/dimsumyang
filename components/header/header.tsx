'use client';

import React from 'react';
import {useState} from 'react';
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
        <div className='flex fixed w-full top-0 left-0 z-50 isolate items-end pt-10 px-8 lg:pt-0 lg:items-center lg:backdrop-blur-md'>
          <MobileBottomNavigation />

          <MobileMenuToggleButton
            state={mobileHeaderVisible}
            setStatus={setMobileHeaderVisible}
          />

          <MobileMenu state={mobileHeaderVisible} />
          <DesktopMenu />
        </div>
      </div>
    </LazyMotion>
  );
}
