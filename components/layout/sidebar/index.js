import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src={Logo} height={30} width={30} alt="Ticker Logo" />
        <h1>Ticker</h1>
      </div>
      <div className={styles.content}>
        <div>
          <Link href="/">Dashboard</Link>
        </div>
        <div>
          <Link href="/dashboard/projects">Projects</Link>
        </div>
        <div>
          <Link href="/integration">Integration</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
