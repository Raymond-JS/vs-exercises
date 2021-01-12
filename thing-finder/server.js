const express = require("express")
const app = express()

app.use(express.json()) // looks for a request body and turns it into 'req.body'


// Routes
app.use("/inventory", require("./routes/inventoryRouter"))








app.listen(5000, () => {
    console.log("Server is running on PORT 5000")
})