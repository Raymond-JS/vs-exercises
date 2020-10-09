import React from "react"

function Button(props) {
    return (
        <button className="btn" onClick={props.onClick}>Add Name</button>
    )
}

export default Button