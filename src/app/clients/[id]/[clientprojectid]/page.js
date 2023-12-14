'use client';

import { useParams, usePathname, useSearchParams } from 'next/navigation';

function SelectedClientProject() {
  const path = usePathname();
  const query = useSearchParams();
  const params = useParams();

  console.log(params);
  console.log(path);

  return (
    <div>
      <h1 className="h-1/2 mt-6 flex justify-center items-center text-3xl">
        Project Page for a Specific Project for a Selected Client
      </h1>
    </div>
  );
}

export default SelectedClientProject;
