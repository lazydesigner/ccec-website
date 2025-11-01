// components/home/TestSeries.jsx

import Link from 'next/link';
import { Monitor, FileText, CheckCircle } from 'lucide-react';
import { TEST_SERIES } from '@/lib/constants';

export default function TestSeries() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Test Series</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Regular testing is key to JEE success. Our comprehensive test series helps you track your progress and improve consistently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Online Test Series */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6">
              <Monitor className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Test Series</h3>
            
            <ul className="space-y-3 mb-6">
              {TEST_SERIES[0].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/test-series#online"
              className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Enroll Now
            </Link>
          </div>

          {/* Offline Test Series */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Offline Test Series</h3>
            
            <ul className="space-y-3 mb-6">
              {TEST_SERIES[1].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/test-series#offline"
              className="inline-block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Enroll Now
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Our Test Series?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Practice Questions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Mock Tests</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Syllabus Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}