import styles from "./SettingsPage.module.css";

export default function SettingsPage() {
  return (
      <div className={`${styles.pageContainer} ${styles.settingsPage}`}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>
            تنظیمات
          </h1>

          <p className={styles.pageDescription}>
            مدیریت تنظیمات سیستم و حساب کاربری
          </p>
        </header>

        <div className={styles.settingsLayout}>
          <section className={styles.settingsCard}>
            <h2 className={styles.sectionTitle}>
              تنظیمات عمومی
            </h2>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                نام سازمان
              </label>

              <input
                type="text"
                className={styles.input}
                placeholder="Project Manager"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                زبان سیستم
              </label>

              <select className={styles.select}>
                <option>فارسی</option>
                <option>English</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                منطقه زمانی
              </label>

              <select className={styles.select}>
                <option>Asia/Tehran</option>
              </select>
            </div>
          </section>

          <section className={styles.settingsCard}>
            <h2 className={styles.sectionTitle}>
              تغییر رمز عبور
            </h2>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                رمز فعلی
              </label>

              <input
                type="password"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                رمز جدید
              </label>

              <input
                type="password"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                تکرار رمز جدید
              </label>

              <input
                type="password"
                className={styles.input}
              />
            </div>
          </section>

          <section className={styles.settingsCard}>
            <h2 className={styles.sectionTitle}>
              تنظیمات اعلان
            </h2>

            <div className={styles.settingRow}>
              <div>
                <h4 className={styles.settingTitle}>
                  اعلان ایمیلی
                </h4>

                <p className={styles.settingDescription}>
                  دریافت بروزرسانی‌ها از طریق ایمیل
                </p>
              </div>

              <div className={styles.toggle}></div>
            </div>

            <div className={styles.settingRow}>
              <div>
                <h4 className={styles.settingTitle}>
                  اعلان مرورگر
                </h4>

                <p className={styles.settingDescription}>
                  دریافت اعلان در مرورگر
                </p>
              </div>

              <div className={styles.toggle}></div>
            </div>

            <div className={styles.settingRow}>
              <div>
                <h4 className={styles.settingTitle}>
                  اعلان فعالیت پروژه
                </h4>

                <p className={styles.settingDescription}>
                  تغییرات پروژه را دریافت کن
                </p>
              </div>

              <div className={styles.toggle}></div>
            </div>
          </section>

          <button className={styles.saveButton}>
            ذخیره تنظیمات
          </button>
        </div>
      </div>
  );
}