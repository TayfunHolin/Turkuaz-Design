"use client";
import { Section, PreviewBox } from "@/docs-ui/Section";
import { Toast } from "@/src/components/Toast/Toast";

export function ToastExamples() {
  return (
    <>
      <Section title="Variants">
        <PreviewBox>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
            <Toast type="success" title="İşlem başarılı" description="Değişiklikleriniz kaydedildi." />
            <Toast type="error"   title="Bir hata oluştu" description="Lütfen tekrar deneyiniz." />
            <Toast type="info"    title="Bilgi" description="Güncelleme mevcut." />
            <Toast type="warning" title="Dikkat" description="Bu işlem geri alınamaz." />
          </div>
        </PreviewBox>
      </Section>

      <Section title="With Close Button">
        <PreviewBox>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
            <Toast type="success" title="Başarılı" onClose={() => {}} />
            <Toast type="error"   title="Hata" description="Tekrar deneyin." onClose={() => {}} />
          </div>
        </PreviewBox>
      </Section>

      <Section title="With Action">
        <PreviewBox>
          <Toast
            type="info"
            title="Yeni sürüm mevcut"
            description="v2.1.0 yayınlandı."
            action={{ label: "Güncelle", onClick: () => {} }}
            onClose={() => {}}
          />
        </PreviewBox>
      </Section>
    </>
  );
}
