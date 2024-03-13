import Sidebar from "@/components/layout/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
