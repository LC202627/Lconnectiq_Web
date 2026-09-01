import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import CTABand from "@/components/shared/CTABand";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { PORTFOLIO_ITEMS } from "@/components/portfolio/portfolioData";

export default function Portfolio() {
  return (
    <div>
      <PageHeader
        eyebrow="LConnectiQ · selected work"
        title="Portfolio"
        subtitle="Structural BIM models, accurate drafting, and construction support across residential, commercial, and institutional projects."
      />
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <PortfolioCard key={item.title} item={item} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  );
}