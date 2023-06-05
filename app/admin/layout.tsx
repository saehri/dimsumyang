import Sidebar from '@/components/dashboard/sidebar';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div
      style={{background: 'rgba(0, 0, 0, .3)'}}
      className='backdrop-blur-2xl h-screen relative overflow-hidden'
    >
      <div className='grid grid-cols-[repeat(12,1fr)] shadow-2xl h-[calc(100vh-2rem)] rounded-3xl m-4 overflow-hidden'>
        <Sidebar />
        {children}
      </div>

      <div className='w-[800px] h-[800px] rounded-full bg-orange-200 blur-[200px] absolute z-[-1] -top-[200px] -left-[200px]'></div>
      <div className='w-[800px] h-[800px] rounded-full bg-purple-400 blur-[200px] absolute z-[-1] -bottom-[200px] -right-[200px]'></div>
    </div>
  );
}
