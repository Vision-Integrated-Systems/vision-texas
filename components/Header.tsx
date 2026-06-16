"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Hide the header completely if we are in the Sanity Studio
  const isStudio = pathname.startsWith("/studio");
  if (isStudio) return null;

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  const headerClasses = isScrolled
    ? "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl rounded-full border border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-900/5 py-3"
    : isTransparent
      ? "fixed top-0 w-full border-transparent bg-transparent py-6"
      : "fixed top-0 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md py-4";

  const textColor = isTransparent ? "text-white" : "text-slate-700";
  const hoverColor = isTransparent
    ? "hover:text-blue-300"
    : "hover:text-blue-600";
  const activeColor = isTransparent ? "text-white" : "text-blue-600";
  const activeBarColor = isTransparent ? "bg-white" : "bg-blue-600";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Training", path: "/training" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <>
      <header
        className={`${headerClasses} z-50 transition-all duration-500 ease-in-out`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="shrink-0 relative z-50">
              <div className="relative h-8 w-40">
                <Image
                  src="/logos/vision-logo.png"
                  alt="Vision Integrated Systems"
                  fill
                  sizes="160px"
                  className={`object-contain transition-opacity duration-500 ${
                    isTransparent ? "opacity-0" : "opacity-100"
                  }`}
                  priority
                />
                <Image
                  src="/logos/vision-logo-white.png"
                  alt="Vision Integrated Systems"
                  fill
                  sizes="160px"
                  className={`object-contain transition-opacity duration-500 ${
                    isTransparent ? "opacity-100" : "opacity-0"
                  }`}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 ${textColor} ${hoverColor} ${
                      isActive ? activeColor : ""
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-1/2 rounded-full ${activeBarColor}`}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}

              <div className="pl-4 ml-2 border-l border-slate-200/20">
                <Link
                  href="/service-ticket"
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    isTransparent
                      ? "bg-white text-slate-900 hover:bg-blue-50"
                      : "bg-slate-900 text-white hover:bg-blue-600"
                  }`}
                >
                  Service Ticket
                </Link>
              </div>
            </nav>

            {/* Mobile Toggle */}
            <div className="lg:hidden z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-full transition-colors ${
                  isTransparent
                    ? "text-white hover:bg-white/10"
                    : "text-slate-900 hover:bg-slate-100"
                }`}
              >
                <span className="sr-only">Open menu</span>
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 lg:hidden flex flex-col"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-2xl font-bold py-3 border-b border-slate-100 ${
                      pathname === link.path
                        ? "text-blue-600"
                        : "text-slate-800"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-8"
              >
                <Link
                  href="/service-ticket"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-4 bg-slate-900 text-white font-bold rounded-xl shadow-xl active:scale-95 transition-transform"
                >
                  Submit Service Ticket
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}