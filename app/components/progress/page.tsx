import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PreviewBox, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { Progress } from "@/src/components/Progress/Progress";

export default function ProgressPage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Progress"
        title="Progress"
        description="Dairesel ilerleme göstergesi. Tamamlanma yüzdesini görsel olarak sunar."
      />

      <Section title="Sizes">
        <PreviewBox>
          <Progress value={65} size="sm" showLabel />
          <Progress value={65} size="md" showLabel />
        </PreviewBox>
      </Section>

      <Section title="Values">
        <PreviewBox>
          {[0, 25, 50, 75, 100].map(v => (
            <Progress key={v} value={v} size="md" showLabel />
          ))}
        </PreviewBox>
      </Section>

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Track (daire)", description: "Arka plan dairesel yolu. Açık gri (#E9E9E9) renkte tam çember oluşturur. sm=20px, md=24px çap." },
          { name: "Fill arc", description: "Doluluk oranını gösteren ana yay. Renk: #292F89 (primary). stroke-dashoffset ile dinamik animasyonlu çizim." },
          { name: "Percentage label", description: "showLabel=true olduğunda daire ortasında yüzde değeri gösterilir. Çok küçük boyutlarda gizlenmelidir." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "Bilinen ilerleme için kullan", description: "Dosya yükleme, görev tamamlama gibi 0–100% arasında ölçülebilen işlemler için idealdir." },
          { type: "do",   title: "showLabel ile değeri göster", description: "Kullanıcının ne kadar tamamlandığını sayısal olarak görmesi gerektiğinde etkinleştir." },
          { type: "do",   title: "%100'de kısa süre bırak", description: "Tamamlandığında bileşeni anında gizleme; kullanıcının başarıyı görmesi için 500–1000ms bekle." },
          { type: "dont", title: "Bilinmeyen süre için kullanma", description: "Kaç saniye süreceği bilinmeyen işlemler için loading spinner veya indeterminate animasyon kullan." },
          { type: "dont", title: "Çok küçük boyutta showLabel kullanma", description: "sm (20px) boyutunda yüzde metni okunaksız görünür. showLabel'ı yalnızca md veya daha büyük boyutlarda kullan." },
          { type: "dont", title: "Birden fazla progress'i üst üste yığma", description: "Aynı alanda birden fazla dairesel progress dikkat dağıtır. Bunun yerine tek bir toplam göster." },
        ]} />
      </Section>

      <Section title="Props">
        <PropsTable rows={[
          { prop: "value",     type: "number (0–100)", default: "—",     description: "İlerleme değeri" },
          { prop: "size",      type: '"sm" | "md"',    default: '"md"',  description: "Boyut — sm=20px, md=24px" },
          { prop: "showLabel", type: "boolean",        default: "false", description: "Daire ortasında yüzde etiketi gösterir" },
        ]} />
      </Section>
    </>
  );
}
