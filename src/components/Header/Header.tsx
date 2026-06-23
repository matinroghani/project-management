import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
  <div className={styles.logoSection}>
    <div className={styles.logo}>PF</div>

    <div>
      <h1 className={styles.systemName}>ProjectFlow</h1>
      <span className={styles.systemDescription}>
        سیستم مدیریت پروژه
      </span>
    </div>
  </div>

  <div className={styles.searchSection}>
    <input
      type="text"
      placeholder="جستجو در پروژه‌ها و تسک‌ها..."
      className={styles.searchInput}
    />
  </div>

  <div className={styles.actionsSection}>
    <Link to="/create-task" className={styles.createNewTask}>
      ایجاد تسک
    </Link>

    <button className={styles.iconButton}>
      🔔
    </button>

    <button className={styles.iconButton}>
      💬
    </button>

    <div className={styles.userProfile}>
      <div className={styles.avatar}>م</div>

      <div>
        <div className={styles.userName}>
          --hover
          Matin Roghani
        </div>

        <div className={styles.userRole}>
          Project Manager
        </div>
      </div>
    </div>
  </div>
</header>
  )
}
