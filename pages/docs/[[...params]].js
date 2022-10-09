import { useRouter } from 'next/router';
import React from 'react'

function Document() {
    const router = useRouter();
    const params = router.query.params || [];
    if (params.length ===2) {
        return <h1>This page for {params[0]} and {params[1]}</h1>
    }
    if (params.length ===1) {
        return <h1>This page for {params[0]}</h1>
    }
  return (
    <div>This is a Document page</div>
  )
}

export default Document;