const express = require("express")
const bountyRouter = express.Router()
const { v4: uuid} = require("uuid")



// Fake Data
const bounties = [
    { firstName: "Mike",
      lastName: "Rod",
      living: true,
      price: 500,
      title: "Jedi",
      _id: uuid()
   },
   { firstName: "Jake",
      lastName: "Black",
      living: false,
      price: 1000,
      title: "Sith",
      _id: uuid()
   },
   { firstName: "Dom",
      lastName: "Danger",
      living: true,
      price: 700,
      title: "Jedi",
      _id: uuid()
   },

]



bountyRouter.route("/")
  .get((req, res) => {
      res.send(bounties)
  })
  .post((req, res) => {
      const newBounty = req.body
      newBounty._id = uuid()
      bounties.push(newBounty)
      res.send(newBounty)
  })

  

  bountyRouter.route("/:bountyId")
  .put((req, res) => {
     const bountyToUpdate = req.params.bountyId
     const updatedObject = req.body
     const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyToUpdate)
     const updatedBounty = Object.assign(bounties[bountyIndex], updatedObject)
     res.send(updatedBounty)
  })
  .delete((req, res) => {
      const bountyToDelete = req.params.bountyId
      const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyToDelete)
      bounties.splice(bountyIndex, 1)
      res.send("Bounty deleted successfully")
  })


module.exports = bountyRouter