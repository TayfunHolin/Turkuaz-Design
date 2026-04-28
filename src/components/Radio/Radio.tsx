"use client";

import React from "react";
import styles from "./Radio.module.css";

export type RadioSize = "sm" | "md";

export interface RadioProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: RadioSize;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
  id?: string;
}

export const Radio: React.FC<RadioProps> = ({
  checked = false,
  onChange,
  size = "md",
  disabled = false,
  label,
  name,
  value,
  id,
}) => {
  const inputId = id ?? React.useId();

  return (
    <label className={[styles.wrapper, disabled ? styles.disabled : ""].filter(Boolean).join(" ")} htmlFor={inputId}>
      <input
        id={inputId}
        type="radio"
        className={styles.input}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
        name={name}
        value={value}
      />
      <span className={[styles.circle, styles[size], checked ? styles.checked : ""].filter(Boolean).join(" ")}>
        {checked && <span className={styles.dot} />}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

Radio.displayName = "Radio";
