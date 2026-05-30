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
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {tutors.map((tutor) => (
            <article key={tutor.name} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <div
                className="h-72 bg-cover bg-center"
                style={{ backgroundImage: `url('${tutor.image}')` }}
                role="img"
                aria-label={`${tutor.name} tutor portrait`}
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-950">{tutor.name}</h2>
                <p className="mt-2 text-sm font-semibold text-emerald-800">{tutor.subjects}</p>
                <p className="mt-4 text-sm leading-6 text-slate-650">{tutor.experience}</p>
                <p className="mt-3 text-sm leading-6 text-slate-650">{tutor.strengths}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
