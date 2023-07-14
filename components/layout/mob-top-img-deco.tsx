import Image from 'next/image';

export default function MobileTopImageDecoration({
  type = 'menu',
}: {
  type?: string;
}) {
  return (
    <div
      className={`absolute top-0 left-0 w-full overflow-hidden ${
        type !== 'menu'
          ? 'pt-[calc((41/43)*100%)]'
          : 'pt-[calc((27/43)*100%)] lg:pt-[calc((541/1449)*100%)]'
      }`}
      aria-hidden='true'
    >
      <div className='absolute z-0 top-0 left-0 w-full h-full'>
        <Image
          className='object-cover lg:hidden'
          src={`/assets/decoration/mobile ${type} page top bg.png`}
          fill={true}
          sizes='(max-width: 1024px) 1024px'
          alt=''
          priority
        />

        <Image
          className='object-cover hidden lg:block'
          src={`/assets/decoration/desktop ${type} page top bg.png`}
          fill={true}
          sizes='(min-width: 1024px) 2889px'
          alt=''
          priority
        />
      </div>
    </div>
  );
}
