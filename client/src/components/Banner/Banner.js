import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
      <div className="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between container mx-auto">
        <div className="banner-info">
          <h1>
            Leading Tools Supplier in{" "}
            <span className="text-success">Bangladesh</span>{" "}
          </h1>
          <h6>
            We have a wide selection of tools that will help you work in the
            best possible way. We have all kinds of power tools, fabricated
            metal products, industrial supplies and other related materials can
            fulfill all your needs.
          </h6>
          <button className="btn btn-success my-2 d-lg-inline d-block mx-lg-0 mx-auto">Explore</button>
        </div>
        <div className="d-flex justify-content-center">
          <img
            className="w-75"
            src="https://img.freepik.com/free-vector/roadside-service-abstract-concept-vector-illustration-roadside-assistance-car-service-provider-truck-breakdown-mechanical-repair-vehicle-towing-professional-help-driver-abstract-metaphor_335657-1802.jpg?t=st=1653156112~exp=1653156712~hmac=89ad96fe0502fd2e00f8551d1417d6a38a21da6b1be12393f61cd641e749f991&w=740"
            alt="banner"
          />
        </div>
      </div>
    );
};

export default Banner;