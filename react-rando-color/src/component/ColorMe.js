import React from 'react'


function ColorMe(props) {
   let color = "#";
    props.color === "black" ? color = "black" : color += props.color;
    return (
        <div className="container"> 
          <h1>Random Color Component:</h1>
            <div className="stage"> 
                <figure className="circle" style={{background:color}}><span className="shadow"></span></figure>
            </div>
        </div>
    )
}


export default ColorMe