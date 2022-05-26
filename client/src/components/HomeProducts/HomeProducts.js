import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
// import useAdmin from "../hooks/useAdmin";
import Loading from "../Loading/Loading";
import "./HomeProducts.css";

const HomeProducts = () => {
  const [authUser] = useAuthState(auth);
  // const [admin] = useAdmin(user);
  const navigate = useNavigate();

  const { isLoading, data: tools } = useQuery("toolsData", () =>
    fetch("https://manufacturer-xpart.herokuapp.com/tools", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        email: `${authUser?.email}`,
      },
    }).then((res) =>
      res.json()
    )
  );

   const [admin, setAdmin] = useState({});
   const [user, setUser] = useState({});

   useEffect(() => {
     fetch(
       `https://manufacturer-xpart.herokuapp.com/admin/${authUser?.email}`,
       {
         method: "GET",
         headers: {
           "content-type": "application/json",
           authorization: `Bearer ${localStorage.getItem("accessToken")}`,
           email: `${authUser?.email}`,
         },
       }
     )
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         setAdmin(data);
       });

     fetch(`https://manufacturer-xpart.herokuapp.com/user/${authUser?.email}`, {
       method: "GET",
       headers: {
         "content-type": "application/json",
         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
         email: `${authUser?.email}`,
       },
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         setUser(data);
       });
   }, [authUser?.email]);

 if (isLoading) {
   return <Loading />;
 }

  //Reverse an tools array
  const slicedTools = [...tools]?.reverse().slice(0, 6);
  console.log(slicedTools);

  const handleConfirmPurchase = (id) => {
    navigate(`/confirm-purchase/${id}`);
    window.scrollTo(0, 0);
  };

  const singleTool = slicedTools.map(
    ({
      _id,
      toolName,
      toolImage,
      toolPrice,
      minOrder,
      availableQuantity,
      toolDescription,
    }) => {
      return (
        <div className="col-md-4 col-sm-6 mb-4  tool-card">
          <Card className="shadow " style={{ width: "21rem", height: "490px" }}>
            <Card.Img className="tool-img" variant="top" src={toolImage} />
            <Card.Body>
              <Card.Title className="text-center  tool-header">
                {toolName}
              </Card.Title>
              <Card.Text className="tool-body">
                <p className="text-muted">{toolDescription.slice(0, 60)}...</p>
                <p className="mb-2">
                  <strong>Price: Tk. {toolPrice}</strong> (per piece)
                </p>
                <small>
                  <strong className="text-danger">
                    Minimum Order Quantity: {minOrder}
                  </strong>
                </small>
                <div>
                  <small className="text-muted">
                    <strong>Available Quantity: {availableQuantity}</strong>
                  </small>
                </div>
              </Card.Text>

              {(user?.role === "user" &&
                  admin?.role !==
                    "admin") || !authUser ? (
                <Button
                  onClick={() => handleConfirmPurchase(_id)}
                  className="d-block   confirm-order-button"
                  variant="success"
                >
                  Confirm Order
                </Button>
              )
              : null}
            </Card.Body>
          </Card>
        </div>
      );
    }
  );
  

  //  if(adminLoading){
  //     return <Loading />;
  //  }
 
  return (
    <div>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="row container mx-lg-auto ">{singleTool}</div>
      )}
    </div>
  );
};

export default HomeProducts;
