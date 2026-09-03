import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";
import Reveal from "@/components/shared/Reveal";

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-24">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(138,114,38,.09) 1px, transparent 1px)",
          backgroundSize: "80px 100%",
          maskImage: "linear-gradient(90deg, transparent, #000 60%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 60%)"
        }} />
      
      <Reveal className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-7 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Eyebrow dark>Start a project</Eyebrow>
          <h2 className="text-white font-extrabold leading-tight mt-4 text-5xl">
            Let's keep your next project <span className="text-gold-soft">accountable.</span>
          </h2>
          <p className="text-white/75 text-lg mt-4 max-w-[46ch]">
            Tell us about your project and the support you need. We respond within one business day.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 font-semibold text-[15px] rounded-sm bg-gold-soft text-navy px-7 py-4 transition-all duration-300 hover:bg-white hover:-translate-y-0.5">
            
            Start a project <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </section>);

}