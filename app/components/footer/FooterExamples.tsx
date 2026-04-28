"use client";
import { Section } from "@/docs-ui/Section";
import { Footer } from "@/src/components/Footer/Footer";

const Logo = () => (
  /* eslint-disable-next-line @next/next/no-img-element */
  <img src="/logo.svg" alt="Sabah Finans" style={{ width: 140, height: "auto" }} />
);

const columns = [
  {
    title: "Döviz kurları",
    links: [
      { label: "Dolar",           href: "#" },
      { label: "Euro",            href: "#" },
      { label: "Sterlin",         href: "#" },
      { label: "Frank",           href: "#" },
      { label: "Kanada Doları",   href: "#" },
      { label: "Riyal kuru",      href: "#" },
      { label: "Danimarka kronu", href: "#" },
      { label: "İsveç kronu",     href: "#" },
    ],
  },
  {
    title: "Altın & Kıymetli madenler",
    links: [
      { label: "Yen kuru",                      href: "#" },
      { label: "Pariteler",                     href: "#" },
      { label: "Merkez Bankası Döviz Kurları",  href: "#" },
      { label: "Altın fiyatları",               href: "#" },
      { label: "Gram altın",                    href: "#" },
      { label: "Cumhuriyet altını",             href: "#" },
      { label: "Yarım altın",                   href: "#" },
      { label: "Ons altın",                     href: "#" },
      { label: "22 Ayar bilezik",               href: "#" },
      { label: "Gümüş fiyatı",                  href: "#" },
    ],
  },
  {
    title: "Borsa & Piyasalar",
    links: [
      { label: "Kap haberleri",            href: "#" },
      { label: "Maaş hesaplama",           href: "#" },
      { label: "Canlı borsa",              href: "#" },
      { label: "Günün özeti",              href: "#" },
      { label: "Hisse fiyatları",          href: "#" },
      { label: "Geçmiş kapanışlar",        href: "#" },
      { label: "Endeksler",                href: "#" },
      { label: "En çok arananlar",         href: "#" },
      { label: "İşlem hacmi artanlar",     href: "#" },
      { label: "Dünya borsa endeksleri",   href: "#" },
    ],
  },
  {
    title: "Yatırım araçları",
    links: [
      { label: "Tahvil bono repo",  href: "#" },
      { label: "VİOP/VARANT",       href: "#" },
      { label: "Teknik analiz",     href: "#" },
      { label: "Hisse detay",       href: "#" },
      { label: "Mali tablolar",     href: "#" },
      { label: "Kripto paralar",    href: "#" },
      { label: "Bitcoin",           href: "#" },
      { label: "Ethereum",          href: "#" },
      { label: "Ripple",            href: "#" },
      { label: "Terimler sözlüğü",  href: "#" },
    ],
  },
];

const legal = [
  {
    title: "Yasal uyarı",
    text: "BIST Verileri Foreks tarafından 15 dakika gecikmelidir. BIST piyasalarında oluşan tüm verilere ait tüm fikri hakları tamamen BIST'e ait olup, bu veriler tekrar yayımlanamaz. Foreks tarafından sağlanan Pay Piyasası, Borçlanma Araçları Piyasası, Vadeli İşlem ve Opsiyon Piyasası verileri BIST kaynaklı en az 15 dakika gecikmelidir. SPK'nın 22 Nisan 2002 tarihli Resmi Gazete'de yayımlanan tebliği uyarınca yayımlanması istenen uyarı: 'Burada yer alan yatırım bilgi, yorum ve tavsiyeleri yatırım danışmanlığı kapsamında değildir. Yatırım danışmanlığı hizmeti, aracı kurumlar, portföy yönetim şirketleri, mevduat kabul etmeyen bankalar ile müşteri arasında imzalanacak yatırım danışmanlığı sözleşmesi çerçevesinde sunulmaktadır.'",
  },
  {
    title: "Veri sağlayıcı uyarısı",
    text: "Finansal veriler Foreks A.Ş. tarafından sağlanmaktadır. Turkuvaz Media Group, yayınlanan verilerin doğruluğu ve tamlığı konusunda herhangi bir garanti vermez. Veri yayınında oluşabilecek aksaklıklardan, verinin eksik veya yanlış yayımlanmasından meydana gelebilecek herhangi bir zarardan Turkuvaz Media Group sorumlu değildir.",
  },
];

export function FooterExamples() {
  return (
    <>
      <Section title="Default">
        <div style={{ borderRadius: 16, overflow: "hidden" }}>
          <Footer
            logo={<Logo />}
            copyright={`Copyright © ${new Date().getFullYear()} Tüm hakları saklıdır. TURKUVAZ HABERCİLİK VE YAYINCILIK ANONİM ŞİRKETİ`}
            columns={columns}
            legal={legal}
          />
        </div>
      </Section>

      <Section title="Minimal (logo + copyright)">
        <div style={{ borderRadius: 16, overflow: "hidden" }}>
          <Footer
            logo={<Logo />}
            copyright={`Copyright © ${new Date().getFullYear()} Tüm hakları saklıdır. TURKUVAZ HABERCİLİK VE YAYINCILIK ANONİM ŞİRKETİ`}
          />
        </div>
      </Section>
    </>
  );
}
