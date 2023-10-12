// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router"
import { useEffect } from "react";

// const inter = Inter({ subsets: ['latin'] })

export default function SignIn() {
  const router = useRouter();
  const { status }  = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      console.log("No JWT");
      console.log(status);
      void signIn();
    }
  }, [status, router]);

  return (
    <>
      <div>
          <h3>Index Page</h3>
          <button onClick={() => signOut()}>Logout</button>
      </div>
    </>
  )
}
