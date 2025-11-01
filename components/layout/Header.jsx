// components/layout/Header.jsx

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Navigation from './Navigation';
import { CONTACT_INFO } from '@/lib/constants';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <a href={`tel:${CONTACT_INFO.mobile[0]}`} className="flex items-center space-x-1 hover:text-blue-100">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{CONTACT_INFO.mobile[0]}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-1 hover:text-blue-100">
                <Mail className="h-4 w-4" />
                <span className="hidden md:inline">{CONTACT_INFO.email}</span>
              </a>
            </div>
            <div className="text-xs sm:text-sm">
              <span>Admissions Open for JEE 2026 & 2027</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
          {/* <Image
          src={'/images/logo.png'}
          width={100}
          height={50}
          
          /> */}
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              CC
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Career Crave</h1>
              <p className="text-xs text-gray-600">Education Centre</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <Navigation mobile onLinkClick={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}