import React from 'react';
import '../../App.css';
import HeroSection from '../../Sections/Hero';
import AboutSection from '../../Sections/About';
export default function Home() {
  return (
    <>
      {/* <h1 className='home'>EPIC</h1> */}
      <HeroSection/>
      <AboutSection/>
    </>
  );
}
