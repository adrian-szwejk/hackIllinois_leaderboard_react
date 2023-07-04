"use client"; // This is a client component 👈🏽

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos'
  // HackIllinois API Link https://api.hackillinois.org/profile/leaderboard/
    const [users, setUsers] = useState([]);
    let displayData
    function getData() {
      fetch(apiUrl).then((response) => response.json()).then((responseData) => {
        
        displayData = responseData.map(function(user:any){
          return (
            <p key = {user.id}>{user.title}</p>
          )
        })
        console.log(responseData)
        setUsers(displayData)
      })  
    }
  useEffect(() => {
    
    getData();
  },[])
  //You put the array after the function to make it run one "first mount" or when it first launches
  return (
    <div>
      <h1 className = "text-4xl">Leaderboard</h1>
      <Link href="https://github.com/adrian-szwejk/hackIllinois_leaderboard_react">Link to Github Repo </Link>
      <h3 className = "text-2xl">Top 10 Users</h3>
      
      {users}
    </div>
  );
}