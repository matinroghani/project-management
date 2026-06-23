import styles from "./Footer.module.css"
export default function Footer() {
  return (
    <footer className={styles.footer}>
  <div className={styles.footerLeft}>
    © 2026 ProjectFlow
  </div>

  <div className={styles.footerLinks}>
    <a href="#">راهنما</a>
    <a href="#">مستندات</a>
    <a href="#">پشتیبانی</a>
    <a href="#">حریم خصوصی</a>
  </div>
</footer>
  )
}
