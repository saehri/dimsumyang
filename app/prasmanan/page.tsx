import Image from 'next/image';

import MobileTopImageDecoration from '@/components/layout/mob-top-img-deco';
import CommonLayout from '@/components/layout/common-layout';
import PrasmananCardContainer from '@/components/cards/prasmanan-card';
import ResellerCards from '@/components/cards/reseller-card';
import PageTagline from '@/components/small/tagline';
import TopImage from '@/components/small/top-image';

export default function PrasmananPage() {
  return (
    <CommonLayout>
      <main className='bg-primary-white min-h-screen relative pt-16 lg:pt-28'>
        <div className='relative z-20'>
          <TopImage src='prasmanan' />

          <PageTagline
            main='Kami Ada disetiap Kamu Mau'
            secondary='Bertekad menjadi yang tersayang dengan selalu ada disetiap kamu mau'
          />

          <h3 className='font-calistoga text-xl lg:text-[40px] text-slate-950 lg:text-primary-orange text-center mb-6 lg:mb-16'>
            Lokasi Prasmanan
          </h3>

          <PrasmananCardContainer />

          <div className='bg-pink pt-10 pb-24 bg-deco-bottom lg:bg-deco-bottom-big bg-contain bg-no-repeat bg-bottom'>
            <h4 className='font-calistoga text-xl lg:text-[40px] text-primary-orange text-center mb-6 lg:mb-16'>
              Reseller
            </h4>

            <ResellerCards />
          </div>
        </div>

        <MobileTopImageDecoration />
      </main>
    </CommonLayout>
  );
}
