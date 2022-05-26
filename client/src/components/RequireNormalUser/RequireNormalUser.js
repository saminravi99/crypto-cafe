import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";

const RequireNormalUser = ({ children }) => {
  // Using React Router DOM
  let location = useLocation();

  // Using React Firebase Hooks
  const [authUser, authLoading] = useAuthState(auth);


   const [admin, setAdmin] = useState({});
   const [user, setUser] = useState({});
   console.log(user);
   useEffect(() => {
     fetch(
       `https://manufacturer-xpart.herokuapp.com/admin/${authUser?.email}`,
       {
         method: "GET",
         headers: {
           "content-type": "application/json",
           authorization: `Bearer ${localStorage.getItem("accessToken")}`,
           email: `${authUser?.email}`,
         },
       }
     )
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         setAdmin(data);
       });

     fetch(`https://manufacturer-xpart.herokuapp.com/user/${authUser?.email}`, {
       method: "GET",
       headers: {
         "content-type": "application/json",
         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
         email: `${authUser?.email}`,
       },
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         setUser(data);
       });
   }, [authUser?.email]);

  if (authLoading) {
    return <Loading></Loading>;
  }
  if (user?.role === "user" && admin?.role === "admin")  {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireNormalUser;
