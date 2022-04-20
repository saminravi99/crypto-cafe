import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {

  return (
    <div>
      <HeroSection></HeroSection>
      <h2 className="text-center service-title text-muted">
        Services I Provide
      </h2>

      <Services></Services>
      <h2 className="text-center text-muted mt-5">
        What Happy Clients Say About Me
      </h2>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
