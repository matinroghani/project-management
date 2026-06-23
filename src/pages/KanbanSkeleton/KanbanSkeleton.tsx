import styles from "./KanbanSkeleton.module.css";

export default function KanbanSkeleton() {
  return (
    <section className={styles.board}>
      {[1, 2, 3, 4].map((column) => (
        <div
          key={column}
          className={styles.column}
        >
          <div className={styles.columnHeader}></div>

          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className={styles.taskCard}
            >
              <div className={styles.taskTitle}></div>

              <div className={styles.taskText}></div>

              <div className={styles.taskTextSmall}></div>

              <div className={styles.footer}></div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}