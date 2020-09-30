import React from "react"



function BlogPost(props) {
  
  return (
      <div className="single">
        <a href="post.html"> 
          <h2>{props.title} </h2>
          <h3>{props.subTitle}</h3>
          </a>
          <p>Posted by <a href="author"> {props.author} </a> on {props.date}</p>
       
      </div>
  )
}


export default BlogPost