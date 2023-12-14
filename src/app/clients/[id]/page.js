'use client';
import { usePathname, useRouter } from 'next/navigation';

function ClientProjects() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="h-1/2  text-6xl">The Projects of a Client</h1>
      <button
        className="mt-6 w-[50%] bg-slate-400 h-10 justify-center items-center"
        onClick={() => router.push('/clients/max/project1')}
      >
        Load Project 1
      </button>
    </div>
  );
}

export default ClientProjects;
