"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const pathname = usePathname();
  
  // Hide the footer completely if we are in the Sanity Studio
  if (pathname.startsWith("/studio")) return null;

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-24 pb-10 overflow-hidden z-10">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none z-0"></div>

      {/* Ambient Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-blue-600/10 blur-[120px] rounded-t-full pointer-events-none z-0"></div>

      {/* Glowing Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Column 1: Contact */}
          <div className="space-y-8">
            <h3 className="text-white font-bold text-xl tracking-tight flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Contact Us
            </h3>
            <div className="space-y-6">
              <a href="tel:8325351991" className="flex items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-4 shrink-0 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all duration-300">
                  <PhoneIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-widest font-bold mb-1 group-hover:text-slate-400 transition-colors">
                    Call Us 24/7
                  </span>
                  <span className="text-white text-lg font-medium group-hover:text-blue-400 transition-colors">
                    832.535.1991
                  </span>
                </div>
              </a>

              <a
                href="mailto:info@vision-texas.com"
                className="flex items-start group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-4 shrink-0 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all duration-300">
                  <EnvelopeIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-widest font-bold mb-1 group-hover:text-slate-400 transition-colors">
                    Email Us
                  </span>
                  <span className="text-slate-300 group-hover:text-blue-400 transition-colors">
                    info@vision-texas.com
                  </span>
                </div>
              </a>

              <div className="flex items-start group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-4 shrink-0 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all duration-300">
                  <MapPinIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-widest font-bold mb-1 group-hover:text-slate-400 transition-colors">
                    Visit HQ
                  </span>
                  <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                    32311 Tamina Rd, Suite A<br />
                    Magnolia, TX 77354
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-white font-bold text-xl tracking-tight mb-8">
              Company
            </h3>
            <nav className="flex flex-col space-y-4">
              {[
                ["About Vision", "/about"],
                ["Our Services", "/services"],
                ["Project Gallery", "/gallery"],
                ["Careers", "/careers"],
                ["Contact", "/contact-us"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex items-center text-slate-400 hover:text-white transition-all duration-300"
                >
                  <ArrowUpRightIcon className="w-3 h-3 mr-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:text-blue-400 transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Services & Solutions */}
          <div>
            <h3 className="text-white font-bold text-xl tracking-tight mb-8">
              Solutions
            </h3>
            <nav className="flex flex-col space-y-4">
              {[
                { label: "Solution Finder", href: "/get-started" },
                { label: "Training Library", href: "/training" },
                { label: "Audio & Video", href: "/services#av" },
                { label: "Structured Cabling", href: "/services#cabling" },
                { label: "Security & Access", href: "/services#security" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center text-slate-400 hover:text-white transition-all duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3 opacity-50 group-hover:opacity-100 group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className="text-white font-bold text-xl tracking-tight mb-8">
              Connect
            </h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Follow us for project updates, industry news, and company culture.
            </p>
            <div className="mb-8">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">
                Security License Number
              </p>
              <p className="text-slate-300 text-sm">B20960901</p>
            </div>
            <div className="flex gap-4">
              {[
                {
                  icon: "linkedin",
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/company/vishouston/",
                },
                {
                  icon: "facebook",
                  name: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=61571604035898",
                },
                {
                  icon: "instagram",
                  name: "Instagram",
                  href: "https://www.instagram.com/vis_houston",
                },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-400 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] transition-all duration-300"
                >
                  {/* SVGs */}
                  {social.icon === "linkedin" && (
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {social.icon === "facebook" && (
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.641c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                    </svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>
            © {new Date().getFullYear()} VIS Houston, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}