import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { TabExamples } from "./TabExamples";

export default function TabPage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Tab"
        title="Tab"
        description="Aynı sayfa içinde ilgili içerik gruplarını organize etmek için kullanılan navigasyon bileşeni."
      />
      <TabExamples />

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Tab container", description: "Tüm sekmeleri barındıran yatay şerit. Alt kenarda 1px separator çizgisi bulunur." },
          { name: "Tab item", description: "Tekil sekme butonu. md=52px, sm=44px yükseklik. Yatay padding ile metin sığdırılır." },
          { name: "Icon (opsiyonel)", description: "TabItem icon prop'u ile sağlanan sol ikon. Label ile birlikte kullanılır." },
          { name: "Label", description: "Sekmenin içeriğini tanımlayan metin. Kısa ve öz olmalı." },
          { name: "Active indicator", description: "Aktif sekmenin altında 2px kalınlığında siyah (#000) alt kenarlık. Hangi içeriğin görüntülendiğini gösterir." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "Aynı hiyerarşideki içerikleri gruplamak için kullan", description: "Portföy / Hisse / Fon gibi aynı düzeyde, birbirini tamamlayan içerik grupları için idealdir." },
          { type: "do",   title: "Tab sayısını 5–6 ile sınırla", description: "Kullanıcı aynı anda hangi sekme içinde olduğunu kolayca hatırlayabilmeli. Fazlası karmaşıklık yaratır." },
          { type: "do",   title: "İkonla metni birlikte kullan", description: "İkon anlamı güçlendirir, tek başına bırakmak erişilebilirliği düşürür." },
          { type: "dont", title: "Sayfalar arası navigasyon için kullanma", description: "Farklı URL'lere geçiş için Link veya side navigation kullan. Tab içerik sayfasını değiştirmemeli." },
          { type: "dont", title: "Sekme başlıklarını uzun tutma", description: "'Portföy Özeti ve İşlem Geçmişi' yerine 'Portföy' yeterlidir. Sekme metni max 2 kelime olmalı." },
          { type: "dont", title: "Tab içinde Tab kullanma", description: "İç içe sekmeler navigasyon hiyerarşisini anlaşılmaz kılar. Accordion veya farklı bir pattern düşün." },
        ]} />
      </Section>

      <Section title="Props">
        <PropsTable rows={[
          { prop: "items",    type: "TabItem[]",     default: "—",    description: "Tab öğeleri dizisi — {key, label, icon?}" },
          { prop: "active",   type: "string",        default: "—",    description: "Aktif tab'ın key değeri" },
          { prop: "onChange", type: "(key) => void", default: "—",    description: "Tab değişim handler" },
          { prop: "size",     type: '"sm" | "md"',   default: '"md"', description: "Boyut — sm=44px, md=52px" },
        ]} />
      </Section>
    </>
  );
}
