import React from "react";
import { Link } from "react-router-dom";
import { Check, AlertTriangle, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

function ScoreBar({ score }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`w-4 h-1.5 rounded-[1px] ${n <= Math.round(score) ? "bg-[#9a8200]" : "bg-navy/15"}`}
          />
        ))}
      </div>
      <span className="text-sm font-bold text-navy tabular-nums">{score.toFixed(1)}</span>
    </div>
  );
}

function List({ items, icon, tone }) {
  const toneCls = tone === "strength" ? "text-gold-deep" : "text-ink-soft";
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((t, i) => (
        <li key={i} className="flex gap-2.5 items-start text-sm text-ink-soft leading-relaxed">
          <span className={`flex-shrink-0 mt-0.5 ${toneCls}`}>{icon}</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ScreenReviewCard({ screen, index }) {
  return (
    <Reveal delay={index * 0.03} className="bg-white border border-navy/10 rounded-sm p-7 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-navy/10">
        <div>
          <div className="text-[13px] font-extrabold text-gold-deep tracking-[0.1em]">
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3 className="text-navy font-bold text-2xl mt-1.5 leading-tight">{screen.name}</h3>
          <Link
            to={screen.route}
            className="inline-flex items-center gap-1.5 text-[13px] text-ink-soft hover:text-gold-deep transition-colors mt-1.5"
          >
            {screen.route} <ArrowUpRight size={13} />
          </Link>
        </div>
        <ScoreBar score={screen.score} />
      </div>

      <p className="text-[15px] text-ink-soft mt-5 mb-6 leading-relaxed">{screen.purpose}</p>

      <div className="grid md:grid-cols-2 gap-7">
        <div>
          <div className="text-xs font-bold tracking-[0.1em] uppercase text-navy mb-3">Design &amp; brand</div>
          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gold-deep mb-2">Strengths</div>
          <List items={screen.design.strengths} icon={<Check size={14} />} tone="strength" />
          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft mb-2 mt-4">Issues</div>
          <List items={screen.design.issues} icon={<AlertTriangle size={14} />} tone="issue" />
        </div>
        <div>
          <div className="text-xs font-bold tracking-[0.1em] uppercase text-navy mb-3">UX &amp; usability</div>
          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gold-deep mb-2">Strengths</div>
          <List items={screen.ux.strengths} icon={<Check size={14} />} tone="strength" />
          <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft mb-2 mt-4">Issues</div>
          <List items={screen.ux.issues} icon={<AlertTriangle size={14} />} tone="issue" />
        </div>
      </div>

      <div className="mt-7 pt-5 border-t border-navy/10">
        <div className="text-xs font-bold tracking-[0.1em] uppercase text-navy mb-3">Recommended fixes</div>
        <ul className="flex flex-col gap-2">
          {screen.fixes.map((f, i) => (
            <li key={i} className="flex gap-2.5 items-start text-sm text-navy leading-relaxed">
              <ArrowRight size={14} className="flex-shrink-0 mt-1 text-gold-deep" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}