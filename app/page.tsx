'use client';

import Image from 'next/image';
import {m} from 'framer-motion';

import FadingSlider from '@/components/sliders/fading-slider';
import InstagramSlider from '@/components/sliders/instagram-slider';
import TestiSlider from '@/components/sliders/testi-slider';
import CommonLayout from '@/components/Layout/common-layout';

export default function Home() {
  return (
    <CommonLayout>
      <main className='bg-primary-white min-h-screen bg-deco-bottom lg:bg-none bg-contain bg-no-repeat bg-bottom'>
        <HeroSection />
        <HeroImageDecoration />

        <div className='pt-10 pb-24' style={{background: '#EEE2D8'}}>
          <InstagramAndTestimonial />
        </div>

        <m.div
          initial={{top: 0, left: 0}}
          animate={{top: '-100%', transition: {duration: 0.3}}}
          className='fixed  z-[900] w-screen h-screen overflow-hidden p-4 bg-primary-white grid place-items-center'
        >
          <div className='animate-spin'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 -960 960 960'
              height='40'
              width='40'
            >
              <path d='M190-80q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190-140h66v-127q0-70 36.5-128.5T394-480q-65-26-101.5-85T256-694v-126h-66q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190-880h580q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T770-820h-66v126q0 70-37 129t-101 85q65 26 101.5 84.5T704-267v127h66q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5Q800-97 791.375-88.5T770-80H190Z' />
            </svg>
          </div>
        </m.div>
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
      <div className='col-span-full flex flex-col gap-8 lg:gap-0 lg:col-span-4/22 lg:grid lg:grid-cols-[repeat(12,1fr)]'>
        <div className='lg:col-span-1/6 flex flex-col gap-2 lg:gap-8'>
          <h2 className='text-slate-950 text-xl lg:text-2xl mb-4 font-calistoga text-center lg:text-left'>
            Meet on Instagram
          </h2>
          <InstagramSlider />
        </div>

        <div className='lg:col-span-6/-1 flex flex-col gap-2 lg:pl-8 lg:gap-8'>
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
    <section className='bg-primary-yellow lg:bg-primary-white pt-28 pb-4 lg:pt-48 overflow-hidden grid grid-cols-[repeat(12,1fr)] px-4 bg-deco-top-yellow bg-contain bg-no-repeat bg-top lg:bg-none'>
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
        initial={{y: 100, opacity: 0}}
        animate={{y: 0, opacity: 1, transition: {delay: 0.4}}}
        className='absolute inset-0 z-10 bg-primary-yellow'
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
