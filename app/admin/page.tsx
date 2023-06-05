import Link from 'next/link';

export default function AdminPage() {
  return (
    <>
      <main className='bg-white p-6' style={{gridColumn: '3/9'}}>
        <header>
          <h1 className='text-slate-900 text-2xl font-bold'>Welcome, Dimsum</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            suscipit.
          </p>
        </header>

        <Link prefetch={true} href='/admin/menu'>
          Go to menu editor
        </Link>
      </main>

      <Rightbar />
    </>
  );
}

function Rightbar() {
  return (
    <div
      className='p-6 border-l border-slate-200 bg-white'
      style={{gridColumn: '9/-1'}}
    ></div>
  );
}
