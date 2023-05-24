import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <div className='flex items-end pt-10 px-8'>
        <button className='h-4 w-6 rounded-full bg-transparent outline-transparent focus:outline-transparent block ml-auto mb-12 relative z-50'>
          <svg
            viewBox='0 0 25 17'
            className='text-red-500'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M24 8.49219L1 8.49219'
              stroke='#E54126'
              stroke-width='2'
              stroke-miterlimit='10'
              stroke-linecap='round'
            />
            <path
              d='M9.13843 0.999909L0.999967 8.49219'
              stroke='#E54126'
              stroke-width='2'
              stroke-miterlimit='10'
              stroke-linecap='round'
            />
            <path
              d='M9.13843 16L0.999967 8.49218'
              stroke='#E54126'
              stroke-width='2'
              stroke-miterlimit='10'
              stroke-linecap='round'
            />
          </svg>
        </button>

        <MobileMenu />
      </div>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className='bg-yellow-400 pt-28 pr-8 pb-8 fixed z-40 top-0 left-0 h-screen w-full font-calistoga text-2xl text-slate-950 lg:hidden'>
      <div className='flex flex-col gap-8 items-end mb-16'>
        <Link href='/'>
          <span
            className='text-red-500 text-sm text-right block'
            aria-hidden='true'
          >
            Join
          </span>
          <span>Franchise</span>
        </Link>
        <Link href='/'>
          <span
            className='text-red-500 text-sm text-right block'
            aria-hidden='true'
          >
            Join
          </span>
          <span>Reseller</span>
        </Link>
        <Link href='/'>
          <span>Profile</span>
        </Link>
        <Link href='/'>
          <span>Proposal Franchise</span>
        </Link>
      </div>

      <div className='flex flex-col gap-8 items-end'>
        <span className='text-sm text-red-500 text-right'>Order Frozen</span>

        <Link href='/'>
          <span>Tokopedia</span>
        </Link>
        <Link href='/'>
          <span>Shopee</span>
        </Link>
      </div>
    </div>
  );
}
