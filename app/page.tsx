'use client';

import {LazyMotion, domMax} from 'framer-motion';
import FadingSlider from '@/components/sliders/fading-slider';
import MobileLogo from '@/components/header/mobile-logo';

export default function Home() {
  return (
    <LazyMotion features={domMax}>
      <main className='bg-primary-white min-h-screen max-sm:bg-deco-bottom max-sm:bg-contain max-sm:bg-no-repeat max-sm:bg-bottom'>
        <section className='bg-primary-yellow pt-28 grid grid-cols-[repeat(12,1fr)] px-4 max-sm:bg-deco-top-yellow max-sm:bg-contain max-sm:bg-no-repeat max-sm:bg-top'>
          <div style={{gridColumn: '3/11'}}>
            <FadingSlider />
          </div>
        </section>

        <MobileLogo />
      </main>
    </LazyMotion>
  );
}
