import { auth, googleAuthProvider } from "@/lib/firebase";
import Image from "next/image";
import { useState } from "react";
import styles from "./signInForm.module.css";

export const SignInForm = () => {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h2 className={styles.title}>Login</h2>
      <label className={styles.label}>
        Username
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          required
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          className={styles.input}
        />
      </label>
      <button className={styles.button} type="submit">
        Log in
      </button>
      <button className="btn-google" onClick={signInWithGoogle}>
        <Image width={30} height={30} src={"/google.png"} alt="google" />
        Sign in with Google
      </button>
    </form>
  );
};
