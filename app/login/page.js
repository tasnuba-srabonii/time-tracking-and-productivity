"use client";
import { useEffect, useState } from "react";
import styles from "../forms.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EMAIL_REG_EX } from "@/utils/constants";

const Login = () => {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setLoginInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setLoginInfo({ email: "", password: "" });
    router.push("/dashboard");
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
            value={loginInfo.email}
            onChange={handleInput}
            className={styles.input}
          />
          {errors?.email && <p className={styles.errors}>{errors?.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginInfo.password}
            onChange={handleInput}
            className={styles.input}
          />
          {errors?.password && (
            <p className={styles.errors}>{errors?.password}</p>
          )}
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
            Do not have an account?{" "}
            <Link href="/sign-up" className={styles.highlight}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
