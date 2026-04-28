"use client";

import React from "react";
import styles from "./Card.module.css";

/* ─── Shared types ─── */
export type CardVariant = "main" | "text" | "standard";

/* ─── Main Card ─── */
export interface MainCardProps {
  type: "main";
  image: string;
  imageAlt?: string;
  title: string;
  description?: string;
  dots?: number;
  activeDot?: number;
  onDotClick?: (index: number) => void;
  className?: string;
}

export function MainCard({
  image,
  imageAlt = "",
  title,
  description,
  dots = 0,
  activeDot = 0,
  onDotClick,
  className,
}: Omit<MainCardProps, "type">) {
  return (
    <div className={[styles.mainCard, className ?? ""].filter(Boolean).join(" ")}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={imageAlt} className={styles.mainImage} />
      <div className={styles.mainOverlay} />
      <div className={styles.mainContent}>
        <h2 className={styles.mainTitle}>{title}</h2>
        {description && <p className={styles.mainDesc}>{description}</p>}
        {dots > 1 && (
          <div className={styles.dots}>
            {Array.from({ length: dots }).map((_, i) => (
              <button
                key={i}
                className={[styles.dot, i === activeDot ? styles.dotActive : ""].filter(Boolean).join(" ")}
                onClick={() => onDotClick?.(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Text Card ─── */
export interface TextCardItem {
  time: string;
  title: string;
  href?: string;
}

export interface TextCardProps {
  type: "text";
  label?: string;
  items: TextCardItem[];
  className?: string;
}

export function TextCard({
  label,
  items,
  className,
}: Omit<TextCardProps, "type">) {
  return (
    <div className={[styles.textCard, className ?? ""].filter(Boolean).join(" ")}>
      {label && <p className={styles.textLabel}>{label}</p>}
      <ul className={styles.textList}>
        {items.map((item, i) => (
          <li key={i} className={styles.textItem}>
            {item.href ? (
              <a href={item.href} className={styles.textItemLink}>
                <span className={styles.textTime}>{item.time}</span>
                <span className={styles.textTitle}>{item.title}</span>
              </a>
            ) : (
              <>
                <span className={styles.textTime}>{item.time}</span>
                <span className={styles.textTitle}>{item.title}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Standard Card ─── */
export interface StandardCardProps {
  type?: "standard";
  image?: string;
  imageAlt?: string;
  imageHeight?: number;
  title: string;
  subtext?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function StandardCard({
  image,
  imageAlt = "",
  imageHeight = 160,
  title,
  subtext,
  href,
  onClick,
  className,
}: Omit<StandardCardProps, "type">) {
  const isInteractive = !!href || !!onClick;
  const inner = (
    <>
      {image && (
        <div className={styles.stdImageWrap} style={{ height: imageHeight }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} className={styles.stdImage} />
        </div>
      )}
      <div className={styles.stdBody}>
        <p className={styles.stdTitle}>{title}</p>
        {subtext && <p className={styles.stdSubtext}>{subtext}</p>}
      </div>
    </>
  );

  const cls = [styles.stdCard, isInteractive ? styles.stdInteractive : "", className ?? ""].filter(Boolean).join(" ");

  if (href) return <a href={href} className={cls}>{inner}</a>;
  return <div className={cls} onClick={onClick}>{inner}</div>;
}

/* ─── Polymorphic Card ─── */
export type CardProps = MainCardProps | TextCardProps | StandardCardProps;

export function Card(props: CardProps) {
  if (props.type === "main")   return <MainCard    {...props} />;
  if (props.type === "text")   return <TextCard    {...props} />;
  return                              <StandardCard {...props} />;
}

Card.displayName = "Card";
