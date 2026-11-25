import { profile } from "@/data/profile";
import type { EducationRecord, ExperienceRecord } from "@/types/journey";

export const education: EducationRecord[] = [
  {
    id: "usp-bachelor-software-engineering",
    institution: profile.university,
    degree: profile.degree,
    expectedGraduation: profile.expectedGraduation,
  },
];

export const experience: ExperienceRecord[] = [];
