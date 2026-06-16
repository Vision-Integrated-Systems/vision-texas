import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Privacy Policy | Vision Integrated Systems",
  description:
    "Learn how Vision Integrated Systems collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "February 13, 2026";

  return (
    <>
      {/* Simple Premium Hero */}
      <section className="relative bg-slate-950 py-32 lg:py-40 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-600/20 blur-[120px] pointer-events-none z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">
              Policy
            </span>
          </h1>
          <p className="text-slate-400 text-lg">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 prose prose-lg prose-blue text-slate-600">
            <p>
              At <strong>Vision Integrated Systems (VIS Houston, LLC)</strong>,
              we respect your privacy and are committed to protecting your
              personal data. This Privacy Policy explains how we collect, use,
              and safeguard your information when you visit our website or
              interact with our services.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              1. Information We Collect
            </h3>
            <p>
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                Submit a project inquiry via our <strong>Contact Us</strong>{" "}
                form.
              </li>
              <li>
                Submit a support request through our{" "}
                <strong>Service Center</strong>.
              </li>
              <li>
                Apply for a job through our <strong>Careers</strong> portal.
              </li>
            </ul>
            <p>
              This information may include your name, email address, phone
              number, company name, and any attachments or messages you provide.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              2. How We Use Your Information
            </h3>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                Respond to your inquiries and provide quotes for our services.
              </li>
              <li>Provide technical support and troubleshoot system issues.</li>
              <li>
                Evaluate job applications and communicate with candidates.
              </li>
              <li>
                Improve our website, services, and overall customer experience.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              3. Data Security
            </h3>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, please
              note that no method of transmission over the Internet or
              electronic storage is 100% secure.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              4. Sharing Your Information
            </h3>
            <p>
              We do not sell, trade, or rent your personal identification
              information to others. We may share generic aggregated demographic
              information not linked to any personal identification information
              with our business partners and trusted affiliates.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              5. Third-Party Links
            </h3>
            <p>
              Our website may contain links to third-party sites (such as our
              manufacturing partners). We are not responsible for the privacy
              practices or content of these external sites. We encourage you to
              read their privacy policies.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              6. Contact Us
            </h3>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-6">
              <p className="font-bold text-slate-900 mb-1">
                Vision Integrated Systems
              </p>
              <p className="mb-1">32311 Tamina Rd, Suite A</p>
              <p className="mb-1">Magnolia, TX 77354</p>
              <p className="mb-1">
                Phone:{" "}
                <a
                  href="tel:8325351991"
                  className="text-blue-600 hover:underline"
                >
                  832.535.1991
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@vision-texas.com"
                  className="text-blue-600 hover:underline"
                >
                  info@vision-texas.com
                </a>
              </p>
            </div>

            <p className="text-sm text-slate-400 mt-10 italic">
              *Note: This privacy policy is for informational purposes. For full
              legal compliance, please consult with your legal counsel.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
