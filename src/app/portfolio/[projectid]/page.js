'use client';

import { useParams, usePathname, useSearchParams } from 'next/navigation';

function DynamicPage() {
  const path = usePathname();
  const query = useParams();

  console.log(query);

  console.log(path);

  return (
    <div className="h-screen flex justify-center items-center text-6xl">
      This is Dynamic Page
    </div>
  );
}

export default DynamicPage;
