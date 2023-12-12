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
      <h1 className="h-screen flex justify-center items-center text-6xl">
        Selected Project
      </h1>
    </div>
  );
}

export default SelectedClientProject;
