import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import Reveal from "@/components/shared/Reveal";

export default function PositioningSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 md:px-7 grid md:grid-cols-[1fr_1.1fr] gap-12 items-start">
        <Reveal>
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="text-navy font-extrabold tracking-tight text-[clamp(26px,3.4vw,40px)] leading-tight mt-4">
            The neutral execution layer your project team is missing.
          </h2>
          <Link
            to="/about"
            className="inline-flex items-center gap-2.5 text-gold-deep font-semibold text-[15px] mt-6 group"
          >
            More about LConnectiQ
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5">
          <p className="text-ink-soft text-[17px] leading-relaxed">
            LConnectiQ is a Florida-based Construction Support Services firm. We don't design and we
            don't manage construction; we execute and structure, so authority stays with the
            professionals who own it while the information chain stays clean.
          </p>
          <p className="text-ink-soft text-[17px] leading-relaxed">
            Most teams already pay for powerful platforms (Procore, BIM tools, cloud drives) but
            adoption stalls without dedicated support. We make the tools you already own produce:
            faster RFI and submittal cycles, cleaner coordination, enforced version control, and
            closeout readiness from day one.
          </p>
          <p className="text-navy font-semibold text-[17px]">
            No design liability assumed. No scope creep. No ambiguity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}