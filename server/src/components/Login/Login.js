import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import toast from "react-hot-toast";
import Loading from "../Loading/Loading";

const Login = () => {
  //Declaring State to Keep The values of Input Field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //Using React Firebase Hooks
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, resetEmailSending, resetError] =
    useSendPasswordResetEmail(auth);

  //Using React Router DOM
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  //Using Function to Sign Up Route
  const handleCreateAccount = () => {
    navigate("/sign-up");
  };

  //Using Function to Sign In USer with Email and Password
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  //Using React Built in Hook to Show Custom Error Message for wrong password or invalid email/user
  useEffect(() => {
    if (
      signInError &&
      signInError?.message === "Firebase: Error (auth/user-not-found)."
    ) {
      setError("User Does Not Exist. Please Sign Up");
      toast.error("User Does Not Exist. Please Sign Up");
    } else if (
      signInError &&
      signInError?.message === "Firebase: Error (auth/wrong-password)."
    ) {
      setError("Wrong Password");
      toast.error("Wrong Password");
    }
  }, [signInError]);

  //Using React Built in Hook to Show Custom Error Message and Toast Message for successful login
  useEffect(() => {
    if (signInUser) {
      navigate(from, { replace: true });
      toast.success("Login Successful");
    }
  }, [signInUser, navigate, from]);

  // Using Function to Reset password if User forgets password
  const handleForgetPassword = async () => {
    await sendPasswordResetEmail(email);
  };

  //Using React Built in Hook to Show Custom Error Message and Toast Message for Reset Password
  useEffect(() => {
    if (resetEmailSending) {
      toast.success("Sending Reset Email");
    }
    if (resetError) {
      setError("Please Enter a Valid Email");
      toast.error("Please Enter a Valid Email");
      return;
    }
  }, [resetError, resetEmailSending]);

  // Using setTimeout to remove the error message after some time
  setTimeout(() => {
    if (email) {
      setError("");
    }
  }, 7000);

  return (
    <div className="login-box">
      {signInLoading ? (
        <Loading></Loading>
      ) : (
        <div className="mx-auto mt-5 login-container">
          <Form onSubmit={handleLogin} className="form-container">
            <h1 className="text-center text-primary">Sign In</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
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
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            <p className="text-danger">{error}</p>

            <p
              className="text-primary forget-pass"
              onClick={handleForgetPassword}
            >
              Forget Password?
            </p>

            <h6>
              New to Derma Care?{" "}
              <span
                onClick={handleCreateAccount}
                className="text-primary create-new-account"
              >
                Create a new account
              </span>
            </h6>

            <div className="d-flex justify-content-center mt-3 ">
              <Button className="px-5" variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>

          <SocialLogin></SocialLogin>
        </div>
      )}
    </div>
  );
};

export default Login;
