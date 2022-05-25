import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';
import useTools from '../hooks/useTools';
import Loading from '../Loading/Loading';

const AllProducts = () => {
    const [tools, setTools, isLoading] = useTools();
  const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const reversedTools = [...tools].reverse();

  const [admin] = useAdmin(user);
    
    const handleConfirmPurchase = (id) => {
      navigate(`/confirm-purchase/${id}`);
      window.scrollTo(0, 0);
    };

    const singleTool = reversedTools.map(
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
          <div className="col-md-4 col-sm-6 mb-4 tool-card">
            <Card
              className="shadow "
              style={{  height: "490px" }}
            >
              <Card.Img className="tool-img" variant="top" src={toolImage} />
              <Card.Body>
                <Card.Title className="text-center  tool-header">
                  {toolName}
                </Card.Title>
                <Card.Text className="tool-body">
                  <p className="text-muted">
                    {toolDescription.slice(0, 60)}...
                  </p>
                  <p className="mb-2">
                    <strong>Price: Tk. {toolPrice}</strong> (per piece)
                  </p>
                  <small>
                    <strong className="text-muted">
                      Minimum Order Quantity: {minOrder}
                    </strong>
                  </small>
                  <div>
                    {parseInt(availableQuantity) === 0 ? (
                      <small className="text-danger">
                        <strong>Out Of Stock</strong>
                      </small>
                    ) : (
                      <small className="text-muted">
                        <strong>Available Quantity: {availableQuantity}</strong>
                      </small>
                    )}
                  </div>
                </Card.Text>

                {!admin && (
                  <Button
                    onClick={() => handleConfirmPurchase(_id)}
                    className="d-block   confirm-order-button"
                    variant="success"
                  >
                    Confirm Order
                  </Button>
                )}
              </Card.Body>
            </Card>
          </div>
        );
      }
    );
    return (
      <div className="my-5">
        <div>
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <div className="row container mx-auto ">{singleTool}</div>
          )}
        </div>
      </div>
    );
};

export default AllProducts;