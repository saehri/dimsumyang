'use client';

import Image from 'next/image';
import {m} from 'framer-motion';

import CommonLayout from '@/components/layout/common-layout';
import TokopediaIcon from '@/components/icons/tokopedia-icon';
import ShopeeIcon from '@/components/icons/shopee-icon';
import React from 'react';
import MobileTopImageDecoration from '@/components/layout/mob-top-img-deco';

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

            <OrderProductButtons />
          </div>
        </div>

        <MobileTopImageDecoration>
          <Image
            className='object-cover'
            src='/assets/decoration/mobile menu page top image.png'
            fill={true}
            alt=''
            priority
          />
        </MobileTopImageDecoration>
      </main>
    </CommonLayout>
  );
}

function OrderProductButtons() {
  return (
    <div className='mx-auto w-max mt-14 flex flex-col gap-8 md:flex-row'>
      <h4 className='font-calistoga text-xl lg:text-3xl text-center text-slate-950'>
        Order Frozen di sini
      </h4>

      <div className='flex gap-4 justify-center'>
        <OrderProductButton href='https://www.tokopedia.com/dimsumyang1000?utm_campaign=Shop-19332965-12146490-250722&utm_source=salinlink&utm_medium=share&_branch_match_id=1091541649935691728&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWDyr38zYITMsIL0oCAA4J2qQiAAAA'>
          <TokopediaIcon />
          <span className='sr-only'>Order frozen dimsum di Tokopedia</span>
        </OrderProductButton>

        <OrderProductButton href={'https://shopee.co.id/shope.me1'}>
          <ShopeeIcon />
          <span className='sr-only'>Order frozen dimsum di Shopee</span>
        </OrderProductButton>
      </div>
    </div>
  );
}

function OrderProductButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <m.a
      href={href}
      target='_blank'
      className='w-32 h-10 lg:w-48 lg:h-14 p-1 flex justify-center rounded-full border border-primary-orange'
      variants={{
        initials: {
          background: 'rgb(248, 239, 232)',
          color: 'rgb(229, 65, 38)',
        },
        hover: {
          background: 'rgb(229, 65, 38)',
          color: 'rgb(248, 239, 232)',
        },
      }}
      transition={{duration: 0.1}}
      initial='initials'
      whileHover='hover'
    >
      {children}
    </m.a>
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
