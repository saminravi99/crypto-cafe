import React from 'react';
import "./About.css"
import FoodOne from "../../img/food-one.png"
import FoodTwo  from "../../img/food-two.png"
import Counter from "../../img/counter.png"
import Story from "../../img/story.png"

const About = () => {
    return (
        <div className="about">


            <div className="container d-flex flex-lg-row flex-column align-items-center  my-5">
                <div className="w-75" >
                    <img className="img-fluid" src={FoodOne} alt="img" />
                </div>
                <div className="w-75 food-one-text p-lg-5">
                    <h3>We pride ourselves on making the best restaurant review in the town.</h3>
                    <p>
                        Chef Stephen’s dishes are based on what the local ocean has to offer. Some of the ingredients we use come right from local businesses, while others come from our farmers markets.”The Seafood Orchid includes Maine lobster tails and shrimp, Maine clams, salmon and local and organic vegetables in a ponzu soy ginger broth, which is prepared tableside.
                    </p>
                </div>
            </div>


            <div>
                <img className="w-100" src={Counter} alt="img" />
            </div>


             


            <div className="container d-flex flex-lg-row flex-column-reverse align-items-center  my-5">
                    <div className="w-75 food-two-text py-lg-5 pe-lg-5 " >
                        <h3>We make everything by hand with the best possible ingredients.</h3>
                        <p>
                            We make everything from scratch and there is just something about eating homemade pancakes that makes a family feel special.It's our one day a week we get to sleep in and we get to eat a delicious home cooked breakfast with no rushing around.
                        </p>
                    </div>
                    <div >
                        <img className="w-100" src={FoodTwo} alt="img" />
                        
                    </div>
            </div>
               
                

                 



             <div className="mb-4">
                <img className="w-100" src={Story} alt="" />
            </div>





        </div>
    );
};

export default About;