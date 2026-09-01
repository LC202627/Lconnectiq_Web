import React from "react";
import Eyebrow from "@/components/shared/Eyebrow";
import Reveal from "@/components/shared/Reveal";

const WHY = [
  {
    n: "01",
    title: "Faster cycles",
    body: "Structured RFI and submittal routing with defined follow-up keeps information moving without bottlenecks.",
  },
  {
    n: "02",
    title: "Cleaner coordination",
    body: "Consistent logs, real-time traceability, and standardized reporting, your team always knows what's current.",
  },
  {
    n: "03",
    title: "Reduced risk",
    body: "Enforced version control and closeout readiness built in from day one, not scrambled at the end.",
  },
  {
    n: "04",
    title: "Technology-enabled",
    body: "Human-supervised technology and automation built into every service line, productivity gains without giving up professional judgment.",
  },
];

export default function WhySection() {
  return (
    <section className="py-20 md:py-24 bg-mist">
      <div className="max-w-[1240px] mx-auto px-6 md:px-7">
        <Reveal className="max-w-[760px] mb-10">
          <Eyebrow>Why LConnectiQ</Eyebrow>
          <h2 className="text-navy font-extrabold tracking-tight text-[clamp(26px,3.6vw,40px)] mt-4">
            The execution discipline your team is missing.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {WHY.map((w, i) => (
            <Reveal key={w.n} delay={i * 0.06} className="border-t-2 border-gold-deep pt-[18px]">
              <div className="text-[13px] font-extrabold text-gold-deep tracking-[0.1em]">{w.n}</div>
              <h3 className="text-[19px] text-navy font-bold mt-2.5 mb-2">{w.title}</h3>
              <p className="text-sm text-ink-soft">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}