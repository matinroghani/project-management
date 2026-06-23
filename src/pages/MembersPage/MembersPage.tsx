import styles from "./MembersPage.module.css";

export default function MembersPage() {
  return (
    <div className={styles.membersPage}>
      <div className={styles.pageContainer}>
        <header className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>
              اعضای تیم
            </h1>

            <p className={styles.pageDescription}>
              مدیریت اعضا و نقش‌های پروژه
            </p>
          </div>

          <button className={styles.addMemberButton}>
            افزودن عضو
          </button>
        </header>

        <section className={styles.tableCard}>
          <div className={styles.tableWrapper}>
            <table className={styles.membersTable}>
              <thead>
                <tr>
                  <th>نام</th>
                  <th>ایمیل</th>
                  <th>نقش</th>
                  <th>وضعیت</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div className={styles.memberInfo}>
                      <div className={styles.memberAvatar}>
                        م
                      </div>

                      <span className={styles.memberName}>
                        محمد رضایی
                      </span>
                    </div>
                  </td>

                  <td>m.rezaei@gmail.com</td>

                  <td>
                    <span className={styles.roleBadge}>
                      Frontend Developer
                    </span>
                  </td>

                  <td>
                    <span className={styles.activeStatus}>
                      فعال
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className={styles.memberInfo}>
                      <div className={styles.memberAvatar}>
                        س
                      </div>

                      <span className={styles.memberName}>
                        سارا محمدی
                      </span>
                    </div>
                  </td>

                  <td>sara@gmail.com</td>

                  <td>
                    <span className={styles.roleBadge}>
                      Project Manager
                    </span>
                  </td>

                  <td>
                    <span className={styles.activeStatus}>
                      فعال
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className={styles.memberInfo}>
                      <div className={styles.memberAvatar}>
                        ا
                      </div>

                      <span className={styles.memberName}>
                        امیر احمدی
                      </span>
                    </div>
                  </td>

                  <td>amir@gmail.com</td>

                  <td>
                    <span className={styles.roleBadge}>
                      UI Designer
                    </span>
                  </td>

                  <td>
                    <span className={styles.pendingStatus}>
                      غیرفعال
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}