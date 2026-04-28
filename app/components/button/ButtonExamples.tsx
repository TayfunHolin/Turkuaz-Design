"use client";
import { Section, PreviewBox } from "@/docs-ui/Section";
import { Button } from "@/src/components/Button/Button";

/* ── Inline icons ─────────────────────────────────────────── */
const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);
const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);
const EditIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const TrashIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);
const ShareIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const variants = ["primary", "secondary", "plain", "ghost", "link", "destructive"] as const;
const sizes    = ["xl", "lg", "md", "sm", "xs"] as const;

export function ButtonExamples() {
  return (
    <>
      {/* ── Regular Buttons ─────────────────────────────────── */}
      <Section title="Variants" description="Primary ve Secondary hiyerarşisi × Filled / Plain / Link tipi.">
        <PreviewBox>
          {variants.map((v) => (
            <Button key={v} variant={v} leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </Button>
          ))}
        </PreviewBox>
      </Section>

      <Section title="Sizes" description="5 boyut — xl'den xs'e.">
        <PreviewBox>
          {sizes.map((s) => (
            <Button key={s} size={s} leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>
              {s.toUpperCase()}
            </Button>
          ))}
        </PreviewBox>
      </Section>

      <Section title="States" description="Disabled ve loading state'leri.">
        <PreviewBox>
          <Button leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>Default</Button>
          <Button disabled leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>Disabled</Button>
          <Button loading>Loading</Button>
        </PreviewBox>
        <PreviewBox>
          <Button variant="secondary" leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>Default</Button>
          <Button variant="secondary" disabled leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>Disabled</Button>
          <Button variant="secondary" loading>Loading</Button>
        </PreviewBox>
        <PreviewBox>
          <Button variant="plain" leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>Default</Button>
          <Button variant="plain" disabled leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>Disabled</Button>
          <Button variant="plain" loading>Loading</Button>
        </PreviewBox>
      </Section>

      <Section title="Size × Variant Grid">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {sizes.map((size) => (
            <PreviewBox key={size}>
              <span style={{ fontSize: 11, color: "var(--color-neutral-400)", fontWeight: 600, minWidth: 24, textTransform: "uppercase", letterSpacing: "0.06em" }}>{size}</span>
              {(["primary", "secondary", "plain", "ghost"] as const).map((v) => (
                <Button key={v} size={size} variant={v} leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>Label</Button>
              ))}
            </PreviewBox>
          ))}
        </div>
      </Section>

      {/* ── Icon Buttons ────────────────────────────────────── */}
      <Section title="Icon Buttons — Variants">
        <PreviewBox>
          <Button iconOnly variant="primary"     size="md" aria-label="Ekle"><PlusIcon /></Button>
          <Button iconOnly variant="secondary"   size="md" aria-label="Düzenle"><EditIcon /></Button>
          <Button iconOnly variant="plain"       size="md" aria-label="Paylaş"><ShareIcon /></Button>
          <Button iconOnly variant="ghost"       size="md" aria-label="Sil"><TrashIcon /></Button>
          <Button iconOnly variant="destructive" size="md" aria-label="Sil"><TrashIcon /></Button>
        </PreviewBox>
      </Section>

      <Section title="Icon Buttons — Sizes">
        <PreviewBox>
          {sizes.map((s) => (
            <Button key={s} iconOnly size={s} aria-label="Ekle">
              <PlusIcon />
            </Button>
          ))}
        </PreviewBox>
      </Section>

      <Section title="Icon Buttons — Size × Variant Grid">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {sizes.map((size) => (
            <PreviewBox key={size}>
              <span style={{ fontSize: 11, color: "var(--color-neutral-400)", fontWeight: 600, minWidth: 24, textTransform: "uppercase", letterSpacing: "0.06em" }}>{size}</span>
              {(["primary", "secondary", "plain", "ghost"] as const).map((v) => (
                <Button key={v} iconOnly size={size} variant={v} aria-label={v}>
                  <PlusIcon />
                </Button>
              ))}
            </PreviewBox>
          ))}
        </div>
      </Section>

      <Section title="Icon Buttons — States">
        <PreviewBox>
          <Button iconOnly variant="primary" size="md" aria-label="Normal"><EditIcon /></Button>
          <Button iconOnly variant="primary" size="md" aria-label="Disabled" disabled><EditIcon /></Button>
          <Button iconOnly variant="primary" size="md" aria-label="Loading" loading />
        </PreviewBox>
      </Section>
    </>
  );
}
