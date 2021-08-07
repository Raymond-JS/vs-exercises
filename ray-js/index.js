const intro = document.querySelector(".intro")
const title = document.querySelector(".title")
const about = document.querySelector(".aboutInfo")
const projects = document.querySelector(".projects")
const navBar = document.querySelector("nav")
const footer = document.querySelector("footer")




const name = "Ray Johnson"
const job = "web developer"

function print(location, text) {  
    let i = 0;
    location.innerHTML = "";
    let id = setInterval(() => {
        if (i >= text.length) {
          clearInterval(id);
        } else {
          location.innerHTML += text[i];
          i++;
        }
      }, 170);
    }



window.addEventListener('DOMContentLoaded', () => {
  print(intro, name)
  print(title, job)
  setTimeout(() => {
    navBar.classList.add("visible")
    navBar.classList.remove("hidden")
    about.classList.add("visible")
    about.classList.remove("hidden")
    footer.classList.add("visible")
    footer.classList.remove("hidden")
  }, 2500)
});




function display(block) {
  if (block.style.display === "none") {
    block.style.display = "block"
  } else {
    block.style.display = "none"
  }
   
  
}


function showProjects() {
  projects.classList.add("show")
  document.body.style.overflow = "hidden"
}

function hideProjects() {
  projects.classList.remove("show")
  document.body.style.overflow = "auto"
}