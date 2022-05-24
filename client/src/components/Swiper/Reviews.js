import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App/App.css";
import "./Review.css"

// import required modules
import { Autoplay, Navigation } from "swiper";
import useReviews from "../hooks/useReviews";
import { Card } from "react-bootstrap";
import Loading from "../Loading/Loading";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [reviews, setReviews, isLoading] = useReviews();


  const reversedReviews = [...reviews].reverse();

 

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Swiper
            onSwiper={setSwiperRef}
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
              }
            }}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <div>
              {reversedReviews.map(({ user, review, userImage }) => (
                <SwiperSlide key={review?.id}>
                  <Card className=" shadow border-0 ">
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
                        <i className="review text-muted">"{review}"</i>
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
