export default function MenuCard() {
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
