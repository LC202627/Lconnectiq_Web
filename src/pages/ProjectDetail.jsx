import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Eyebrow from "@/components/shared/Eyebrow";
import Reveal from "@/components/shared/Reveal";
import CTABand from "@/components/shared/CTABand";
import { getProjectBySlug, PORTFOLIO_ITEMS } from "@/components/portfolio/portfolioData";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="pt-[140px] pb-24 text-center">
        <p className="text-ink-soft">That project could not be found.</p>
        <Link to="/portfolio" className="text-gold-deep font-semibold mt-4 inline-block">
          Back to portfolio
        </Link>
      </div>
    );
  }

  const index = PORTFOLIO_ITEMS.findIndex((p) => p.slug === slug);
  const next = PORTFOLIO_ITEMS[(index + 1) % PORTFOLIO_ITEMS.length];

  return (
    <div className="pt-[100px]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-7">
        <Reveal>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-gold-deep transition-colors mt-6"
          >
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <Eyebrow>{project.category}</Eyebrow>
          <h1 className="text-navy font-extrabold tracking-tight text-[clamp(30px,4.6vw,52px)] leading-[1.05] mt-4">
            {project.title}
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed mt-5 max-w-[64ch]">
            {project.summary}
          </p>
        </Reveal>

        {/* Drawing viewer — minimalist so the isometric structure stands out */}
        <Reveal delay={0.1} className="mt-10">
          <div className="relative aspect-[16/9] rounded-[3px] overflow-hidden bg-[#053242] border border-navy/10 [filter:saturate(1.08)_contrast(1.04)]">
            <Image
              src={project.image}
              alt={`${project.title}, structural BIM model by LConnectiQ`}
              fittingType="fit"
              quality={97}
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft mt-3">
            {project.meta} · Isometric structural rendering
          </p>
        </Reveal>

        {/* Specs */}
        <Reveal delay={0.1} className="mt-14">
          <h2 className="text-navy font-bold text-xl mb-5">Project specs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/[0.07] border border-navy/[0.07]">
            {Object.entries(project.specs).map(([k, v]) => (
              <div key={k} className="bg-white px-5 py-5">
                <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gold-deep mb-2">
                  {k}
                </div>
                <div className="text-navy text-[15px] font-medium leading-snug">{v}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 mt-14">
          {/* Drawing details */}
          <Reveal>
            <h2 className="text-navy font-bold text-xl mb-5">Drawing details</h2>
            <ul className="space-y-4">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-ink-soft leading-relaxed">
                  <span className="mt-2.5 w-5 h-[2px] bg-[#9a8200] shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Services + deliverables */}
          <Reveal delay={0.1}>
            <h2 className="text-navy font-bold text-xl mb-5">Services & deliverables</h2>
            <div className="flex flex-wrap gap-2.5 mb-7">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="text-sm font-medium text-navy bg-white border border-navy/10 px-4 py-2.5 rounded-sm"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gold-deep mb-3">
              Deliverables
            </div>
            <ul className="space-y-2.5">
              {project.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-2.5 text-navy text-[15px] font-medium">
                  <span className="w-1.5 h-1.5 bg-[#9a8200] rounded-full" /> {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Next project */}
        <Reveal className="mt-16 mb-4">
          <Link
            to={`/portfolio/${next.slug}`}
            className="group flex items-center justify-between border-t border-navy/10 pt-7"
          >
            <span>
              <span className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-soft">
                Next project
              </span>
              <span className="text-navy font-bold text-lg group-hover:text-gold-deep transition-colors">
                {next.title}
              </span>
            </span>
            <ArrowRight size={22} className="text-gold-deep transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>

      <CTABand />
    </div>
  );
}