"use client"

import { motion } from 'framer-motion'
import { Rocket, Code, Users, Zap, Globe, Shield } from 'lucide-react'
import React from 'react'

const cards = [
  {
    title: 'Our Mission',
    content: 'To revolutionize technology and make it accessible to everyone.',
    icon: Rocket,
  },
  {
    title: 'Our Services',
    content: 'Cutting-edge software development, AI solutions, and cloud services.',
    icon: Code,
  },
  {
    title: 'Our Team',
    content: 'A diverse group of passionate technologists and innovators.',
    icon: Users,
  },
  {
    title: 'Innovation',
    content: 'Pushing the boundaries of what\'s possible in tech.',
    icon: Zap,
  },
  {
    title: 'Global Reach',
    content: 'Serving clients and making an impact worldwide.',
    icon: Globe,
  },
  {
    title: 'Security',
    content: 'Ensuring the highest standards of data protection and privacy.',
    icon: Shield,
  },
]

export default function FloatingCards() {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Why Choose Technogen?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Discover the advantages that set us apart in the world of technology.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                transition: { duration: 0.2 },
              }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <card.icon className="w-12 h-12 text-primary dark:text-primary-light mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{card.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

