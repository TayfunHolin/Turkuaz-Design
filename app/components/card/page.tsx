import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { CardExamples } from "./CardExamples";

export default function CardPage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Card"
        title="Card"
        description="Figma'dan 3 kart tipi: Main Card (hero görsel), Text Card (haber listesi) ve Standard Card (görsel + başlık)."
      />

      <CardExamples />

      <Section title="Anatomy — Main Card">
        <AnatomyList parts={[
          { name: "Background image",  description: "position:absolute, object-fit:cover ile kartı tamamen kaplar. min-height=320px." },
          { name: "Gradient overlay",  description: "linear-gradient(to top): alt %0→rgba(0,0,0,0.78), üst→şeffaf. Metin okunabilirliğini sağlar." },
          { name: "Title",             description: "Overlay üzerinde beyaz, 1.25rem/700 başlık metni." },
          { name: "Description",       description: "Başlığın altında rgba(255,255,255,0.80) renkte max 3 satır kırpılmış açıklama." },
          { name: "Carousel dots",     description: "dots prop ile etkinleşir. Aktif dot genişler (6px → 18px pill). onDotClick handler." },
        ]} />
      </Section>

      <Section title="Anatomy — Text Card">
        <AnatomyList parts={[
          { name: "Dashed border",   description: "1.5px dashed #292F89 — primary renkte kesik çizgi kenarlık." },
          { name: "Label",           description: "Üstte küçük harf etiket. Kategori veya 'Son Dakika' gibi bölüm başlığı." },
          { name: "Time",            description: "Her satırda saat/tarih bilgisi. 0.75rem, neutral-400." },
          { name: "Title",           description: "Haber başlığı. 0.9375rem/700. Hover'da #292F89 renk geçişi." },
          { name: "Separator",       description: "Satırlar arası 1px solid #E9E9E9 alt kenarlık." },
        ]} />
      </Section>

      <Section title="Anatomy — Standard Card">
        <AnatomyList parts={[
          { name: "Image area",  description: "Kartın üst kısmında object-fit:cover görsel. imageHeight prop ile yükseklik ayarlanır (default 160px)." },
          { name: "Title",       description: "0.9375rem/700, neutral-900. Görselin hemen altında." },
          { name: "Subtext",     description: "0.8125rem, neutral-400. Kategori, yazar veya tarih gibi ikincil bilgi." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "Main Card'ı manşet haber için kullan",       description: "Sayfanın en önemli içeriğini ön plana çıkarmak için idealdir. Carousel dots ile birden fazla öne çıkan içerik sunulabilir." },
          { type: "do",   title: "Text Card'ı son dakika/hızlı liste için kullan", description: "Görsel olmayan, hızlı tüketilen haber listelerinde sade ve kompakt sunum sağlar." },
          { type: "do",   title: "Standard Card'ı grid listelerde kullan",     description: "Kategori sayfaları, öneri alanları ve ilgili haberler bölümünde grid layout ile kullan." },
          { type: "dont", title: "Main Card'ı düşük kaliteli görselle kullanma", description: "Görsel kartı tamamen kapladığı için en az 800×500px, yüksek kontrastlı fotoğraf kullan." },
          { type: "dont", title: "Text Card'a çok uzun başlıklar ekleme",     description: "Liste kompaktlığını bozmamak için başlık max 2 satıra sığmalı." },
          { type: "dont", title: "Üç tipi aynı anda aynı hiyerarşide kullanma", description: "Her kart tipinin farklı öncelik seviyesi var. Main=birincil, Text=ikincil, Standard=üçüncül hiyerarşiyi koru." },
        ]} />
      </Section>

      <Section title="MainCard Props">
        <PropsTable rows={[
          { prop: "type",        type: '"main"',    default: "—",     description: "Kart tipi belirleyici" },
          { prop: "image",       type: "string",    default: "—",     description: "Arka plan görsel URL'i (zorunlu)" },
          { prop: "imageAlt",    type: "string",    default: '""',    description: "Erişilebilirlik için alt metni" },
          { prop: "title",       type: "string",    default: "—",     description: "Beyaz büyük başlık (zorunlu)" },
          { prop: "description", type: "string",    default: "—",     description: "Opsiyonel açıklama (max 3 satır)" },
          { prop: "dots",        type: "number",    default: "0",     description: "Carousel nokta sayısı (≥2 ise gösterilir)" },
          { prop: "activeDot",   type: "number",    default: "0",     description: "Aktif nokta indeksi" },
          { prop: "onDotClick",  type: "(i) => void", default: "—",  description: "Nokta tıklama handler" },
        ]} />
      </Section>

      <Section title="TextCard Props">
        <PropsTable rows={[
          { prop: "type",  type: '"text"',           default: "—",  description: "Kart tipi belirleyici" },
          { prop: "label", type: "string",           default: "—",  description: "Üst etiket/kategori" },
          { prop: "items", type: "TextCardItem[]",   default: "—",  description: "Haber satırları — {time, title, href?}" },
        ]} />
      </Section>

      <Section title="StandardCard Props">
        <PropsTable rows={[
          { prop: "type",        type: '"standard"', default: '"standard"', description: "Kart tipi belirleyici" },
          { prop: "image",       type: "string",     default: "—",   description: "Üst görsel URL" },
          { prop: "imageAlt",    type: "string",     default: '""',  description: "Görsel alt metni" },
          { prop: "imageHeight", type: "number",     default: "160", description: "Görsel yüksekliği (px)" },
          { prop: "title",       type: "string",     default: "—",   description: "Kart başlığı (zorunlu)" },
          { prop: "subtext",     type: "string",     default: "—",   description: "İkincil metin — kategori, yazar" },
          { prop: "href",        type: "string",     default: "—",   description: "Link URL — kartı <a> yapar" },
          { prop: "onClick",     type: "() => void", default: "—",   description: "Tıklama handler" },
        ]} />
      </Section>
    </>
  );
}
