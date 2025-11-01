// app/blogs/page.js

import Link from 'next/link';
import { Calendar, ArrowRight, BookOpen, Clock } from 'lucide-react';

export const metadata = {
  title: 'Blogs - Career Crave Education Centre',
  description: 'Read the latest tips, strategies, and insights for JEE Main and Advanced preparation.',
};

export default function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Tips to Crack JEE Main 2026",
      excerpt: "Master the essential strategies and techniques that top rankers use to excel in JEE Main. Learn time management, smart preparation tips, and how to approach different types of questions effectively.",
      date: "October 15, 2024",
      author: "Er. Shravan Katiyar",
      category: "JEE Tips",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "How to Balance Board Exams and JEE Preparation",
      excerpt: "A comprehensive guide on managing both board exams and JEE preparation simultaneously without compromising on either. Learn effective time management techniques.",
      date: "October 10, 2024",
      author: "CCEC Team",
      category: "Study Tips",
      readTime: "7 min read",
      featured: true
    },
    {
      id: 3,
      title: "Understanding JEE Advanced Pattern Changes 2026",
      excerpt: "Detailed analysis of the latest changes in JEE Advanced exam pattern and how to adapt your preparation strategy accordingly to stay ahead of the competition.",
      date: "October 5, 2024",
      author: "Dr. Vijay Katiyar",
      category: "Exam Updates",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 4,
      title: "Physics Problem Solving Techniques for JEE",
      excerpt: "Learn systematic approaches to tackle complex physics problems in JEE. Understand the importance of concept clarity and application-based learning.",
      date: "September 28, 2024",
      author: "Er. Shravan Katiyar",
      category: "Physics",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Chemistry: How to Master Organic Chemistry",
      excerpt: "Organic chemistry can be challenging, but with the right approach, it becomes manageable. Learn name reactions, mechanisms, and problem-solving strategies.",
      date: "September 20, 2024",
      author: "CCEC Team",
      category: "Chemistry",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Mathematics: Calculus Made Easy",
      excerpt: "Calculus is one of the most scoring topics in JEE Mathematics. Learn the fundamentals and advanced concepts with step-by-step explanations.",
      date: "September 15, 2024",
      author: "CCEC Team",
      category: "Mathematics",
      readTime: "7 min read"
    },
    {
      id: 7,
      title: "Time Management During JEE Exam",
      excerpt: "Learn how to effectively manage your time during the actual JEE exam. Strategies for attempting questions, when to skip, and maximizing your score.",
      date: "September 10, 2024",
      author: "Er. Shravan Katiyar",
      category: "Exam Tips",
      readTime: "5 min read"
    },
    {
      id: 8,
      title: "Importance of Mock Tests in JEE Preparation",
      excerpt: "Why mock tests are crucial for JEE success. How to analyze your performance and improve based on test results.",
      date: "September 5, 2024",
      author: "CCEC Team",
      category: "Study Tips",
      readTime: "6 min read"
    },
    {
      id: 9,
      title: "Dealing with Exam Stress and Anxiety",
      excerpt: "Mental health is as important as academic preparation. Learn techniques to manage stress, stay motivated, and maintain a positive mindset.",
      date: "August 30, 2024",
      author: "Dr. Vijay Katiyar",
      category: "Motivation",
      readTime: "8 min read"
    }
  ];

  const categories = [
    "All", "JEE Tips", "Study Tips", "Exam Updates", "Physics", "Chemistry", "Mathematics", "Exam Tips", "Motivation"
  ];

  const featuredBlogs = blogs.filter(blog => blog.featured);
  const regularBlogs = blogs.filter(blog => !blog.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">CCEC Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expert tips, strategies, and insights for your JEE preparation journey
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                  index === 0
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredBlogs.map((blog, index) => (
              <article
                key={blog.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`h-48 bg-gradient-to-br ${
                  index === 0 ? 'from-blue-500 to-blue-600' :
                  index === 1 ? 'from-purple-500 to-purple-600' :
                  'from-pink-500 to-pink-600'
                } flex items-center justify-center`}>
                  <BookOpen className="h-20 w-20 text-white opacity-50" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      <div className="font-semibold text-gray-700">{blog.author}</div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {blog.date}
                      </div>
                    </div>
                    <Link
                      href={`/blogs/${blog.id}`}
                      className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition"
                    >
                      Read
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* All Posts */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex"
              >
                <div className="w-32 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-12 w-12 text-gray-400" />
                </div>

                <div className="p-6 flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {blog.date}
                    </div>
                    <Link
                      href={`/blogs/${blog.id}`}
                      className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition text-sm"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest JEE preparation tips, exam updates, and study strategies delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}