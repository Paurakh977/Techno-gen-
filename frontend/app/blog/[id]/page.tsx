"use client";

import { useState, useEffect } from "react";
import { endpoints } from "../../../src/config/api";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch post data
    fetch(`${endpoints.posts}${params.id}/`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      });

    // Check localStorage on mount
    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [params.id]);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  if (isLoading || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-[#182a5c] dark:via-[#182a5c]/90 dark:to-gray-900">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white/90">
            Loading...
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-[#182a5c] dark:via-[#182a5c]/90 dark:to-gray-900">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="flex-1 container mx-auto px-4 py-20">
        <Link
          href="/blog"
          className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg dark:prose-invert mx-auto"
        >
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold text-gray-900 dark:text-white/90 mb-6">
              {post.title}
            </h1>

            <div className="flex items-center space-x-4 mb-8 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900 dark:text-white/90">
                  {post.author.name}
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.reading_time}</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden group"
          >
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white/90 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-strong:text-gray-900 dark:prose-strong:text-white/90"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </div>
    </div>
  );
}
