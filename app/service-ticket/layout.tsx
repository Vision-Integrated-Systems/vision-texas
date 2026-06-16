import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Center | Vision Integrated Systems",
  description:
    "Submit a support ticket for your AV, security, or cabling systems. Our technicians respond rapidly to keep your systems operational.",
};

export default function ServiceTicketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
