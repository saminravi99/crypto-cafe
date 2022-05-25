import  { useEffect, useState } from 'react';

const useBlogs = () => {
  //Declaring React States
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect Hook to Fetch blogs data from server api
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
  }, []);

  return [blogs, setBlogs, isLoading];
};

export default useBlogs;