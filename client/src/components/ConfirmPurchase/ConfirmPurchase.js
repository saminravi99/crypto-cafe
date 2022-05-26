import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";
import "./ConfirmPurchase.css";

const ConfirmPurchase = () => {
  const navigate = useNavigate();
  const [authUser] = useAuthState(auth);
  const params = useParams();
  const [error, setError] = useState(null);

  const [tool, setTool] = useState([]);
  const [reload, setReload] = useState(false);
  const [totalPrice, setTotalPrice] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log(address, phoneNumber);
  const handleGoBack = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setReload(true);
    axiosPrivate
      .get(`https://manufacturer-xpart.herokuapp.com/tools/${params.id}`, {
        headers: {
          email: authUser?.email,
        },
      })
      .then((response) => {
        const { data } = response;
        setTool(data);
        console.log(data);
        setReload(false);
      });
  }, [authUser, params.id]);

  const {
    toolName,
    toolImage,
    toolDescription,
    availableQuantity,
    toolPrice,
    minOrder,
  } = tool;

  const [requiredQuantity, setRequiredQuantity] = useState("");

  useEffect(() => {
    console.log(totalPrice);
     setTotalPrice(parseInt(toolPrice) * parseInt(requiredQuantity));
     if (parseInt(requiredQuantity) < parseInt(minOrder)) {
       setError("Minimum order is " + minOrder);
     } else if (parseInt(requiredQuantity) > parseInt(availableQuantity)) {
       setError("Not enough quantity");
     } else {
       setError(null);
     }
  }
  , [totalPrice, reload, requiredQuantity, toolPrice, availableQuantity, minOrder]);
    

  useEffect(() => {
     setRequiredQuantity(minOrder);
    
  }, [minOrder]);


  const userOrder = {
    userName: authUser?.displayName,
    userEmail: authUser?.email,
    toolName,
    quantity: requiredQuantity,
    toolImage,
    toolDescription,
    availableQuantity,
    toolPrice,
    minOrder,
    requiredQuantity,
    totalPrice,
    address,
    phoneNumber
  };

  console.log(userOrder);
  const handleSubmit = () => {
   if(address && phoneNumber) {
      axiosPrivate
        .post("https://manufacturer-xpart.herokuapp.com/orders", userOrder, {
          headers: {
            email: authUser?.email,
          },
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          if (data.insertedId) {
            console.log("Order added to database");
            setReload(!reload);
            navigate("/dashboard/my-orders");
            window.scrollTo(0, 0);
            toast.success("Order Placed Successfully");
          }
        });
   }
    else{
      toast.error("Please fill all the details");
    }
  };
  
  if(reload){
    return <Loading></Loading>
  }

  return (
    <div>
      <div className="back-btn" onClick={handleGoBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>

      <div className="d-flex flex-lg-row flex-column justify-content-around align-items-center   container ">
        <div className="confirm-purchase-info mx-lg-5">
          <div className="card mx-auto mt-lg-5 mb-5">
            <div className="mx-auto">
              <img className="tool-img" src={toolImage} alt="bookName" />
            </div>
            <div className="card-body-update">
              <h3 className="card-title text-center">{toolName}</h3>
              <div className="d-flex justify-content-around align-items-center my-3">
                <h6 className="card-text mb-0 mx-3">
                  <small>Minimum Order : {minOrder} pieces</small>
                </h6>
                <p className="card-text tool-price ">
                  <small>Tk. {toolPrice} per piece</small>
                </p>
              </div>
              <p className="card-text card-description px-5">
                <span className="description">
                  {" "}
                  <i>{toolDescription?.slice(0, 100)}</i>{" "}
                </span>
              </p>
              <h6 className="card-text mb-3 text-center">
                {parseInt(availableQuantity) === 0 ? (
                  <span className="text-danger">
                    <strong>Out Of Stock</strong>
                  </span>
                ) : (
                  <small className="text-muted">
                    <strong>Available Quantity: {availableQuantity}</strong>
                  </small>
                )}
              </h6>
            </div>
          </div>
        </div>
        <div className="update-stock-form mt-lg-0 mt-5">
          <Form>
            <h1 className="mb-lg-0 mb-5 text-center">
              Please Confirm Your Purchase Order For{" "}
              <span className="text-primary">"{toolName}"</span>
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
                value={authUser?.email}
                required
                disabled={authUser?.email ? true : false}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="checkout-labels">Selected Tool</Form.Label>
              <Form.Control
                disabled
                value={toolName}
                type="text"
                placeholder="Your Selected Tool"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="checkout-labels">
                Number of Pieces You Want
              </Form.Label>
              <Form.Control
                value={requiredQuantity}
                onChange={(e) => {
                  setReload(!reload);
                  setRequiredQuantity(e.target.value);
                }}
                type="number"
                name="quantity"
                placeholder="Number of Stock"
                required
                disabled={parseInt(availableQuantity) === 0 ? true : false}
              />
              <p className="text-danger mt-2">
                {error && requiredQuantity ? error : null}
              </p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="checkout-labels">
                Total Price (BDT)
              </Form.Label>
              <Form.Control
                disabled
                value={
                  requiredQuantity &&
                  parseInt(requiredQuantity) >= parseInt(minOrder) &&
                  parseInt(requiredQuantity) <= parseInt(availableQuantity)
                    ? totalPrice
                    : toolPrice * minOrder
                }
                onChange={(e) => {
                  setTotalPrice(
                    parseInt(toolPrice) * parseInt(requiredQuantity)
                  );
                }}
                type="number"
                name="quantity"
                placeholder="Number of Stock"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Contact Number</Form.Label>
              <Form.Control
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                required
                type="number"
                placeholder="Your Phone Number"
              />
            </Form.Group>
            <Form.Group
              required
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Address</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </div>
      </div>

      <div className="my-5">
        <button
          onClick={handleSubmit}
          disabled={
            error ? true : parseInt(availableQuantity) === 0 ? true : false
          }
          className="btn btn-success d-block mx-auto px-5"
        >
          Confirm Your Order
        </button>
      </div>
    </div>
  );
};

export default ConfirmPurchase;
