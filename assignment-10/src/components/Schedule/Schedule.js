import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import "./Schedule.css"

const Schedule = () => {

  // Using React Firebase Hook
    const [authUser] = useAuthState(auth);


  // Using React router DOM
    const navigate = useNavigate();


  // Using React Hook Form
    const { register, handleSubmit } = useForm();
    console.log(register);
    const onSubmit = () => {
      navigate("/thankyou");
    };

    return (
      <div className="schedule-container">
        <div>
          <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center container">
            <div className="mx-auto my-5 checkout-container">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="mb-lg-0 mb-5 text-center">
                  Please Fill Up The Form To Confirm Your Schedule
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
                    placeholder="Enter Your Name"
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="checkout-labels">
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="checkout-labels">
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Your Phone Number"
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="checkout-labels">
                    Your Address
                  </Form.Label>
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
      </div>
    );
};

export default Schedule;