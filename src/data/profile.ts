export type ProfileSocialLinks = {
  github?: string;
  linkedin?: string;
  email?: string;
};

export type PersonalProfile = {
  name: string;
  brand: string;
  role: string;
  location: string;
  university: string;
  degree: string;
  expectedGraduation: number;
  socials: ProfileSocialLinks;
};

export const profile: PersonalProfile = {
  name: "Vishant Kumar",
  brand: "vk.",
  role: "Software Engineering Student",
  location: "Fiji",
  university: "The University of the South Pacific",
  degree: "Bachelor of Software Engineering",
  expectedGraduation: 2028,
  socials: {},
};
