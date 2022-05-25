import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import "./MyProfile.css";

const MyProfile = () => {
  const [authUser] = useAuthState(auth);
  const [reload, setReload] = useState(false);


  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://manufacturer-xpart.herokuapp.com/user/${authUser?.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        email: `${authUser?.email}`,
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
      });
  }, [authUser?.email, reload]);

  setTimeout(() => {
    setReload(!reload);
  }, 1000);

  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  return (
    <div>
      <h3 className="text-muted my-5 text-center">My Profile</h3>
      <div className="d-flex flex-lg-row flex-column justify-content-center ">
        <div className="d-flex justify-content-center">
          <div className="me-lg-5">
            <img
              className="rounded-circle user-photo mb-5"
              src={
                user.photoURL
                  ? user.photoURL
                  : authUser?.photoURL
                  ? authUser?.photoURL
                  : "https://foxdogconsultants.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
              }
              alt="userPhoto"
            />
            <button
              onClick={handleEditProfile}
              className="btn btn-primary d-block mx-auto rounded-pill"
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div className="mx-auto mx-lg-0 my-4 my-lg-0 user-info">
          <p>
            <strong>Your Name:</strong>{" "}
            <span>
              {authUser?.displayName
                ? authUser?.displayName
                : user?.displayName
                ? user?.displayName
                : "N/A"}
            </span>
          </p>
          <p>
            <strong>Your Email: </strong> <span>{authUser?.email}</span>
          </p>
          <p>
            <small>
              <strong>Educational Institution : </strong>{" "}
              <span>{user?.institution}</span>
            </small>
          </p>

          <p>
            <small>
              <strong>Phone Number : </strong> <span>{user?.phoneNumber}</span>
            </small>
          </p>
          <p>
            <small>
              <strong>Address : </strong> <span>{user?.address}</span>
            </small>
          </p>
          <p>
            <small>
              <strong>Date of Birth: </strong> <span>{user?.dateOfBirth}</span>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
