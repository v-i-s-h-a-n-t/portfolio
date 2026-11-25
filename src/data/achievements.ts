export type AchievementCertificate = {
  src: string;
  alt: string;
};

export type Achievement = {
  title: string;
  year: number;
  certificate?: AchievementCertificate;
};

export const achievements: Achievement[] = [
  {
    title: "Most Outstanding Student in Bachelor of Software Engineering",
    year: 2025,
  },
  {
    title: "Overall Most Outstanding Student in STEMP",
    year: 2025,
  },
];
