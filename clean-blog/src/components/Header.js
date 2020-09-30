import React from "react"
import Navbar from "./Navbar"

function Header() {
    return (
    
        <div className="header ">
            <div className="overlay"> 
            <div className="top-display">
            <span className="brand">Start Bootstrap</span>
            <Navbar />
            </div>
            
            <h1>Clean Blog</h1>
            <p>A Blog Theme by Start Bootstrap</p>
            </div>
        </div>
       
    )
}

export default Header