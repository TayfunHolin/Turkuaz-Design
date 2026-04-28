import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  category: string;
  title: string;
  description?: string;
}

export function PageHeader({ category, title, description }: PageHeaderProps) {
  return (
    <div className={styles.header}>
      <p className={styles.breadcrumb}>{category}</p>
      <h1 className={styles.title}>{title}</h1>
      {description && <p className={styles.description}>{description}</p>}
      <hr className={styles.divider} />
    </div>
  );
}
