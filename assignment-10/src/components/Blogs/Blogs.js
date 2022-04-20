import React, { useContext } from 'react';
import './Blogs.css'
import { AllContext } from '../App/App';
import EachBlog from '../EachBlog/EachBlog';



const Blogs = () => {

    // Using Context API
    const {blogs} = useContext(AllContext);
    


    const blog = blogs.map(blog => {
        return(
            <EachBlog
                key={blog.id}
                {...blog}
            ></EachBlog>
        )
    })



    return (
        <div className="row mx-auto my-lg-0 my-4">
            {blog}
        </div>
    );
};

export default Blogs;