import type { SocialLink } from "@/types";

export const site = {
  name: "Erick Alexsandro",
  wordmark: "ERICK ALEXSANDRO",
  role: "Full-stack developer",
  tagline: ["FullStack.", "AI Engineering.", "Cybersecurity."],
  description:
    "Portfolio of Erick Alexsandro, a full-stack developer building fast, accessible web apps.",
  email: "contatoerickalexsandro@gmail.com",
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  about: [
    "Computer Science student at the Centro Universitário Una with a strong passion for technology and programming. I have experience in web development, AI engineering, and cybersecurity, and I am always eager to learn new skills and technologies.",
    "I am a highly motivated and dedicated individual with a strong work ethic and a desire to make a positive impact in the tech industry. I am always looking for new challenges and opportunities to grow as a developer and contribute to meaningful projects.",
  ],
  skills: [
    "C#",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Python",
    "SQL",
    "Git",
    "Docker",
    "NOSQL",
    "MongoDB",
  ],
} as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/erick-alexsandro" },
  { label: "LinkedIn", href: "https://linkedin.com/in/erick-alexsandro" },
];
