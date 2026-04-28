"use client";

import React, { useState } from "react";
import styles from "./Input.module.css";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  size?: InputSize;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  fullWidth?: boolean;
  showPasswordToggle?: boolean;
}

const EyeIcon = ({ open }: { open: boolean }) =>
  open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      size = "md",
      leftElement,
      rightElement,
      fullWidth = false,
      showPasswordToggle = false,
      id,
      type,
      className,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? React.useId();
    const [showPass, setShowPass] = useState(false);

    const isPassword = type === "password" || showPasswordToggle;
    const resolvedType = isPassword ? (showPass ? "text" : "password") : type;

    const wrapperClasses = [
      styles.wrapper,
      fullWidth ? styles.fullWidth : "",
    ]
      .filter(Boolean)
      .join(" ");

    const inputWrapClasses = [
      styles.inputWrap,
      styles[size],
      error ? styles.hasError : "",
      props.disabled ? styles.disabled : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}

        <div className={inputWrapClasses}>
          {leftElement && <span className={styles.element}>{leftElement}</span>}

          <input
            ref={ref}
            id={inputId}
            type={resolvedType}
            className={[styles.input, className ?? ""].filter(Boolean).join(" ")}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...props}
          />

          {isPassword ? (
            <button
              type="button"
              className={styles.eyeButton}
              onClick={() => setShowPass((v) => !v)}
              tabIndex={-1}
              aria-label={showPass ? "Şifreyi gizle" : "Şifreyi göster"}
            >
              <EyeIcon open={showPass} />
            </button>
          ) : (
            rightElement && <span className={styles.element}>{rightElement}</span>
          )}
        </div>

        {error && (
          <p id={`${inputId}-error`} className={styles.error} role="alert">
            {error}
          </p>
        )}
        {!error && hint && (
          <p id={`${inputId}-hint`} className={styles.hint}>
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
