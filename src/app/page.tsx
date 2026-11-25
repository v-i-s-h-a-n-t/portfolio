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
      <MotionReveal mode="viewport">
        <AcademicExcellenceBanner />
      </MotionReveal>
      <MotionReveal mode="viewport">
        <FeaturedProjects />
      </MotionReveal>
      <MotionReveal mode="viewport">
        <TechnicalToolkit />
      </MotionReveal>
      <MotionReveal mode="viewport">
        <MyJourney />
      </MotionReveal>
      <MotionReveal mode="viewport">
        <Contact />
      </MotionReveal>
    </>
  );
}
