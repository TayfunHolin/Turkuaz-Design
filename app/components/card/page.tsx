import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { CardExamples } from "./CardExamples";

export default function CardPage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Card"
        title="Card"
        description="İçerik gruplamak için kullanılan temel konteyner bileşeni. Haber, veri, duyuru ve stat kartları için esnek slot yapısı."
      />

      <CardExamples />

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Container", description: "border-radius=16px, bg=#fff. default=1px #E9E9E9 kenarlık, outlined=1.5px #292F89, elevated=box-shadow." },
          { name: "Image area (opsiyonel)", description: "Kartın üst kısmında tam genişlik görsel alan. imageHeight prop ile yükseklik ayarlanır, object-fit:cover ile kırpılır." },
          { name: "Badge row (opsiyonel)", description: "Başlığın üzerinde kategori veya durum rozeti alanı. Badge bileşeni ile birlikte kullanılır." },
          { name: "Header — title + subtitle", description: "title: 1rem/700 koyu metin. subtitle: 0.8125rem/400 soluk metin. Her ikisi de opsiyoneldir." },
          { name: "Description", description: "1.6 satır yüksekliğinde 0.875rem gri açıklama paragrafı." },
          { name: "Actions (opsiyonel)", description: "Button veya Link gibi etkileşimli elementlerin yerleştiği alan. description'ın altında, footer'ın üstünde." },
          { name: "Footer (opsiyonel)", description: "Tarih, yazar avatarı, görüntülenme sayısı gibi metadata. Üstte 1px #E9E9E9 separator ile ayrılır." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "İçerik hiyerarşisini net kur", description: "Badge → Title → Description → Footer sıralaması kullanıcının göz akışını yönlendirir. Her katta yalnızca gerekli olanı göster." },
          { type: "do",   title: "Grid içinde eşit yükseklikte tut", description: "flex: 1 veya grid ile kartları aynı satırda hizala. Farklı içerik uzunluklarında görsel düzensizlik olur." },
          { type: "do",   title: "Stat kartları için compact padding kullan", description: "Sayısal veri kartlarında pad_sm veya pad_md tercih et; lg gereksiz boşluk yaratır." },
          { type: "dont", title: "Tek kart için elevated kullanma", description: "Elevated varyant ancak diğer elemanların önünde/üzerinde duran kartlarda anlam kazanır. Düz listede kullanma." },
          { type: "dont", title: "Karta çok fazla aksiyon koyma", description: "Bir kartta max 2 action button olmalı. Fazlası kartı form'a dönüştürür." },
          { type: "dont", title: "Tıklanabilir kartı link gibi kullanma", description: "Href gerektiren navigasyon için href prop'unu kullan; clickable + onClick sadece in-page etkileşimler içindir." },
        ]} />
      </Section>

      <Section title="Props">
        <PropsTable rows={[
          { prop: "variant",     type: '"default" | "outlined" | "elevated"', default: '"default"', description: "Görsel stil — kenarlık veya gölge" },
          { prop: "padding",     type: '"sm" | "md" | "lg" | "none"',         default: '"md"',      description: "İç boşluk — sm=16px, md=20px, lg=28px" },
          { prop: "clickable",   type: "boolean",    default: "false",  description: "Hover efekti ve pointer cursor ekler" },
          { prop: "href",        type: "string",     default: "—",      description: "Kartı <a> etiketine çevirir, tüm alan tıklanabilir olur" },
          { prop: "image",       type: "string",     default: "—",      description: "Üst görsel URL'i" },
          { prop: "imageAlt",    type: "string",     default: '""',     description: "Görsel alt metni" },
          { prop: "imageHeight", type: "number",     default: "180",    description: "Görsel alanı yüksekliği (px)" },
          { prop: "badge",       type: "ReactNode",  default: "—",      description: "Başlık üstü rozet alanı" },
          { prop: "title",       type: "ReactNode",  default: "—",      description: "Kart başlığı" },
          { prop: "subtitle",    type: "ReactNode",  default: "—",      description: "Başlık altı ikincil metin" },
          { prop: "description", type: "ReactNode",  default: "—",      description: "Açıklama paragrafı" },
          { prop: "actions",     type: "ReactNode",  default: "—",      description: "Buton/aksiyon alanı" },
          { prop: "footer",      type: "ReactNode",  default: "—",      description: "Separator'lı alt metadata alanı" },
          { prop: "children",    type: "ReactNode",  default: "—",      description: "Özel içerik slot'u" },
          { prop: "onClick",     type: "() => void", default: "—",      description: "Tıklama handler" },
        ]} />
      </Section>
    </>
  );
}
