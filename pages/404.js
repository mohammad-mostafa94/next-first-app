import Link from 'next/link';
import React from 'react'

function Error() {
  return (
    <>
    <h1>This is an error page , please go to Home page</h1>
    <Link href="/">
        <a>
            <h1>Home</h1>
        </a>
    </Link>
    </>
  )
}

export default Error;