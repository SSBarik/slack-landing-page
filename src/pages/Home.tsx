import type React from "react";
import HeroSection from "../components/HeroSection";
import PartnersMarquee from "../components/PartnersMarquee";
import FeatureSection from "../components/FeatureSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PartnersMarquee />
      <FeatureSection />
    </>
  );
};

export default Home;
