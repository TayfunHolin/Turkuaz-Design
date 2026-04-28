"use client";
import { useState } from "react";
import { Section, PreviewBox } from "@/docs-ui/Section";
import { Radio } from "@/src/components/Radio/Radio";

export function RadioExamples() {
  const [val, setVal] = useState("a");
  return (
    <>
      <Section title="States">
        <PreviewBox>
          <Radio checked={false} label="Unselected" />
          <Radio checked={true} label="Selected" />
          <Radio checked={false} disabled label="Disabled" />
          <Radio checked={true} disabled label="Disabled selected" />
        </PreviewBox>
      </Section>
      <Section title="Sizes">
        <PreviewBox>
          <Radio size="sm" checked label="Small (20px)" />
          <Radio size="md" checked label="Medium (24px)" />
        </PreviewBox>
      </Section>
      <Section title="Radio Group">
        <PreviewBox>
          {[{v:"a",l:"Seçenek A"},{v:"b",l:"Seçenek B"},{v:"c",l:"Seçenek C"}].map(opt => (
            <Radio key={opt.v} name="demo" value={opt.v} checked={val===opt.v} onChange={() => setVal(opt.v)} label={opt.l} />
          ))}
        </PreviewBox>
      </Section>
    </>
  );
}
