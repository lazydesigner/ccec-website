// components/layout/Navigation.jsx

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { NAVIGATION_LINKS } from '@/lib/constants';

export default function Navigation({ mobile = false, onLinkClick }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (name) => {
    if (!mobile) {
      setOpenDropdown(name);
    }
  };

  const handleMouseLeave = () => {
    if (!mobile) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (name) => {
    if (mobile) {
      setOpenDropdown(openDropdown === name ? null : name);
    }
  };

  if (mobile) {
    return (
      <nav className="flex flex-col space-y-2">
        {NAVIGATION_LINKS.map((link) => (
          <div key={link.name}>
            {link.dropdown ? (
              <div>
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="flex items-center justify-between w-full text-left py-2 px-4 text-gray-700 hover:bg-blue-50 rounded-lg font-medium"
                >
                  {link.name}
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === link.name && (
                  <div className="ml-4 mt-2 space-y-2">
                    {link.dropdown.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        onClick={onLinkClick}
                        className="block py-2 px-4 text-gray-600 hover:bg-blue-50 rounded-lg"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={link.href}
                onClick={onLinkClick}
                className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded-lg font-medium"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {NAVIGATION_LINKS.map((link) => (
        <div
          key={link.name}
          className="relative"
          onMouseEnter={() => handleMouseEnter(link.name)}
          onMouseLeave={handleMouseLeave}
        >
          {link.dropdown ? (
            <>
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center py-2">
                {link.name}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === link.name && (
                <div className="absolute top-full left-0 -mt-1 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
                  {link.dropdown.map((subLink) => (
                    <Link
                      key={subLink.name}
                      href={subLink.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}