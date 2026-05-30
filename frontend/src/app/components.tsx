import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tutoring", href: "/tutoring" },
  { label: "Meet Our Tutors", href: "/tutors" },
  { label: "About", href: "/about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Lightpath Coaching home">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-700 text-lg font-bold text-white">
            L
          </span>
          <span className="text-base font-semibold text-slate-950">Lightpath Coaching</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-emerald-800">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/booking"
          className="rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
        >
          Book a Free Chat
        </Link>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-slate-100 px-5 py-3 text-sm font-medium text-slate-700 md:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 hover:text-emerald-800">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-amber-300 text-lg font-bold text-slate-950">
              L
            </span>
            <span className="font-semibold">Lightpath Coaching</span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-300">
            Personalised tutoring that helps students feel confident, supported, and capable.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-white">Contact</h2>
          <p className="text-sm leading-6 text-slate-300">021 000 0000</p>
          <p className="text-sm leading-6 text-slate-300">hello@lightpath.co.nz</p>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-white">Social</h2>
          <div className="flex gap-4 text-sm text-slate-300">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  headingLevel = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase text-emerald-700">{eyebrow}</p>
      ) : null}
      <Heading className="text-3xl font-semibold text-slate-950 sm:text-5xl">{title}</Heading>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-650">{description}</p> : null}
    </div>
  );
}

export function CTASection() {
  return (
    <section className="bg-amber-100">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-emerald-800">Ready when you are</p>
          <h2 className="max-w-2xl text-3xl font-semibold text-slate-950 sm:text-4xl">
            Let&apos;s Help Your Child Feel Confident Again.
          </h2>
        </div>
        <Link
          href="/booking"
          className="rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Book a Free Chat
        </Link>
      </div>
    </section>
  );
}
