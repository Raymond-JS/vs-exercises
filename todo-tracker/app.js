// console.log demonstrates success of methods that can't be shown (ex: marking task completed in database) on DOM

// Grabbing Elements From The Page
const container = document.getElementById("container");
const ul = document.querySelector("ul");
const form = document['create-todo'];



// Adding Event Listener To Form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  postTodo();
})

//Function to pull todos from database using axios GET method
function listTodos() {
  axios.get("https://api.vschool.io/raymond/todo")
  .then(res => {
      createTodo(res.data);
    })
  .catch(err => console.log(err));

}

//Calling function to display todos on page load
listTodos();




//Creating elements, adding attributes and placing them on page for individual todos
  function createTodo(todos){  

    for (let i = 0; i < todos.length; i++) {
      const listItem = document.createElement("li");
      const img = document.createElement("img");
      const checkbox = document.createElement("input");
      const del = document.createElement("img");
      del.src = "images/delete.png";
      del.setAttribute("id", todos[i]._id)
      del.setAttribute("class", "d-style")
      del.setAttribute("onclick", "deleteTodo(id)")
      checkbox.type = "checkbox";
      checkbox.setAttribute("id", todos[i]._id);
      checkbox.setAttribute("onclick", "updateTodo(id)");
      if (todos[i].completed ===  true) {
        listItem.classList.add("finished");
        checkbox.checked = true;
      } else {
        listItem.classList.remove("finished");
      }
      
      if (todos[i].imgUrl === undefined) {
        img.src = "images/empty.png";
      } else {
        img.src = todos[i].imgUrl;
      } 
        
        listItem.innerHTML = 
        listItem.textContent =  todos[i].title;
        ul.appendChild(listItem);
        listItem.prepend(checkbox);
        listItem.appendChild(del);
        listItem.appendChild(img);      
        
    }
    
  }


  // Using Axios POST method to post a new todo to database
function postTodo() {
  let newItem = {
    "title": form.title.value,
    "price": form.price.value,
    "description": form.description.value,
    "imgUrl": form.img.value
  }

  if (form.img.value === "" || form.img.value === 404 ) {
    newItem.imgUrl = "images/empty.png";
}
  ul.innerHTML = "" //clearing out UL so it doesn't repeat posts
  
  axios.post("https://api.vschool.io/raymond/todo", newItem)
    .then(res => console.log(res))
    .catch(err => console.log(err));
   
    form.title.value = "";
    form.price.value = "";
    form.description.value = "";
    form.img.value = "";
   
    setTimeout(listTodos, 50); //listing todos after post has been sent

} 


  


//Demonstrating Axios Put method by updating completed key/value pair

function updateTodo(clicked_id) {
  let completed;
  event.target.parentNode.classList.toggle("finished")
  if (event.target.parentNode.className === "finished") {
    console.log("Y1y! finally gotcha!")
    completed = {
      "completed": true
    }
  } else {
     completed = {
      "completed": false
    }
  }
   let baseUrl = "https://api.vschool.io/raymond/todo/";
   baseUrl += clicked_id;

     axios.put(baseUrl, completed)
     .then(res => console.log(res.data))
     .catch(err => console.log(err));
   
 }


 //Demonstrating axios destroy/delete method by removing data from database

function deleteTodo(clicked_id) { 
  event.target.parentNode.style.display = "none";
  let baseUrl = "https://api.vschool.io/raymond/todo/";
  baseUrl += clicked_id;
  
  axios.delete(baseUrl)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
}