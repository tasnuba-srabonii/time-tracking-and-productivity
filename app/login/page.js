"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__header}>
          <p className={styles.content__headline}>Welcome!</p>
          <p className={styles.content__tagline}>Login to Ticker</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
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
          <button type="submit" className={styles.submit}>
            Login
          </button>
          <Link href="/forgot-password" className={styles.highlight}>
            Forgot password?
          </Link>
        </form>
        <div className={styles.content__header}>
          <p>
            Don't have an account?{" "}
            <Link href="/sign-up" className={styles.highlight}>
              Sign up
            </Link>
          </p>
        </div>
        {isSubmitted && (
          <div>
            <p>{loginInfo?.email}</p>
            <p>{loginInfo?.password}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
