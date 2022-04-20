import React, { useContext } from "react";
import "./CheckOut.css";
import { useForm } from "react-hook-form";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { AllContext } from "../App/App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const CheckOut = () => {

  //Using React Firebase Hook
  const [authUser] = useAuthState(auth);
  const params = useParams();

  // Using React Router DOM
  const navigate = useNavigate();

  // Using React Hook Form
  const { register, handleSubmit } = useForm();
  console.log(register);

   const onSubmit = () => {
     navigate("/thankyou");
   };

  // Using Context API
  const { services } = useContext(AllContext);

  //Using Array Find Method For Dynamic Checkout Route
  const chosenService = services.find(
    (service) => service.service === params.service
  );

  // Using FUnction to Return to Previous Page
  const handleGoBack = () => {
    navigate("/services");
  };

  return (
    <div>
      <div className="back-btn" onClick={handleGoBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center container">
        <div className="checkout-service">
          <Card className="mx-auto checkout-service-card">
            <Card.Img variant="top" src={chosenService?.img} />
            <Card.Body>
              <Card.Title>{chosenService?.service}</Card.Title>
              <Card.Text>{chosenService?.description.slice(0, 110)}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="mx-auto my-5 checkout-container">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="mb-lg-0 mb-5 text-center">
              Please Fill Up The Form
            </h1>
            <Form.Group
              className="mb-3 mt-5"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="checkout-labels">Your Name</Form.Label>
              <Form.Control
                disabled={authUser?.displayName ? true : false}
                value={authUser?.displayName}
                type="text"
                placeholder="First Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="checkout-labels">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="checkout-labels">Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Your Phone Number"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="checkout-labels">
                Your Chosen Service
              </Form.Label>
              <Form.Control
                disabled
                type="text"
                placeholder="Your Chosen Service"
                value={chosenService?.service}
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="checkout-labels">Your Address</Form.Label>
              <Form.Control as="textarea" rows={3} required />
            </Form.Group>
            <Button
              className="px-5 d-block mx-auto checkout-labels"
              variant="primary"
              type="submit"
            >
              Confirm Booking
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
