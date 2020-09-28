import React from "react";



function Card(props){
   let money;
    if (props.vacationSpots.price < 500) {
        money = "$";
    } else if (props.vacationSpots.price < 1000) {
        money = "$$"
    } else {
        money = "$$$"
    }
    
    return (
        <div className="cardStyle">
            <h1>
                {props.vacationSpots.place}
            </h1>
            <div>{money}</div>
            <p> Best Time To Go: {props.vacationSpots.timeToGo}</p>
    <span className="price"> Price: ${props.vacationSpots.price} </span>
    
        </div>
    )
}

export default Card;