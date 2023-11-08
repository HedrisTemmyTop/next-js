import Link from "next/link";

const NotFound = () => {
  return (
    <main>
      <h2>There was a problem.</h2>
      <p>We could not find a page you were looking for</p>
      <p>Go back to all </p> <Link href="/tickets">tickets</Link>
    </main>
  );
};

export default NotFound;
