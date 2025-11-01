// components/layout/Footer.jsx

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
          src={'/images/logo.png'}
          width={100}
          height={50}
          
          />
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                CC
              </div>
              <div>
                <h3 className="text-lg font-bold">Career Crave</h3>
                <p className="text-xs text-gray-400">Education Centre</p>
              </div> */}
            </div>
            <p className="text-gray-400 text-sm">
              Premier IIT-JEE coaching institute in Kanpur, providing quality education and guidance since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-gray-400 hover:text-white transition">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Foundation Batch (2 Year)</li>
              <li className="text-gray-400">Ranker Batch (1 Year)</li>
              <li className="text-gray-400">Target Batch (XII Pass)</li>
              <li className="text-gray-400">Super Ranker Batch</li>
              <li className="text-gray-400">Online Programs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
                <span className="text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div className="text-sm">
                  <div>{CONTACT_INFO.mobile[0]}</div>
                  <div>{CONTACT_INFO.mobile[1]}</div>
                </div>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm hover:text-white">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>




            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/cceciitjee" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/careercrave" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@katiyarshravan" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://x.com/careercrave" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Career Crave Education Centre. All rights reserved.</p>
          <p className="mt-2">
            Designed & Developed with ❤️ for BDS
          </p>
        </div>
      </div>
    </footer>
  );
}