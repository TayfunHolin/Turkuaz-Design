import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { FooterExamples } from "./FooterExamples";

export default function FooterPage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Footer"
        title="Footer"
        description="Koyu arka planlı site alt bileşeni. Logo, telif hakkı, 4 sütun navigasyon ve yasal uyarı bölümü içerir."
      />

      <FooterExamples />

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Container",      description: "Tam genişlik, bg=#0C1033 koyu lacivert. max-width=1440px ile içerik ortalanır." },
          { name: "Logo alanı",     description: "Sol üstte marka logosu. Logo beyaz zemin SVG olduğundan koyu arka planda doğal görünür." },
          { name: "Copyright",      description: "Logo altında 0.6875rem, rgba(255,255,255,0.35) renkte telif hakkı metni." },
          { name: "Nav sütunları",  description: "grid ile 4 sütun navigasyon. Başlık beyaz/700, linkler rgba(255,255,255,0.55), hover'da beyaz." },
          { name: "Yasal bölümü",   description: "Nav sütunlarının altında 1px separator ile ayrılmış tam genişlik yasal uyarı metinleri." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "Her sayfanın en altına ekle",         description: "Footer tüm sayfalarda tutarlı olmalı. Next.js layout.tsx'e dahil edilerek tek yerden yönetilebilir." },
          { type: "do",   title: "Yasal metinleri güncel tut",          description: "SPK ve BDDK uyarıları yasal zorunluluktur. İçerik değiştiğinde legal prop'unu güncelle." },
          { type: "do",   title: "columns sayısını 4 ile sınırla",      description: "5+ sütun dar ekranlarda layout'u bozar. Fazla linkler varsa sütun altında 'Tümü' linki kullan." },
          { type: "dont", title: "Footer'ı sticky yapma",               description: "Footer'ın her zaman sayfa sonunda görünmesi gerekir. position:sticky veya fixed kullanma." },
          { type: "dont", title: "Koyu arka planı değiştirme",          description: "Marka kılavuzu gereği footer rengi #0C1033 (primary-900) olmalı, custom renkle override etme." },
          { type: "dont", title: "Link listesini 12'den fazla uzatma",  description: "Çok uzun link listeleri footer'ı tarar hale getirir. Öncelikli sayfaları göster, geri kalanı site haritasına taşı." },
        ]} />
      </Section>

      <Section title="Footer Props">
        <PropsTable rows={[
          { prop: "logo",      type: "ReactNode",        default: "—",  description: "Logo alanı — img veya SVG bileşeni" },
          { prop: "copyright", type: "string",           default: "—",  description: "Telif hakkı metni" },
          { prop: "columns",   type: "FooterColumn[]",   default: "[]", description: "Nav sütunları — {title, links[]}" },
          { prop: "legal",     type: "FooterLegal[]",    default: "[]", description: "Yasal uyarı bölümleri — {title, text}" },
          { prop: "className", type: "string",           default: "—",  description: "Ek CSS sınıfı" },
        ]} />
      </Section>

      <Section title="FooterColumn Props">
        <PropsTable rows={[
          { prop: "title", type: "string",       default: "—", description: "Sütun başlığı" },
          { prop: "links", type: "FooterLink[]", default: "—", description: "Link listesi — {label, href?}" },
        ]} />
      </Section>
    </>
  );
}
