import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StarIcon } from '@heroicons/react/outline';
import React from 'react';
import "./EachReview.css"

const EachReview = (props) => {
    const { name, review, rating, date, image } = props;
    return (
        
            <div className="col-md-4 col-12 my-3 p-3 my-lg-0 ">
                <div className="card home-review-container  h-100">
                    <div className="card-body">
                        <cite className="card-text home-review">"{review}"</cite>

                        <h6 className="pt-4 card-text home-review-rating">Ratings:

                                    <span className="ms-2">
                                     {rating >= 4.5 ?
                                    <span>
                                        <FontAwesomeIcon className="home-review-star" icon={faStar} />
                                        <FontAwesomeIcon className="home-review-star" icon={faStar} />
                                        <FontAwesomeIcon className="home-review-star" icon={faStar} />
                                        <FontAwesomeIcon className="home-review-star" icon={faStar} />
                                        <FontAwesomeIcon className="home-review-star" icon={faStarHalfStroke} />
                                    </span>
                                    :
                                    <span>
                                        <FontAwesomeIcon className="home-review-star" icon={faStar} />
                                        <FontAwesomeIcon className="home-review-star" icon={faStar} />
                                        <FontAwesomeIcon className="home-review-star" icon={faStar} />
                                        <FontAwesomeIcon className="home-review-star" icon={faStar} />
                                        <StarIcon className="star-icon"></StarIcon>

                                    </span>
                                }
                            </span>

                            <span className="ms-2">
                                ({rating})
                            </span>
                                </h6>

                            <div className="d-flex align-items-center pt-4">
                                <div className="review-image-container w-25">
                                    <img className="review-image" src={image} alt="img" />
                                </div>
                                <div >
                                    <h6 className="pt-0 card-text home-review-name">{name},</h6>
                                    <p className="card-text home-review-date">{date}</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            

    );
};

export default EachReview;