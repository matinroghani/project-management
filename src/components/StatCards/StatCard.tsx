import styles from "./StatsCard.module.css";

interface StatCardProps {
  label: string;
  value: number;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <article className={styles.statCard}>
      <span className={styles.statLabel}> {label}</span>
      <h2 className={styles.statValue}>{value}</h2>
    </article>
  );
}
