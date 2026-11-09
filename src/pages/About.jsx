import React from "react";
import PageHeader from "@/components/shared/PageHeader";
import CTABand from "@/components/shared/CTABand";
import AboutPurpose from "@/components/about/AboutPurpose";
import ProblemSection from "@/components/about/ProblemSection";
import WhySection from "@/components/about/WhySection";
import VideoStrip from "@/components/shared/VideoStrip";

export default function About() {
  return (
    <div>
      <PageHeader
        eyebrow="Who we are"
        title="About LConnectiQ"
        subtitle="Construction document control and project coordination support for AEC teams."
      />
      <AboutPurpose />
      <ProblemSection />
      <VideoStrip
        eyebrow="How we work"
        title="Structured project support, from startup through closeout."
        description="Every RFI, submittal, and drawing revision moves through a structured, tracked process, so the office, the trades, and the field work from the same information."
      />
      <WhySection />
      <CTABand />
    </div>
  );
}