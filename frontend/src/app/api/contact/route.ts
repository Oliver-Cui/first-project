import { NextResponse } from "next/server";

type ContactPayload = {
  parentName?: string;
  email?: string;
  phone?: string;
  childYearLevel?: string;
  subjectInterest?: string;
  preferredLessonType?: string;
  preferredClassFormat?: string;
  message?: string;
};

const requiredFields: Array<keyof ContactPayload> = [
  "parentName",
  "email",
  "phone",
  "childYearLevel",
  "subjectInterest",
  "message",
];

const contactToEmail = process.env.CONTACT_TO_EMAIL || "lightpathcoachingnz@gmail.com";
const contactFromEmail = process.env.CONTACT_FROM_EMAIL || "Lightpath Website <onboarding@resend.dev>";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function fieldRow(label: string, value?: string) {
  return `<p><strong>${label}:</strong> ${escapeHtml(value || "Not provided")}</p>`;
}

function buildEmailHtml(payload: Required<ContactPayload>) {
  return `
    <h2>New Lightpath Coaching enquiry</h2>
    ${fieldRow("Parent name", payload.parentName)}
    ${fieldRow("Email", payload.email)}
    ${fieldRow("Phone", payload.phone)}
    ${fieldRow("Child year level", payload.childYearLevel)}
    ${fieldRow("Subject interest", payload.subjectInterest)}
    ${fieldRow("Preferred lesson type", payload.preferredLessonType)}
    ${fieldRow("Preferred class format", payload.preferredClassFormat)}
    <h3>Main concern or goal</h3>
    <p>${escapeHtml(payload.message).replaceAll("\n", "<br />")}</p>
  `;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const missingField = requiredFields.find((field) => !payload[field]?.trim());
  if (missingField) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  if (!isValidEmail(payload.email || "")) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const normalisedPayload: Required<ContactPayload> = {
    parentName: payload.parentName?.trim() || "",
    email: payload.email?.trim() || "",
    phone: payload.phone?.trim() || "",
    childYearLevel: payload.childYearLevel?.trim() || "",
    subjectInterest: payload.subjectInterest?.trim() || "",
    preferredLessonType: payload.preferredLessonType?.trim() || "Not provided",
    preferredClassFormat: payload.preferredClassFormat?.trim() || "Not provided",
    message: payload.message?.trim() || "",
  };

  if (!process.env.RESEND_API_KEY) {
    console.info("Mock Lightpath Coaching enquiry:", normalisedPayload);
    return NextResponse.json({
      message: "Mock enquiry received. Configure RESEND_API_KEY to send real emails.",
      mode: "mock",
    });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: contactFromEmail,
      to: [contactToEmail],
      reply_to: normalisedPayload.email,
      subject: `New tutoring enquiry from ${normalisedPayload.parentName}`,
      html: buildEmailHtml(normalisedPayload),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Failed to send contact email:", errorText);
    return NextResponse.json({ message: "Could not send enquiry. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ message: "Enquiry sent successfully.", mode: "email" });
}
