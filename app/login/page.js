"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginInfo((prevState) => ({ ...prevState, [name]: value }));

    if (value == "") {
      setErrors((prevState) => ({
        ...prevState,
        [name]: `${
          name.charAt(0).toUpperCase() + name.slice(1)
        } field is required`,
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        [name]: "",
      }));
    }

    if (name == "email" && value.length > 0) {
      if (!value.match(emailRegEx)) {
        setErrors((prevState) => ({
          ...prevState,
          email: "Invalid email address",
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          email: "",
        }));
      }
    }
  };

  const isValid = () => {
    for (let info in loginInfo) {
      if (loginInfo(info) == "") {
        setErrors((prevState) => ({
          ...prevState,
          [info]: `${
            info.charAt(0).toUpperCase() + info.slice(1)
          } field is required`,
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          [info]: "",
        }));
      }
    }

    // incomplete

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid()) {
      setIsSubmitted(true);
    }
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
          {errors.email && <p>{errors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInput}
            className={styles.input}
          />
          {errors.password && <p>{errors.password}</p>}
          <button type="submit" className={styles.submit}>
            Login
          </button>
          <span>
            <Link href="/forgot-password" className={styles.highlight}>
              Forgot password?
            </Link>
          </span>
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
