import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/shared/Reveal";

export default function PortfolioCard({ item, delay = 0 }) {
  return (
    <Reveal delay={delay} className="group cursor-default">
      <div className="aspect-[16/10] rounded-[3px] overflow-hidden relative bg-navy/10">
        <Image
          src={item.image}
          alt={`${item.title} — structural BIM model by LConnectiQ`}
          className="w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3.5 left-3.5 text-[11px] font-bold tracking-[0.1em] uppercase text-navy bg-gold-soft px-2.5 py-1.5 rounded-sm">
          {item.category}
        </span>
      </div>
      <h3 className="text-[20px] text-navy font-bold mt-4.5 mt-[18px] mb-2.5 leading-snug transition-colors duration-200 group-hover:text-gold-deep">
        {item.title}
      </h3>
      <div className="text-[13px] text-ink-soft">{item.meta}</div>
    </Reveal>
  );
}