"use client";
import { useState } from "react";
import styles from "../forms.module.scss";
import Link from "next/link";

const ResetPassword = () => {
  const [passwordInfo, setPasswordInfo] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPasswordInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__header}>
          <p className={styles.content__headline}>Reset Password</p>
          <p className={styles.content__tagline}>Enter a new password</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="password"
            name="newpassword"
            placeholder="New password"
            onChange={handleInput}
            className={styles.input}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm new password"
            onChange={handleInput}
            className={styles.input}
          />
          <button type="submit" className={styles.submit}>
            Submit
          </button>
        </form>
        <div className={styles.content__header}>
          <Link href="/login" className={styles.highlight}>
            Back to Login
          </Link>
        </div>
        {isSubmitted && (
          <div>
            <p>{passwordInfo?.newpassword}</p>
            <p>{passwordInfo?.confirmPassword}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
