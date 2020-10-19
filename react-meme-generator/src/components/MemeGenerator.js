import React from 'react';


class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState(
                    {
                        allMemeImgs: memes
                    }
                
                )
                console.log(this.state)
            });
        
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState(
            {
                [name]: value
            }
        )

    }
   
    onClick(e) {
        e.preventDefault();
        let randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        let randomMemeImg = this.state.allMemeImgs[randomNum].url;
        console.log(randomMemeImg)
        this.setState(
            {
                randomImage: randomMemeImg
            }
        )
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                   

                        <input type="text" name="topText" placeholder="Top Text" value={this.state.topText} onChange={this.handleChange}/>

                        <input type="text" name="bottomText" placeholder="bottom Text" value={this.state.bottomText} onChange={this.handleChange}/>
                        
                       
                
                    <button onClick={this.onClick}>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
          
        )
    }
}




export default MemeGenerator