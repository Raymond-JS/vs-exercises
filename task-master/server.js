const express = require("express")
const app = express();
const morgan = require("morgan")
const mongoose = require("mongoose")


// middelware firing on every request
app.use(express.json()) // looks for req.body
app.use(morgan("dev"))

// Connect to DB
mongoose.connect("mongodb://localhost:27017/tasksdb", 
 {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
 },

 () => console.log("Connected to database ")

)

// Route
app.use("/tasks", require("./routes/taskRouter.js"))




// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})



app.listen(8000, () => {
    console.log("Server listening on PORT 8000")
})