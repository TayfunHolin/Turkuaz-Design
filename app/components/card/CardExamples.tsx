"use client";
import { useState } from "react";
import { Section } from "@/docs-ui/Section";
import { Card, MainCard, TextCard, StandardCard } from "@/src/components/Card/Card";

const newsItems = [
  { time: "09:42", title: "Merkez Bankası faiz kararını açıkladı", href: "#" },
  { time: "08:15", title: "Borsada sert yükseliş yaşandı", href: "#" },
  { time: "07:30", title: "Dolar/TL güne nasıl başladı?", href: "#" },
  { time: "06:55", title: "Altın fiyatları rekor kırdı", href: "#" },
];

export function CardExamples() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <>
      {/* Main Card */}
      <Section title="Main Card" description="Tam kaplayan fotoğraf, gradient overlay, başlık ve açıklama. Öne çıkan/manşet haberler için.">
        <div style={{ maxWidth: 480 }}>
          <MainCard
            image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop"
            imageAlt="Borsa"
            title="Çin Merkez Bankası likidite fazlasını azaltmak için 29 milyar dolarlık çekim yaptı"
            description="Çin Merkez Bankası (PBOC), bankacılık sistemindeki fazla likiditeyi dengelemek amacıyla Orta Vadeli Borç Verme İmkânı (MLF) aracılığıyla yaklaşık 29 milyar dolarlık net likidite çekimi gerçekleştirdi."
            dots={5}
            activeDot={activeDot}
            onDotClick={setActiveDot}
          />
        </div>
      </Section>

      {/* Text Card */}
      <Section title="Text Card" description="Kesik çizgi kenarlık, zaman etiketi + haber başlığı satır listesi. Haber akışı ve son dakika için.">
        <div style={{ maxWidth: 360 }}>
          <TextCard
            label="Son Dakika"
            items={newsItems}
          />
        </div>
      </Section>

      {/* Standard Card */}
      <Section title="Card" description="Üstte görsel, altında başlık ve alt metin. Kategori sayfaları ve öneri listeleri için.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12, maxWidth: 560 }}>
          <StandardCard
            image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=360&fit=crop"
            imageAlt="Hava yolu"
            title="Havacılık sektöründe rekor büyüme"
            subtext="Ekonomi"
            href="#"
          />
          <StandardCard
            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=360&fit=crop"
            imageAlt="Finans"
            title="Küresel piyasalarda yeni dönem"
            subtext="Piyasalar"
            href="#"
          />
        </div>
      </Section>

      {/* Üç tip yan yana */}
      <Section title="Üç Tip Yan Yana">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr", gap: 16, alignItems: "start" }}>
          <MainCard
            image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop"
            imageAlt="Borsa"
            title="Çin Merkez Bankası likidite fazlasını azaltmak için 29 milyar dolarlık çekim yaptı"
            description="Çin Merkez Bankası (PBOC), bankacılık sistemindeki fazla likiditeyi dengelemek amacıyla Orta Vadeli Borç Verme İmkânı aracılığıyla yaklaşık 29 milyar dolarlık net likidite çekimi gerçekleştirdi."
            dots={5}
            activeDot={activeDot}
            onDotClick={setActiveDot}
          />
          <TextCard
            label="Son Dakika"
            items={newsItems.slice(0, 3)}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <StandardCard
              image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=220&fit=crop"
              imageAlt="Uçak"
              title="Havacılık sektöründe rekor büyüme"
              subtext="Ekonomi"
              href="#"
            />
            <StandardCard
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=220&fit=crop"
              imageAlt="Bina"
              title="Küresel piyasalarda yeni dönem"
              subtext="Piyasalar"
              href="#"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
