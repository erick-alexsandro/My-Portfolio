export type Project = {
  slug: string;
  title: string;
  year: number;
  category: string;
  summary: string;
  description: string;
  stack: string[];
  image: string;
  href?: string;
  repo?: string;
};

export type SocialLink = { label: string; href: string };

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  skills: string[];
};

export type Education = {
  type: "degree" | "certification";
  title: string;
  institution: string;
  period?: string;
};
