"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../components/button";
import { ArrowRight, Code2, Brain, Rocket, Users } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Innovation Director",
    description:
      "Pioneering breakthrough solutions with over a decade of experience in emerging technologies and digital transformation.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&auto=format&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Technical Architect",
    description:
      "Crafting robust and scalable solutions that power next-generation digital experiences for global enterprises.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&auto=format&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Experience Director",
    description:
      "Creating intuitive and engaging user experiences that bridge the gap between human needs technological possibilities.",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&auto=format&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "David Kim",
    role: "AI Solutions Lead",
    description:
      "Transforming businesses through innovative AI solutions and machine learning implementations that drive real-world results.",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&h=800&auto=format&fit=crop&crop=face",
  },
];

const stats = [
  { value: "20+", label: "Years of Innovation" },
  { value: "300+", label: "Success Stories" },
  { value: "1,000+", label: "Projects Delivered" },
  { value: "64", label: "Industry Awards" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400 tracking-wider uppercase">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
              Transforming Ideas into
              <span className="text-purple-600 dark:text-purple-400">
                {" "}
                Digital Reality
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              We're not just another tech company. We're your partner in digital
              transformation, turning complex challenges into elegant solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl" />
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&auto=format&fit=crop"
                width={800}
                height={600}
                alt="Team collaboration"
                className="relative rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Pioneering Tomorrow's Technology
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                At Technogen, we're driven by innovation and powered by passion.
                Our mission is to help businesses thrive in the digital age
                through cutting-edge solutions and unparalleled expertise.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white/80 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Empowering Digital Excellence
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We specialize in transforming businesses through innovative
                technology solutions that drive growth and create lasting
                impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <Code2 className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Custom Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Building tailored solutions that perfectly align with your
                    business needs, from web applications to enterprise systems.
                  </p>
                  <Button variant="ghost" className="group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <Brain className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Leveraging artificial intelligence and machine learning to
                    create intelligent systems that drive business growth.
                  </p>
                  <Button variant="ghost" className="group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Building the Future Together
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in creating technology that makes a difference. Our
                vision is to lead the digital transformation journey for
                businesses worldwide, making innovation accessible and
                impactful.
              </p>
              <Button className="group">
                Join Our Journey
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2 relative"
            >
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl" />
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&auto=format&fit=crop"
                width={800}
                height={600}
                alt="Future of technology"
                className="relative rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white/80 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Meet Our Visionaries
            </h2>
            <div className="space-y-32">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="relative">
                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          width={600}
                          height={800}
                          className="object-cover w-full aspect-[3/4] rounded-lg"
                        />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-light tracking-wide uppercase">
                          {member.name}
                        </h3>
                        <p className="text-sm text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                          {member.role}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {member.description}
                        </p>
                        <Link
                          href={`/team/${member.id}`}
                          className="inline-block text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                        >
                          + View Profile
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-light tracking-wide uppercase">
                          {member.name}
                        </h3>
                        <p className="text-sm text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                          {member.role}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {member.description}
                        </p>
                        <Link
                          href={`/team/${member.id}`}
                          className="inline-block text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                        >
                          + View Profile
                        </Link>
                      </div>
                      <div className="relative">
                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          width={600}
                          height={800}
                          className="object-cover w-full aspect-[3/4] rounded-lg"
                        />
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
