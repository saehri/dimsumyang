'use client';

import {useState} from 'react';
import MobileMenu from './mobile-menu';
import MobileMenuToggleButton from '../buttons/mobile-menu-toggle-button';
import Image from 'next/image';

export default function Header() {
  const [mobileHeaderVisible, setMobileHeaderVisible] = useState<boolean>(true);

  return (
    <div>
      <div className='flex fixed w-full top-0 left-0 z-50 isolate items-end pt-10 px-8'>
        <MobileMenuToggleButton
          state={mobileHeaderVisible}
          setStatus={setMobileHeaderVisible}
        />

        <MobileMenu state={mobileHeaderVisible} />

        <div
          className='fixed left-0 top-0 z-40 opacity-10 sm:hidden'
          aria-hidden='true'
        >
          <Image
            src='/assets/decoration/mobile%20top%20decoration.png'
            alt=''
            width={window.innerWidth}
            height={(window.innerWidth * 430) / 103}
          />
        </div>
      </div>
    </div>
  );
}
