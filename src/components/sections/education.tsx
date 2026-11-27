import { site } from "@/data/site";

export function Education() {
  return (
    <section id="education" className="grid gap-12 px-5 py-24 md:grid-cols-2 md:px-7">
      <div>
        <h2 className="text-5xl font-medium tracking-tighter md:text-7xl">
          Education
        </h2>
      </div>
      <div className="space-y-12">
        {site.education.map((edu) => (
          <article
            key={edu.title}
            className="bg-pill-light space-y-4 rounded-2xl p-6"
          >
            <div className="flex flex-wrap items-start gap-3">
              <h3 className="text-xl font-medium">{edu.title}</h3>
              <span className="rounded-full bg-white px-4 py-1 text-xs">
                {edu.period}
              </span>
            </div>
            <p className="text-ink-soft mt-4 text-sm">
              {edu.institution}
            </p>
            <span className="rounded-full bg-white px-4 py-1.5 text-sm">
              {edu.type === "degree" ? "Bachelor's degree" : "Certification"}
            </span>
            {edu.activities && (
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed">
                {edu.activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
