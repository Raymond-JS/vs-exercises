const express = require('express')
const app = express()
const morgan = require("morgan")

// Middleware
app.use(express.json()) // Looks for a request body and turns it into 'req.body
app.use(morgan("dev")) // Logs requests to the console.

// Routes
app.use("/bounty", require("./routes/bounty.js"))


app.listen(7200, () => {
    console.log("Server is running on PORT 7200")
})