export type ProfileSocialLinks = {
  github?: string;
  linkedin?: string;
  instagram?: string;
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
  socials: {
    github: "https://github.com/v-i-s-h-a-n-t",
    linkedin: "https://www.linkedin.com/in/vishant-kumar-583b11330",
    instagram: "https://www.instagram.com/v1shantk/",
    email: "vishantk103@gmail.com",
  },
};
