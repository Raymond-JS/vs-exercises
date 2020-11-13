import React, { Component } from 'react'
import { Consumer } from "./UglyContext"


class UglySingleComponent extends Component {
    state = {
        title: "",
        image: "",
        description: "",
        
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState(
            {
                [name]: value
            }
        )
    }

    

    
    

    render() {
    
      return (  
      <div>
          {
        
            <Consumer>
               {
                   (obj) => {
                       
                       const uglyImages = obj.uglyThings.map((item, i) => 
                       {
                           return (
                               <div key={i}>
                                   <h2>{item.inEditMode ? <div>
                                   <input 
                                     placeholder= "edit title"
                                     className= "edit-title"
                                     name= "title"
                                     type="text"
                                     onChange={obj.handleChange }
                                     value={obj.title} /> 
                                   </div> : item.title}</h2>
                                   <div>
                                       <img src={item.image} alt="ugly" width="300" height="250" />
                                   </div>
                                       { item.inEditMode ? <div>
                                           <input
                                             placeholder= "edit description"
                                             className= "edit-title"
                                             name= "description"
                                             type="text" 
                                             onChange={obj.handleChange }
                                             value={obj.description} /> 
                                             <button className="btn" onClick={() => { 
                                        if ( !obj.title || !obj.description) {
                                         alert("Please fill out all fields")
                                     } else {
                                         obj.editSubmit(i, obj.title)
                                     }    
                                    } }> Save</button> 
                                       </div>
                                        : item.description }
                                   
                                   <div className="space">
                                       <button className="btn" onClick={() => obj.remove(i, obj.uglyThings )}>Delete</button>
                                       <button className="btn" onClick={() => obj.edit(i)}>Edit</button>
                                   </div>

                               </div>
                           )
                       })
                       return (
                           <div className="displayUgly">
                               {uglyImages}
                           </div>
                       )
                   }
               }
            </Consumer> 
            
    } 
    </div>
    )}
      }
    

    
export default UglySingleComponent