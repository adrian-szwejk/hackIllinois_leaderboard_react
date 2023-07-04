"use client"; // This is a client component 👈🏽

import Link from "next/link";
import { useEffect, useState } from "react";

export default async function Home() {
    const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
        // HackIllinois API Link https://api.hackillinois.org/profile/leaderboard/
        const query = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await query.json();
        console.log('response from API: ',response);
        setUsers(response);
    }
    getData();
  },[])
  return (
    <div>
      <h1 className = "text-4xl">Leaderboard</h1>
      <Link href="https://github.com/adrian-szwejk/hackIllinois_leaderboard_react">Link to Github Repo </Link>
      <h3 className = "text-2xl">Top 10 Users</h3>
      {
        users && users.length && users.map((users:any) => {
            return (
                <>
                {/* <h2 className = "text-xl">{users['profiles'][index]['discord']} {users['profiles'][index]['points']}</h2> */}
                <h4>
                    {users.name}
                </h4>
                </>
            )
        })
      }
    </div>
  );
}