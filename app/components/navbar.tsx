import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./dojo-logo.png";
export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Dojo-helpdesk-logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Dojo helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
