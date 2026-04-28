import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { InputExamples } from "./InputExamples";

export default function InputPage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Input"
        title="Input"
        description="Metin girişi bileşeni. Label, yardım metni, hata mesajı, ikon slotları ve şifre toggle destekler."
      />

      <InputExamples />

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Label", description: "Alanın amacını tanımlayan başlık metni. Formun erişilebilirliği için her input'ta bulunmalıdır." },
          { name: "Field container", description: "1.5px kenarlıklı (#D2D2D2), 12px radius alan. Hover'da #AAAAAA, focus'ta #292F89 + gölge." },
          { name: "Leading icon / element", description: "leftElement slot'u ile sağlanan sol ikon veya prefix. Arama, para birimi gibi içerik için kullanılır." },
          { name: "Input text", description: "Kullanıcının girdiği metin. Placeholder boş durumda içerik ipucu verir." },
          { name: "Trailing action / eye toggle", description: "rightElement slot'u veya showPasswordToggle ile sağlanan sağ element. Şifre göster/gizle için otomatik eklenir." },
          { name: "Helper text", description: "error yokken gösterilen yardımcı açıklama. Kullanıcıya format veya gereksinim bilgisi verir." },
          { name: "Error message", description: "error prop dolu olduğunda hint yerine kırmızı hata mesajı gösterilir. Kenarlık da error rengine döner." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "Her input'a label ekle", description: "Placeholder etiket yerine geçemez. Kullanıcı yazmaya başlayınca placeholder kaybolur; label kalıcıdır." },
          { type: "do",   title: "Hata mesajlarını spesifik yaz", description: "'Hatalı giriş' yerine 'E-posta adresi @ içermeli' gibi yönlendirici mesajlar kullan." },
          { type: "do",   title: "Şifre alanlarında showPasswordToggle kullan", description: "Kullanıcının girdiğini doğrulayabilmesi UX'i önemli ölçüde iyileştirir." },
          { type: "dont", title: "Placeholder'ı label yerine kullanma", description: "Placeholder erişilebilir değildir ve kullanıcı yazmaya başlayınca kaybolur." },
          { type: "dont", title: "Gerekli olmayan alanları zorunlu yapma", description: "Her ek zorunlu alan form terk etme oranını artırır. Yalnızca gerçekten gerekli olanları required yap." },
          { type: "dont", title: "Yan yana 3'ten fazla input koyma", description: "Dar ekranlarda layout bozulur. Tek sütun veya 2 sütun form düzeni tercih et." },
        ]} />
      </Section>

      <Section title="Props">
        <PropsTable rows={[
          { prop: "label",               type: "string",    default: "—",     description: "Input üzerindeki etiket" },
          { prop: "hint",                type: "string",    default: "—",     description: "Yardım metni (error yoksa gösterilir)" },
          { prop: "error",               type: "string",    default: "—",     description: "Hata mesajı — kenarlığı da etkiler" },
          { prop: "size",                type: '"sm" | "md" | "lg"', default: '"md"', description: "Boyut — sm=40px, md=48px, lg=56px" },
          { prop: "leftElement",         type: "ReactNode", default: "—",     description: "Sol ikon/element slot" },
          { prop: "rightElement",        type: "ReactNode", default: "—",     description: "Sağ ikon/element slot" },
          { prop: "fullWidth",           type: "boolean",   default: "false", description: "100% genişlik" },
          { prop: "disabled",            type: "boolean",   default: "false", description: "Devre dışı state" },
          { prop: "showPasswordToggle",  type: "boolean",   default: "false", description: "Göz ikonu ile şifre görünürlük toggle" },
        ]} />
      </Section>
    </>
  );
}
