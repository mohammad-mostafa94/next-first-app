function Post({ data}) {
    return (
        <div>
            <h1>Single post</h1>
            <h1>Id: { data.id }</h1>
            <h4> { data.title }</h4>
            <p> { data.body }</p>
        </div>
    );
}

export async function getStaticProps(ctx) {

    const { params } = ctx;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.json();

    return {
        props: {
            data: data
        }
    }
}

// pages/post/[id].js

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();

    const paths = data.map((post) => {
        return {
            params: { id: `${post.id}`}
        }
    });
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export default Post;