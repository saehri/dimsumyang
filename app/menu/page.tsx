'use client';

import CommonLayout from '@/components/Layout/common-layout';

export default function MenuPage() {
  return (
    <CommonLayout>
      <main className='bg-slate-100 min-h-screen max-sm:bg-deco-bottom max-sm:bg-fixed max-sm:bg-contain max-sm:bg-no-repeat max-sm:bg-bottom pt-28 lg:pt-48'>
        <h1 className='font-calistoga text-primary-orange font-normal text-center leading-[1.11] text-xl lg:text-4xl mb-11'>
          Jelajahi menu tersamyang
          <br />
          30 variant ++
        </h1>

        <div className='flex flex-col gap-10'>
          <PackageDealMenu />
          <IndividualMenu />
        </div>

        <div className='bg-pink mt-8 pt-4 pb-24'>
          <FrozenMenu />
        </div>
      </main>
    </CommonLayout>
  );
}

/* 
  MENU CARD
*/
function MenuCard() {
  return (
    <article className='bg-white relative rounded-[20px] flex flex-col gap-2 max-w-[166px] shadow-sm'>
      <div className='p-2'>
        <div className='relative pt-[calc((1/1)*100%)]'>
          <div className='absolute inset-0 rounded-[12px] bg-yellow-200'></div>
        </div>
      </div>

      <div className='flex flex-col justify-between h-full'>
        <div className='p-2'>
          <h3 className='font-calistoga font-normal capitalize text-slate-950 text-left mb-1 leading-[1] text-sm'>
            COMBO MENU
          </h3>

          <div>
            <p className='font-outfit text-xs text-slate-600 leading-[1.3] break-all'>
              <span className='sr-only'>Deskripsi COMBO MENU:</span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Suscipit, doloremque?
            </p>
          </div>
        </div>

        <div className='bg-primary-yellow text-primary-orange text-sm p-2 font-calistoga rounded-[20px] rounded-tl-none rounded-tr-none'>
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
      <h2 className='text-center font-calistoga font-normal text-2xl text-slate-950'>
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
        className='pt-4 flex gap-3 justify-center overflow-hidden'
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
        className='pt-4 flex gap-3 justify-center overflow-hidden'
      >
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
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
        className='pt-4 flex gap-3 justify-center overflow-hidden'
      >
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </MenuContainer>
  );
}
