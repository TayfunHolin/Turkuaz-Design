"use client";
import { useState } from "react";
import { Section, PreviewBox } from "@/docs-ui/Section";
import { Checkbox } from "@/src/components/Checkbox/Checkbox";

export function CheckboxExamples() {
  const [v, setV] = useState(false);
  return (
    <>
      <Section title="States">
        <PreviewBox>
          <Checkbox checked={false} label="Unchecked" />
          <Checkbox checked={true} label="Checked" />
          <Checkbox indeterminate label="Indeterminate" />
          <Checkbox checked={false} disabled label="Disabled" />
          <Checkbox checked={true} disabled label="Disabled checked" />
        </PreviewBox>
      </Section>
      <Section title="Sizes">
        <PreviewBox>
          <Checkbox size="sm" checked label="Small (20px)" />
          <Checkbox size="md" checked label="Medium (24px)" />
        </PreviewBox>
      </Section>
      <Section title="Interactive">
        <PreviewBox>
          <Checkbox checked={v} onChange={setV} label={v ? "Seçildi" : "Seçiniz"} />
        </PreviewBox>
      </Section>
    </>
  );
}
