# My Portfolio - Erick Alexsandro

Personal portfolio site built with [Next.js](https://nextjs.org) 16, React 19, TypeScript, and Tailwind CSS 4.

![My Portfolio demo](public\images\portfolio.gif)

## Tech stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16.4.6 (App Router, Turbopack) |
| UI | React 19.3.1, TypeScript 5.7.0 |
| Styling | Tailwind CSS 4.0.0 |
| Forms | react-hook-form 7 + zod 4 |
| Scroll | Lenis (smooth scroll) |
| Animation | motion (Framer Motion) |
| Icons | lucide-react |
| Variants | class-variance-authority, clsx, tailwind-merge |
| Analytics | @vercel/analytics, @vercel/speed-insights |

## Project structure

```
src/
├── app/
│   ├── layout.tsx          
│   ├── page.tsx            
│   ├── globals.css         
│   ├── not-found.tsx       # 404 page
│   ├── robots.ts           # Robots.txt
│   ├── sitemap.ts          # Sitemap generation
│   └── projects/[slug]/    # Dynamic project detail pages
├── components/
│   ├── layout/
│   │   ├── navbar.tsx      # Navbar (desktop only, < 860px hidden)
│   │   ├── footer.tsx      # Footer 
│   │   └── smooth-scroll.tsx # Lenis smooth-scroll provider
│   ├── sections/
│   │   ├── hero.tsx        # Hero section 
│   │   ├── projects.tsx    # Projects grid 
│   │   ├── about.tsx       # About 
│   │   ├── experience.tsx  # Experience cards
│   │   ├── education.tsx   # Education cards 
│   │   └── contact.tsx     # Contact form 
│   └── ui/
│       └── button.tsx      # Reusable ButtonLink 
├── data/
│   ├── site.ts             # Site content
│   └── projects.ts         # Project data 
├── lib/
│   ├── utils.ts            
│   └── validation.ts       
└── types/
    └── index.ts            # TypeScript types
```

## Sections

| Section | ID | Description |
|---------|-----|-------------|
| Hero | `#hero` | Full-height hero with background image, animated wordmark & tagline |
| Projects | `#projects` | Grid of project cards linking to live sites / repos |
| About | `#about` | Bio paragraph |
| Experience | `#experience` | Work history cards |
| Education | `#education` |
| Contact | `#contact` | Contact form |

## Getting started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint

# Build for production
npm run build

# Format
npm run format
```

The dev server runs on `http://localhost:3000`.

## License

MIT