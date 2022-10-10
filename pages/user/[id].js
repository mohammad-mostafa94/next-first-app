import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function SingleUser() {

    const {id} = useRouter().query;
    const [user , setUser] = useState([]);

    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((data) =>setUser(data))
    }, [id]);

    return (
        <div>
            <h1>Single User</h1>
            <h1>Id: {user.id}</h1>
            <h4> {user.name}</h4>
            <hr />
        </div>
    );
}

// export async function getStaticProps(ctx) {

//     const { params } = ctx;
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
//     const user = await res.json();

//     return {
//         props: {
//             user: user
//         }
//     }
// }

// pages/user/[id].js

// export async function getStaticPaths() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     const users = await res.json();

//     const paths = users.map((user) => {
//         return {
//             params: { id: `${user.id}` }
//         }
//     });
//     return {
//         paths,
//         fallback: false, // can also be true or 'blocking'
//     }
// }

export default SingleUser;