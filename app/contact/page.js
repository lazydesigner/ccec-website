// app/contact/page.js

"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us for admissions, queries, or any information
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              {/* Contact Cards */}
              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
                      <p className="text-gray-700 mb-3">{CONTACT_INFO.address}</p>
                      <a
                        href={CONTACT_INFO.googleMap}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                      >
                        View on Google Maps
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                      {CONTACT_INFO.mobile.map((number, index) => (
                        <a
                          key={index}
                          href={`tel:${number}`}
                          className="block text-gray-700 hover:text-blue-600 transition mb-1"
                        >
                          {number}
                        </a>
                      ))}
                      <div className="mt-2">
                        <a
                          href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                        >
                          <MessageSquare className="h-4 w-4 mr-1" />
                          WhatsApp: {CONTACT_INFO.whatsapp}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="block text-gray-700 hover:text-blue-600 transition"
                      >
                        {CONTACT_INFO.email}
                      </a>
                      <a
                        href={`mailto:${CONTACT_INFO.directorEmail}`}
                        className="block text-gray-700 hover:text-blue-600 transition"
                      >
                        {CONTACT_INFO.directorEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-xl shadow-lg p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.1234567890!2d80.3456789!3d26.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI3JzI0LjQiTiA4MMKwMjAnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                {submitted && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-gray-700 font-semibold mb-2">
                      Course Interested In *
                    </label>
                    <select
                      id="course"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    >
                      <option value="">Select a course</option>
                      <option value="foundation">Foundation Batch (2 Year)</option>
                      <option value="ranker">Ranker Batch (1 Year)</option>
                      <option value="target">Target Batch (XII Pass)</option>
                      <option value="super-ranker">Super Ranker Batch</option>
                      <option value="online">Online Program</option>
                      <option value="test-series">Test Series</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}