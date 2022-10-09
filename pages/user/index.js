import Link from "next/link";

function user({users}) {
    return (
        <div>
            <h1>Total users  {users.length}</h1>
            <hr />
            {users.map(user =>{
                return (
                    <>
                <Link href = {`user/${user.id}`}>
                    <h2>{user.name}</h2>
                </Link>
                    </>
                )
            })}
        </div>
    );
}

export async function getStaticProps(ctx){
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await res.json();;

    return {
        props:{
            users:data,
        }
    }
}

export default user;