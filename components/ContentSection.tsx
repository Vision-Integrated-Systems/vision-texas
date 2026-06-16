"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ContentSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  reverse?: boolean;
  bgColor?: "white" | "slate";
  customVisual?: ReactNode;
  centered?: boolean;
}

export default function ContentSection({
  id,
  title,
  children,
  imageSrc,
  imageAlt = "Vision Integrated Systems",
  imageWidth = 800,
  imageHeight = 600,
  reverse = false,
  bgColor = "white",
  customVisual,
  centered,
}: ContentSectionProps) {
  const isCentered = centered ?? (!imageSrc && !customVisual);

  return (
    <section
      id={id}
      className={`py-24 overflow-hidden ${
        bgColor === "slate" ? "bg-slate-50" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col gap-16 ${
            isCentered
              ? "items-center text-center"
              : `items-center ${
                  reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`
          }`}
        >
          {/* Text Side */}
          <motion.div
            className={isCentered ? "max-w-4xl w-full mx-auto" : "lg:w-1/2"}
            initial={{
              opacity: 0,
              x: isCentered ? 0 : reverse ? 50 : -50,
              y: isCentered ? 30 : 0,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 relative inline-block">
              {title}
              <motion.span
                className={`absolute -bottom-2 h-1 bg-blue-600 rounded-full ${
                  isCentered ? "left-1/2 -translate-x-1/2" : "left-0"
                }`}
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </h2>
            <div className="text-lg text-slate-700 leading-relaxed">
              {children}
            </div>
          </motion.div>

          {/* Visual Side */}
          {!isCentered && (
            <motion.div
              className="lg:w-1/2 w-full relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {customVisual ? (
                customVisual
              ) : imageSrc ? (
                <div className="relative group">
                  {/* Decorative Offset Border */}
                  <div
                    className={`absolute inset-0 border-2 border-blue-600 rounded-2xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 ${
                      reverse ? "-right-4" : "-left-4"
                    }`}
                  />

                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={imageWidth}
                      height={imageHeight}
                      className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                    />
                    {/* Glass Sheen Effect on Hover */}
                    <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              ) : null}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
