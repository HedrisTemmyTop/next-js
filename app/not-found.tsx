import Link from "next/link";

const NotFound = () => {
  return (
    <main>
      <h2>There was a problem.</h2>
      <p>We could not find a page you were looking for</p>
   <p>Go back to</p>   <Link href="/">Dashboard</Link>
    </main>
  );
};

export default NotFound;
