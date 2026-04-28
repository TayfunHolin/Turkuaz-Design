"use client";

import React from "react";
import styles from "./Footer.module.css";

export interface FooterLink {
  label: string;
  href?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterLegal {
  title: string;
  text: string;
}

export interface FooterProps {
  logo?: React.ReactNode;
  copyright?: string;
  columns?: FooterColumn[];
  legal?: FooterLegal[];
  className?: string;
}

export function Footer({
  logo,
  copyright,
  columns = [],
  legal = [],
  className,
}: FooterProps) {
  return (
    <footer className={[styles.footer, className ?? ""].filter(Boolean).join(" ")}>
      <div className={styles.inner}>

        {/* Top: logo + columns */}
        <div className={styles.top}>
          {/* Logo + copyright */}
          <div className={styles.brand}>
            {logo && <div className={styles.logo}>{logo}</div>}
            {copyright && <p className={styles.copyright}>{copyright}</p>}
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.title} className={styles.col}>
              <p className={styles.colTitle}>{col.title}</p>
              <ul className={styles.linkList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a href={link.href} className={styles.link}>{link.label}</a>
                    ) : (
                      <span className={styles.link}>{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        {legal.length > 0 && (
          <div className={styles.legal}>
            <div className={styles.legalDivider} />
            {legal.map((item) => (
              <div key={item.title} className={styles.legalItem}>
                <p className={styles.legalTitle}>{item.title}</p>
                <p className={styles.legalText}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </footer>
  );
}

Footer.displayName = "Footer";
