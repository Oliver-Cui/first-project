import Link from "next/link";
import { CTASection, PageShell, SectionIntro } from "../components";
import { processSteps, subjects } from "../data";

export default function TutoringPage() {
  return (
    <PageShell>
      <section className="bg-sky-50 px-5 py-20 sm:px-8">
        <SectionIntro
          eyebrow="Tutoring"
          title="Personalised Tutoring That Builds Confidence."
          description="A clear, structured process helps parents understand how we support each child's learning needs, level, and personality."
          headingLevel="h1"
        />
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase text-emerald-700">How it works</p>
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-5xl">
              A simple path from first chat to weekly growth.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-slate-200 p-7">
                <span className="text-sm font-semibold text-emerald-700">Step {index + 1}</span>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-650">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase text-amber-300">Subjects</p>
            <h2 className="text-3xl font-semibold sm:text-5xl">Support across core learning areas.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {subjects.map((subject) => (
              <article key={subject.name} className="rounded-lg bg-white p-6 text-slate-950">
                <h3 className="text-2xl font-semibold">{subject.name}</h3>
                <p className="mt-2 text-sm font-semibold text-emerald-800">{subject.levels}</p>
                <p className="mt-4 text-sm leading-6 text-slate-650">{subject.description}</p>
              </article>
            ))}
          </div>
          <Link
            href="/booking"
            className="mt-10 inline-flex rounded-lg bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-200"
          >
            Book a Free Chat
          </Link>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
