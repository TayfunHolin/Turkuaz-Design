"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

const nav = [
  {
    group: "Foundations",
    items: [
      { label: "Colors",      href: "/foundations/colors" },
      { label: "Typography",  href: "/foundations/typography" },
      { label: "Spacing",     href: "/foundations/spacing" },
    ],
  },
  {
    group: "Components",
    items: [
      { label: "Avatar",    href: "/components/avatar" },
      { label: "Badge",     href: "/components/badge" },
      { label: "Button",    href: "/components/button" },
      { label: "Card",      href: "/components/card" },
      { label: "Checkbox",  href: "/components/checkbox" },
      { label: "Chip",       href: "/components/chip" },
      { label: "Data Table", href: "/components/data-table" },
      { label: "Header",     href: "/components/header" },
      { label: "Input",      href: "/components/input" },
      { label: "Progress",  href: "/components/progress" },
      { label: "Radio",     href: "/components/radio" },
      { label: "Switch",    href: "/components/switch" },
      { label: "Tab",       href: "/components/tab" },
      { label: "Toast",     href: "/components/toast" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <Link href="/" className={styles.logo}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="Finans" className={styles.logoImg} />
      </Link>

      <nav className={styles.nav}>
        {nav.map((section) => (
          <div key={section.group} className={styles.section}>
            <p className={styles.groupLabel}>{section.group}</p>
            <ul className={styles.list}>
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={[styles.link, active ? styles.active : ""].filter(Boolean).join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
