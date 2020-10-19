import React from "react" 
import ColorMe from "./component/ColorMe"
const axios = require("axios");


class App extends React.Component {
  constructor() {
      super();
      this.state = {
          color: "black"
              }
  }

    componentDidMount() {
        axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`).then( response =>  {
            let newColor = response.data.new_color;
            this.setState(
                {
                    color: newColor
                }
            )
        }
        )
    }

    
   


    render() {
        return(
            <div> 
               
                <ColorMe  color={this.state.color}/>
            </div>
        )

    }

}


export default App