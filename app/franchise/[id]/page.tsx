'use client';

import CommonLayout from '@/components/layout/common-layout';
import Image from 'next/image';

import {useParams, useRouter} from 'next/navigation';
import MobileTopImageDecoration from '@/components/layout/mob-top-img-deco';

export default function FranchisePage() {
  return (
    <CommonLayout>
      <main className='bg-primary-white min-h-screen pt-28 lg:pt-48 relative'>
        <div className='relative z-20'>
          <h1 className='text-xl lg:text-5xl font-calistoga text-primary-orange text-center mb-2 lg:mb-3 mx-4'>
            Mari begabung menjadi
            <br />
            mitra Dimsum Yang
          </h1>
          <h2 className='text-slate-950 mx-auto font-outfit text-sm lg:text-2xl text-center max-w-sm lg:max-w-3xl mb-10 lg:mb-20  px-4'>
            Dengan sistem franchise lepas sangat menguntungkan mitra, karena
            tidak ada royalty fee dan biaya perpanjangan franchise. Semua
            keuntungan 100% menjadi milik mitra.
          </h2>

          <FranchiseSlider />

          {/* <div className='bg-primary-yellow pt-4 pb-24 bg-deco-bottom-yellow lg:bg-deco-bottom-yellow bg-contain bg-no-repeat bg-bottom'>
            Franchise
          </div> */}
        </div>

        <MobileTopImageDecoration />
      </main>
    </CommonLayout>
  );
}

/* 
  FRANCHISE SLIDER
*/
function FranchiseSlider() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push('/franchise/dim')}>Paket Dim</button>
      <button onClick={() => router.push('/franchise/sum')}>Paket Sum</button>
    </div>
  );
}

/* 
  CURVY IMAGE DECORATION
*/

function CurvyImageDecoration({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative pt-[calc((336/430)*100%)]` + ' ' + className}>
      <div className='absolute inset-0 z-30'>{children}</div>

      <span className='absolute block inset-0 z-20'>
        <Image
          src='/assets/decoration/curvy image.png'
          alt=''
          fill={true}
          sizes='(max-width: 1024px) 860px'
        />
      </span>
      <span className='absolute block h-1/2 w-full top-0 left-0 z-10 bg-pink'></span>
      <span className='absolute block h-1/2 w-full bottom-0 left-0 z-10 bg-primary-yellow'></span>
    </div>
  );
}
