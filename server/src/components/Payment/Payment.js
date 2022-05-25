import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase.init';
import useOrders from '../hooks/useOrders';
import "./Payment.css"
import PaymentModal from './PaymentModal';

const Payment = () => {
  const [modalShowPayment, setModalShowPayment] = React.useState(false);

  const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1);
    };

    const {id} = useParams();
  const [authUser] = useAuthState(auth);

    const [orders] = useOrders(authUser?.email)

    const handleProceedPayment = (id) => {
        setModalShowPayment(true);
    }
    //find the order form orders array by order ID
    const requiredOrder = orders.find(order => order._id === id);
    return (
      <div className="">
        <div className="back-btn" onClick={handleGoBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="d-flex justify-content-center align-items-center payment-div ">
          <div>
            <Card className="text-center mb-5 mx-auto">
              <Card.Header>
                <h2 className="text-danger">
                  Please Pay For {requiredOrder?.toolName}
                </h2>
              </Card.Header>
              <Card.Body className="h-50">
                <h5>Payment Amount : Tk. {requiredOrder?.totalPrice}</h5>
                <Button  onClick={() => handleProceedPayment()} className="d-block mx-auto mt-4" variant="success">
                  Proceed
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <PaymentModal
          show={modalShowPayment}
          requiredOrder={requiredOrder}
          onHide={() => {
            setModalShowPayment(false);
          }}
        ></PaymentModal>
      </div>
    );
};

export default Payment;