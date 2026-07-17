import Image from "next/image";
import type { Metadata } from "next";
import { CTASection, PageShell, SectionIntro } from "../components";
import { teamMembers } from "../data";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description:
    "Meet the Lightpath Coaching team, including experienced English and Mathematics tutors and education marketing support for families in Hamilton and online.",
  alternates: {
    canonical: "/tutors",
  },
};

export default function TutorsPage() {
  return (
    <PageShell>
      <section className="bg-white px-5 py-20 sm:px-8">
        <SectionIntro
          eyebrow="Meet Our Team"
          title="The people behind Lightpath Coaching."
          description="Families need to understand who will support their child and how our team brings teaching experience, care, and clear communication together."
          headingLevel="h1"
        />
        <div className="mx-auto grid max-w-7xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex h-80 items-end justify-center bg-sky-50 px-6 pt-12">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name} team portrait`}
                    width={1235}
                    height={1400}
                    className="max-h-[17rem] w-full object-contain object-bottom"
                  />
                ) : (
                  <div className="mb-8 grid h-36 w-36 place-items-center rounded-full bg-emerald-800 text-3xl font-semibold text-white">
                    {member.initials}
                  </div>
                )}
              </div>
              <div className="px-6 pb-6 pt-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-semibold text-slate-950">{member.name}</h2>
                  <span className="rounded-full bg-emerald-800 px-3 py-1 text-xs font-semibold uppercase text-white">
                    {member.role}
                  </span>
                </div>
                <p className="mt-3 text-xs font-semibold uppercase text-slate-500">Focus area</p>
                <p className="mt-1 text-sm font-semibold text-emerald-800">{member.subjects}</p>
                <details className="group mt-5 lg:mt-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between border-t border-slate-200 pt-4 text-sm font-semibold text-emerald-800 lg:pt-3">
                    <span>Learn more</span>
                    <span className="text-lg leading-none transition group-open:rotate-45">+</span>
                  </summary>
                  <div className="mt-5 lg:mt-4">
                    <p className="text-sm leading-6 text-slate-650">{member.bio}</p>
                    <div className="mt-5 rounded-lg bg-amber-100 p-4">
                      <p className="text-xs font-semibold uppercase text-emerald-800">
                        {member.role.includes("Tutor") ? "Teaching style" : "Working style"}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-750">{member.teachingStyle}</p>
                    </div>
                    <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-650">
                      {member.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
