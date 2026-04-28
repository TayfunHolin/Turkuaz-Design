import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { BadgeExamples } from "./BadgeExamples";

export default function BadgePage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Badge"
        title="Badge"
        description="Durum, etiket ve sayısal değerleri özetlemek için kullanılan küçük etiket bileşeni."
      />

      <BadgeExamples />

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Container", description: "Pill-shaped arka plan. Variant'a göre renk değişir. sm=20px, md=24px yükseklik." },
          { name: "Dot indicator", description: "dot prop ile etkinleştirilen 6px durum noktası. Label'dan önce gösterilir ve variant rengiyle eşleşir." },
          { name: "Label", description: "Kısa, öz metin içeriği. Genellikle max 2 kelime veya bir sayı kullanılır." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "Durum bilgisi için kullan", description: "Yayında / Bekliyor / Taslak gibi anlık durum göstergeleri için idealdir. dot prop ile birlikte daha güçlü." },
          { type: "do",   title: "Kısa ve öz tut", description: "Mümkün olduğunca tek kelime veya sayı kullan. 'Yayında', 'Bekliyor', '12' gibi." },
          { type: "do",   title: "Semantic varyantı doğru seç", description: "Başarı=success, uyarı=warning, hata=error, bilgi=info. Rengi keyfi kullanma." },
          { type: "dont", title: "Eylem için kullanma", description: "Badge tıklanabilir bir element değildir. Kullanıcının bir şey yapması gerekiyorsa Button veya Chip kullan." },
          { type: "dont", title: "Uzun metin yazma", description: "4 kelimeden uzun içerik badge içinde okunaksız görünür ve layout'u bozar." },
          { type: "dont", title: "Aynı sayfada çok fazla farklı renk kullanma", description: "Çok fazla renkli badge dikkat dağıtır. Tutarlı ve az sayıda variant kullan." },
        ]} />
      </Section>

      <Section title="Props">
        <PropsTable rows={[
          { prop: "variant", type: '"default" | "primary" | "success" | "warning" | "error" | "info"', default: '"default"', description: "Renk ve anlam teması" },
          { prop: "size",    type: '"sm" | "md"', default: '"md"', description: "Boyut — sm=20px, md=24px" },
          { prop: "dot",     type: "boolean",     default: "false", description: "Durum noktası göster" },
          { prop: "children",type: "ReactNode",   default: "—",     description: "Badge içeriği" },
        ]} />
      </Section>
    </>
  );
}
