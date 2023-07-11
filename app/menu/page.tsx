import Image from 'next/image';

import CommonLayout from '@/components/layout/common-layout';
import MobileTopImageDecoration from '@/components/layout/mob-top-img-deco';
import OrderProductButtons from '@/components/buttons/order-product';
import MenuCard from '@/components/cards/menu-card';

export default function MenuPage() {
  return (
    <CommonLayout>
      <main className='bg-primary-white min-h-screen pt-28 lg:pt-48 relative'>
        <div className='relative z-20'>
          <PageTagline />

          <div className='flex flex-col gap-10'>
            <PackageDealMenu />
            <IndividualMenu />P
          </div>

          <div className='bg-pink mt-8 pt-4 pb-24 max-sm:bg-deco-bottom max-sm:bg-fixed max-sm:bg-contain max-sm:bg-no-repeat max-sm:bg-bottom'>
            <FrozenMenu />

            <OrderProductButtons />
          </div>
        </div>

        <MobileTopImageDecoration>
          <Image
            className='object-cover'
            src='/assets/decoration/mobile menu page top image.png'
            fill={true}
            sizes='(max-width: 1024px) 1024px'
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
        Kami Tahu Apa Yang
        <br />
        Kamu Mau
      </h1>

      <p className='font-outfit text-center text-white text-sm mb-12 lg:hidden'>
        Nikmati 30+ Varian Menu Dimsum Halal Yang Lezat
      </p>
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
      <h2 className='text-center font-calistoga font-normal text-2xl lg:text-3xl text-slate-950 mb-4 lg:mb-10'>
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
