import type { Metadata } from "next";
import { CTASection, PageShell, SectionIntro } from "../components";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Lightpath Coaching, a Hamilton tutoring provider focused on personalised learning, confidence building, NZ curriculum alignment, and clear family communication.",
  alternates: {
    canonical: "/about",
  },
};

const differenceItems = [
  "We help students feel confident, not just get higher scores.",
  "Tailored lessons based on individual needs.",
  "Small group support and personalised tracking.",
  "Free initial learning assessment.",
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="bg-sky-50 px-5 py-20 sm:px-8">
        <SectionIntro
          eyebrow="About"
          title="Helping students feel confident, supported, and capable."
          description="Lightpath Coaching exists to make personalised learning clearer, warmer, and more encouraging for families."
          headingLevel="h1"
        />
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-emerald-700">Our story</p>
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-5xl">
              Learning should feel possible again.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-650">
            <p>
              Many students do not need more pressure. They need a calm place where someone
              understands how they learn, explains ideas clearly, and helps them rebuild trust in
              their own ability.
            </p>
            <p>
              Our mission is to provide personalised tutoring that supports progress, confidence,
              and a healthier relationship with learning.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 px-5 py-20 text-slate-950 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase text-emerald-700">What makes us different</p>
            <h2 className="text-3xl font-semibold sm:text-5xl">Confidence is built into the approach.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {differenceItems.map((item) => (
              <div key={item} className="rounded-lg border border-emerald-100 bg-white p-6 shadow-sm">
                <p className="text-lg font-semibold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["Supportive environment", "Students feel safe to ask questions and learn from mistakes."],
            ["NZ curriculum aligned", "Lessons connect to local expectations and school learning."],
            ["Parent feedback", "Families can see progress and understand next steps."],
          ].map(([title, description]) => (
            <article key={title} className="rounded-lg border border-slate-200 p-7">
              <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
              <p className="mt-4 leading-7 text-slate-650">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
