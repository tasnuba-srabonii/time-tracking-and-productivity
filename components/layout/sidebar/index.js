import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Logo from "@/public/icons/logo.png";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Link href="/dashboard">
        <div className={styles.header}>
          <Image src={Logo} height={30} width={30} alt="Ticker Logo" />
          <h1>Ticker</h1>
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.content__item}>
          <Link href="/dashboard">Dashboard</Link>
        </div>
        <div className={styles.content__item}>
          <Link href="/dashboard/projects">Projects</Link>
        </div>
        <div className={styles.content__item}>
          <Link href="/integration">Integration</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
