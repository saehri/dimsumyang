'use client';

import {m} from 'framer-motion';

import ShopeeIcon from '../icons/shopee-icon';
import TokopediaIcon from '../icons/tokopedia-icon';

export default function OrderProductButtons() {
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
