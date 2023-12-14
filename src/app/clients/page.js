import Link from 'next/link';

function ClientsPage() {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'manu', name: 'Manuel' },
  ];
  return (
    <div>
      <h1 className="h-1/2 mt-8 flex justify-center items-center text-6xl">
        The Clients Page
      </h1>
      <ul className="h-1/2 flex flex-col justify-center items-center text-2xl">
        {clients.map((client) => (
          <li className="mt-6 hover:text-red-600" key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
