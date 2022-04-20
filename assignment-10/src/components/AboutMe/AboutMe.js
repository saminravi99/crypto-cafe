import React from "react";
import Leaflet from "../Leaflet/Leaflet";
import "./AboutMe.css";
import doctor from "../../img/Ravi.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  return (
    <div className="mt-5">
      <div>
        <div>
          <div className="d-flex justify-content-center align-items-center about-me-title">
            <h1>About Me</h1>
          </div>
          <div className="d-flex flex-lg-row flex-column-reverse justify-content-center align-items-center container  about-me-container mt-4">
            <div className="about-me-text-container mx-auto mt-lg-0 my-lg-0 my-5">
              <p>
                Hello I am Dr. Samin Israr Ravi. I am a skin specialist. I am a
                dermatologist but not a skin therapist. I am a specialist of
                surgical management of skin disorders. Now let me discuss about
                skin and the skin problems.
              </p>
              <p>
                Skin problems vary from one individual to another. Age, gender,
                race, and skin type are factors which may cause skin problems.
                Uveitis is one of the skin problems. Uveitis, also known as
                uveitis is a chronic inflammation of the middle layer of the
                eye. Patients with this disease have many complications like
                blurry vision, bleeding, infection, ulceration, and pain. As we
                know, the condition may be inherited or a consequence of certain
                medications, such as anti-asthmatic, antidepressants, and
                steroids. Myra Spiller is one of the famous artists who is
                famous in the US for painting with her feet. She works
                exclusively with her feet and I am very much impressed by her
                skill.
              </p>
            </div>
            <div className=" mx-auto ">
              <img className="about-me-img" src={doctor} alt="doctor" />
            </div>
          </div>
        </div>
      </div>

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
              <a href="http://dermacare.co.za/">http://dermacare.co.za/</a>
            </h5>
            <h5 className="mb-lg-0 mb-5">
              <FontAwesomeIcon className="me-2" icon={faPhone} /> Helpline :
              01322810873 , 01322810867 , 01322810869
            </h5>
          </div>
          <Leaflet></Leaflet>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
