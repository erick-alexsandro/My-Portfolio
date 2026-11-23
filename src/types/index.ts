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
