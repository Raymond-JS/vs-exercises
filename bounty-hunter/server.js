const express = require('express')
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Middleware
app.use(express.json()) // Looks for a request body and turns it into 'req.body
app.use(morgan("dev")) // Logs requests to the console.

// Connect to DB
mongoose.connect("mongodb://localhost:27017/bountyhunter", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  
},
 () => console.log("Connected to the database")
)

// Routes
app.use("/bounty", require("./routes/bounty.js"))



// Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(7200, () => {
    console.log("Server is running on PORT 7200")
})