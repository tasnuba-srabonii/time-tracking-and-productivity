"use client";
import { useState } from "react";
import styles from "../forms.module.scss";
import Link from "next/link";

const SignUp = () => {
  const [signupInfo, setSignupInfo] = useState({});

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSignupInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__header}>
          <p className={styles.content__headline}>Sign up</p>
          {/* <p className={styles.content__tagline}>Login to Ticker</p> */}
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleInput}
            className={styles.input}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleInput}
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInput}
            className={styles.input}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter Password"
            onChange={handleInput}
            className={styles.input}
          />
          <button type="submit" className={styles.submit}>
            Register
          </button>
        </form>
        <div className={styles.content__header}>
          <p>
            Already have an account?{" "}
            <Link href="/login" className={styles.highlight}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
