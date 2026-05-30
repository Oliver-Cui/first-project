import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lightpath Coaching",
  description: "Personalised tutoring that helps children build confidence.",
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
