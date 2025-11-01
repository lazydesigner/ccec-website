// app/results/page.js

import { Trophy, Award, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Results - Career Crave Education Centre',
  description: 'View the outstanding results of CCEC students in JEE Main and Advanced examinations.',
};

export default function ResultsPage() {
  const yearWiseResults = [
    {
      year: "2024",
      totalSelections: 125,
      iitSelections: 45,
      nitSelections: 80,
      topRank: "AIR 245",
      toppers: [
        { name: "Rajat Katiyar", rank: "99.81", School: "CHS SECONDARY SCHOOL", images: "/images/Rajat-Katiyar-99-81.jpg" },
        { name: "Sayandeep Haldar", rank: "99.80", School: "NORTH POINT, KOLKATTA", images: "/images/Sayandeep-Haldar-99.80.jpg" },
        { name: "Aakarsh Omar", rank: "99.70", School: "SETH ANANDRAM JAIPURIA", images: "/images/Aakarsh-Omar-99.70.jpg" },
        { name: "KRISH OMER", rank: "99.50", School: "JAIN WORLD SCHOOL", images: "/images/Krish-Omer-99.50.jpg" },
        { name: "Aditya Kanodia", rank: "99.47", School: "SHEILING HOUSE SCHOOL", images: "/images/Aditya-kanodia-99.47.jpg" },
        { name: "Sarthak Tewari", rank: "99.45", School: "SHEILING HOUSE SCHOOL", images: "/images/Sarthak-Tewari-99.45.jpg" },
        { name: "Devansh Bajpai", rank: "99.31", School: "PADAMPAT SINGHANIA", images: "/images/Devansh-Bajpai-99.31.jpg" },
        { name: "Abhishek Pandey", rank: "99.29", School: "SWAMI VIVEKANAND COLLEGE", images: "/images/Abhishek-Pandey-99.29.jpeg" },
        { name: "Raghav Mishra", rank: "99.18", School: "VIRENDRA SWAROOP, AWADHPURI", images: "/images/Raghvendra-Mishra-99.18.png" },
        { name: "Arjun Dixit", rank: "99.15", School: "VIRENDRA SWAROOP, KIDWAI NAGAR", images: "/images/Arjun-Dixit-99.15.png" },
        { name: "Krishna Jaiswal", rank: "99.10", School: "DPS, KALYANPUR", images: "/images/Krishna-Jaiswal-99.10.jpg" },
        { name: "Tanya katiyar", rank: "99.02", School: "VIRENDRA SWAROOP, AWADHPURI", images: "/images/Tanya-Katiyar-99.02.jpg" },
      ]
    },
    {
      year: "2023",
      totalSelections: 118,
      iitSelections: 42,
      nitSelections: 76,
      topRank: "AIR 312",
      toppers: [
        { name: "PRANAV MALPANI", rank: "AIR 373", School: "JAIPURIA", images: "/images/1.jpeg" },
        { name: "PRANSHU AGARWAL", rank: "AIR 790", School: "HERITAGE INTERNATIONAL", images: "/images/2.jpeg" },
        { name: "KUSHAGRA GUPTA", rank: "AIR 942", School: "ALLEN HOUSE", images: "/images/3.jpeg" },
        { name: "AYUSH OMER", rank: "AIR 3183", School: "SHEILING HOUSE", images: "/images/4.jpeg" },
        { name: "GARVIT MAHESHWARI", rank: "AIR 4625", School: "DR. VSEC AWADHPURI", images: "/images/5.jpeg" },
        { name: "DIVYANSHU SHARMA", rank: "AIR 5385", School: "GARDENIA PUBLIC", images: "/images/6.jpeg" },
        { name: "MEDHA AGARWAL", rank: "AIR 6265", School: "JAIPURIA", images: "/images/7.png" },
      ]
    },
    {
      year: "2022",
      totalSelections: 105,
      iitSelections: 38,
      nitSelections: 67,
      topRank: "AIR 425",
      toppers: [
        { name: "SUJAL GUPTA", rank: "AIR 2225", School: "", images: "/images/sujal_gupta__adv_22_air_2225.jpg" },
        { name: "SATVIK MISHRA", rank: "AIR 3184", School: "", images: "/images/Satvik Mishra (Adv.-22 AIR 3184).jpg" },
        { name: "MAYANK JHUNJHUNWALA", rank: "AIR 3563", School: "", images: "/images/mayank_jhunjhunwala__adv-22_air_3563.jpg" },
        { name: "SAUMYA PRATAP SINGH", rank: "AIR 4026", School: "", images: "/images/saumya_pratap_singh__adv-22_air_4026.jpg" },
        { name: "ASHWIN CHOUBEY", rank: "AIR 5156", School: "", images: "/images/ashwin_choubey__adv-22_air_5156.jpg" },
        { name: "SAUMYA GUPTA", rank: "AIR 7516", School: "", images: "/images/saumya_gupta_adv-22_air_7516.jpg" },
        { name: "UJJWAL SRIVASTAVA", rank: "AIR 7927", School: "", images: "/images/ujjwal_srivastava_adv-22_air_7927.jpg" },
        { name: "ABHIRAJ RAJAN", rank: "AIR 8657", School: "", images: "/images/abhiraj_ranjan__adv-22_air_8657.jpg" },
        { name: "ANUJ PRATAP SINGH", rank: "AIR 529", School: "", images: "/images/anuj_pratap_singh_adv-22_cat_rank_529.jpg" },
        { name: "HARSHIT KATIYAR", rank: "AIR 2688", School: "", images: "/images/harshit_katiyar_adv-22_cat_rank_2688.jpg" },
      ]
    }
  ];

  const Schools = [
    "IIT Bombay", "IIT Delhi", "IIT Kanpur", "IIT Kharagpur", "IIT Roorkee",
    "IIT Madras", "IIT Guwahati", "NIT Trichy", "NIT Surathkal", "NIT Warangal"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
  className="relative bg-gradient-to-r from-yellow-500/80 via-orange-500/80 to-red-500/80 text-white min-h-[550px] py-40 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/main.jpg')" }} // 👈 replace with your image path
>
  <div className="absolute inset-0 bg-black/30"></div> {/* optional dark overlay */}
  
  <div className="relative container mx-auto px-4 text-center">
    <Trophy className="h-20 w-20 mx-auto mb-6" />
    {/* <h1 className="text-5xl font-bold mb-4">Our Proud Results</h1>
    <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
      Celebrating the success of our students who made it to prestigious IITs and NITs
    </p> */}
  </div>
</section>


      {/* Overall Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-8 text-white text-center shadow-xl">
              <Trophy className="h-12 w-12 mx-auto mb-3" />
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg font-semibold">IIT Selections</div>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl p-8 text-white text-center shadow-xl">
              <Award className="h-12 w-12 mx-auto mb-3" />
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg font-semibold">NIT Selections</div>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl p-8 text-white text-center shadow-xl">
              <Star className="h-12 w-12 mx-auto mb-3" />
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-lg font-semibold">Success Rate</div>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl p-8 text-white text-center shadow-xl">
              <TrendingUp className="h-12 w-12 mx-auto mb-3" />
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg font-semibold">Years Legacy</div>
            </div>
          </div>

          {/* Year-wise Results */}
          {yearWiseResults.map((yearData, index) => (
            <div key={yearData.year} className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Year Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h2 className="text-4xl font-bold mb-2">JEE {yearData.year} Results</h2>
                      <p className="text-blue-100">Outstanding performance by our students</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold">{yearData.totalSelections}</div>
                        <div className="text-sm text-blue-100">Total Selections</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">{yearData.iitSelections}</div>
                        <div className="text-sm text-blue-100">IIT</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">{yearData.nitSelections}</div>
                        <div className="text-sm text-blue-100">NIT</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Toppers Grid */}
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Top Performers</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {yearData.toppers.map((student, idx) => (
                      <div
                        key={idx}
                        className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                          idx === 10000 ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400' : 'bg-gradient-to-br from-gray-50 to-white border border-gray-200'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-16 h-16 rounded-full flex overflow-hidden  items-center justify-center text-white font-bold text-lg ${
                              idx === 10000 ? 'bg-gradient-to-br from-yellow-500 to-orange-500' : 'bg-gradient-to-br from-blue-500 to-purple-500'
                            }`}>
                              <Image 
                              src={student.images}
                              width={100}
                              height={100}

                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 capitalize">{student.name}</h4>
                              {idx === 10000 && <div className="text-xs text-yellow-600 font-semibold">🏆 Top Ranker</div>}
                            </div>
                          </div>
                          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold flex items-center">
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
                            <span className="text-gray-600 w-20">images:</span>
                            <span className="font-semibold text-gray-900">{student.images}</span>
                          </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Schools Section */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Students Are Studying At</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {Schools.map((School, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow hover:shadow-lg transition">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                    {School.split(' ')[0].substring(0, 3)}
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">{School}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}