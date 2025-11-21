"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Why Every Business Needs a Modern Website in 2025",
    description:
      "From SEO to user experience, learn why an updated website is essential for brand growth.",
    category: "Web Development",
    image: "/location.jpg",
    date: "Nov 18, 2025",
    author: "Jane Doe",
    authorImage: "/1.jpg", 
  },
  {
    id: 2,
    title: "How AI Will Transform Digital Marketing",
    description:
      "AI is changing how brands run ads, create content, and understand user behavior.",
    category: "AI & Automation",
    image: "/location1.jpg",
    date: "Nov 10, 2025",
    author: "John Smith",
    authorImage: "/2.jpg",
  },
  {
    id: 3,
    title: "The Future of E-Commerce: Trends to Watch",
    description:
      "Discover key trends like personalization, speed, UX, and automation.",
    category: "E-Commerce",
    image: "/location3.jpg",
    date: "Oct 29, 2025",
    author: "Emily White",
    authorImage: "/3.jpg",
  },
];

const FeaturedBlogPost = ({ blog }: { blog: (typeof blogs)[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    whileHover={{ y: -5 }}
    className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
  >
    <Link href={`/blogs/${blog.id}`} className="block">
      <div className="md:flex">
        <div className="md:w-1/2">
          <Image
            src={blog.image}
            alt={blog.title}
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-200 rounded-full mb-4">
              {blog.category}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {blog.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {blog.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={blog.authorImage}
                alt={blog.author}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-3">
                <p className="font-semibold text-gray-800 dark:text-white">
                  {blog.author}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {blog.date}
                </p>
              </div>
            </div>
            <span className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              Read More &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

const BlogPostCard = ({ blog }: { blog: (typeof blogs)[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all flex flex-col"
  >
    <Link href={`/blogs/${blog.id}`} className="block h-full">
      <div className="relative w-full h-56">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full mb-3">
          {blog.category}
        </span>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
          {blog.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 flex-grow mb-4">
          {blog.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <Image
              src={blog.authorImage}
              alt={blog.author}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="ml-2">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {blog.author}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {blog.date}
              </p>
            </div>
          </div>
          <span className="font-medium text-sm text-blue-600 dark:text-blue-400 hover:underline">
            Read More
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default function BlogsPage() {
  const [featuredBlog, ...otherBlogs] = blogs;

  return (
    <section className="min-h-screen mt-30 pt-24 pb-16 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Our Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Stay updated with the latest industry insights, tutorials, and trends from our team of experts.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Featured and Other Blogs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Featured Blog */}
          <FeaturedBlogPost blog={featuredBlog} />

          {/* Other Blogs */}
          <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {otherBlogs.map((blog) => (
              <BlogPostCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
