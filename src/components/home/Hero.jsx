import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Eyebrow from "@/components/shared/Eyebrow";

const HERO_VIDEO =
  "https://media.base44.com/videos/public/user_69efa00d86253571e2232b14/6f829cd56_ElevenLabs_video_flux-3_createadrone_2026-08-22T08_25_29.mp4";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-end overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0 hidden sm:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 120% at 75% 10%, rgba(25,26,41,.55) 0%, rgba(25,26,41,.72) 45%, rgba(15,16,25,.9) 100%)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(138,114,38,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(138,114,38,.07) 1px, transparent 1px)",
          backgroundSize: "160px 160px, 160px 160px",
          maskImage: "radial-gradient(120% 100% at 70% 30%, #000 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(120% 100% at 70% 30%, #000 30%, transparent 85%)",
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-7 w-full pt-[140px] pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-6"
        >
          <Eyebrow dark>Construction Support Services</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-white font-extrabold uppercase leading-[1.02] tracking-tight text-[clamp(34px,6vw,72px)] max-w-[14ch]"
        >
          Leadership.
          <br />
          Intelligence.
          <br />
          <span className="text-gold-soft">Connection.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
          className="text-white/85 text-[clamp(16px,2.1vw,21px)] max-w-[54ch] mt-6"
        >
          LConnectiQ is your construction back office: document management, remote project
          engineering, Procore administration, BIM &amp; CAD support, digital productivity, and
          workflow automation, so your projects move faster, cleaner, and with less administrative
          risk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="#services-teaser"
            className="inline-flex items-center gap-2.5 font-semibold text-[15px] rounded-sm bg-gold-soft text-navy px-7 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            Explore services <ArrowRight size={16} />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 font-semibold text-[15px] rounded-sm border border-white/40 text-white px-7 py-4 transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            Start a project
          </Link>
        </motion.div>
      </div>
    </header>
  );
}