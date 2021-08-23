const express = require("express")
const inventoryRouter = express.Router()
const InventoryModel = require("../models/inventory.js")


// get all inventory
inventoryRouter.get("/", (req, res, next) => {
    InventoryModel.find((err, inventory) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })

})


// get one item from inventory
inventoryRouter.get("/:id", (req, res, next) => {
    InventoryModel.find(
        {_id: req.params.id},
        (err, foundItem) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(foundItem)
        })
})


// add new inventory
inventoryRouter.post("/", (req, res, next) => {
    const newInventory = new InventoryModel(req.body)
    newInventory.save((err, newInventory) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newInventory)
    })
})



// delete new inventory
inventoryRouter.delete("/:id", (req, res, next) => {
    InventoryModel.findOneAndDelete(
        {_id: req.params.id}, 
        (err, deletedItem) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`You have successfully deleted ${deletedItem.name} from the database.`)
    })
})

// Update Inventory
inventoryRouter.put("/:id", (req, res, next) => {
    InventoryModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        ( err, updatedItem) => {
            if ( err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
} )



module.exports = inventoryRouter