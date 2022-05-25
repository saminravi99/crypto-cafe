import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import auth from '../firebase.init';

const useOrders = (email) => {
  //Declaring State
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // React Firebase Hook
  const [authUser] = useAuthState(auth);

  //React Pathname Hook
  const { pathname } = useLocation();

  // React Hook for Fetching All Books From The Server API
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/orders/${email}`, {
      headers: {
        "Content-Type": "application/json",
        email: `${authUser?.email}`,
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setOrders(json);
        setIsLoading(false);
      });
  }, [pathname, authUser, email]);

  return [orders, setOrders, isLoading, setIsLoading];
};

export default useOrders;