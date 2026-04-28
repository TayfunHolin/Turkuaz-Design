import React from "react";
import styles from "./Progress.module.css";

export type ProgressSize = "sm" | "md";

export interface ProgressProps {
  value: number;
  size?: ProgressSize;
  showLabel?: boolean;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  size = "md",
  showLabel = false,
  className,
}) => {
  const clamped = Math.min(100, Math.max(0, value));
  // Figma: md=24px, sm=20px circle. Circle circumference for r=9 → 2π×9≈56.5
  const dim  = size === "md" ? 24 : 20;
  const r    = size === "md" ? 9  : 7;
  const cx   = dim / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (clamped / 100) * circ;

  return (
    <div className={[styles.wrapper, className ?? ""].filter(Boolean).join(" ")} aria-label={`Progress: ${clamped}%`} role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100}>
      <svg width={dim} height={dim} viewBox={`0 0 ${dim} ${dim}`} fill="none" className={styles.svg}>
        {/* Base track — Figma: #000000 */}
        <circle cx={cx} cy={cx} r={r} stroke="#000000" strokeWidth="2.5" strokeOpacity="0.12" />
        {/* Progress — Figma: #292f89 */}
        <circle
          cx={cx}
          cy={cx}
          r={r}
          stroke="#292f89"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${cx} ${cx})`}
        />
      </svg>
      {showLabel && <span className={styles.label}>{clamped}%</span>}
    </div>
  );
};

Progress.displayName = "Progress";
