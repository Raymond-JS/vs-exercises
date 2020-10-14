import React from 'react'


function Header(props) {
    return (
        <header className="header">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'}alt="logo" /> <span>Don Corleone's Hit List</span>
        </header>
    )
}


export default Header