import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import auth from "../firebase.init";

const useTools = (reload, reloadModal) => {

  
  //Declaring State
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // React Firebase Hook
  const [authUser] = useAuthState(auth);

  //React Pathname Hook
  const { pathname } = useLocation();


  // React Hook for Fetching All Books From The Server API
  useEffect(() => {
    setIsLoading(true);
    fetch("https://manufacturer-xpart.herokuapp.com/tools", {
      headers: {
        "Content-Type": "application/json",
        email: `${authUser?.email}`,
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setTools(json);
        setIsLoading(false);
      });
  }, [pathname, authUser, reload, reloadModal]);

  return [tools, setTools, isLoading];
};

export default useTools;
