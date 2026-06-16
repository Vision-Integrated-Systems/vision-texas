"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import { handleJobApplication, type FormState } from "@/app/lib/actions";
import { SubmitButton } from "@/components/SubmitButton";

export default function ApplicationForm() {
  const searchParams = useSearchParams();
  const jobTitle = searchParams.get("job") || "General Application";

  const initialState: FormState = null;
  const [state, formAction] = useActionState(
    handleJobApplication,
    initialState
  );

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-center">
        <Link
          href="/careers"
          className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Careers
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Apply for <span className="text-blue-600">{jobTitle}</span>
        </h1>
        <p className="text-slate-600">
          Please fill out the form below and attach your resume.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
        <form action={formAction} className="space-y-8">
          <input type="hidden" name="jobTitle" value={jobTitle} />

          {/* Section: Personal Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="Jane"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Doe"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Address Block */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Street Address
              </label>
              <input
                type="text"
                name="address"
                required
                placeholder="123 Main St"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="col-span-2 md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="Magnolia"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  State
                </label>
                <select
                  name="state"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                >
                  <option value="TX">TX</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Zip
                </label>
                <input
                  type="text"
                  name="zip"
                  required
                  placeholder="77354"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Gender & LinkedIn */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                >
                  <option value="">Select...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  LinkedIn URL (Optional)
                </label>
                <input
                  type="url"
                  name="linkedIn"
                  placeholder="linkedin.com/in/..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Section: Qualifications */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              Qualifications & Experience
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Years of Relevant Experience
                </label>
                <select
                  name="experience"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                >
                  <option value="">Select...</option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-3">1 - 3 years</option>
                  <option value="3-5">3 - 5 years</option>
                  <option value="5-10">5 - 10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Available Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Relevant Certifications
              </label>
              <input
                type="text"
                name="certifications"
                placeholder="e.g. OSHA 10, Crestron, Biamp, CTS..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
              <p className="text-xs text-slate-500 mt-1">
                Separate multiple certifications with commas.
              </p>
            </div>

            {/* Compliance Questions */}
            <div className="space-y-4 mb-6">
              <div>
                <span className="block text-sm font-medium text-slate-700 mb-2">
                  Are you authorized to work in the United States?
                </span>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="workAuth"
                      value="yes"
                      required
                      className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-slate-700">Yes</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="workAuth"
                      value="no"
                      required
                      className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-slate-700">No</span>
                  </label>
                </div>
              </div>

              <div>
                <span className="block text-sm font-medium text-slate-700 mb-2">
                  Are you willing to undergo a background check?
                </span>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="backgroundCheck"
                      value="yes"
                      required
                      className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-slate-700">Yes</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="backgroundCheck"
                      value="no"
                      required
                      className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-slate-700">No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Documents */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              Documents & Additional Info
            </h3>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Resume / CV
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-3 file:px-6
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100
                    cursor-pointer border border-slate-200 rounded-lg bg-slate-50"
                />
                <div className="absolute right-4 top-3 pointer-events-none text-slate-400">
                  <PaperClipIcon className="w-5 h-5" />
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Accepted formats: PDF, DOC, DOCX. Max size: 5MB.
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                How did you hear about us?
              </label>
              <select
                name="referralSource"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              >
                <option value="">Select...</option>
                <option value="linkedin">LinkedIn</option>
                <option value="indeed">Indeed</option>
                <option value="referral">Employee Referral</option>
                <option value="website">Company Website</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Cover Letter / Additional Notes
              </label>
              <textarea
                name="coverLetter"
                rows={5}
                placeholder="Tell us why you're a great fit for this role..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <SubmitButton
              text="Submit Application"
              className="w-full py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25"
            />
          </div>

          {state?.status === "success" && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center animate-in fade-in slide-in-from-bottom-2">
              {state.message}
            </div>
          )}
          {state?.status === "error" && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center animate-in fade-in slide-in-from-bottom-2">
              {state.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
