import React from 'react'



function Badge(props) {
    // console.log(props)
    // console.log(props.info.badges)
    const allBadges = props.info.badges.map((info, i) => {
        console.log(i)
       return  (
           
           
           <div key={i} className="layout">
               <h2 className="allColumns colorStrip ">Badge: </h2>
                <p><b>Name:</b> {info.firstName} {info.lastName} </p>
                <p><b>Phone:</b> {info.phoneNum} </p>
                <p><b>Place of birth:</b>  {info.birthPlace}</p>
                <p><b>Favorite Food:</b> {info.favoriteFood}</p>
                <p><b>Email:</b> {info.email} </p>
           <div className="allColumns border">
               <p>{info.textArea} </p> 
           </div>

       </div>
       )
       
    })
    return (
           <div>
            {allBadges}
           </div>
        
    )
}


export default Badge