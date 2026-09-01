import React from "react";
import AnimatedStat from "@/components/shared/AnimatedStat";

export default function StatsSection() {
  return (
    <section className="bg-white py-16 md:py-20 border-y border-navy/5">
      <div className="max-w-[1240px] mx-auto px-6 md:px-7 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        <AnimatedStat value={6} label="Service lines, one standard" />
        <AnimatedStat value={100} suffix="%" label="Audit-ready document traceability" />
        <div className="border-l-2 border-gold pl-5">
          <div className="text-navy text-[clamp(38px,5vw,60px)] font-extrabold leading-none tracking-tight tabular-nums">
            2025
          </div>
          <div className="text-sm text-ink-soft mt-3 font-medium">Established in Florida</div>
        </div>
        <AnimatedStat value={1} label="Business-day response on every inquiry" />
      </div>
    </section>
  );
}