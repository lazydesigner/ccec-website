// app/gallery/page.js

import { Camera, Users, Trophy, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Gallery - Career Crave Education Centre',
  description: 'View photos and moments from Career Crave Education Centre - classes, events, and celebrations.',
};

export default function GalleryPage() {
  const galleryCategories = [
    {
      name: "Classroom Sessions",
      icon: BookOpen,
      count: 25,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Student Activities",
      icon: Users,
      count: 30,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Success Celebrations",
      icon: Trophy,
      count: 20,
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  // Sample gallery items (in real application, these would be actual images)
  const galleryItems = [
    { id: 1, category: "classroom", title: "Interactive Physics Class", gradient: "from-blue-400 to-blue-600" },
    { id: 2, category: "activities", title: "Motivation Session", gradient: "from-purple-400 to-purple-600" },
    { id: 3, category: "success", title: "IIT Selection Celebration", gradient: "from-yellow-400 to-orange-500" },
    { id: 4, category: "classroom", title: "Chemistry Lab Session", gradient: "from-green-400 to-green-600" },
    { id: 5, category: "activities", title: "Group Study Session", gradient: "from-pink-400 to-pink-600" },
    { id: 6, category: "success", title: "Result Day 2024", gradient: "from-red-400 to-red-600" },
    { id: 7, category: "classroom", title: "Mathematics Workshop", gradient: "from-indigo-400 to-indigo-600" },
    { id: 8, category: "activities", title: "Doubt Clearing Session", gradient: "from-teal-400 to-teal-600" },
    { id: 9, category: "success", title: "Felicitation Ceremony", gradient: "from-amber-400 to-amber-600" },
    { id: 10, category: "classroom", title: "Problem Solving Class", gradient: "from-cyan-400 to-cyan-600" },
    { id: 11, category: "activities", title: "Mock Test Series", gradient: "from-violet-400 to-violet-600" },
    { id: 12, category: "success", title: "Topper Interaction", gradient: "from-rose-400 to-rose-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Camera className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Moments captured from our journey of transforming dreams into reality
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {galleryCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-center">
                  {category.count} Photos
                </p>
              </div>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All Photos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square"
                >
                  {/* Image Placeholder with Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <Camera className="h-16 w-16 text-white opacity-30" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200">CCEC 2024</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Gallery</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Watch testimonials from our successful students and get a glimpse of life at CCEC
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((video) => (
                <div
                  key={video}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition aspect-video"
                >
                  <div className="h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-opacity-30 transition cursor-pointer">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                      <p className="font-semibold">Student Testimonial {video}</p>
                      <p className="text-sm text-gray-300">2:30 mins</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Be Part of Our Success Story?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join CCEC and create your own success story. Your picture could be in our next gallery!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
}