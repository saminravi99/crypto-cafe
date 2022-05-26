import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [authUser] = useAuthState(auth);

  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    console.log(email);
    if (email) {
      fetch(`https://manufacturer-xpart.herokuapp.com/verify/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          email: `${authUser?.email}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);

  console.log(admin);

  return [admin, adminLoading];
};

export default useAdmin;
