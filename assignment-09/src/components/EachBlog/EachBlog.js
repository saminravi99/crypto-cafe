import React from 'react';
import './EachBlog.css'

const EachBlog = (props) => {
    const {name, blog, blogHeading, blogImage, image, date} = props;
    return (
        <div className="container blog-container">
            <div className="col-12 mb-5">
                <div className=" p-0 px-lg-5 py-lg-4 py-3">
                    <div className="d-flex align-items-center">
                        <div>
                             <img className="review-image" src={image} alt="" />
                        </div>
                        <div className="ms-3">
                            <h5>{name}</h5>
                            <h6 >{date}</h6>
                        </div>
                    </div>
                    
                    <h1 className="mt-3 text-center">{blogHeading}</h1>
                    <div className="d-flex justify-content-center align-items-center my-4 my-lg-5">
                        <img className="blog-image"  src={blogImage} alt="" />
                    </div>
                    <div className="mx-auto blog-detail">
                        <p>{blog}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachBlog;