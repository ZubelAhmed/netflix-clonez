
import { NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { getSession, signOut } from "next-auth/react"

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
        <h1 className="text-4xl text-green-500">Netflix Clone... </h1>
        <button className="h-10 w-full bg-white" onClick={()=> signOut()}>Logout!</button>
        </>
  );
}
