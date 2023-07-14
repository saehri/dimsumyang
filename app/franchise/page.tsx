import CommonLayout from '@/components/layout/common-layout';
import MobileTopImageDecoration from '@/components/layout/mob-top-img-deco';
import FranchiseSlider from '@/components/sliders/franchise-slider';

export default function FranchisePage() {
  console.log('parent rendered');

  return (
    <CommonLayout>
      <main className='bg-primary-white min-h-screen pt-28 lg:pt-48 relative'>
        <div className='relative z-20'>
          <h1 className='text-xl lg:text-5xl font-calistoga text-primary-orange text-center mb-2 lg:mb-3 mx-4'>
            Mari begabung menjadi
            <br />
            mitra Dimsum Yang
          </h1>
          <h2 className='text-slate-950 mx-auto font-outfit text-sm lg:text-2xl text-center max-w-sm lg:max-w-3xl mb-6 lg:mb-20  px-4'>
            Dengan sistem franchise lepas sangat menguntungkan mitra, karena
            tidak ada royalty fee dan biaya perpanjangan franchise. Semua
            keuntungan 100% menjadi milik mitra.
          </h2>

          <FranchiseSlider />

          {/* <div className='bg-primary-yellow pt-4 pb-24 bg-deco-bottom-yellow lg:bg-deco-bottom-yellow bg-contain bg-no-repeat bg-bottom'>
            Franchise
          </div> */}
        </div>

        <MobileTopImageDecoration type='franchise' />
      </main>
    </CommonLayout>
  );
}
