import React from 'react';
import Button from './Button'
import Dice from './Dice'


class DiceBox extends React.Component {
    constructor() {
        super();
        this.state = {
            numbers: [0,0,0,0,0,0]
        }
        this.randomNum = this.randomNum.bind(this);
    }


    randomNum() {
        let numbers = [];
        for (let i = 0; i < 6; i++) {
            const randomNum = Math.floor(Math.random() * 6) + 1;
            numbers.push(randomNum)
        }

        // let num1 = Math.floor(Math.random() * 6) + 1;
        // let num2 = Math.floor(Math.random() * 6) + 1;
        // let num3 = Math.floor(Math.random() * 6) + 1;
        // let num4 = Math.floor(Math.random() * 6) + 1;
        // let num5 = Math.floor(Math.random() * 6) + 1;
        // let num6 = Math.floor(Math.random() * 6) + 1;
        // numbers.push(num1, num2, num3, num4, num5, num6);
        
        this.setState(()=> {
            return {
                numbers: numbers
            }
        })

    }

    formatNums(arr) {
        return 'Your Lucky Numbers Are: ' + arr.join(', ');
    }
    
    
    render() {
       
        return (
            <div className="container">
                 <Dice nums={this.state.numbers} />
                 <Button onClick={this.randomNum}/>
                <h3>{this.formatNums(this.state.numbers)}</h3>

            </div>
        )
    }
}


export default DiceBox