"use client";
import { useEffect, useState } from "react";
import styles from "../forms.module.scss";
import Link from "next/link";
import { EMAIL_REG_EX } from "@/utils/constants";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [disable, setDisable] = useState(false);

  const handleInput = (event) => {
    setDisable(false);
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
      if (!value.match(EMAIL_REG_EX)) {
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
    for (let key in loginInfo) {
      if (loginInfo[key] == "") {
        setErrors((prevState) => ({
          ...prevState,
          [key]: `${
            key.charAt(0).toUpperCase() + key.slice(1)
          } field is required`,
        }));
        return false;
      } else {
        setErrors((prevState) => ({
          ...prevState,
          [key]: "",
        }));
      }
    }
    for (let key in errors) {
      if (errors[key] != "") {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (event) => {
    setDisable(true);
    event.preventDefault();
    if (isValid()) {
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    console.log("isSubmitted: ", isSubmitted);
  }, [isSubmitted]);

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
          {errors?.email && <p className={styles.errors}>{errors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInput}
            className={styles.input}
          />
          {errors?.password && (
            <p className={styles.errors}>{errors.password}</p>
          )}
          <button type="submit" className={styles.submit} disabled={disable}>
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
