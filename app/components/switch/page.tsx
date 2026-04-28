import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { SwitchExamples } from "./SwitchExamples";

export default function SwitchPage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Switch"
        title="Switch"
        description="Anlık açma/kapama durumlarını kontrol eden toggle bileşeni."
      />
      <SwitchExamples />

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Track", description: "Yatay arka plan şeridi. Kapalı durumda #E9E9E9, açık durumda #292F89. md=44×24px, lg=52×28px." },
          { name: "Thumb", description: "Kaydırılan beyaz yuvarlak top. Kapalı=sol, açık=sağ. Geçiş 150ms ease ile animasyonlu." },
          { name: "Label", description: "Switch'in amacını açıklayan metin. Sağda veya üstte konumlandırılabilir." },
          { name: "Focus ring", description: "Klavye navigasyonunda track'e uygulanan mavi odak halkası (erişilebilirlik)." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "Anlık etkili ayarlar için kullan", description: "Bildirimler açık/kapalı, karanlık mod gibi anında etkili olan ve sunucu onayı gerektirmeyen ayarlar için idealdir." },
          { type: "do",   title: "Label ile neyin değiştiğini açıkla", description: "'Aktif' yerine 'E-posta bildirimleri' gibi spesifik bir label kullan. Kullanıcı neyi toggle ettiğini bilmeli." },
          { type: "do",   title: "Disabled durumda neden devre dışı olduğunu göster", description: "Tooltip veya helper text ile kullanıcıya neden değiştiremediğini açıkla." },
          { type: "dont", title: "Form submit gerektiren durumlar için kullanma", description: "Kaydet butonu gerektiren değişiklikler için Switch yerine Checkbox tercih et; beklenti yönetimi daha nettir." },
          { type: "dont", title: "Geri alınamaz eylemler için kullanma", description: "Hesap silme gibi kritik işlemler için Switch değil, Button + onay modal'ı kullan." },
          { type: "dont", title: "Seçenek listesi için kullanma", description: "Birden fazla birbirine bağlı seçenek için Radio veya Checkbox grubu daha uygun semantiğe sahiptir." },
        ]} />
      </Section>

      <Section title="Props">
        <PropsTable rows={[
          { prop: "checked",  type: "boolean",               default: "false", description: "Açık/kapalı state" },
          { prop: "onChange", type: "(v: boolean) => void",  default: "—",     description: "Değişim handler" },
          { prop: "size",     type: '"md" | "lg"',           default: '"md"',  description: "Boyut — md=44×24px, lg=52×28px" },
          { prop: "label",    type: "string",                default: "—",     description: "Yan etiket metni" },
          { prop: "disabled", type: "boolean",               default: "false", description: "Devre dışı bırakır" },
        ]} />
      </Section>
    </>
  );
}
