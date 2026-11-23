import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        dark: "bg-pill text-white hover:bg-black",
        light: "bg-pill-light text-ink hover:bg-white",
      },
    },
    defaultVariants: { variant: "dark" },
  },
);

type Props = VariantProps<typeof button> & {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({ href, variant, className, children }: Props) {
  return (
    <Link href={href} className={cn(button({ variant }), className)}>
      {children}
    </Link>
  );
}
