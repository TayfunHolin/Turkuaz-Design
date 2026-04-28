import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { ButtonExamples } from "./ButtonExamples";

export default function ButtonPage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Button"
        title="Button"
        description="Kullanıcı etkileşimlerinin temel bileşeni. Pill formlu, 6 variant ve 5 boyutla gelir."
      />

      <ButtonExamples />

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Container (pill)", description: "border-radius: 9999px ile tam oval form. Variant'a göre dolgu rengi veya şeffaf arka plan alır." },
          { name: "Left icon slot", description: "leftIcon prop ile sağlanan opsiyonel sol ikon. Etiketle 4px gap ile ayrılır." },
          { name: "Label", description: "Ana metin içeriği. <span> içinde sarmalanarak ikon-yalnız modda gizlenebilir." },
          { name: "Right icon slot", description: "rightIcon prop ile sağlanan opsiyonel sağ ikon. Ok işareti veya harici link simgesi için kullanılır." },
          { name: "Loading spinner", description: "loading=true olduğunda label'ın yerini alan dönen ikon animasyonu. Butonu otomatik devre dışı bırakır." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "Primary'i tek ana eylem için kullan", description: "Sayfa veya modal başına en fazla 1–2 Primary button olmalı. Kullanıcıya net yönlendirme sağlar." },
          { type: "do",   title: "Destructive'i onay akışıyla birlikte kullan", description: "Silme gibi geri dönülemez işlemler öncesinde her zaman onay modal'ı göster." },
          { type: "do",   title: "İkon butonlara aria-label ekle", description: "iconOnly modda görsel etiket olmadığından ekran okuyucular için aria-label zorunludur." },
          { type: "dont", title: "Aynı alanda çok sayıda Primary kullanma", description: "Birden fazla Primary button hiyerarşiyi bozar. İkincil eylemler için Secondary veya Ghost kullan." },
          { type: "dont", title: "Ghost/Link'i form submit için kullanma", description: "Formun birincil submit işlemi için her zaman en az Secondary veya Primary kullan." },
          { type: "dont", title: "Çok uzun buton metni yazma", description: "Buton etiketi eylem odaklı ve kısa olmalı. 'Tüm kayıtları kalıcı olarak sil' yerine 'Sil' ve modal'da açıkla." },
        ]} />
      </Section>

      <Section title="Props">
        <PropsTable rows={[
          { prop: "variant",   type: '"primary" | "secondary" | "plain" | "ghost" | "link" | "destructive"', default: '"primary"', description: "Görsel varyant" },
          { prop: "size",      type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Boyut (32px → 56px)" },
          { prop: "loading",   type: "boolean",   default: "false", description: "Loading spinner gösterir, butonu devre dışı bırakır" },
          { prop: "disabled",  type: "boolean",   default: "false", description: "Devre dışı state" },
          { prop: "iconOnly",  type: "boolean",   default: "false", description: "Kare ikon butonu — md=44px" },
          { prop: "leftIcon",  type: "ReactNode", default: "—",     description: "Sol ikon slot" },
          { prop: "rightIcon", type: "ReactNode", default: "—",     description: "Sağ ikon slot" },
          { prop: "fullWidth", type: "boolean",   default: "false", description: "100% genişlik" },
        ]} />
      </Section>
    </>
  );
}
