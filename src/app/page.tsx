"use client";

import { useState, useEffect } from "react";
import { auth } from "./lib/firebase";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, User } from "firebase/auth";   


type UserType = User | null;

const Home = () => {
  const [user, setUser] = useState<UserType>(null); 
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); 
      } else {
        router.push("/login"); 
      }
    });

    return () => unsubscribe(); 
  }, [router]);

  return (
    <div>
      <h1>Page d&apos;accueil</h1> {}
      {user ? (
        <div>
          <p>Bienvenue, {user.displayName}</p>
          <button onClick={() => signOut(auth)}>Se déconnecter</button>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default Home;
