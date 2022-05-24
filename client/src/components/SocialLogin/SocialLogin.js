import React from "react";
import {
  useAuthState,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import "./SocialLogin.css";

const SocialLogin = () => {
  //Using React Firebase Hooks
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  // Using React Firebase Hooks
  const [authUser] = useAuthState(auth);

  //Using React Router DOM
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  //Using Function to Sign In Using Google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
      })
      .then(() => {
        if (!authUser) {
          toast.success("Successfully Signed In With Google");
        }
      });
  };

  //Using Function to Sign In Using Facebook
  const handleFacebookSignIn = () => {
    signInWithFacebook()
      .then(() => {
        navigate(from, { replace: true });
      })
      .then(() => {
        if (!authUser) {
          toast.success("Successfully Signed In With Facebook");
        }
      });
  };

  //Using Function to Sign In Using Github
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then(() => {
        navigate(from, { replace: true });
      })
      .then(() => {
        if (!authUser) {
          toast.success("Successfully Signed In With Github");
        }
      });
  };

  return (
    <div className="socials">
      <div className="d-flex  justify-content-center align-items-center my-3">
        <div className="line"></div>
        <p className="pb-0 mb-0 mx-3">or</p>
        <div className="line"></div>
      </div>

      <div className="social-btn">
        <div className="social-button-container">
          <button
            onClick={handleGoogleSignIn}
            className="d-block mx-auto mx-0 google-btn"
          >
            Continue with Google
          </button>
        </div>
        <div>
          <button
            onClick={handleFacebookSignIn}
            className="d-block mx-auto facebook-btn"
          >
            Continue with Facebook
          </button>
        </div>
        <div>
          <button
            onClick={handleGithubSignIn}
            className="d-block mx-auto github-btn"
          >
            Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
