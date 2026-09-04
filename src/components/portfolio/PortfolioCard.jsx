import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/shared/Reveal";

export default function PortfolioCard({ item, delay = 0 }) {
  return (
    <Reveal delay={delay} className="group">
      <Link to={`/portfolio/${item.slug}`} className="block">
        <div className="aspect-[16/10] rounded-[3px] overflow-hidden relative bg-[#07080d] border border-navy/10 [filter:saturate(1.08)_contrast(1.04)]">
          <Image
            src={item.image}
            alt={`${item.title} — structural BIM model by LConnectiQ`}
            quality={95}
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute top-3.5 left-3.5 text-[11px] font-bold tracking-[0.1em] uppercase text-navy bg-gold-soft px-2.5 py-1.5 rounded-sm">
            {item.category}
          </span>
          <span className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <h3 className="text-[20px] text-navy font-bold mt-[18px] mb-2.5 leading-snug transition-colors duration-200 group-hover:text-gold-deep">
          {item.title}
        </h3>
        <div className="text-[13px] text-ink-soft">{item.meta}</div>
      </Link>
    </Reveal>
  );
}