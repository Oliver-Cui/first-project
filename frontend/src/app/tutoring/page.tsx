import { CTASection, PageShell, SectionIntro } from "../components";
import { localDetails, processSteps, subjects, tutoringFormats } from "../data";

export default function TutoringPage() {
  return (
    <PageShell>
      <section className="bg-sky-50 px-5 py-20 sm:px-8">
        <SectionIntro
          eyebrow="Tutoring"
          title="Hamilton tutoring for school-aged learners."
          description="Personalised support for English, Maths, Science, ESOL, Writing, CAA, and NCEA Levels 1-3, available online, in person, or hybrid."
          headingLevel="h1"
        />
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {localDetails.map((detail) => (
            <article key={detail} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold leading-6 text-slate-750">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sky-50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase text-emerald-700">How it works</p>
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-5xl">
              A clear path from first chat to regular lessons.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
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
            <h2 className="text-3xl font-semibold sm:text-5xl">Focused support for school learners.</h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              Lessons can focus on foundation skills, extension, exam preparation, or confidence
              building, depending on each student&apos;s current level and goals.
            </p>
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
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase text-emerald-700">Lesson formats</p>
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-5xl">
              Choose the level of support that fits your child.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {tutoringFormats.map((format) => (
              <article key={format.title} className="rounded-lg border border-slate-200 p-7 shadow-sm">
                <h3 className="text-2xl font-semibold text-slate-950">{format.title}</h3>
                <p className="mt-4 leading-7 text-slate-650">{format.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
