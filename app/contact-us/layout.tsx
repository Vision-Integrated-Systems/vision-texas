import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Vision Integrated Systems",
  description:
    "Get in touch with Vision Integrated Systems for project inquiries, quotes, and support. Serving the Greater Houston area.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
