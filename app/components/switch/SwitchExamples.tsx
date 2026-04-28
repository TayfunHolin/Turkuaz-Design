"use client";
import { useState } from "react";
import { Section, PreviewBox } from "@/docs-ui/Section";
import { Switch } from "@/src/components/Switch/Switch";

export function SwitchExamples() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);

  return (
    <>
      <Section title="States">
        <PreviewBox>
          <Switch checked={false} label="Off" />
          <Switch checked={true} label="On" />
          <Switch checked={false} disabled label="Disabled" />
        </PreviewBox>
      </Section>
      <Section title="Sizes">
        <PreviewBox>
          <Switch checked={true} size="md" label="Medium (24px)" />
          <Switch checked={true} size="lg" label="Large (28px)" />
        </PreviewBox>
      </Section>
      <Section title="Interactive">
        <PreviewBox>
          <Switch checked={a} onChange={setA} label={a ? "Bildirimler açık" : "Bildirimler kapalı"} />
          <Switch checked={b} onChange={setB} size="lg" label={b ? "Karanlık mod" : "Aydınlık mod"} />
        </PreviewBox>
      </Section>
    </>
  );
}
