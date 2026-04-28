"use client";
import { Section, PreviewBox } from "@/docs-ui/Section";
import { Badge } from "@/src/components/Badge/Badge";

const variants = ["default", "primary", "success", "warning", "error", "info"] as const;

export function BadgeExamples() {
  return (
    <>
      <Section title="Variants">
        <PreviewBox>
          {variants.map((v) => (
            <Badge key={v} variant={v}>
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </Badge>
          ))}
        </PreviewBox>
      </Section>

      <Section title="With Dot" description="Durum göstergesi olarak kullanılır.">
        <PreviewBox>
          <Badge variant="success" dot>Active</Badge>
          <Badge variant="warning" dot>Pending</Badge>
          <Badge variant="error"   dot>Failed</Badge>
          <Badge variant="info"    dot>Processing</Badge>
          <Badge variant="default" dot>Archived</Badge>
        </PreviewBox>
      </Section>

      <Section title="Sizes">
        <PreviewBox>
          <Badge size="sm" variant="primary">Small — 20px</Badge>
          <Badge size="md" variant="primary">Medium — 24px</Badge>
        </PreviewBox>
        <PreviewBox>
          {variants.map((v) => (
            <Badge key={v} size="sm" variant={v}>
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </Badge>
          ))}
        </PreviewBox>
      </Section>
    </>
  );
}
