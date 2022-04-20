import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Thankyou.css"

const Thankyou = () => {

  // Using From React Router DOM
    const navigate = useNavigate();

    //Using Function to redirect to Home Page
    const handleThankyou= () => {
        navigate("/");
    }
    return (
      <div className="d-flex  justify-content-center align-items-center  thankyou-container">
        <div>
          <div className="my-3 thankyou-card">
            <h1>Thankyou For Booking</h1>
            <h3>You will be contacted soon</h3>
          </div>
          <button onClick={handleThankyou} className="btn btn-primary d-block mx-auto">
            Return To Home Page
          </button>
        </div>
      </div>
    );
};

export default Thankyou;