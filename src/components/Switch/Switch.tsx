"use client";

import React from "react";
import styles from "./Switch.module.css";

export type SwitchSize = "md" | "lg";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: SwitchSize;
  disabled?: boolean;
  label?: string;
  id?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  size = "md",
  disabled = false,
  label,
  id,
}) => {
  const switchId = id ?? React.useId();

  const classes = [
    styles.track,
    styles[size],
    checked ? styles.on : styles.off,
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={styles.wrapper} htmlFor={switchId}>
      <input
        id={switchId}
        type="checkbox"
        role="switch"
        className={styles.input}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
        aria-checked={checked}
      />
      <span className={classes}>
        <span className={styles.thumb} />
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

Switch.displayName = "Switch";
