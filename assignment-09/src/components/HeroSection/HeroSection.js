import React from 'react';
import "./HeroSection.css"
import HeroImage from "../../img/hero-img.png"
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {

    const navigate = useNavigate();


    return (
        <div>
             <div className="container row my-5 mx-auto d-flex flex-lg-row flex-column-reverse">
                <div className="col-lg-8 col-12 d-flex flex-lg-row flex-column-reverse">
                    <div className="d-flex  align-items-center h-100">
                        <div className="w-75 hero-container">
                            <h1 className=" hero-text">
                            Order food from the best restaurant near you.
                            </h1>

                            <p className="mt-4 hero-detail">
                                Order food from your favourite restaurants, delivered straight to your front door. Browse restaurants near you and pick from their menus. Get a better idea of what's on offer before you order by checking out full-screen photos of food. Wherever you are in the world, there's a restaurant for you.  
                            </p>

                            <div>
                                <div>
                                    <button onClick={()=> navigate("/about")} className="btn hero-btn mt-2">
                                    Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-4 col-12">
                    <div className="d-flex  justify-content-center align-items-center ">
                        <div className="h-100">
                            <img className="hero-img" src={HeroImage} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HeroSection;