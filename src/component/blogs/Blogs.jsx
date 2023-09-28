import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddBookmark,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl mt-4 mb-4"> Number of Blogs: {blogs.length} </h1>
           {
            blogs.map(blog => <Blog 
                key={blog.id} 
                blog={blog}
                handleMarkAsRead = {handleMarkAsRead}
                handleAddBookmark={handleAddBookmark}
                ></Blog>)
           }
        </div>
    );
};
Blogs.prototype = {
    handleAddBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func,
}
export default Blogs;