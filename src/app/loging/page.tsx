// src/app/login/page.tsx
"use client";

import { useState } from "react";
import { auth} // Importez l'auth Firebase
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      router.push("/"); // Redirige vers la page d'accueil après la connexion
    } catch (error) {
      console.error("Erreur de connexion avec Google : ", error);
    }
  };

  return (
    <div>
      <h1>Se connecter avec Google</h1>
      <button onClick={handleLogin}>Se connecter</button>
      {user && <p>Bienvenue, {user.displayName}</p>}
    </div>
  );
};

export default Login;
