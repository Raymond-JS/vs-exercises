import React from 'react'
import Square from './Square'




class Container extends React.Component {
   
    constructor() {
        super();
        this.state = {
            colors : ["white", "white", "white", "whit"]
        }
       this.handleClick = this.handleClick.bind(this)
       this.handleTopHalf = this.handleTopHalf.bind(this)
       this.handleBtnLeft = this.handleBtnLeft.bind(this)
       this.handleBtnRight = this.handleBtnRight.bind(this)
       
    }

    
    handleClick() {
        this.setState(prevState => {
            if ( prevState.colors[0] === "white" ) {
                return {
                    colors: [ "black", "black", "black", "black" ]
                }
            } else {
                return {
                    colors: [ "white", "white", "white", "white" ]
                }
            }
        })
        
    }
    

    handleTopHalf() {
        this.setState(prevState => {
            return {
                colors: ["purple", "purple", prevState, prevState]
            }
        })

    }

    handleBtnLeft() {
        this.setState(prevState => {
            return {
                colors: [prevState, prevState, "blue", prevState]
            }
        })

    }

    handleBtnRight() {
        this.setState(prevState => {
            return {
                colors: [prevState, prevState, prevState, "blue"]
            }
        })
    }


    


    render() {
        const allSquares = this.state.colors.map( (color, i)=> {
            return   <Square key={i} color={color} />
       })
        
        return (
            <div> 
                <div className="container">
                    
                    {allSquares}            
                </div>
                <div className="btnContainer">
                  <button className="btn"  onClick={this.handleClick}>Black/White <span></span></button>
                  <button className="btn"  onClick={this.handleTopHalf}>Purple <span></span></button>
                  <button className="btn"  onClick={this.handleBtnLeft}>Blue 1<span></span></button>
                  <button className="btn"  onClick={this.handleBtnRight}>Blue 2 <span></span></button>
                  
                </div>
                
            </div>
        )
    }
    
}


export default Container