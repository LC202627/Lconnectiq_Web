import React from "react";
import Eyebrow from "@/components/shared/Eyebrow";
import Reveal from "@/components/shared/Reveal";

const PROBLEMS = [
  {
    n: "01",
    title: "RFI accountability gaps",
    body: "Requests stall without clear ownership, pushing schedules and triggering disputes that structured routing would have avoided.",
  },
  {
    n: "02",
    title: "Incomplete submittals",
    body: "Missing or misrouted submittals delay approvals and cascade into field rework, one of the most expensive, most avoidable problems in construction.",
  },
  {
    n: "03",
    title: "Version control breakdown",
    body: "Teams building from superseded drawings is alarmingly common. Without enforced version tracking, coordination collapses silently.",
  },
  {
    n: "04",
    title: "Chaotic closeout",
    body: "Disorganized records create gaps during audits, owner turnover, and warranty claims, risks that compound long after substantial completion.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 md:px-7">
        <Reveal className="max-w-[760px] mb-12">
          <Eyebrow>The problem we solve</Eyebrow>
          <h2 className="text-navy font-extrabold tracking-tight text-[clamp(28px,4vw,46px)] mt-4 mb-4">
            Projects fail administratively first.
          </h2>
          <p className="text-ink-soft text-lg">
            Long before a structural issue appears, the paperwork has already broken down. These
            four gaps quietly drive most avoidable schedule and cost overruns.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-navy/[0.07] border border-navy/[0.07]">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06} className="bg-white p-7 transition-colors duration-300 hover:bg-mist">
              <div className="text-[13px] font-extrabold text-gold-deep tracking-[0.1em]">{p.n}</div>
              <h3 className="text-[18px] text-navy font-bold mt-3.5 mb-2.5 leading-snug">{p.title}</h3>
              <p className="text-sm text-ink-soft">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex flex-col md:flex-row gap-4 items-start bg-navy rounded-sm px-7 py-[26px]">
          <span className="text-gold-soft font-bold text-[15px] tracking-[0.04em] whitespace-nowrap">
            Our answer &rarr;
          </span>
          <p className="text-white/85 text-base max-w-[70ch]">
            We become the neutral execution layer that keeps information organized, accountable,
            and audit-ready, without ever taking design authority off your desk.
          </p>
        </Reveal>
      </div>
    </section>
  );
}