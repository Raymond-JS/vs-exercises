import React from 'react'
import Target from './components/Target'
import Header from './components/Header'



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            targets: []
        }
    }


    componentDidMount() {
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response => response.json())
        .then(data => this.setState( { targets: data }))
          

    }

    render() {
        console.log(this.state.targets)
        const allTargets = this.state.targets.map((item, i) => {
            return <Target key={i} src={item.image} alt={item.name} name={item.name} />
        })
        return (
            <div>
                <Header />
                <div className="targetContainer">
                    {allTargets}
                    
                </div>
            </div>
            
        )
    }


}


export default App