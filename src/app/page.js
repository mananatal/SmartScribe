'use client'

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
export default function Home() {

  const {user}=useUser();
  const createUser=useMutation(api.user.createUser);

  const checkUser=async ()=>{
    await createUser({
      email:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName,
      imageUrl:user?.imageUrl
    });
  }

  useEffect(()=>{
    user && checkUser();
  },[user])



  return (
    <div>
      Hello World
    </div>
  );
}
