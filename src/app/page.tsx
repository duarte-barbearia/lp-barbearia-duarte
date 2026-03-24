'use client';

import IntroAnimation from '@/components/IntroAnimation';
import SmoothScroll from '@/components/SmoothScroll';
import PlansBanner from '@/components/PlansBanner';
import Hero from '@/sections/Hero';
import Range from '@/sections/Range';
import Process from '@/sections/Process';
import About from '@/sections/About';
import Plans from '@/sections/Plans';
import Course from '@/sections/Course';
import Cta from '@/sections/Cta';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <IntroAnimation>
      <SmoothScroll />
      <Hero />
      <Range />
      <Process />
      <About />
      <Plans />
      <Course />
      {/* <Cta /> */}
      <Footer />
      <PlansBanner />
    </IntroAnimation>
  );
}
