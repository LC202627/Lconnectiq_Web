import React from "react";
import Eyebrow from "@/components/shared/Eyebrow";
import Reveal from "@/components/shared/Reveal";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <div className="relative overflow-hidden bg-navy pt-[150px] pb-20 md:pb-28">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(212,175,55,.16) 1px, transparent 1px)",
          backgroundSize: "80px 100%",
          maskImage: "linear-gradient(90deg, transparent, #000 60%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 60%)",
        }}
      />
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-7 grid md:grid-cols-2 gap-14 items-start">
        <Reveal>
          <Eyebrow dark>Start a project</Eyebrow>
          <h1 className="text-white font-extrabold text-[clamp(30px,4.4vw,50px)] leading-tight mt-4">
            Let's talk about your <span className="text-gold-soft">project.</span>
          </h1>
          <p className="text-white text-lg mt-5 max-w-[52ch]">
            We respond within one business day with a clear scope, defined deliverables, and no
            ambiguity about what we do and don't cover.
          </p>
          <div className="flex flex-wrap gap-7 mt-7">
            <div>
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-gold-soft">Response time</div>
              <div className="text-[15px] text-white font-medium mt-1">Within 1 business day</div>
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-gold-soft">Service lines</div>
              <div className="text-[15px] text-white font-medium mt-1">Six</div>
            </div>
          </div>
          <p className="mt-6 text-[15px]">
            <a href="mailto:lc@lconnectiq.com" className="text-gold-soft hover:text-white transition-colors">
              lc@lconnectiq.com
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}