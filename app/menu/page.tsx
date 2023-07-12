import CommonLayout from '@/components/layout/common-layout';
import MobileTopImageDecoration from '@/components/layout/mob-top-img-deco';
import OrderProductButtons from '@/components/buttons/order-product';
import MenuCard from '@/components/cards/menu-card';
import PageTagline from '@/components/small/tagline';
import TopImage from '../../components/small/top-image';

export default function MenuPage() {
  return (
    <CommonLayout>
      <main className='bg-primary-white min-h-screen pt-16 lg:pt-28 relative'>
        <div className='relative z-20'>
          <TopImage src='menu' />

          <PageTagline
            main='Kami Tahu Apa Yang Kamu Mau'
            secondary='Nikmati 30+ Varian Menu Dimsum Halal Yang Lezat'
          />

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
