// app/page.js

import HeroSlider from '@/components/home/HeroSlider';
import Batches from '@/components/home/Batches';
import TestSeries from '@/components/home/TestSeries';
import AboutShravan from '@/components/home/AboutShravan';
import TopStudents from '@/components/home/TopStudents';
import Testimonials from '@/components/home/Testimonials';
import BlogsSection from '@/components/home/BlogsSection';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Batches />
      <TestSeries />
      <AboutShravan />
      <TopStudents />
      <Testimonials />
      <BlogsSection />
    </>
  );
}