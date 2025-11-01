// app/courses/page.js

import { Clock, Calendar, Target, CheckCircle, Monitor, BookOpen, Users, Award } from 'lucide-react';
import { BATCHES_DATA, ONLINE_COURSES } from '@/lib/constants';
import Link from 'next/link';

export const metadata = {
  title: 'Courses - Career Crave Education Centre',
  description: 'Explore our comprehensive JEE Main and Advanced courses including Foundation, Ranker, Target, and Super Ranker batches.',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive programs designed to help you crack JEE Main & Advanced
          </p>
        </div>
      </section>

      {/* About JEE Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* About JEE Main */}
            <div id="jee-main" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">About JEE Main</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                JEE Main is the first stage of the IIT entrance examination. It is conducted by the National Testing Agency (NTA) for admission to NITs, IIITs, and other centrally funded technical institutions. It also serves as a screening test for JEE Advanced.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">National level entrance exam</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Gateway to NITs, IIITs, and other institutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Qualifier for JEE Advanced</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Conducted twice a year</span>
                </li>
              </ul>
            </div>

            {/* About JEE Advanced */}
            <div id="jee-advanced" className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">About JEE Advanced</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                JEE Advanced is the second and final stage of the IIT entrance examination. Only top 2.5 lakh students who qualify JEE Main are eligible to appear for JEE Advanced. It is the gateway to prestigious Indian Institutes of Technology (IITs).
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Gateway to prestigious IITs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Highly competitive examination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tests conceptual understanding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Conducted once a year</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Programs */}
      <section id="classroom" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Classroom Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interactive classroom sessions with personal attention and doubt clearing
            </p>
          </div>

          <div className="space-y-8">
            {BATCHES_DATA.map((batch, index) => (
              <div key={batch.id} id={`batch-${batch.id}`} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Batch Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl mr-4 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{batch.name}</h3>
                        <p className="text-gray-600 font-semibold">Target: {batch.target}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <Clock className="h-6 w-6 text-blue-600 mb-2" />
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="font-bold text-gray-900">{batch.duration}</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-4">
                        <Calendar className="h-6 w-6 text-purple-600 mb-2" />
                        <div className="text-sm text-gray-600">Timing</div>
                        <div className="font-bold text-gray-900">{batch.timing}</div>
                      </div>
                      <div className="bg-pink-50 rounded-lg p-4">
                        <Target className="h-6 w-6 text-pink-600 mb-2" />
                        <div className="text-sm text-gray-600">Eligibility</div>
                        <div className="font-bold text-gray-900 text-xs">{batch.eligibility.slice(0, 20)}...</div>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {batch.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Eligibility:</h4>
                      <p className="text-gray-700">{batch.eligibility}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4 text-xl">Key Features</h4>
                    <ul className="space-y-3">
                      {batch.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-block w-full text-center mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Programs */}
      <section id="online" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Monitor className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Online Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from anywhere with our comprehensive online courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ONLINE_COURSES.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Duration:</span> {course.duration}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Target:</span> {course.target}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Features:</h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition text-sm"
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}