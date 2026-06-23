import styles from "./FormSkeleton.module.css";

export default function FormSkeleton() {
  return (
    <div className={styles.form}>
      <div className={styles.title}></div>

      <div className={styles.input}></div>
      <div className={styles.input}></div>
      <div className={styles.textarea}></div>

      <div className={styles.button}></div>
    </div>
  );
}