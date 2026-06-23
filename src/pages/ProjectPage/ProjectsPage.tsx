import { Link } from "react-router-dom";
import styles from "./ProjectsPage.module.css";

export default function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>پروژه‌ها</h1>
          <p className={styles.pageSubtitle}>
            مدیریت و مشاهده تمامی پروژه‌ها
          </p>
        </div>

        <Link to="/create-project" className={styles.createButton}>
          ایجاد پروژه جدید
        </Link>
      </header>

      <section className={styles.toolbar}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="جستجوی پروژه..."
            className={styles.searchInput}
          />
        </div>

        <div className={styles.filterSection}>
          <button className={styles.filterButton}>
            همه پروژه‌ها
          </button>

          <button className={styles.filterButton}>
            فعال
          </button>

          <button className={styles.filterButton}>
            تکمیل شده
          </button>
        </div>
      </section>

      <section className={styles.projectsGrid}>
        <article className={styles.projectCard}>
          <h3 className={styles.projectTitle}>
            سیستم مدیریت پروژه
          </h3>

          <p className={styles.projectDescription}>
            طراحی و توسعه داشبورد مدیریت پروژه سازمانی
          </p>

          <div className={styles.projectInfo}>
            <span className={styles.infoItem}>۲۴ تسک</span>
            <span className={styles.infoItem}>۷۵٪ پیشرفت</span>
          </div>

          <span className={styles.projectDate}>
            ۱۴۰۵/۰۳/۰۱
          </span>
        </article>

        <article className={styles.projectCard}>
          <h3 className={styles.projectTitle}>
            داشبورد فروش
          </h3>

          <p className={styles.projectDescription}>
            تحلیل و گزارش‌گیری داده‌های فروش
          </p>

          <div className={styles.projectInfo}>
            <span className={styles.infoItem}>۱۸ تسک</span>
            <span className={styles.infoItem}>۶۲٪ پیشرفت</span>
          </div>

          <span className={styles.projectDate}>
            ۱۴۰۵/۰۲/۱۵
          </span>
        </article>

        <article className={styles.projectCard}>
          <h3 className={styles.projectTitle}>
            اپلیکیشن موبایل
          </h3>

          <p className={styles.projectDescription}>
            توسعه نسخه موبایل سیستم مدیریت پروژه
          </p>

          <div className={styles.projectInfo}>
            <span className={styles.infoItem}>۳۱ تسک</span>
            <span className={styles.infoItem}>۴۸٪ پیشرفت</span>
          </div>

          <span className={styles.projectDate}>
            ۱۴۰۵/۰۱/۲۸
          </span>
        </article>
      </section>
    </div>
  );
}