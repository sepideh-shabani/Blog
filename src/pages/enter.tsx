import { SignInForm } from "@/components/signInForm";
import { auth, googleAuthProvider } from "@/lib/firebase";
import Image from "next/image";
import { useState } from "react";

function EnterPage({}) {
  const user = null;
  const username = null;

  return (
    <div>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

export default EnterPage;

function SignInButton() {
  return <SignInForm />;
}

function SignOutButton() {
  return (
    <button className="btn-google" onClick={() => auth.signOut()}>
      Sign Out
    </button>
  );
}

function UsernameForm() {
  return <button className="btn-google">Username Form</button>;
}
