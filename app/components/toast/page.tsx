import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { ToastExamples } from "./ToastExamples";

export default function ToastPage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Toast"
        title="Toast"
        description="Geçici sistem bildirimleri için kullanılan anlık bildirim bileşeni."
      />
      <ToastExamples />

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Container", description: "h=68px, border-radius=16px yuvarlak köşeli bildirim kutusu. Type'a göre semantic arka plan rengi alır." },
          { name: "Icon area", description: "Sol tarafta durum ikonunu barındıran alan. success=✓, error=✕, warning=!, info=i ikonu." },
          { name: "Title", description: "Bildirimin ana mesajı. Kısa ve eylem odaklı olmalı." },
          { name: "Description (opsiyonel)", description: "Başlığı destekleyen daha uzun açıklama metni. Her toast'ta olmak zorunda değil." },
          { name: "Action link (opsiyonel)", description: "Kullanıcıyı ilgili sayfaya veya işleme yönlendiren metin butonu." },
          { name: "Close button", description: "onClose prop sağlandığında sağ üstte × butonu görünür. Kullanıcının bildirimi manuel kapatmasını sağlar." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "Sistem kaynaklı geçici bildirimler için kullan", description: "İşlem başarılı/başarısız, arka planda tamamlanan görev gibi system-initiated durumlar için idealdir." },
          { type: "do",   title: "Kısa tut (max ~80 karakter)", description: "Toast birkaç saniyeliğine görünür. Uzun mesaj kullanıcı okumadan kaybolabilir." },
          { type: "do",   title: "Otomatik kapanma süresi belirle", description: "success ve info toastlar 4–5 saniyede otomatik kapanmalı. error toastlar kullanıcı kapatana kadar kalabilir." },
          { type: "dont", title: "Kritik veya kalıcı hatalar için kullanma", description: "Kullanıcının mutlaka görmesi gereken hatalar için modal veya inline error mesajı kullan." },
          { type: "dont", title: "Aynı anda 3'ten fazla toast gösterme", description: "Çok fazla bildirim dikkat dağıtır ve kullanıcı okumadan geçer. Max 2-3 toast stack'le." },
          { type: "dont", title: "Her kullanıcı etkileşimine toast ekleme", description: "Buton tıklamaları, form değişiklikleri gibi her aksiyona toast gerekmez. Yalnızca anlamlı sonuçlar için kullan." },
        ]} />
      </Section>

      <Section title="Props">
        <PropsTable rows={[
          { prop: "type",        type: '"success" | "error" | "info" | "warning"', default: '"info"', description: "Semantic tip ve ikon" },
          { prop: "title",       type: "string",    default: "—",  description: "Başlık (zorunlu)" },
          { prop: "description", type: "string",    default: "—",  description: "Açıklama metni (opsiyonel)" },
          { prop: "onClose",     type: "() => void",default: "—",  description: "Sağlanırsa kapat butonu gösterilir" },
          { prop: "action",      type: "{ label: string; onClick: () => void }", default: "—", description: "Eylem linki" },
        ]} />
      </Section>
    </>
  );
}
