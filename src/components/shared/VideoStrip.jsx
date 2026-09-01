import React from "react";
import Eyebrow from "@/components/shared/Eyebrow";
import Reveal from "@/components/shared/Reveal";

const VIDEO_URL =
  "https://media.base44.com/videos/public/user_69efa00d86253571e2232b14/6f829cd56_ElevenLabs_video_flux-3_createadrone_2026-08-22T08_25_29.mp4";

export default function VideoStrip({ eyebrow, title, description }) {
  return (
    <section className="relative bg-navy-deep overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-7 py-20 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <h2 className="text-white font-extrabold tracking-tight text-[clamp(26px,3.4vw,40px)] leading-tight mt-4 mb-4">
            {title}
          </h2>
          <p className="text-white/70 text-[17px] leading-relaxed">{description}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-navy/15 mix-blend-multiply" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}