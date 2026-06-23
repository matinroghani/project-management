import styles from "./NotificationsPage.module.css";

export default function NotificationsPage() {
  return (
      <div className={`${styles.pageContainer} ${styles.notificationsPage}`}>
        <header className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>
              اعلان‌ها
            </h1>

            <p className={styles.pageDescription}>
              آخرین فعالیت‌ها و بروزرسانی‌های سیستم
            </p>
          </div>
        </header>

        <section className={styles.notificationsCard}>
          <div className={styles.notificationsList}>
            <article className={styles.notificationItem}>
              <div className={styles.notificationIcon}>
                ✓
              </div>

              <div className={styles.notificationContent}>
                <p className={styles.notificationText}>
                  تسک «طراحی داشبورد» با موفقیت تکمیل شد.
                </p>

                <span className={styles.notificationTime}>
                  ۵ دقیقه پیش
                </span>
              </div>
            </article>

            <article className={styles.notificationItem}>
              <div className={styles.notificationIcon}>
                📁
              </div>

              <div className={styles.notificationContent}>
                <p className={styles.notificationText}>
                  پروژه جدیدی با نام «سیستم مدیریت منابع»
                  ایجاد شد.
                </p>

                <span className={styles.notificationTime}>
                  ۲ ساعت پیش
                </span>
              </div>
            </article>

            <article className={styles.notificationItem}>
              <div className={styles.notificationIcon}>
                💬
              </div>

              <div className={styles.notificationContent}>
                <p className={styles.notificationText}>
                  یک کامنت جدید روی تسک شما ثبت شد.
                </p>

                <span className={styles.notificationTime}>
                  ۴ ساعت پیش
                </span>
              </div>
            </article>

            <article className={styles.notificationItem}>
              <div className={styles.notificationIcon}>
                👤
              </div>

              <div className={styles.notificationContent}>
                <p className={styles.notificationText}>
                  عضو جدیدی به پروژه اضافه شد.
                </p>

                <span className={styles.notificationTime}>
                  دیروز
                </span>
              </div>
            </article>

            <article className={styles.notificationItem}>
              <div className={styles.notificationIcon}>
                🔔
              </div>

              <div className={styles.notificationContent}>
                <p className={styles.notificationText}>
                  مهلت تحویل یک تسک در حال نزدیک شدن است.
                </p>

                <span className={styles.notificationTime}>
                  ۲ روز پیش
                </span>
              </div>
            </article>
          </div>
        </section>
      </div>
  );
}