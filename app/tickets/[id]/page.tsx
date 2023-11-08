import { notFound } from "next/navigation";

interface ticketType {
  id: String;
  priority: String;
  title: String;
  body: String;
}

export async function generateStaticParams() {
  const res = await fetch(`http://localhost:4000/tickets`);
  const tickets: ticketType[] = await res.json();

  return tickets.map((ticket: ticketType) => {
    id: ticket.id;
  });
}

console.log("hELLO WORLD");
async function getTicket(id: string) {
  console.log(id);
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function TicketDetails({
  params,
}: {
  params: { id: string };
}) {
  console.log("h");
  const ticket = await getTicket(params.id);
  console.log(ticket);
  return (
    <div>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </div>
  );
}
