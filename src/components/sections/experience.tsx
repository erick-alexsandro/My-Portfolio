import { site } from "@/data/site";

export function Experience() {
  return (
    <section id="experience" className="grid gap-12 px-5 py-24 md:grid-cols-2 md:px-7">
      <div>
        <h2 className="text-5xl font-medium tracking-tighter md:text-7xl">
          Experience
        </h2>
      </div>
      <div className="space-y-12">
        {site.experience.map((job, i) => (
          <article
            key={`${job.company}-${i}`}
            className=" bg-pill-light rounded-2xl p-6"
          >
            <div className="flex flex-wrap items-start gap-3">
              <h3 className="text-xl font-medium">{job.company}</h3>
              <span className="rounded-full bg-white px-4 py-1 text-xs">
                {job.period}
              </span>
            </div>
            <p className="text-ink-soft mt-4 text-sm">
              {job.role}
              {job.location && ` · ${job.location}`}
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed">
              {job.description.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white px-4 py-1.5 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
