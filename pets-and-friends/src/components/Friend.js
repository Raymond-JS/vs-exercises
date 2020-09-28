import React from "react"
import Pet from "./Pet"

function Friend(props) {
  const petComponent = props.friend.pets.map( pet => <Pet key={pet.name} animal={pet}/>)
console.log(props.friend.pets)
  return (
      <div className="container"> 
      <div className="header">
         <h1>{props.friend.name} </h1> 
         <h2>Age: {props.friend.age}</h2> 
      </div>
         
         <h3>Pets:</h3>
         <ul>  
           {petComponent}
        </ul> 
      </div>
      
  )
}

export default Friend