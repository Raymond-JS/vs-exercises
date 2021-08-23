const mongoose = require("mongoose")
const Schema = mongoose.Schema


// Bounties Blueprint
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        enum: ["jedi", "sith"],
        required: true
    },

})


module.exports = mongoose.model("Bounty", bountySchema)