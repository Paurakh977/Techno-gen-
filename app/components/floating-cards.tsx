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
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/95 to-blue-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white/90 mb-4">
            Why Choose Technogen?
          </h2>
          <p className="text-xl text-gray-300/80">
            Discover the advantages that set us apart in the world of
            technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              {/* Darker card background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm" />

              {/* Enhanced purple glow on hover */}
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-purple-600/20 via-purple-500/10 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Card content */}
              <div className="relative p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors duration-300">
                <div className="mb-4 p-3 rounded-lg inline-block bg-purple-500/5">
                  <card.icon className="w-8 h-8 text-purple-400/80 group-hover:text-purple-300 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white/90 mb-2 group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-400/80 group-hover:text-gray-300 transition-colors">
                  {card.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
