export type EducationRecord = {
  id: string;
  institution: string;
  degree: string;
  expectedGraduation?: number;
};

export type ExperienceRecord = {
  id: string;
  organization: string;
  role: string;
  description?: string;
  startDate?: string;
  endDate?: string;
};
