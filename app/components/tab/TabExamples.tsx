"use client";
import { useState } from "react";
import { Section } from "@/docs-ui/Section";
import { Tabs } from "@/src/components/Tab/Tab";

const items = [
  { key: "all",     label: "Tümü" },
  { key: "news",    label: "Haberler" },
  { key: "sports",  label: "Spor" },
  { key: "finance", label: "Ekonomi" },
];

export function TabExamples() {
  const [a, setA] = useState("all");
  const [b, setB] = useState("news");

  return (
    <>
      <Section title="Medium (52px)">
        <div style={{ background: "#fff", border: "1px solid #e9e9e9", borderRadius: 12, overflow: "hidden" }}>
          <Tabs items={items} active={a} onChange={setA} size="md" />
        </div>
      </Section>
      <Section title="Small (44px)">
        <div style={{ background: "#fff", border: "1px solid #e9e9e9", borderRadius: 12, overflow: "hidden" }}>
          <Tabs items={items} active={b} onChange={setB} size="sm" />
        </div>
      </Section>
    </>
  );
}
