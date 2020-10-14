import React from 'react';



function Target(props) {
    return (
        <div className="eachTarget">
            <img className="imgSize" src={props.src} alt={props.alt} />
            <div className="nameBanner">
              <p>{props.name}</p>
            </div>
            


        </div>
    )
}


export default Target