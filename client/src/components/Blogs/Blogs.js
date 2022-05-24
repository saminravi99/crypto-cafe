import React, { useEffect, useState } from "react";
import useBlogs from "../hooks/useBlogs";
import Loading from "../Loading/Loading";
import "./Blogs.css";

const Blogs = () => {
 
    const [blogs, setBlogs, isLoading] = useBlogs();

  //Mapping The blogs Array To Render Each Blog
  const blog = blogs.map((blog) => {
    return (
      <div className="container blog-container">
        <div className="col-12 mb-5">
          <div className=" p-0 px-lg-5 py-lg-4 py-3">
            <div className="d-flex align-items-center">
              <div>
                <img className="review-image" src={blog.image} alt="" />
              </div>
              <div className="ms-3">
                <h5 className="mb-2">{blog.name}</h5>
                <h6 className="mb-0">{blog.date}</h6>
              </div>
            </div>

            <h3 className="mt-3 text-center">{blog.blogHeading}</h3>
            <div className="d-flex justify-content-center align-items-center my-4 my-lg-5">
              <img className="blog-image" src={blog.blogImage} alt="" />
            </div>
            <div className="mx-auto blog-detail">
              <p>{blog.blog}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="my-5">
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="row mx-auto my-lg-0 my-4">{blog}</div>
      )}
    </div>
  );
};

export default Blogs;
