import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import styles from "./styles.module.scss";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
