import { site } from "@/data/site";

export function About() {
  return (
    <section
      id="about"
      className="bg-pill-light grid gap-10 px-5 py-24 md:grid-cols-2 md:px-7"
    >
      <h2 className="text-5xl font-medium tracking-tighter md:text-7xl">
        About
      </h2>
      <div className="max-w-xl space-y-5 text-xl leading-relaxed">
        {site.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <ul className="flex flex-wrap gap-2 pt-4">
          {site.skills.map((s) => (
            <li key={s} className="rounded-full bg-white px-4 py-1.5 text-sm">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
