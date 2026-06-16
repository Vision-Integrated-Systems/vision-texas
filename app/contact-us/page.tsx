"use client";

import { useActionState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  BuildingOffice2Icon,
  PhoneIcon,
  EnvelopeIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  ChevronRightIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

import { handleContactSubmit, type FormState } from "../lib/actions";
import { SubmitButton } from "@/components/SubmitButton";

function ContactForm() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");
  const defaultMessage = subject ? `Regarding: ${subject}\n\n` : "";

  const initialState: FormState = null;
  const [state, formAction] = useActionState(handleContactSubmit, initialState);

  // Simple FAQ Data
  const faqs = [
    {
      q: "What areas do you serve?",
      a: "We primarily serve the Greater Houston area and surrounding regions in Texas, but we travel for larger corporate projects.",
    },
    {
      q: "Do you offer free estimates?",
      a: "Yes! For most standard commercial projects, we provide complimentary site surveys and estimates.",
    },
    {
      q: "What brands do you work with?",
      a: "We are certified partners with industry leaders like Crestron, Biamp, Axis, Shure, and many others.",
    },
    {
      q: "Do you provide maintenance contracts?",
      a: "Absolutely. We offer tailored service agreements to ensure your systems remain operational and secure year-round.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-950 py-32 lg:py-48 text-center text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-wide backdrop-blur-md">
            Contact Us
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-white">
              Touch
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to start your project? Let&apos;s build something great
            together.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative">
        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            {/* LEFT COLUMN: Contact Info & Smart Routing */}
            <div className="lg:w-1/3 space-y-8">
              {/* Main Contact Card */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-110"></div>

                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center relative z-10">
                  <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <BuildingOffice2Icon className="w-6 h-6" />
                  </span>
                  Headquarters
                </h3>

                <div className="space-y-8 relative z-10">
                  <div className="pl-3 border-l-2 border-blue-100">
                    <p className="text-slate-600 leading-relaxed text-lg">
                      32311 Tamina Rd
                      <br />
                      Suite A<br />
                      Magnolia, TX 77354
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a
                      href="tel:8325351991"
                      className="flex items-center p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group/link bg-slate-50/50"
                    >
                      <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center mr-4 shadow-sm group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                        <PhoneIcon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-700 group-hover/link:text-blue-700 transition-colors">
                        832.535.1991
                      </span>
                    </a>

                    <a
                      href="mailto:info@vision-texas.com"
                      className="flex items-center p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group/link bg-slate-50/50"
                    >
                      <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center mr-4 shadow-sm group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                        <EnvelopeIcon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-700 group-hover/link:text-blue-700 transition-colors">
                        info@vision-texas.com
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Smart Route: Support */}
              <Link
                href="/service-ticket"
                className="block bg-slate-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative"
              >
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl -ml-10 -mb-10 group-hover:bg-blue-600/30 transition-colors duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-4 text-blue-400">
                    <WrenchScrewdriverIcon className="w-6 h-6 mr-2" />
                    <span className="font-bold uppercase tracking-wider text-xs">
                      Existing Client?
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Technical Support
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    Submit a ticket directly to our technicians for faster
                    priority service.
                  </p>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
                    Open Ticket <ChevronRightIcon className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </Link>

              {/* Smart Route: Careers */}
              <Link
                href="/careers"
                className="block bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <UserGroupIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900">
                        Join our Team
                      </span>
                      <span className="text-xs text-slate-500">
                        View open positions
                      </span>
                    </div>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 text-slate-300 group-hover:text-purple-600 transition-colors" />
                </div>
              </Link>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100/60 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

                <div className="mb-10">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                    <ChatBubbleLeftRightIcon className="w-4 h-4" />
                    Project Inquiry
                  </span>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">
                    Send us a Message
                  </h3>
                  <p className="text-slate-500 text-lg">
                    Tell us about your project goals. We usually respond within
                    24 hours.
                  </p>
                </div>

                <form action={formAction} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-semibold text-slate-700 ml-1"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                        placeholder="Jane"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="lastName"
                        className="text-sm font-semibold text-slate-700 ml-1"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-slate-700 ml-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                        placeholder="jane@company.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-semibold text-slate-700 ml-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-slate-700 ml-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all resize-none placeholder:text-slate-400"
                      placeholder="How can we help you?"
                      required
                      defaultValue={defaultMessage}
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <SubmitButton
                      text="Send Message"
                      className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:from-blue-700 hover:to-indigo-700 hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </div>

                  {state?.status === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center animate-in fade-in slide-in-from-bottom-2">
                      <svg
                        className="w-5 h-5 mr-3 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {state.message}
                    </div>
                  )}
                  {state?.status === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center animate-in fade-in slide-in-from-bottom-2">
                      <svg
                        className="w-5 h-5 mr-3 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {state.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300"
                >
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">
                    {faq.q}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactUs() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <span className="text-sm font-medium tracking-widest uppercase opacity-70">
              Loading...
            </span>
          </div>
        </div>
      }
    >
      <ContactForm />
    </Suspense>
  );
}
