import Link from "next/link";

export default function Home() {
  return (
    <div >
      <h1>Bismillah Hirrahmanir Rahim.</h1>
      
      <Link href="/about">
        <a>
          <h1>Go to about page</h1>
        </a>
      </Link>
    </div>
  )
}
