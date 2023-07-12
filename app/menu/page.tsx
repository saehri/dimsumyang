import Image from 'next/image';

import CommonLayout from '@/components/layout/common-layout';
import MobileTopImageDecoration from '@/components/layout/mob-top-img-deco';
import OrderProductButtons from '@/components/buttons/order-product';
import MenuCard from '@/components/cards/menu-card';

export default function MenuPage() {
  return (
    <CommonLayout>
      <main className='bg-primary-white min-h-screen pt-16 lg:pt-28 relative'>
        <div className='relative z-20'>
          <TopImage />

          <PageTagline />

          <div className='flex flex-col gap-10'>
            <PackageDealMenu />
            <IndividualMenu />
          </div>

          <div className='bg-pink mt-8 pt-4 pb-24 bg-deco-bottom lg:bg-deco-bottom-big bg-contain bg-no-repeat bg-bottom'>
            <FrozenMenu />

            <OrderProductButtons />
          </div>
        </div>

        <MobileTopImageDecoration />
      </main>
    </CommonLayout>
  );
}

/* 
  TOP IMAGE
 */

function TopImage() {
  return (
    <div className='grid grid-cols-[repeat(24,1fr)] px-4 lg:px-0 mb-6 lg:mb-10'>
      <div
        className='pt-[calc((287/430)*100%)] lg:pt-[calc((509/879)*100%)] col-span-full lg:col-span-3/23 xl:col-span-5/21 relative'
        aria-hidden='true'
      >
        <Image
          draggable='false'
          className='absolute inset-0 lg:hidden'
          src='/assets/decoration/mobile menu page top img.png'
          alt=''
          fill={true}
          sizes='(max-width: 1024px) 1024px'
        />

        <Image
          draggable='false'
          className='absolute inset-0 hidden lg:block'
          src='/assets/decoration/desktop menu page top img.png'
          alt=''
          fill={true}
          sizes='(min-width: 1024px) 1784px'
        />
      </div>
    </div>
  );
}

/* 
  PAGE TAGLINE
*/
function PageTagline() {
  return (
    <>
      <h1 className='text-xl font-calistoga text-primary-orange text-center md:text-4xl mb-2 lg:mb-3'>
        Kami Tahu Apa Yang Kamu Mau
      </h1>

      <h2 className='font-outfit text-center text-slate-950 text-sm md:text-base mb-10 lg:mb-14'>
        Nikmati 30+ Varian Menu Dimsum Halal Yang Lezat
      </h2>
    </>
  );
}

/* 
  MENU CONTAINER
*/
function MenuContainer({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className='text-center font-calistoga font-normal text-xl lg:text-3xl text-slate-950 mb-4 lg:mb-10'>
        {name}
      </h2>
      {children}
    </div>
  );
}

/* 
  MENU DATA
*/
function PackageDealMenu() {
  return (
    <MenuContainer name={'Paket'}>
      <div
        style={{flexFlow: 'row wrap'}}
        className='flex gap-3 justify-center overflow-hidden lg:max-w-[968px] mx-auto'
      >
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </MenuContainer>
  );
}

/* 
---------------------------------------------------------
*/

function IndividualMenu() {
  return (
    <MenuContainer name={'Satuan'}>
      <div
        style={{flexFlow: 'row wrap'}}
        className='flex gap-3 justify-center overflow-hidden max-w-[712px] lg:max-w-[968px] mx-auto lg:gap-y-6'
      >
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </MenuContainer>
  );
}

/* 
---------------------------------------------------------
*/

function FrozenMenu() {
  return (
    <MenuContainer name={'Frozen'}>
      <div
        style={{flexFlow: 'row wrap'}}
        className='flex gap-3 justify-center overflow-hidden'
      >
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </MenuContainer>
  );
}
