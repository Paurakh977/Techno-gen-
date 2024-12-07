"use client";

import { BlogPost } from "../types/blog";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <Link href={`/blog/${post.id}`}>
        <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:opacity-90 transition-opacity z-10" />
          <div className="relative aspect-[16/9]">
            {imageLoading && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
            )}
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`
                object-cover transition-all duration-300
                ${imageLoading ? 'scale-110 blur-lg opacity-0' : 'scale-100 blur-0 opacity-100'}
                ${!imageLoading && 'group-hover:scale-105'}
              `}
              onLoadingComplete={() => setImageLoading(false)}
              priority={index < 2}
            />
          </div>
        </div>
        
        <div className="relative mt-4">
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white/90 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {post.title}
          </h3>
          
          <p className="mt-2 text-gray-600 dark:text-gray-400/80 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center mt-4 space-x-4">
            <div className="relative w-10 h-10">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="rounded-full"
                sizes="40px"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white/90">
                {post.author.name}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 