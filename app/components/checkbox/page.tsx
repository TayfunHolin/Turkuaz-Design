import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { CheckboxExamples } from "./CheckboxExamples";

export default function CheckboxPage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Checkbox"
        title="Checkbox"
        description="Bağımsız veya grup halinde çoklu seçim kontrolü. Belirsiz (indeterminate) durumu destekler."
      />
      <CheckboxExamples />

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Control kutusu", description: "sm=20px, md=24px kare alan. Seçili olmadığında 1.5px kenarlıklı, seçili olduğunda #292F89 dolgu rengi alır." },
          { name: "Checkmark ikonu", description: "checked=true durumda beliren beyaz tik ikonu. indeterminate durumda tik yerine yatay çizgi gösterilir." },
          { name: "Label", description: "Kontrolün sağında yer alan, tıklanabilir metin etiketi. Tıklamak checkbox state'ini değiştirir." },
          { name: "Disabled overlay", description: "disabled=true olduğunda %50 opaklık ve cursor:not-allowed uygulayarak kontrolü etkileşimsiz yapar." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "Çoklu bağımsız seçim için kullan", description: "Kullanıcının listeden birden fazla bağımsız öğe seçmesi gerektiğinde Checkbox idealdir." },
          { type: "do",   title: "Tümünü seç için indeterminate kullan", description: "Bazı alt öğeler seçildiğinde üst checkbox'ı indeterminate olarak işaretle; bu kullanıcıya kısmi seçimi gösterir." },
          { type: "do",   title: "Her checkbox'a açık bir label ekle", description: "Etiket olmayan checkbox'lar erişilebilir değildir. En azından aria-label kullan." },
          { type: "dont", title: "On/off toggle için kullanma", description: "Anlık açma/kapama işlemleri için Switch bileşeni daha anlaşılır bir UX sunar." },
          { type: "dont", title: "Birbirini dışlayan seçenekler için kullanma", description: "Kullanıcı yalnızca bir seçenek seçebiliyorsa Radio button kullan." },
          { type: "dont", title: "Gruba 10'dan fazla seçenek ekleme", description: "Çok sayıda checkbox görsel karmaşıklık yaratır; bu durumda searchable/multiselect dropdown düşün." },
        ]} />
      </Section>

      <Section title="Props">
        <PropsTable rows={[
          { prop: "checked",       type: "boolean",              default: "false", description: "Seçili state" },
          { prop: "indeterminate", type: "boolean",              default: "false", description: "Kısmen seçili (belirsiz) state" },
          { prop: "onChange",      type: "(v: boolean) => void", default: "—",     description: "Değişim handler" },
          { prop: "size",          type: '"sm" | "md"',          default: '"md"',  description: "Boyut — sm=20px, md=24px" },
          { prop: "label",         type: "string",               default: "—",     description: "Yan etiket metni" },
          { prop: "disabled",      type: "boolean",              default: "false", description: "Devre dışı bırakır" },
        ]} />
      </Section>
    </>
  );
}
