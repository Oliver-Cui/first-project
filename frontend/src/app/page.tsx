import Link from "next/link";
import { CTASection, PageShell, SectionIntro } from "./components";
import { testimonials, valuePillars } from "./data";

export default function Home() {
  return (
    <PageShell>
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-68"
          style={{
            backgroundImage: "url('/home/lightpath-small-group-hero.png')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(15_23_42_/_0.82),rgb(15_23_42_/_0.52),rgb(15_23_42_/_0.2))]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-68px)] max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.7fr]">
          <div className="max-w-3xl text-white">
            <p className="mb-5 inline-flex rounded-lg bg-white/16 px-4 py-2 text-sm font-semibold backdrop-blur">
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
                className="rounded-lg bg-amber-300 px-6 py-3.5 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/20 hover:bg-amber-200"
              >
                Book Now
              </Link>
              <Link
                href="/tutoring"
                className="rounded-lg border border-white/30 bg-white/12 px-6 py-3.5 text-center text-sm font-semibold text-white backdrop-blur hover:bg-white/18"
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
          title="More support, greater confidence, real progress."
          description="Our tutoring is designed around academic and learning needs that matter to families."
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {valuePillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="rounded-lg border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgb(15_23_42_/_0.06)]"
            >
              <span className="mb-5 grid h-10 w-10 place-items-center rounded-lg bg-sky-50 text-sm font-bold text-emerald-800">
                0{index + 1}
              </span>
              <h2 className="text-2xl font-semibold text-slate-950">{pillar.title}</h2>
              <p className="mt-4 leading-7 text-slate-650">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50 px-5 py-20 text-slate-950 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-emerald-700">The shift we work toward</p>
            <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">
              From &quot;I can&apos;t&quot; to &quot;I can.&quot;
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-650">
              The goal is not to rush students. It is to help them feel safe enough to try, steady
              enough to improve, and confident enough to keep going.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Unsure", "Supported", "Confident"].map((stage, index) => (
              <div key={stage} className="rounded-lg border border-emerald-100 bg-white p-5 shadow-sm">
                <span className="text-sm font-semibold text-emerald-700">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold">{stage}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-650">
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
        <SectionIntro
          title="What Families Say"
          description="Real feedback from parents and students who have learned with us."
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.parent} className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200/70">
              <div className="mb-5 text-3xl font-semibold text-emerald-700">&ldquo;</div>
              <blockquote className="leading-7 text-slate-750">{testimonial.quote}</blockquote>
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
