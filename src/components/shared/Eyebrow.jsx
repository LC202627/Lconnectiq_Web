import React from "react";

export default function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] uppercase ${
        dark ? "text-gold-soft" : "text-gold-deep"
      }`}
    >
      <span className="w-6 h-[2px] inline-block bg-[#9a8200]" />
      {children}
    </span>
  );
}
