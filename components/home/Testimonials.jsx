// components/home/Testimonials.jsx

"use client";

import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rahul Sharma",
      rank: "AIR 245 - JEE Advanced 2024",
      college: "IIT Bombay - Computer Science",
      text: "CCEC's concept-based approach helped me understand fundamentals deeply. The two-way communication in classes made all the difference. Sir's personal attention and regular motivation kept me focused throughout the journey.",
      rating: 5
    },
    {
      name: "Priya Singh",
      rank: "AIR 512 - JEE Advanced 2024",
      college: "IIT Delhi - Electrical Engineering",
      text: "Best decision to join CCEC. Personal attention and regular motivation sessions kept me focused throughout the year. The teaching methodology is unique and effective. Thank you Shravan Sir!",
      rating: 5
    },
    {
      name: "Amit Kumar",
      rank: "AIR 789 - JEE Advanced 2024",
      college: "IIT Kanpur - Mechanical Engineering",
      text: "The teaching methodology at CCEC is unique. Teachers ensure concepts are internalized, not just taught. Regular tests and doubt sessions helped me improve consistently. Highly recommended!",
      rating: 5
    },
    {
      name: "Sneha Gupta",
      rank: "AIR 1024 - JEE Advanced 2023",
      college: "IIT Kharagpur - Chemical Engineering",
      text: "CCEC provided the perfect environment for preparation. The faculty is excellent and always available for doubts. Mock tests helped me manage time effectively in the actual exam.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our successful students who achieved their IIT dreams with Career Crave Education Centre.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
            <Quote className="h-16 w-16 text-blue-200 absolute top-8 left-8 opacity-50" />
            
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 text-center italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Student Info */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {testimonials[currentIndex].rank}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].college}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg transition"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}