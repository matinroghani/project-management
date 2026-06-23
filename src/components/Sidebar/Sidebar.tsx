import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { logout } from "../../services/authService";

export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogot = () => {
    logout();
    navigate("/login");
  };
  return (
    <aside className={styles.sidebar}>

      <nav className={styles.navigation}>
        <NavLink to="/" className={styles.link}>
          <span className={styles.icon}>📊</span>
          <span className={styles.label}>داشبورد</span>
        </NavLink>

        <NavLink to="/projects" className={styles.link}>
          <span className={styles.icon}>📁</span>
          <span className={styles.label}>پروژه‌ها</span>
        </NavLink>

        <NavLink to="/kanban" className={styles.link}>
          <span className={styles.icon}>📌</span>
          <span className={styles.label}>کانبان</span>
        </NavLink>

        <NavLink to="/members" className={styles.link}>
          <span className={styles.icon}>👥</span>
          <span className={styles.label}>اعضا</span>
        </NavLink>

        <NavLink to="/notifications" className={styles.link}>
          <span className={styles.icon}>🔔</span>
          <span className={styles.label}>اعلان‌ها</span>
        </NavLink>

        <NavLink to="/profile" className={styles.link}>
          <span className={styles.icon}>👤</span>
          <span className={styles.label}>پروفایل</span>
        </NavLink>

        <NavLink to="/settings" className={styles.link}>
          <span className={styles.icon}>⚙️</span>
          <span className={styles.label}>تنظیمات</span>
        </NavLink>
        <button onClick={handleLogot} className={`${styles.link} ${styles.logoutButton}`}>
          <span className={styles.icon}>⏻</span>
          <span className={styles.label}>خروج</span>
        </button>
      </nav>

      <div className={styles.sidebarFooter}>
        <div className={styles.userCard}>
          <div className={styles.avatar}>م</div>

          <div>
            <p className={styles.userName}>Matin Roghani</p>

            <span className={styles.userRole}>Project Manager</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
