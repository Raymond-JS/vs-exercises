import React from 'react'


class Button extends React.Component {
    render() {
        return (
            <button className="coolBtn" onClick={() => this.props.onClick()}>Push 4 Lucky Numbers</button>
        )
    }
    
}


export default Button