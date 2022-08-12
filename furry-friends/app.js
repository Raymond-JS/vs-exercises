const button = document.querySelector(".scrape-btn")
const moreBtn = document.querySelector(".more-button")
const wrapper = document.querySelector(".content")
let after = '';
const hasPic = "https://i.redd.it/";
const smilingDogs = "https://www.reddit.com/r/animalssmiling"




// Fetch Picture Function

const fetchPics = () => {

    if (document.getElementById("pics")) {
        document.getElementById("pics").remove()
    }

    let parentDiv = document.createElement("div");
    parentDiv.id = "pics";
    parentDiv.style.marginBottom = "150px"

    fetch(`${smilingDogs}.json?after=${after}`).then(response => response.json())
    .then(data => {
        console.log(data)
        after = data.data.after;
        let contentArray = data.data.children
        console.log(after)
        contentArray.forEach(content => {
            console.log(content.data.url)
            if (!content.data.url.includes(hasPic)) {
                console.log("No image. Skipped")
            
            } else {
                let div = document.createElement("div");
                let h4 = document.createElement("h4");
                let image = document.createElement("img");
                image.src = content.data.url;
                h4.textContent = content.data.title;
                
                    

                // append children
                div.appendChild(h4)
                div.appendChild(image)
                parentDiv.appendChild(div)
            }
            
        })
     
        wrapper.appendChild(parentDiv)
        
    })
}

window.onload = function () {
    fetchPics();
   
}
 moreBtn.addEventListener("click", () => {
		console.log("clicked");
		fetchPics();
 });


