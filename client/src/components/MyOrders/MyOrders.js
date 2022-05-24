import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useLocation} from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../firebase.init";
// import useOrders from "../hooks/useOrders";
import Loading from "../Loading/Loading";
import CancelModal from "./CancelModal";

const MyOrders = () => {
  // console.log(authUser);

  // const [orders, setOrders, isLoading] = useOrders(authUser?.email);
  const [boolean, setBoolean] = React.useState(false);

  const [reload, setReload] = useState(false);

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [proceed, setProceed] = React.useState(false);


  // React Firebase Hook
  const [authUser] = useAuthState(auth);

  //React Pathname Hook
  const { pathname } = useLocation();

  // React Hook for Fetching All Books From The Server API
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/orders/${authUser?.email}`, {
      headers: {
        "Content-Type": "application/json",
        email: `${authUser?.email}`,
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setOrders(json);
        setIsLoading(false);
      });
  }, [pathname, authUser, reload, boolean, proceed]);

  const reversedOrders = [...orders].reverse();


  console.log(reversedOrders);

  const order = reversedOrders.map(
    (
      {
        _id,
        userName,
        userEmail,
        toolName,
        toolPrice,
        quantity,
        totalPrice,
        isDelivered,
        isPaid,
      },
      index
    ) => {
      return (
        <Card className="my-3">
          <Card.Header>
            <small>
              <strong>User Name: {userName}</strong>
            </small>
            <p>
              <small>
                <strong>User Email: {userEmail}</strong>
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
                {isDelivered ? (
                  <p className="mb-0 ms-3">
                    <small>
                      <i className="px-3 py-1 me-3  bg-success text-white rounded-pill">
                        Delivered
                      </i>
                    </small>
                  </p>
                ) : (
                  <p className="mb-0 ms-3">
                    <small>
                      <i className="px-3 py-1 me-3  bg-danger text-white rounded-pill">
                        Pending
                      </i>
                    </small>
                  </p>
                )}
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
                {!isDelivered && (
                  <div className="d-flex align-items-center ">
                    <div>
                      <Button
                        onClick={() => {
                          handleCancelOrder(_id);
                        }}
                        className="rounded-pill"
                        variant="primary"
                      >
                        Cancel Order
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
  const [modalShow, setModalShow] = React.useState(false);
  const [cancelOrderId, setCancelOrderId] = React.useState("");
  console.log(cancelOrderId);
  console.log(proceed);

  useEffect(() => {
    console.log("data deleted");
    if (proceed) {
      setReload(true);
      axiosPrivate
        .delete(`http://localhost:5000/orders/${cancelOrderId}`)
        .then(({data}) => {
          console.log(data);
          if(data.deletedCount){
            toast.success("Order Cancelled Successfully");
          }
        });
      setCancelOrderId("");
      setProceed(false);
    }
  }, [proceed, cancelOrderId, boolean]);

  const handleCancelOrder = (id) => {
    console.log(id);
    setModalShow(true);
    setCancelOrderId(id);
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h1 className="text-center text-muted mb-4">My Orders</h1>
          <div className="container ">{isLoading ? <Loading /> : order}</div>
        </div>
      )}
      <CancelModal
        show={modalShow}
        setProceed={setProceed}
        setBoolean={setBoolean}
        boolean={boolean}
        onHide={() => {
          setModalShow(false);
        }}
      ></CancelModal>
    </div>
  );
};

export default MyOrders;
