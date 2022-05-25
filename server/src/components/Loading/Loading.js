import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center spinner">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
