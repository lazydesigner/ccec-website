// components/home/HeroSlider.jsx

"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    title: "Transform Your IIT-JEE Dreams Into Reality",
    subtitle: "Expert guidance from IET Lucknow alumnus Er. Shravan Katiyar",
    description: "Building conceptual clarity since 2010 with proven teaching methodologies",
    bgGradient: "from-blue-600 to-purple-600",
    cta: "Explore Courses"
  },
  {
    title: "Comprehensive JEE Main & Advanced Coaching",
    subtitle: "Two-way communication, concept-based learning",
    description: "We don't just teach, we ensure concepts are internalized",
    bgGradient: "from-purple-600 to-pink-600",
    cta: "View Results"
  },
  {
    title: "Join India's Top Engineering Aspirants",
    subtitle: "Quality education for serious IIT aspirants",
    description: "From a handful of students to one of Kanpur's leading institutes",
    bgGradient: "from-indigo-600 to-blue-600",
    cta: "Contact Us"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`}>
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-4 font-semibold">
                {slide.subtitle}
              </p>
              <p className="text-lg mb-8 text-gray-100">
                {slide.description}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}