import Image from 'next/image';

import MobileTopImageDecoration from '@/components/Layout/mob-top-img-deco';
import CommonLayout from '@/components/Layout/common-layout';
import PrasmananCardContainer from '@/components/cards/prasmanan-card';

export default function PrasmananPage() {
  return (
    <CommonLayout>
      <main className='bg-primary-white min-h-screen relative'>
        <div className='relative z-20 pt-28 lg:pt-48'>
          <PageTagline />

          <PrasmananCardContainer />

          <div className='bg-pink pt-10 pb-24 max-sm:bg-deco-bottom max-sm:bg-fixed max-sm:bg-contain max-sm:bg-no-repeat max-sm:bg-bottom'>
            Page P P
          </div>
        </div>

        <MobileTopImageDecoration>
          <Image
            className='object-cover'
            src='/assets/decoration/mobile prasmanan page top image.png'
            fill={true}
            alt=''
            priority
          />
        </MobileTopImageDecoration>
      </main>
    </CommonLayout>
  );
}

/* 
  PAGE TAGLINE
*/
function PageTagline() {
  return (
    <>
      <h1
        className='text-xl font-calistoga text-primary-yellow text-center mb-4 lg:hidden'
        style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}
      >
        Kami Ada di Setiap
        <br />
        Kamu Mau
      </h1>

      <p className='font-outfit text-center text-white text-sm mb-8 lg:hidden'>
        Bertekad menjadi yang tersayang dengan selalu ada
        <br />
        disetiap kamu mau
      </p>

      <h2 className='font-calistoga text-xl lg:text-[40px] text-slate-950 lg:text-primary-orange text-center mb-6 lg:mb-16'>
        Lokasi Prasmanan
      </h2>
    </>
  );
}
