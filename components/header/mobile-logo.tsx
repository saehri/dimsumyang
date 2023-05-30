'use client';

import Image from 'next/image';
import {useEffect} from 'react';
import {m, useMotionValue, useScroll} from 'framer-motion';

const logoStyle =
  'w-[46px] h-[70px] lg:w-[92px] lg:h-[140px] lg:top-4 lg:hidden fixed top-2 left-1/2 -translate-x-1/2';
export default function MobileLogo() {
  const logoYellowOpacity = useMotionValue(0);
  const logoWhiteOpacity = useMotionValue(1);
  const {scrollY} = useScroll();

  useEffect(() => {
    return scrollY.on('change', (e) => {
      if (e > 424 - 35) {
        logoYellowOpacity.set(1);
        logoWhiteOpacity.set(0);
      } else {
        logoYellowOpacity.set(0);
        logoWhiteOpacity.set(1);
      }
    });
  }, [scrollY]);

  return (
    <>
      <m.div
        style={{opacity: logoWhiteOpacity}}
        transition={{duration: 1}}
        className={logoStyle}
      >
        <Image
          src='/assets/decoration/logo white.png'
          alt='0'
          fill={true}
          priority
        />
      </m.div>

      <m.div
        style={{opacity: logoYellowOpacity}}
        transition={{duration: 1}}
        className={logoStyle}
      >
        <Image src='/assets/decoration/logo.png' alt='0' fill={true} priority />
      </m.div>
    </>
  );
}
