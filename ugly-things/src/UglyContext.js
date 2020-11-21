import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()



class UglyContext extends Component {

     state = { 
        title:"",
        image: "",
        description: "",
        editing: false,
        uglyThings: []
    }
 
    


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState(
            {
                [name]: value
            }
        )
    }
    uglySubmit = (title, img , description ) => {
        
      let newuglyObj =  {
            title: title,
            image: img,
            description: description,
            inEditMode: false
        }
        
        this.setState( prevState => ( {
            title:"",
            image: "",
            description: "",
            uglyThings: [ ...prevState.uglyThings, newuglyObj]
        }   
        
        ) 
        )
       
        

    }

    submitEdit = (i, valOne, valTwo) => {
         let indexNum = i
         let theUglyArray = this.state.uglyThings;
         let editedArr = [];
        for (let x = 0; x < theUglyArray.length; x++) {
            if ( x === indexNum  ) {
                editedArr.push(theUglyArray[indexNum])   
            }
            
        }
        editedArr[0].title = this.state.title
        editedArr[0].description = this.state.description
        editedArr[0].inEditMode = false
        this.setState(prevState => ({
            title:"",
            image: "",
            description: "",
            editing: false,
        }))
        console.log(this.state.uglyThings)
        
    }

    remove = (i, arr) => { 
        arr.splice(i, 1)
        this.setState( {
            uglyThings: arr,
            title:"",
            image: "",
            description: "",
        })
       
     }

   


     edit = (i) => {   
         let indexNum = i
         let theUglyArray = this.state.uglyThings;
        
        for (let x = 0; x < theUglyArray.length; x++) {
            if ( x === indexNum  ) {
                theUglyArray[indexNum].inEditMode = true     
            }
            
        }
       
        this.setState( prevState => ({
            title:"",
            image: "",
            description: "",
            editing: true,
        }))
       
       
        
        
     }

    


  render() {
      return (
          <Provider value={ 
              {
                title: this.state.title,
                image: this.state.image,
                description: this.state.description,
                editing: this.state.editing,
                handleChange: this.handleChange,
                uglyThings: this.state.uglyThings, 
                uglySubmit: this.uglySubmit,
                editSubmit: this.submitEdit,
                remove: this.remove,
                edit: this.edit
              } 
              }>

            {this.props.children}

          </Provider>
          
      )
  }
}


export { UglyContext, Consumer }