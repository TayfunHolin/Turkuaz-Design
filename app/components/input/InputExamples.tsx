"use client";

import { Section, PreviewBox } from "@/docs-ui/Section";
import { Input } from "@/src/components/Input/Input";

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
  </svg>
);

const CardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

export function InputExamples() {
  return (
    <>
      <Section title="Simple">
        <PreviewBox>
          <div style={{ width: 360 }}>
            <Input label="E-posta" placeholder="ornek@finanssabah.com" fullWidth hint="Hesabınıza kayıtlı e-posta adresinizi girin." />
          </div>
        </PreviewBox>
      </Section>

      <Section title="Password">
        <PreviewBox>
          <div style={{ width: 360 }}>
            <Input label="Şifre" type="password" placeholder="••••••••" fullWidth hint="En az 8 karakter." />
          </div>
        </PreviewBox>
      </Section>

      <Section title="States">
        <PreviewBox>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 360 }}>
            <Input label="Normal" placeholder="Placeholder metni" hint="Yardım metni burada görünür." fullWidth />
            <Input label="Hata" placeholder="Placeholder metni" defaultValue="hatalı-değer" error="Lütfen geçerli bir değer girin." fullWidth />
            <Input label="Devre dışı" placeholder="Placeholder metni" disabled fullWidth />
          </div>
        </PreviewBox>
      </Section>

      <Section title="With Icons">
        <PreviewBox>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 360 }}>
            <Input label="Arama" placeholder="Ara..." leftElement={<SearchIcon />} fullWidth />
            <Input label="Kart Numarası" placeholder="0000 0000 0000 0000" rightElement={<CardIcon />} fullWidth />
          </div>
        </PreviewBox>
      </Section>

      <Section title="Sizes">
        <PreviewBox>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
            <Input size="sm" placeholder="Small (40px)" fullWidth />
            <Input size="md" placeholder="Medium (48px)" fullWidth />
            <Input size="lg" placeholder="Large (56px)" fullWidth />
          </div>
        </PreviewBox>
      </Section>
    </>
  );
}
