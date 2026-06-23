import styles from "./ErrorState.module.css";

type ErrorStateProps = {
  title: string;
  description: string;
  buttonText: string;
};

export default function ErrorState({
  title,
  description,
  buttonText,
}: ErrorStateProps) {
  return (
    <section className={styles.errorState}>
      <div className={styles.errorIcon}>
        ⚠️
      </div>

      <h2 className={styles.title}>
        {title}
      </h2>

      <p className={styles.description}>
        {description}
      </p>

      <button className={styles.retryButton}>
        {buttonText}
      </button>
    </section>
  );
}