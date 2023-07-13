import Link from 'next/link';
import Image from 'next/image';
import {m} from 'framer-motion';
import {SetStateAction, Dispatch} from 'react';

const menuStyle =
  'flex flex-col gap-2 h-xs:gap-4 h-s:gap-8 items-end xs:mb-8 relative z-10';

const animationEasing = [0.32, 0.72, 0, 1];
const animation = {
  variants: {
    imgAnimation: {
      initial: {
        y: '-25%',
        x: -200,
        opacity: 0,
        transition: {
          rotate: {
            delay: 1,
            duration: 10,
            repeat: 'infinity',
            ease: 'linear',
          },
        },
      },
      animate: {
        y: '-25%',
        x: '-33.33333333%',
        rotate: [0, 360],
        opacity: 1,
        transition: {
          duration: 0.05,
          delay: 0.8,
          type: 'spring',
          stiffness: 35,
          ease: animationEasing,
          rotate: {
            delay: 1,
            duration: 10,
            repeat: 'infinity',
            ease: 'linear',
          },
        },
      },
    },
    linkAnimatiion: {
      initial: (index: number) => ({
        x: 200,
        opacity: 0,
        transition: {
          delay: index * 0.05,
          type: 'spring',
          bounce: 0.2,
        },
      }),
      animate: (index: number) => ({
        x: 0,
        opacity: 1,
        transition: {
          delay: index * 0.05,
          type: 'spring',
          bounce: 0.2,
          stiffness: 35,
        },
      }),
    },
    menuAnimation: {
      initial: {
        left: '100%',
        transition: {
          duration: 0.3,
          delay: 0.4,
        },
      },
      animate: {
        left: 0,
        transition: {
          duration: 0.3,
        },
      },
    },
  },
};

type Links = {name: string; href: string; target: string}[];
const links: Links = [
  {name: 'franchise', href: '/franchise', target: ''},
  {name: 'reseller', href: '/reseller', target: ''},
  {name: 'profile', href: '/profile', target: ''},
  {
    name: 'proposal franchise',
    href: 'https://drive.google.com/file/d/1iMx6XRSpO67uVhAraPB-luFVGmTZDbGJ/view?usp=sharing',
    target: '_blank',
  },
  {
    name: 'tokopedia',
    href: 'https://www.tokopedia.com/dimsumyang1000?utm_campaign=Shop-19332965-12146490-250722&utm_source=salinlink&utm_medium=share&_branch_match_id=1091541649935691728&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL8nPzi9ITclM1MvJzMvWDyr38zYITMsIL0oCAA4J2qQiAAAA',
    target: '_blank',
  },
  {name: 'shopee', href: 'https://shopee.co.id/shope.me', target: '_blank'},
];

export default function MobileMenu({
  state,
  setStatus,
  pathname,
}: {
  state: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
}) {
  const status = state ? 'animate' : 'initial';

  return (
    <m.div
      animate={status}
      initial={false}
      variants={animation.variants.menuAnimation}
      className='fixed z-30 top-0 left-0 pt-28 pr-8 pb-8 h-screen w-screen bg-primary-yellow lg:hidden overflow-hidden'
    >
      <div className={`${menuStyle} mb-2 h-xs:mb-4 h-s:mb-8`}>
        {links.slice(0, 4).map((link, index) => (
          <NavLink
            href={link.href}
            name={link.name}
            activePath={pathname}
            order={index + 1}
            setStatus={setStatus}
            target={link.target}
            key={`mobile-menu-${index}`}
          />
        ))}
      </div>

      <div className={menuStyle}>
        <m.div variants={animation.variants.linkAnimatiion} custom={5}>
          <span className='text-sm text-primary-orange text-right font-calistoga'>
            Order Frozen
          </span>
        </m.div>

        {links.slice(4).map((link, index) => (
          <NavLink
            href={link.href}
            name={link.name}
            activePath={pathname}
            order={index + 6}
            setStatus={setStatus}
            target={link.target}
            key={`mobile-menu-${index + 6}`}
          />
        ))}
      </div>

      <ImageDecoration />
    </m.div>
  );
}

/* 
  NAVLINK
*/

function NavLink({
  href,
  activePath,
  setStatus,
  order,
  target,
  name,
}: {
  href: string;
  activePath: string;
  name: string;
  order: number;
  target?: string;
  setStatus: Dispatch<SetStateAction<boolean>>;
}) {
  const active =
    href === activePath ||
    (activePath.includes('franchise') && name === 'franchise')
      ? 'text-primary-orange'
      : 'text-slate-950';

  return (
    <m.div
      variants={animation.variants.linkAnimatiion}
      custom={order}
      className={`${active} font-calistoga text-2xl capitalize`}
    >
      <Link href={href} onClick={() => setStatus(false)} target={target}>
        <span>{name}</span>
      </Link>
    </m.div>
  );
}

/* 
  IMAGE DECORATION
*/
function ImageDecoration() {
  return (
    <>
      <m.div
        aria-hidden='true'
        className='-translate-x-1/3 -translate-y-1/4 relative z-50'
        variants={animation.variants.imgAnimation}
      >
        <Image
          src='/assets/decoration/nav%20decoration.png'
          alt=''
          width={334}
          height={334}
        />
      </m.div>

      <div
        className='absolute top-0 left-0 w-full aspect-[860/206]'
        aria-hidden='true'
      >
        <Image
          priority
          src='/assets/decoration/mobile top decoration yellow.png'
          fill={true}
          sizes='(max-width: 1024px) 100vw'
          alt=''
        />
      </div>

      <div
        className='absolute bottom-0 left-0 w-full aspect-[860/206]'
        aria-hidden='true'
      >
        <Image
          priority
          src='/assets/decoration/mobile bottom decoration yellow.png'
          fill={true}
          sizes='(max-width: 1024px) 100vw'
          alt=''
        />
      </div>
    </>
  );
}
