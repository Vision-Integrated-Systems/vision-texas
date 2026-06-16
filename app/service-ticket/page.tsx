"use client";

import { useActionState, useState } from "react";
import {
  PhotoIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { handleServiceTicket, type FormState } from "../lib/actions";
import { SubmitButton } from "@/components/SubmitButton";

export default function ServiceTicket() {
  const initialState: FormState = null;
  const [state, formAction] = useActionState(handleServiceTicket, initialState);
  const [urgency, setUrgency] = useState("high");
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const clearFile = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent triggering the label click
    setFileName(null);
    // Note: We can't programmatically clear the file input value easily in React without a ref,
    // but visually clearing the state is usually sufficient for the UI.
    // If you need to clear the actual input, we'd add a ref to the input element.
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Hero Header */}
      <section className="relative bg-slate-950 py-32 lg:py-48 text-center text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-red-600 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 text-emerald-400 text-sm font-medium tracking-wide mb-8 backdrop-blur-md shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            System Status: All Systems Operational
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Service{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-white">
              Center
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Experiencing an issue? Submit a ticket below and our support team
            will respond rapidly.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-20 pb-24 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* LEFT: Ticket Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100/60 relative overflow-hidden">
              {/* Decorative Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

              <form action={formAction} className="space-y-8">
                <div className="flex items-start gap-4 mb-8 pb-8 border-b border-slate-100">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <ServerIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      New Support Ticket
                    </h2>
                    <p className="text-slate-500">
                      Please provide as much detail as possible to help us
                      triage your issue.
                    </p>
                  </div>
                </div>

                {/* Priority Selector */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        id: "low",
                        label: "Low",
                        desc: "Feature request / Minor",
                        color:
                          "border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700",
                        icon: (
                          <CheckCircleIcon className="w-5 h-5 mb-2 opacity-50" />
                        ),
                      },
                      {
                        id: "high",
                        label: "High",
                        desc: "System impairment",
                        color:
                          "border-slate-200 hover:border-yellow-300 hover:bg-yellow-50/50 peer-checked:border-yellow-500 peer-checked:bg-yellow-50 peer-checked:text-yellow-700",
                        icon: (
                          <ExclamationTriangleIcon className="w-5 h-5 mb-2 opacity-50" />
                        ),
                      },
                      {
                        id: "critical",
                        label: "Critical",
                        desc: "System down",
                        color:
                          "border-slate-200 hover:border-red-300 hover:bg-red-50/50 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-700",
                        icon: (
                          <SignalIcon className="w-5 h-5 mb-2 opacity-50" />
                        ),
                      },
                    ].map((level) => (
                      <label
                        key={level.id}
                        className="cursor-pointer group relative"
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value={level.id}
                          className="peer sr-only"
                          checked={urgency === level.id}
                          onChange={() => setUrgency(level.id)}
                        />
                        <div
                          className={`p-4 rounded-2xl border-2 transition-all duration-200 h-full flex flex-col justify-between ${level.color} shadow-sm`}
                        >
                          <div className="flex justify-between items-start">
                            <div className="font-bold text-lg">
                              {level.label}
                            </div>
                            {level.icon}
                          </div>
                          <div className="text-xs font-medium opacity-70 mt-2">
                            {level.desc}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 ml-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 ml-1">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 ml-1">
                      System Type
                    </label>
                    <div className="relative">
                      <select
                        name="systemType"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all appearance-none text-slate-700"
                      >
                        <option>Audio / Video</option>
                        <option>Security / Access Control</option>
                        <option>Structured Cabling</option>
                        <option>Network / Wi-Fi</option>
                        <option>Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700 ml-1">
                    Issue Description
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all resize-none placeholder:text-slate-400"
                    placeholder="Describe the issue, including error messages or specific equipment..."
                  ></textarea>
                </div>

                {/* File Upload with Feedback */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700 ml-1">
                    Attach Photo{" "}
                    <span className="text-slate-400 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <div
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-all relative group ${fileName ? "border-green-400 bg-green-50" : "border-slate-200 hover:bg-slate-50 hover:border-blue-300"}`}
                  >
                    <input
                      type="file"
                      name="attachment"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />

                    {fileName ? (
                      <div className="flex flex-col items-center">
                        <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3 text-green-600">
                          <CheckCircleIcon className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-bold text-slate-700 mb-1 truncate max-w-xs">
                          {fileName}
                        </p>
                        <p className="text-xs text-green-600 font-medium">
                          Photo attached successfully
                        </p>
                        <button
                          onClick={clearFile}
                          className="mt-3 text-xs text-red-500 hover:text-red-700 font-medium z-20 flex items-center"
                        >
                          <XMarkIcon className="w-3 h-3 mr-1" /> Remove
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-500 group-hover:scale-110 transition-transform">
                          <PhotoIcon className="w-6 h-6" />
                        </div>
                        <p className="text-sm text-slate-600 font-medium">
                          <span className="text-blue-600">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          PNG, JPG up to 5MB
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <SubmitButton
                    text="Submit Ticket"
                    className="w-full py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
                  />
                </div>

                {state?.status === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center animate-in fade-in slide-in-from-bottom-2">
                    <CheckCircleIcon className="w-6 h-6 mr-3 shrink-0" />
                    {state.message}
                  </div>
                )}
                {state?.status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center animate-in fade-in slide-in-from-bottom-2">
                    <ExclamationTriangleIcon className="w-6 h-6 mr-3 shrink-0" />
                    {state.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* RIGHT: Info Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-6 flex items-center text-lg">
                <ClockIcon className="w-6 h-6 mr-2 text-blue-600" />
                Response Times
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between items-center pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                  <span className="flex items-center text-slate-600 font-medium">
                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                    Critical
                  </span>
                  <span className="font-bold text-slate-900 bg-red-50 px-3 py-1 rounded-full text-xs border border-red-100">
                    4 Hours
                  </span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                  <span className="flex items-center text-slate-600 font-medium">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                    High Priority
                  </span>
                  <span className="font-bold text-slate-900 bg-yellow-50 px-3 py-1 rounded-full text-xs border border-yellow-100">
                    24 Hours
                  </span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                  <span className="flex items-center text-slate-600 font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    Low Priority
                  </span>
                  <span className="font-bold text-slate-900 bg-blue-50 px-3 py-1 rounded-full text-xs border border-blue-100">
                    48 Hours
                  </span>
                </li>
              </ul>
            </div>

            {/* Support Process Card */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
              {/* Animated Background */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/30 rounded-full blur-3xl opacity-50 -mr-10 -mt-10 group-hover:bg-blue-500/40 transition-colors duration-700"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                  <ShieldCheckIcon className="w-6 h-6 text-emerald-400" />
                </div>

                <h3 className="font-bold text-xl mb-3">The Vision Guarantee</h3>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                  We stand behind every installation. If your system isn&apos;t
                  performing to spec, we will make it right, guaranteed.
                </p>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Emergency Line
                  </p>
                  <a
                    href="tel:8325351991"
                    className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                  >
                    832.535.1991
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
