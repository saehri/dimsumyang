'use client';

import {useState} from 'react';
import {LazyMotion, domAnimation} from 'framer-motion';

import MobileMenu from './mobile-menu';
import MobileMenuToggleButton from '../buttons/mobile-menu-toggle-button';
import MobileBottomNavigation from './mobile-bottom-nav';
import MobileLogo from './mobile-logo';
import DesktopMenu from './desktop-menu';
import {usePathname} from 'next/navigation';

export default function Header() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <LazyMotion features={domAnimation}>
      {!pathname.includes('admin') && !pathname.includes('auth') && (
        <div>
          <div className='flex fixed w-full top-0 left-0 z-[1000] isolate items-end pt-10 px-5 lg:px-0 lg:pt-0 lg:grid lg:grid-cols-[repeat(24,1fr)]'>
            <MobileBottomNavigation
              mobileSecondaryNavStatus={setMobileMenuVisible}
            />

            <MobileMenuToggleButton
              state={mobileMenuVisible}
              setStatus={setMobileMenuVisible}
            />

            <MobileMenu
              state={mobileMenuVisible}
              setStatus={setMobileMenuVisible}
              pathname={pathname}
            />

            <DesktopMenu />

            <MobileLogo />
          </div>
        </div>
      )}
    </LazyMotion>
  );
}
