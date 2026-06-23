import StatCard from "../../components/StatCards/StatCard";
import styles from "./MainDashboardPage.module.css";
import { getDashboardStats } from "../../utils/dashboardStats";

export default function MainDashboardPage() {
  const stats = getDashboardStats();

  return (
    <div className={styles.dashboardPage}>
      <section className={styles.mainContent}>
        <header className={styles.topNavbar}>
          <div className={styles.pageInfo}>
            <h1 className={styles.pageTitle}>داشبورد</h1>
            <p className={styles.pageSubtitle}>
              نمای کلی وضعیت پروژه‌ها و فعالیت‌ها
            </p>
          </div>

          <div className={styles.profileSection}>
            <div className={styles.profileAvatar}>م</div>
          </div>
        </header>

        <section className={styles.statsGrid}>
          <StatCard label="تعداد پروژه‌ها" value={stats.totalProjects} />
          <StatCard label="تعداد تسک‌ها" value={stats.totalTasks} />
          <StatCard label="تسک‌های تکمیل شده" value={stats.completedTasks} />
          <StatCard label="پروژه‌های فعال" value={stats.totalProjects} />
        </section>

        <section className={styles.contentGrid}>
          <div className={styles.contentCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>پروژه‌های اخیر</h3>
            </div>

            <div className={styles.projectList}>
              <div className={styles.projectItem}>
                <h4 className={styles.projectName}>سیستم مدیریت پروژه</h4>
                <span className={styles.projectMeta}>18 تسک فعال</span>
              </div>

              <div className={styles.projectItem}>
                <h4 className={styles.projectName}>داشبورد فروش</h4>
                <span className={styles.projectMeta}>12 تسک فعال</span>
              </div>

              <div className={styles.projectItem}>
                <h4 className={styles.projectName}>اپلیکیشن موبایل</h4>
                <span className={styles.projectMeta}>25 تسک فعال</span>
              </div>
            </div>
          </div>

          <div className={styles.contentCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>فعالیت‌های اخیر</h3>
            </div>

            <div className={styles.activityList}>
              <div className={styles.activityItem}>
                <p className={styles.activityText}>یک تسک جدید ایجاد شد</p>
                <span className={styles.activityTime}>۱۰ دقیقه پیش</span>
              </div>

              <div className={styles.activityItem}>
                <p className={styles.activityText}>پروژه بروزرسانی شد</p>
                <span className={styles.activityTime}>۱ ساعت پیش</span>
              </div>

              <div className={styles.activityItem}>
                <p className={styles.activityText}>یک تسک تکمیل شد</p>
                <span className={styles.activityTime}>۳ ساعت پیش</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
