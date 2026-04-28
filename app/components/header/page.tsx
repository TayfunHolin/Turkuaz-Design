import { PageHeader } from "@/docs-ui/PageHeader";
import { Section, PropsTable, AnatomyList, DosDonts } from "@/docs-ui/Section";
import { HeaderExamples } from "./HeaderExamples";

export default function HeaderPage() {
  return (
    <>
      <PageHeader
        category="Shared Components → Header"
        title="Header"
        description="Uygulama üst navigasyon çubuğu. Logo, navigasyon linkleri, aksiyon alanı ve mobil hamburger menü içerir."
      />

      <HeaderExamples />

      <Section title="Anatomy">
        <AnatomyList parts={[
          { name: "Header container", description: "Tam genişlik, h=72px şerit. dark variant=#1A1F6B, light variant=#fff. sticky=true ile sayfa üstünde sabit kalır." },
          { name: "Logo slot", description: "Sol tarafa sabitlenmiş marka logosu alanı. img, SVG veya herhangi bir ReactNode kabul eder." },
          { name: "Navigation area", description: "Masaüstünde ortada/solda görünen nav linkleri. Aktif item vurgulanır. 768px altında gizlenir." },
          { name: "Actions area", description: "Sağa hizalanmış aksiyon alanı. Giriş/üye ol butonları, kullanıcı avatarı veya herhangi bir ReactNode yerleştirilebilir." },
          { name: "Hamburger button", description: "768px altında gösterilen mobil menü toggle butonu. Nav items mevcutsa otomatik görünür." },
          { name: "Mobile nav drawer", description: "Hamburger açıldığında header'ın altına açılan dikey navigasyon listesi." },
        ]} />
      </Section>

      <Section title="Kullanım Kılavuzu">
        <DosDonts items={[
          { type: "do",   title: "sticky=true ile sabit kullan", description: "Uygulama header'ı her sayfada erişilebilir olmalı. Kullanıcı sayfayı kaydırsa da navigasyona ulaşabilmeli." },
          { type: "do",   title: "Nav item sayısını 5–7 ile sınırla", description: "Çok fazla navigasyon öğesi kullanıcıyı oryantasyonsuz bırakır. Yan menü veya mega menü düşün." },
          { type: "do",   title: "dark variant'ı birincil uygulama sayfaları için kullan", description: "Koyu arka plan marka tutarlılığı sağlar. light variant login sayfası gibi odak gerektiren alanlarda uygun." },
          { type: "dont", title: "Actions alanına 4'ten fazla element koyma", description: "Çok fazla sağ aksiyon header'ı karmaşık ve tıkıştırılmış gösterir. Kullanıcı profil menüsüne taşı." },
          { type: "dont", title: "Mobil hamburger'ı özel olarak gizleme", description: "768px altı otomatik yönetilir. Ek CSS ile hamburger'ı gizlemek mobil kullanıcıları navigasyonsuz bırakır." },
          { type: "dont", title: "Logo alanına büyük görseller koyma", description: "Header yüksekliği 72px sabit; logo max ~140px geniş ve ~36px yüksek olmalı." },
        ]} />
      </Section>

      <Section title="Props">
        <PropsTable rows={[
          { prop: "logo",       type: "ReactNode",         default: "—",       description: "Logo alanı içeriği" },
          { prop: "navItems",   type: "HeaderNavItem[]",   default: "[]",      description: "Navigasyon linkleri" },
          { prop: "actions",    type: "ReactNode",         default: "—",       description: "Sağ taraf aksiyon alanı (buton, avatar vb.)" },
          { prop: "sticky",     type: "boolean",           default: "false",   description: "Sayfada sabit kalır (position: sticky)" },
          { prop: "variant",    type: '"dark" | "light"',  default: '"dark"',  description: "Renk teması" },
          { prop: "onNavClick", type: "(item) => void",    default: "—",       description: "Nav öğesine tıklama handler" },
          { prop: "className",  type: "string",            default: "—",       description: "Ek CSS sınıfı" },
        ]} />
      </Section>

      <Section title="HeaderNavItem Props">
        <PropsTable rows={[
          { prop: "key",    type: "string",  default: "—",     description: "Benzersiz anahtar" },
          { prop: "label",  type: "string",  default: "—",     description: "Link metni" },
          { prop: "href",   type: "string",  default: '"#"',   description: "Link URL" },
          { prop: "active", type: "boolean", default: "false", description: "Aktif durum" },
        ]} />
      </Section>
    </>
  );
}
