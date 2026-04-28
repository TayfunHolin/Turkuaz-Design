import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { DataTableExamples } from "./DataTableExamples";

export default function DataTablePage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Data Table"
        title="Data Table"
        description="Yapısal veri listeleme bileşeni. Sıralama, satır seçimi, loading state ve özel hücre renderer destekler."
      />

      <DataTableExamples />

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Wrap container", description: "Yatay scroll ve 12px radius'lu dış kenarlık (1px #E9E9E9). Taşan içeriği yatay kaydırır." },
          { name: "Header row", description: "h=48px, arka plan #F5F5F5. Sütun başlıklarını ve sıralama kontrollerini barındırır." },
          { name: "Sort icon", description: "sortable=true sütunlarda başlık yanında chevron ikonu. Aktif sütun yönünü gösterir; diğerleri soluk (opacity:0.35)." },
          { name: "Checkbox column", description: "selectable=true olduğunda eklenen 48px genişlik satır seçimi sütunu. Header'da tümünü seç desteği." },
          { name: "Data row", description: "h=48px zebra stripeli satırlar. Tek=beyaz (#FFF), çift=#F5F5F5. Hover=#EAF6FF, seçili=sol kenarda 2px #292F89." },
          { name: "Cell renderer", description: "render prop ile özelleştirilebilen hücre içeriği. Badge, ikon, link gibi bileşenler render edilebilir." },
          { name: "Skeleton state", description: "loading=true durumda shimmer animasyonlu placeholder satırlar gösterilir." },
          { name: "Empty state", description: "data=[] olduğunda emptyText mesajı ortalanmış olarak gösterilir." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "Yapısal ve karşılaştırmalı veri için kullan", description: "Birden fazla sütunda veri karşılaştırması gerektiğinde Data Table idealdir. Hisse listesi, işlemler, kullanıcılar gibi." },
          { type: "do",   title: "Sıralama gereken sütunları sortable yap", description: "Kullanıcının sıralamak isteyebileceği sütunları (tarih, sayı, isim) sortable olarak işaretle." },
          { type: "do",   title: "Yoğun veri yüklemelerinde loading state kullan", description: "API çağrısı sürerken loading=true ile skeleton göster; aniden beliren içerik yerine smooth geçiş sağlar." },
          { type: "dont", title: "Basit listeler için Data Table kullanma", description: "Tek sütunlu veya çok basit listelerde düz liste veya card layout daha hafif ve anlaşılırdır." },
          { type: "dont", title: "Çok fazla sütun ekleme", description: "8'den fazla sütun yatay kaydırmayı zorlaştırır. Öncelikli bilgileri seç, geri kalanı detay sayfasına taşı." },
          { type: "dont", title: "Tüm sütunları sortable yapma", description: "Yalnızca kullanıcının sıralamaktan faydalanacağı sütunlar sortable olmalı. Aşırı kullanım UX'i karmaşıklaştırır." },
        ]} />
      </Section>

      <Section title="Props">
        <PropsTable rows={[
          { prop: "columns",    type: "DataTableColumn<T>[]",      default: "—",       description: "Sütun tanımları (key, label, width, align, sortable, render)" },
          { prop: "data",       type: "T[]",                       default: "—",       description: "Tablo verisi" },
          { prop: "rowKey",     type: "keyof T | (row,i)=>string", default: "index",   description: "Her satır için benzersiz anahtar" },
          { prop: "selectable", type: "boolean",                   default: "false",   description: "Checkbox ile satır seçimi" },
          { prop: "loading",    type: "boolean",                   default: "false",   description: "Skeleton loading state gösterir" },
          { prop: "emptyText",  type: "string",                    default: '"Veri bulunamadı."', description: "Boş state mesajı" },
          { prop: "onRowClick", type: "(row, index) => void",      default: "—",       description: "Satıra tıklama handler" },
        ]} />
      </Section>

      <Section title="Column Props">
        <PropsTable rows={[
          { prop: "key",      type: "keyof T",                          default: "—",      description: "Veri alanı adı" },
          { prop: "label",    type: "string",                           default: "—",      description: "Başlık metni" },
          { prop: "width",    type: "string | number",                  default: "—",      description: "Sütun genişliği" },
          { prop: "align",    type: '"left" | "center" | "right"',      default: '"left"', description: "Yatay hizalama" },
          { prop: "sortable", type: "boolean",                          default: "false",  description: "Sıralanabilir sütun" },
          { prop: "render",   type: "(value, row, index) => ReactNode", default: "—",      description: "Özel hücre render fonksiyonu" },
        ]} />
      </Section>
    </>
  );
}
