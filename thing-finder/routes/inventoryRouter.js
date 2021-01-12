const express = require('express')
const inventoryRouter = express.Router()



const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

inventoryRouter.get('/:type', (req, res) => {
    const searchThing = req.params.type
    const foundThings = inventoryItems.filter(item => item.type === searchThing)
    res.send(foundThings)
})


inventoryRouter.get("/search/type", (req, res) => {
    const searchingFor = req.query.type
    const foundThings = inventoryItems.filter(item => item.type === searchingFor)
    res.send(foundThings)
})



module.exports = inventoryRouter