"use client";

import React from "react";
import styles from "./Checkbox.module.css";

export type CheckboxSize = "sm" | "md";

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  indeterminate?: boolean;
  size?: CheckboxSize;
  disabled?: boolean;
  label?: string;
  id?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  indeterminate = false,
  size = "md",
  disabled = false,
  label,
  id,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const inputId = id ?? React.useId();

  React.useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <label className={[styles.wrapper, disabled ? styles.disabled : ""].filter(Boolean).join(" ")} htmlFor={inputId}>
      <input
        ref={inputRef}
        id={inputId}
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />
      <span className={[styles.box, styles[size], checked || indeterminate ? styles.checked : ""].filter(Boolean).join(" ")}>
        {checked && !indeterminate && (
          <svg viewBox="0 0 12 12" fill="none" className={styles.check}>
            <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {indeterminate && (
          <svg viewBox="0 0 12 12" fill="none" className={styles.check}>
            <path d="M2.5 6h7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

Checkbox.displayName = "Checkbox";
