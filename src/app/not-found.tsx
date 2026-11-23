import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-6 text-center">
      <div>
        <h1 className="text-6xl font-medium tracking-tighter">
          Page not found
        </h1>
        <Link
          href="/"
          className="mt-6 inline-block underline underline-offset-4"
        >
          Go to the home page
        </Link>
      </div>
    </main>
  );
}
