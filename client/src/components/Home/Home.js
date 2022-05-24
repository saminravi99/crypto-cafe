import React from "react";
import "./Home.css"
import Banner from "../Banner/Banner";
import Summary from "../Summary/Summary";
import {
  faPeopleGroup,
  faStar,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import FAQ from "../FAQ/FAQ";
import Subscribe from "../Subscribe/Subscribe";
import HomeProducts from "../HomeProducts/HomeProducts";
import Reviews from "../Swiper/Reviews";

const Home = () => {
  return (
    <div className="home-container">
      <Banner></Banner>
      <div className="my-5">
        <h1 className="text-center text-muted mb-5">Our Products</h1>
        <HomeProducts></HomeProducts>
      </div>
      <div className="d-flex flex-lg-row flex-column  justify-content-evenly my-3 bg-success py-5">
        <div>
          <Summary
            icon={faEarthAmerica}
            header="+ Countries"
            number={47}
          ></Summary>
        </div>
        <div className="my-5 my-lg-0">
          <Summary
            icon={faPeopleGroup}
            header="+ Happy Clients"
            number={100}
          ></Summary>
        </div>
        <div>
          <Summary icon={faStar} header="+ Feedback" number={134}></Summary>
        </div>
      </div>

      <div className="my-5 ">
        <h1 className="text-center text-muted mb-5">
          What Our Happy Client Says
        </h1>
        <Reviews></Reviews>
      </div>

      <div className="my-5 container">
        <h1 className="text-center text-muted mb-4 ">
          Frequently Asked Questions
        </h1>
        <FAQ></FAQ>
      </div>

      <div className="my-5 container">
        <h1 className="text-center text-danger mb-4">Get In Touch With Us!</h1>
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default Home;
