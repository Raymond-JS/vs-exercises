import React from 'react'
import { Consumer } from "./UglyContext"


function InfoInput(){

        return (
            <div> 
            <header>
                            <h1>UGLY!</h1>
                            Post your ugly images below:
                          </header>
            <Consumer>
                    { (obj) => (
                        <form id="uglyForm" className={obj.editing === false ? "uglyForm" : "hidden"} noValidate>
                        <input 
                        type="text"
                        name="title" 
                        placeholder="Title" 
                        value={obj.title} 
                        onChange={obj.handleChange}
                        />
        
                        <input name="image" 
                        type="text"
                        placeholder="Img URL" 
                        value={obj.image} 
                        onChange={obj.handleChange}
                        />
        
        
                        <textarea 
                        name="description" 
                        placeholder="Share your thoughts on your ugly image" value={obj.description} 
                        onChange={obj.handleChange}>
                        </textarea>
                        <button className="btn" onClick={ (e) => { 
                            e.preventDefault() 
                            if (!obj.image || !obj.title || !obj.description) {
                                alert("Please fill out all fields")
                            } else {
                                obj.uglySubmit(obj.title, obj.image, obj.description)
                            }
                            
                        }} >Submit</button> 
                        </form>
                    ) 
}
            </Consumer> 
            </div>
            )          
}
    
    


export default InfoInput