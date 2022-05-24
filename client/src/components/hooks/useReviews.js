import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import auth from "../firebase.init";

const useReviews = () => {
  //Declaring State
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  const [isLoading, setIsLoading] = useState(false);

  // React Firebase Hook
  const [authUser] = useAuthState(auth);

  //React Pathname Hook
  const { pathname } = useLocation();

  // React Hook for Fetching All Books From The Server API
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/reviews", {
      headers: {
        "Content-Type": "application/json",
        email: `${authUser?.email}`,
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setReviews(json);
        setIsLoading(false);
      });
  }, [pathname, authUser]);

  return [reviews, setReviews, isLoading];
};

export default useReviews;
