import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import Reveal from "@/components/shared/Reveal";
import ServiceCard from "@/components/services/ServiceCard";
import { SERVICES } from "@/components/services/servicesData";

export default function ServicesTeaser() {
  return (
    <section id="services-teaser" className="py-20 md:py-28 bg-mist scroll-mt-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-7">
        <Reveal className="max-w-[760px] mb-12">
          <Eyebrow>What we deliver</Eyebrow>
          <h2 className="text-navy font-extrabold tracking-tight text-[clamp(28px,4vw,46px)] mt-4 mb-4">
            Six service lines, one standard.
          </h2>
          <p className="text-ink-soft text-lg">
            Your construction back office: document control and project engineering through BIM,
            digital productivity, and workflow automation.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/[0.07] border border-navy/[0.07]">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.idx} service={s} delay={i * 0.05} />
          ))}
        </div>

        <Reveal delay={0.2} className="mt-9">
          <Link to="/services" className="inline-flex items-center gap-2 text-gold-deep font-semibold group">
            View all services
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}