const express = require("express")
const app = express()
const { v4: uuid } = require("uuid")

// middleware
app.use(express.json()) // looks for a request body, and turns it into 'req.body'



// Fake Data 
const todos = [
    {
        name: "Walk dog.",
        description: "Take Fido out to pee",
        imageURL: "https://placeimg.com/640/480/tech",
        completed: false,
        _id: uuid()
    },
    {
        name: "Code",
        description: "Practice coding for an hour",
        imageURL: "https://placeimg.com/640/480/animals",
        completed: true,
        _id: uuid()
    },
    {
        name: "Business plan.",
        description: "Work on details of new venture.",
        imageURL: "https://placeimg.com/640/480/nature",
        completed: false,
        _id: uuid()
    },
    {
        name: "Read",
        description: "Spend an hour reading quality book",
        imageURL: "https://placeimg.com/640/480/people",
        completed: true,
        _id: uuid()
    }
]


// post one new todo
app.post("/todos", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send( `New ${newTodo.name} todo added to database.`)
})

// Get all todos
app.get("/todos", (req, res) => {
    res.send(todos)
})

// Get one todo
app.get("/todos/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

// update todo
app.put("/todos/:todoId", (req, res) => {
    const todoToUpdate = req.params.todoId
    const indexTodo = todos.findIndex(todo => todo._id === todoToUpdate)
    const updatedTodo = Object.assign(todos[indexTodo], req.body)
    res.send(updatedTodo)
})

// delete todo

app.delete("/todos/:todoId", (req, res) => {
    const todoToDelete = req.params.todoId
    const indexTodo = todos.findIndex(todo => todo._id === todoToDelete)
    todos.splice(indexTodo, 1)
    res.send("Successfully deleted todo!")
})






app.listen(7700, () => {
    console.log("app is running on PORT 7700")
})