import React from "react";

export default function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center text-xs font-semibold tracking-[0.18em] uppercase ${
        dark ? "text-gold-soft" : "text-gold-deep"
      }`}
    >
      {children}
    </span>
  );
}
