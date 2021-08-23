const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounty.js")






bountyRouter.route("/")
  .get((req, res, next) => {
     Bounty.find((err, bounties) => {
        if (err) {
           res.status(500)
           return next(err)
        }
        return res.status(200).send(bounties)
     })
     
  })
  .post((req, res, next) => {
      const newBounty = new Bounty(req.body)
      newBounty.save((err, savedBounty) => {
         if (err) {
            res.status(500)
            return next(err)
         }
         return res.status(201).send(savedBounty)
      })
      
        })

  

  bountyRouter.route("/:bountyId")
  .put((req, res, next) => {
     Bounty.findOneAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        {new: true}, 
        (err, updatedBounty) => {
         if (err) {
            res.status(500)
            return next(err)
         }
         return res.status(201).send(updatedBounty)
        }
     )
  })
  .delete((req, res, next) => {
     Bounty.findOneAndDelete(
        { _id: req.params.bountyId},
        (err, deletedItem) => {
           if (err) {
              res.status(500)
              return next(err)
           }
           res.status(200).send(`Successfully deleted  ${deletedItem.firstName} ${deletedItem.lastName} from database`)
        }
        )
  })


module.exports = bountyRouter