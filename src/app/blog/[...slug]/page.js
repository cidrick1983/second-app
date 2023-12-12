'use client';
import { useParams, usePathname } from 'next/navigation';

function CatchAll() {
  const path = usePathname();
  const query = useParams();

  console.log(path);
  console.log(query);
  return (
    <div>
      <h1 className="h-screen flex justify-center items-center text-6xl">
        This is a Catch All Path
      </h1>
    </div>
  );
}

export default CatchAll;
