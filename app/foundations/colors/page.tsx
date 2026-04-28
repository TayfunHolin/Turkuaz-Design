import { PageHeader } from "@/docs-ui/PageHeader";
import { Section } from "@/docs-ui/Section";
import styles from "./colors.module.css";

const palettes = [
  { name: "primary",   shades: ["50","100","200","300","400","500","600","700","800","900"] },
  { name: "secondary", shades: ["50","100","200","300","400","500","600","700","800","900"] },
  { name: "success",   shades: ["50","100","200","300","400","500","600","700","800","900"] },
  { name: "warning",   shades: ["50","100","200","300","400","500","600","700","800","900"] },
  { name: "error",     shades: ["50","100","200","300","400","500","600","700","800","900"] },
  { name: "info",      shades: ["50","100","200","300","400","500","600","700","800","900"] },
];

const neutralShades = ["50","100","200","300","400","500","600","700","800","900","1000"];

export default function ColorsPage() {
  return (
    <>
      <PageHeader
        category="Foundations → Colors"
        title="Colors"
        description="CSS custom properties olarak tanımlanmış tam renk paleti. Tüm değerler design token'larından türetilir."
      />

      {palettes.map((p) => (
        <Section key={p.name} title={p.name.charAt(0).toUpperCase() + p.name.slice(1)}>
          <div className={styles.swatchRow}>
            {p.shades.map((shade) => (
              <div key={shade} className={styles.swatch}>
                <div
                  className={styles.swatchColor}
                  style={{ background: `var(--color-${p.name}-${shade})` }}
                />
                <span className={styles.swatchLabel}>{shade}</span>
                <span className={styles.swatchVar}>{`--color-${p.name}-${shade}`}</span>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <Section title="Neutral">
        <div className={styles.swatchRow}>
          <div className={styles.swatch}>
            <div className={styles.swatchColor} style={{ background: "#000", border: "none" }} />
            <span className={styles.swatchLabel}>black</span>
          </div>
          {neutralShades.map((shade) => (
            <div key={shade} className={styles.swatch}>
              <div
                className={styles.swatchColor}
                style={{ background: `var(--color-neutral-${shade})` }}
              />
              <span className={styles.swatchLabel}>{shade}</span>
            </div>
          ))}
          <div className={styles.swatch}>
            <div className={styles.swatchColor} style={{ background: "#fff" }} />
            <span className={styles.swatchLabel}>white</span>
          </div>
        </div>
      </Section>

      <Section title="Transparent — White" description="Koyu yüzeylerde kullanım için.">
        <div className={styles.transparentGrid} style={{ background: "var(--color-primary-900)", borderRadius: 12, padding: 20 }}>
          {[4,6,8,16,24,32,40,48,56,64,72,80,88].map((p) => (
            <div key={p} className={styles.tSwatch}>
              <div className={styles.tSwatchColor} style={{ background: `rgba(255,255,255,${p/100})` }} />
              <span className={styles.tLabel}>{p}%</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Transparent — Black" description="Açık yüzeylerde kullanım için.">
        <div className={styles.transparentGrid} style={{ background: "#f9fafb", borderRadius: 12, padding: 20, border: "1px solid var(--color-neutral-100)" }}>
          {[4,8,16,24,32,40,48,56,64,72,80,88].map((p) => (
            <div key={p} className={styles.tSwatch}>
              <div className={styles.tSwatchColor} style={{ background: `rgba(0,0,0,${p/100})` }} />
              <span className={styles.tLabel} style={{ color: "#333" }}>{p}%</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
