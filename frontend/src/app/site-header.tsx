"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tutoring", href: "/tutoring" },
  { label: "Meet Our Team", href: "/tutors" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/94 shadow-[0_1px_18px_rgb(15_23_42_/_0.05)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="Lightpath Coaching home"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald-800 text-lg font-bold text-white shadow-sm">
            L
          </span>
          <span className="truncate text-base font-semibold text-slate-950">Lightpath Coaching</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-emerald-800">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/booking"
            className="hidden rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 sm:inline-flex"
          >
            Book a Free Chat
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-300 text-slate-800 md:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex h-4 w-5 flex-col justify-between">
              <span
                className={`h-0.5 rounded-full bg-current transition-transform ${
                  isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 rounded-full bg-current transition-opacity ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 rounded-full bg-current transition-transform ${
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 text-sm font-medium text-slate-750">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 hover:bg-sky-50 hover:text-emerald-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="mt-2 rounded-lg bg-emerald-700 px-4 py-3 text-center font-semibold text-white hover:bg-emerald-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Free Chat
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
