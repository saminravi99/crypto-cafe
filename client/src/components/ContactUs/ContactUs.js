import React from "react";
import Leaflet from "../Leaflet/Leaflet";
import "./ContactUs.css";
import tool from "../../img/tools.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex justify-content-center align-items-center about-me-title">
          <h1>Contact Address</h1>
        </div>
        <div className="d-flex flex-lg-row flex-column justify-content-around align-items-center mt-4">
          <div className="leaflet-texts">
            <h5>
              <FontAwesomeIcon className="me-2" icon={faLocationDot} /> F10,
              Zakir Hossain Road, Mohammadpur, Dhaka 1207
            </h5>
            <h5 className="my-4">
              <FontAwesomeIcon className="me-3" icon={faEnvelope} />
              Official:
              <a className="ps-3" href="https://manufacturer-xpart.web.app/">
                https://manufacturer-xpart.web.app/
              </a>
            </h5>
            <h5 className="mb-lg-0 mb-5">
              <FontAwesomeIcon className="me-2" icon={faPhone} /> Helpline :
              01322810873 , 01322810867 , 01322810869
            </h5>
          </div>
          <Leaflet></Leaflet>
        </div>
      </div>
      <div>
        <div>
          <div className="d-flex justify-content-center align-items-center about-me-title mt-lg-4">
            <h1>Our Motto</h1>
          </div>
          <div className="d-flex flex-lg-row flex-column-reverse justify-content-center align-items-center container  about-me-container mt-4">
            <div className="about-me-text-container mx-auto mt-lg-0 my-lg-0 my-5">
              <p>
                We are leading tools manufacturer. We have a market share of
                40%. We are very selective of which tools to sell in where and
                where not. That is the reason we are not exposed to the European
                economies. But if you want to develop a European business and
                you want to sell into Europe, yes, you have to be there. When I
                look at the results for Europe, they are struggling. They have
                some good -- they have good OEM growth, but it's hard to find
                growth in the channel and there is not a whole lot in that
                channel because you don't have a very big range, if I could make
                a few comments about that.
              </p>
              <p>
                We were first in China. We've seen tremendous growth in China.
                And so what do I do, and they said to me and they did it and
                they got great press coverage, which was great for the company,
                which is a little embarrassing for me, was, okay, we'll go to
                China. So we would send our sales reps, we would send our
                regional managers, we would send our directors, we would send
                our distributor sales reps to China.
              </p>
            </div>
            <div className=" mx-auto ">
              <img className="about-me-img" src={tool} alt="teamwork" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
