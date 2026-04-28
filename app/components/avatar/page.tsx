import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PreviewBox, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { Avatar } from "@/src/components/Avatar/Avatar";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

export default function AvatarPage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Avatar"
        title="Avatar"
        description="Kullanıcı kimliğini temsil eden dairesel bileşen. Fotoğraf ve baş harf modlarını destekler."
      />

      <Section title="Image Avatar" description="src prop'u sağlandığında fotoğrafı gösterir.">
        <PreviewBox>
          {sizes.map((s) => (
            <Avatar key={s} src="https://i.pravatar.cc/150?img=47" name="Tayfun Holin" size={s} />
          ))}
        </PreviewBox>
      </Section>

      <Section title="Initials Avatar" description="src yoksa name'den baş harfler üretilir.">
        <PreviewBox>
          {sizes.map((s) => (
            <Avatar key={s} name="Tayfun Holin" size={s} />
          ))}
        </PreviewBox>
      </Section>

      <Section title="Fallback" description="Hatalı bir src otomatik olarak initials moduna döner.">
        <PreviewBox>
          <Avatar src="https://broken.url/photo.jpg" name="Tayfun Holin" size="md" />
          <Avatar src="https://broken.url/photo.jpg" name="Finans Sabah" size="md" />
        </PreviewBox>
      </Section>

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Image / Initials area", description: "Kullanıcının profil fotoğrafı gösterilir. src hatalı veya yoksa name'den üretilen baş harfler renkli arka planla gösterilir." },
          { name: "Dairesel container", description: "border-radius: 50% ile tam daire formu. xs=24px, sm=32px, md=40px, lg=48px, xl=56px." },
          { name: "Renk arka planı (initials)", description: "Her kullanıcı için name'den deterministik olarak hesaplanan sabit renk. Aynı isim her zaman aynı rengi üretir." },
          { name: "alt metni", description: "name prop'u ekran okuyucular ve erişilebilirlik için img alt değeri olarak kullanılır." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "Kullanıcı kimliği için kullan", description: "Profil menüsü, yorum listesi, atama alanları gibi kullanıcıyı temsil eden yerlerde kullan." },
          { type: "do",   title: "name prop'unu her zaman ekle", description: "Fotoğrafsız durumlarda baş harf üretimi ve erişilebilirlik için name zorunludur." },
          { type: "do",   title: "Boyutu bağlama göre seç", description: "Dar alanlarda xs/sm, öne çıkan profil alanlarında lg/xl kullan." },
          { type: "dont", title: "Marka logosu veya ürün görseli için kullanma", description: "Avatar yalnızca kişi kimliği içindir. Logo/ürün için img veya Icon kullan." },
          { type: "dont", title: "Çok küçük boyutu okunaksız alanlarda kullanma", description: "xs (24px) boyut, yanında açıklayıcı metin olmadan kullanıcıyı tanımlamak için yeterince büyük değildir." },
          { type: "dont", title: "Gruplamada 5'ten fazla avatar üst üste koyma", description: "Çok fazla iç içe avatar okunabilirliği düşürür; sayı rozeti (+N) ile özetle." },
        ]} />
      </Section>

      <Section title="Props">
        <PropsTable rows={[
          { prop: "src",  type: "string", default: "—",    description: "Fotoğraf URL'i. Hatalıysa initials'a döner." },
          { prop: "name", type: "string", default: "—",    description: "Alt text ve baş harf üretimi için isim." },
          { prop: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Boyut — xs=24px, sm=32px, md=40px, lg=48px, xl=56px" },
        ]} />
      </Section>
    </>
  );
}
