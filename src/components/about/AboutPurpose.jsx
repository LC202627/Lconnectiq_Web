import React from "react";
import Eyebrow from "@/components/shared/Eyebrow";
import Reveal from "@/components/shared/Reveal";

const SERVING = [
  "General Contractors",
  "Architects & Engineers",
  "Developers",
  "Subcontractors",
  "Owner's Representatives",
];

export default function AboutPurpose() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 md:px-7 grid md:grid-cols-[1fr_1.1fr] gap-12 items-start">
        <Reveal>
          <Eyebrow>Our purpose</Eyebrow>
          <h2 className="text-navy font-extrabold tracking-tight text-[clamp(26px,3.4vw,40px)] leading-tight mt-4">
            Built on the gap between design and execution.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-ink-soft text-[17px] leading-relaxed mb-5">
            LConnectiQ was founded on a clear observation: the construction industry has a
            sophisticated design and engineering community, and powerful software platforms, but a
            persistent gap in the people and processes that keep information organized,
            accountable, and audit-ready. LConnectiQ is a construction back-office and workflow
            support company serving the AEC industry, and we exist to fill that gap.
          </p>
          <p className="text-ink-soft text-[17px] leading-relaxed mb-5">
            We don't design and we don't manage construction, we execute and structure, so
            authority stays with the professionals who own it while the information chain stays
            clean.
          </p>
          <p className="text-navy font-semibold text-[17px] mb-9">
            No design liability assumed. No scope creep. No ambiguity.
          </p>
          <div>
            <div className="text-xs font-semibold tracking-[0.1em] uppercase text-ink-soft mb-4">
              Serving
            </div>
            <div className="flex flex-wrap gap-2.5">
              {SERVING.map((s) => (
                <span
                  key={s}
                  className="text-sm font-medium text-navy bg-white border border-navy/10 px-4 py-2.5 rounded-sm transition-colors duration-200 hover:border-[#9a8200] hover:text-gold-deep"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}