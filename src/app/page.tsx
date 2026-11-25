import { AcademicExcellenceBanner } from "@/components/sections/academic-excellence-banner";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Introduction } from "@/components/sections/introduction";

export default function Home() {
  return (
    <>
      <Introduction />
      <AcademicExcellenceBanner />
      <FeaturedProjects />
    </>
  );
}
