"use client";

import { motion } from "framer-motion";
import { blogPosts } from "../data/blog-posts";
import BlogCard from "../components/blog-card";
import { useState, useEffect } from "react";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + POSTS_PER_PAGE, blogPosts.length));
  };

  if (isLoading) {
    return (
      <div className="relative pt-32 pb-20 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-[#182a5c] dark:via-[#182a5c]/90 dark:to-gray-900" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(POSTS_PER_PAGE)].map((_, index) => (
              <div 
                key={index}
                className="animate-pulse"
              >
                <div className="rounded-xl bg-gray-200 dark:bg-gray-700 aspect-[16/9] mb-4" />
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-[#182a5c] dark:via-[#182a5c]/90 dark:to-gray-900" />
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white/90 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300/80 max-w-3xl mx-auto">
            Insights, thoughts and trends in technology and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {visiblePosts < blogPosts.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200"
            >
              Load More Posts
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
} 