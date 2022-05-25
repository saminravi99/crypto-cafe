import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App/App.css";
import "./Review.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
import useReviews from "../hooks/useReviews";
import { Card } from "react-bootstrap";
import Loading from "../Loading/Loading";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [reviews, setReviews, isLoading] = useReviews();

  const reversedReviews = [...reviews].reverse();

  let stars;

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Swiper
            onSwiper={setSwiperRef}
            autoHeight={true}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            centeredSlides={true}
            spaceBetween={0}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <div>
              {reversedReviews.map(({ user, review, userImage, rating }) => (
                <SwiperSlide className="pb-5 pt-2" key={review?.id}>
                  <Card className=" shadow review-card border-0 ">
                    <Card.Body>
                      <Card.Title>
                        {" "}
                        <div className="d-flex justify-content-start align-items-center">
                          <div>
                            <img
                              className="review-img"
                              src={userImage}
                              alt={user}
                            ></img>{" "}
                          </div>
                          <h5 className="ms-3 mb-0 user"> {user}</h5>
                        </div>
                      </Card.Title>

                      <Card.Text>
                        <div className="d-flex justify-content-center my-3">
                          <div className="d-none">
                            {rating
                              ? (stars = new Array(rating).fill(0))
                              : null}
                          </div>
                          <div>
                            {rating &&
                              stars.map((star) => (
                                <FontAwesomeIcon
                                  className="text-danger mx-2"
                                  icon={faStar}
                                />
                              ))}
                          </div>
                        </div>
                        <i className="review text-muted">"{review.slice(0,150)}"</i>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </>
      )}
    </div>
  );
}
