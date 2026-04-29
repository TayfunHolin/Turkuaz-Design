import React from "react";
import styles from "./Section.module.css";
import { Toast } from "@/src/components/Toast/Toast";

interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {description && <p className={styles.sectionDesc}>{description}</p>}
      </div>
      {children}
    </section>
  );
}

interface PreviewBoxProps {
  children: React.ReactNode;
  dark?: boolean;
  noPad?: boolean;
}

export function PreviewBox({ children, dark = false, noPad = false }: PreviewBoxProps) {
  return (
    <div
      className={[
        styles.preview,
        dark ? styles.dark : "",
        noPad ? styles.noPad : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

/* ─── Anatomy ─── */
interface AnatomyPart {
  name: string;
  description: string;
}

export function AnatomyList({ parts }: { parts: AnatomyPart[] }) {
  return (
    <ol className={styles.anatomyList}>
      {parts.map((p, i) => (
        <li key={i} className={styles.anatomyItem}>
          <span className={styles.anatomyNum}>{i + 1}</span>
          <span className={styles.anatomyName}>{p.name}</span>
          <span className={styles.anatomyDesc}>{p.description}</span>
        </li>
      ))}
    </ol>
  );
}

/* ─── Do / Don't ─── */
interface UsageCard {
  type: "do" | "dont";
  title: string;
  description: string;
}

export function DosDonts({ items }: { items: UsageCard[] }) {
  const dos   = items.filter((i) => i.type === "do");
  const donts = items.filter((i) => i.type === "dont");

  return (
    <div className={styles.ddGrid}>
      <div className={styles.ddCol}>
        <p className={styles.ddHeading} data-type="do">Yapılacaklar</p>
        {dos.map((item, i) => (
          <Toast key={i} type="success" title={item.title} description={item.description} />
        ))}
      </div>
      <div className={styles.ddCol}>
        <p className={styles.ddHeading} data-type="dont">Yapılmayacaklar</p>
        {donts.map((item, i) => (
          <Toast key={i} type="error" title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}

/* ─── Props Table ─── */
interface PropsTableRow {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

export function PropsTable({ rows }: { rows: PropsTableRow[] }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.prop}>
              <td><code className={styles.code}>{r.prop}</code></td>
              <td><code className={styles.code}>{r.type}</code></td>
              <td><code className={styles.code}>{r.default ?? "—"}</code></td>
              <td>{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
