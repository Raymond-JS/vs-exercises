import React from 'react'

function Form(props) {
  // console.log(props)
    return (
        <form className="layout">
            <input 
              
              type="text" 
              className="inputLayout" 
              placeholder="First Name" 
              name="firstName" 
              value={props.firstName} 
              onChange={props.onChange} 
              />
            <input 
              type="text" 
              className="inputLayout" 
              placeholder="Last Name" 
              name="lastName" 
              value={props.lastName} 
              onChange={props.onChange}
              />
            <input 
              type="email" 
              name="email" 
              className="inputLayout" 
              placeholder="Email"  
              value={props.email} 
              onChange={props.onChange}
              />

            <input 
              type="text" 
              name="birthPlace" 
              className="inputLayout" 
              placeholder="Place of Birth" 
              value={props.birthPlace} 
              onChange={props.onChange}
              />
            <input 
              type="tel" 
              name="phoneNum" 
              className="inputLayout" 
              placeholder="Phone" 
              value={props.phoneNum} 
              onChange={props.onChange}
              />

            <input 
              type="text" 
              name="favoriteFood" 
              className="inputLayout" 
              placeholder="Favorite Food" 
              value={props.favoriteFood} 
              onChange={props.onChange}
              />

            <textarea 
              name="textArea"  
              className="txtArea" 
              value={props.value} 
              onChange={props.onChange} 
              placeholder="Tell us about yourself"/>

         

            <input type="submit" className="subBtn" onClick={props.onClick}   disabled={props.disabled} 
            />
        </form>
    )
}


export default Form