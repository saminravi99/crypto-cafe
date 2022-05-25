import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const CancelModal = (props) => {
    const {boolean, setProceed, setBoolean} = props;
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Do You Want to Cancel Your Order?
          </Modal.Title>
        </Modal.Header>
       
        <Modal.Footer>
          <Button className="btn btn-danger d-block mx-auto px-5 py-2" onClick={() => {props.onHide()
          setProceed(true);
          setBoolean(!boolean);
          window.scrollTo(0, 0);
        }}>Yes</Button>
        <Button onClick={() => {props.onHide()}}className="btn btn-success d-block mx-auto px-5 py-2">No</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default CancelModal;