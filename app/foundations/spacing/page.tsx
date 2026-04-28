import { PageHeader } from "@/docs-ui/PageHeader";
import { Section } from "@/docs-ui/Section";
import styles from "./spacing.module.css";

const scale = [
  { token: "space-1",  value: "4px"  },
  { token: "space-2",  value: "8px"  },
  { token: "space-3",  value: "12px" },
  { token: "space-4",  value: "16px" },
  { token: "space-5",  value: "20px" },
  { token: "space-6",  value: "24px" },
  { token: "space-8",  value: "32px" },
  { token: "space-10", value: "40px" },
  { token: "space-12", value: "48px" },
  { token: "space-16", value: "64px" },
];

const radii = [
  { token: "radius-sm",   value: "4px",     sample: 4   },
  { token: "radius-base", value: "6px",     sample: 6   },
  { token: "radius-md",   value: "8px",     sample: 8   },
  { token: "radius-lg",   value: "12px",    sample: 12  },
  { token: "radius-xl",   value: "16px",    sample: 16  },
  { token: "radius-full", value: "9999px",  sample: 9999 },
];

export default function SpacingPage() {
  return (
    <>
      <PageHeader
        category="Foundations → Spacing"
        title="Spacing"
        description="4px tabanlı spacing sistemi ve border-radius tokenları."
      />

      <Section title="Spacing Scale" description="Tüm boşluklar 4px çarpanı üzerine kuruludur.">
        <div className={styles.list}>
          {scale.map((s) => (
            <div key={s.token} className={styles.row}>
              <code className={styles.token}>{`--${s.token}`}</code>
              <div className={styles.bar} style={{ width: s.value, minWidth: 4 }} />
              <span className={styles.value}>{s.value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Border Radius">
        <div className={styles.radiiGrid}>
          {radii.map((r) => (
            <div key={r.token} className={styles.radiusCard}>
              <div
                className={styles.radiusBox}
                style={{ borderRadius: Math.min(r.sample, 32) }}
              />
              <code className={styles.token}>{`--${r.token}`}</code>
              <span className={styles.value}>{r.value}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
