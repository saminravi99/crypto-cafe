import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const CancelModal = (props) => {
    const {boolean, setProceed, setBoolean} = props;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Do You Want to Cancel Your Order?
          </Modal.Title>
        </Modal.Header>
       
        <Modal.Footer>
          <Button onClick={() => {props.onHide()
          setProceed(true);
          setBoolean(!boolean);
          window.scrollTo(0, 0);
        }}>Yes</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default CancelModal;