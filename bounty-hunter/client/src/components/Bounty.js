import React, { useState } from "react"
import AddBounty from "./AddBounty"

function Bounty(props) {
    const {firstName, lastName, living, price, title, _id } = props
    const [ editToggle, setEditToggle ] = useState(false)
    
    return (
        <div className="bounty">
            { !editToggle ?
               <>
                <h1>Title: {title}</h1>
                <h2>Name: {firstName} {lastName}</h2>
                <h3>Status: { living === "true" ? "Alive" : "Dead"}</h3>
                <p>Price: ${price}</p>
                <button onClick={() => props.deleteBounty(_id)}>Delete</button>
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                </>
            :
                <>
                <AddBounty 
                    firstName={firstName}
                    lastName={lastName}
                    living={living}
                    price={price}
                    title={title}
                    _id={_id}
                    btnText="Submit Edit"
                    submit={props.editBounty}
                    onclick={setEditToggle}
                />
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        </div>
    )
}


export default Bounty