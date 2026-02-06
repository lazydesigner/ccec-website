// components/home/Slider2.jsx

"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    title: "Transform Your IIT-JEE Dreams Into Reality",
    subtitle: "Expert guidance from IET Lucknow alumnus Er. Shravan Katiyar",
    description: "Building conceptual clarity since 2010 with proven teaching methodologies",
    bgGradient: "from-blue-600/80 to-purple-600/80",
    image: "/images/banner/01.jpg",
    cta: "Explore Courses",
    url: "/courses"
  },
  {
    title: "Comprehensive JEE Main & Advanced Coaching",
    subtitle: "Two-way communication, concept-based learning",
    description: "We don't just teach, we ensure concepts are internalized",
    bgGradient: "from-purple-600/80 to-pink-600/80",
    image: "/images/banner/02.jpg",
    cta: "View Results",
    url: "/results"
  },
  {
    title: "Join India's Top Engineering Aspirants",
    subtitle: "Quality education for serious IIT aspirants",
    description: "From a handful of students to one of Kanpur's leading institutes",
    bgGradient: "from-purple-600/80 to-pink-600/80",
    image: "/images/banner/03.jpg",
    cta: "Contact Us",
    url: "/contact"
  },
  {
    title: "Join India's Top Engineering Aspirants",
    subtitle: "Quality education for serious IIT aspirants",
    description: "From a handful of students to one of Kanpur's leading institutes",
    bgGradient: "from-purple-600/80 to-pink-600/80",
    image: "/images/banner/04.jpg",
    cta: "Contact Us",
    url: "/contact"
  },
  {
    title: "Join India's Top Engineering Aspirants",
    subtitle: "Quality education for serious IIT aspirants",
    description: "From a handful of students to one of Kanpur's leading institutes",
    bgGradient: "from-purple-600/80 to-pink-600/80",
    image: "/images/banner/05.jpg",
    cta: "Contact Us",
    url: "/contact"
  }
];

export default function Slider2() {
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
    <div className="relative w-[99%] mx-auto h-[106px] sm:h-[190px] md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
  <div
    key={index}
    className={`absolute inset-0 transition-opacity duration-1000 ${
      index === currentSlide ? 'opacity-100' : 'opacity-0'
    }`}
    style={{
      backgroundImage: `url(${slide.image})`, 
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  > 
 
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