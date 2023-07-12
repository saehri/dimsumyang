type Props = {
  main: string;
  secondary?: string | undefined;
};

export default function PageTagline({main, secondary}: Props) {
  return (
    <>
      <h1 className='text-xl font-calistoga text-primary-orange text-center md:text-4xl mb-2 lg:mb-3'>
        {main}
      </h1>

      {secondary && (
        <h2 className='font-outfit text-center mx-auto text-slate-950 text-sm md:text-base mb-10 lg:mb-20 px-4'>
          {secondary}
        </h2>
      )}
    </>
  );
}
