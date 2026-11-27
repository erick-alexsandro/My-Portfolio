import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "Similartists",
    title: "Similartists",
    year: 2025,
    category: "Web app",
    summary:
      "A web application that helps you discover new artists similar to your favorites using the Last.fm API and Spotify API..",
    description:
      "This project was made by Erick Alexsandro with the purpose of learning more about and how to use the Last.fm API and Spotify API. It was made using Vue 3, Vue Router and Vite.",
    stack: ["Vue 3", "Vue Router", "Vite", "Last.fm API", "Spotify API"],
    image: "/images/similartists.gif",
    href: "https://similartists.vercel.app/",
    repo: "https://github.com/erick-alexsandro/Similartists",
  },
  {
    slug: "PomodoroApp",
    title: "Pomodoro App",
    year: 2025,
    category: "Desktop app",
    summary:
      "A simple Pomodoro timer app that helps users manage their tasks and study sessions using the Pomodoro technique.",
    description:
      "PomodoroApp is an application that helps users manage their tasks and study sessions using the Pomodoro technique. It includes functionalities for creating, editing and completing tasks, as well as controlling work time and breaks.",
    stack: ["C#"],
    image: "/images/pomodoroapp.png",
    href: "https://github.com/erick-alexsandro/PomodoroApp",
    repo: "https://github.com/erick-alexsandro/PomodoroApp",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
