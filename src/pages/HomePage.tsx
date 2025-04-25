// import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import TravelExperience from '../components/home/TravelExperience';
import Testimonials from '../components/home/Testimonials';
import Gallery from '../components/home/Gallery';
import Newsletter from '../components/home/Newsletter';
import TravelStats from '../components/home/TravelStats';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturedDestinations />
      <TravelExperience />
      <TravelStats />
      <Testimonials />
      <Gallery />
      <Newsletter />
    </div>
  );
};

export default HomePage;