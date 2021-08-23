const express = require("express");
const app = express();
const morgan = require("morgan")
const mongoose = require("mongoose")



app.use(express.json())
app.use(morgan("dev"))



mongoose.connect("mongodb://localhost:27017/crud_inventory", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
        
},
    () => console.log("Connected to the database")
)

app.use("/", require("./routes/inventoryRouter"))



app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errorMsg: err.message})
})


app.listen( 7000, () => {
    console.log(`Listening on PORT 7000`)
})