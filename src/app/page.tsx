"use client";

import { useState, useEffect } from "react";
import { auth } from "./lib/firebase"; 
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Home = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Utilisateur connecté
      } else {
        router.push("/login"); // Redirige si non connecté
      }
    });

    return () => unsubscribe(); // Nettoyer l'abonnement
  }, [router]);

  return (
    <div>
      <h1>Page d'accueil</h1>
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
