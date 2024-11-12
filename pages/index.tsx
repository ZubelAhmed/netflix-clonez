

import { countReset } from "console";
import useCurrentUser from "hooks/userCurrentUser";
import { NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react"
import Navbar from "@/components/Navbar";
export async function getServerSideProps(context:NextPageContext) {
const session =await getSession(context); 

if(!session) {

return {
redirect:{
destination: '/auth',
parmanent:false,
}
}
}
return {
props: {}
}
}

export default function Home() {

 
  return (
        <>
        <Navbar/>
        </>
  );
}

// const { data:user } = useCurrentUser();

// <h1 className="text-4xl text-green-500">Netflix Clone... </h1>
//         <p className="text-white">Logged in as : {user?.name}</p>
//         <button className="h-10 w-full bg-white" onClick={()=> signOut()}>Logout!</button>