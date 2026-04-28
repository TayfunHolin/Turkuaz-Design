"use client";

import React from "react";
import styles from "./Avatar.module.css";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps {
  /** Image URL */
  src?: string;
  /** Used for alt text and initials fallback */
  name?: string;
  size?: AvatarSize;
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name = "",
  size = "md",
  className,
}) => {
  const [imgError, setImgError] = React.useState(false);
  const showImage = src && !imgError;
  const initials = getInitials(name);

  const classes = [styles.avatar, styles[size], className ?? ""]
    .filter(Boolean)
    .join(" ");

  if (showImage) {
    return (
      <span className={classes} aria-label={name || undefined}>
        <img
          src={src}
          alt={name}
          className={styles.img}
          onError={() => setImgError(true)}
        />
      </span>
    );
  }

  return (
    <span className={[classes, styles.initials].filter(Boolean).join(" ")} aria-label={name || undefined}>
      {initials || null}
    </span>
  );
};

Avatar.displayName = "Avatar";
