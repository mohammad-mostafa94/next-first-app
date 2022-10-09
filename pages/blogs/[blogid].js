import { useRouter } from 'next/router';


function BlogDetails() {
const router = useRouter();

const blogID = router.query.blogid;

  return (
    <div><h1>Blog id:{blogID}</h1></div>
  )
}

export default BlogDetails;