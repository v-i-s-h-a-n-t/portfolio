import ApplicantTrackingSystem, {
  metadata as applicantTrackingMetadata,
} from "@/content/projects/applicant-tracking-system.mdx";
import AntibioticResistanceAnalysis, {
  metadata as antibioticResistanceMetadata,
} from "@/content/projects/antibiotic-resistance-analysis.mdx";
import DistributedWorkerCluster, {
  metadata as distributedWorkerMetadata,
} from "@/content/projects/distributed-worker-cluster.mdx";
import MentalHealthAndWellnessSystem, {
  metadata as mentalHealthMetadata,
} from "@/content/projects/mental-health-and-wellness-system.mdx";
import SearchAlgorithmsAnalysisSystem, {
  metadata as searchAlgorithmsMetadata,
} from "@/content/projects/search-algorithms-analysis-system.mdx";
import StudentAdministrationSystem, {
  metadata as studentAdministrationMetadata,
} from "@/content/projects/student-administration-system.mdx";
import type { MDXContentModule, ProjectContentMetadata } from "@/content/types";
import {
  validateProjectContentMetadata,
  validateUniqueContentSlugs,
} from "@/content/validation";

const sourceModules: MDXContentModule<unknown>[] = [
  { metadata: applicantTrackingMetadata, default: ApplicantTrackingSystem },
  { metadata: distributedWorkerMetadata, default: DistributedWorkerCluster },
  {
    metadata: studentAdministrationMetadata,
    default: StudentAdministrationSystem,
  },
  {
    metadata: antibioticResistanceMetadata,
    default: AntibioticResistanceAnalysis,
  },
  {
    metadata: searchAlgorithmsMetadata,
    default: SearchAlgorithmsAnalysisSystem,
  },
  { metadata: mentalHealthMetadata, default: MentalHealthAndWellnessSystem },
];

export type ProjectContentEntry = {
  metadata: ProjectContentMetadata;
  default: MDXContentModule<unknown>["default"];
};

export const projectContentModules: ProjectContentEntry[] = sourceModules.map(
  ({ metadata, default: Content }) => ({
    metadata: validateProjectContentMetadata(metadata),
    default: Content,
  }),
);

validateUniqueContentSlugs(projectContentModules, "project");
