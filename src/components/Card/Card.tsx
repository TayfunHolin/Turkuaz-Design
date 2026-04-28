"use client";

import React from "react";
import styles from "./Card.module.css";

export interface CardProps {
  variant?: "default" | "outlined" | "elevated";
  padding?: "sm" | "md" | "lg" | "none";
  clickable?: boolean;
  href?: string;
  image?: string;
  imageAlt?: string;
  imageHeight?: number;
  badge?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Card({
  variant = "default",
  padding = "md",
  clickable = false,
  href,
  image,
  imageAlt = "",
  imageHeight = 180,
  badge,
  title,
  subtitle,
  description,
  footer,
  actions,
  children,
  onClick,
  className,
}: CardProps) {
  const isInteractive = clickable || !!href || !!onClick;

  const cardClass = [
    styles.card,
    styles[variant],
    padding !== "none" ? styles[`pad_${padding}`] : "",
    isInteractive ? styles.interactive : "",
    className ?? "",
  ].filter(Boolean).join(" ");

  const inner = (
    <>
      {image && (
        <div className={styles.imageWrap} style={{ height: imageHeight }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} className={styles.image} />
        </div>
      )}
      <div className={padding === "none" ? styles.body : ""}>
        {badge && <div className={styles.badgeRow}>{badge}</div>}
        {(title || subtitle) && (
          <div className={styles.header}>
            {title    && <div className={styles.title}>{title}</div>}
            {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
          </div>
        )}
        {description && <p className={styles.description}>{description}</p>}
        {children}
        {actions && <div className={styles.actions}>{actions}</div>}
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={cardClass} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <div
      className={cardClass}
      onClick={isInteractive ? onClick : undefined}
      role={isInteractive && !href ? "button" : undefined}
      tabIndex={isInteractive && !href ? 0 : undefined}
      onKeyDown={isInteractive && !href ? (e) => e.key === "Enter" && onClick?.() : undefined}
    >
      {inner}
    </div>
  );
}

Card.displayName = "Card";
