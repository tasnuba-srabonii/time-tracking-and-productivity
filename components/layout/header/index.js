import Image from "next/image";
import userIcon from "@/public/icons/user.png";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src={userIcon} height={35} width={35} alt="User" />
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
          <div className={styles.user__dropdown__bottom}>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
