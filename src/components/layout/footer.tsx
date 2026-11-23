import { site, socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-ink/10 text-ink-soft flex flex-col gap-4 border-t px-5 py-8 text-sm md:flex-row md:justify-between md:px-7">
      <p>
        &copy; {new Date().getFullYear()} {site.name}
      </p>
      <nav aria-label="Social links" className="flex gap-5">
        <a href={`mailto:${site.email}`} className="hover:text-ink">
          Email
        </a>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink"
          >
            {s.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
