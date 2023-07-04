"use client"; // This is a client component 👈🏽

import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {
    const apiUrl = 'https://api.hackillinois.org/profile/leaderboard/'
    //I could just set the limit to 10, 25, or 50 but I wanted to make it more dynamic (not sure how)
    const apiUrlLimit10 = 'https://api.hackillinois.org/profile/leaderboard/?limit=10'
    const apiUrlLimit25 = 'https://api.hackillinois.org/profile/leaderboard/?limit=25'
    const apiUrlLimit50 = 'https://api.hackillinois.org/profile/leaderboard/?limit=50'
    const [users, setUsers] = useState([]);
    let displayData
    function getData() {
      fetch(apiUrl).then((response) => response.json()).then((responseData) => {
        
        displayData = responseData['profiles'].map(function(user:any, index:any){
          return (
            <p key = {user.id} className="border border-slate-300 text-slate-300 px-2 py-1 mt-4 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">{index+1}. {user.discord} {user.points}</p>
            
          )
        })
        console.log(responseData)
        setUsers(displayData)
      })  
    }
  useEffect(() => {
    
    getData();
  },[])
  //You put the array after the useEffect function to make it run one "first mount" or when it first launches
  return (
    <div>
      <h1 className = "text-4xl mb-4">Leaderboard</h1>
      <Link href="https://github.com/adrian-szwejk/hackIllinois_leaderboard_react" className="border border-slate-200 text-slate-200 px-2 py-1 mb-4 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Link to Github Repo </Link>
      
      <h3 className = "text-2xl mt-4">Top Users</h3>
      {users}
    </div>
  );
}