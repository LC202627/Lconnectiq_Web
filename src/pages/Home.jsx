import React from "react";
import Hero from "@/components/home/Hero";
import PositioningSection from "@/components/home/PositioningSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import CTABand from "@/components/shared/CTABand";

export default function Home() {
  return (
    <div>
      <Hero />
      <PositioningSection />
      <StatsSection />
      <ServicesTeaser />
      <CTABand />
    </div>
  );
}