'use client';

import Image from 'next/image';
import FadingSlider from '@/components/sliders/fading-slider';
import InstagramSlider from '@/components/sliders/instagram-slider';
import TestiSlider from '@/components/sliders/testi-slider';
import CommonLayout from '@/components/Layout/common-layout';

export default function Home() {
  return (
    <CommonLayout>
      <main className='bg-primary-white min-h-screen bg-deco-bottom lg:bg-none bg-contain bg-no-repeat bg-bottom pb-24'>
        <HeroSection />
        <HeroImageDecoration />
        <InstagramAndTestimonial />
      </main>
    </CommonLayout>
  );
}

/* 
  HOMEPAGE INSTAGRAM AND TESTIMONIAL
*/
function InstagramAndTestimonial() {
  return (
    <section className='grid grid-cols-[repeat(24,1fr)] px-5 lg:px-0 mt-10'>
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
    <section className='pt-[calc((698/890)*100%)] lg:hidden bg-primary-yellow relative after:w-full after:h-1/2 after:absolute after:bottom-0 after:left-0 after:bg-primary-white after:z-[1]'>
      <div className='absolute inset-0 z-10'>
        <Image
          priority
          src='/assets/images/mobile%20hero%20image.png'
          alt=''
          fill={true}
        />
      </div>
    </section>
  );
}
