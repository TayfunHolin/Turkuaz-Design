import React from "react";
import styles from "./Button.module.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "plain"
  | "ghost"
  | "link"
  | "destructive";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  iconOnly?: boolean;
}

const variantClass: Record<ButtonVariant, string> = {
  primary:     styles.primary,
  secondary:   styles.secondary,
  plain:       styles.plain,
  ghost:       styles.ghost,
  link:        styles.link,
  destructive: styles.destructive,
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      iconOnly = false,
      disabled,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const classes = [
      styles.button,
      variantClass[variant],
      styles[size],
      iconOnly ? styles.iconOnly : "",
      fullWidth ? styles.fullWidth : "",
      loading ? styles.loading : "",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <svg className={styles.spinner} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="28" strokeDashoffset="10" />
          </svg>
        ) : (
          <>
            {leftIcon  && <span className={styles.icon}>{leftIcon}</span>}
            {children && <span>{children}</span>}
            {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
