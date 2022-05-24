import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useReviewDeliver from '../hooks/useReviewDeliver';
import Loading from '../Loading/Loading';

const AddReview = () => {
    const [reviewsDeliver, setReviewsDeliver, isLoading] = useReviewDeliver();

    console.log(reviewsDeliver);

  const [authUser] = useAuthState(auth);

    const reversedReviews = [...reviewsDeliver].reverse();

    const singleReview = reversedReviews.map(
      ({
        toolName,
        toolPrice,
        quantity,
        totalPrice,
        isDelivered,
        isPaid,
      }, index) => {
        return (
          <Card className="my-3">
            <Card.Header>
              <small>
                <strong>User Name: {authUser.displayName}</strong>
              </small>
              <p>
                <small>
                  <strong>User Email: {authUser.email}</strong>
                </small>
              </p>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <div className="d-flex align-items-center">
                  <div>
                    <h2>
                      {" "}
                      {index + 1}. {toolName}
                    </h2>
                  </div>
                    <p className="mb-0 ms-3">
                      <small>
                        <i className="px-3 py-1 me-3  bg-success text-white rounded-pill">
                          Delivered
                        </i>
                      </small>
                    </p>
                 
                </div>
              </Card.Title>
              <Card.Text>
                <p>
                  <strong>Price: Tk. {toolPrice}</strong> (per piece)
                </p>
                <p>
                  <strong>Quantity: {quantity}</strong>
                </p>
                <p>
                  <strong>Total Price: Tk. {totalPrice}</strong>
                </p>
              </Card.Text>
              <div className="d-flex justify-content-around">
                <div>
                  {isPaid ? (
                    <p className="px-3 py-1 bg-success text-white rounded-pill">
                      <strong>Paid</strong>
                    </p>
                  ) : (
                    <Button variant="success">Pay Now</Button>
                  )}
                </div>
                <div>
                  {isDelivered && (
                    <div className="d-flex align-items-center ">
                      <div>
                        <Button className="rounded-pill" variant="primary">
                          Give A Review
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>
        );
      }
    );

    return (
      <div>
        <h3 className="text-center text-success mb-4">Give Your Valuable Reviews Here</h3>
        <div>
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <div className="container">{singleReview}</div>
          )}
        </div>
      </div>
    );
};

export default AddReview;