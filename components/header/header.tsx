'use client';

import React from 'react';
import {useState} from 'react';

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
      </div>
    </div>
  );
}
