"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  VideoCameraIcon,
  WifiIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SolutionFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: "space",
      question: "What type of space are you upgrading?",
      options: [
        { id: "office", label: "Corporate Office", icon: BuildingOffice2Icon },
        {
          id: "warehouse",
          label: "Warehouse / Industrial",
          icon: WrenchScrewdriverIcon,
        },
        { id: "campus", label: "Education / Campus", icon: VideoCameraIcon },
      ],
    },
    {
      id: "priority",
      question: "What is your top priority?",
      options: [
        { id: "av", label: "Better Video Conferencing", icon: VideoCameraIcon },
        { id: "security", label: "Physical Security", icon: CheckCircleIcon },
        { id: "network", label: "Reliable WiFi / Data", icon: WifiIcon },
      ],
    },
    {
      id: "timeline",
      question: "When do you need this completed?",
      options: [
        { id: "asap", label: "ASAP (Emergency)", icon: WrenchScrewdriverIcon },
        { id: "1-month", label: "Within 1 Month", icon: CheckCircleIcon },
        { id: "planning", label: "Just Planning", icon: BuildingOffice2Icon },
      ],
    },
  ];

  const handleSelect = (optionId: string) => {
    setAnswers({ ...answers, [questions[step].id]: optionId });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const getRecommendation = () => {
    if (answers.priority === "av")
      return {
        title: "Audio & Video Integration",
        desc: "Based on your needs, we recommend a custom Crestron or Q-SYS solution to streamline your meetings.",
        link: "/services#av",
        action: "See AV Solutions",
      };
    if (answers.priority === "security")
      return {
        title: "Integrated Security System",
        desc: "For your facility, a combination of Axis IP cameras and cloud-based access control would be ideal.",
        link: "/services#security",
        action: "Explore Security",
      };
    return {
      title: "Structured Cabling & Fiber",
      desc: "To support your data needs, a robust Cat6A or Fiber backbone is the critical first step.",
      link: "/services#cabling",
      action: "View Cabling Services",
    };
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 min-h-[400px] flex flex-col">
      {/* Progress Bar */}
      <div className="h-2 bg-slate-100 w-full">
        <motion.div
          className="h-full bg-blue-600"
          initial={{ width: 0 }}
          animate={{ width: `${((step + 1) / (questions.length + 1)) * 100}%` }}
        />
      </div>

      <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {step < questions.length ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                {questions[step].question}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-slate-100 hover:border-blue-600 hover:bg-blue-50 transition-all group"
                  >
                    <opt.icon className="w-10 h-10 mb-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    <span className="font-semibold text-slate-700 group-hover:text-blue-900">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                We Found Your Match!
              </h2>

              <div className="bg-slate-50 p-8 rounded-2xl mb-8 border border-slate-100">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {getRecommendation().title}
                </h3>
                <p className="text-slate-600">{getRecommendation().desc}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={getRecommendation().link}
                  className="px-8 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-full hover:bg-slate-50 transition-colors"
                >
                  {getRecommendation().action}
                </Link>
                <Link
                  href={`/contact-us?subject=Quote for ${
                    getRecommendation().title
                  }`}
                  className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Request Quote <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
