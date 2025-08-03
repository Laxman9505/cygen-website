/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { BestTools } from "@/components/sections/data-visualization/best-tools";
import { CloudServices } from "@/components/sections/data-visualization/cloud-services";
import { DataVisualizationCTA } from "@/components/sections/data-visualization/data-visualization-cta";
import { DataVisualizationHero } from "@/components/sections/data-visualization/data-visualization-hero";
import { DataVisualizationIntro } from "@/components/sections/data-visualization/data-visualization-intro";
import { MustHaveFeatures } from "@/components/sections/data-visualization/must-have-features";
import { UseCases } from "@/components/sections/data-visualization/use-cases";
import { VisualizationServices } from "@/components/sections/data-visualization/visualization-services";
import { VisualizationTools } from "@/components/sections/data-visualization/visualization-tools";

export default function DataVisualizationPage() {
  return (
    <>
      <Header />
      <DataVisualizationHero />
      <DataVisualizationIntro />
      <VisualizationTools />
      <CloudServices />
      <UseCases />
      <MustHaveFeatures />
      <VisualizationServices />
      <BestTools />
      <DataVisualizationCTA />
      <Footer />
    </>
  );
}
