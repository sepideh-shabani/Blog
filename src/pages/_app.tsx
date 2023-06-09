import Navbar from "@/components/Navbar";
import { UserContext } from "@/lib/context";
import { auth, firestore } from "@/lib/firebase";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState<null | string>(null);

  useEffect(() => {
    // let unSubscribe;
    const user = auth.currentUser;
    if (user?.email) {
      //   // console.log("🚀 ~ file: _app.tsx:17 ~ useEffect ~ user:", user)
      //   const ref = firestore.collection("users").doc(user.uid);
      //   // console.log("🚀 ~ file: _app.tsx:18 ~ useEffect ~ ref:", ref)
      //   unSubscribe = ref.onSnapshot((doc) => {
      //     // console.log("🚀 ~ file: _app.tsx:19 ~ unSubscribe=ref.onSnapshot ~ doc:", doc)
      setUsername(user?.email);
      //   });
    } else {
      setUsername(null);
    }

    // return unSubscribe;
  }, [user]);

  return (
    <UserContext.Provider value={{ user, username: username }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}
