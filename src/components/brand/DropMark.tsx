import React from "react";

interface DropMarkProps {
  className?: string;
  size?: number;
}

export default function DropMark({ className = "", size = 28 }: DropMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 2C16 2 6 14 6 20C6 25.5228 10.4772 30 16 30C21.5228 30 26 25.5228 26 20C26 14 16 2 16 2Z"
        fill="var(--brand-deep)"
      />
      <path
        d="M12 18C12 16 14.5 13.5 16 12C15 15 14 19 12 18Z"
        fill="white"
        fillOpacity="0.4"
      />
    </svg>
  );
}
