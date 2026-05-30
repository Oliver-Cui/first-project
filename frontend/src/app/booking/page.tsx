import { PageShell, SectionIntro } from "../components";

export default function BookingPage() {
  return (
    <PageShell>
      <section className="bg-sky-50 px-5 py-20 sm:px-8">
        <SectionIntro
          eyebrow="Book a Free Chat"
          title="Tell us what your child needs support with."
          description="This first conversation helps us understand your child's confidence, learning needs, and next best step."
          headingLevel="h1"
        />
        <form className="mx-auto grid max-w-3xl gap-5 rounded-lg bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-750">
              Parent name
              <input className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal" />
            </label>
            <label className="text-sm font-semibold text-slate-750">
              Email
              <input type="email" className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal" />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-750">
              Phone
              <input className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal" />
            </label>
            <label className="text-sm font-semibold text-slate-750">
              Child year level
              <select className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal">
                <option>Please select</option>
                <option>Years 1-3</option>
                <option>Years 4-6</option>
                <option>Years 7-8</option>
                <option>Years 9-11</option>
              </select>
            </label>
          </div>
          <label className="text-sm font-semibold text-slate-750">
            Subject interest
            <select className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal">
              <option>Please select</option>
              <option>English</option>
              <option>Mathematics</option>
              <option>Science</option>
              <option>Study Skills</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-750">
            Main concern or goal
            <textarea
              rows={5}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal"
              placeholder="For example: confidence, writing, maths basics, school transition, exam preparation..."
            />
          </label>
          <button
            type="button"
            className="rounded-lg bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Send Enquiry
          </button>
        </form>
      </section>
    </PageShell>
  );
}
