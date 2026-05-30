import Link from "next/link";
import { CTASection, PageShell, SectionIntro } from "./components";
import { testimonials, valuePillars } from "./data";

export default function Home() {
  return (
    <PageShell>
      <section className="relative isolate min-h-[calc(100vh-132px)] overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-62"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/42" />
        <div className="relative mx-auto flex min-h-[calc(100vh-132px)] max-w-7xl items-center px-5 py-20 sm:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-5 inline-flex rounded-lg bg-white/14 px-4 py-2 text-sm font-semibold backdrop-blur">
              Personalised tutoring in New Zealand
            </p>
            <h1 className="text-5xl font-semibold leading-tight sm:text-7xl">
              Confidence Starts Here.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/90">
              Where personalised learning helps children feel confident, capable, and proud of
              their progress.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/booking"
                className="rounded-lg bg-amber-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-amber-200"
              >
                Book Now
              </Link>
              <Link
                href="/tutoring"
                className="rounded-lg border border-white/70 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/12"
              >
                See How Tutoring Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <SectionIntro
          eyebrow="What parents care about"
          title="More support, more confidence, steady progress."
          description="Our tutoring is designed around the emotional and academic needs that matter to families."
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {valuePillars.map((pillar) => (
            <article key={pillar.title} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-950">{pillar.title}</h2>
              <p className="mt-4 leading-7 text-slate-650">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-emerald-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-amber-300">The shift we work toward</p>
            <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">
              From &quot;I can&apos;t&quot; to &quot;I can.&quot;
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Unsure", "Supported", "Confident"].map((stage, index) => (
              <div key={stage} className="rounded-lg bg-white/10 p-5">
                <span className="text-sm font-semibold text-amber-300">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold">{stage}</h3>
                <p className="mt-3 text-sm leading-6 text-white/78">
                  {index === 0
                    ? "We listen first and understand where learning feels difficult."
                    : index === 1
                      ? "Students get clear steps, warm guidance, and room to ask questions."
                      : "Progress becomes visible, and students begin to trust their own ability."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-50 px-5 py-20 sm:px-8">
        <SectionIntro title="What Parents Say" description="Early trust signals for families considering support." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.parent} className="rounded-lg bg-white p-7 shadow-sm">
              <blockquote className="leading-7 text-slate-750">&quot;{testimonial.quote}&quot;</blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-emerald-800">
                {testimonial.parent}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
