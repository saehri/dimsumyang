import Link from 'next/link';
import HomeIcon from '../icons/home-icon';
import MenuIcon from '../icons/menu-icon';
import PrasmananIcon from '../icons/prasmanan-icon';
import OrderIcon from '../icons/order-icon';

export default function MobileBottomNavigation() {
  return (
    <div className='fixed flex gap-2 justify-between z-50 bottom-0 left-0 w-full py-2 px-8 bg-red-500 sm:hidden'>
      <Link href='/'>
        <NavIcon label='Home'>
          <HomeIcon />
        </NavIcon>
      </Link>
      <Link href='/'>
        <NavIcon label='Menu'>
          <MenuIcon />
        </NavIcon>
      </Link>
      <Link href='/'>
        <NavIcon label='Prasmanan'>
          <PrasmananIcon />
        </NavIcon>
      </Link>
      <Link href='/'>
        <NavIcon label='Mulai Order'>
          <OrderIcon />
        </NavIcon>
      </Link>
    </div>
  );
}

function NavIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}): React.ReactElement {
  return (
    <div className='w-max flex flex-col items-center text-slate-100'>
      <div aria-hidden='true'>{children}</div>
      <span className='font-outfit text-xs'>{label}</span>
    </div>
  );
}
