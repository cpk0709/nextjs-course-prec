import Link from "next/link";

const ClientPage = () => {
  const clients = [
    { id: "cpk", name: "Phil Choi" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
        {/* <li>
          <Link href="/clients/cpk">Phil Choi</Link>
        </li>
        <li>
          <Link href="/clients/manu">Manuel</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default ClientPage;
