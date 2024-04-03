"use client";
import { useState } from "react";
import styles from "../forms.module.scss";
import Link from "next/link";

const ForgotPassword = () => {
  const [emailInfo, setEmailInfo] = useState({});

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEmailInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__header}>
          <p className={styles.content__headline}>Forgot Password?</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p>
            Enter your email and we will send you a link to reset your password
          </p>
          <input
            type="text"
            name="email"
            placeholder="Email"
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
      </div>
    </div>
  );
};

export default ForgotPassword;
