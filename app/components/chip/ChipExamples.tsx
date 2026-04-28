"use client";
import { useState } from "react";
import { Section, PreviewBox } from "@/docs-ui/Section";
import { Chip } from "@/src/components/Chip/Chip";

export function ChipExamples() {
  const [active, setActive] = useState("all");
  const filters = ["all", "news", "sports", "finance", "tech"];

  return (
    <>
      <Section title="Filled — Inactive / Active">
        <PreviewBox>
          <Chip type="filled" active={false}>Inactive</Chip>
          <Chip type="filled" active={true}>Active</Chip>
          <Chip type="filled" active={false} disabled>Disabled</Chip>
        </PreviewBox>
      </Section>
      <Section title="Outline — Inactive / Active">
        <PreviewBox>
          <Chip type="outline" active={false}>Inactive</Chip>
          <Chip type="outline" active={true}>Active</Chip>
          <Chip type="outline" active={false} disabled>Disabled</Chip>
        </PreviewBox>
      </Section>
      <Section title="Sizes">
        <PreviewBox>
          <Chip size="md" active>Medium (36px)</Chip>
          <Chip size="lg" active>Large (40px)</Chip>
        </PreviewBox>
      </Section>
      <Section title="Filter Group Example">
        <PreviewBox>
          {filters.map(f => (
            <Chip key={f} active={active === f} onClick={() => setActive(f)}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Chip>
          ))}
        </PreviewBox>
      </Section>
    </>
  );
}
