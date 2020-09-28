import React from "react"
import Friend from "./Friend";
import friendsArray from "../friendsArray"

console.log(friendsArray)
function FriendList() {
 const friendComponent = friendsArray.map(person => <Friend key={person.name} friend={person}/> )

    return (
        <div className="box">
            {friendComponent}
        </div>
    )

}




export default FriendList;