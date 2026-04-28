import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PreviewBox } from "@/docs-ui/Section";
import styles from "./typography.module.css";

const scale = [
  { name: "5xl",  size: "3rem",     weight: 800, sample: "Display" },
  { name: "4xl",  size: "2.25rem",  weight: 800, sample: "Heading 1" },
  { name: "3xl",  size: "1.875rem", weight: 700, sample: "Heading 2" },
  { name: "2xl",  size: "1.5rem",   weight: 700, sample: "Heading 3" },
  { name: "xl",   size: "1.25rem",  weight: 600, sample: "Heading 4" },
  { name: "lg",   size: "1.125rem", weight: 500, sample: "Large body" },
  { name: "base", size: "1rem",     weight: 400, sample: "Body" },
  { name: "sm",   size: "0.875rem", weight: 400, sample: "Small" },
  { name: "xs",   size: "0.75rem",  weight: 400, sample: "Caption" },
];

const weights = [
  { name: "Regular",  value: 400 },
  { name: "Medium",   value: 500 },
  { name: "Semibold", value: 600 },
  { name: "Bold",     value: 700 },
  { name: "Extrabold",value: 800 },
];

export default function TypographyPage() {
  return (
    <>
      <PageHeader
        category="Foundations → Typography"
        title="Typography"
        description="Inter font ailesi. 9 boyut adımı, 5 weight ve standart line-height değerleri."
      />

      <Section title="Type Scale">
        <div className={styles.scaleList}>
          {scale.map((item) => (
            <div key={item.name} className={styles.scaleRow}>
              <div className={styles.scaleMeta}>
                <span className={styles.scaleName}>{item.name}</span>
                <span className={styles.scaleSize}>{item.size}</span>
              </div>
              <span
                className={styles.scaleSample}
                style={{ fontSize: item.size, fontWeight: item.weight }}
              >
                {item.sample}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Font Weights">
        <PreviewBox>
          <div className={styles.weightList}>
            {weights.map((w) => (
              <div key={w.value} className={styles.weightRow}>
                <span className={styles.weightLabel}>{w.name} ({w.value})</span>
                <span style={{ fontWeight: w.value, fontSize: "1.25rem" }}>
                  Sabah Finans Design System
                </span>
              </div>
            ))}
          </div>
        </PreviewBox>
      </Section>

      <Section title="Font Family">
        <PreviewBox>
          <div className={styles.fontFamily}>
            <p className={styles.fontName}>Inter — Sans-serif</p>
            <p className={styles.fontSample}>AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p>
            <p className={styles.fontSample}>0123456789 !@#$%^&*()</p>
          </div>
        </PreviewBox>
      </Section>
    </>
  );
}
