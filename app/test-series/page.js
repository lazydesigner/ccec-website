// app/test-series/page.js

import Link from 'next/link';
import { Monitor, FileText, CheckCircle, Clock, BarChart, Target } from 'lucide-react';
import { TEST_SERIES } from '@/lib/constants';

export const metadata = {
  title: 'Test Series - Career Crave Education Centre',
  description: 'Comprehensive online and offline test series for JEE Main and Advanced preparation.',
};

export default function TestSeriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Test Series</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive test series designed to simulate actual JEE exam conditions
          </p>
        </div>
      </section> */}

      <section
  className="relative bg-cover bg-center bg-no-repeat text-white min-h-[200px] md:min-h-[550px] py-20"
  style={{ backgroundImage: "url('/images/test.jpg')" }} // 👈 replace with your image path
>
  {/* Gradient overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-purple-50/80"></div> */}

  <div className="relative container mx-auto px-4 text-center">
    {/* <h1 className="text-5xl font-bold mb-4">Test Series</h1>
    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
      Comprehensive test series designed to simulate actual JEE exam conditions
    </p> */}
  </div>
</section>


      {/* Why Test Series */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Regular Testing Matters?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Regular testing is crucial for JEE preparation. It helps identify weak areas, improve time management, and build confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Identify Weak Areas</h3>
              <p className="text-gray-600">Regular tests help you identify topics that need more attention and focus.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Time Management</h3>
              <p className="text-gray-600">Learn to manage time effectively and complete the exam within the given duration.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Track Progress</h3>
              <p className="text-gray-600">Monitor your improvement over time with detailed performance analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Test Series Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Online Test Series */}
            <div id="online" className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Online Test Series</h2>
                  <p className="text-blue-600 font-semibold">Practice from anywhere, anytime</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Our online test series provides you the flexibility to practice from the comfort of your home. Get instant results, detailed analysis, and compete with students across India.
              </p>

              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Features:</h3>
                <ul className="space-y-3">
                  {TEST_SERIES[0].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-600 rounded-xl p-6 text-white mb-6">
                <h3 className="font-bold text-xl mb-4">What You Get:</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Full-length mock tests</span>
                    <span className="font-bold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chapter-wise tests</span>
                    <span className="font-bold">100+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Previous year papers</span>
                    <span className="font-bold">20+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Practice questions</span>
                    <span className="font-bold">5000+</span>
                  </div>
                </div>
              </div>

              <Link
                href="https://testpanelcareercrave.indiacure.in/"
                className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition"
              >
                Enroll in Online Series
              </Link>
            </div>

            {/* Offline Test Series */}
            <div id="offline" className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Offline Test Series</h2>
                  <p className="text-purple-600 font-semibold">Exam hall experience</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Experience the actual exam environment with our offline test series. Conducted in examination hall conditions to help you manage exam pressure effectively.
              </p>

              <div className="bg-white rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Features:</h3>
                <ul className="space-y-3">
                  {TEST_SERIES[1].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-600 rounded-xl p-6 text-white mb-6">
                <h3 className="font-bold text-xl mb-4">What You Get:</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Full-length mock tests</span>
                    <span className="font-bold">30+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Part tests</span>
                    <span className="font-bold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Answer key & solutions</span>
                    <span className="font-bold">✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Doubt sessions</span>
                    <span className="font-bold">Weekly</span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition"
              >
                Enroll in Offline Series
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Test Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Comprehensive Test Coverage</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Practice Questions Daily</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Mock Tests</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Syllabus Coverage</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Doubt Support</div>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}