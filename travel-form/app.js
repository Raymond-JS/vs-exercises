let form = document.registration;



form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstName = form["first-name"].value;
    let lastName = form["last-name"].value;
    let age = form.age.value;
    let gender = form.gender.value;
    let destination = form.destination.value;
    let dietary = [];
    let checkedBoxes = document.querySelectorAll("input[name=diet]:checked");
    for ( let i = 0; i < checkedBoxes.length; i++ ) {
            dietary.push(checkedBoxes[i].value);
    }

    alert(`
      First name: ${firstName}
      Last name: ${lastName}
      Age: ${age}
      Gender: ${gender}
      Location: ${destination}
      Dietary restrictions: ${dietary}

    `)
    form["first-name"].value = "";
    form["last-name"].value = "";
    form.age.value = "";
    
})