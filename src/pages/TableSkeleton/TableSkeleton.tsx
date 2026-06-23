import styles from "./TableSkeleton.module.css";

export default function TableSkeleton() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}></div>

      {[1, 2, 3, 4, 5].map((row) => (
        <div
          key={row}
          className={styles.row}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ))}
    </div>
  );
}