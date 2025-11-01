// components/home/AboutShravan.jsx

import Link from 'next/link';
import { GraduationCap, Award, Users, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function AboutShravan() {
  const achievements = [
    { icon: GraduationCap, title: "IET Lucknow Alumni", description: "Electronics Engineering Graduate" },
    { icon: Award, title: "15+ Years Experience", description: "Mentoring IIT Aspirants since 2010" },
    { icon: Users, title: "1000+ Students", description: "Successfully guided to IITs & NITs" },
    { icon: BookOpen, title: "Concept-Based Teaching", description: "Focus on fundamentals & clarity" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-square  rounded-2xl shadow-2xl flex items-end justify-center text-white">
              <Image
              src={'/images/Founder.jpg'}
              fill="true"
              className='object-cover absolute bg-gray-100'

              />
              <div className="text-center  p-8 relative z-10">
                 
                <h3 className="text-3xl font-bold mb-2">Er. Shravan Katiyar</h3>
                <p className="text-xl text-blue-100">Founder & Director</p>
                <div className="mt-6 inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold">
                  IET Lucknow Alumni
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
              <div className="text-4xl font-bold text-blue-600 mb-1">2010</div>
              <div className="text-gray-600 font-semibold">Established</div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet <span className="text-blue-600">Er. Shravan Katiyar</span>
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              An Electronics Engineering graduate from IET Lucknow, Er. Shravan Katiyar founded Career Crave Education Centre in 2010 with a vision to provide quality education and create an ideal launch pad for serious IIT aspirants.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              His unique teaching philosophy emphasizes conceptual clarity over rote learning. "Believe in yourself, you can do it" - this simple yet powerful motto has inspired thousands of students to achieve their dreams.
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition">
                  <achievement.icon className="h-8 w-8 text-blue-600 mb-2" />
                  <h4 className="font-bold text-gray-900 mb-1">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about#shravan"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Read Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}