import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to my blog</h1>
      <Link href="/extra">Extra</Link>
    </>
  );
}
