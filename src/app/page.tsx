import { AcademicExcellenceBanner } from "@/components/sections/academic-excellence-banner";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Introduction } from "@/components/sections/introduction";
import { MyJourney } from "@/components/sections/my-journey";
import { TechnicalToolkit } from "@/components/sections/technical-toolkit";

export default function Home() {
  return (
    <>
      <Introduction />
      <AcademicExcellenceBanner />
      <FeaturedProjects />
      <TechnicalToolkit />
      <MyJourney />
    </>
  );
}
