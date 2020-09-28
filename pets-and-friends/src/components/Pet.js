import React from "react"



function Pet(props) {

    return (
        <div>
           <li> 
             <p>Name: {props.animal.name} </p>
             <p>   Breed: {props.animal.breed}</p>
           </li> 
            
        </div>
    )
}

export default Pet