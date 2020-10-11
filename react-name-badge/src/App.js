import React, { Component } from 'react'
import Form from './components/Form'
import Badge from './components/Badge'



class App extends Component {
  constructor() {
      super();
      this.state = {
          firstName: "",
          lastName: "",
          email: "",
          birthPlace: "",
          phoneNum: "",
          favoriteFood: "",
          textArea: "",
          badges: [],
          disabled: true
      }

      this.handleChange = this.handleChange.bind(this)
      this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }

  

  handleChange(event) {
      const {name, value } = event.target
      const form = document.querySelector("form")

      let accessSubmit = 
      form["firstName"].value.length >= 3 &&
      form["lastName"].value.length >= 3 &&
      form["email"].value.length >= 3 &&
      form["birthPlace"].value.length >= 3 &&
      form["phoneNum"].value.length >= 3 &&
      form["favoriteFood"].value.length >= 3 &&
      form["textArea"].value.length >= 3; 
        

      this.setState( 
           {
            [name]: value,
            disabled: !accessSubmit
          }
          
      )
     
      
      
      
  }
  
  onHandleSubmit(e) {
    const form = document.querySelector("form")
    e.preventDefault()
    
    const phone = document.querySelector("input[name='phoneNum']").value
    console.log(phone)
    if (isNaN(phone) || phone.length < 1 || phone.length > 11) {
        alert("Please input only numbers into *Phone field (no dashes or special characters)")
        form["phoneNum"].value = ""
    } else { 
    this.setState((prevState) => {
        const currentBadge = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            birthPlace: this.state.birthPlace,
            phoneNum: this.state.phoneNum,
            favoriteFood: this.state.favoriteFood,
            textArea: this.state.textArea,
      }


       const badgesList = prevState.badges.map(badge => badge);
       badgesList.push(currentBadge)
        
        return {   
            badges: badgesList 
            
        }
    }
     
  
    )
   
    form["firstName"].value = ""
    form["lastName"].value = ""
    form["email"].value = ""
    form["birthPlace"].value = ""
    form["phoneNum"].value = ""
    form["favoriteFood"].value = ""
    form["textArea"].value = "" 
}
}
 
 


  
    render() {
        const info = this.state
        
    return (
        
        <div>
            
            <Form onClick={this.onHandleSubmit} onChange={this.handleChange} disabled={this.state.disabled} />

            
            
            
            <Badge info={info}/>
            
    




        </div>
      
    )

  }
    
}



export default App