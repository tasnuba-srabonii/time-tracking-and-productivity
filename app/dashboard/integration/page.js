"use client";
import styles from "../../forms.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";

const Integration = () => {
  const { data: session, status } = useSession();

  return (
    <div style={{ marginLeft: "50px" }}>
      {status == "unauthenticated" ? (
        <button
          className={styles.submit}
          onClick={() => {
            signIn("github");
          }}
        >
          Enable Github
        </button>
      ) : (
        <button
          className={styles.revert}
          onClick={() => {
            signOut();
          }}
        >
          Disable Github
        </button>
      )}

      {status == "authenticated" && (
        <div>
          <div>
            <h4>User Info :</h4>
            <p>{session?.user?.name}</p>
            <p>{session?.user?.email}</p>
          </div>
          <div>
            <h4>Session expires :</h4>
            <p>{session?.expires}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Integration;
