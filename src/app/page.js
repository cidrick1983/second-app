import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="h-40 flex justify-center items-center text-6xl">
        This is Home Page
      </h1>
      <ul className="h-1/2 flex flex-col justify-center items-center text-lg list-none">
        <li className="text-2xl px-5 py- 3 hover:text-red-700">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className="text-2xl px-5 py- 3 hover:text-red-700">
          <Link href="/clients">Client</Link>
        </li>
        <li className="text-2xl px-5 py- 3 hover:text-red-700">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="text-2xl px-5 py- 3 hover:text-red-700">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
