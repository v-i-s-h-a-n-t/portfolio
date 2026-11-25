import { AcademicExcellenceBanner } from "@/components/sections/academic-excellence-banner";
import { Contact } from "@/components/sections/contact";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Introduction } from "@/components/sections/introduction";
import { LatestArticles } from "@/components/sections/latest-articles";
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
      <LatestArticles />
      <Contact />
    </>
  );
}
