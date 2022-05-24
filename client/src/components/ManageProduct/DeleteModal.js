import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteModal = (props) => {
  const { boolean, setProceed, setBoolean } = props;
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
      <Modal.Body closeButton>
        <h3 className="text-center ">Do You Want to Remove This Product?</h3>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-danger d-block mx-auto px-5"
          onClick={() => {
            props.onHide();
            setProceed(true);
            setBoolean(!boolean);
            window.scrollTo(0, 0);
          }}
        >
          Yes
        </Button>
        <Button
          className="btn btn-success d-block mx-auto px-5"
          onClick={() => {
            props.onHide();
            
          }}
        >
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
