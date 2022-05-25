import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import "./SignUp.css";

const SignUp = () => {
  //Declaring State to Keep The values of Input Field
  const [name, setName] = useState("");
  console.log(name);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);

  //Using React Firebase Hooks
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
    {
      sendEmailVerification: true,
    }
  );

  //Using React Router DOM
  const navigate = useNavigate();

  //Using Function to Redirect Login Route
  const handleGoToLogin = () => {
    navigate("/login");
  };

  //Using Function to Sign Up User with Email and Password
  const handleSignUp = (e) => {
    e.preventDefault();

    //Validating Password and Confirm Password
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      ) === false
    ) {
      setError(
        "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character"
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Password and Confirm Password does not match");
      return;
    }

    //Creating User with Email and Password
    createUserWithEmailAndPassword(email, password);
    navigate("/");
  };

  return (
    <div className="container mx-auto my-5 sign-up-container login-box">
      <Form onSubmit={handleSignUp} className="form-container">
        <h1 className="text-center text-primary">Register</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            name="name"
            type="text"
            placeholder="Enter Your Name"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={() => setCheck(!check)}
            type="checkbox"
            label="Accept Terms and Conditions"
          />
        </Form.Group>
        <h6 className="my-3">
          Already have an account?
          <span
            onClick={handleGoToLogin}
            className="text-primary create-new-account ms-2"
          >
            Login
          </span>
        </h6>
        <div className=" d-flex justify-content-center align-items-center">
          <Button
            className="px-5"
            disabled={check ? false : true}
            variant="primary"
            type="submit"
          >
            Sign Up
          </Button>
        </div>
      </Form>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
