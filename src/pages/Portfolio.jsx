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
        eyebrow="LConnectiQ · portfolio"
        title="Portfolio"
        subtitle="Portfolio samples are published only after source, ownership or publication rights, sanitization, factual accuracy, and release authorization are verified."
      />
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-7">
          <Reveal className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">
            <p className="text-ink-soft text-base max-w-[62ch]">
              Only controlled and authorized portfolio material is displayed here. Materials still under internal review are not published as project experience or client work.
            </p>
            {PORTFOLIO_ITEMS.length > 0 && (
              <div className="flex flex-wrap gap-2.5">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setFilter(c)}
                    className={`text-sm font-medium px-4 py-2 rounded-sm border transition-colors duration-200 ${
                      filter === c
                        ? "bg-navy text-white border-navy"
                        : "bg-white text-navy border-navy/10 hover:border-[#9a8200] hover:text-gold-deep"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}
          </Reveal>

          {items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {items.map((item, i) => (
                <PortfolioCard key={item.title} item={item} delay={i * 0.05} />
              ))}
            </div>
          ) : (
            <p className="text-center text-ink-soft py-12">
              No approved portfolio samples are currently published.
            </p>
          )}
        </div>
      </section>
      <CTABand />
    </div>
  );
}
