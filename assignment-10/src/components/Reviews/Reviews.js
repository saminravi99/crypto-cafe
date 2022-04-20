import React, { useContext } from "react";
import { AllContext } from "../App/App";
import EachReview from "../EachReview/EachReview";
import "./Reviews.css";

const Reviews = () => {
  // Using Context API
  const {reviews} = useContext(AllContext);

  // Mapping The reviews data array
  const eachReview = reviews.map((review) => {
    return <EachReview key={review.id} {...review}></EachReview>;
  });

  return (
    <div className="my-4">
      <div className="row px-5 container mx-auto">
          {eachReview}
      </div>
    </div>
  );
};

export default Reviews;
