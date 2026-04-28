import React from "react";
import styles from "./Toast.module.css";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastProps {
  type?: ToastType;
  title: string;
  description?: string;
  onClose?: () => void;
  action?: { label: string; onClick: () => void };
  className?: string;
}

const icons: Record<ToastType, React.ReactNode> = {
  success: (
    <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
      <circle cx="10" cy="10" r="9" stroke="#039855" strokeWidth="1.5" />
      <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="#039855" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
      <circle cx="10" cy="10" r="9" stroke="#ED1C24" strokeWidth="1.5" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#ED1C24" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
      <circle cx="10" cy="10" r="9" stroke="#1171C9" strokeWidth="1.5" />
      <path d="M10 9v5M10 7v.5" stroke="#1171C9" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 20 20" fill="none" width="20" height="20">
      <path d="M10 2.5L18 17H2L10 2.5z" stroke="#DC6803" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 8v4M10 13.5v.5" stroke="#DC6803" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export const Toast: React.FC<ToastProps> = ({
  type = "info",
  title,
  description,
  onClose,
  action,
  className,
}) => {
  return (
    <div
      className={[styles.toast, styles[type], className ?? ""].filter(Boolean).join(" ")}
      role="alert"
      aria-live="polite"
    >
      <span className={styles.icon}>{icons[type]}</span>
      <div className={styles.body}>
        <p className={styles.title}>{title}</p>
        {description && <p className={styles.desc}>{description}</p>}
        {action && (
          <button className={styles.action} onClick={action.onClick}>
            {action.label}
          </button>
        )}
      </div>
      {onClose && (
        <button className={styles.close} onClick={onClose} aria-label="Kapat">
          <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
};

Toast.displayName = "Toast";
