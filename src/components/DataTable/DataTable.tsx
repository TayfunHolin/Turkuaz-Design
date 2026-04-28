"use client";

import React, { useState, useMemo } from "react";
import styles from "./DataTable.module.css";

export interface DataTableColumn<T = Record<string, unknown>> {
  key: keyof T;
  label: string;
  width?: string | number;
  align?: "left" | "center" | "right";
  sortable?: boolean;
  render?: (value: unknown, row: T, index: number) => React.ReactNode;
}

export interface DataTableProps<T = Record<string, unknown>> {
  columns: DataTableColumn<T>[];
  data: T[];
  rowKey?: keyof T | ((row: T, index: number) => string);
  selectable?: boolean;
  loading?: boolean;
  emptyText?: string;
  onRowClick?: (row: T, index: number) => void;
  className?: string;
}

type SortDir = "asc" | "desc";

const ChevronUp = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 15l-6-6-6 6" />
  </svg>
);
const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export function DataTable<T = Record<string, unknown>>({
  columns,
  data,
  rowKey,
  selectable = false,
  loading = false,
  emptyText = "Veri bulunamadı.",
  onRowClick,
  className,
}: DataTableProps<T>) {
  const [sortKey, setSortKey]     = useState<keyof T | null>(null);
  const [sortDir, setSortDir]     = useState<SortDir>("asc");
  const [selected, setSelected]   = useState<Set<string>>(new Set());
  const [hovered, setHovered]     = useState<string | null>(null);

  const getKey = (row: T, index: number): string => {
    if (!rowKey) return String(index);
    if (typeof rowKey === "function") return rowKey(row, index);
    return String(row[rowKey]);
  };

  const sorted = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      const cmp = String(av ?? "").localeCompare(String(bv ?? ""), "tr", { numeric: true });
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [data, sortKey, sortDir]);

  const handleSort = (col: DataTableColumn<T>) => {
    if (!col.sortable) return;
    if (sortKey === col.key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(col.key);
      setSortDir("asc");
    }
  };

  const allKeys    = sorted.map((r, i) => getKey(r, i));
  const allSelected = allKeys.every((k) => selected.has(k));

  const toggleAll = () => {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(allKeys));
    }
  };

  const toggleRow = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className={[styles.wrap, className ?? ""].filter(Boolean).join(" ")}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            {selectable && (
              <th className={styles.th} style={{ width: 48 }}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={allSelected && sorted.length > 0}
                  onChange={toggleAll}
                  aria-label="Tümünü seç"
                />
              </th>
            )}
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={[styles.th, col.sortable ? styles.sortable : ""].filter(Boolean).join(" ")}
                style={{
                  width: col.width,
                  textAlign: col.align ?? "left",
                }}
                onClick={() => handleSort(col)}
              >
                <span className={styles.thInner}>
                  {col.label}
                  {col.sortable && (
                    <span className={styles.sortIcon}>
                      {sortKey === col.key ? (
                        sortDir === "asc" ? <ChevronUp /> : <ChevronDown />
                      ) : (
                        <span className={styles.sortIdle}><ChevronUp /></span>
                      )}
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            skeletonRows.map((_, i) => (
              <tr key={i} className={[styles.row, i % 2 === 1 ? styles.rowAlt : ""].filter(Boolean).join(" ")}>
                {selectable && <td className={styles.td}><span className={styles.skeleton} style={{ width: 16, height: 16 }} /></td>}
                {columns.map((col) => (
                  <td key={String(col.key)} className={styles.td}>
                    <span className={styles.skeleton} style={{ width: `${60 + Math.random() * 30}%` }} />
                  </td>
                ))}
              </tr>
            ))
          ) : sorted.length === 0 ? (
            <tr>
              <td
                className={styles.empty}
                colSpan={columns.length + (selectable ? 1 : 0)}
              >
                {emptyText}
              </td>
            </tr>
          ) : (
            sorted.map((row, i) => {
              const key       = getKey(row, i);
              const isSelected = selected.has(key);
              const isHovered  = hovered === key;
              const rowClass  = [
                styles.row,
                i % 2 === 1 && !isSelected ? styles.rowAlt : "",
                isSelected ? styles.rowSelected : "",
                isHovered && !isSelected ? styles.rowHover : "",
                onRowClick ? styles.clickable : "",
              ].filter(Boolean).join(" ");

              return (
                <tr
                  key={key}
                  className={rowClass}
                  onMouseEnter={() => setHovered(key)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => onRowClick?.(row, i)}
                >
                  {selectable && (
                    <td className={styles.td} onClick={(e) => { e.stopPropagation(); toggleRow(key); }}>
                      <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={isSelected}
                        onChange={() => toggleRow(key)}
                        aria-label="Satırı seç"
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td
                      key={String(col.key)}
                      className={styles.td}
                      style={{ textAlign: col.align ?? "left" }}
                    >
                      {col.render
                        ? col.render(row[col.key], row, i)
                        : String(row[col.key] ?? "")}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

DataTable.displayName = "DataTable";
