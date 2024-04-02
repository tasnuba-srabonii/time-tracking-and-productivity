"use client";
import { useState } from "react";
import styles from "../../forms.module.scss";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Integration = () => {
  const { session, status } = useSession();

  console.log("session : ", session);

  console.log("process.env.GITHUB_ID : ", process.env.NEXT_PUBLIC_GITHUB_ID);
  return (
    <button
      className={styles.submit}
      style={{ marginLeft: "50px" }}
      onClick={(e) => {
        e.preventDefault();
        signIn("github");
      }}
    >
      Enable Github
    </button>
  );
};

export default Integration;
