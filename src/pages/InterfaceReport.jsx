import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import CTABand from "@/components/shared/CTABand";
import Reveal from "@/components/shared/Reveal";
import ScreenReviewCard from "@/components/report/ScreenReviewCard";
import { SUMMARY_METRICS, TOP_PRIORITIES, SCREENS, REPORT_META } from "@/components/report/reportData";

export default function InterfaceReport() {
  return (
    <div>
      <PageHeader
        eyebrow="Interface audit"
        title="Interface Report"
        subtitle="A screen-by-screen review of the LConnectiQ interface, weighted equally across design & brand and UX & usability."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-7">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border border-navy/10 rounded-sm p-7 md:p-8">
              {SUMMARY_METRICS.map((m) => (
                <div key={m.label}>
                  <div className="text-navy text-[clamp(30px,4vw,44px)] font-extrabold leading-none tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold tracking-[0.08em] uppercase text-ink-soft mt-2.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.05} className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[13px] text-ink-soft">
            <span><span className="text-navy font-semibold">Focus:</span> {REPORT_META.focus}</span>
            <span><span className="text-navy font-semibold">Reviewed:</span> {REPORT_META.date}</span>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-mist">
        <div className="max-w-[1240px] mx-auto px-6 md:px-7">
          <Reveal className="mb-10">
            <h2 className="text-navy font-extrabold tracking-tight text-[clamp(26px,3.6vw,40px)]">
              Top priorities
            </h2>
            <p className="text-ink-soft text-lg mt-3 max-w-[60ch]">
              The highest-impact fixes across the interface, ranked by effect on credibility and usability.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/[0.07] border border-navy/[0.07]">
            {TOP_PRIORITIES.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.04} className="bg-white p-7 transition-colors duration-300 hover:bg-mist">
                <div className="text-[13px] font-extrabold text-gold-deep tracking-[0.1em]">{p.n}</div>
                <h3 className="text-[18px] text-navy font-bold mt-3 mb-2.5 leading-snug">{p.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{p.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-7">
          <Reveal className="mb-10">
            <h2 className="text-navy font-extrabold tracking-tight text-[clamp(26px,3.6vw,40px)]">
              Screen-by-screen review
            </h2>
            <p className="text-ink-soft text-lg mt-3 max-w-[60ch]">
              Six screens, each scored out of five with strengths, issues, and recommended fixes split between design and UX.
            </p>
          </Reveal>
          <div className="flex flex-col gap-7">
            {SCREENS.map((s, i) => (
              <ScreenReviewCard key={s.name} screen={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}