import { useRouter } from 'next/router';


function BlogDetails() {
const router = useRouter();

const blogID = router.query.blogid;

  return (
    <div>Blog id {blogID}</div>
  )
}

export default BlogDetails;