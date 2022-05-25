import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import auth from "../firebase.init";


const useReviewDeliver = (reloadModal) => {
  //Declaring State
  const [reviewsDeliver, setReviewsDeliver] = useState([]);
  console.log(reviewsDeliver);
  const [isLoading, setIsLoading] = useState(false);

  // React Firebase Hook
  const [authUser] = useAuthState(auth);

  //React Pathname Hook
  const { pathname } = useLocation();

  // React Hook for Fetching All Books From The Server API
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/orders/${authUser?.email}/true`, {
      headers: {
        "Content-Type": "application/json",
        email: `${authUser?.email}`,
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setReviewsDeliver(json);
        setIsLoading(false);
      });
  }, [pathname, authUser, reloadModal]);

  return [reviewsDeliver, setReviewsDeliver, isLoading];
};

export default useReviewDeliver;
