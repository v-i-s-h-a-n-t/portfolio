import { AcademicExcellenceBanner } from "@/components/sections/academic-excellence-banner";
import { Contact } from "@/components/sections/contact";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Introduction } from "@/components/sections/introduction";
import { MyJourney } from "@/components/sections/my-journey";
import { TechnicalToolkit } from "@/components/sections/technical-toolkit";
import { MotionReveal } from "@/components/shared/motion-reveal";

export default function Home() {
  return (
    <>
      <MotionReveal>
        <Introduction />
      </MotionReveal>
      <AcademicExcellenceBanner />
      <FeaturedProjects />
      <TechnicalToolkit />
      <MyJourney />
      <Contact />
    </>
  );
}
