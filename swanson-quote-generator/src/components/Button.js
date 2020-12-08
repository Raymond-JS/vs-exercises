import React from "react"
const axios = require('axios')


function Button(props) {
    // Generate new swanson quote on button push.
    const generateQuote = () => {
        axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then(res => {
           props.newQuote(res.data)
        })
    }

    return (
        <button  onClick={generateQuote} className="btn">Click</button>
    )
}


export default Button