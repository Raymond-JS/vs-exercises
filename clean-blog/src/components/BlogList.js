import React from "react"
import BlogPost from "./BlogPost"
import content from "../content"

function BlogList() {
    let blogs = content.map(blog => <BlogPost key={blog.title} title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date} />)
    return (
        <div className="mainContent">
            {blogs}
            <div className="clearfix">
                <button className="btn float-right">OLDER POSTS <i class="fas fa-long-arrow-alt-right"></i></button>
            </div>
            
        </div>
    )
}

export default BlogList