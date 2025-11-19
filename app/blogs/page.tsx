"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, User, ArrowRight } from "lucide-react";
import BottomCTA from "../services/BottomCTA/BottomCTA";
//import { useGetBlogsQuery } from "../../services/blogsApi";
//import Newsletter from "../components/NewsLetter";
//import { Spin } from "antd"; // ✅ Import Spin for loading

// ✅ Define the Blog interface
interface Comment {
  name: string;
  email: string;
  comment: string;
  createdAt: string;
}

interface Blog {
  _id: string;
  title: string;
  slug: string; // ✅ Ensure slug is present
  desc: string;
  content: string;
  image?: string;
  category: string;
  tags: string[];
  author: string;
  authorImage?: string;
  date: string;
  readTime: number;
  views: number;
  likes: number;
  isFeatured: boolean;
  seoMetaTitle?: string;
  seoMetaDescription?: string;
  status: "draft" | "published" | "archived";
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
}

const categories = [
  "All",
  "SaaS",
  "AI",
  "DevTools",
  "UI/UX",
  "Web Development",
  "Product",
  "SEO",
  "Marketing",
  "Cloud & DevOps",
  "Case Studies",
];

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const { data: blogs = [], isLoading, isError } = useGetBlogsQuery();

  // console.log(blogs, "blogs");

  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ Memoized filtering for performance
  const filteredBlogs: Blog[] = useMemo( // ✅ Explicitly type filteredBlogs
    () =>
      activeCategory === "All"
        ? blogs
        : blogs.filter((b: Blog) => b.category === activeCategory), // ✅ Type b as Blog
    [activeCategory, blogs]
  );

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1); // reset page on filter change
  };

  return (
    <>
      <main className="bg-white dark:bg-[#0D1321] text-black dark:text-white mt-20">
        {/* Hero */}
        <section className="text-center py-12 bg-gradient-to-br from-white to-gray-200 dark:from-[#0D1321] dark:to-[#1a1a1a]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-navy dark:text-white mb-4"
          >
            Insights from Maldonite
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
          >
            Deep dives on SaaS, SEO, AI, UI/UX, dev tools and startup growth.
          </motion.p>
        </section>

        {/* Filter */}
        <div className="flex justify-center gap-3 mt-10 flex-wrap px-4">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#D4AF37] text-black shadow-md"
                  : "bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-300 hover:bg-[#D4AF37]/80 hover:text-black"
              }`}
              aria-pressed={activeCategory === cat}
              aria-label={`Filter by ${cat}`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Blog Grid */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          {isLoading && (
            <div className="flex justify-center items-center py-10">
              <Spin size="large" tip="Loading blogs..." />
            </div>
          )}
          {isError && (
            <p className="text-center text-red-500">Failed to load blogs.</p>
          )}

          {!isLoading && !isError && (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {paginatedBlogs.map((blog: Blog, i: number) => (
                  <motion.div
                    key={blog._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group rounded-xl min-h-[480px] overflow-hidden border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-[#1a1a1a] shadow-sm hover:shadow-lg hover:border-[#D4AF37] transition-all duration-300 flex flex-col"
                  >
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="flex flex-col h-full"
                    >
                      <div className="h-64 w-full relative overflow-hidden">
                        {blog.image && (
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            priority={i < 3}
                            className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-500"
                          />
                        )}
                      </div>

                      <div className="flex flex-col justify-between flex-1 p-4">
                        <div>
                          <h3 className="text-lg font-semibold text-[#0d1321] dark:text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                            {blog.desc}
                          </p>
                        </div>
                        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mt-auto">
                          <span className="flex items-center gap-1">
                            <User size={14} /> {blog.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarDays size={14} />
                            {new Date(blog.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {filteredBlogs.length === 0 && (
                <p className="text-center text-gray-400 mt-10">
                  No posts found for “{activeCategory}”
                </p>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-300 hover:bg-[#D4AF37]/80 hover:text-black disabled:opacity-50"
                  >
                    Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                        currentPage === i + 1
                          ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                          : "bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-[#D4AF37]/80 hover:text-black"
                      }`}
                      aria-current={currentPage === i + 1 ? "page" : undefined}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-300 hover:bg-[#D4AF37]/80 hover:text-black disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </main>
      <Newsletter />
      <BottomCTA />
    </>
  );
}
