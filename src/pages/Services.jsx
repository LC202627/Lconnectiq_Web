import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import CTABand from "@/components/shared/CTABand";
import Reveal from "@/components/shared/Reveal";
import ServiceCard from "@/components/services/ServiceCard";
import { SERVICES } from "@/components/services/servicesData";

const ROADMAP = ["IoT Integration Consulting", "Digital Twin Development"];

export default function Services() {
  return (
    <div>
      <PageHeader
        eyebrow="What we deliver"
        title="Services"
        subtitle="Six service lines coordinated so nothing falls between the office, the trades, and the field."
      />
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/[0.07] border border-navy/[0.07]">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.idx} service={s} delay={i * 0.05} full />
            ))}
          </div>

          <Reveal delay={0.15} className="mt-12">
            <div className="text-xs font-semibold tracking-[0.1em] uppercase text-ink-soft mb-4">
              On the roadmap (Years 3&ndash;5)
            </div>
            <div className="flex flex-wrap gap-2.5">
              {ROADMAP.map((r) => (
                <span
                  key={r}
                  className="text-sm font-medium text-navy bg-white border border-navy/10 px-4 py-2.5 rounded-sm transition-colors duration-200 hover:border-gold-deep hover:text-gold-deep"
                >
                  {r}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand />
    </div>
  );
}