import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
