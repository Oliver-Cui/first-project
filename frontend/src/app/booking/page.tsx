import type { Metadata } from "next";
import { PageShell, SectionIntro } from "../components";
import { BookingForm } from "./booking-form";

export const metadata: Metadata = {
  title: "Book a Free Chat",
  description:
    "Book a free chat with Lightpath Coaching to discuss student year level, subject needs, lesson format, and online, in-person, or hybrid tutoring options.",
  alternates: {
    canonical: "/booking",
  },
};

export default function BookingPage() {
  return (
    <PageShell>
      <section className="bg-sky-50 px-5 py-20 sm:px-8">
        <SectionIntro
          eyebrow="Book a Free Chat"
          title="Tell us what your child needs support with."
          description="This first conversation helps us understand your child's year level, subject needs, preferred lesson format, and whether online, in-person, or hybrid support suits best."
          headingLevel="h1"
        />
        <BookingForm />
      </section>
    </PageShell>
  );
}
