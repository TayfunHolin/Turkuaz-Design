import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { ChipExamples } from "./ChipExamples";

export default function ChipPage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Chip"
        title="Chip"
        description="Filtre etiketleri ve seçili değerleri göstermek için pill-shaped etkileşimli bileşen."
      />
      <ChipExamples />

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Container", description: "Pill-shaped sarmalayıcı. filled tipinde dolgu rengi, outline tipinde kenarlık kullanır. md=36px, lg=40px yükseklik." },
          { name: "Leading icon (opsiyonel)", description: "Sol tarafta yer alan ikon. Kategori veya tip bilgisini görsel olarak destekler." },
          { name: "Label", description: "Chip'in ana metin içeriği. Aktif durumda renk ve ağırlık değişir." },
          { name: "Remove button (opsiyonel)", description: "Kaldırılabilir chip'lerde sağ tarafta × simgesi. onRemove prop'u ile aktive edilir." },
          { name: "Active state indicator", description: "active=true olduğunda dolgu/kenarlık rengi primary (#292F89) olur." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "Filtre ve seçim etiketleri için kullan", description: "Arama sayfasında aktif filtreler, çoklu seçim sonuçları veya kategori etiketleri için idealdir." },
          { type: "do",   title: "Kaldırılabilir chip'lere × ekle", description: "Kullanıcı eklediği bir filtreyi veya etiketi kaldırabilmeli. onRemove prop'unu kullan." },
          { type: "do",   title: "Chip'leri yatay kaydırılabilir listede sun", description: "Çok sayıda chip varsa yatay scroll'lu bir container içinde göster." },
          { type: "dont", title: "Sayfa navigasyonu için kullanma", description: "Sayfalar arası geçiş için Tab veya Link bileşeni daha uygun semantiğe sahiptir." },
          { type: "dont", title: "Birincil eylem için kullanma", description: "Form submit veya kritik aksiyon için Chip değil, Button kullan." },
          { type: "dont", title: "Çok uzun metin koyma", description: "Chip etiketi 1–3 kelime olmalı. Uzun metinler chip'in görsel amacını bozar." },
        ]} />
      </Section>

      <Section title="Props">
        <PropsTable rows={[
          { prop: "type",     type: '"filled" | "outline"', default: '"filled"', description: "Görsel tip" },
          { prop: "size",     type: '"md" | "lg"',          default: '"md"',     description: "Boyut — md=36px, lg=40px" },
          { prop: "active",   type: "boolean",              default: "false",    description: "Seçili/aktif state" },
          { prop: "disabled", type: "boolean",              default: "false",    description: "Devre dışı" },
          { prop: "onClick",  type: "() => void",           default: "—",        description: "Tıklama handler" },
          { prop: "onRemove", type: "() => void",           default: "—",        description: "Kaldır butonu gösterir ve handler" },
          { prop: "children", type: "ReactNode",            default: "—",        description: "Chip içeriği (metin + opsiyonel ikon)" },
        ]} />
      </Section>
    </>
  );
}
