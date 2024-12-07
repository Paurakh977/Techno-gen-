"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "../../data/blog-posts";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-[#182a5c] dark:via-[#182a5c]/90 dark:to-gray-900" />
      
      <article className="relative max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg dark:prose-invert mx-auto"
        >
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
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
            
            <div className="flex items-center space-x-4 mb-8">
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
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div 
            className="prose prose-lg dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </article>
    </div>
  );
} 