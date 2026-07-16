"use client";

import { FormEvent, useState } from "react";

type FormState = {
  parentName: string;
  email: string;
  phone: string;
  childYearLevel: string;
  subjectInterest: string;
  preferredLessonType: string;
  preferredClassFormat: string;
  message: string;
};

const initialFormState: FormState = {
  parentName: "",
  email: "",
  phone: "",
  childYearLevel: "",
  subjectInterest: "",
  preferredLessonType: "",
  preferredClassFormat: "",
  message: "",
};

const requiredFields: Array<keyof FormState> = [
  "email",
  "phone",
  "childYearLevel",
  "subjectInterest",
  "message",
];

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const missingField = requiredFields.find((field) => !form[field].trim());
    if (missingField) {
      setStatus("error");
      setErrorMessage("Please complete the required fields before sending your enquiry.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialFormState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto grid max-w-3xl gap-5 rounded-lg bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-750">
          Parent name
          <input
            value={form.parentName}
            onChange={(event) => updateField("parentName", event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal"
            autoComplete="name"
          />
        </label>
        <label className="text-sm font-semibold text-slate-750">
          Email *
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal"
            autoComplete="email"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-750">
          Phone *
          <input
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal"
            autoComplete="tel"
          />
        </label>
        <label className="text-sm font-semibold text-slate-750">
          Student year level *
          <select
            value={form.childYearLevel}
            onChange={(event) => updateField("childYearLevel", event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal"
          >
            <option value="">Please select</option>
            <option>Year 9</option>
            <option>Year 10</option>
            <option>Year 11 / NCEA Level 1</option>
            <option>Year 12 / NCEA Level 2</option>
            <option>Year 13 / NCEA Level 3</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-750">
          Subject interest *
          <select
            value={form.subjectInterest}
            onChange={(event) => updateField("subjectInterest", event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal"
          >
            <option value="">Please select</option>
            <option>English</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>ESOL</option>
            <option>Writing</option>
            <option>CAA</option>
            <option>NCEA support</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="text-sm font-semibold text-slate-750">
          Preferred lesson type
          <select
            value={form.preferredLessonType}
            onChange={(event) => updateField("preferredLessonType", event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal"
          >
            <option value="">Please select</option>
            <option>In person near Chartwell Westfield</option>
            <option>Online</option>
            <option>Hybrid</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <label className="text-sm font-semibold text-slate-750">
        Preferred class format
        <select
          value={form.preferredClassFormat}
          onChange={(event) => updateField("preferredClassFormat", event.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal"
        >
          <option value="">Please select</option>
          <option>Private 1:1 lesson</option>
          <option>Semi-private lesson</option>
          <option>Small group class</option>
          <option>Not sure yet</option>
        </select>
      </label>

      <label className="text-sm font-semibold text-slate-750">
        Main concern or goal *
        <textarea
          rows={5}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal"
          placeholder="For example: NCEA preparation, CAA numeracy, English writing, confidence, catching up, or extension..."
        />
      </label>

      {status === "success" ? (
        <p className="rounded-lg bg-emerald-50 p-4 text-sm font-semibold leading-6 text-emerald-900">
          Thanks, your enquiry has been sent. We will get back to you soon.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-lg bg-red-50 p-4 text-sm font-semibold leading-6 text-red-800">{errorMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-lg bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
