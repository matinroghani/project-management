import styles from "./ProfilePage.module.css";

export default function ProfilePage() {
  return (
      <div className={`${styles.pageContainer} ${styles.profilePage}`}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>
            پروفایل کاربری
          </h1>

          <p className={styles.pageDescription}>
            مدیریت اطلاعات شخصی و تنظیمات حساب
          </p>
        </header>

        <section className={styles.profileLayout}>
          <div className={styles.profileCard}>
            <div className={styles.avatarSection}>
              <div className={styles.profileAvatar}>
                م
              </div>

              <h2 className={styles.userName}>
                محمد رضایی
              </h2>

              <p className={styles.userRole}>
                Frontend Developer
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <div className={styles.infoCard}>
              <h2 className={styles.sectionTitle}>
                اطلاعات کاربر
              </h2>

              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>
                    نام کامل
                  </span>

                  <span className={styles.infoValue}>
                    محمد رضایی
                  </span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>
                    ایمیل
                  </span>

                  <span className={styles.infoValue}>
                    mohammad@gmail.com
                  </span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>
                    نقش
                  </span>

                  <span className={styles.infoValue}>
                    Frontend Developer
                  </span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>
                    شماره تماس
                  </span>

                  <span className={styles.infoValue}>
                    +98 912 000 0000
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.settingsCard}>
              <h2 className={styles.sectionTitle}>
                تنظیمات حساب
              </h2>

              <div className={styles.settingsList}>
                <div className={styles.settingItem}>
                  <div>
                    <h4 className={styles.settingTitle}>
                      اعلان‌های ایمیلی
                    </h4>

                    <p className={styles.settingDescription}>
                      دریافت بروزرسانی‌ها از طریق ایمیل
                    </p>
                  </div>

                  <div className={styles.toggle}></div>
                </div>

                <div className={styles.settingItem}>
                  <div>
                    <h4 className={styles.settingTitle}>
                      حالت دو مرحله‌ای
                    </h4>

                    <p className={styles.settingDescription}>
                      افزایش امنیت حساب کاربری
                    </p>
                  </div>

                  <div className={styles.toggle}></div>
                </div>

                <div className={styles.settingItem}>
                  <div>
                    <h4 className={styles.settingTitle}>
                      نمایش وضعیت آنلاین
                    </h4>

                    <p className={styles.settingDescription}>
                      نمایش وضعیت فعالیت به سایر اعضا
                    </p>
                  </div>

                  <div className={styles.toggle}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}