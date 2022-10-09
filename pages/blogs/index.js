import Link from 'next/link';
import React from 'react'

function Blogs({blogid=7}) {
  return (
    <div>
        <Link href="/blogs/1">
                <a>
                    <h1>Blog no- 1</h1>
                </a>
        </Link>
        <Link href={`/blogs/2`}>
                <a>
                    <h1>Blog no 2</h1>
                </a>
        </Link>
        <Link href={`/blogs/${blogid}`}>
                <a>
                    <h1>Blog any no or page number 7</h1>
                </a>
        </Link>

    </div>
  )
}

export default Blogs;