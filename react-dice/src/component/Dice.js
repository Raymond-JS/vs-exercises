import React from 'react';



function Dice(props) {
    return (
        <div className="cube">
        <div className="top">{props.nums}</div>
        <div className="right">{props.nums}</div>
        <div className="bottom">{props.nums}</div>
        <div className="left">{props.nums}</div>
        <div className="front">{props.nums}</div>
        <div className="back">{props.nums}</div>
</div>
    )
}

export default Dice