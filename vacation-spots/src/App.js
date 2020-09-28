import React from "react";
import Card from "./components/Card"
import vacationSpots from "./vacationSpots"

console.log(vacationSpots);


function App() {
  const locationsComponents = vacationSpots.map(locale => <Card key={locale.place}  vacationSpots={locale} />)
   

    return (
        <div className="container">
            {locationsComponents}
        </div>
       
    )
}



export default App;