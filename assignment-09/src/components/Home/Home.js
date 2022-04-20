import React, { useContext }  from 'react';
import { useNavigate } from 'react-router-dom';
import { AllContext } from '../App/App';
import HeroSection from '../HeroSection/HeroSection';
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'
import { StarIcon } from '@heroicons/react/outline'

const Home = () => {


    const navigate = useNavigate();

    const {reviews} = useContext(AllContext);

    let slicedReviews = reviews.slice(0, 3);

    const homeReview = slicedReviews.map(review => {
        return(
            <div key={review.id} className="col-md-4 col-12 my-3 my-lg-0 ">
                <div className="card home-review-container  h-100">
                    <div className="card-body">
                        <cite className="card-text home-review">"{review.review}"</cite>

                        

                        <h6 className="pt-4 card-text home-review-rating">Ratings:

                       <span className="ms-2">
                            {review.rating >= 4.5 ? 
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
                            ({review.rating})
                        </span>
                        </h6>

                        <h6 className="card-title home-review-name mt-4">
                            <span>
                                <img className="home-review-image" src={review.image} alt="img" />
                            </span>
                            {review.name},</h6>

                        <p className="card-text home-review-date mt-3">{review.date}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            {/* Hero Section   */}

            <HeroSection></HeroSection>

            {/* Review Section     */}

            <div>
                <h2 className="text-center review-heading-text">What Our Happy Customers Say</h2>
                <div className="row mx-auto my-5 container">
                    {homeReview}
                </div>
                 <div className="mb-5 ">
                     <div className="d-flex justify-content-center" >
                        <button onClick={()=> navigate("/reviews")} className="btn hero-btn mt-2 d-block">
                            See All Reviews
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;