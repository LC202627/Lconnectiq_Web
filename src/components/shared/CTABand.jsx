import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import Reveal from "@/components/shared/Reveal";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-24">
      <Reveal className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-7 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Eyebrow dark>Start a project</Eyebrow>
          <h2 className="text-white font-extrabold leading-tight mt-4 text-5xl">
            Let's keep your next project <span className="text-gold-soft">accountable.</span>
          </h2>
          <p className="text-white text-lg mt-4 max-w-[46ch]">
            Tell us about your project and the support you need. We respond within one business day.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 font-semibold text-[15px] rounded-sm bg-[#9a8200] text-navy px-7 py-4 shadow-[0_8px_30px_-6px_rgba(154,130,0,0.5)] transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_36px_-4px_rgba(255,255,255,0.45)]">
            
            Start a project <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </section>);

}