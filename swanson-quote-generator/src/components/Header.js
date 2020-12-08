import React from "react"
import { Link }  from "react-router-dom"


function Header() {
    return (
        <header>
        <h1>Swanson's  Wisd🧠m!</h1>  
        <nav>
            <Link to="/about">about</Link> <Link to="/">quotes</Link> <Link to="/video">video</Link>
        </nav>
        </header>
        

    )
}

export default Header