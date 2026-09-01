import React from "react";

export default function LegalSection({ heading, children }) {
  return (
    <div className="mb-7">
      {heading && <h2 className="text-navy text-[22px] font-bold mt-2 mb-3">{heading}</h2>}
      <div className="text-ink-soft text-base leading-[1.75] space-y-3.5">{children}</div>
    </div>
  );
}