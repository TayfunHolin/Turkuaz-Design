"use client";

import React from "react";
import styles from "./Chip.module.css";

export type ChipType = "filled" | "outline";
export type ChipSize = "md" | "lg";

export interface ChipProps {
  type?: ChipType;
  size?: ChipSize;
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Chip: React.FC<ChipProps> = ({
  type = "filled",
  size = "md",
  active = false,
  onClick,
  children,
  className,
  disabled = false,
}) => {
  const classes = [
    styles.chip,
    styles[type],
    styles[size],
    active ? styles.active : styles.inactive,
    disabled ? styles.disabled : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type="button"
      aria-pressed={active}
    >
      {children}
    </button>
  );
};

Chip.displayName = "Chip";
