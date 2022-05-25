import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../firebase.init";
import StarRating from "./StarRating";

const ReviewModal = (props) => {
  const [authUser] = useAuthState(auth);

  const { reviewsDeliver, reviewOrderId, setReloadModal, reloadModal } = props;

  const [currentValue, setCurrentValue] = useState(0);
  const [reviewText, setReviewText] = useState("");

  console.log(currentValue);

  // find the order from reviewsDeliver array by reviewOrderId
  const review = reviewsDeliver?.find((review) => review._id === reviewOrderId);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="text-center text-muted">
            Please Provide Your Valuable Review For{" "}
            <span className="text-success">{review?.toolName}</span>
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body closeButton>
        <div className="my-4">
          <StarRating
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          ></StarRating>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Leave A Review</Form.Label>
            <Form.Control
              onChange={(event) => {
                setReviewText(event.target.value);
              }}
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-danger d-block mx-auto px-5"
          onClick={() => {
            props.onHide();

            window.scrollTo(0, 0);
          }}
        >
          Cancel
        </Button>
        <Button
          className="btn btn-success d-block mx-auto px-5"
          onClick={async () => {
            fetch("https://manufacturer-xpart.herokuapp.com/review", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                email: `${authUser?.email}`,
              },
              body: JSON.stringify({
                user: authUser?.displayName,
                userImage: authUser?.photoURL
                  ? authUser?.photoURL
                  : "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png",
                review: reviewText,
                rating: currentValue,
              }),
            })
              .then((response) => response.json())
              .then((json) => {
                console.log(json);
                fetch(`https://manufacturer-xpart.herokuapp.com/orders/${reviewOrderId}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                      "accessToken"
                    )}`,
                    email: `${authUser?.email}`,
                  },
                  body: JSON.stringify({
                    isReviewed: true,
                  }),
                })
                  .then((response) => response.json())
                  .then((json) => {
                    console.log(json);
                    props.onHide();
                    toast.success("Review Added Successfully");
                setReloadModal(!reloadModal);

                  });
              });
          }}
        >
          Submit Review
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewModal;
