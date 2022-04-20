import React from "react";
import "./HeroSection.css";
import ravi from "../../img/Ravi.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {


  // Using From React Router DOM
  const navigate = useNavigate();


  //Using Function to Redirect to Schedule Route
  const handleSchedule = () => {
    navigate("/schedule");
  }

  // Using Function to Redirect to About Me Route
  const handleContact = () => {
    navigate("/about-me");
  }


  return (
    <div className="d-flex justify-content-around align-items-lg-center  pb-lg-5 hero-section-container">
      <div className=" container hero-detail">
        <h1>
          Skin Care Now
          <br />
          Simplified For <span className="text-primary">Everyone</span>{" "}
        </h1>
        <p className="w-50">
          Health carely is a new way to get health insurance quotes. We offer
          tools similar to those provided by insurance companies for free and
          prices are based on donations and not restrictive health plan
          networks.
        </p>
        <button onClick={handleContact} className="btn btn-primary">Contact Me</button>
      </div>
      <div className="hero-card d-flex justify-content-center align-items-center">
        <div >
          <div className=" d-flex justify-content-center align-items-center my-3">
            <img className="hero-img" src={ravi} alt="" />
          </div>
          <div>
            <h6 className=" text-center ">Dr. Samin Israr Ravi</h6>
            <p className=" text-center">Skin Specialist</p>
            <div className=" d-flex justify-content-center align-items-center my-3">
              <button onClick={handleSchedule} className="btn btn-primary">Make Schedule</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
