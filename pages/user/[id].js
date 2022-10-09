function SingleUser({ user }) {
    return (
        <div>
            <h1>Single User</h1>
            <h1>Id: {user.id}</h1>
            <h4> {user.name}</h4>
        </div>
    );
}

export async function getStaticProps(ctx) {

    const { params } = ctx;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const users = await res.json();

    return {
        props: {
            data: users
        }
    }
}

// pages/user/[id].js

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await res.json();

    const paths = users.map((user) => {
        return {
            params: { id: `${user.id}` }
        }
    });
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export default SingleUser;