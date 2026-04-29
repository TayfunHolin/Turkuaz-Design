"use client";
import { useState } from "react";
import { Section } from "@/docs-ui/Section";
import { Header } from "@/src/components/Header/Header";

const Logo = ({ dark = true }: { dark?: boolean }) => (
  /* eslint-disable-next-line @next/next/no-img-element */
  <img
    src={dark ? "/logo.svg" : "/logo-light.svg"}
    alt="Finans"
    style={{ width: 124, height: "auto", display: "block" }}
  />
);

const SearchIcon = ({ color = "rgba(255,255,255,0.75)" }: { color?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
    <circle cx="9" cy="9" r="6" stroke={color} strokeWidth="1.75"/>
    <path d="M13.5 13.5L17 17" stroke={color} strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
);

const navItems = [
  { key: "markets",   label: "Piyasalar",   href: "#", active: true  },
  { key: "stocks",    label: "Hisseler",    href: "#"                 },
  { key: "crypto",    label: "Kripto",      href: "#"                 },
  { key: "news",      label: "Haberler",    href: "#"                 },
  { key: "analysis",  label: "Analiz",      href: "#"                 },
];

export function HeaderExamples() {
  const [activeKey, setActiveKey] = useState("markets");

  const items = navItems.map((i) => ({ ...i, active: i.key === activeKey }));

  return (
    <>
      <Section title="Dark (Default)">
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #E9E9E9" }}>
          <Header
            variant="dark"
            logo={<Logo dark />}
            navItems={items}
            onNavClick={(item) => setActiveKey(item.key)}
            actions={<SearchIcon color="rgba(255,255,255,0.75)" />}
          />
        </div>
      </Section>

      <Section title="Light">
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #E9E9E9" }}>
          <Header
            variant="light"
            logo={<Logo dark={false} />}
            navItems={items}
            onNavClick={(item) => setActiveKey(item.key)}
            actions={<SearchIcon color="#292F89" />}
          />
        </div>
      </Section>

      <Section title="Logo Only (No Nav)">
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #E9E9E9" }}>
          <Header
            variant="dark"
            logo={<Logo dark />}
            actions={<SearchIcon color="rgba(255,255,255,0.75)" />}
          />
        </div>
      </Section>
    </>
  );
}
