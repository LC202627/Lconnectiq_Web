import React, { useMemo, useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import CTABand from "@/components/shared/CTABand";
import Reveal from "@/components/shared/Reveal";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { PORTFOLIO_ITEMS } from "@/components/portfolio/portfolioData";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const categories = useMemo(() => {
    const set = new Set(PORTFOLIO_ITEMS.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);
  const items = filter === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((p) => p.category === filter);

  return (
    <div>
      <PageHeader
        eyebrow="LConnectiQ · selected work"
        title="Portfolio"
        subtitle="Structural BIM models, accurate drafting, and construction support across residential, commercial, and institutional projects."
      />
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-7">
          <Reveal className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">
            <p className="text-ink-soft text-base max-w-[52ch]">
              {PORTFOLIO_ITEMS.length} structural BIM projects across residential, commercial, and institutional work.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={`text-sm font-medium px-4 py-2 rounded-sm border transition-colors duration-200 ${
                    filter === c
                      ? "bg-navy text-white border-navy"
                      : "bg-white text-navy border-navy/10 hover:border-gold-deep hover:text-gold-deep"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, i) => (
              <PortfolioCard key={item.title} item={item} delay={i * 0.05} />
            ))}
          </div>

          {items.length === 0 && (
            <p className="text-center text-ink-soft py-12">No projects in this category yet.</p>
          )}
        </div>
      </section>
      <CTABand />
    </div>
  );
}