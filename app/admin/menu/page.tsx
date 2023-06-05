import Link from 'next/link';

export default function MenuContent() {
  return (
    <div>
      <h1>Menu Page</h1>
      <Link href='/admin'>Go to admin page</Link>
    </div>
  );
}
