import styles from "./ProjectDetailsPage.module.css";

export default function ProjectDetailsPage() {
  return (
    <div className={styles.projectDetailsPage}>
      <div className={styles.pageContainer}>
        <header className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>
              سیستم مدیریت پروژه
            </h1>

            <p className={styles.pageDescription}>
              اطلاعات کامل پروژه و وضعیت فعلی آن
            </p>
          </div>
        </header>

        <section className={styles.topSection}>
          <div className={styles.projectInfoCard}>
            <h2 className={styles.sectionTitle}>
              اطلاعات پروژه
            </h2>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  وضعیت
                </span>

                <span className={styles.infoValue}>
                  فعال
                </span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  اولویت
                </span>

                <span className={styles.infoValue}>
                  زیاد
                </span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  تاریخ ایجاد
                </span>

                <span className={styles.infoValue}>
                  ۱۴۰۵/۰۳/۰۱
                </span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>
                  تعداد تسک‌ها
                </span>

                <span className={styles.infoValue}>
                  ۲۴
                </span>
              </div>
            </div>
          </div>

          <div className={styles.progressCard}>
            <h2 className={styles.sectionTitle}>
              درصد پیشرفت
            </h2>

            <div className={styles.progressWrapper}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} />
              </div>

              <span className={styles.progressValue}>
                ۷۵٪
              </span>
            </div>
          </div>
        </section>

        <section className={styles.bottomSection}>
          <div className={styles.membersCard}>
            <h2 className={styles.sectionTitle}>
              اعضای پروژه
            </h2>

            <div className={styles.membersList}>
              <div className={styles.memberItem}>
                <div className={styles.memberAvatar}>
                  م
                </div>

                <div>
                  <h4 className={styles.memberName}>
                    محمد رضایی
                  </h4>

                  <span className={styles.memberRole}>
                    Frontend Developer
                  </span>
                </div>
              </div>

              <div className={styles.memberItem}>
                <div className={styles.memberAvatar}>
                  ا
                </div>

                <div>
                  <h4 className={styles.memberName}>
                    امیر احمدی
                  </h4>

                  <span className={styles.memberRole}>
                    UI Designer
                  </span>
                </div>
              </div>

              <div className={styles.memberItem}>
                <div className={styles.memberAvatar}>
                  س
                </div>

                <div>
                  <h4 className={styles.memberName}>
                    سارا محمدی
                  </h4>

                  <span className={styles.memberRole}>
                    Project Manager
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.statisticsCard}>
            <h2 className={styles.sectionTitle}>
              آمار پروژه
            </h2>

            <div className={styles.statisticsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>
                  تسک‌های فعال
                </span>

                <h3 className={styles.statValue}>
                  ۱۲
                </h3>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statLabel}>
                  تسک‌های تکمیل شده
                </span>

                <h3 className={styles.statValue}>
                  ۱۸
                </h3>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statLabel}>
                  اعضا
                </span>

                <h3 className={styles.statValue}>
                  ۶
                </h3>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statLabel}>
                  فایل‌ها
                </span>

                <h3 className={styles.statValue}>
                  ۳۴
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}