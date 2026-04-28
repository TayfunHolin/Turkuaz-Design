"use client";
import { Section, PreviewBox } from "@/docs-ui/Section";
import { Card } from "@/src/components/Card/Card";
import { Badge } from "@/src/components/Badge/Badge";
import { Button } from "@/src/components/Button/Button";
import { Avatar } from "@/src/components/Avatar/Avatar";

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const TrendUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);

const TrendDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>
  </svg>
);

export function CardExamples() {
  return (
    <>
      {/* Default */}
      <Section title="Default">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          <Card
            title="Merkez Bankası faiz kararını açıkladı"
            description="Merkez Bankası Para Politikası Kurulu, beklentilerin üzerinde bir faiz kararı açıkladı."
            footer={
              <>
                <CalendarIcon />
                <span>28 Nis 2026</span>
                <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4 }}>
                  <EyeIcon />14.320
                </span>
              </>
            }
          />
          <Card
            title="Borsada sert yükseliş yaşandı"
            description="BIST 100 endeksi güne yüzde 2.4 yükselişle başladı. Bankacılık hisseleri öne çıktı."
            footer={
              <>
                <CalendarIcon />
                <span>27 Nis 2026</span>
                <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4 }}>
                  <EyeIcon />9.841
                </span>
              </>
            }
          />
        </div>
      </Section>

      {/* With Badge */}
      <Section title="With Badge">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          <Card
            badge={<Badge variant="error" size="sm" dot>Ekonomi</Badge>}
            title="Enflasyon verileri açıklandı"
            description="TÜİK tarafından açıklanan Mart ayı enflasyon verisi piyasa beklentilerinin altında kaldı."
            footer={<><CalendarIcon /><span>25 Nis 2026</span></>}
          />
          <Card
            badge={<Badge variant="success" size="sm" dot>Borsa</Badge>}
            title="Dolar/TL güne nasıl başladı?"
            description="Dolar/TL paritesi sabah saatlerinde 38.42 seviyesinden işlem görüyor."
            footer={<><CalendarIcon /><span>27 Nis 2026</span></>}
          />
        </div>
      </Section>

      {/* With Image */}
      <Section title="With Image">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          <Card
            image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=360&fit=crop"
            imageAlt="Borsa grafik"
            imageHeight={180}
            badge={<Badge variant="primary" size="sm">Analiz</Badge>}
            title="Altın fiyatları neden rekor kırıyor?"
            description="Küresel belirsizlik ortamında yatırımcıların güvenli liman arayışı altın talebini artırıyor."
            footer={
              <>
                <Avatar name="Ayşe Yılmaz" size="xs" />
                <span>A. Yılmaz</span>
                <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4 }}>
                  <EyeIcon />21.567
                </span>
              </>
            }
          />
          <Card
            image="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=360&fit=crop"
            imageAlt="Petrol"
            imageHeight={180}
            badge={<Badge variant="warning" size="sm">Emtia</Badge>}
            title="Petrol fiyatı gerilemeye devam ediyor"
            description="Brent petrol varil fiyatı, arz endişelerinin azalmasıyla birlikte 78 dolar seviyesine geriledi."
            footer={
              <>
                <Avatar name="Mehmet Demir" size="xs" />
                <span>M. Demir</span>
                <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 4 }}>
                  <EyeIcon />5.612
                </span>
              </>
            }
          />
        </div>
      </Section>

      {/* Stat Cards */}
      <Section title="Stat / Data Card">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
          {[
            { label: "BIST 100",  value: "9.842,31", change: "+2.43%",  up: true  },
            { label: "Dolar/TL",  value: "38,42",    change: "-0.12%",  up: false },
            { label: "Euro/TL",   value: "41,85",    change: "+0.08%",  up: true  },
            { label: "Altın (gr)",value: "3.210,50", change: "+1.21%",  up: true  },
          ].map((s) => (
            <Card key={s.label} variant="default" padding="md">
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-neutral-400)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</div>
              <div style={{ fontSize: "1.375rem", fontWeight: 800, color: "var(--color-neutral-900)", letterSpacing: "-0.02em", marginBottom: 6 }}>{s.value}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: "0.8125rem", fontWeight: 600, color: s.up ? "#16A34A" : "#DC2626" }}>
                {s.up ? <TrendUpIcon /> : <TrendDownIcon />}
                {s.change}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Variants */}
      <Section title="Variants">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          <Card variant="default" title="Default" subtitle="1px solid #E9E9E9 border" description="En yaygın kullanım şekli. Liste sayfaları ve içerik feed'leri için." />
          <Card variant="outlined" title="Outlined" subtitle="1.5px solid #292F89 border" description="Öne çıkan veya seçili içerik için primary renk kenarlık." />
          <Card variant="elevated" title="Elevated" subtitle="Box-shadow, border yok" description="Üst katmandaki içerikler, modal altındaki kartlar için." />
        </div>
      </Section>

      {/* Clickable */}
      <Section title="Clickable">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          <Card
            clickable
            title="Tıklanabilir Kart"
            description="Hover'da hafif yükselme ve gölge efekti alır. cursor: pointer."
            footer={<><CalendarIcon /><span>28 Nis 2026</span></>}
            onClick={() => {}}
          />
          <Card
            variant="elevated"
            clickable
            title="Elevated + Clickable"
            description="Yükseltilmiş kart hover'da daha derin gölge alır."
            footer={<><CalendarIcon /><span>28 Nis 2026</span></>}
            onClick={() => {}}
          />
        </div>
      </Section>

      {/* With Actions */}
      <Section title="With Actions">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          <Card
            badge={<Badge variant="info" size="sm">Duyuru</Badge>}
            title="Yeni Portföy Özelliği"
            description="Portföy takip ekranına gerçek zamanlı fiyat güncellemesi eklendi."
            actions={
              <>
                <Button variant="primary" size="sm">İncele</Button>
                <Button variant="ghost" size="sm">Sonra Hatırlat</Button>
              </>
            }
          />
        </div>
      </Section>

      {/* Padding Sizes */}
      <Section title="Padding Sizes">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          <Card padding="sm" title="Small padding" subtitle="16px" description="Kompakt listeler için." />
          <Card padding="md" title="Medium padding" subtitle="20px" description="Standart kart padding." />
          <Card padding="lg" title="Large padding" subtitle="28px" description="Öne çıkan büyük kartlar." />
        </div>
      </Section>
    </>
  );
}
