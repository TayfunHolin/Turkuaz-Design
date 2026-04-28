import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.badge}>Design System v0.1</div>
      <h1 className={styles.title}>Sabah Finans<br />Design System</h1>
      <p className={styles.desc}>
        Sabah Finans ürünleri için tasarım dili, component kütüphanesi ve kullanım rehberi.
      </p>

      <div className={styles.grid}>
        <Link href="/foundations/colors" className={styles.card}>
          <div className={styles.cardIcon} style={{ background: "var(--color-primary-50)" }}>
            <span style={{ display: "flex", gap: 3 }}>
              {["#0C1033","#292F89","#5560C4"].map(c => (
                <span key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
              ))}
            </span>
          </div>
          <h3 className={styles.cardTitle}>Colors</h3>
          <p className={styles.cardDesc}>Tam renk paleti, semantic tokenlar ve transparent scale.</p>
        </Link>

        <Link href="/foundations/typography" className={styles.card}>
          <div className={styles.cardIcon} style={{ background: "var(--color-primary-50)" }}>
            <span style={{ fontWeight: 800, fontSize: 22, color: "var(--color-primary-500)", letterSpacing: "-0.04em" }}>Aa</span>
          </div>
          <h3 className={styles.cardTitle}>Typography</h3>
          <p className={styles.cardDesc}>Font scale, weight ve line-height sistemi.</p>
        </Link>

        <Link href="/components/button" className={styles.card}>
          <div className={styles.cardIcon} style={{ background: "var(--color-primary-50)" }}>
            <span style={{ background: "var(--color-primary-500)", color: "#fff", borderRadius: 999, padding: "5px 10px", fontSize: 12, fontWeight: 600 }}>Btn</span>
          </div>
          <h3 className={styles.cardTitle}>Button</h3>
          <p className={styles.cardDesc}>7 variant, 5 boyut, tam state coverage.</p>
        </Link>

        <Link href="/components/avatar" className={styles.card}>
          <div className={styles.cardIcon} style={{ background: "var(--color-primary-50)" }}>
            <span style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--color-secondary-100)", color: "var(--color-secondary-600)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 }}>FS</span>
          </div>
          <h3 className={styles.cardTitle}>Avatar</h3>
          <p className={styles.cardDesc}>Image ve initials modu, 5 boyut.</p>
        </Link>

        <Link href="/components/badge" className={styles.card}>
          <div className={styles.cardIcon} style={{ background: "var(--color-primary-50)" }}>
            <span style={{ background: "var(--color-success-50)", color: "var(--color-success-700)", borderRadius: 999, padding: "3px 8px", fontSize: 11, fontWeight: 600 }}>Active</span>
          </div>
          <h3 className={styles.cardTitle}>Badge</h3>
          <p className={styles.cardDesc}>6 semantic variant, dot desteği.</p>
        </Link>

        <Link href="/components/input" className={styles.card}>
          <div className={styles.cardIcon} style={{ background: "var(--color-primary-50)" }}>
            <span style={{ border: "1.5px solid var(--color-neutral-300)", borderRadius: 6, padding: "4px 7px", fontSize: 11, color: "var(--color-neutral-400)" }}>Text...</span>
          </div>
          <h3 className={styles.cardTitle}>Input</h3>
          <p className={styles.cardDesc}>Label, hint, error ve icon slot desteği.</p>
        </Link>
      </div>
    </div>
  );
}
