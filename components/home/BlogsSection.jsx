// components/home/BlogsSection.jsx

import Link from 'next/link';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

export default function BlogsSection() {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Tips to Crack JEE Main 2026",
      excerpt: "Master the essential strategies and techniques that top rankers use to excel in JEE Main. Learn time management and smart preparation tips.",
      date: "October 15, 2024",
      category: "JEE Tips",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How to Balance Board Exams and JEE Preparation",
      excerpt: "A comprehensive guide on managing both board exams and JEE preparation simultaneously without compromising on either.",
      date: "October 10, 2024",
      category: "Study Tips",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Understanding JEE Advanced Pattern Changes 2026",
      excerpt: "Detailed analysis of the latest changes in JEE Advanced exam pattern and how to adapt your preparation strategy accordingly.",
      date: "October 5, 2024",
      category: "Exam Updates",
      readTime: "6 min read"
    }
  ];

  const categories = ["JEE Tips", "Study Tips", "Exam Updates"];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-10 w-10 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest tips, strategies, and insights to ace your JEE preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Blog Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${
                index === 0 ? 'from-blue-500 to-blue-600' :
                index === 1 ? 'from-purple-500 to-purple-600' :
                'from-pink-500 to-pink-600'
              } flex items-center justify-center`}>
                <BookOpen className="h-20 w-20 text-white opacity-50" />
              </div>

              <div className="p-6">
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-500">{blog.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Date & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blog.date}
                  </div>
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="mt-12 text-center">
          <Link
            href="/blogs"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
}