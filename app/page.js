// app/page.js

import HeroSlider from '@/components/home/HeroSlider';
import Slider2 from '@/components/home/Slider2';
import Batches from '@/components/home/Batches';
import TestSeries from '@/components/home/TestSeries';
import AboutShravan from '@/components/home/AboutShravan';
import TopStudents from '@/components/home/TopStudents';
import Testimonials from '@/components/home/Testimonials';
import BlogsSection from '@/components/home/BlogsSection';
import Image from 'next/image';

import VideoSection from '@/components/home/VideoSection';

export default function Home() {
  return (
    <>

      {/* <div className="relative h-[106px] sm:h-[190px] md:h-[400px] mb-2">
        <Image
          src="/images/banner/02.jpg"
          alt="IET Lucknow"
          fill
          className="object-cover  shadow-lg"
        />
        </div> */}
       <Slider2 /> 
      <HeroSlider />

      <Batches />
      <TestSeries />
      <AboutShravan />
      <TopStudents />
      <Testimonials />
      <BlogsSection />
      <VideoSection />
    </>
  );
}