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
    "Computer Science student with a strong passion for technology, innovation, and software development. Hands-on experience in full-stack development using C#, .NET, ASP.NET, JavaScript, Node.js, Next.js, React.js, and Vue.js, along with working knowledge of Java, object-oriented programming, and data structures and algorithms. ",
    "I am a highly motivated and dedicated individual with a strong work ethic and a desire to make a positive impact in the tech industry. I am always looking for new challenges and opportunities to grow as a developer and contribute to meaningful projects.",
  ],
  skills: [
    "C#",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Claude Code",
    "SQL",
    "Git",
    "Docker",
    "NOSQL",
    "MongoDB",
  ],
  experience: [
    {
      company: "Trival",
      role: "Full Stack Developer",
      period: "December 2023 - December 2024",
      location: "Sumaré, São Paulo, Brazil",
      description: [
        "Developed full stack systems with C#, ASP.NET, JavaScript, Vue.js and Vuetify, integrated with REST APIs and PostgreSQL and MongoDB databases. Ran functional tests, identified and fixed bugs, supported application maintenance, and opened and followed up on support tickets for clients",
      ],
      skills: [
        "Vue.js",
        "Vuetify",
        "C#",
        "ASP.NET",
        "JavaScript",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "Functional Testing",
        "Bug Fixing",
        "Client Support",
      ],
    },
    {
      company: "Aliança Geração de Energia",
      role: "Networks and Information Security Specialist",
      period: "February 2025 — November 2026",
      location: "Belo Horizonte, Minas Gerais, Brazil",
      description: [
        "Provided technical support, identified and investigated failures, and managed and validated the asset inventory while analyzing network topology. Applied Information Security concepts and helped align IT standards and policies with the needs of the electric power sector",
      ],
      skills: [
        "GLPI",
        "Microsoft Active Directory",
        "Technical Support",
        "Network Analysis",
        "Information Security",
      ],
    },
  ],
  education: [
    {
      type: "degree",
      title: "Computer Science",
      institution: "Centro Universitário UNA",
      period: "August 2023 - August 2027",
      activities: [
        "Participated in programming events",
        "Engaged in research projects related to software development, artificial intelligence, and cybersecurity",
        "Completed coursework in algorithms, data structures, databases, web development, and software engineering",
      ],
    },
    {
      type: "certification",
      title: "The Web Developer Bootcamp 2024",
      institution: "Udemy",
      period: "2024",
      activities: [
        "Completed a comprehensive web development course covering HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and React",
        "Built a Yelp-style web application called YelpCamp where users can browse, submit, rate, and review campgrounds",
        "Gained practical experience in front-end and back-end development, as well as deployment and version control using Git",
      ],
    },
  ],
} as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/erick-alexsandro" },
  { label: "LinkedIn", href: "https://linkedin.com/in/erick-alexsandro" },
];
