import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import CTABand from "@/components/shared/CTABand";
import ServiceCard from "@/components/services/ServiceCard";
import { SERVICES } from "@/components/services/servicesData";

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
        </div>
      </section>
      <CTABand />
    </div>
  );
}