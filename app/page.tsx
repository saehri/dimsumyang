'use client';

import Image from 'next/image';
import {m} from 'framer-motion';

import FadingSlider from '@/components/sliders/fading-slider';
import InstagramSlider from '@/components/sliders/instagram-slider';
import TestiSlider from '@/components/sliders/testi-slider';
import CommonLayout from '@/components/layout/common-layout';

export default function Home() {
  return (
    <CommonLayout>
      <main className='bg-primary-white min-h-screen lg:bg-none'>
        <HeroSection />
        <HeroImageDecoration />

        <div className='pt-10 pb-24 relative bg-pink max-sm:bg-deco-bottom max-sm:bg-contain max-sm:bg-no-repeat max-sm:bg-bottom'>
          <div className='lg:hidden absolute left-0 top-[-40px] w-full h-10 bg-pink z-[5]'></div>

          <InstagramAndTestimonial />
        </div>
      </main>
    </CommonLayout>
  );
}

/* 
  HOMEPAGE INSTAGRAM AND TESTIMONIAL
*/
function InstagramAndTestimonial() {
  return (
    <section className='grid grid-cols-[repeat(24,1fr)] px-5 lg:px-0'>
      <div className='col-span-full flex flex-col gap-8 lg:gap-0 md:col-span-4/22 lg:grid lg:grid-cols-[repeat(12,1fr)]'>
        <div className='lg:col-span-1/6 flex flex-col gap-2 lg:gap-8'>
          <h2 className='text-slate-950 text-xl lg:text-2xl mb-4 font-calistoga text-center lg:text-left'>
            Meet on Instagram
          </h2>
          <InstagramSlider />
        </div>

        <div className='md:col-span-6/-1 flex flex-col gap-2 lg:pl-8 lg:gap-8'>
          <h2 className='text-slate-950 text-xl lg:text-2xl mb-4 font-calistoga text-center lg:text-left'>
            Testimoni
          </h2>
          <TestiSlider />
        </div>
      </div>
    </section>
  );
}

/* 
  HERO SECTION
*/
function HeroSection() {
  return (
    <section className='bg-primary-yellow lg:bg-primary-white pt-28 pb-4 lg:pt-48 overflow-hidden grid grid-cols-[repeat(12,1fr)] px-4 bg-deco-top-yellow bg-contain bg-no-repeat bg-top lg:bg-none lg:pb-8'>
      <div style={{gridColumn: '3/11'}}>
        <FadingSlider />
      </div>
    </section>
  );
}

/* 
  HERO IMAGE DECORATION
*/
function HeroImageDecoration() {
  return (
    <section className='pt-[calc((698/890)*100%)] lg:hidden bg-primary-yellow relative'>
      <m.div
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1, transition: {delay: 0.4}}}
        className='absolute inset-0 z-10'
      >
        <Image
          priority
          src='/assets/images/mobile%20hero%20image.png'
          alt=''
          fill={true}
        />
      </m.div>
    </section>
  );
}
