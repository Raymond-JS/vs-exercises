import React, {useState, useEffect} from "react"
import Button from "./components/Button"
import Ron from "./images/RonSwanson.png"
const axios = require('axios')

function Quote() {
    const [quote, changeQuote] = useState("");
    // Grab first quote on mount.
    useEffect(()=> {
        axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then(res => changeQuote(res.data))
    }, [])

    // Function to update state
    function ronNewWisdom(txt) {
        changeQuote(txt)
    }

    return (
        <div className="quoteContainer">
            <div className="speech-bubble">
              <p> "{quote}" - Ron Swanson</p>
            </div>
            <img src={Ron} alt="Ron Swanson" />
             
            <Button newQuote={ronNewWisdom}/>
        </div>
    )
}



export default Quote