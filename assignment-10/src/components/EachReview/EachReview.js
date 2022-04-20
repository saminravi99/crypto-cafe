import React from 'react';
import "./EachReview.css";

const EachReview = (props) => {

    // Using Props from Context API
    const {name, date, image, review} = props;

    return (
      <div className="col-md-4 col-12 col-sm-6 my-lg-0 my-3">
        <div className="card">
          <div className="card-body">
            <p className="card-text">"{review}"</p>
            <div className="d-flex">
              <div>
                <img className="client-img" src={image} alt="client" />
              </div>
              <div className="ms-3">
                <h5 className="pb-0 card-title">{name}</h5>
                <p className=" pb-0 card-text">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EachReview;