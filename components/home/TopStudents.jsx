// components/home/TopStudents.jsx

import { Trophy, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TopStudents() {
  const toppers = [
    { name: "Rajat Katiyar", rank: "99.81", year: "2024", School: "CHS SECONDARY SCHOOL", images: "/images/Rajat-Katiyar-99-81.jpg" },
    { name: "Sayandeep Haldar", rank: "99.80", year: "2024", School: "NORTH POINT, KOLKATTA", images: "/images/Sayandeep-Haldar-99.80.jpg" },
    { name: "Aakarsh Omar", rank: "99.70", year: "2024", School: "SETH ANANDRAM JAIPURIA", images: "/images/Aakarsh-Omar-99.70.jpg" },
    { name: "PRANAV MALPANI", rank: "AIR 373", year: "2023", School: "JAIPURIA", images: "/images/1.jpeg" },
    { name: "PRANSHU AGARWAL", rank: "AIR 790", year: "2023", School: "HERITAGE INTERNATIONAL", images: "/images/2.jpeg" },
    { name: "KUSHAGRA GUPTA", rank: "AIR 942", year: "2023", School: "ALLEN HOUSE", images: "/images/3.jpeg" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-12 w-12 text-yellow-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Top Students</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating the success of our students who made it to prestigious IITs and NITs through dedication and our guidance.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
            <div className="text-gray-700 font-semibold">IIT Selections</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-700 font-semibold">NIT Selections</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-700 font-semibold">Success Rate</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-700 font-semibold">Years Legacy</div>
          </div>
        </div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toppers.map((student, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {/* {student.name.charAt(0)} */}
                     <Image 
                                                  src={student.images}
                                                  width={100}
                                                  height={100}
                    
                                                  />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{student.name}</h3>
                    <p className="text-sm text-gray-600">{student.year}</p>
                  </div>
                </div>
                <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {student.rank}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <span className="text-gray-600 w-20">School:</span>
                  <span className="font-semibold text-gray-900">{student.School}</span>
                </div>
                {/* <div className="flex items-center text-sm">
                  <span className="text-gray-600 w-20">Branch:</span>
                  <span className="font-semibold text-gray-900">{student.branch}</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/results"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition"
          >
            View All Results
          </Link>
        </div>
      </div>
    </section>
  );
}