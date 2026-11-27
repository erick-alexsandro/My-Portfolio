import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="px-5 py-24 md:px-7">
      <h2 className="text-5xl font-medium tracking-tighter md:text-7xl">
        Projects
      </h2>
      <ul className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link href={`/projects/${p.slug}`} className="group block">
              <div className="bg-pill-light relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-medium tracking-tight">
                  {p.title}
                </h3>
                <span className="text-ink-soft text-sm">
                  {p.category}, {p.year}
                </span>
              </div>
              <p className="text-ink-soft mt-1">{p.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
