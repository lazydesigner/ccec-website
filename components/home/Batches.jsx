// components/home/Batches.jsx

import Link from 'next/link';
import { Clock, Calendar, Target, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { BATCHES_DATA } from '@/lib/constants';

export default function Batches() {
  const batchColors = [
    'from-blue-500 to-blue-600',
    'from-purple-500 to-purple-600',
    'from-pink-500 to-pink-600',
    'from-indigo-500 to-indigo-600'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Batches</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect batch for your JEE preparation journey. Each program is designed with specific goals and student needs in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BATCHES_DATA.map((batch, index) => (
            <div
              key={batch.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Batch Image/Icon */}
              <div className={`relative h-48 bg-gradient-to-br ${batchColors[index]} flex items-center justify-center`}> 
                  <Image
                  src={batch.images} 
                  fill={true}
                  className='object-cover'
                  /> 
              </div>

              {/* Batch Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{batch.name}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-sm">{batch.timing}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                    <span className="text-sm">Duration: {batch.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Target className="h-4 w-4 mr-2 text-pink-600" />
                    <span className="text-sm">Target: {batch.target}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {batch.description}
                </p>

                <Link
                  href={`/courses#batch-${batch.id}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}