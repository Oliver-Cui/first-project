import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "./site-header";

export function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-white text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-700 text-lg font-bold text-white">
              L
            </span>
            <span className="font-semibold">Lightpath Coaching</span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-650">
            Personalised tutoring that helps students feel confident, supported, and capable.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-950">Contact</h2>
          <p className="text-sm leading-6 text-slate-650">lightpathcoachingnz@gmail.com</p>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-950">Social</h2>
          <div className="flex gap-4 text-sm text-slate-650">
            <a href="#" className="hover:text-emerald-800">
              Instagram
            </a>
            <a href="#" className="hover:text-emerald-800">
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
    <section className="bg-amber-50">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold text-slate-950 sm:text-4xl">
            Let&apos;s help every student feel confident.
          </h2>
        </div>
        <Link
          href="/booking"
          className="rounded-lg bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
        >
          Book a Free Chat
        </Link>
      </div>
    </section>
  );
}
