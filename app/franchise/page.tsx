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

          <div className='pt-4 pb-24 bg-deco-bottom lg:bg-deco-bottom bg-contain bg-no-repeat bg-bottom'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ea soluta tempora porro optio error possimus corporis doloremque
            iusto in, voluptates magnam, quo id rerum totam eveniet eaque
            voluptatibus velit ullam quis. Nulla iusto doloribus, quisquam vitae
            alias laborum? Harum quo nemo libero neque iure? Culpa repellat,
            inventore quod rerum dolorum nemo corrupti tempora pariatur
            architecto quam iure alias iste? Debitis omnis officiis cum neque
            sed molestiae, asperiores quis libero praesentium facere dicta,
            numquam eum consequatur aliquid hic molestias nesciunt reprehenderit
            inventore velit, tempore mollitia? Totam quis fugiat eveniet saepe
            error minus officiis? Voluptate pariatur nulla cupiditate quo
            suscipit, itaque iusto sapiente, tenetur rem, repellat nobis.
            Blanditiis, quos obcaecati aspernatur officiis vel eum possimus
            ipsa, itaque quia odio labore quasi perferendis laboriosam magnam
            distinctio ea totam sunt, iusto asperiores sapiente praesentium
            commodi voluptatibus ducimus ipsum. Officiis accusantium distinctio
            maxime at, dolorum quia eaque voluptas, incidunt ullam libero
            possimus reiciendis deleniti aliquid modi. Est, aspernatur? Nam
            magni consequuntur necessitatibus voluptates. Consectetur
            praesentium soluta iure asperiores quos dolor expedita voluptatum
            iusto laborum amet. Ipsa non quasi, quod beatae eligendi laborum
            animi? Esse, dolore. Unde deserunt libero eligendi molestias maiores
            quis corrupti magnam, dolorum odit dicta tempore iste. Asperiores
            veniam in atque iusto?
          </div>
        </div>

        <MobileTopImageDecoration type='franchise' />
      </main>
    </CommonLayout>
  );
}
