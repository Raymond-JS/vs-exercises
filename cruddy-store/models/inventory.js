const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// Inventory Blueprint
const InventorySchema = new Schema( {
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },



})




module.exports = mongoose.model("InventoryModel", InventorySchema)