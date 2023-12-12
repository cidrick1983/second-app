import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="h-screen flex justify-center items-center text-6xl">
        This is Home Page
      </h1>
      <ul className="h-screen flex flex-col justify-center items-center text-lg">
        <li className="list-none">
          <Link href="portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="clients">Client</Link>
        </li>
        <li>
          <Link href="blog">Blog</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
      </ul>
    </div>
  );
}
