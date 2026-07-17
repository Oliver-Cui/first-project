import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lightpathcoaching.co.nz"),
  title: {
    default: "Lightpath Coaching | Hamilton Tutoring for School Learners",
    template: "%s | Lightpath Coaching",
  },
  description:
    "Personalised tutoring in Hamilton for school-aged learners, including English, Maths, Science, NCEA, ESOL, writing, and confidence building.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lightpath Coaching | Hamilton Tutoring for School Learners",
    description:
      "Personalised tutoring in Hamilton for school-aged learners, with private, semi-private, small group, online, in-person, and hybrid support.",
    url: "/",
    siteName: "Lightpath Coaching",
    locale: "en_NZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
