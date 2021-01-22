import React, { useState, useEffect } from "react"
import axios from "axios"
import Bounty from "./components/Bounty"
import AddBounty from "./components/AddBounty"

function App() {
    const [ bounties, setBounty ] = useState([])
    

    function getBounty() {
        axios.get("/bounty")
        .then(res => setBounty(res.data))
        .catch(err => console.log(err))
    }

    function addBounty(newBounty){
        axios.post("/bounty", newBounty)
        .then(res => {
            setBounty(prevBounty => [...prevBounty, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteBounty(bountyId) {
        axios.delete(`/bounty/${bountyId}`)
        .then(res => {
            setBounty(prevBounty => prevBounty.filter( bounty => bounty._id !== bountyId ))
        })
        .catch(err => console.log(err))
    }

    function editBounty(updatedBounty, bountyId) {
        axios.put(`/bounty/${bountyId}`, updatedBounty)
          .then(res => {
              setBounty( prevBounty => prevBounty.map(bounty => bounty._id !== bountyId ? bounty : res.data
                   ))
          })
          .catch(err => console.log(err))   

    }

    useEffect(() => {
        getBounty()
          
    }, [])

    return (
        <div>
            <h1>Bounty Hunter:</h1>
            <AddBounty
              submit={addBounty} 
              btnText="Add Bounty"
              />
              <br /> 
            <div className="bounty-container"> 
            <h1>Targets:</h1>
            {
                bounties.map( bounty =>
                     <Bounty 
                     {...bounty} 
                     key={bounty._id} 
                     deleteBounty={deleteBounty}
                     editBounty={editBounty}
                     />)
            }
            </div>
        </div>
    )
}

export default App