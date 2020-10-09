import React from "react"


function List(props) {
const listItem = props.listNames.map((item, i) => <li key={item}>{item}</li>)
    return (
        <ul>
            {listItem}
        </ul>
    )
}


export default List