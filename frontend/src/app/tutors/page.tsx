import Image from "next/image";
import { CTASection, PageShell, SectionIntro } from "../components";
import { tutors } from "../data";

export default function TutorsPage() {
  return (
    <PageShell>
      <section className="bg-white px-5 py-20 sm:px-8">
        <SectionIntro
          eyebrow="Meet Our Tutors"
          title="Supportive tutors who know how to build confidence."
          description="Families need to see more than qualifications. They need to understand teaching style, strengths, and whether their child will feel safe and supported."
          headingLevel="h1"
        />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {tutors.map((tutor) => (
            <article key={tutor.name} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div className="grid md:grid-cols-[0.78fr_1.22fr]">
                <div className="flex min-h-80 items-end justify-center bg-sky-50 px-6 pt-8">
                  {tutor.image ? (
                    <Image
                      src={tutor.image}
                      alt={`${tutor.name} tutor portrait`}
                      width={1235}
                      height={1400}
                      className="max-h-80 w-full object-contain object-bottom"
                    />
                  ) : (
                    <div className="mb-8 grid h-40 w-40 place-items-center rounded-full bg-emerald-800 text-4xl font-semibold text-white">
                      {tutor.initials}
                    </div>
                  )}
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-semibold text-slate-950">{tutor.name}</h2>
                  <p className="mt-2 text-sm font-semibold text-emerald-800">{tutor.subjects}</p>
                  <p className="mt-5 text-sm leading-6 text-slate-650">{tutor.bio}</p>
                  <div className="mt-5 rounded-lg bg-amber-100 p-4">
                    <p className="text-xs font-semibold uppercase text-emerald-800">Teaching style</p>
                    <p className="mt-2 text-sm leading-6 text-slate-750">{tutor.teachingStyle}</p>
                  </div>
                  <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-650">
                    {tutor.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
