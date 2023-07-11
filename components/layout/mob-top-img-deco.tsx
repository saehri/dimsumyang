export default function MobileTopImageDecoration({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className='lg:hidden absolute top-0 left-0 w-full overflow-hidden pt-[calc((471/430)*100%)]'
      aria-hidden='true'
    >
      <div
        className='absolute z-10 top-0 left-0 w-full h-full max-h-[430px]'
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, .55) 0%, #F8EFE8 91.26%)',
        }}
      ></div>

      <div className='absolute z-0 top-0 left-0 w-full h-full max-h-[430px]'>
        {children}
      </div>
    </div>
  );
}
