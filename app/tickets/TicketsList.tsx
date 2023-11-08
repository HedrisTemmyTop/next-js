import Link from "next/link";
import React from "react";

async function getTickets() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 30,
    },
  });

  return res.json();
}
type ticketType = {
  id: String;
  priority: String;
  title: String;
  body: String;
};

export default async function TicketsList() {
  const tickets = await getTickets();
  console.log("hello ");
  return (
    <>
      {tickets.map((ticket: ticketType) => (
        <div key={`${ticket.id}`} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets</p>
      )}
    </>
  );
}
