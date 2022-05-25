import React from 'react';
import { Form } from 'react-bootstrap';
import "./Subscribe.css"

const Subscribe = () => {
    return (
      <div className="d-flex flex-column flex-lg-row  justify-content-around align-items-center">
        <div className="mb-4 mb-lg-0">
          <img
            className="subscribe-img"
            src="https://img.freepik.com/free-vector/team-engineers-workers-controlling-oil-gas-pipeline_74855-20378.jpg?t=st=1653160607~exp=1653161207~hmac=515ca605ab42597efbc49ce4956076687d562ab6bd1a4425d726e100121a1f3a&w=740"
            alt="subscribe"
          />
        </div>
        <div className="subscribe-form">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Feedback</Form.Label>
              <Form.Control as="textarea" rows={3} />
              <div>
                  <button onClick={e => e.preventDefault()} className="btn btn-success d-block mx-auto my-4">Submit</button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
};

export default Subscribe;