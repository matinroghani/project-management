import styles from "./EmptyState.module.css";

type EmptyStateProps = {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
};

export default function EmptyState({
  icon,
  title,
  description,
  buttonText,
}: EmptyStateProps) {
  return (
    <section className={styles.emptyState}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>

      <h2 className={styles.title}>
        {title}
      </h2>

      <p className={styles.description}>
        {description}
      </p>

      <button className={styles.actionButton}>
        {buttonText}
      </button>
    </section>
  );
}