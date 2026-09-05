import React from "react";
import Eyebrow from "@/components/shared/Eyebrow";
import Reveal from "@/components/shared/Reveal";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <div className="relative overflow-hidden bg-navy pt-[150px] pb-20 md:pb-28">
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
          <div className="mt-9 space-y-5">
            <div>
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-gold-soft">Response time</div>
              <div className="text-[15px] text-white font-medium mt-1.5">Within 1 business day</div>
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-gold-soft">Email</div>
              <a
                href="mailto:info@lconnectiq.com"
                className="text-[15px] text-white font-medium mt-1.5 inline-block hover:text-gold-soft transition-colors"
              >
                info@lconnectiq.com
              </a>
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-gold-soft">Office</div>
              <address className="text-[15px] text-white font-medium mt-1.5 not-italic leading-relaxed">
                177 SW Range Ave<br />
                Madison, FL 32340
              </address>
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-gold-soft">Mailing</div>
              <address className="text-[15px] text-white font-medium mt-1.5 not-italic leading-relaxed">
                PO Box 5642<br />
                Tallahassee, FL 32314
              </address>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}