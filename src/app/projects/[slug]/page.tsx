import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () =>
  projects.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <Link href="/#projects" className="text-ink-soft hover:text-ink text-sm">
        Back to projects
      </Link>
      <h1 className="mt-8 text-6xl font-medium tracking-tighter md:text-8xl">
        {project.title}
      </h1>
      <p className="text-ink-soft mt-4">
        {project.category}, {project.year}
      </p>
      <div className="bg-pill-light relative mt-10 aspect-video overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          unoptimized
          className="object-cover"
        />
      </div>
      <p className="mt-10 max-w-2xl text-xl leading-relaxed">
        {project.description}
      </p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <li
            key={s}
            className="bg-pill-light rounded-full px-4 py-1.5 text-sm"
          >
            {s}
          </li>
        ))}
      </ul>
    </main>
  );
}
