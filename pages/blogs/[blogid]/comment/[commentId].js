import { useRouter } from 'next/router';
import React from 'react';

function CommentDetails() {
    const router = useRouter();
    const {blogid,commentId} = router.query;
  return (
    <div><h1>Blog id: {blogid} and comment id: {commentId}</h1></div>
  )
}

export default CommentDetails;