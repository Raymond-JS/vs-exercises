import React from "react"


function Square(props) {
    
  console.log(props.color)
  let styles = {
      backgroundColor: props.color
  };
  

    return (
        <div style={styles} >
                
        </div>
    )
}


export default Square
