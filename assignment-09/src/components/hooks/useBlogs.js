import { useEffect, useState } from "react";


const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    // console.log(blogs)

    useEffect(() => {
        fetch('blogs.json')
            .then(response => response.json())
            .then(json => setBlogs(json))
            .catch(error => console.log(error));
    }
    , [])
    
    return blogs;
}

export default useBlogs;