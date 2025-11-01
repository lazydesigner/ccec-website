// app/layout.js

import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Career Crave Education Centre - JEE Main & Advanced Coaching in Kanpur',
  description: 'Premier IIT-JEE coaching institute in Kanpur by Er. Shravan Katiyar. Expert guidance for JEE Main and Advanced since 2010.',
  keywords: 'JEE coaching Kanpur, IIT coaching, JEE Main, JEE Advanced, Career Crave, Shravan Katiyar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}