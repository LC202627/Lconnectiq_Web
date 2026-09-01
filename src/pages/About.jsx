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
        subtitle="The neutral execution layer your project team is missing."
      />
      <AboutPurpose />
      <ProblemSection />
      <VideoStrip
        eyebrow="How we work"
        title="Precision oversight, from breaking ground to closeout."
        description="Every RFI, submittal, and drawing revision moves through a structured, monitored process, so nothing falls through the cracks between the office, the trades, and the field."
      />
      <WhySection />
      <CTABand />
    </div>
  );
}