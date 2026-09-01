import React from "react";
import Eyebrow from "@/components/shared/Eyebrow";

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="relative overflow-hidden bg-navy pt-[150px] pb-16 md:pb-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(138,114,38,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(138,114,38,.08) 1px, transparent 1px)",
          backgroundSize: "150px 150px, 150px 150px",
          maskImage: "radial-gradient(120% 120% at 75% 0%, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(120% 120% at 75% 0%, #000 30%, transparent 80%)",
        }}
      />
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-7">
        <Eyebrow dark>{eyebrow}</Eyebrow>
        <h1 className="text-white font-extrabold uppercase tracking-tight mt-5 text-[clamp(30px,4.6vw,56px)] leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/75 text-lg max-w-[60ch] mt-5">{subtitle}</p>
        )}
      </div>
    </header>
  );
}