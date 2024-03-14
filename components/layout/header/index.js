import Image from "next/image";
import userIcon from "@/public/icons/user.png";
import logoutIcon from "@/public/icons/logout.svg";
import resetIcon from "@/public/icons/reset.svg";
import styles from "./styles.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.user__img} src={userIcon} height={35} width={35} alt="User" />
        <div className={styles.user__dropdown}>
          <div className={styles.user__dropdown__header}>
            <Image src={userIcon} height={35} width={35} alt="User" />
            <div>
              <p>username</p>
              <p className={styles.user__dropdown__header__email}>
                user.email@gmail.com
              </p>
            </div>
          </div>
          <div className={styles.user__dropdown__border}></div>
          <div className={styles.user__dropdown__content}>
            <div className={styles.user__dropdown__pair}>
              <Image
                src={resetIcon}
                height={25}
                width={25}
                alt="Reset Password"
              />
              <Link href='/reset-password' >Reset password</Link>
            </div>
          </div>
          <div className={styles.user__dropdown__bottom}>
            <div className={styles.user__dropdown__border}></div>
            <div className={styles.user__dropdown__pair}>
              <Image src={logoutIcon} height={25} width={25} alt="Logout" />
              <Link href='/login' >Log out</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
