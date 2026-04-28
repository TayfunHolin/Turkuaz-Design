"use client";
import { useState } from "react";
import { Section } from "@/docs-ui/Section";
import { Header } from "@/src/components/Header/Header";
import { Avatar } from "@/src/components/Avatar/Avatar";
import { Button } from "@/src/components/Button/Button";

const Logo = ({ dark = true }: { dark?: boolean }) => (
  /* eslint-disable-next-line @next/next/no-img-element */
  <img
    src="/logo.svg"
    alt="Finans"
    style={{ width: 124, height: "auto", display: "block", filter: dark ? undefined : "brightness(0) saturate(100%) invert(13%) sepia(67%) saturate(1200%) hue-rotate(214deg) brightness(80%) contrast(120%)" }}
  />
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
            actions={
              <>
                <Button variant="ghost" size="sm" style={{ color: "rgba(255,255,255,0.75)" }}>Giriş Yap</Button>
                <Button variant="primary" size="sm">Üye Ol</Button>
              </>
            }
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
            actions={
              <>
                <Button variant="secondary" size="sm">Giriş Yap</Button>
                <Button variant="primary" size="sm">Üye Ol</Button>
              </>
            }
          />
        </div>
      </Section>

      <Section title="With Avatar (Logged In)">
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #E9E9E9" }}>
          <Header
            variant="dark"
            logo={<Logo dark />}
            navItems={items}
            onNavClick={(item) => setActiveKey(item.key)}
            actions={
              <Avatar name="Ayşe Yılmaz" size="sm" />
            }
          />
        </div>
      </Section>

      <Section title="Logo Only (No Nav)">
        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #E9E9E9" }}>
          <Header
            variant="dark"
            logo={<Logo dark />}
            actions={
              <Button variant="primary" size="sm">Portföyüm</Button>
            }
          />
        </div>
      </Section>
    </>
  );
}
