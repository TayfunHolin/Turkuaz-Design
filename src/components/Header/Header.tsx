"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";

export interface HeaderNavItem {
  key: string;
  label: string;
  href?: string;
  active?: boolean;
}

export interface HeaderProps {
  logo?: React.ReactNode;
  navItems?: HeaderNavItem[];
  actions?: React.ReactNode;
  sticky?: boolean;
  variant?: "dark" | "light";
  onNavClick?: (item: HeaderNavItem) => void;
  className?: string;
}

const HamburgerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6"  x2="21" y2="6"  />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export function Header({
  logo,
  navItems = [],
  actions,
  sticky = false,
  variant = "dark",
  onNavClick,
  className,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const wrapClass = [
    styles.header,
    styles[variant],
    sticky ? styles.sticky : "",
    className ?? "",
  ].filter(Boolean).join(" ");

  return (
    <header className={wrapClass}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logoSlot}>
          {logo}
        </div>

        {/* Desktop nav */}
        {navItems.length > 0 && (
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href ?? "#"}
                className={[styles.navItem, item.active ? styles.navItemActive : ""].filter(Boolean).join(" ")}
                onClick={(e) => {
                  if (!item.href || item.href === "#") e.preventDefault();
                  onNavClick?.(item);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {/* Actions + hamburger */}
        <div className={styles.actions}>
          {actions}
          {navItems.length > 0 && (
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menüyü aç/kapat"
            >
              {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && navItems.length > 0 && (
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href ?? "#"}
              className={[styles.mobileNavItem, item.active ? styles.mobileNavItemActive : ""].filter(Boolean).join(" ")}
              onClick={(e) => {
                if (!item.href || item.href === "#") e.preventDefault();
                onNavClick?.(item);
                setMobileOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

Header.displayName = "Header";
