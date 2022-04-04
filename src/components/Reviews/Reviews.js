import React, { useContext } from 'react';
import { AllContext } from '../App/App';
import EachReview from './EachReview/EachReview';
import './Reviews.css';



const Reviews = () => {

    const {reviews} = useContext(AllContext);

    const review = reviews.map(review => {
        return(
            <EachReview
                key={review.id}
                {...review}
            ></EachReview>
        )
    })

    return (
        <div className="row container mx-auto my-4">
            {review}
        </div>
    );
};

export default Reviews;