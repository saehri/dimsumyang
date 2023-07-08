'use client';

import CommonLayout from '@/components/Layout/common-layout';
import Image from 'next/image';

export default function MenuPage() {
  return (
    <CommonLayout>
      <main className='bg-primary-white min-h-screen pt-28 lg:pt-48 relative'>
        <div className='relative z-20'>
          <h1 className='font-calistoga text-primary-orange font-normal text-center leading-[1.11] text-xl lg:text-4xl mb-11 lg:mb-14'>
            Jelajahi menu tersamyang
            <br />
            30 variant ++
          </h1>

          <div className='flex flex-col gap-10'>
            <PackageDealMenu />
            <IndividualMenu />
          </div>

          <div className='bg-pink mt-8 pt-4 pb-24 max-sm:bg-deco-bottom max-sm:bg-fixed max-sm:bg-contain max-sm:bg-no-repeat max-sm:bg-bottom'>
            <FrozenMenu />
          </div>
        </div>

        <MobileTopImageDecoration />
      </main>
    </CommonLayout>
  );
}

function MobileTopImageDecoration() {
  return (
    <div
      className='lg:hidden absolute top-0 left-0 w-full overflow-hidden pt-[calc((471/430)*100%)]'
      aria-hidden='true'
    >
      <div
        className='absolute z-10 top-0 left-0 w-full h-full max-h-[430px]'
        style={{
          background:
            'linear-gradient(180deg, rgba(248, 239, 232, .45) 0%, #F8EFE8 91.26%)',
        }}
      ></div>

      <div className='absolute z-0 top-0 left-0 w-full h-full max-h-[430px]'>
        <Image
          className='object-cover'
          src='/assets/decoration/mobile menu page top image.png'
          fill={true}
          alt=''
          priority
        />
      </div>
    </div>
  );
}

/* 
  MENU CARD
*/
function MenuCard() {
  return (
    <article className='bg-white relative rounded-[20px] lg:rounded-[30px] flex flex-col gap-2 lg:gap-4 max-w-[166px] lg:max-w-[230px] shadow-sm'>
      <div className='p-2'>
        <div className='relative pt-[calc((1/1)*100%)]'>
          <div className='absolute inset-0 rounded-[12px] lg:rounded-[22px] bg-yellow-200'></div>
        </div>
      </div>

      <div className='flex flex-col justify-between h-full'>
        <div className='p-2'>
          <h3 className='font-calistoga font-normal lg:text-xl capitalize text-slate-950 text-left mb-1 leading-[1] text-sm'>
            COMBO MENU
          </h3>

          <div>
            <p className='font-outfit text-xs lg:text-sm text-slate-600 leading-[1.3] break-all'>
              <span className='sr-only'>Deskripsi COMBO MENU:</span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Suscipit, doloremque?
            </p>
          </div>
        </div>

        <div className='bg-primary-yellow text-primary-orange text-sm lg:text-xl p-2 font-calistoga rounded-[20px] rounded-tl-none rounded-tr-none'>
          <strong className='flex gap-1 font-normal'>
            <span className='sr-only'>Harga produk: </span>
            <span aria-hidden='true'>Rp </span>
            <span>1.000</span>
            <span className='sr-only'>rupiah</span>
          </strong>
        </div>
      </div>
    </article>
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
