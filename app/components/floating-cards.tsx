"use client";

import { motion } from "framer-motion";
import { Rocket, Code, Users, Zap, Globe, Shield } from "lucide-react";
import React from "react";

const cards = [
  {
    title: "Our Mission",
    content: "To revolutionize technology and make it accessible to everyone.",
    icon: Rocket,
  },
  {
    title: "Our Services",
    content:
      "Cutting-edge software development, AI solutions, and cloud services.",
    icon: Code,
  },
  {
    title: "Our Team",
    content: "A diverse group of passionate technologists and innovators.",
    icon: Users,
  },
  {
    title: "Innovation",
    content: "Pushing the boundaries of what's possible in tech.",
    icon: Zap,
  },
  {
    title: "Global Reach",
    content: "Serving clients and making an impact worldwide.",
    icon: Globe,
  },
  {
    title: "Security",
    content: "Ensuring the highest standards of data protection and privacy.",
    icon: Shield,
  },
];

export default function FloatingCards() {
  return (
    <>
      <div className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-[#182a5c] dark:via-[#182a5c]/90 dark:to-gray-900" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
          <motion.div
            className="text-center mb-24"
          >
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white/90 mb-6">
              Why Choose Technogen?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300/80 max-w-3xl mx-auto">
              Discover the advantages that set us apart in the world of technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-xl bg-white/80 backdrop-blur-sm dark:bg-gradient-to-br dark:from-gray-900/95 dark:to-gray-800/95" />

                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-purple-200/50 via-purple-200/30 to-purple-200/50 dark:from-purple-600/20 dark:via-purple-500/10 dark:to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                <div className="relative p-8 rounded-xl border border-purple-100 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-500/30 transition-colors duration-300">
                  <div className="mb-4 p-3 rounded-lg inline-block bg-purple-100/50 dark:bg-purple-500/5">
                    <card.icon className="w-8 h-8 text-purple-600 group-hover:text-purple-700 dark:text-purple-400/80 dark:group-hover:text-purple-300 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-900 dark:text-white/90 dark:group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-900 dark:text-gray-400/80 dark:group-hover:text-gray-300 transition-colors">
                    {card.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
