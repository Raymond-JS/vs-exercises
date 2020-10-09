import React from "react"
import Button from "./components/Button"
import List from "./components/List"


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName: "",
            namesList: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState( {
            [name] : value
        })

    }

    onHandleSubmit(e) {
        const form = document.querySelector("form")
        e.preventDefault()
        this.setState((prevState) => {
            const list = prevState.namesList.concat(" " + this.state.fullName)
            
            return {
                namesList: list,
                fullName: " "
            }
        } 
        )
        form["fullName"].value = " "
       
    }

    
    render() {
        return (
            <form className="container"> 
            <p>Type your name in the box below to see the text displayed instantly.<br /> Click the button to have your text added to a list that will display below.</p>
                <input type="text" placeholder="Enter Name" name="fullName" onChange={this.handleChange}/>
                <h1>{this.state.fullName}</h1>
                <Button onClick={this.onHandleSubmit}/>
                <List listNames={this.state.namesList} />
            </form>
        )




    }
          

    
    
}

export default App