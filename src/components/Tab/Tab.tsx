"use client";

import React from "react";
import styles from "./Tab.module.css";

export type TabSize = "sm" | "md";

export interface TabItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  active: string;
  onChange: (key: string) => void;
  size?: TabSize;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  active,
  onChange,
  size = "md",
  className,
}) => {
  return (
    <div
      className={[styles.tabs, styles[size], className ?? ""].filter(Boolean).join(" ")}
      role="tablist"
    >
      {items.map((item) => {
        const isActive = item.key === active;
        return (
          <button
            key={item.key}
            role="tab"
            aria-selected={isActive}
            className={[styles.tab, isActive ? styles.active : styles.default].filter(Boolean).join(" ")}
            onClick={() => onChange(item.key)}
            type="button"
          >
            {item.icon && <span className={styles.icon}>{item.icon}</span>}
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

Tabs.displayName = "Tabs";
