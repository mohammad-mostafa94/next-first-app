import Link from "next/link";
import { useEffect, useState } from "react";

function user() {

    const [users , setUser] = useState([]);

    useEffect(() => {
    // fetch("/api/users")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) =>setUser(data))
      
    }, []);
    
    return (
        <div>
            <h1>Total users  {users.length}</h1>
            <hr />
            {users.map(user => {
                return (
                    <>
                        <Link href={`user/${user.id}`} passHref>
                            <h2>{user.name}</h2>
                        </Link>
                        <hr />
                    </>
                )
            })}
        </div>
    );
}

// export async function getStaticProps(ctx) {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();;

//     return {
//         props: {
//             users: data,
//         }
//     }
// }

export default user;