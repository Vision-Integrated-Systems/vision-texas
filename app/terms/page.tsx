import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Vision Integrated Systems",
  description:
    "Terms and conditions for using the Vision Integrated Systems website and services.",
};

export default function TermsOfService() {
  const lastUpdated = "February 13, 2026";

  return (
    <>
      {/* Simple Premium Hero */}
      <section className="relative bg-slate-950 py-32 lg:py-40 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay z-0 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-indigo-600/20 blur-[120px] pointer-events-none z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Terms of{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-400">
              Service
            </span>
          </h1>
          <p className="text-slate-400 text-lg">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 prose prose-lg prose-indigo text-slate-600">
            <p>
              Welcome to <strong>Vision Integrated Systems</strong>. By
              accessing or using our website, you agree to comply with and be
              bound by the following Terms of Service. Please read these terms
              carefully before using our site.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              1. Acceptance of Terms
            </h3>
            <p>
              By accessing this website, you accept these Terms of Service in
              full. If you disagree with these terms or any part of these terms,
              you must not use this website.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              2. Use of the Website
            </h3>
            <p>
              You agree to use this website only for lawful purposes, and in a
              way that does not infringe the rights of, restrict, or inhibit
              anyone else&apos;s use and enjoyment of the site. Prohibited
              behavior includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Transmitting any unlawful, harassing, or abusive content.</li>
              <li>
                Attempting to gain unauthorized access to our secure servers or
                service ticket systems.
              </li>
              <li>
                Using the site to distribute malicious software or malware.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              3. Intellectual Property Rights
            </h3>
            <p>
              Unless otherwise stated, Vision Integrated Systems (VIS Houston,
              LLC) and/or its licensors own the intellectual property rights
              published on this website and materials used on it. This includes
              text, graphics, logos, and images. You may not reproduce,
              duplicate, copy, or otherwise exploit material on our website for
              a commercial purpose without our express written consent.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              4. Limitation of Liability
            </h3>
            <p>
              The information on this website is provided &quot;as is&quot;
              without any representations or warranties, express or implied.
              Vision Integrated Systems makes no representations or warranties
              in relation to this website or the information and materials
              provided on this website.
            </p>
            <p>
              In no event will Vision Integrated Systems be liable for any
              incidental, indirect, consequential, or special damages of any
              kind, or any damages whatsoever, arising out of or in connection
              with the use of this website or any linked websites.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              5. Service Guarantee
            </h3>
            <p>
              While we guarantee our installation and integration work as
              outlined in our independent client contracts, the content on this
              website does not constitute a legally binding warranty for
              services not yet rendered.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
              6. Governing Law
            </h3>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of the State of Texas, and any disputes
              relating to these terms and conditions will be subject to the
              exclusive jurisdiction of the courts of Texas.
            </p>

            <p className="text-sm text-slate-400 mt-10 italic">
              *Note: These terms of service are for informational purposes. For
              full legal compliance, please consult with your legal counsel.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
