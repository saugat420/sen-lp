import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English Fluency Workshop | Speak English Confidently",
  description: "Join the English Fluency Workshop and speak with confidence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
