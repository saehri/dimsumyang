'use client';

import Image from 'next/image';
import {LazyMotion, domMax} from 'framer-motion';
import FadingSlider from '@/components/sliders/fading-slider';

export default function Home() {
  return (
    <LazyMotion features={domMax}>
      <main className='bg-primary-white min-h-screen bg-deco-bottom lg:bg-none bg-contain bg-no-repeat bg-bottom'>
        <section className='bg-primary-yellow lg:bg-primary-white pt-28 pb-4 lg:pt-48 overflow-hidden grid grid-cols-[repeat(12,1fr)] px-4 bg-deco-top-yellow bg-contain bg-no-repeat bg-top lg:bg-none'>
          <div style={{gridColumn: '3/11'}}>
            <FadingSlider />
          </div>
        </section>

        <HeroImage />
      </main>
    </LazyMotion>
  );
}

function HeroImage() {
  return (
    <div className='pt-[calc((698/890)*100%)] lg:hidden bg-primary-yellow relative after:w-full after:h-1/2 after:absolute after:bottom-0 after:left-0 after:bg-primary-white after:z-[1]'>
      <div className='absolute inset-0 z-10'>
        <Image
          priority
          src='/assets/images/mobile%20hero%20image.png'
          alt=''
          fill={true}
        />
      </div>
    </div>
  );
}
