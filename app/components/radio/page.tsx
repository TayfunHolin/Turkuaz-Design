import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { RadioExamples } from "./RadioExamples";

export default function RadioPage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Radio"
        title="Radio"
        description="Birbirini dışlayan seçenekler arasında tekli seçim için kullanılan kontrol bileşeni."
      />
      <RadioExamples />

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Control dairesi", description: "sm=20px, md=24px dışarı daire. Seçili olmadığında #D2D2D2 kenarlıklı, seçili olduğunda #292F89 kenarlık + dolgu." },
          { name: "Inner dot", description: "checked=true olduğunda içte beliren beyaz nokta. Seçili durumu görsel olarak onaylar." },
          { name: "Label", description: "Dairenin sağında tıklanabilir metin. Tıklamak radio'nun checked state'ini değiştirir." },
          { name: "Disabled overlay", description: "disabled=true olduğunda cursor:not-allowed ve %50 opaklık uygulanır." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "Birbirini dışlayan seçenekler için kullan", description: "Kullanıcı yalnızca bir seçenek seçebiliyorsa Radio, birden fazla seçebiliyorsa Checkbox kullan." },
          { type: "do",   title: "Varsayılan bir seçenek belirle", description: "Kullanıcıyı boş bırakma; en yaygın veya en güvenli seçeneği başlangıçta seçili göster." },
          { type: "do",   title: "name prop ile grubu tanımla", description: "Aynı form grubundaki tüm Radio'lar aynı name değerini paylaşmalı. Bu erişilebilirlik ve klavye navigasyonu için zorunludur." },
          { type: "dont", title: "7'den fazla seçenek listeme", description: "Çok sayıda seçenek varsa kullanıcıyı bunaltır. Bunun yerine Select (dropdown) bileşeni kullan." },
          { type: "dont", title: "Checkbox ile aynı formda karıştırma", description: "Aynı seçim grubu için Radio ve Checkbox'ı birlikte kullanmak kullanıcıyı karıştırır." },
          { type: "dont", title: "On/off toggle için kullanma", description: "Basit açma/kapama için Switch daha tanıdık bir UX sunar." },
        ]} />
      </Section>

      <Section title="Props">
        <PropsTable rows={[
          { prop: "checked",  type: "boolean",              default: "false", description: "Seçili state" },
          { prop: "onChange", type: "(v: boolean) => void", default: "—",     description: "Değişim handler" },
          { prop: "size",     type: '"sm" | "md"',          default: '"md"',  description: "Boyut — sm=20px, md=24px" },
          { prop: "label",    type: "string",               default: "—",     description: "Yan etiket metni" },
          { prop: "name",     type: "string",               default: "—",     description: "Radio grup adı (form erişilebilirliği)" },
          { prop: "disabled", type: "boolean",              default: "false", description: "Devre dışı bırakır" },
        ]} />
      </Section>
    </>
  );
}
