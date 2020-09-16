//Base Url https://api.vschool.io/pokemon
const displayPoke = document.getElementById("pokemon-display");



const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONraw = xhr.responseText;
        getPokes(JSONraw);
    }
}

function getPokes(rawdata) {
    const data = JSON.parse(rawdata);
    console.log(data);
    const allPokeObjs = data.objects[0].pokemon
    console.log(data.objects[0].pokemon)
    for (let i = 0; i < allPokeObjs.length; i++ ) {
        let name = document.createElement("h2");
         name.textContent = i + ": "+ allPokeObjs[i].name;
         displayPoke.appendChild(name);
    }
    
}