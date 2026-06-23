import { Outlet } from "react-router-dom";

import styles from "./DashBoardLayouts.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.content}>
        <Header />

        <main className={styles.main}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}