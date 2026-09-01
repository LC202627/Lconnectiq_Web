import React from "react";
import Reveal from "@/components/shared/Reveal";

export default function ServiceCard({ service, delay = 0, full = false }) {
  return (
    <Reveal delay={delay} className="group relative bg-white p-8 border border-navy/[0.07] overflow-hidden transition-colors duration-300 hover:bg-mist/40">
      <span className="absolute left-0 top-0 h-[3px] w-0 bg-gold-deep transition-all duration-500 group-hover:w-full" />
      <span className="text-[13px] font-bold text-gold-deep tracking-[0.1em]">{service.idx}</span>
      <h3 className="text-[23px] text-navy font-bold mt-4 mb-3">{service.title}</h3>
      <span className="text-xs font-semibold tracking-[0.1em] uppercase text-ink-soft">{service.tag}</span>
      <p className="text-[15px] text-ink-soft mt-3.5 mb-5">{service.summary}</p>
      {full && (
        <ul className="flex flex-col gap-2.5">
          {service.points.map((p) => (
            <li key={p} className="text-sm text-ink flex gap-2.5 items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-gold-deep rounded-[1px]" />
              {p}
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  );
}