import Image from 'next/image';

import MobileTopImageDecoration from '@/components/layout/mob-top-img-deco';
import CommonLayout from '@/components/layout/common-layout';
import PrasmananCardContainer from '@/components/cards/prasmanan-card';
import ResellerCards from '@/components/cards/reseller-card';

export default function PrasmananPage() {
  return (
    <CommonLayout>
      <main className='bg-primary-white min-h-screen relative'>
        <div className='relative z-20 pt-28 lg:pt-48'>
          <TopImgDecoration />

          <PageTagline />

          <PrasmananCardContainer />

          <div className='bg-pink pt-10 pb-24 bg-deco-bottom lg:bg-deco-bottom-big bg-contain bg-no-repeat bg-bottom'>
            <h2 className='font-calistoga text-xl lg:text-[40px] text-primary-orange text-center mb-6 lg:mb-16'>
              Reseller
            </h2>

            <ResellerCards />
          </div>
        </div>

        <MobileTopImageDecoration />
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

/* 
  TOP DECORATION
*/

function TopImgDecoration() {
  return (
    <div className='hidden lg:grid grid-cols-[repeat(24,1fr)] w-full mb-5'>
      <div className='pt-[calc((503/788)*100%)] relative lg:col-span-7/-7'>
        <Image
          className='absolute inset-0'
          src='/assets/decoration/desktop prasmanan page top image.png'
          fill={true}
          alt=''
        />
      </div>
    </div>
  );
}
