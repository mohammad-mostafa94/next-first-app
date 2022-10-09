import Link from "next/link";

function PostList({ data }) {
    console.log("post data=", data);
    return (
        <div>
            <h1>Total posts{data.length}</h1>
            {data.map(post => {
                return (
                    <div key = {post.id}>
                        <h1>{post.id}</h1>
                        <Link href={`/post/${post.id}`}>
                        <a>
                        <h4>{post.title}</h4>

                        </a>
                        </Link>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                )
            })}
        </div>
    );
}

export async function getStaticProps(ctx) { // ctx means context.
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return {
        props: {
            data: data,
        }
    }
}

export default PostList;