"use client";
import { useState } from "react";
import { Section, PreviewBox } from "@/docs-ui/Section";
import { DataTable } from "@/src/components/DataTable/DataTable";
import { Badge } from "@/src/components/Badge/Badge";

type Article = {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  status: "active" | "pending" | "draft";
  views: number;
};

const articles: Article[] = [
  { id: 1, title: "Merkez Bankası faiz kararını açıkladı",  category: "Ekonomi", author: "A. Yılmaz",  date: "28 Nis 2026", status: "active",  views: 14320 },
  { id: 2, title: "Borsada sert yükseliş yaşandı",          category: "Borsa",   author: "M. Demir",   date: "27 Nis 2026", status: "active",  views: 9841  },
  { id: 3, title: "Dolar/TL güne nasıl başladı?",           category: "Döviz",   author: "S. Kaya",    date: "27 Nis 2026", status: "pending", views: 7203  },
  { id: 4, title: "Altın fiyatları rekor kırdı",            category: "Emtia",   author: "A. Yılmaz",  date: "26 Nis 2026", status: "active",  views: 21567 },
  { id: 5, title: "Enflasyon verileri beklentilerin altında",category: "Ekonomi", author: "E. Şahin",   date: "25 Nis 2026", status: "draft",   views: 0     },
  { id: 6, title: "Petrol fiyatı gerilemeye devam ediyor",  category: "Emtia",   author: "M. Demir",   date: "24 Nis 2026", status: "active",  views: 5612  },
];

const statusVariant: Record<Article["status"], "success" | "warning" | "default"> = {
  active:  "success",
  pending: "warning",
  draft:   "default",
};
const statusLabel: Record<Article["status"], string> = {
  active:  "Yayında",
  pending: "Bekliyor",
  draft:   "Taslak",
};

const columns = [
  { key: "title"    as const, label: "Başlık",    sortable: true  },
  { key: "category" as const, label: "Kategori",  sortable: true, width: 120 },
  { key: "author"   as const, label: "Yazar",     sortable: true, width: 130 },
  { key: "date"     as const, label: "Tarih",     sortable: false, width: 130 },
  {
    key: "status" as const, label: "Durum", width: 120,
    render: (v: unknown) => {
      const s = v as Article["status"];
      return <Badge variant={statusVariant[s]} dot size="sm">{statusLabel[s]}</Badge>;
    },
  },
  {
    key: "views" as const, label: "Görüntülenme", width: 130, align: "right" as const, sortable: true,
    render: (v: unknown) => (v as number).toLocaleString("tr-TR"),
  },
];

export function DataTableExamples() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Section title="Default">
        <DataTable columns={columns} data={articles} rowKey="id" />
      </Section>

      <Section title="Sortable + Selectable">
        <DataTable columns={columns} data={articles} rowKey="id" selectable />
      </Section>

      <Section title="Loading State">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <button
              onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000); }}
              style={{ marginBottom: 12, padding: "8px 16px", background: "#292F89", color: "#fff", border: "none", borderRadius: 9999, cursor: "pointer", fontWeight: 600, fontSize: 13 }}
            >
              Loading'i tetikle (2sn)
            </button>
          </div>
          <DataTable columns={columns} data={articles} rowKey="id" loading={loading} />
        </div>
      </Section>

      <Section title="Empty State">
        <DataTable columns={columns} data={[]} rowKey="id" emptyText="Henüz içerik eklenmemiş." />
      </Section>
    </>
  );
}
