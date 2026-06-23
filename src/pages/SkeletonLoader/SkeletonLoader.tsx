import styles from "./SkeletonLoader.module.css";

export default function SkeletonLoader() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonHeader}>
        <div className={styles.title}></div>
        <div className={styles.button}></div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}></div>
        <div className={styles.statCard}></div>
        <div className={styles.statCard}></div>
        <div className={styles.statCard}></div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.largeCard}></div>
        <div className={styles.largeCard}></div>
      </div>
    </div>
  );
}