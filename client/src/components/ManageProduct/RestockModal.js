import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../firebase.init";

const RestockModal = (props) => {
  const {  tools, restockId, setReloadModal } = props;
  console.log(tools);
  console.log(restockId);

  //find the product form tools array by restock IDs
  const product = tools.find((tool) => tool._id === restockId);
  console.log(product);
  const [quantity, setQuantity] = useState("");
  const [authUser] = useAuthState(auth);


  const updatedTool = {
    availableQuantity: (parseInt(product?.availableQuantity) + parseInt(quantity)).toString(),
  };

  const handleUpdateStock = (e) => {
      setReloadModal(true);
    fetch(`https://manufacturer-xpart.herokuapp.com/product/${restockId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        email: `${authUser?.email}`,
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updatedTool),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        props.onHide();
        toast.success("Product Restocked Successfully");
        setReloadModal(false);
      });
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tool Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Hammer"
              value={product?.toolName}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Available Stock</Form.Label>
            <Form.Control
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              type="number"
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-danger d-block mx-auto px-5"
          onClick={() => {
            props.onHide();
          }}
        >
          Cancel Restock
        </Button>
        <Button
          onClick={handleUpdateStock}
          className="btn btn-success d-block mx-auto px-5"
          variant="primary"
        >
          Restock
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RestockModal;
