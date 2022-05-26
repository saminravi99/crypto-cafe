import { useEffect, useState } from 'react';

const useBlogs = () => {
  //Declaring React States
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect Hook to Fetch blogs data from server api
  useEffect(() => {
    setIsLoading(true);
    fetch("https://manufacturer-xpart.herokuapp.com/blogs", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        email: `${localStorage.getItem("email")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
  }, []);

  return [blogs, setBlogs, isLoading];
};

export default useBlogs;